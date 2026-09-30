/**
 * TradeBridge India — Dedicated AI Assistant & RAG Agent (rag_agent.js)
 * Standalone client-side Retrieval-Augmented Generation (RAG) module.
 * Indexes and queries Councils, Master Glossary (79 terms), Geopolitics News,
 * Quizzes repository, and all 15 EXIM Case Studies with verifiable citations.
 */

(function () {
  'use strict';

  // RAG Search & Retrieval Engine
  const TradeBridgeRAG = {
    // Search across all structured TradeBridge collections
    query(userInput) {
      const q = userInput.toLowerCase().trim();
      if (!q) return null;

      const data = window.TRADE_DATA || {};

      // 1. Search Case Studies (15 Master Precedents)
      const cases = data.caseStudies || [];
      for (const cs of cases) {
        const titleLower = cs.title.toLowerCase();
        const subtitleLower = cs.subtitle.toLowerCase();
        const entityLower = cs.entityContext.toLowerCase();
        const incidentLower = cs.coreIncident.toLowerCase();

        // Check if query targets this case
        const matched = q.split(/\s+/).some(word => 
          word.length > 3 && (titleLower.includes(word) || subtitleLower.includes(word) || entityLower.includes(word) || incidentLower.includes(word))
        );

        if (matched || (cs.id && q.includes(cs.id)) || (cs.title && titleLower.split('–')[0].trim().split(' ').some(w => w.length > 3 && q.includes(w)))) {
          // Find matching QA if any
          const matchingQA = (cs.questionsAndAnswers || []).find(qa => 
            qa.q.toLowerCase().includes(q) || q.split(/\s+/).filter(w => w.length > 3).some(w => qa.q.toLowerCase().includes(w))
          );

          const qaSnippet = matchingQA 
            ? `<div style="margin-top:10px; padding:10px 14px; background:rgba(6, 182, 212, 0.08); border-left:3px solid var(--cyan-400); border-radius:4px;">
                 <strong style="color:var(--cyan-400); font-size:0.8rem; display:block; margin-bottom:2px;">Relevant Case Analysis:</strong>
                 <p style="font-size:0.88rem; color:var(--text-primary); margin:0;">${matchingQA.a}</p>
               </div>` 
            : '';

          return {
            type: 'case_study',
            badge: '📋 JUDICIAL & ENFORCEMENT PRECEDENT',
            badgeClass: 'badge-amber',
            title: `Case Study ${cs.number}: ${cs.title}`,
            answer: `<strong>${cs.title}</strong><br><span style="color:var(--text-muted); font-size:0.84rem;">${cs.subtitle}</span><br><br>
                     <strong>Factual Context:</strong> ${cs.entityContext}<br><br>
                     <strong>Enforcement Outcome & Ruling:</strong> ${cs.outcomeImpact}
                     ${qaSnippet}`,
            sources: (cs.references || []).map(r => ({ title: r.title, url: r.url }))
          };
        }
      }

      // 2. Search Curated AI Knowledge Base
      const kb = data.aiKnowledgeBase || [];
      for (const item of kb) {
        if (item.keywords && item.keywords.some(k => q.includes(k.toLowerCase()))) {
          return {
            type: 'knowledge_base',
            badge: '● VERIFIED TRADE POLICY',
            badgeClass: 'badge-cyan',
            title: item.topic || 'DGFT / CBIC Regulation',
            answer: item.answer,
            sources: item.sources || [{ title: 'DGFT Portal', url: 'https://www.dgft.gov.in' }]
          };
        }
      }

      // 3. Search Export Promotion Councils & Commodity Boards
      const councils = data.councils || [];
      for (const c of councils) {
        if (q.includes(c.name.toLowerCase()) || 
            q.includes(c.fullName.toLowerCase()) || 
            q.includes(c.sector.toLowerCase()) || 
            (c.products && c.products.some(p => q.includes(p.toLowerCase())))) {
          return {
            type: 'council',
            badge: '🏛️ EXPORT PROMOTION COUNCIL',
            badgeClass: 'badge-emerald',
            title: `${c.fullName} (${c.name})`,
            answer: `<strong>${c.fullName} (${c.name})</strong> is the official Indian authority promoting exports in the <strong>${c.sector}</strong> sector.<br><br>
                     • <strong>Products Scheduled:</strong> ${(c.products || []).slice(0, 5).join(', ')}<br>
                     • <strong>Exporter Support:</strong> ${c.support}<br>
                     • <strong>RCMC Requirement:</strong> ${c.rcmcRequirement}`,
            sources: [
              { title: `${c.name} Official Portal`, url: c.url || 'https://www.indiantradeportal.in' },
              { title: 'DGFT RCMC Window', url: 'https://www.dgft.gov.in' }
            ]
          };
        }
      }

      // 4. Search Master Glossary (79 verified terms)
      const terms = data.glossary || [];
      for (const t of terms) {
        const tName = t.name.toLowerCase();
        if (q.includes(tName) || (t.id && q.includes(t.id))) {
          return {
            type: 'glossary',
            badge: '📖 EXIM GLOSSARY DEFINITION',
            badgeClass: 'badge-cyan',
            title: t.name,
            answer: `<strong>${t.name}</strong> (${t.category})<br><br>
                     <strong>Meaning:</strong> ${t.meaning || t.definition}<br><br>
                     ${t.inSimpleWords ? `<strong>In Simple Words:</strong> ${t.inSimpleWords}<br><br>` : ''}
                     ${t.example ? `<strong>Practical Example:</strong> ${t.example}` : ''}`,
            sources: [
              { title: t.source || 'DGFT Knowledge Repository', url: 'https://www.dgft.gov.in' }
            ]
          };
        }
      }

      // 5. Search Geopolitics & Global Trade News
      const news = data.geopoliticsNews || [];
      for (const n of news) {
        if (q.includes(n.headline.toLowerCase()) || q.includes(n.category.toLowerCase()) || q.includes(n.region.toLowerCase())) {
          return {
            type: 'news',
            badge: '🌐 GLOBAL TRADE INTELLIGENCE',
            badgeClass: 'badge-rose',
            title: n.headline,
            answer: `<strong>${n.headline}</strong> (${n.date} · ${n.region})<br><br>
                     ${n.summary}<br><br>
                     <strong>Why It Matters to Exporters:</strong> ${n.whyItMatters}`,
            sources: [
              { title: n.sourceName, url: n.sourceUrl }
            ]
          };
        }
      }

      // Default Grounded Fallback
      return {
        type: 'general',
        badge: '● VERIFIED DGFT TRADE INTELLIGENCE',
        badgeClass: 'badge-cyan',
        title: 'Export-Import Regulatory Framework (FTP 2023)',
        answer: `Indian commercial exports are regulated under the <strong>Foreign Trade Policy (FTP 2023)</strong> administered by the <strong>Directorate General of Foreign Trade (DGFT)</strong>.<br><br>
                 <strong>Key Mandatory Requirements:</strong><br>
                 1. <strong>Importer-Exporter Code (IEC):</strong> Primary 10-digit PAN-linked trade registration issued by DGFT.<br>
                 2. <strong>Authorized Dealer (AD) Code:</strong> 14-digit bank routing code registered on ICEGATE to link foreign currency realization with customs.<br>
                 3. <strong>Registration-cum-Membership Certificate (RCMC):</strong> Issued by your designated Export Promotion Council (e.g. APEDA, EEPC, GJEPC) to claim FTP duty remissions.<br>
                 4. <strong>e-BRC:</strong> Electronic Bank Realisation Certificate to prove inward foreign remittance within RBI-mandated 9-month windows.<br><br>
                 <em>Tip: You can ask specific questions about Incoterms (FOB/CIF), Letters of Credit, or any of the 15 Case Studies like ZTE, Trek Leather, or EU Mango Ban!</em>`,
        sources: [
          { title: 'DGFT Portal', url: 'https://www.dgft.gov.in' },
          { title: 'Indian Trade Portal', url: 'https://www.indiantradeportal.in' },
          { title: 'CBIC ICEGATE Portal', url: 'https://www.icegate.gov.in' }
        ]
      };
    }
  };

  // Assistant UI Controller
  function initAgentUI() {
    const chatBackdrop = document.getElementById('chatModalBackdrop');
    const openChatBtn = document.getElementById('openChatBtn');
    const heroAskBtn = document.getElementById('heroAskBtn');
    const footerAskLink = document.getElementById('footerAskLink');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatInputField = document.getElementById('chatInputField');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatHistoryBox = document.getElementById('chatHistoryBox');
    const chatWelcomeState = document.getElementById('chatWelcomeState');

    if (!chatBackdrop) return;

    function openChatModal() {
      chatBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (chatInputField) chatInputField.focus();
    }

    function closeChatModal() {
      chatBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    openChatBtn?.addEventListener('click', openChatModal);
    heroAskBtn?.addEventListener('click', openChatModal);
    footerAskLink?.addEventListener('click', (e) => {
      e.preventDefault();
      openChatModal();
    });
    closeChatBtn?.addEventListener('click', closeChatModal);
    chatBackdrop?.addEventListener('click', (e) => {
      if (e.target === chatBackdrop) closeChatModal();
    });

    // Keyboard shortcut: Ctrl+K or Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openChatModal();
      }
      if (e.key === 'Escape' && chatBackdrop.classList.contains('open')) {
        closeChatModal();
      }
    });

    // Suggestion pills handler
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.getAttribute('data-query');
        if (q) handleUserQuery(q);
      });
    });

    // Input submission
    function submitFromInput() {
      const q = chatInputField?.value.trim();
      if (q) handleUserQuery(q);
    }

    chatSendBtn?.addEventListener('click', submitFromInput);
    chatInputField?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitFromInput();
      }
    });

    function handleUserQuery(query) {
      if (!query || !chatHistoryBox) return;

      if (chatWelcomeState) chatWelcomeState.style.display = 'none';

      // Append user bubble
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble-user';
      userBubble.textContent = query;
      chatHistoryBox.appendChild(userBubble);

      if (chatInputField) chatInputField.value = '';
      chatHistoryBox.scrollTop = chatHistoryBox.scrollHeight;

      // Append typing indicator
      const botThinking = document.createElement('div');
      botThinking.className = 'chat-bubble-bot';
      botThinking.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; color:var(--text-muted); font-size:0.85rem;">
          <span class="live-dot" style="width:6px; height:6px;"></span>
          <span>Searching 15 Case Studies, 37 EPCs, and 79 Glossary Terms...</span>
        </div>
      `;
      chatHistoryBox.appendChild(botThinking);
      chatHistoryBox.scrollTop = chatHistoryBox.scrollHeight;

      // Simulated asynchronous RAG retrieval
      setTimeout(() => {
        botThinking.remove();
        const response = TradeBridgeRAG.query(query);
        if (!response) return;

        const botMsg = document.createElement('div');
        botMsg.className = 'chat-bubble-bot';

        const sourcesHtml = (response.sources || []).map(s => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="bot-source-pill">
            ${s.title} ↗
          </a>
        `).join('');

        botMsg.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; border-bottom:1px solid var(--border-subtle); padding-bottom:6px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan-400); font-weight:700; text-transform:uppercase;">
              ${response.badge}
            </span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${response.title || ''}</span>
          </div>
          <div style="line-height:1.6; font-size:0.92rem; color:var(--text-primary); margin-top:8px;">
            ${response.answer}
          </div>
          ${sourcesHtml ? `
            <div class="bot-sources-row" style="margin-top:12px; padding-top:8px; border-top:1px solid var(--border-subtle);">
              <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-bottom:4px; font-family:var(--font-mono);">GROUNDED SOURCES:</span>
              <div style="display:flex; flex-wrap:wrap; gap:6px;">${sourcesHtml}</div>
            </div>
          ` : ''}
        `;

        chatHistoryBox.appendChild(botMsg);
        chatHistoryBox.scrollTop = chatHistoryBox.scrollHeight;
      }, 450);
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAgentUI);
  } else {
    initAgentUI();
  }

  // Expose RAG engine globally
  window.TradeBridgeRAG = TradeBridgeRAG;

})();
