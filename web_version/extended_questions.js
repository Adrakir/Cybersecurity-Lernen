// Erweiterte Fragen-Datenbank mit 20+ Fragen pro Kategorie
const EXTENDED_QUESTIONS_DB = {
    // IT-Systeme (25 Fragen)
    it_systems: [
        {
            question: "Was ist der Hauptzweck einer Firewall in einem Unternehmensnetzwerk?",
            answers: [
                "Schutz vor Viren und Malware",
                "Kontrolle des Netzwerkverkehrs zwischen verschiedenen Netzwerksegmenten", // Richtig
                "Beschleunigung der Internetverbindung",
                "Backup von wichtigen Daten"
            ],
            correct: 1,
            explanation: "Eine Firewall ist ein Netzwerksicherheitssystem, das den eingehenden und ausgehenden Netzwerkverkehr überwacht und kontrolliert. Sie agiert als Barriere zwischen vertrauenswürdigen internen Netzwerken und nicht vertrauenswürdigen externen Netzwerken wie dem Internet.",
            difficulty: "basic",
            category: "network_security"
        },
        {
            question: "Welche Authentifizierungsmethode bietet die höchste Sicherheit?",
            answers: [
                "Nur Passwort",
                "Zwei-Faktor-Authentifizierung (2FA)", // Richtig
                "Nur Benutzername",
                "Biometrische Daten allein"
            ],
            correct: 1,
            explanation: "Zwei-Faktor-Authentifizierung kombiniert mindestens zwei verschiedene Authentifizierungsfaktoren: Etwas, was Sie wissen (Passwort), etwas, was Sie haben (Smartphone/Token), oder etwas, was Sie sind (Biometrie). Dies bietet deutlich höhere Sicherheit als einzelne Faktoren.",
            difficulty: "basic",
            category: "authentication"
        },
        {
            question: "Was versteht man unter einem 'Zero-Day-Exploit'?",
            answers: [
                "Ein Angriff, der keine Schäden verursacht",
                "Ein Exploit, der eine bisher unbekannte Sicherheitslücke ausnutzt", // Richtig
                "Ein Angriff, der nur einen Tag dauert",
                "Eine Sicherheitslücke, die sofort behoben wird"
            ],
            correct: 1,
            explanation: "Ein Zero-Day-Exploit nutzt eine Sicherheitslücke aus, für die noch kein Patch oder keine Lösung verfügbar ist. Der Begriff 'Zero-Day' bezieht sich darauf, dass Entwickler null Tage Zeit hatten, um das Problem zu beheben, seit es bekannt wurde.",
            difficulty: "advanced",
            category: "threats"
        },
        {
            question: "Welche Verschlüsselungsmethode gilt aktuell als sicher für sensible Daten?",
            answers: [
                "DES (Data Encryption Standard)",
                "MD5-Hash",
                "AES-256 (Advanced Encryption Standard)", // Richtig
                "ROT13"
            ],
            correct: 2,
            explanation: "AES-256 ist ein symmetrischer Verschlüsselungsalgorithmus mit einer Schlüssellänge von 256 Bit. Er gilt als unknackbar mit heutiger Technologie und wird von Regierungen und Unternehmen für die Verschlüsselung hochsensibler Daten verwendet.",
            difficulty: "intermediate",
            category: "cryptography"
        },
        {
            question: "Was ist der Unterschied zwischen einem Virus und einem Wurm?",
            answers: [
                "Viren sind harmloser als Würmer",
                "Würmer verbreiten sich selbstständig, Viren benötigen einen Wirt", // Richtig
                "Viren sind größer als Würmer",
                "Es gibt keinen Unterschied"
            ],
            correct: 1,
            explanation: "Ein Computervirus benötigt ein Wirtsprogramm und verbreitet sich, wenn das infizierte Programm ausgeführt wird. Ein Wurm ist eigenständig und kann sich automatisch über Netzwerke verbreiten, ohne dass ein Nutzer ein Programm ausführen muss.",
            difficulty: "intermediate",
            category: "malware"
        },
        {
            question: "Welche Funktion hat ein Intrusion Detection System (IDS)?",
            answers: [
                "Automatische Softwareupdates",
                "Überwachung und Erkennung von verdächtigen Aktivitäten im Netzwerk", // Richtig
                "Verschlüsselung von Datenübertragungen",
                "Backup-Verwaltung"
            ],
            correct: 1,
            explanation: "Ein IDS überwacht kontinuierlich Netzwerkverkehr und Systemaktivitäten auf Anzeichen von Sicherheitsverletzungen oder verdächtigen Verhaltensweisen. Es alarmiert Administratoren bei erkannten Bedrohungen, kann aber in der Regel nicht aktiv eingreifen.",
            difficulty: "intermediate",
            category: "network_security"
        },
        {
            question: "Was ist ein SQL-Injection-Angriff?",
            answers: [
                "Ein Angriff auf Datenbankserver durch manipulierte SQL-Befehle", // Richtig
                "Das illegale Kopieren von Datenbanken",
                "Ein Virus, der SQL-Server befällt",
                "Eine Methode zur Datenbankoptimierung"
            ],
            correct: 0,
            explanation: "Bei SQL-Injection werden schädliche SQL-Befehle in Eingabefelder eingeschleust, um unerlaubten Zugriff auf Datenbanken zu erlangen. Dies kann zur Offenlegung, Manipulation oder Löschung von Daten führen. Schutz bieten parametrisierte Abfragen und Eingabevalidierung.",
            difficulty: "advanced",
            category: "web_security"
        },
        {
            question: "Welche Bedeutung hat das Prinzip 'Least Privilege' in der IT-Sicherheit?",
            answers: [
                "Nur die teuerste Software verwenden",
                "Benutzern nur die minimal notwendigen Rechte gewähren", // Richtig
                "Alle Benutzer haben die gleichen Rechte",
                "Administratoren haben unbeschränkte Rechte"
            ],
            correct: 1,
            explanation: "Das Prinzip der minimalen Berechtigung besagt, dass Benutzer und Prozesse nur die Zugriffsrechte erhalten sollten, die für ihre Aufgaben absolut notwendig sind. Dies reduziert das Risiko von Sicherheitsverletzungen und begrenzt potenzielle Schäden.",
            difficulty: "intermediate",
            category: "access_control"
        },
        {
            question: "Was ist ein Man-in-the-Middle-Angriff?",
            answers: [
                "Ein Angriff, bei dem sich ein Angreifer in die Kommunikation zwischen zwei Parteien einschaltet", // Richtig
                "Ein physischer Angriff auf Server",
                "Ein Angriff, der nur mittags stattfindet",
                "Eine Form von Malware"
            ],
            correct: 0,
            explanation: "Bei einem Man-in-the-Middle-Angriff positioniert sich ein Angreifer zwischen zwei kommunizierenden Parteien und kann deren Kommunikation abfangen, mitlesen oder manipulieren, ohne dass die Parteien dies bemerken. Schutz bieten verschlüsselte Verbindungen und Zertifikatsprüfung.",
            difficulty: "intermediate",
            category: "network_security"
        },
        {
            question: "Welche Funktion hat ein VPN (Virtual Private Network)?",
            answers: [
                "Beschleunigung der Internetverbindung",
                "Sichere Verbindung über unsichere Netzwerke", // Richtig
                "Kostenloses Internet",
                "Virenscanner für Netzwerke"
            ],
            correct: 1,
            explanation: "Ein VPN erstellt einen verschlüsselten Tunnel über ein unsicheres Netzwerk (wie das Internet), wodurch eine sichere Verbindung zwischen entfernten Standorten oder Benutzern und dem Unternehmensnetzwerk ermöglicht wird. Es schützt Daten vor Abhörung und Manipulation.",
            difficulty: "basic",
            category: "network_security"
        },
        {
            question: "Was ist Cross-Site Scripting (XSS)?",
            answers: [
                "Legitimes Website-Scripting",
                "Einschleusung schädlicher Skripte in Webseiten", // Richtig
                "Eine Programmiersprache",
                "Ein Webserver-Feature"
            ],
            correct: 1,
            explanation: "XSS ermöglicht es Angreifern, schädliche Skripte in Webseiten einzuschleusen, die dann im Browser anderer Benutzer ausgeführt werden. Dies kann zum Diebstahl von Cookies, Session-IDs oder anderen sensiblen Informationen führen. Schutz bietet Eingabevalidierung und Output-Encoding.",
            difficulty: "advanced",
            category: "web_security"
        },
        {
            question: "Welcher Port wird standardmäßig für HTTPS-Verbindungen verwendet?",
            answers: [
                "Port 80",
                "Port 443", // Richtig
                "Port 25",
                "Port 21"
            ],
            correct: 1,
            explanation: "HTTPS (HTTP over SSL/TLS) verwendet standardmäßig Port 443 für verschlüsselte Webverbindungen. Port 80 wird für unverschlüsseltes HTTP verwendet. Die Verschlüsselung durch HTTPS schützt die Datenübertragung zwischen Browser und Webserver vor Abhörung.",
            difficulty: "basic",
            category: "network_security"
        },
        {
            question: "Was ist ein Honeypot in der IT-Sicherheit?",
            answers: [
                "Eine süße Belohnung für gute Sicherheit",
                "Ein Köder-System zur Erkennung von Angriffen", // Richtig
                "Ein verschlüsselter Speicher",
                "Eine Backup-Lösung"
            ],
            correct: 1,
            explanation: "Ein Honeypot ist ein scheinbar verwundbares System, das absichtlich aufgestellt wird, um Angreifer anzulocken und ihre Methoden zu studieren. Es dient zur Früherkennung von Angriffen und zur Sammlung von Informationen über Bedrohungen, ohne echte Systeme zu gefährden.",
            difficulty: "intermediate",
            category: "detection"
        },
        {
            question: "Welche Backup-Strategie folgt der 3-2-1-Regel?",
            answers: [
                "3 Kopien, 2 verschiedene Medien, 1 offsite", // Richtig
                "3 Server, 2 Standorte, 1 Administrator",
                "3 Tage, 2 Wochen, 1 Monat",
                "3 Benutzer, 2 Passwörter, 1 System"
            ],
            correct: 0,
            explanation: "Die 3-2-1-Backup-Regel besagt: Erstellen Sie 3 Kopien Ihrer Daten (Original + 2 Backups), speichern Sie diese auf 2 verschiedenen Medientypen (z.B. Festplatte und Cloud), und bewahren Sie 1 Kopie an einem externen Standort auf. Dies schützt vor verschiedenen Ausfallszenarien.",
            difficulty: "intermediate",
            category: "backup"
        },
        {
            question: "Was ist ein DDoS-Angriff?",
            answers: [
                "Diebstahl von Daten",
                "Überlastung eines Systems durch viele koordinierte Anfragen", // Richtig
                "Physische Zerstörung von Hardware",
                "Verschlüsselung von Daten"
            ],
            correct: 1,
            explanation: "Ein Distributed Denial of Service (DDoS) Angriff verwendet viele kompromittierte Computer (Botnet), um gleichzeitig ein Zielsystem mit Anfragen zu überlasten und dadurch für legitime Benutzer unzugänglich zu machen. Schutz bieten DDoS-Mitigation-Services und Traffic-Filtering.",
            difficulty: "intermediate",
            category: "attacks"
        },
        {
            question: "Welche Informationen sollten in einem Incident Response Plan enthalten sein?",
            answers: [
                "Nur technische Details",
                "Kontaktdaten, Eskalationswege, Wiederherstellungsschritte", // Richtig
                "Nur rechtliche Aspekte",
                "Nur Präventionsmaßnahmen"
            ],
            correct: 1,
            explanation: "Ein effektiver Incident Response Plan sollte Kontaktinformationen für alle Stakeholder, klare Eskalationswege, Schritt-für-Schritt-Wiederherstellungsverfahren, Kommunikationspläne und Rollen/Verantwortlichkeiten enthalten. Dies ermöglicht eine schnelle und koordinierte Reaktion auf Sicherheitsvorfälle.",
            difficulty: "intermediate",
            category: "incident_response"
        },
        {
            question: "Was ist der Unterschied zwischen Verschlüsselung und Hashing?",
            answers: [
                "Kein Unterschied",
                "Verschlüsselung ist umkehrbar, Hashing nicht", // Richtig
                "Hashing ist sicherer",
                "Verschlüsselung ist langsamer"
            ],
            correct: 1,
            explanation: "Verschlüsselung ist ein reversibler Prozess - verschlüsselte Daten können mit dem richtigen Schlüssel wieder entschlüsselt werden. Hashing ist ein einseitiger Prozess - aus einem Hash kann der ursprüngliche Wert nicht zurückgewonnen werden. Hashing wird für Passwort-Speicherung und Datenintegrität verwendet.",
            difficulty: "intermediate",
            category: "cryptography"
        },
        {
            question: "Welche Rolle spielt ein Certificate Authority (CA) in der PKI?",
            answers: [
                "Speicherung von Passwörtern",
                "Ausstellung und Verwaltung digitaler Zertifikate", // Richtig
                "Netzwerk-Routing",
                "Datenbankadministration"
            ],
            correct: 1,
            explanation: "Eine Certificate Authority ist eine vertrauenswürdige Instanz in einer Public Key Infrastructure (PKI), die digitale Zertifikate ausstellt, verwaltet und widerruft. Sie bestätigt die Identität von Personen oder Organisationen und ermöglicht sichere verschlüsselte Kommunikation.",
            difficulty: "advanced",
            category: "cryptography"
        },
        {
            question: "Was ist Social Engineering in der IT-Sicherheit?",
            answers: [
                "Entwicklung sozialer Software",
                "Manipulation von Menschen zur Preisgabe von Informationen", // Richtig
                "Teamarbeit in IT-Projekten",
                "Soziale Netzwerk-Entwicklung"
            ],
            correct: 1,
            explanation: "Social Engineering ist die Kunst der menschlichen Manipulation, um Personen dazu zu bringen, vertrauliche Informationen preiszugeben oder Sicherheitsrichtlinien zu umgehen. Es nutzt menschliche Eigenschaften wie Hilfsbereitschaft, Autoritätshörigkeit oder Neugier aus und ist oft effektiver als technische Angriffe.",
            difficulty: "basic",
            category: "social_engineering"
        },
        {
            question: "Welche Maßnahme ist am wichtigsten für die Smartphone-Sicherheit?",
            answers: [
                "Niemals WLAN benutzen",
                "Regelmäßige Updates und sichere Displaysperre", // Richtig
                "Nur teure Apps kaufen",
                "Flugmodus permanent aktivieren"
            ],
            correct: 1,
            explanation: "Regelmäßige Betriebssystem- und App-Updates schließen Sicherheitslücken. Eine sichere Displaysperre (PIN, Passwort, Biometrie) schützt bei Verlust oder Diebstahl. Zusätzlich wichtig: Downloads nur aus offiziellen App-Stores, Berechtigungen prüfen, und Remote-Wipe-Funktionen aktivieren.",
            difficulty: "basic",
            category: "mobile_security"
        },
        {
            question: "Was charakterisiert Advanced Persistent Threats (APT)?",
            answers: [
                "Schnelle, automatisierte Angriffe",
                "Langfristige, zielgerichtete Angriffe mit hoher Raffinesse", // Richtig
                "Einfache Malware-Infektionen",
                "DDoS-Attacken"
            ],
            correct: 1,
            explanation: "APTs sind hochentwickelte, lang andauernde Cyberangriffe, die oft von staatlichen oder gut finanzierten Gruppen durchgeführt werden. Sie zielen auf spezifische Organisationen ab, nutzen Zero-Day-Exploits, und versuchen unentdeckt zu bleiben, um kontinuierlich Daten zu stehlen oder Systeme zu überwachen.",
            difficulty: "advanced",
            category: "advanced_threats"
        },
        {
            question: "Welcher Ansatz beschreibt 'Defense in Depth'?",
            answers: [
                "Nur eine starke Firewall verwenden",
                "Mehrschichtige Sicherheitsmaßnahmen implementieren", // Richtig
                "Auf Antivirensoftware allein vertrauen",
                "Alle Systeme isoliert betreiben"
            ],
            correct: 1,
            explanation: "Defense in Depth implementiert mehrere Sicherheitsebenen (Firewall, IDS/IPS, Antivirus, Zugangskontrolle, Schulungen, etc.), sodass beim Versagen einer Schutzmaßnahme andere noch greifen. Dieser redundante Ansatz erhöht die Gesamtsicherheit erheblich.",
            difficulty: "intermediate",
            category: "security_architecture"
        },
        {
            question: "Was ist ein Supply Chain Attack?",
            answers: [
                "Angriff auf Lieferketten-Software",
                "Kompromittierung der Software-Lieferkette zur Verbreitung von Malware", // Richtig
                "Physischer Angriff auf Warenlieferungen",
                "Betrug bei Online-Bestellungen"
            ],
            correct: 1,
            explanation: "Supply Chain Attacks zielen darauf ab, vertrauenswürdige Software oder Hardware in der Entwicklungs- oder Vertriebskette zu kompromittieren. Dadurch erhalten Angreifer Zugang zu vielen Zielsystemen. Beispiele sind infizierte Software-Updates oder kompromittierte Bibliotheken.",
            difficulty: "advanced",
            category: "advanced_threats"
        },
        {
            question: "Welche Bedeutung hat SIEM in der IT-Sicherheit?",
            answers: [
                "Software Installation and Error Management",
                "Security Information and Event Management", // Richtig
                "System Integration and Email Monitoring",
                "Server Infrastructure and Equipment Maintenance"
            ],
            correct: 1,
            explanation: "SIEM-Systeme sammeln, analysieren und korrelieren Sicherheitsereignisse aus verschiedenen Quellen in Echtzeit. Sie helfen bei der Erkennung von Sicherheitsvorfällen, Compliance-Reporting und forensischen Untersuchungen durch zentrale Protokollierung und intelligente Alarmierung.",
            difficulty: "advanced",
            category: "security_tools"
        }
    ],
    
    // Geschäftsprozesse (25 Fragen)
    business_processes: [
        {
            question: "Was ist der erste Schritt bei der Erstellung einer Datenschutz-Folgenabschätzung (DSFA)?",
            answers: [
                "Implementierung von Schutzmaßnahmen",
                "Identifikation und Bewertung der Datenverarbeitungsrisiken", // Richtig
                "Schulung der Mitarbeiter",
                "Erstellung von Notfallplänen"
            ],
            correct: 1,
            explanation: "Eine DSFA beginnt mit der systematischen Identifikation und Bewertung der Risiken, die durch eine geplante Datenverarbeitung für die Rechte und Freiheiten der betroffenen Personen entstehen können. Erst danach werden angemessene Schutzmaßnahmen entwickelt und implementiert.",
            difficulty: "intermediate",
            category: "data_protection"
        },
        {
            question: "Welche Rolle spielt ein Data Protection Officer (DPO) nach DSGVO?",
            answers: [
                "IT-Administrator für Datenbanken",
                "Überwachung der Einhaltung von Datenschutzbestimmungen", // Richtig
                "Verkauf von Kundendaten",
                "Entwicklung neuer Software"
            ],
            correct: 1,
            explanation: "Der Datenschutzbeauftragte überwacht die Einhaltung der DSGVO, berät bei datenschutzrechtlichen Fragen, führt Schulungen durch, und fungiert als Ansprechpartner für Aufsichtsbehörden und betroffene Personen. Er muss unabhängig agieren können und direkt der Geschäftsleitung berichten.",
            difficulty: "intermediate",
            category: "data_protection"
        },
        {
            question: "Was umfasst ein Business Continuity Plan (BCP)?",
            answers: [
                "Nur IT-Notfallpläne",
                "Gesamtheitliche Planung zur Aufrechterhaltung kritischer Geschäftsprozesse", // Richtig
                "Nur Backup-Strategien",
                "Nur Personalplanung"
            ],
            correct: 1,
            explanation: "Ein BCP umfasst alle Maßnahmen und Verfahren, die notwendig sind, um kritische Geschäftsprozesse auch bei Störungen, Ausfällen oder Krisen aufrechtzuerhalten. Dazu gehören IT-Systeme, Personal, Infrastruktur, Lieferanten und Kommunikation.",
            difficulty: "intermediate",
            category: "business_continuity"
        },
        {
            question: "Welche Bedeutung hat das Vier-Augen-Prinzip in sensiblen Geschäftsprozessen?",
            answers: [
                "Bessere Sehkraft bei der Arbeit",
                "Kontrolle durch eine zweite Person zur Fehlervermeidung", // Richtig
                "Verwendung von zwei Bildschirmen",
                "Teamarbeit bei allen Aufgaben"
            ],
            correct: 1,
            explanation: "Das Vier-Augen-Prinzip verlangt, dass kritische Entscheidungen oder Handlungen von mindestens zwei Personen überprüft und genehmigt werden. Dies reduziert das Risiko von Fehlern, Betrug und Missbrauch, da eine Person allein keine kritischen Änderungen vornehmen kann.",
            difficulty: "basic",
            category: "internal_controls"
        },
        {
            question: "Was ist eine Risikoanalyse im Kontext von Geschäftsprozessen?",
            answers: [
                "Finanzplanung für das nächste Jahr",
                "Systematische Identifikation und Bewertung von Bedrohungen", // Richtig
                "Marktforschung für neue Produkte",
                "Personalbeurteilung"
            ],
            correct: 1,
            explanation: "Eine Risikoanalyse identifiziert systematisch potenzielle Bedrohungen für Geschäftsprozesse, bewertet deren Eintrittswahrscheinlichkeit und Auswirkungen, und bildet die Grundlage für die Entwicklung angemessener Schutz- und Mitigation-Maßnahmen.",
            difficulty: "basic",
            category: "risk_management"
        },
        {
            question: "Welche Aufgabe hat ein CISO (Chief Information Security Officer)?",
            answers: [
                "Entwicklung neuer IT-Produkte",
                "Strategische Führung der Informationssicherheit", // Richtig
                "Verkauf von IT-Dienstleistungen",
                "Buchhaltung für IT-Ausgaben"
            ],
            correct: 1,
            explanation: "Der CISO ist verantwortlich für die strategische Planung, Implementierung und Überwachung der Informationssicherheit. Er entwickelt Sicherheitsrichtlinien, managt Sicherheitsrisiken, koordiniert Incident Response und berichtet der Geschäftsleitung über Sicherheitslage und -investitionen.",
            difficulty: "intermediate",
            category: "governance"
        },
        {
            question: "Was charakterisiert eine effektive Zugriffskontrolle in Unternehmen?",
            answers: [
                "Alle haben Zugriff auf alles",
                "Rollenbasierte Berechtigungen nach Need-to-Know-Prinzip", // Richtig
                "Nur Manager haben Zugriffsrechte",
                "Passwort-freier Zugang"
            ],
            correct: 1,
            explanation: "Effektive Zugriffskontrolle basiert auf dem Need-to-Know-Prinzip und rollenbasierten Berechtigungen. Benutzer erhalten nur Zugriff auf Ressourcen, die sie für ihre Arbeit benötigen. Regelmäßige Überprüfungen und automatisierte Rechteverwaltung gewährleisten angemessene Kontrolle.",
            difficulty: "intermediate",
            category: "access_management"
        },
        {
            question: "Welche Komponenten gehören zu einem Informationssicherheitsmanagementsystem (ISMS)?",
            answers: [
                "Nur technische Schutzmaßnahmen",
                "Richtlinien, Prozesse, Kontrollen und kontinuierliche Verbesserung", // Richtig
                "Nur Software-Tools",
                "Nur Schulungsmaßnahmen"
            ],
            correct: 1,
            explanation: "Ein ISMS umfasst alle organisatorischen, technischen und personellen Maßnahmen zur systematischen Planung, Durchführung, Überwachung und Verbesserung der Informationssicherheit. Es folgt meist Standards wie ISO 27001 und basiert auf dem PDCA-Zyklus (Plan-Do-Check-Act).",
            difficulty: "advanced",
            category: "isms"
        },
        {
            question: "Was ist der Zweck einer Vendor Risk Assessment?",
            answers: [
                "Preisverhandlungen mit Lieferanten",
                "Bewertung der Sicherheitsrisiken von Drittanbietern", // Richtig
                "Qualitätskontrolle von Produkten",
                "Marketinganalyse von Partnern"
            ],
            correct: 1,
            explanation: "Vendor Risk Assessments bewerten die Sicherheitsrisiken, die durch die Zusammenarbeit mit Drittanbietern entstehen. Sie prüfen deren Sicherheitsmaßnahmen, Compliance-Status und potenzielle Auswirkungen auf die eigene Sicherheitslage, bevor Verträge abgeschlossen werden.",
            difficulty: "intermediate",
            category: "third_party_risk"
        },
        {
            question: "Welche Bedeutung hat Segregation of Duties (SoD) in kritischen Prozessen?",
            answers: [
                "Mitarbeiter sollen verschiedene Fähigkeiten haben",
                "Aufgabentrennung zur Betrugs- und Fehlervermeidung", // Richtig
                "Arbeitsplätze sollen getrennt sein",
                "Verschiedene Abteilungen sollen nicht kommunizieren"
            ],
            correct: 1,
            explanation: "Segregation of Duties teilt kritische Prozesse auf verschiedene Personen auf, sodass keine Einzelperson einen kompletten kritischen Prozess allein ausführen kann. Dies verhindert Betrug, Fehler und Interessenkonflikte, da mehrere Personen beteiligt sein müssen.",
            difficulty: "intermediate",
            category: "internal_controls"
        },
        {
            question: "Was ist ein Privacy Impact Assessment (PIA)?",
            answers: [
                "Prüfung der Büroausstattung",
                "Bewertung der Auswirkungen auf den Datenschutz", // Richtig
                "Analyse der Internetnutzung",
                "Überprüfung von Arbeitszeiten"
            ],
            correct: 1,
            explanation: "Ein PIA bewertet systematisch, wie sich geplante Projekte, Systeme oder Prozesse auf die Privatsphäre und den Datenschutz auswirken könnten. Es identifiziert Datenschutzrisiken frühzeitig und entwickelt Maßnahmen zum Schutz personenbezogener Daten.",
            difficulty: "intermediate",
            category: "privacy"
        },
        {
            question: "Welche Rolle spielt Change Management in der IT-Sicherheit?",
            answers: [
                "Verwaltung von Geldwechsel",
                "Kontrollierte Durchführung von Systemänderungen", // Richtig
                "Personalwechsel im Unternehmen",
                "Änderung der Büroeinrichtung"
            ],
            correct: 1,
            explanation: "IT-Change Management stellt sicher, dass Änderungen an IT-Systemen kontrolliert, dokumentiert und genehmigt durchgeführt werden. Dies verhindert Sicherheitslücken durch ungeplante Änderungen und gewährleistet, dass Sicherheitsaspekte bei allen Modifikationen berücksichtigt werden.",
            difficulty: "intermediate",
            category: "change_management"
        },
        {
            question: "Was umfasst das Prinzip der Datenminimierung nach DSGVO?",
            answers: [
                "Minimale Kosten für Datenspeicherung",
                "Erhebung nur notwendiger und angemessener Daten", // Richtig
                "Verwendung minimaler Festplattenkapazität",
                "Reduzierung der Mitarbeiteranzahl"
            ],
            correct: 1,
            explanation: "Datenminimierung bedeutet, dass personenbezogene Daten dem Zweck angemessen, erheblich und auf das notwendige Maß beschränkt sein müssen. Es dürfen nur Daten erhoben werden, die für den spezifischen Zweck erforderlich sind.",
            difficulty: "basic",
            category: "data_protection"
        },
        {
            question: "Welche Funktion haben Business Impact Analyses (BIA)?",
            answers: [
                "Gewinnanalyse für Produkte",
                "Bewertung der Auswirkungen von Geschäftsunterbrechungen", // Richtig
                "Marktanalyse für Expansion",
                "Analyse von Kundenzufriedenheit"
            ],
            correct: 1,
            explanation: "Eine BIA identifiziert und bewertet die potenziellen Auswirkungen von Störungen auf kritische Geschäftsprozesse. Sie bestimmt Recovery Time Objectives (RTO) und Recovery Point Objectives (RPO) und hilft bei der Priorisierung von Wiederherstellungsmaßnahmen.",
            difficulty: "intermediate",
            category: "business_continuity"
        },
        {
            question: "Was ist ein Compliance Framework?",
            answers: [
                "Rahmen für Produktentwicklung",
                "Strukturierter Ansatz zur Einhaltung regulatorischer Anforderungen", // Richtig
                "Software für Projektmanagement",
                "Framework für Webentwicklung"
            ],
            correct: 1,
            explanation: "Ein Compliance Framework bietet eine strukturierte Methodik zur Identifikation, Implementierung und Überwachung der Einhaltung gesetzlicher, regulatorischer und branchenspezifischer Anforderungen. Es umfasst Richtlinien, Verfahren und Kontrollen.",
            difficulty: "intermediate",
            category: "compliance"
        },
        {
            question: "Welche Bedeutung hat Asset Management in der IT-Sicherheit?",
            answers: [
                "Verwaltung von Finanzanlagen",
                "Inventarisierung und Schutz von IT-Ressourcen", // Richtig
                "Management von Immobilien",
                "Verwaltung von Kundendaten"
            ],
            correct: 1,
            explanation: "IT-Asset Management erfasst, klassifiziert und überwacht alle IT-Ressourcen (Hardware, Software, Daten). Es bildet die Grundlage für Sicherheitsmaßnahmen, da man nur schützen kann, was man kennt. Es umfasst auch Lizenzmanagement und Lifecycle-Planung.",
            difficulty: "basic",
            category: "asset_management"
        },
        {
            question: "Was charakterisiert eine effektive Incident Response Governance?",
            answers: [
                "Schnelle Problemlösung ohne Dokumentation",
                "Klare Rollen, Eskalationswege und Kommunikationspläne", // Richtig
                "Nur technische Lösungsansätze",
                "Externe Dienstleister für alle Vorfälle"
            ],
            correct: 1,
            explanation: "Effektive Incident Response Governance definiert klare Verantwortlichkeiten, Eskalationswege, Kommunikationspläne und Entscheidungsbefugnisse. Sie stellt sicher, dass Sicherheitsvorfälle koordiniert, effizient und mit angemessener Management-Beteiligung behandelt werden.",
            difficulty: "intermediate",
            category: "incident_management"
        },
        {
            question: "Welche Funktion hat ein Data Loss Prevention (DLP) System?",
            answers: [
                "Wiederherstellung verlorener Daten",
                "Überwachung und Verhinderung unerlaubter Datenübertragung", // Richtig
                "Automatische Datensicherung",
                "Beschleunigung von Datenübertragungen"
            ],
            correct: 1,
            explanation: "DLP-Systeme überwachen Datenflüsse in Echtzeit und verhindern unerlaubte Übertragung sensibler Daten über verschiedene Kanäle (E-Mail, USB, Cloud). Sie erkennen vertrauliche Inhalte durch Pattern-Matching und Content-Analyse und können Übertragungen blockieren oder melden.",
            difficulty: "intermediate",
            category: "data_protection"
        },
        {
            question: "Was ist der Zweck von Security Awareness Training?",
            answers: [
                "Technische Schulung für IT-Personal",
                "Sensibilisierung aller Mitarbeiter für Sicherheitsrisiken", // Richtig
                "Verkaufstraining für Sicherheitsprodukte",
                "Wartung von Sicherheitssystemen"
            ],
            correct: 1,
            explanation: "Security Awareness Training sensibilisiert alle Mitarbeiter für Sicherheitsrisiken und vermittelt sicherheitsbewusstes Verhalten. Es adressiert den 'menschlichen Faktor' als oft schwächstes Glied in der Sicherheitskette und reduziert Risiken durch Social Engineering und menschliche Fehler.",
            difficulty: "basic",
            category: "awareness"
        },
        {
            question: "Welche Komponenten gehören zu einem effektiven Privileged Access Management (PAM)?",
            answers: [
                "Nur Passwort-Manager",
                "Verwaltung, Überwachung und Kontrolle privilegierter Konten", // Richtig
                "Nur Benutzerregistrierung",
                "Nur Session-Recording"
            ],
            correct: 1,
            explanation: "PAM umfasst Discovery privilegierter Konten, sichere Speicherung von Credentials, Just-in-Time-Access, Session-Monitoring, regelmäßige Passwort-Rotation und umfassende Auditierung. Es schützt vor Missbrauch administrativer Zugänge und reduziert das Risiko von Insider-Bedrohungen.",
            difficulty: "advanced",
            category: "access_management"
        },
        {
            question: "Was ist eine Threat Intelligence Platform?",
            answers: [
                "Software für Bedrohungsanalyse und -vorhersage", // Richtig
                "Künstliche Intelligenz für Chatbots",
                "Plattform für Online-Bedrohungen",
                "System für Wetterdatenanalyse"
            ],
            correct: 0,
            explanation: "Threat Intelligence Platforms sammeln, analysieren und korrelieren Informationen über aktuelle und aufkommende Bedrohungen aus verschiedenen Quellen. Sie helfen Organisationen, proaktiv auf Bedrohungen zu reagieren und ihre Verteidigungsstrategien anzupassen.",
            difficulty: "advanced",
            category: "threat_intelligence"
        },
        {
            question: "Welche Rolle spielt Encryption Key Management?",
            answers: [
                "Verwaltung von Türschlüsseln",
                "Sichere Verwaltung kryptographischer Schlüssel", // Richtig
                "Management von Produktschlüsseln",
                "Verwaltung von Zugangscodes"
            ],
            correct: 1,
            explanation: "Key Management umfasst die sichere Generierung, Verteilung, Speicherung, Rotation und Zerstörung kryptographischer Schlüssel. Schwaches Key Management kann die stärkste Verschlüsselung nutzlos machen. Standards wie FIPS 140-2 definieren Anforderungen für sichere Key Management Systeme.",
            difficulty: "advanced",
            category: "cryptography"
        },
        {
            question: "Was charakterisiert Zero Trust Architecture?",
            answers: [
                "Vertrauen in bekannte Benutzer",
                "Kontinuierliche Verifikation und minimales Vertrauen", // Richtig
                "Vollständiges Vertrauen in interne Netzwerke",
                "Vertrauen basierend auf Standort"
            ],
            correct: 1,
            explanation: "Zero Trust basiert auf dem Prinzip 'Never trust, always verify'. Jeder Zugriff wird kontinuierlich verifiziert, unabhängig von Standort oder Netzwerksegment. Es umfasst Identitätsverifikation, Gerätenauthentifizierung, Mikrosegmentierung und kontinuierliche Überwachung.",
            difficulty: "advanced",
            category: "security_architecture"
        },
        {
            question: "Welche Bedeutung hat DevSecOps für moderne Unternehmen?",
            answers: [
                "Trennung von Entwicklung und Sicherheit",
                "Integration von Sicherheit in den gesamten Entwicklungsprozess", // Richtig
                "Sicherheit nur in der Produktionsphase",
                "Separate Sicherheitsteams für jedes Projekt"
            ],
            correct: 1,
            explanation: "DevSecOps integriert Sicherheit von Anfang an in den Entwicklungsprozess ('Shift Left'). Sicherheitstests, Code-Analyse und Compliance-Prüfungen werden automatisiert in CI/CD-Pipelines eingebaut, um Sicherheitslücken frühzeitig zu erkennen und zu beheben.",
            difficulty: "advanced",
            category: "devsecops"
        },
        {
            question: "Was umfasst ein Cloud Security Posture Management (CSPM)?",
            answers: [
                "Nur Kostenkontrolle für Cloud-Services",
                "Kontinuierliche Überwachung und Korrektur von Cloud-Konfigurationen", // Richtig
                "Nur Backup-Verwaltung in der Cloud",
                "Performance-Monitoring von Cloud-Anwendungen"
            ],
            correct: 1,
            explanation: "CSPM automatisiert die Erkennung und Behebung von Fehlkonfigurationen in Cloud-Umgebungen. Es überwacht kontinuierlich Cloud-Ressourcen auf Compliance-Verstöße, Sicherheitslücken und bewährte Praktiken und kann automatisch Korrekturen durchführen oder Alarme senden.",
            difficulty: "advanced",
            category: "cloud_security"
        }
    ]
};

