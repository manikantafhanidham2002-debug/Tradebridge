"""
TradeBridge India — Quiz Database Seeder
Populates SQLite database (tradebridge.db) with 15 Core EXIM Questions across 3 tiers.
Curricular proposal for Department of International Business & Export Management.
"""
import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tradebridge.db')

QUESTIONS = [
    # Level 1: Basic Level — EPC Mandates & Trade Fundamentals
    (
        "q-basic-1", "Basic", "EPC Mandates & Trade Fundamentals",
        "What is the primary role of an Export Promotion Council (EPC) in India?",
        "Collecting customs duties at Indian ports||Promoting and expanding foreign trade of specific product categories||Issuing foreign exchange currency for exporters||Regulating domestic retail market pricing",
        1, "B",
        "EPCs are autonomous non-profit bodies registered to promote, support, and foster the growth of Indian exports in specific industry sectors."
    ),
    (
        "q-basic-2", "Basic", "EPC Mandates & Trade Fundamentals",
        "Which document is mandatory for any individual or business entity to start importing or exporting from India?",
        "Letter of Credit (LC)||Import Export Code (IEC)||Certificate of Origin (CoO)||Bill of Lading (B/L)",
        1, "B",
        "The Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) is a 10-digit primary registration mandatory for EXIM operations."
    ),
    (
        "q-basic-3", "Basic", "EPC Mandates & Trade Fundamentals",
        "What does the core motto of TradeBridge India emphasize?",
        "Automating Global Trade Payments||From EPC Discovery to Global Trade Decisions||Fast Customs Clearance for Freight||Zero-Tax Export Operations",
        1, "B",
        "The PRD defines the platform motto as 'From EPC Discovery to Global Trade Decisions', highlighting practical student learning."
    ),
    (
        "q-basic-4", "Basic", "EPC Mandates & Trade Fundamentals",
        "In international trade, what does the abbreviation 'HS Code' stand for?",
        "Harmonized System Code||High-Speed Clearance Code||Export System Harmonization Code||Heavy Freight Shipment Code",
        0, "A",
        "The Harmonized System (HS) Code is a standardized numerical nomenclature used globally to classify traded commodities."
    ),
    (
        "q-basic-5", "Basic", "EPC Mandates & Trade Fundamentals",
        "Which document acts as a document of title to goods and a contract of carriage between the shipper and carrier?",
        "Commercial Invoice||Bill of Lading (B/L)||Shipping Bill||Inspection Certificate",
        1, "B",
        "A Bill of Lading (B/L) is a vital shipping document issued by a carrier acknowledging receipt of cargo for shipment, acting as a document of title."
    ),

    # Level 2: Moderate Level — Trade Finance & SPS Regulations
    (
        "q-mod-1", "Moderate", "Trade Finance & SPS Regulations",
        "What does a Letter of Credit (LC) guarantee in an export transaction?",
        "Automatic clearance by customs authorities||Payment by the buyer's bank upon presentation of compliant shipping documents||Total immunity from transport damage||Fixed shipping freight rates",
        1, "B",
        "An LC is a financial commitment issued by an issuing bank ensuring payment to the seller, provided all specified documents are presented strictly as agreed."
    ),
    (
        "q-mod-2", "Moderate", "Trade Finance & SPS Regulations",
        "Sanitary and Phytosanitary (SPS) measures primarily regulate which area of international trade?",
        "Foreign exchange hedging algorithms||Food safety and plant/animal health standards||Maritime shipping container dimensions||Intellectual property rights for software",
        1, "B",
        "SPS measures are rules set under WTO guidelines to protect human, animal, or plant health from hazards in imported agricultural and food products."
    ),
    (
        "q-mod-3", "Moderate", "Trade Finance & SPS Regulations",
        "Under Incoterms, what does 'FOB' (Free On Board) signify regarding risk transfer?",
        "Risk transfers when goods are delivered to the buyer's factory||Risk transfers when goods are loaded on board the vessel at the named port of shipment||Risk remains with the seller until final payment is settled||Risk transfers as soon as the purchase contract is signed",
        1, "B",
        "Under FOB Incoterms, the seller delivers the goods on board the vessel designated by the buyer; risk of loss or damage passes when goods are on board."
    ),
    (
        "q-mod-4", "Moderate", "Trade Finance & SPS Regulations",
        "Which document proves the country in which a traded product was manufactured or produced?",
        "Packing List||Commercial Invoice||Certificate of Origin (CoO)||Shipping Bill",
        2, "C",
        "A Certificate of Origin (CoO) certifies that the exported goods satisfy defined origin criteria to qualify for tariff preferences or compliance."
    ),
    (
        "q-mod-5", "Moderate", "Trade Finance & SPS Regulations",
        "In trade finance, pre-shipment credit (packing credit) is primarily used by exporters to:",
        "Pay import tariffs in the destination country||Purchase raw materials, process, and package goods prior to shipment||Refinance old corporate debt||Fund foreign office marketing expenses",
        1, "B",
        "Pre-shipment credit provides essential working capital for procuring raw materials, manufacturing, and packing goods meant for export."
    ),

    # Level 3: Advanced Level — Geopolitics, Tariffs & Foreign Trade Policy
    (
        "q-adv-1", "Advanced", "Geopolitics, Tariffs & Foreign Trade Policy",
        "What is the primary objective of the EU's Carbon Border Adjustment Mechanism (CBAM)?",
        "Eliminating all customs duties between EU member states||Equalizing the price of carbon between domestic production and imports to prevent carbon leakage||Mandating that all export cargo be transported via electric ships||Imposing digital transaction taxes on e-commerce platforms",
        1, "B",
        "CBAM places a carbon price on imports of targeted carbon-intensive goods to ensure fair competition and prevent carbon leakage to non-EU nations."
    ),
    (
        "q-adv-2", "Advanced", "Geopolitics, Tariffs & Foreign Trade Policy",
        "How does a sudden geopolitical disruption in maritime choke points (e.g., Red Sea) impact Indian exporters?",
        "Reduces insurance premiums due to rerouting||Increases freight costs, transit times, and working capital lock-in||Automatically waives destination country tariffs||Elimination of Letter of Credit requirements",
        1, "B",
        "Rerouting around major maritime bottlenecks lengthens shipping routes, drives up ocean freight and insurance surcharges, and delays cash cycles."
    ),
    (
        "q-adv-3", "Advanced", "Geopolitics, Tariffs & Foreign Trade Policy",
        "Under India's Foreign Trade Policy (FTP), what is the main objective of the RoDTEP scheme?",
        "Providing direct cash subsidies for loss-making export firms||Rebating non-refundable central, state, and local taxes embedded in exported products||Imposing import quotas on luxury consumer goods||Offering zero-interest loans for overseas factory acquisitions",
        1, "B",
        "RoDTEP rebates unrefunded central, state, and local levies on exported goods, ensuring Indian exports remain competitive globally without violating WTO rules."
    ),
    (
        "q-adv-4", "Advanced", "Geopolitics, Tariffs & Foreign Trade Policy",
        "Under India's CEPAs/FTAs, what do 'Rules of Origin' mandate to qualify for preferential tariff concessions?",
        "Products must be transported exclusively by Indian-flagged vessels||Products must undergo substantial transformation or meet minimum local value-addition thresholds||Products must be sold below domestic market price||Exporters must pay an additional origin tax prior to shipment",
        1, "B",
        "Rules of Origin mandate that goods undergo sufficient processing or value addition in the partner country to prevent simple transshipment under FTAs."
    ),
    (
        "q-adv-5", "Advanced", "Geopolitics, Tariffs & Foreign Trade Policy",
        "In Indian customs export procedures, what is the significance of the 'Let Export Order' (LEO)?",
        "It authorizes the buyer's bank to release payment||It permits the cargo to be loaded onto the conveyance for export after customs clearance||It cancels the exporter's Import Export Code (IEC)||It certifies that the goods have arrived safely at the foreign port",
        1, "B",
        "The Let Export Order (LEO) is the final regulatory approval issued by Indian Customs confirming that cargo documentation and physical checks are complete."
    )
]

def seed():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS quizzes (
            id TEXT PRIMARY KEY,
            level TEXT NOT NULL,
            topic TEXT NOT NULL,
            question TEXT NOT NULL,
            options TEXT NOT NULL,
            answer_idx INTEGER NOT NULL,
            answer_letter TEXT NOT NULL,
            explanation TEXT NOT NULL
        )
    """)
    cur.execute("DELETE FROM quizzes")
    cur.executemany("""
        INSERT INTO quizzes (id, level, topic, question, options, answer_idx, answer_letter, explanation)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, QUESTIONS)
    conn.commit()
    count = cur.execute("SELECT count(*) FROM quizzes").fetchone()[0]
    conn.close()
    print(f"Successfully seeded {count} questions into {DB_PATH}")

if __name__ == '__main__':
    seed()
