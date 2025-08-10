// Cybersecurity Detective Cases - Krimi-Spiele
const DETECTIVE_CASES = [
    {
        id: 1,
        title: "Der Fall der verschwundenen Millionen",
        category: "Financial Crime",
        difficulty: "Mittel",
        timeline: "3 Tage",
        description: "3.2 Millionen Euro sind spurlos aus der Firmenkasse verschwunden. Kein Einbruch, keine Gewalt - nur ein normaler Dienstag.",
        
        // Ausgangslage
        initialSituation: {
            time: "Dienstag, 09:15 Uhr",
            location: "TechCorp AG, Buchhaltungsabteilung",
            witnesses: ["Maria Schmidt (CFO)", "Thomas Müller (IT-Admin)", "Lisa Weber (Buchhalterin)"],
            evidence: ["Keine Spuren von Gewalt", "Alle Systeme scheinbar normal", "Geld weg seit gestern 16:30"]
        },
        
        // Ermittlungsschritte
        investigationSteps: [
            {
                step: 1,
                title: "Erste Befragung",
                description: "Sie sprechen mit der CFO Maria Schmidt",
                dialog: "SCHMIDT: 'Es ist unglaublich! Gestern war noch alles normal. Heute fehlen 3.2 Millionen!'",
                evidence_found: "Letzte normale Transaktion: Montag 16:30",
                questions: [
                    "Wer hatte Zugang zum System?",
                    "Gab es ungewöhnliche Aktivitäten?",
                    "Wurden Passwörter kürzlich geändert?"
                ],
                clues: ["Nur 3 Personen haben Überweisungsrechte", "Neuer IT-Admin seit 2 Wochen"]
            },
            {
                step: 2,
                title: "IT-Logs untersuchen",
                description: "Sie analysieren die Systemlogs",
                technical_evidence: {
                    "Montag 16:45": "Login von admin@techcorp.de",
                    "Montag 16:47": "Überweisung #447821 - 3.200.000€ an IBAN DE89123456789",
                    "Montag 16:48": "Logout",
                    "Montag 16:50": "Login-Versuch mit falschen Credentials"
                },
                red_herrings: ["Normale Backup-Jobs", "Routine System-Updates"],
                real_clues: ["Überweisung 2 Minuten nach Admin-Login", "IP-Adresse nicht vom Firmennetzwerk"]
            },
            {
                step: 3,
                title: "E-Mail-Forensik",
                description: "Verdächtige E-Mail gefunden",
                email_evidence: {
                    from: "ceo@techcorp.de",
                    to: "buchhaltung@techcorp.de",
                    subject: "DRINGEND: Sofortige Überweisung erforderlich",
                    content: "Maria, überweise sofort 3.2M an unten stehende IBAN. Vertrauliche Akquisition. Fragen später. - CEO",
                    timestamp: "Montag 16:30",
                    suspicious_elements: ["E-Mail-Header zeigen externe IP", "CEO war im Urlaub", "Ungewöhnlicher Schreibstil"]
                }
            }
        ],
        
        // Mögliche Lösungen
        solutions: [
            {
                theory: "Spear-Phishing CEO-Fraud",
                evidence_needed: ["Gefälschte E-Mail", "Externe IP-Adresse", "CEO war nicht anwesend"],
                confidence: 95,
                explanation: "Klassischer CEO-Fraud via Spear-Phishing. Angreifer recherchierte Firma, fälschte CEO-E-Mail und nutzte Autorität für Sofortüberweisung."
            },
            {
                theory: "Insider-Job Thomas Müller",
                evidence_needed: ["Admin-Zugang", "Timing", "Neuer Mitarbeiter"],
                confidence: 30,
                explanation: "Neuer IT-Admin könnte Zugang missbraucht haben, aber externe IP spricht dagegen."
            }
        ],
        
        // BSI-Kommunikation
        bsi_interaction: {
            type: "phone_call",
            script: "BSI-Hotline: 'Guten Tag, hier spricht Kommissar Weber vom BSI. Wir haben Ihre Meldung erhalten. CEO-Fraud ist leider sehr häufig. Haben Sie bereits die Bank kontaktiert? Wichtig ist jetzt: Sofort alle Überweisungsberechtigungen sperren und Zwei-Faktor-Authentifizierung einführen. Wir senden Ihnen unsere Checkliste für Incident Response.'",
            next_steps: ["Bank kontaktieren", "Strafanzeige stellen", "IT-Sicherheit überprüfen", "Mitarbeiterschulung"]
        },
        
        // Lehren und Prävention
        lessons: [
            "Immer telefonisch rückfragen bei ungewöhnlichen Überweisungsanforderungen",
            "Zwei-Faktor-Authentifizierung für kritische Systeme",
            "E-Mail-Header-Analyse für IT-Teams",
            "Regelmäßige Awareness-Schulungen"
        ],
        
        prevention_measures: [
            "Vier-Augen-Prinzip bei Überweisungen > 10.000€",
            "E-Mail-Signierung für interne kritische Kommunikation",
            "IP-Whitelisting für Admin-Zugriffe",
            "Regelmäßige Phishing-Simulationen"
        ]
    },
    
    {
        id: 2,
        title: "Das Rätsel der singenden Server",
        category: "Industrial Espionage",
        difficulty: "Schwer",
        timeline: "1 Woche",
        description: "Server einer Pharmafirma 'singen' nachts - Frequenzanalyse zeigt versteckte Datenübertragung. Firmenergebnisse landen bei der Konkurrenz.",
        
        initialSituation: {
            time: "Freitag, 22:00 Uhr",
            location: "PharmaGen GmbH, Rechenzentrum",
            discovery: "Nachtwächter hört ungewöhnliche Töne aus Serverraum",
            symptoms: ["Hochfrequente Töne aus Servern", "Konkurrenz kennt geheime Forschungsergebnisse", "Netzwerktraffic unauffällig"]
        },
        
        investigationSteps: [
            {
                step: 1,
                title: "Akustische Analyse",
                description: "Frequenzanalyse der 'singenden' Server",
                technical_evidence: {
                    "Frequenzbereich": "18-22 kHz (unhörbar für die meisten Menschen)",
                    "Muster": "Regelmäßige Impulse, binär kodiert",
                    "Timing": "Nur zwischen 22:00 und 06:00 Uhr",
                    "Quelle": "CPU-Lüfter modulieren Geschwindigkeit"
                },
                revelation: "Daten werden als Schallwellen übertragen!"
            },
            {
                step: 2,
                title: "Air-Gap-Überwindung entdeckt",
                description: "Hochsichere, vom Internet getrennte Systeme sind kompromittiert",
                method: "Akustische Seitenkanal-Attacke",
                how_it_works: "Malware moduliert CPU-Last → Lüftergeschwindigkeit verändert sich → Akustische Signale → Smartphone-App empfängt Daten",
                sophistication: "Nation-State-Level Angriff"
            }
        ],
        
        bsi_interaction: {
            type: "emergency_email",
            content: "VERTRAULICH - BSI Cyber-Abwehr\n\nIhr Fall zeigt Merkmale einer Advanced Persistent Threat (APT). Akustische Exfiltration ist hochspezialisiert. Vermutung: Staatliche Akteure oder Industriespionage.\n\nSOFORT-MASSNAHMEN:\n1. Betroffene Systeme isolieren\n2. Smartphone-Verbot im Serverraum\n3. Akustische Abschirmung prüfen\n4. Forensische Analyse aller Systeme\n\nWir entsenden Spezialistenteam. Höchste Geheimhaltungsstufe.\n\nDr. Sarah Hoffmann\nBSI Cyber-Abwehr"
        }
    },
    
    // Weitere 18 Krimi-Fälle...
    {
        id: 20,
        title: "Der Zeitreisende Hacker",
        category: "Time-based Attack",
        difficulty: "Expert",
        description: "Angriffe passieren, bevor Schwachstellen bekannt sind. Jemand scheint die Zukunft zu kennen - oder manipuliert die Zeit selbst.",
        mystery: "Wie kann jemand Zero-Day-Exploits nutzen, bevor sie entdeckt werden?",
        solution: "Insider bei Antivirus-Hersteller verkauft Informationen über noch nicht öffentliche Schwachstellen"
    }
];