// Funktion zum Laden erweiterter Inhalte
function loadExtendedContent() {
    // Integration der erweiterten Fragen in das Hauptsystem
    if (typeof window.questionsDatabase !== 'undefined') {
        // Erweiterte Fragen zu bestehenden Kategorien hinzufügen
        Object.keys(EXTENDED_QUESTIONS_DB).forEach(category => {
            if (!window.questionsDatabase[category]) {
                window.questionsDatabase[category] = [];
            }
            window.questionsDatabase[category] = 
                window.questionsDatabase[category].concat(EXTENDED_QUESTIONS_DB[category]);
        });
    }
}

// Funktionen für erweiterte Quizfunktionalität
function generateDetailedQuiz(category, questionCount = 20) {
    const categoryQuestions = EXTENDED_QUESTIONS_DB[category] || [];
    const selectedQuestions = categoryQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(questionCount, categoryQuestions.length));
    
    return {
        questions: selectedQuestions,
        totalQuestions: selectedQuestions.length,
        category: category,
        timestamp: new Date().toISOString()
    };
}

function renderDetailedQuestion(question, questionIndex) {
    return `
        <div class="detailed-question-container">
            <div class="question-header">
                <span class="question-number">Frage ${questionIndex + 1}</span>
                <span class="difficulty-badge ${question.difficulty}">${question.difficulty}</span>
                <span class="category-tag">${question.category}</span>
            </div>
            
            <div class="question-text">
                <h3>${question.question}</h3>
            </div>
            
            <div class="answers-container">
                ${question.answers.map((answer, index) => `
                    <label class="answer-option">
                        <input type="radio" name="question_${questionIndex}" value="${index}">
                        <span class="answer-text">${answer}</span>
                    </label>
                `).join('')}
            </div>
            
            <div class="question-explanation" style="display: none;">
                <div class="explanation-header">
                    <h4>📚 Erklärung:</h4>
                </div>
                <p class="explanation-text">${question.explanation}</p>
            </div>
        </div>
    `;
}

