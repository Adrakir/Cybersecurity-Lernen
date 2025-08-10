// Umfangreiche Quiz-Datenbank für alle Cybersecurity-Bereiche
const comprehensiveQuizzes = {
    // 📊 Monitoring & SIEM
    monitoring_siem: {
        title: "📊 Monitoring & SIEM",
        difficulty: "Fortgeschritten",
        questions: [
            {
                question: "Was ist der Hauptzweck eines SIEM-Systems?",
                options: ["Datensicherung", "Zentralisierte Log-Analyse", "Netzwerk-Routing", "E-Mail-Verwaltung"],
                correct: 1,
                explanation: "SIEM (Security Information and Event Management) sammelt und analysiert Logs zentral."
            },
            {
                question: "Welche Komponente eines SIEM korreliert Events?",
                options: ["Log Collector", "Correlation Engine", "Dashboard", "Storage"],
                correct: 1,
                explanation: "Die Correlation Engine verknüpft Events und erkennt Angriffsmuster."
            },
            {
                question: "Was bedeutet 'False Positive' im SIEM-Kontext?",
                options: ["Echter Angriff", "Fehlalarm", "System-Ausfall", "Log-Verlust"],
                correct: 1,
                explanation: "False Positive = Alarm ohne echte Bedrohung, reduziert Effizienz."
            },
            {
                question: "Welches Log-Format wird häufig für Syslog verwendet?",
                options: ["JSON", "XML", "RFC 3164", "CSV"],
                correct: 2,
                explanation: "RFC 3164 definiert das Standard-Syslog-Format."
            },
            {
                question: "Was ist ein IOC (Indicator of Compromise)?",
                options: ["Schwachstelle", "Angriffsspuren", "Patch-Level", "User-Account"],
                correct: 1,
                explanation: "IOCs sind Artefakte/Spuren eines erfolgten Angriffs."
            },
            {
                question: "Welche Metrik misst SIEM-Effektivität?",
                options: ["MTTR", "RPO", "SLA", "KPI"],
                correct: 0,
                explanation: "MTTR (Mean Time To Response) misst Reaktionsgeschwindigkeit."
            },
            {
                question: "Was macht SOAR zusätzlich zu SIEM?",
                options: ["Nur Monitoring", "Automatisierte Response", "Backup", "Antivirus"],
                correct: 1,
                explanation: "SOAR automatisiert Incident-Response-Prozesse."
            },
            {
                question: "Welche Anomalie-Erkennungsmethode nutzt ML?",
                options: ["Signature-based", "Rule-based", "Behavioral Analysis", "Hash-matching"],
                correct: 2,
                explanation: "Behavioral Analysis erkennt Abweichungen vom Normalverhalten."
            },
            {
                question: "Was ist ein Playbook im SOC?",
                options: ["Hardware-Manual", "Incident-Response-Plan", "Software-Lizenz", "Backup-Strategie"],
                correct: 1,
                explanation: "Playbooks definieren standardisierte Reaktionsabläufe."
            },
            {
                question: "Welche Phase kommt nach Incident Detection?",
                options: ["Prevention", "Containment", "Recovery", "Lessons Learned"],
                correct: 1,
                explanation: "Nach Detection folgt Containment (Eindämmung) des Incidents."
            }
        ]
    },

    // ☁️ Cloud Security
    cloud_security: {
        title: "☁️ Cloud Security",
        difficulty: "Mittel",
        questions: [
            {
                question: "Was beschreibt das Shared Responsibility Model?",
                options: ["Kostenteilung", "Sicherheitsverantwortung", "Resource-Sharing", "Load-Balancing"],
                correct: 1,
                explanation: "Definiert Sicherheitsverantwortung zwischen Cloud-Provider und Kunde."
            },
            {
                question: "Wofür ist der Cloud-Provider bei IaaS NICHT verantwortlich?",
                options: ["Physische Sicherheit", "Hypervisor", "OS-Updates", "Netzwerk-Hardware"],
                correct: 2,
                explanation: "Bei IaaS ist der Kunde für OS und Anwendungen verantwortlich."
            },
            {
                question: "Was ist ein Cloud Security Posture Management (CSPM)?",
                options: ["Backup-Tool", "Konfigurationsprüfung", "Load-Balancer", "VPN-Gateway"],
                correct: 1,
                explanation: "CSPM überwacht Cloud-Konfigurationen auf Sicherheitslücken."
            },
            {
                question: "Welche Verschlüsselung empfiehlt sich für Cloud-Storage?",
                options: ["Nur in Transit", "Nur at Rest", "In Transit und at Rest", "Keine"],
                correct: 2,
                explanation: "Sowohl Transport- als auch Speicherverschlüsselung nötig."
            },
            {
                question: "Was ist Container Escape?",
                options: ["Backup-Prozess", "Ausbruch aus Container", "Migration", "Skalierung"],
                correct: 1,
                explanation: "Angreifer verlässt Container und greift Host-System an."
            },
            {
                question: "Welches Tool scannt Container-Images auf Vulnerabilities?",
                options: ["Docker Compose", "Trivy", "Kubectl", "Terraform"],
                correct: 1,
                explanation: "Trivy ist ein populärer Container-Vulnerability-Scanner."
            },
            {
                question: "Was schützt APIs vor DDoS-Angriffen?",
                options: ["Rate Limiting", "Encryption", "Authentication", "Logging"],
                correct: 0,
                explanation: "Rate Limiting begrenzt Anfragen pro Zeiteinheit."
            },
            {
                question: "Welcher Header verbessert API-Sicherheit?",
                options: ["Content-Type", "Authorization", "User-Agent", "Cache-Control"],
                correct: 1,
                explanation: "Authorization-Header authentifiziert API-Anfragen."
            },
            {
                question: "Was ist Infrastructure as Code (IaC) Security?",
                options: ["Code-Review", "Template-Scanning", "Version Control", "Alle genannten"],
                correct: 3,
                explanation: "IaC Security umfasst Review, Scanning und Versionierung."
            },
            {
                question: "Welches Prinzip gilt für Cloud-Identitäten?",
                options: ["Root-Access", "Least Privilege", "Full Admin", "Guest-Only"],
                correct: 1,
                explanation: "Least Privilege minimiert Risiken durch begrenzte Rechte."
            }
        ]
    },

    // ⚖️ Compliance & Recht
    compliance_legal: {
        title: "⚖️ Compliance & Recht",
        difficulty: "Experte", 
        questions: [
            {
                question: "Welche DSGVO-Grundlage legitimiert Notfall-Datenverarbeitung?",
                options: ["Art. 6 Abs. 1 lit. b", "Art. 6 Abs. 1 lit. f", "Art. 9 Abs. 2 lit. c", "Art. 17"],
                correct: 2,
                explanation: "Art. 9 Abs. 2 lit. c erlaubt Verarbeitung zum Schutz lebenswichtiger Interessen."
            },
            {
                question: "Ab welcher Schwelle greifen KRITIS-Regelungen?",
                options: ["100 Mitarbeiter", "500.000 versorgte Personen", "Individuell je Sektor", "1 Mio. Umsatz"],
                correct: 2,
                explanation: "KRITIS-Schwellenwerte sind sektorspezifisch definiert."
            },
            {
                question: "Was regelt das IT-Sicherheitsgesetz 2.0 neu?",
                options: ["Nur KRITIS", "Auch Unternehmen im besonderen öffentlichen Interesse", "Nur Behörden", "Nur Privatunternehmen"],
                correct: 1,
                explanation: "IT-SiG 2.0 erweitert Anwendungsbereich auf weitere kritische Unternehmen."
            },
            {
                question: "Welcher BSI-Standard behandelt Notfallmanagement?",
                options: ["BSI-Standard 200-1", "BSI-Standard 200-4", "BSI-Standard 200-2", "BSI-Standard 200-3"],
                correct: 1,
                explanation: "BSI-Standard 200-4 definiert Business Continuity Management."
            },
            {
                question: "Was ist eine Datenschutz-Folgenabschätzung (DSFA)?",
                options: ["Immer nötig", "Bei hohem Risiko", "Nur bei Verstößen", "Freiwillig"],
                correct: 1,
                explanation: "DSFA ist bei hohem Risiko für Betroffene verpflichtend."
            },
            {
                question: "Welche Frist gilt für DSGVO-Meldungen an Aufsichtsbehörde?",
                options: ["24 Stunden", "72 Stunden", "7 Tage", "1 Monat"],
                correct: 1,
                explanation: "Datenschutzverletzungen müssen binnen 72h gemeldet werden."
            },
            {
                question: "Was bedeutet 'Privacy by Design'?",
                options: ["Nachträglicher Datenschutz", "Datenschutz von Anfang an", "Nur technische Maßnahmen", "Nur organisatorische Maßnahmen"],
                correct: 1,
                explanation: "Privacy by Design integriert Datenschutz ab Systementwurf."
            },
            {
                question: "Welche Zertifizierung bestätigt ISO 27001-Konformität?",
                options: ["Selbstzertifizierung", "Akkreditierte Zertifizierungsstelle", "BSI", "TÜV"],
                correct: 1,
                explanation: "ISO 27001 erfordert Zertifizierung durch akkreditierte Stellen."
            },
            {
                question: "Was ist Joint Controllership?",
                options: ["Gemeinsame Verantwortlichkeit", "Geteilte Kosten", "Shared Hosting", "Co-Location"],
                correct: 0,
                explanation: "Joint Controller teilen sich Verantwortung für Datenverarbeitung."
            },
            {
                question: "Welche Sanktion droht bei NIS2-Verstößen?",
                options: ["Nur Verwarnungen", "Bis 2% Jahresumsatz", "Bis 10 Mio € oder 2%", "Unbegrenzt"],
                correct: 2,
                explanation: "NIS2-Richtlinie sieht Bußgelder bis 10 Mio € oder 2% vor."
            }
        ]
    },

    // 🏢 Organisatorische Sicherheit
    organizational_security: {
        title: "🏢 Organisatorische Sicherheit",
        difficulty: "Mittel",
        questions: [
            {
                question: "Was ist das Hauptziel von Security Awareness Training?",
                options: ["Compliance", "Verhaltenänderung", "Dokumentation", "Kostenreduktion"],
                correct: 1,
                explanation: "Hauptziel ist die nachhaltige Änderung des Sicherheitsverhaltens."
            },
            {
                question: "Wie oft sollten Awareness-Trainings durchgeführt werden?",
                options: ["Einmalig", "Jährlich", "Regelmäßig/kontinuierlich", "Bei Bedarf"],
                correct: 2,
                explanation: "Kontinuierliche Trainings sind am effektivsten."
            },
            {
                question: "Was ist ein Phishing-Simulationstest?",
                options: ["Echte Phishing-Mails", "Kontrollierte Test-Mails", "Antivirus-Test", "Firewall-Test"],
                correct: 1,
                explanation: "Simulierte Phishing-Mails testen und schulen Mitarbeiter."
            },
            {
                question: "Was gehört NICHT zu Change Management?",
                options: ["Genehmigungsprozess", "Rollback-Plan", "Automatische Updates", "Impact-Analyse"],
                correct: 2,
                explanation: "Automatische Updates umgehen Change-Management-Prozesse."
            },
            {
                question: "Was ist RTO im Business Continuity Management?",
                options: ["Recovery Time Objective", "Real Time Operation", "Risk Transfer Option", "Response Team Organization"],
                correct: 0,
                explanation: "RTO definiert maximale tolerierbare Ausfallzeit."
            },
            {
                question: "Wer sollte Business Impact Analysis durchführen?",
                options: ["Nur IT", "Nur Management", "Fachbereiche + IT", "Externe Berater"],
                correct: 2,
                explanation: "BIA erfordert Expertise von Fachbereichen und IT."
            },
            {
                question: "Was ist ein Emergency Response Team (ERT)?",
                options: ["Feuerwehr", "IT-Support", "Krisenreaktionsteam", "Erste Hilfe"],
                correct: 2,
                explanation: "ERT koordiniert Reaktion auf Sicherheitsvorfälle."
            },
            {
                question: "Was beschreibt RACI-Matrix?",
                options: ["Risikobewertung", "Verantwortlichkeiten", "Compliance-Status", "Asset-Inventar"],
                correct: 1,
                explanation: "RACI definiert Responsible, Accountable, Consulted, Informed."
            },
            {
                question: "Was ist Segregation of Duties?",
                options: ["Aufgabenteilung", "Schichtarbeit", "Urlaubsvertretung", "Teambildung"],
                correct: 0,
                explanation: "Aufgabentrennung verhindert Missbrauch durch Einzelpersonen."
            },
            {
                question: "Welche Metrik misst Awareness-Erfolg?",
                options: ["Anzahl Trainings", "Phishing-Klickrate", "Teilnehmerzahl", "Schulungskosten"],
                correct: 1,
                explanation: "Phishing-Simulation zeigt reales Verhalten der Mitarbeiter."
            }
        ]
    }
};

// Integration in bestehende Quiz-Engine
if (typeof window !== 'undefined' && window.cybersecurityData) {
    // Erweitere bestehende Daten
    Object.assign(window.cybersecurityData, comprehensiveQuizzes);
    console.log('✅ Umfangreiche Quiz-Datenbank geladen!');
}

// Quiz-Statistiken
const quizStats = {
    monitoring_siem: { totalQuestions: 10, difficulty: "Fortgeschritten", estimatedTime: "15 min" },
    cloud_security: { totalQuestions: 10, difficulty: "Mittel", estimatedTime: "12 min" },
    compliance_legal: { totalQuestions: 10, difficulty: "Experte", estimatedTime: "20 min" },
    organizational_security: { totalQuestions: 10, difficulty: "Mittel", estimatedTime: "12 min" }
};

console.log('📊 Quiz-Übersicht:', quizStats);