// BSI Chat-Simulator
const BSI_CHAT_RESPONSES = {
    greeting: "Guten Tag! Hier ist das BSI-Incident-Response-Team. Wie können wir Ihnen helfen?",
    
    keywords: {
        "ransomware": "Bei Ransomware-Verdacht: SOFORT alle Systeme isolieren, nicht zahlen, Strafanzeige stellen. Haben Sie aktuelle Backups?",
        "phishing": "Phishing-Mails nicht öffnen, an phishing@bsi.bund.de weiterleiten. Welche Daten könnten kompromittiert sein?",
        "ddos": "DDoS-Angriff? Kontaktieren Sie Ihren Provider für Traffic-Filterung. Dokumentieren Sie Ausfallzeiten für Strafanzeige.",
        "datenleck": "Datenschutzverstoß binnen 72h an Datenschutzbehörde melden. DSGVO Art. 33 beachten. Welche personenbezogenen Daten betroffen?",
        "insider": "Insider-Bedrohung ernst nehmen. Zugriffe sofort entziehen, Logs sichern, HR informieren. Keine Konfrontation!"
    },
    
    escalation: "Ihr Fall erfordert spezialisierte Unterstützung. Wir verbinden Sie mit unserem Incident-Response-Team. Bleiben Sie bitte in der Leitung."
};

// Export für Browser
window.DETECTIVE_CASES = DETECTIVE_CASES;
window.BSI_CHAT_RESPONSES = BSI_CHAT_RESPONSES;