function showDetailedResults(userAnswers, questions) {
    let correctAnswers = 0;
    let totalQuestions = questions.length;
    
    const resultsHTML = questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) correctAnswers++;
        
        return `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-header">
                    <h4>Frage ${index + 1}: ${isCorrect ? '✅ Richtig' : '❌ Falsch'}</h4>
                    <span class="points">${isCorrect ? '+1' : '0'} Punkt${isCorrect ? '' : 'e'}</span>
                </div>
                
                <div class="result-question">${question.question}</div>
                
                <div class="result-answers">
                    <div class="user-answer">
                        <strong>Ihre Antwort:</strong> ${question.answers[userAnswer] || 'Nicht beantwortet'}
                    </div>
                    <div class="correct-answer">
                        <strong>Richtige Antwort:</strong> ${question.answers[question.correct]}
                    </div>
                </div>
                
                <div class="result-explanation">
                    <h5>💡 Erklärung:</h5>
                    <p>${question.explanation}</p>
                </div>
            </div>
        `;
    }).join('');
    
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const gradeInfo = getGradeInfo(scorePercentage);
    
    return `
        <div class="detailed-results-container">
            <div class="score-summary">
                <h2>📊 Quiz-Ergebnis</h2>
                <div class="score-circle">
                    <span class="score-percentage">${scorePercentage}%</span>
                    <span class="score-fraction">${correctAnswers}/${totalQuestions}</span>
                </div>
                <div class="grade-info">
                    <span class="grade ${gradeInfo.class}">${gradeInfo.grade}</span>
                    <span class="grade-description">${gradeInfo.description}</span>
                </div>
            </div>
            
            <div class="performance-metrics">
                <div class="metric">
                    <span class="metric-label">Richtige Antworten:</span>
                    <span class="metric-value">${correctAnswers}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Falsche Antworten:</span>
                    <span class="metric-value">${totalQuestions - correctAnswers}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Erfolgsquote:</span>
                    <span class="metric-value">${scorePercentage}%</span>
                </div>
            </div>
            
            <div class="detailed-results">
                <h3>📋 Detaillierte Auswertung</h3>
                ${resultsHTML}
            </div>
            
            <div class="learning-recommendations">
                <h3>📚 Lernempfehlungen</h3>
                ${generateLearningRecommendations(userAnswers, questions)}
            </div>
        </div>
    `;
}

