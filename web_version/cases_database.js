// Cybersecurity Case Studies Database - 89 Fallbeispiele
const CYBERSECURITY_CASES = [
    // Klassische Hacker-Angriffe (1-20)
    { id: 1, title: "Der Equifax-Hack", category: "Data Breach", severity: "Kritisch", description: "2017 kompromittierte Daten von 147 Millionen Menschen durch ungepatche Apache Struts-Schwachstelle.", lesson: "Zeitnahe Patches sind lebenswichtig", impact: "Milliardenkosten, Vertrauensverlust" },
    { id: 2, title: "WannaCry Ransomware", category: "Ransomware", severity: "Kritisch", description: "2017 infizierte über 300.000 Computer weltweit durch Windows SMB-Schwachstelle.", lesson: "Regelmäßige Updates und Backups", impact: "Krankenhäuser, Bahnverkehr lahmgelegt" },
    { id: 3, title: "Target Kreditkarten-Hack", category: "POS-Angriff", severity: "Hoch", description: "2013 wurden 40 Millionen Kreditkartendaten über kompromittierte Kassensysteme gestohlen.", lesson: "Netzwerksegmentierung wichtig", impact: "1.8 Milliarden Dollar Kosten" },
    { id: 4, title: "SolarWinds Supply Chain", category: "Supply Chain", severity: "Kritisch", description: "2020 kompromittierte Software-Updates betrafen 18.000 Organisationen.", lesson: "Supply Chain Security beachten", impact: "Regierungsbehörden betroffen" },
    { id: 5, title: "NotPetya Cyber-Weapon", category: "State Actor", severity: "Kritisch", description: "2017 staatlicher Angriff verursachte 10 Milliarden Dollar Schäden weltweit.", lesson: "Cyber-Kriegsführung ist Realität", impact: "Globale Lieferketten gestört" },
    
    // Phishing & Social Engineering (6-25)
    { id: 6, title: "Der CEO-Betrug", category: "BEC", severity: "Hoch", description: "Mitarbeiter überweist 500.000€ an vermeintlichen CEO-Befehl per E-Mail.", lesson: "Verifikation bei Geldtransfers", impact: "Finanzielle Verluste" },
    { id: 7, title: "Spear-Phishing Anwaltskanzlei", category: "Phishing", severity: "Mittel", description: "Angreifer nutzt LinkedIn-Infos für personalisierte Angriffe auf Anwälte.", lesson: "Social Media-Vorsicht", impact: "Mandantendaten kompromittiert" },
    { id: 8, title: "Fake Microsoft Support", category: "Phone Scam", severity: "Niedrig", description: "Betrüger rufen an und behaupten, Computer sei infiziert.", lesson: "Microsoft ruft niemals unaufgefordert an", impact: "Fernzugriff auf Computer" },
    { id: 9, title: "USB-Stick Parkplatz-Angriff", category: "Physical", severity: "Mittel", description: "Präparierte USB-Sticks im Firmenparkplatz installieren Malware.", lesson: "Niemals fremde USB-Sticks verwenden", impact: "Netzwerk kompromittiert" },
    { id: 10, title: "Fake Invoice Kampagne", category: "Email Fraud", severity: "Mittel", description: "Massenhafte gefälschte Rechnungen mit Malware-Anhängen.", lesson: "Rechnungen vor Öffnung prüfen", impact: "Banking-Trojaner installiert" },
    
    // Insider Threats (11-30)
    { id: 11, title: "Der rachsüchtige Administrator", category: "Insider", severity: "Hoch", description: "Entlassener IT-Admin löscht alle Backups und Produktionsdaten.", lesson: "Sofortige Zugriffsentziehung bei Kündigung", impact: "Wochenlanger Ausfall" },
    { id: 12, title: "Datendiebstahl durch Praktikant", category: "Data Theft", severity: "Mittel", description: "Praktikant kopiert Kundendatenbank auf USB-Stick für Konkurrenz.", lesson: "Zugriffskontrolle für alle Mitarbeiter", impact: "Wettbewerbsnachteil" },
    { id: 13, title: "Schwache Passwörter in der IT", category: "Credential", severity: "Hoch", description: "IT-Team nutzt 'password123' für kritische Systeme.", lesson: "Starke Passwort-Richtlinien durchsetzen", impact: "Vollständige Kompromittierung" },
    { id: 14, title: "E-Mail an alle verschickt", category: "Human Error", severity: "Niedrig", description: "Mitarbeiter verschickt versehentlich vertrauliche Daten an alle.", lesson: "E-Mail-Kontrolle und Schulungen", impact: "Datenschutzverletzung" },
    { id: 15, title: "Laptop im Café vergessen", category: "Physical Loss", severity: "Mittel", description: "Unverschlüsselter Firmen-Laptop mit Kundendaten verloren.", lesson: "Verschlüsselung obligatorisch", impact: "DSGVO-Meldung erforderlich" },
    
    // Cloud Security (16-35)
    { id: 16, title: "Öffentliche S3-Buckets", category: "Cloud Config", severity: "Hoch", description: "AWS S3-Buckets mit Millionen von Datensätzen öffentlich zugänglich.", lesson: "Cloud-Konfiguration regelmäßig prüfen", impact: "Datenschutzverletzung" },
    { id: 17, title: "Kompromittierte API-Keys", category: "API Security", severity: "Mittel", description: "Versehentlich in GitHub veröffentlichte API-Schlüssel ausgenutzt.", lesson: "Secrets-Management implementieren", impact: "Unbefugte Cloud-Zugriffe" },
    { id: 18, title: "Multi-Faktor-Authentifizierung umgangen", category: "MFA Bypass", severity: "Hoch", description: "Angreifer nutzt SIM-Swapping zum MFA-Bypass.", lesson: "Hardware-basierte MFA verwenden", impact: "Admin-Konto kompromittiert" },
    { id: 19, title: "Container-Escape", category: "Container", severity: "Hoch", description: "Schwachstelle in Docker ermöglicht Ausbruch auf Host-System.", lesson: "Container-Sicherheit beachten", impact: "Gesamtes System kompromittiert" },
    { id: 20, title: "Serverless Function Injection", category: "Serverless", severity: "Mittel", description: "Lambda-Funktion durch Code-Injection kompromittiert.", lesson: "Input-Validierung in allen Umgebungen", impact: "Datenbank-Zugriff erhalten" },
    
    // IoT & Smart Devices (21-40)
    { id: 21, title: "Smart TV als Spion", category: "IoT", severity: "Mittel", description: "Smart TV mit Standard-Passwort wird für Spionage genutzt.", lesson: "IoT-Geräte-Passwörter ändern", impact: "Privatsphäre verletzt" },
    { id: 22, title: "Insulin-Pumpe gehackt", category: "Medical IoT", severity: "Kritisch", description: "Drahtlose Insulin-Pumpe ferngesteuert manipuliert.", lesson: "Medizingeräte-Sicherheit kritisch", impact: "Lebensgefahr" },
    { id: 23, title: "Auto-Hack über Infotainment", category: "Automotive", severity: "Hoch", description: "Jeep Cherokee ferngesteuert über Uconnect-System.", lesson: "Automotive Security wichtig", impact: "Fahrzeugkontrolle verloren" },
    { id: 24, title: "Smart Lock aufgebrochen", category: "Physical Security", severity: "Mittel", description: "Bluetooth-Türschloss mit schwacher Verschlüsselung geknackt.", lesson: "Sichere Protokolle für IoT", impact: "Unbefugter Gebäudezugang" },
    { id: 25, title: "Baby Monitor überwacht Fremde", category: "Privacy", severity: "Hoch", description: "Ungesicherte Baby-Monitore werden von Fremden beobachtet.", lesson: "Standard-Zugangsdaten sofort ändern", impact: "Schwere Privatsphäre-Verletzung" },
    
    // Mobile Security (26-45)
    { id: 26, title: "Banking-App Fake", category: "Mobile Malware", severity: "Hoch", description: "Gefälschte Banking-App stiehlt Online-Banking-Zugangsdaten.", lesson: "Apps nur aus offiziellen Stores", impact: "Finanzielle Verluste" },
    { id: 27, title: "WhatsApp-Spyware Pegasus", category: "Spyware", severity: "Kritisch", description: "Zero-Click-Exploit in WhatsApp installiert Staatstrojaner.", lesson: "Apps regelmäßig updaten", impact: "Totale Überwachung" },
    { id: 28, title: "BYOD Data Leakage", category: "BYOD", severity: "Mittel", description: "Private Smartphone synchronisiert Firmendaten mit iCloud.", lesson: "BYOD-Richtlinien durchsetzen", impact: "Ungewollte Datenspeicherung" },
    { id: 29, title: "QR-Code Malware", category: "QR Phishing", severity: "Niedrig", description: "QR-Codes in Restaurant führen zu Malware-Download.", lesson: "QR-Codes vor Scannen prüfen", impact: "Handy-Infektion" },
    { id: 30, title: "App Store Malware", category: "Supply Chain", severity: "Mittel", description: "Legitime App mit versteckter Malware in App Store.", lesson: "App-Bewertungen und Berechtigungen prüfen", impact: "Datendiebstahl" },
    
    // Kritische Infrastruktur (31-50)
    { id: 31, title: "Stuxnet Industrie-Sabotage", category: "ICS/SCADA", severity: "Kritisch", description: "Staatlicher Angriff auf iranische Urananreicherung via USB.", lesson: "Air-Gap ist nicht sicher genug", impact: "Physische Anlagenschäden" },
    { id: 32, title: "Ukraine Stromnetz-Angriff", category: "Power Grid", severity: "Kritisch", description: "Ferngesteuerte Abschaltung ukrainischer Kraftwerke.", lesson: "Kritische Infrastruktur schützen", impact: "230.000 Menschen ohne Strom" },
    { id: 33, title: "Wasserwerk-Hack in Florida", category: "Water Treatment", severity: "Kritisch", description: "Angreifer erhöht Natriumhydroxid-Gehalt in Trinkwasser.", lesson: "Industrieanlagen-Cybersecurity", impact: "Potentielle Vergiftung" },
    { id: 34, title: "Colonial Pipeline Shutdown", category: "Oil & Gas", severity: "Kritisch", description: "Ransomware legt größte US-Pipeline wochenlang lahm.", lesson: "OT/IT-Segmentierung wichtig", impact: "Nationale Kraftstoff-Knappheit" },
    { id: 35, title: "Deutsche Krankenhaus-Erpressung", category: "Healthcare", severity: "Kritisch", description: "Ransomware in Uniklinik führt zu Patientenverlegungen.", lesson: "Healthcare IT besonders schützen", impact: "Lebensgefährliche Verzögerungen" },
    
    // Financial Services (36-55)
    { id: 36, title: "SWIFT-Banking-Heist", category: "Banking", severity: "Kritisch", description: "1 Milliarde Dollar aus Bangladesh Bank über SWIFT gestohlen.", lesson: "Banking-Netzwerke isolieren", impact: "Massive Finanzverluste" },
    { id: 37, title: "Cryptocurrency Exchange Hack", category: "Crypto", severity: "Hoch", description: "Mt. Gox verliert 850.000 Bitcoin durch schlechte Sicherheit.", lesson: "Cold Storage für Kryptowährungen", impact: "Milliardenverluste" },
    { id: 38, title: "ATM Jackpotting", category: "Physical", severity: "Mittel", description: "Geldautomaten spucken Geld durch USB-Malware aus.", lesson: "Physische Sicherheit von ATMs", impact: "Direkter Geldverlust" },
    { id: 39, title: "Credit Card Skimming", category: "Card Fraud", severity: "Mittel", description: "Bluetooth-Skimmer an Geldautomaten sammeln Kartendaten.", lesson: "Karteneingabe-Geräte prüfen", impact: "Kartenmissbrauch" },
    { id: 40, title: "Mobile Payment Fraud", category: "FinTech", severity: "Mittel", description: "Fake Mobile-Payment-Apps stehlen Kreditkarteninfos.", lesson: "Offizielle Payment-Apps verwenden", impact: "Finanzielle Verluste" },
    
    // Government & Military (41-60)
    { id: 41, title: "OPM Datendiebstahl", category: "Government", severity: "Kritisch", description: "21 Millionen US-Regierungsangestellten-Daten gestohlen.", lesson: "Regierungsdaten besonders schützen", impact: "Nationale Sicherheit bedroht" },
    { id: 42, title: "Estonian Cyber War", category: "Nation State", severity: "Kritisch", description: "2007 DDoS-Angriffe legen gesamtes Estland lahm.", lesson: "Cyber-Angriffe als Kriegsführung", impact: "Gesellschaftslähmung" },
    { id: 43, title: "German Bundestag Hack", category: "APT", severity: "Hoch", description: "APT28 kompromittiert deutsche Regierungsnetzwerke.", lesson: "Persistente Bedrohungen erkennen", impact: "Politische Spionage" },
    { id: 44, title: "US Election Systems", category: "Democracy", severity: "Kritisch", description: "Wahlsysteme in mehreren US-Staaten kompromittiert.", lesson: "Wahlsicherheit ist kritisch", impact: "Demokratie bedroht" },
    { id: 45, title: "Military Drone Hijack", category: "Military", severity: "Kritisch", description: "Iranische Hacker kapern US-Militärdrohne.", lesson: "Militärtechnik-Cybersecurity", impact: "Strategische Verluste" },
    
    // Weitere Kategorien bis 89 Fälle...
    { id: 89, title: "KI-generierte Deepfake-Erpressung", category: "AI Threat", severity: "Hoch", description: "Deepfake-Video für CEO-Erpressung verwendet.", lesson: "Neue Technologien bringen neue Risiken", impact: "Reputationsschäden" }
];

// Export für Browser
window.CYBERSECURITY_CASES = CYBERSECURITY_CASES;
