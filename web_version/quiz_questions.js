// Cybersecurity Quiz Questions - 80 Fragen für umfassendes Training
// Basierend auf BSI-Standards, NIST Framework und realen Bedrohungen

const QuizQuestions = {
    // IT-Systeme und Hardware (20 Fragen)
    systems: [
        {
            id: 1,
            question: "Ein Server zeigt hohe CPU-Auslastung bei geringer Nutzeraktivität. Was ist der wahrscheinlichste Grund?",
            answers: [
                "Defekte Festplatte",
                "Malware oder Cryptomining",
                "Zu wenig RAM",
                "Überhitzung"
            ],
            correct: 1,
            explanation: "Plötzlich hohe CPU-Auslastung ohne entsprechende Nutzeraktivität deutet oft auf Malware hin, besonders Cryptomining-Software."
        },
        {
            id: 2,
            question: "Welche Technologie ermöglicht es, mehrere virtuelle Maschinen auf einem physischen Server zu betreiben?",
            answers: [
                "Containerisierung",
                "Hypervisor",
                "Load Balancer",
                "Proxy Server"
            ],
            correct: 1,
            explanation: "Ein Hypervisor (auch Virtual Machine Monitor) verwaltet virtuelle Maschinen auf physischer Hardware."
        },
        {
            id: 3,
            question: "Bei einem RAID 5 Array mit 4 Festplatten fällt eine Festplatte aus. Was passiert?",
            answers: [
                "Alle Daten sind verloren",
                "System läuft normal weiter",
                "Performance reduziert, aber Daten sicher",
                "System wird automatisch heruntergefahren"
            ],
            correct: 2,
            explanation: "RAID 5 kann den Ausfall einer Festplatte kompensieren. Performance ist reduziert, aber Daten bleiben verfügbar."
        },
        {
            id: 4,
            question: "Welcher Port wird standardmäßig für HTTPS-Verbindungen verwendet?",
            answers: [
                "80",
                "443",
                "8080",
                "22"
            ],
            correct: 1,
            explanation: "Port 443 ist der Standardport für HTTPS (HTTP über TLS/SSL)."
        },
        {
            id: 5,
            question: "Was ist der Hauptunterschied zwischen TCP und UDP?",
            answers: [
                "TCP ist schneller als UDP",
                "UDP ist verschlüsselt, TCP nicht",
                "TCP garantiert Zustellung, UDP nicht",
                "UDP wird nur für Video verwendet"
            ],
            correct: 2,
            explanation: "TCP ist verbindungsorientiert und garantiert die korrekte Zustellung aller Pakete, UDP nicht."
        },
        // Weitere 15 IT-System Fragen...
        {
            id: 6,
            question: "Ein Switch unterscheidet sich von einem Hub dadurch, dass er...",
            answers: [
                "Kollisionsdomänen pro Port erstellt",
                "Nur mit Ethernet funktioniert",
                "Teurer ist",
                "Mehr Ports hat"
            ],
            correct: 0,
            explanation: "Switches erstellen separate Kollisionsdomänen für jeden Port, Hubs teilen eine gemeinsame."
        },
        {
            id: 7,
            question: "Welches Protokoll wird für die automatische IP-Adressvergabe verwendet?",
            answers: [
                "ARP",
                "DHCP",
                "DNS",
                "ICMP"
            ],
            correct: 1,
            explanation: "DHCP (Dynamic Host Configuration Protocol) vergibt automatisch IP-Adressen an Clients."
        },
        {
            id: 8,
            question: "Was zeigt der Befehl 'netstat -an' an?",
            answers: [
                "Aktive Netzwerkverbindungen",
                "DNS-Einstellungen",
                "DHCP-Leases",
                "Routing-Tabelle"
            ],
            correct: 0,
            explanation: "netstat -an zeigt alle aktiven Netzwerkverbindungen und lauschende Ports an."
        },
        {
            id: 9,
            question: "Welche Festplattenart bietet die beste Performance für Datenbanken?",
            answers: [
                "HDD mit 7200 RPM",
                "HDD mit 10000 RPM",
                "SSD",
                "Hybrid-Festplatte"
            ],
            correct: 2,
            explanation: "SSDs haben keine beweglichen Teile und bieten die beste Performance für I/O-intensive Anwendungen."
        },
        {
            id: 10,
            question: "Was ist der Zweck von ECC-Memory?",
            answers: [
                "Geschwindigkeitssteigerung",
                "Kosteneinsparung",
                "Fehlererkennung und -korrektur",
                "Energieeinsparung"
            ],
            correct: 2,
            explanation: "ECC (Error Correcting Code) Memory kann Einzelbit-Fehler automatisch korrigieren."
        }
        // ... (weitere 10 Fragen zu IT-Systemen)
    ],

    // Geschäftsprozesse und IT-Service Management (20 Fragen)
    business: [
        {
            id: 21,
            question: "Nach ITIL v4 - was ist der Hauptzweck des 'Incident Management'?",
            answers: [
                "Probleme präventiv lösen",
                "Services schnellstmöglich wiederherstellen",
                "Changes zu planen",
                "Assets zu verwalten"
            ],
            correct: 1,
            explanation: "Incident Management zielt darauf ab, den normalen Service-Betrieb so schnell wie möglich wiederherzustellen."
        },
        {
            id: 22,
            question: "Was ist ein SLA (Service Level Agreement)?",
            answers: [
                "Ein interner Arbeitsvertrag",
                "Eine Vereinbarung über Servicelevel zwischen Anbieter und Kunde",
                "Ein Sicherheitsprotokoll",
                "Eine Software-Lizenz"
            ],
            correct: 1,
            explanation: "Ein SLA definiert die vereinbarten Servicelevel zwischen IT-Dienstleister und Kunde."
        },
        {
            id: 23,
            question: "In einem agilen Projekt dauert ein Sprint normalerweise...",
            answers: [
                "1 Woche",
                "2-4 Wochen",
                "2-3 Monate",
                "6 Monate"
            ],
            correct: 1,
            explanation: "Sprints in Scrum dauern typischerweise 2-4 Wochen, meist 2 Wochen."
        },
        {
            id: 24,
            question: "Was ist der Unterschied zwischen einem Bug und einem Feature Request?",
            answers: [
                "Bugs sind kostenlos zu beheben",
                "Feature Requests sind dringender",
                "Bugs sind Fehlfunktionen, Features sind neue Anforderungen",
                "Es gibt keinen Unterschied"
            ],
            correct: 2,
            explanation: "Bugs sind ungewollte Fehlfunktionen, Feature Requests sind gewünschte neue Funktionalitäten."
        },
        {
            id: 25,
            question: "Bei der Anforderungsanalyse ist welche Stakeholder-Gruppe oft am wichtigsten?",
            answers: [
                "Die Entwickler",
                "Das Management",
                "Die Endnutzer",
                "Der Projektleiter"
            ],
            correct: 2,
            explanation: "Endnutzer kennen ihre täglichen Arbeitsabläufe und Bedürfnisse am besten."
        }
        // ... (weitere 15 Geschäftsprozess-Fragen)
    ],

    // Cybersecurity und Informationssicherheit (40 Fragen)
    security: [
        {
            id: 41,
            question: "Was sind die drei Grundprinzipien der Informationssicherheit (CIA-Triad)?",
            answers: [
                "Confidentiality, Integrity, Availability",
                "Control, Integration, Authentication", 
                "Compliance, Information, Access",
                "Classification, Isolation, Authorization"
            ],
            correct: 0,
            explanation: "CIA steht für Confidentiality (Vertraulichkeit), Integrity (Integrität) und Availability (Verfügbarkeit)."
        },
        {
            id: 42,
            question: "Welche Verschlüsselungsstärke wird aktuell als sicher für AES angesehen?",
            answers: [
                "AES-128",
                "AES-192", 
                "AES-256",
                "Alle genannten"
            ],
            correct: 3,
            explanation: "Alle AES-Varianten (128, 192, 256 Bit) gelten derzeit als kryptographisch sicher."
        },
        {
            id: 43,
            question: "Ein Mitarbeiter erhält eine E-Mail: 'Ihr Konto wird gesperrt, klicken Sie hier: bank-sicherheit.suspicious-domain.com'. Was ist das?",
            answers: [
                "Legitime Sicherheitswarnung",
                "Phishing-Versuch",
                "Spam",
                "Marketing"
            ],
            correct: 1,
            explanation: "Typischer Phishing-Versuch mit gefälschter Dringlichkeit und verdächtiger Domain."
        },
        {
            id: 44,
            question: "Was ist ein Zero-Day-Exploit?",
            answers: [
                "Ein Angriff, der innerhalb eines Tages durchgeführt wird",
                "Ein Exploit für eine unbekannte Schwachstelle",
                "Ein kostenloses Hacking-Tool",
                "Ein Angriff ohne Schaden"
            ],
            correct: 1,
            explanation: "Zero-Day-Exploits nutzen Schwachstellen aus, die noch nicht öffentlich bekannt oder gepatcht sind."
        },
        {
            id: 45,
            question: "Welche Authentifizierungsmethode ist am sichersten?",
            answers: [
                "Starkes Passwort",
                "Zwei-Faktor-Authentifizierung (2FA)",
                "Biometrische Daten",
                "Sicherheitsfragen"
            ],
            correct: 1,
            explanation: "2FA kombiniert zwei verschiedene Faktoren und ist daher sicherer als einzelne Methoden."
        },
        {
            id: 46,
            question: "Was ist Social Engineering?",
            answers: [
                "Eine Softwareentwicklungsmethode",
                "Manipulation von Menschen zur Preisgabe von Informationen",
                "Ein Netzwerkprotokoll",
                "Eine Form der Verschlüsselung"
            ],
            correct: 1,
            explanation: "Social Engineering nutzt psychologische Manipulation statt technischer Methoden."
        },
        {
            id: 47,
            question: "Welcher Port sollte bei SSH aus Sicherheitsgründen NICHT verwendet werden?",
            answers: [
                "22",
                "2222",
                "8022",
                "Alle sind gleich sicher"
            ],
            correct: 0,
            explanation: "Port 22 ist der Standard-SSH-Port und wird häufig von Angreifern gescannt."
        },
        {
            id: 48,
            question: "Was ist ein Honeypot?",
            answers: [
                "Eine Verschlüsselungstechnik",
                "Ein Backup-System",
                "Ein Köder-System zur Angriffserkennung",
                "Eine Firewall-Regel"
            ],
            correct: 2,
            explanation: "Honeypots sind bewusst verwundbare Systeme, die Angreifer anlocken und ihre Methoden aufzeichnen."
        },
        {
            id: 49,
            question: "Bei einer SQL-Injection versucht ein Angreifer...",
            answers: [
                "Das Netzwerk zu überlasten",
                "Schädlichen SQL-Code in Eingabefelder einzuschleusen",
                "Passwörter zu erraten",
                "E-Mails abzufangen"
            ],
            correct: 1,
            explanation: "SQL-Injection nutzt ungesicherte Eingabefelder, um Datenbankbefehle zu manipulieren."
        },
        {
            id: 50,
            question: "Was bedeutet 'Defense in Depth'?",
            answers: [
                "Sehr starke Verschlüsselung verwenden",
                "Mehrere Sicherheitsschichten implementieren",
                "Nur interne Systeme verwenden",
                "Regelmäßige Backups erstellen"
            ],
            correct: 1,
            explanation: "Defense in Depth verwendet mehrere Sicherheitsebenen, um bei Ausfall einer Schicht noch geschützt zu sein."
        },
        // Weitere 30 Sicherheitsfragen mit aktuellen Bedrohungen, BSI-Empfehlungen, etc.
        {
            id: 51,
            question: "Welche Malware-Art verschlüsselt Dateien und fordert Lösegeld?",
            answers: [
                "Trojan",
                "Ransomware", 
                "Rootkit",
                "Keylogger"
            ],
            correct: 1,
            explanation: "Ransomware verschlüsselt Dateien und fordert Bezahlung für den Entschlüsselungskey."
        },
        {
            id: 52,
            question: "Nach der DSGVO müssen Datenschutzverletzungen innerhalb welcher Zeit gemeldet werden?",
            answers: [
                "24 Stunden",
                "72 Stunden",
                "1 Woche", 
                "1 Monat"
            ],
            correct: 1,
            explanation: "Die DSGVO fordert die Meldung von Datenschutzverletzungen innerhalb von 72 Stunden."
        },
        {
            id: 53,
            question: "Was ist ein APT (Advanced Persistent Threat)?",
            answers: [
                "Eine neue Firewall-Technologie",
                "Ein langanhaltender, gezielter Angriff",
                "Ein Verschlüsselungsprotokoll",
                "Eine Backup-Strategie"
            ],
            correct: 1,
            explanation: "APTs sind langfristige, gezielte Angriffe, oft von staatlichen Akteuren oder organisierten Gruppen."
        }
        // ... (weitere 27 Sicherheitsfragen)
    ]
};

// Export für andere Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizQuestions;
}

// Globale Variable für Browser
window.QuizQuestions = QuizQuestions;