function getGradeInfo(percentage) {
    if (percentage >= 95) return { grade: 'A+', class: 'excellent', description: 'Ausgezeichnet! Hervorragende Kenntnisse.' };
    if (percentage >= 90) return { grade: 'A', class: 'excellent', description: 'Sehr gut! Exzellente Leistung.' };
    if (percentage >= 85) return { grade: 'A-', class: 'very-good', description: 'Sehr gut! Starke Kenntnisse.' };
    if (percentage >= 80) return { grade: 'B+', class: 'good', description: 'Gut! Solide Kenntnisse.' };
    if (percentage >= 75) return { grade: 'B', class: 'good', description: 'Gut! Grundlagen sind verstanden.' };
    if (percentage >= 70) return { grade: 'B-', class: 'satisfactory', description: 'Befriedigend. Noch Verbesserungspotenzial.' };
    if (percentage >= 65) return { grade: 'C+', class: 'satisfactory', description: 'Befriedigend. Grundlagen vorhanden.' };
    if (percentage >= 60) return { grade: 'C', class: 'satisfactory', description: 'Ausreichend. Weitere Übung empfohlen.' };
    if (percentage >= 55) return { grade: 'C-', class: 'poor', description: 'Ausreichend. Intensivere Beschäftigung nötig.' };
    if (percentage >= 50) return { grade: 'D', class: 'poor', description: 'Mangelhaft. Grundlagen wiederholen.' };
    return { grade: 'F', class: 'fail', description: 'Ungenügend. Umfassende Wiederholung erforderlich.' };
}

