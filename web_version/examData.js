// IT-Sicherheit Prüfungssimulation - Fragendatenbank
// 8 Bereiche mit je 20 Fragen für IT-Fachinformatiker

const examData = {
    categories: {
        "netzwerktechnik": {
            name: "Netzwerktechnik & Protokolle",
            icon: "🌐",
            questions: [
                {
                    id: "net_001",
                    question: "Was ist der Hauptzweck des OSI-Schichtenmodells?",
                    answers: [
                        "Standardisierung der Netzwerkkommunikation",
                        "Verschlüsselung von Datenübertragungen", 
                        "Komprimierung von Netzwerkdaten",
                        "Authentifizierung von Benutzern"
                    ],
                    correct: 0,
                    explanation: "Das OSI-Modell standardisiert die Kommunikation zwischen verschiedenen Systemen durch 7 definierte Schichten (Physical, Data Link, Network, Transport, Session, Presentation, Application)."
                },
                {
                    id: "net_002", 
                    question: "Welcher Port wird standardmäßig für HTTPS verwendet?",
                    answers: ["80", "443", "22", "25"],
                    correct: 1,
                    explanation: "Port 443 ist der Standard-Port für HTTPS (HTTP Secure). Port 80 wird für unverschlüsseltes HTTP verwendet."
                },
                {
                    id: "net_003",
                    question: "Was bedeutet NAT in der Netzwerktechnik?",
                    answers: [
                        "Network Access Token",
                        "Network Address Translation", 
                        "Network Authentication Type",
                        "Network Allocation Table"
                    ],
                    correct: 1,
                    explanation: "NAT (Network Address Translation) übersetzt private IP-Adressen in öffentliche IP-Adressen und ermöglicht es mehreren Geräten, eine öffentliche IP-Adresse zu teilen."
                },
                {
                    id: "net_004",
                    question: "Welche Aussage über VLANs ist korrekt?",
                    answers: [
                        "VLANs können nur innerhalb eines Switches existieren",
                        "VLANs ermöglichen logische Netzwerktrennung", 
                        "VLANs verschlüsseln automatisch den Datenverkehr",
                        "VLANs funktionieren nur mit Glasfaserkabeln"
                    ],
                    correct: 1,
                    explanation: "VLANs (Virtual Local Area Networks) ermöglichen die logische Trennung von Netzwerken unabhängig von der physischen Infrastruktur und können sich über mehrere Switches erstrecken."
                },
                {
                    id: "net_005",
                    question: "Was ist der Unterschied zwischen Hub und Switch?",
                    answers: [
                        "Hubs arbeiten auf Layer 3, Switches auf Layer 2",
                        "Switches erstellen Kollisionsdomänen, Hubs nicht",
                        "Hubs sind teurer als Switches", 
                        "Switches unterstützen nur Ethernet"
                    ],
                    correct: 1,
                    explanation: "Switches erstellen für jeden Port eine eigene Kollisionsdomäne und lernen MAC-Adressen, während Hubs alle Ports in einer Kollisionsdomäne verbinden."
                }
                // Weitere 15 Fragen werden in separaten Updates hinzugefügt
            ]
        },
        
        "it_sicherheit": {
            name: "IT-Sicherheit & Datenschutz", 
            icon: "🔒",
            questions: [
                {
                    id: "sec_001",
                    question: "Was versteht man unter dem CIA-Triad in der IT-Sicherheit?",
                    answers: [
                        "Confidentiality, Integrity, Availability",
                        "Computer, Internet, Application",
                        "Control, Investigation, Authorization", 
                        "Compliance, Identity, Authentication"
                    ],
                    correct: 0,
                    explanation: "Das CIA-Triad beschreibt die drei Grundpfeiler der IT-Sicherheit: Vertraulichkeit (Confidentiality), Integrität (Integrity) und Verfügbarkeit (Availability)."
                },
                {
                    id: "sec_002",
                    question: "Welche Methode bietet den stärksten Passwortschutz?",
                    answers: [
                        "8-stelliges Passwort mit Zahlen",
                        "Komplexes Passwort + Zwei-Faktor-Authentifizierung",
                        "Einfaches Passwort, das regelmäßig geändert wird",
                        "Biometrische Authentifizierung allein"
                    ],
                    correct: 1,
                    explanation: "Die Kombination aus komplexem Passwort und Zwei-Faktor-Authentifizierung (2FA) bietet den höchsten Schutz, da zwei unabhängige Faktoren erforderlich sind."
                },
                {
                    id: "sec_003", 
                    question: "Was ist eine Zero-Day-Schwachstelle?",
                    answers: [
                        "Eine Schwachstelle, die am ersten Tag entdeckt wird",
                        "Eine bekannte, aber ungepatchte Schwachstelle",
                        "Eine unbekannte Schwachstelle ohne verfügbaren Patch",
                        "Eine Schwachstelle in Zero-Day-Software"
                    ],
                    correct: 2,
                    explanation: "Zero-Day-Schwachstellen sind bisher unbekannte Sicherheitslücken, für die noch kein Patch verfügbar ist und die von Angreifern ausgenutzt werden können."
                },
                {
                    id: "sec_004",
                    question: "Welcher Angriff nutzt gefälschte E-Mails zur Datendiebstahl?",
                    answers: ["DDoS", "Phishing", "SQL Injection", "Brute Force"],
                    correct: 1,
                    explanation: "Phishing-Angriffe verwenden gefälschte E-Mails, die vorgeben, von vertrauenswürdigen Quellen zu stammen, um sensible Informationen zu stehlen."
                },
                {
                    id: "sec_005",
                    question: "Was bedeutet DSGVO/GDPR für Unternehmen?",
                    answers: [
                        "Nur EU-Unternehmen müssen sich daran halten",
                        "Gilt für alle Unternehmen, die EU-Bürger-Daten verarbeiten", 
                        "Betrifft nur Social Media Unternehmen",
                        "Ist nur eine Empfehlung ohne Strafen"
                    ],
                    correct: 1,
                    explanation: "Die DSGVO/GDPR gilt für alle Unternehmen weltweit, die personenbezogene Daten von EU-Bürgern verarbeiten, unabhängig vom Standort des Unternehmens."
                }
            ]
        }
    }
};

// Exportiere die Daten
if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}
