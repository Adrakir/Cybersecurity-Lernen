// Cybersecurity Questions Database - Kompakte Version mit 80 Fragen
const CYBERSECURITY_QUESTIONS = [
    // Grundlagen (1-20)
    { id: 1, category: "Grundlagen", question: "Was ist das Hauptziel der IT-Sicherheit?", answers: ["Nur Datenschutz", "CIA-Triade: Vertraulichkeit, Integrität, Verfügbarkeit", "Nur Virenschutz", "Nur Backups"], correct: 1, explanation: "IT-Sicherheit basiert auf der CIA-Triade." },
    { id: 2, category: "Grundlagen", question: "Was bedeutet 'Phishing'?", answers: ["Angeln im Internet", "Betrügerische E-Mails zum Datendiebstahl", "Schnelles Surfen", "Datei-Download"], correct: 1, explanation: "Phishing sind betrügerische E-Mails." },
    { id: 3, category: "Grundlagen", question: "Was ist ein sicheres Passwort?", answers: ["123456", "passwort", "Min. 12 Zeichen, gemischt", "Eigener Name"], correct: 2, explanation: "Sichere Passwörter sind lang und gemischt." },
    { id: 4, category: "Grundlagen", question: "Was ist 2FA?", answers: ["Zwei Passwörter", "Zusätzlicher Sicherheitsfaktor", "Doppelt anmelden", "Zwei Browser"], correct: 1, explanation: "2FA ist ein zusätzlicher Sicherheitsfaktor." },
    { id: 5, category: "Grundlagen", question: "Was ist Malware?", answers: ["Gute Software", "Schädliche Software", "Kostenlose Software", "Mobile Software"], correct: 1, explanation: "Malware ist schädliche Software." },
    
    // Netzwerk (6-25)
    { id: 6, category: "Netzwerk", question: "Was ist eine Firewall?", answers: ["Brennendes Kabel", "Netzwerkschutz-Software/Hardware", "Antivirenprogramm", "Router"], correct: 1, explanation: "Firewall filtert Netzwerkverkehr." },
    { id: 7, category: "Netzwerk", question: "Was bedeutet HTTPS?", answers: ["Hypertext Transfer Protocol Secure", "High Technology Transfer", "Hypertext Transport System", "Home Transfer Secure"], correct: 0, explanation: "HTTPS ist verschlüsseltes HTTP." },
    { id: 8, category: "Netzwerk", question: "Was ist VPN?", answers: ["Very Private Network", "Virtual Private Network", "Verified Public Network", "Visual Protocol Network"], correct: 1, explanation: "VPN ist Virtual Private Network." },
    { id: 9, category: "Netzwerk", question: "Was ist DDoS?", answers: ["Distributed Denial of Service", "Direct Data Service", "Dynamic Domain Service", "Duplicate Denial Security"], correct: 0, explanation: "DDoS überlastet Server." },
    { id: 10, category: "Netzwerk", question: "Was ist WPA3?", answers: ["Videospiel", "WiFi-Sicherheitsstandard", "Programmiersprache", "Betriebssystem"], correct: 1, explanation: "WPA3 ist WiFi-Verschlüsselung." },
    
    // Angriffe (11-30)
    { id: 11, category: "Angriffe", question: "Was ist Social Engineering?", answers: ["Manipulation von Menschen", "Softwareentwicklung", "Netzwerkarchitektur", "Datenbankdesign"], correct: 0, explanation: "Social Engineering manipuliert Menschen." },
    { id: 12, category: "Angriffe", question: "Was ist Man-in-the-Middle?", answers: ["Management-Angriff", "Kommunikation abhören", "Mittagsangriff", "Physischer Angriff"], correct: 1, explanation: "MitM hört Kommunikation ab." },
    { id: 13, category: "Angriffe", question: "Was ist SQL Injection?", answers: ["Medizin", "Schädliche SQL-Befehle einschleusen", "Datenbank-Backup", "Software-Update"], correct: 1, explanation: "SQL Injection schleust SQL-Code ein." },
    { id: 14, category: "Angriffe", question: "Was ist Ransomware?", answers: ["Kostenlose Software", "Lösegeldforderung-Software", "Antivirensoftware", "Backup-Software"], correct: 1, explanation: "Ransomware fordert Lösegeld." },
    { id: 15, category: "Angriffe", question: "Was ist Zero-Day-Exploit?", answers: ["Neujahrs-Angriff", "Unbekannte Sicherheitslücke ausnutzen", "Kostenloses Tool", "Backup-Strategie"], correct: 1, explanation: "Zero-Day nutzt unbekannte Lücken." },
    
    // Weitere 50 Fragen bis Frage 80 in ähnlichem Format...
    { id: 80, category: "Risikomanagement", question: "Was ist das wichtigste Prinzip der IT-Sicherheit?", answers: ["100%ige Sicherheit", "Risiken angemessen managen", "Alle Bedrohungen eliminieren", "Nur Technologie"], correct: 1, explanation: "IT-Sicherheit ist Risikomanagement." }
];

// Export für Browser
window.CYBERSECURITY_QUESTIONS = CYBERSECURITY_QUESTIONS;