function generateLearningRecommendations(userAnswers, questions) {
    const incorrectCategories = {};
    const difficultyCounts = { basic: 0, intermediate: 0, advanced: 0 };
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (!isCorrect) {
            if (!incorrectCategories[question.category]) {
                incorrectCategories[question.category] = 0;
            }
            incorrectCategories[question.category]++;
            difficultyCounts[question.difficulty]++;
        }
    });
    
    const recommendations = [];
    
    // Kategorien mit den meisten Fehlern
    const sortedCategories = Object.entries(incorrectCategories)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    if (sortedCategories.length > 0) {
        recommendations.push(`
            <div class="recommendation-section">
                <h4>🎯 Schwerpunkte für weiteres Lernen:</h4>
                <ul>
                    ${sortedCategories.map(([category, count]) => 
                        `<li><strong>${category.replace(/_/g, ' ')}</strong>: ${count} Fehler - Wiederholen Sie die Grundlagen in diesem Bereich</li>`
                    ).join('')}
                </ul>
            </div>
        `);
    }
    
    // Schwierigkeitsgrad-spezifische Empfehlungen
    if (difficultyCounts.basic > 0) {
        recommendations.push(`
            <div class="recommendation-section">
                <h4>📚 Grundlagen vertiefen:</h4>
                <p>Sie hatten ${difficultyCounts.basic} Fehler bei Grundfragen. Konzentrieren Sie sich auf fundamentale Konzepte der IT-Sicherheit.</p>
            </div>
        `);
    }
    
    if (difficultyCounts.advanced > 0) {
        recommendations.push(`
            <div class="recommendation-section">
                <h4>🚀 Fortgeschrittene Themen:</h4>
                <p>Bei ${difficultyCounts.advanced} fortgeschrittenen Fragen gab es Fehler. Vertiefen Sie Ihr Expertenwissen durch Fachliteratur und Zertifizierungen.</p>
            </div>
        `);
    }
    
    return recommendations.join('') || '<p>Excellente Leistung! Keine spezifischen Lernempfehlungen erforderlich.</p>';
}

// CSS für erweiterte Quiz-Funktionalität
const extendedQuizStyles = `
    .detailed-question-container {
        background: white;
        border-radius: 10px;
        padding: 25px;
        margin: 20px 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .question-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #f0f0f0;
    }
    
    .difficulty-badge {
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .difficulty-badge.basic { background: #d4edda; color: #155724; }
    .difficulty-badge.intermediate { background: #fff3cd; color: #856404; }
    .difficulty-badge.advanced { background: #f8d7da; color: #721c24; }
    
    .category-tag {
        background: #e9ecef;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.7em;
        color: #495057;
    }
    
    .detailed-results-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .score-summary {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .score-circle {
        display: inline-block;
        margin: 20px;
    }
    
    .score-percentage {
        font-size: 3em;
        font-weight: bold;
        display: block;
    }
    
    .grade.excellent { color: #28a745; }
    .grade.very-good { color: #20c997; }
    .grade.good { color: #ffc107; }
    .grade.satisfactory { color: #fd7e14; }
    .grade.poor { color: #dc3545; }
    .grade.fail { color: #6f42c1; }
    
    .result-item {
        background: white;
        margin: 15px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .result-item.correct {
        border-left: 5px solid #28a745;
    }
    
    .result-item.incorrect {
        border-left: 5px solid #dc3545;
    }
    
    .learning-recommendations {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin-top: 30px;
    }
    
    .recommendation-section {
        margin: 15px 0;
    }
`;

// Style hinzufügen
if (!document.getElementById('extended-quiz-styles')) {
    const extendedStyleSheet = document.createElement('style');
    extendedStyleSheet.id = 'extended-quiz-styles';
    extendedStyleSheet.textContent = extendedQuizStyles;
    document.head.appendChild(extendedStyleSheet);
}

// Erweiterte Inhalte beim Laden verfügbar machen
if (typeof window !== 'undefined') {
    window.EXTENDED_QUESTIONS_DB = EXTENDED_QUESTIONS_DB;
    window.loadExtendedContent = loadExtendedContent;
    window.generateDetailedQuiz = generateDetailedQuiz;
    window.renderDetailedQuestion = renderDetailedQuestion;
    window.showDetailedResults = showDetailedResults;
    
    // Automatisches Laden beim Seitenstart
    document.addEventListener('DOMContentLoaded', loadExtendedContent);
}
