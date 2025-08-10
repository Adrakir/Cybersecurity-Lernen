// Cyber-Security & Datenschutz Fragendatenbank
// Didaktisch strukturiert nach Bloom'scher Taxonomie und Kompetenzlevels
// Erweitert um Lernfeld 4 und zusätzliche Module

const cybersecurityData = {
    // Lernfeld 4: Einfache IT-Systeme und Netzwerke
    lernfeld4: {
        title: "📚 Lernfeld 4: IT-Systeme und Netzwerke",
        description: "Grundlagen der IT-Infrastruktur, Netzwerktechnik und Systemadministration",
        difficulty: "Grundlagen",
        questions: [
            {
                id: "lf4_1",
                question: "Welche Aussage zum OSI-Modell ist korrekt?",
                options: [
                    "Das OSI-Modell hat 5 Schichten",
                    "Das OSI-Modell ist ein 7-Schichten-Referenzmodell für Netzwerkkommunikation",
                    "OSI steht für Open System Internet",
                    "Das OSI-Modell wird nur bei Windows-Systemen verwendet"
                ],
                correct: 1,
                explanation: "**OSI-Modell (Open Systems Interconnection):**\n\n**7 Schichten:**\n1. **Physical Layer** - Übertragungsmedium\n2. **Data Link Layer** - Rahmen, MAC-Adressen\n3. **Network Layer** - IP-Routing\n4. **Transport Layer** - TCP/UDP\n5. **Session Layer** - Sitzungsverwaltung\n6. **Presentation Layer** - Verschlüsselung, Kompression\n7. **Application Layer** - Anwendungsprotokolle\n\n**Zweck:** Standardisierung der Netzwerkkommunikation"
            },
            {
                id: "lf4_2",
                question: "Was ist der Unterschied zwischen Hub, Switch und Router?",
                options: [
                    "Alle drei Geräte funktionieren identisch",
                    "Hub arbeitet auf Schicht 1, Switch auf Schicht 2, Router auf Schicht 3",
                    "Router sind veraltet und werden nicht mehr verwendet",
                    "Switch und Hub sind dasselbe Gerät"
                ],
                correct: 1,
                explanation: "**Netzwerkgeräte im Vergleich:**\n\n**Hub (Schicht 1 - Physical):**\n• Einfacher Repeater\n• Alle Ports teilen sich Bandbreite\n• Collision Domain für alle Ports\n• Heute obsolet\n\n**Switch (Schicht 2 - Data Link):**\n• MAC-Adress-Tabelle\n• Jeder Port eigene Collision Domain\n• Volle Bandbreite pro Port\n• Store-and-Forward\n\n**Router (Schicht 3 - Network):**\n• IP-Routing zwischen Netzwerken\n• Trennt Broadcast Domains\n• Routing-Tabellen\n• Gateway-Funktionalität"
            },
            {
                id: "lf4_3",
                question: "Welche IP-Adresse gehört zu einem privaten Netzwerk nach RFC 1918?",
                options: [
                    "8.8.8.8",
                    "192.168.1.100",
                    "172.217.16.14",
                    "203.0.113.1"
                ],
                correct: 1,
                explanation: "**Private IP-Adressbereiche (RFC 1918):**\n\n• **Klasse A:** 10.0.0.0 - 10.255.255.255 (/8)\n• **Klasse B:** 172.16.0.0 - 172.31.255.255 (/12)\n• **Klasse C:** 192.168.0.0 - 192.168.255.255 (/16)\n\n**Andere Adressen:**\n• 8.8.8.8 - Google DNS (öffentlich)\n• 172.217.16.14 - Google (öffentlich)\n• 203.0.113.1 - Dokumentationsbereich\n\n**Zweck:** NAT, interne Netzwerke ohne Internet-Routing"
            },
            {
                id: "lf4_4",
                question: "Was beschreibt die Subnetzmaske 255.255.255.0 in CIDR-Notation?",
                options: [
                    "/8",
                    "/16", 
                    "/24",
                    "/32"
                ],
                correct: 2,
                explanation: "**Subnetzmasken und CIDR:**\n\n**255.255.255.0 = /24:**\n• 24 Bits für Netzwerkteil\n• 8 Bits für Host-Teil\n• 254 nutzbare Host-Adressen\n• Typisches Class-C Netzwerk\n\n**Weitere Beispiele:**\n• 255.0.0.0 = /8 (Class A)\n• 255.255.0.0 = /16 (Class B)\n• 255.255.255.255 = /32 (Host-Route)\n\n**CIDR (Classless Inter-Domain Routing):** Flexible Subnetzaufteilung"
            },
            {
                id: "lf4_5",
                question: "Welche Aussage zu DHCP ist korrekt?",
                options: [
                    "DHCP vergibt statische IP-Adressen",
                    "DHCP arbeitet nur mit IPv6",
                    "DHCP vergibt automatisch IP-Konfigurationen an Clients",
                    "DHCP ist ein Routing-Protokoll"
                ],
                correct: 2,
                explanation: "**DHCP (Dynamic Host Configuration Protocol):**\n\n**Funktionen:**\n• Automatische IP-Adresszuweisung\n• Subnetzmaske, Gateway, DNS-Server\n• Lease-Zeit für Adressen\n• Reservierungen möglich\n\n**DHCP-Prozess:**\n1. **Discover** - Client sucht DHCP-Server\n2. **Offer** - Server bietet Konfiguration\n3. **Request** - Client fordert spezifische IP\n4. **Acknowledge** - Server bestätigt\n\n**Ports:** UDP 67 (Server), UDP 68 (Client)"
            }
        ]
    },

    // 1. Grundlagen der IT-Sicherheit (erweitert)
    grundlagen: {
        title: "🔒 Grundlagen der IT-Sicherheit",
        description: "Fundamentale Prinzipien und Standards der Informationssicherheit",
        difficulty: "Grundlagen",
        questions: [
            {
                id: "g1",
                question: "Was bedeutet die CIA-Triade in der IT-Sicherheit?",
                options: [
                    "Central Intelligence Agency - US-Geheimdienst",
                    "Confidentiality, Integrity, Availability - Vertraulichkeit, Integrität, Verfügbarkeit",
                    "Computer Information Analysis - Computerinformationsanalyse",
                    "Cyber Intelligence Assessment - Cyber-Intelligenz-Bewertung"
                ],
                correct: 1,
                explanation: "Die CIA-Triade ist das fundamentale Modell der Informationssicherheit:\n• **Confidentiality (Vertraulichkeit)**: Schutz vor unbefugtem Zugriff\n• **Integrity (Integrität)**: Schutz vor unbefugter Veränderung\n• **Availability (Verfügbarkeit)**: Sicherstellung der Erreichbarkeit von Systemen und Daten"
            },
            {
                id: "g2",
                question: "Welche Aussage zum BSI IT-Grundschutz ist korrekt?",
                options: [
                    "Der IT-Grundschutz ist nur für Bundesbehörden verpflichtend",
                    "IT-Grundschutz bietet einen systematischen Ansatz zur Ermittlung und Umsetzung von Sicherheitsmaßnahmen",
                    "IT-Grundschutz ersetzt vollständig eine Risikoanalyse",
                    "IT-Grundschutz ist nur für große Unternehmen geeignet"
                ],
                correct: 1,
                explanation: "Der BSI IT-Grundschutz:\n• Bietet systematische Methodik für Informationssicherheit\n• Enthält Bausteine für Organisation, Infrastruktur, IT-Systeme\n• Ist für alle Organisationsgrößen anwendbar\n• Ergänzt, aber ersetzt nicht vollständig Risikoanalysen\n• Gliedert sich in Basis-, Standard- und Kernschutz"
            }
        ]
    },

    // Cloud Security
    cloud: {
        title: "☁️ Cloud Security",
        description: "Sicherheit in Cloud-Umgebungen und Shared Responsibility",
        difficulty: "Fortgeschritten",
        questions: [
            {
                id: "c1",
                question: "Was beschreibt das Shared Responsibility Model in der Cloud?",
                options: [
                    "Alle Sicherheitsaspekte liegen beim Cloud-Provider",
                    "Aufteilung der Sicherheitsverantwortung zwischen Provider und Kunde",
                    "Nur der Kunde ist für Sicherheit verantwortlich",
                    "Sicherheit wird automatisch durch KI gewährleistet"
                ],
                correct: 1,
                explanation: "**Shared Responsibility Model:**\n\n**Cloud Provider verantwortlich für:**\n• Physische Sicherheit der Rechenzentren\n• Infrastruktursicherheit\n• Hypervisor und Host-Betriebssystem\n• Netzwerk-Controls\n\n**Kunde verantwortlich für:**\n• Guest-Betriebssystem und Patches\n• Anwendungssicherheit\n• Identitäts- und Zugriffsverwaltung\n• Datenverschlüsselung\n• Netzwerk-Traffic-Schutz\n\n**Je nach Service-Modell (IaaS/PaaS/SaaS) variiert die Aufteilung**"
            },
            {
                id: "c2",
                question: "Was ist ein Cloud Access Security Broker (CASB)?",
                options: [
                    "Ein Cloud-Storage-Anbieter",
                    "Sicherheits-Gateway zwischen Unternehmen und Cloud-Services",
                    "Ein Verschlüsselungsprotokoll",
                    "Ein Cloud-Monitoring-Tool"
                ],
                correct: 1,
                explanation: "**CASB (Cloud Access Security Broker):**\n\n**Funktionen:**\n• Sichtbarkeit in Cloud-Nutzung\n• Data Loss Prevention (DLP)\n• Threat Protection\n• Compliance-Überwachung\n\n**Deployment-Modi:**\n• API-basiert (out-of-band)\n• Proxy-basiert (inline)\n• Hybrid-Ansätze\n\n**Use Cases:**\n• Shadow IT Discovery\n• Datenklassifizierung\n• Anomalieerkennung\n• Compliance-Reporting"
            }
        ]
    },

    // Compliance & Recht
    compliance: {
        title: "⚖️ Compliance & Recht",
        description: "Rechtliche Anforderungen und Compliance-Standards",
        difficulty: "Experte",
        questions: [
            {
                id: "comp1",
                question: "Was regelt die DSGVO in Bezug auf Datenschutzverletzungen?",
                options: [
                    "Meldung nur bei schwerwiegenden Verstößen",
                    "Meldung an Aufsichtsbehörde binnen 72 Stunden, betroffene Personen ohne unbegründete Verzögerung",
                    "Meldung nur an betroffene Personen erforderlich",
                    "Keine spezifischen Meldepflichten"
                ],
                correct: 1,
                explanation: "**DSGVO Meldepflichten (Art. 33/34):**\n\n**An Aufsichtsbehörde (Art. 33):**\n• Binnen 72 Stunden nach Bekanntwerden\n• Bei voraussichtlich hohem Risiko für Rechte und Freiheiten\n• Dokumentation aller Verletzungen\n\n**An betroffene Personen (Art. 34):**\n• Ohne unbegründete Verzögerung\n• Bei voraussichtlich hohem Risiko\n• Klare und einfache Sprache\n\n**Ausnahmen:** Angemessene technische/organisatorische Schutzmaßnahmen (z.B. Verschlüsselung)"
            },
            {
                id: "comp2",
                question: "Was versteht man unter KRITIS-Betreibern?",
                options: [
                    "Kritiker der IT-Sicherheit",
                    "Betreiber kritischer Infrastrukturen mit besonderen Sicherheitspflichten",
                    "Krisenmanagement-Teams",
                    "IT-Support-Unternehmen"
                ],
                correct: 1,
                explanation: "**KRITIS (Kritische Infrastrukturen):**\n\n**Sektoren:**\n• Energie (Strom, Gas, Mineralöl)\n• Informationstechnik und Telekommunikation\n• Transport und Verkehr\n• Gesundheit\n• Wasser und Abwasser\n• Ernährung\n• Finanz- und Versicherungswesen\n\n**Pflichten:**\n• Mindeststandards nach IT-SiG\n• Meldepflicht für Störungen\n• Nachweis angemessener organisatorischer und technischer Vorkehrungen\n• Alle 2 Jahre Nachweis gegenüber BSI"
            }
        ]
    },

    // Analytics & Monitoring
    monitoring: {
        title: "📊 Monitoring & SIEM",
        description: "Security Information Event Management und Incident Response",
        difficulty: "Fortgeschritten", 
        questions: [
            {
                id: "m1",
                question: "Was ist der Hauptzweck eines SIEM-Systems?",
                options: [
                    "Backup und Recovery",
                    "Zentrale Sammlung, Korrelation und Analyse von Sicherheitsereignissen",
                    "Netzwerk-Performance-Monitoring",
                    "Software-Deployment"
                ],
                correct: 1,
                explanation: "**SIEM (Security Information & Event Management):**\n\n**Hauptfunktionen:**\n• **Log-Aggregation** - Zentrale Sammlung aller Logs\n• **Korrelation** - Verknüpfung von Events\n• **Alerting** - Echtzeit-Benachrichtigungen\n• **Dashboards** - Visualisierung von Bedrohungen\n• **Forensik** - Nachverfolgung von Incidents\n\n**Datenquellen:**\n• Firewalls, IDS/IPS\n• Endpunkt-Systeme\n• Netzwerk-Geräte\n• Anwendungen\n• Cloud-Services\n\n**Vorteile:** Compliance, schnelle Incident Response, Threat Hunting"
            }
        ]
    },

    // DevSecOps
    devsecops: {
        title: "🛠️ DevSecOps & Secure Development",
        description: "Sicherheit in der Softwareentwicklung und CI/CD",
        difficulty: "Fortgeschritten",
        questions: [
            {
                id: "dev1",
                question: "Was bedeutet 'Shift Left' in der Anwendungssicherheit?",
                options: [
                    "Sicherheitstests nur am Ende des Entwicklungszyklus",
                    "Integration von Sicherheitsmaßnahmen früh im Entwicklungsprozess",
                    "Verwendung von Links-Händern im Entwicklungsteam",
                    "Verschiebung von Security-Budgets"
                ],
                correct: 1,
                explanation: "**Shift Left Security:**\n\n**Prinzip:** Je früher Sicherheitsprobleme erkannt werden, desto günstiger die Behebung\n\n**Implementierung:**\n• **Security by Design** - Sicherheit von Anfang an mitdenken\n• **Threat Modeling** - frühe Risikoanalyse\n• **Static Code Analysis** - automatisierte Code-Prüfung\n• **Security Unit Tests** - Sicherheit in Testprozess\n• **Secure Coding Guidelines** - Standards für Entwickler\n\n**Tools:** SonarQube, Checkmarx, Veracode, GitHub Security\n\n**Vorteile:** Kostenreduktion, bessere Sicherheitskultur, schnellere Releases"
            }
        ]
    },

    // Mobile Security
    mobile: {
        title: "📱 Mobile Security",
        description: "Sicherheit von mobilen Geräten und Anwendungen",
        difficulty: "Mittel",
        questions: [
            {
                id: "mob1",
                question: "Was ist der Hauptunterschied zwischen MDM und MAM?",
                options: [
                    "Es gibt keinen Unterschied",
                    "MDM verwaltet Geräte, MAM verwaltet Anwendungen",
                    "MAM ist nur für iOS verfügbar",
                    "MDM ist veraltet"
                ],
                correct: 1,
                explanation: "**MDM vs. MAM:**\n\n**MDM (Mobile Device Management):**\n• Vollständige Gerätekontrolle\n• Richtlinien-Durchsetzung\n• Remote Wipe möglich\n• Geräte-Inventar\n• Compliance-Überwachung\n\n**MAM (Mobile Application Management):**\n• App-spezifische Kontrolle\n• Container-basierte Trennung\n• Schutz von Unternehmensdaten\n• App-Wrapping\n• Weniger invasiv für Benutzer\n\n**Hybrid-Ansätze:** UEM (Unified Endpoint Management) kombiniert beide Ansätze"
            }
        ]
    },

    // Industrial Security / OT Security
    industrial: {
        title: "🏭 Industrial & OT Security",
        description: "Sicherheit von Operational Technology und Industrieanlagen",
        difficulty: "Experte",
        questions: [
            {
                id: "ot1",
                question: "Was unterscheidet OT-Sicherheit von klassischer IT-Sicherheit?",
                options: [
                    "OT-Sicherheit ist unwichtiger",
                    "OT priorisiert Verfügbarkeit vor Vertraulichkeit, IT umgekehrt",
                    "Es gibt keine Unterschiede",
                    "OT verwendet keine Netzwerke"
                ],
                correct: 1,
                explanation: "**OT vs. IT Security:**\n\n**OT (Operational Technology) Prioritäten:**\n1. **Availability** (Verfügbarkeit) - Produktionsausfall kostet Millionen\n2. **Integrity** (Integrität) - Fehlerhafte Steuerung kann gefährlich sein\n3. **Confidentiality** (Vertraulichkeit) - Meist weniger kritisch\n\n**IT-Prioritäten:**\n1. **Confidentiality** - Datenschutz steht oft im Vordergrund\n2. **Integrity** - Datenintegrität wichtig\n3. **Availability** - Ausfälle ärgerlich, aber nicht lebensbedrohlich\n\n**OT-Besonderheiten:**\n• Legacy-Systeme (oft 20+ Jahre alt)\n• Real-time Anforderungen\n• Physische Auswirkungen von Angriffen\n• Schwierige Patch-Zyklen"
            }
        ]
    },

    // 1. Grundlagen der IT-Sicherheit (erweitert)
    grundlagen: {
        title: "🔒 Grundlagen der IT-Sicherheit",
        description: "Fundamentale Prinzipien und Standards der Informationssicherheit",
        difficulty: "Grundlagen",
        questions: [
            {
                id: "g1",
                question: "Was bedeutet die CIA-Triade in der IT-Sicherheit?",
                options: [
                    "Central Intelligence Agency - US-Geheimdienst",
                    "Confidentiality, Integrity, Availability - Vertraulichkeit, Integrität, Verfügbarkeit",
                    "Computer Information Analysis - Computerinformationsanalyse",
                    "Cyber Intelligence Assessment - Cyber-Intelligenz-Bewertung"
                ],
                correct: 1,
                explanation: "Die CIA-Triade ist das fundamentale Modell der Informationssicherheit:\n• **Confidentiality (Vertraulichkeit)**: Schutz vor unbefugtem Zugriff\n• **Integrity (Integrität)**: Schutz vor unbefugter Veränderung\n• **Availability (Verfügbarkeit)**: Sicherstellung der Erreichbarkeit von Systemen und Daten"
            },
            {
                id: "g2",
                question: "Welche Aussage zum BSI IT-Grundschutz ist korrekt?",
                options: [
                    "Der IT-Grundschutz ist nur für Bundesbehörden verpflichtend",
                    "IT-Grundschutz bietet einen systematischen Ansatz zur Ermittlung und Umsetzung von Sicherheitsmaßnahmen",
                    "IT-Grundschutz ersetzt vollständig eine Risikoanalyse",
                    "IT-Grundschutz ist nur für große Unternehmen geeignet"
                ],
                correct: 1,
                explanation: "Der BSI IT-Grundschutz:\n• Bietet systematische Methodik für Informationssicherheit\n• Enthält Bausteine für Organisation, Infrastruktur, IT-Systeme\n• Ist für alle Organisationsgrößen anwendbar\n• Ergänzt, aber ersetzt nicht vollständig Risikoanalysen\n• Gliedert sich in Basis-, Standard- und Kernschutz"
            },
            {
                id: "g3",
                question: "Was ist der Hauptunterschied zwischen Datenschutz und Datensicherheit?",
                options: [
                    "Es gibt keinen Unterschied, beide Begriffe sind identisch",
                    "Datenschutz schützt personenbezogene Daten, Datensicherheit schützt alle Daten technisch",
                    "Datenschutz ist nur in Europa relevant, Datensicherheit weltweit",
                    "Datensicherheit ist wichtiger als Datenschutz"
                ],
                correct: 1,
                explanation: "**Datenschutz vs. Datensicherheit:**\n\n**Datenschutz:**\n• Rechtlicher Schutz personenbezogener Daten\n• Fokus auf Persönlichkeitsrechte\n• DSGVO, BDSG\n• Privacy by Design\n\n**Datensicherheit:**\n• Technischer/organisatorischer Schutz aller Daten\n• CIA-Triade\n• Schutz vor Cyberangriffen\n• Backup, Verschlüsselung, Zugangskontrolle"
            },
            {
                id: "g4",
                question: "Welche Rolle spielt ISO 27001 in der Informationssicherheit?",
                options: [
                    "Es ist eine deutsche Norm nur für den öffentlichen Sektor",
                    "ISO 27001 definiert Anforderungen für ein Informationssicherheits-Managementsystem (ISMS)",
                    "Es regelt ausschließlich technische Sicherheitsmaßnahmen",
                    "ISO 27001 ist nur für Cloud-Anbieter relevant"
                ],
                correct: 1,
                explanation: "**ISO 27001 - Internationale Norm für ISMS:**\n• Definiert Anforderungen für Aufbau, Einführung, Betrieb eines ISMS\n• Prozessorientierter Ansatz (Plan-Do-Check-Act)\n• Risikobasiertes Management\n• Zertifizierbar durch akkreditierte Stellen\n• Ergänzt durch ISO 27002 (Leitfaden für Sicherheitsmaßnahmen)\n• Weltweit anerkannter Standard"
            },
            {
                id: "g5",
                question: "Was versteht man unter 'Non-Repudiation' (Nicht-Abstreitbarkeit)?",
                options: [
                    "Schutz vor Datenverlust durch Backups",
                    "Möglichkeit, durchgeführte Aktionen eindeutig einer Person/System zuzuordnen",
                    "Verschlüsselung von Datenübertragungen",
                    "Schutz vor unbefugtem Zugriff"
                ],
                correct: 1,
                explanation: "**Non-Repudiation (Nicht-Abstreitbarkeit):**\n• Nachweis, dass eine Aktion tatsächlich von bestimmter Person durchgeführt wurde\n• Verhindert spätere Leugnung von Transaktionen/Aktionen\n• Umgesetzt durch:\n  - Digitale Signaturen\n  - Audit-Logs mit Zeitstempel\n  - Biometrische Verfahren\n  - Kryptographische Hashwerte\n• Wichtig für rechtliche Verbindlichkeit"
            }
        ]
    },

    // 2. Zugriffskontrolle & Identity Access Management
    zugriff: {
        title: "🔑 Zugriffskontrolle & IAM",
        description: "Identity & Access Management, Authentifizierung und Autorisierung",
        difficulty: "Mittel",
        questions: [
            {
                id: "z1",
                question: "Was ist der Unterschied zwischen RBAC und ABAC?",
                options: [
                    "RBAC ist moderner als ABAC",
                    "RBAC basiert auf Rollen, ABAC auf Attributen und Richtlinien",
                    "ABAC ist nur für Cloud-Umgebungen geeignet",
                    "Beide Verfahren sind identisch"
                ],
                correct: 1,
                explanation: "**RBAC vs. ABAC:**\n\n**RBAC (Role-Based Access Control):**\n• Berechtigungen werden Rollen zugewiesen\n• Benutzer erhalten Rollen\n• Statisches Modell\n• Einfach zu verwalten\n\n**ABAC (Attribute-Based Access Control):**\n• Entscheidungen basieren auf Attributen\n• Dynamische Richtlinien\n• Kontext-bewusste Zugriffskontrolle\n• Flexibler, aber komplexer"
            },
            {
                id: "z2",
                question: "Welche MFA-Faktoren gehören zur Kategorie 'Wissen' (Knowledge)?",
                options: [
                    "Fingerabdruck und Iris-Scan",
                    "Passwort und PIN",
                    "Smartphone und Hardware-Token",
                    "Chipkarte und USB-Stick"
                ],
                correct: 1,
                explanation: "**Drei Faktoren der Authentifizierung:**\n\n**Wissen (Something you know):**\n• Passwort, PIN, Passphrase\n• Sicherheitsfragen\n• Muster/Gesten\n\n**Besitz (Something you have):**\n• Hardware-Token, Smartphone\n• Chipkarte, USB-Stick\n\n**Eigenschaft (Something you are):**\n• Biometrie: Fingerabdruck, Iris, Gesicht\n• Verhaltensbiometrie: Tippverhalten"
            },
            {
                id: "z3",
                question: "Was besagt das Least Privilege Prinzip?",
                options: [
                    "Benutzer sollten möglichst wenige Passwörter haben",
                    "Jeder Benutzer sollte nur die minimal notwendigen Berechtigungen erhalten",
                    "Privilegierte Accounts sollten selten verwendet werden",
                    "Administratoren sollten separate Accounts für verschiedene Systeme haben"
                ],
                correct: 1,
                explanation: "**Least Privilege Prinzip (Minimalprinzip):**\n• Benutzer/Prozesse erhalten nur minimal notwendige Berechtigungen\n• Reduziert Angriffsfläche bei Kompromittierung\n• Regelmäßige Überprüfung und Anpassung der Berechtigungen\n• Zeitlich begrenzte Berechtigungen wo möglich\n• Separierung von Standard- und Admin-Accounts\n• 'Need-to-know' und 'Need-to-have' Basis"
            },
            {
                id: "z4",
                question: "Welche Aussage zu Single Sign-On (SSO) ist korrekt?",
                options: [
                    "SSO eliminiert alle Sicherheitsrisiken bei der Authentifizierung",
                    "SSO ermöglicht Anmeldung an mehreren Systemen mit einer Authentifizierung",
                    "SSO funktioniert nur mit LDAP",
                    "SSO ist nur für interne Systeme geeignet"
                ],
                correct: 1,
                explanation: "**Single Sign-On (SSO):**\n\n**Vorteile:**\n• Eine Anmeldung für mehrere Systeme\n• Verbesserte Benutzerfreundlichkeit\n• Reduzierte Passwort-Fatigue\n• Zentrale Authentifizierung\n\n**Risiken:**\n• Single Point of Failure\n• Kompromittierung hat weitreichende Folgen\n\n**Technologien:**\n• SAML, OAuth 2.0, OpenID Connect\n• Kerberos (intern)"
            },
            {
                id: "z5",
                question: "Was ist ein Hardware Security Module (HSM)?",
                options: [
                    "Ein Software-Tool für Passwort-Management",
                    "Dedizierte Hardware für sichere Schlüsselerstellung und -verwaltung",
                    "Ein Firewall-Modul für Netzwerksicherheit",
                    "Ein Backup-System für kritische Daten"
                ],
                correct: 1,
                explanation: "**Hardware Security Module (HSM):**\n• Spezialisierte, manipulationssichere Hardware\n• Sichere Generierung, Speicherung und Verwaltung kryptographischer Schlüssel\n• FIPS 140-2 oder Common Criteria zertifiziert\n• Schutz vor physischen und logischen Angriffen\n• Verwendet für:\n  - PKI Root CAs\n  - SSL/TLS Zertifikate\n  - Code Signing\n  - Datenbank-Verschlüsselung"
            }
        ]
    },

    // 3. Netzwerksicherheit
    netzwerk: {
        title: "🌐 Netzwerksicherheit",
        description: "Firewalls, IDS/IPS, VPN und Netzwerk-Segmentierung",
        difficulty: "Fortgeschritten",
        questions: [
            {
                id: "n1",
                question: "Was ist der Hauptunterschied zwischen IDS und IPS?",
                options: [
                    "IDS überwacht nur, IPS kann aktiv eingreifen und blockieren",
                    "IPS ist moderner als IDS",
                    "IDS funktioniert nur in Cloud-Umgebungen",
                    "Es gibt keinen Unterschied"
                ],
                correct: 0,
                explanation: "**IDS vs. IPS:**\n\n**IDS (Intrusion Detection System):**\n• Passive Überwachung und Erkennung\n• Alarmierung bei verdächtigen Aktivitäten\n• 'Out-of-band' Deployment möglich\n• Forensische Analyse\n\n**IPS (Intrusion Prevention System):**\n• Aktive Erkennung UND Blockierung\n• 'Inline' Deployment erforderlich\n• Kann Traffic in Echtzeit stoppen\n• Potentielle Single Point of Failure"
            },
            {
                id: "n2", 
                question: "Welches Konzept steht hinter Zero Trust Network Access (ZTNA)?",
                options: [
                    "Kompletter Verzicht auf Netzwerksicherheit",
                    "Niemals vertrauen, immer überprüfen - jeder Zugriff wird authentifiziert und autorisiert",
                    "Nur verschlüsselte Verbindungen zulassen",
                    "Verwendung von VPNs für alle Verbindungen"
                ],
                correct: 1,
                explanation: "**Zero Trust Prinzipien:**\n• 'Never trust, always verify'\n• Kein implizites Vertrauen basierend auf Netzwerk-Location\n• Kontinuierliche Verifizierung aller Benutzer und Geräte\n• Mikro-Segmentierung des Netzwerks\n• Least Privilege Access\n• Starke Authentifizierung und Verschlüsselung\n• Monitoring und Analytics aller Aktivitäten"
            },
            {
                id: "n3",
                question: "Was ist eine DMZ (Demilitarisierte Zone) in der Netzwerksicherheit?",
                options: [
                    "Ein Netzwerksegment zwischen internem Netz und Internet für öffentlich zugängliche Dienste",
                    "Ein militärisches Netzwerk ohne Zivilisten",
                    "Ein Backup-Netzwerk für Notfälle",
                    "Ein Netzwerk nur für Administratoren"
                ],
                correct: 0,
                explanation: "**DMZ (Demilitarisierte Zone):**\n• Puffernetzwerk zwischen Internet und internem LAN\n• Hosting öffentlich zugänglicher Services:\n  - Webserver, Mail-Server, DNS\n  - FTP-Server, VPN-Gateways\n• Zusätzlicher Schutz für interne Systeme\n• Typische Konfiguration:\n  - Externe Firewall (Internet → DMZ)\n  - Interne Firewall (DMZ → LAN)\n• Kompromittierung der DMZ gefährdet nicht direkt das interne Netz"
            },
            {
                id: "n4",
                question: "Welche VPN-Technologie bietet die stärkste Sicherheit?",
                options: [
                    "PPTP - Point-to-Point Tunneling Protocol",
                    "IPSec mit AES-256 Verschlüsselung",
                    "L2TP ohne Verschlüsselung",
                    "SSTP - Secure Socket Tunneling Protocol"
                ],
                correct: 1,
                explanation: "**VPN-Protokoll Sicherheitsbewertung:**\n\n**IPSec (Internet Protocol Security):**\n• Stark: AES-256, Perfect Forward Secrecy\n• Authentifizierung und Verschlüsselung auf IP-Ebene\n• Industry Standard für Site-to-Site VPNs\n\n**Andere Protokolle:**\n• PPTP: Veraltete, schwache Verschlüsselung\n• L2TP: Nur Tunneling, benötigt IPSec für Sicherheit\n• SSTP: Microsoft-spezifisch, weniger verbreitet\n• WireGuard: Modern, performant, zunehmend populär"
            },
            {
                id: "n5",
                question: "Was ist VLAN-Hopping und wie kann man es verhindern?",
                options: [
                    "Legitimer Wechsel zwischen VLANs",
                    "Angriff zum unbefugten Zugang zu anderen VLANs durch Switch Spoofing oder Double Tagging",
                    "Normale VLAN-Konfiguration",
                    "Backup-Verfahren für VLAN-Konfigurationen"
                ],
                correct: 1,
                explanation: "**VLAN-Hopping Angriffe:**\n\n**Switch Spoofing:**\n• Angreifer simuliert Switch (DTP)\n• Erhält Trunk-Port Zugang\n\n**Double Tagging:**\n• Doppelte VLAN-Tags in Paketen\n• Ausnutzung von Native VLAN\n\n**Schutzmaßnahmen:**\n• DTP deaktivieren\n• Unused Ports in separates VLAN\n• Native VLAN ändern (nicht VLAN 1)\n• Port Security implementieren\n• 802.1X Authentifizierung"
            }
        ]
    },

    // 4. Verschlüsselung & PKI
    verschluesselung: {
        title: "🔐 Verschlüsselung & PKI",
        description: "Kryptographie, Zertifikate und Schlüsselmanagement",
        difficulty: "Fortgeschritten",
        questions: [
            {
                id: "v1",
                question: "Was ist der Hauptvorteil von AES gegenüber DES?",
                options: [
                    "AES ist schneller als DES",
                    "AES hat größere Schlüssellängen (128/192/256 Bit) und ist sicherer",
                    "AES funktioniert nur in Hardware",
                    "DES ist moderner als AES"
                ],
                correct: 1,
                explanation: "**AES vs. DES Vergleich:**\n\n**DES (Data Encryption Standard):**\n• 56-Bit Schlüssel (praktisch unsicher)\n• 1977 entwickelt\n• Anfällig für Brute-Force\n\n**AES (Advanced Encryption Standard):**\n• 128/192/256-Bit Schlüssel\n• 2001 standardisiert\n• Derzeit als sicher eingestuft\n• Bessere Performance in Software\n• Resistenter gegen bekannte Angriffe"
            },
            {
                id: "v2",
                question: "Wofür wird Perfect Forward Secrecy (PFS) verwendet?",
                options: [
                    "Permanenter Schutz von Passwörtern",
                    "Schutz alter Kommunikation auch bei Kompromittierung des Langzeit-Schlüssels",
                    "Automatische Schlüsselrotation",
                    "Schutz vor Quantencomputern"
                ],
                correct: 1,
                explanation: "**Perfect Forward Secrecy (PFS):**\n• Schutz vergangener Sessions bei Kompromittierung\n• Für jede Session werden neue, ephemere Schlüssel generiert\n• Session-Schlüssel werden nach Verwendung gelöscht\n• Selbst bei Kompromittierung des privaten Schlüssels bleiben alte Sessions sicher\n\n**Implementierung:**\n• Ephemeral Diffie-Hellman (DHE)\n• Elliptic Curve DHE (ECDHE)\n• Verwendung in TLS 1.2+ empfohlen"
            },
            {
                id: "v3",
                question: "Was ist eine Certificate Authority (CA) in einer PKI?",
                options: [
                    "Ein Verschlüsselungsalgorithmus",
                    "Vertrauenswürdige Instanz, die digitale Zertifikate ausstellt und verwaltet",
                    "Ein Hardware-Sicherheitsmodul",
                    "Ein Protokoll für Schlüsselaustausch"
                ],
                correct: 1,
                explanation: "**Certificate Authority (CA) Rolle:**\n• Vertrauenswürdige dritte Partei in PKI\n• Ausstellen und Verwalten digitaler Zertifikate\n• Überprüfung der Identität vor Zertifikatsausstellung\n• Verwaltung von Certificate Revocation Lists (CRL)\n• Bereitstellung von OCSP-Services\n\n**CA-Hierarchie:**\n• Root CA (offline, höchste Vertrauensebene)\n• Intermediate CAs (operational)\n• End-Entity Zertifikate"
            },
            {
                id: "v4",
                question: "Welcher Hash-Algorithmus gilt aktuell als sicher für neue Implementierungen?",
                options: [
                    "MD5",
                    "SHA-1",
                    "SHA-256 oder höher",
                    "CRC32"
                ],
                correct: 2,
                explanation: "**Hash-Algorithmus Sicherheitsstatus:**\n\n**Unsicher/Deprecated:**\n• MD5: Kollisionsanfällig seit 2004\n• SHA-1: Deprecated seit 2017\n• CRC32: Keine kryptographische Sicherheit\n\n**Aktuell sicher:**\n• SHA-256/SHA-384/SHA-512 (SHA-2 Familie)\n• SHA-3 (Keccak)\n• BLAKE2\n\n**Für Passwörter spezielle Algorithmen:**\n• bcrypt, scrypt, Argon2\n• Langsam und Salz-basiert"
            },
            {
                id: "v5",
                question: "Was ist der Zweck von OCSP (Online Certificate Status Protocol)?",
                options: [
                    "Verschlüsselung von E-Mails",
                    "Echtzeit-Überprüfung des Zertifikatsstatus (gültig/widerrufen)",
                    "Automatische Zertifikatserneuerung",
                    "Sichere Schlüsselübertragung"
                ],
                correct: 1,
                explanation: "**OCSP (Online Certificate Status Protocol):**\n• Echtzeit-Alternative zu Certificate Revocation Lists (CRL)\n• Abfrage des aktuellen Zertifikatsstatus\n• Reduziert Bandbreite vs. CRL-Download\n• Bessere Performance und Aktualität\n\n**OCSP Responses:**\n• Good: Zertifikat ist gültig\n• Revoked: Zertifikat wurde widerrufen\n• Unknown: Status unbekannt\n\n**OCSP Stapling:** Server cached OCSP Response für bessere Performance"
            }
        ]
    },

    // 5. Endpunktsicherheit
    endpoint: {
        title: "💻 Endpunktsicherheit",
        description: "EDR/XDR, Patch Management und Geräteschutz",
        difficulty: "Mittel",
        questions: [
            {
                id: "e1",
                question: "Was ist der Unterschied zwischen EDR und XDR?",
                options: [
                    "EDR ist für Server, XDR für Workstations",
                    "EDR fokussiert auf Endpunkte, XDR erweitert auf Netzwerk, E-Mail und Cloud",
                    "XDR ist die ältere Technologie",
                    "Beide Begriffe bedeuten dasselbe"
                ],
                correct: 1,
                explanation: "**EDR vs. XDR:**\n\n**EDR (Endpoint Detection & Response):**\n• Fokus auf Endpunkt-Sicherheit\n• Überwachung von Laptops, Desktops, Servern\n• Verhaltensanalyse und Incident Response\n\n**XDR (Extended Detection & Response):**\n• Erweitert EDR um weitere Datenquellen\n• Netzwerk, E-Mail, Cloud, Identity\n• Korrelation zwischen verschiedenen Sicherheitslayers\n• Holistische Sicht auf Bedrohungen\n• Automatisierte Response"
            },
            {
                id: "e2",
                question: "Welche Patch-Management Strategie ist am sichersten?",
                options: [
                    "Sofortige Installation aller verfügbaren Patches",
                    "Risiko-basierte Priorisierung mit Testumgebung vor Produktions-Rollout",
                    "Patches nur bei bekannten Problemen installieren",
                    "Automatische Installation ohne Tests"
                ],
                correct: 1,
                explanation: "**Optimale Patch-Management Strategie:**\n\n**Risiko-basierte Priorisierung:**\n• Kritische Sicherheitspatches zuerst\n• CVSS-Score und Exploit-Verfügbarkeit bewerten\n• Asset-Kritikalität berücksichtigen\n\n**Gestufter Rollout:**\n• Test in isolierter Umgebung\n• Pilot-Gruppe (nicht-kritische Systeme)\n• Schrittweise Produktions-Einführung\n• Rollback-Plan bereithalten\n\n**Zeitfenster:**\n• Kritische Patches: 72 Stunden\n• Hohe Priorität: 30 Tage\n• Normale Patches: 60-90 Tage"
            },
            {
                id: "e3",
                question: "Was versteht man unter Application Whitelisting?",
                options: [
                    "Liste erlaubter IP-Adressen für Anwendungen",
                    "Nur explizit erlaubte Anwendungen dürfen ausgeführt werden",
                    "Automatische Updates für genehmigte Anwendungen",
                    "Schutz vor Malware in E-Mail-Anhängen"
                ],
                correct: 1,
                explanation: "**Application Whitelisting:**\n• Nur explizit genehmigte Software darf ausgeführt werden\n• 'Default Deny' Ansatz\n• Sehr effektiv gegen unbekannte Malware\n• Administrativer Aufwand höher\n\n**vs. Blacklisting:**\n• Blacklisting: Bekannte schädliche Software blockieren\n• Whitelisting: Nur bekannte gute Software erlauben\n\n**Implementierung:**\n• Hash-basierte Kontrolle\n• Zertifikat-basierte Kontrolle\n• Pfad-basierte Kontrolle\n• Verhaltens-basierte Kontrolle"
            },
            {
                id: "e4",
                question: "Welche Technologie bietet Trusted Platform Module (TPM)?",
                options: [
                    "Netzwerk-Verschlüsselung",
                    "Hardware-basierte Sicherheitsfunktionen und sichere Schlüsselspeicherung",
                    "Antivirus-Schutz",
                    "Firewall-Funktionalität"
                ],
                correct: 1,
                explanation: "**Trusted Platform Module (TPM):**\n• Dedizierter Krypto-Chip auf Motherboard\n• Sichere Speicherung kryptographischer Schlüssel\n• Hardware-basierte Integritätsmessungen\n• Secure Boot Unterstützung\n\n**Funktionen:**\n• Platform Configuration Registers (PCR)\n• Remote Attestation\n• Sealed Storage\n• BitLocker Schlüsselschutz\n• Windows Hello Biometrie\n\n**Versionen:**\n• TPM 1.2: Legacy\n• TPM 2.0: Aktueller Standard"
            },
            {
                id: "e5",
                question: "Was ist der Hauptzweck von Mobile Device Management (MDM)?",
                options: [
                    "Verkauf von mobilen Geräten",
                    "Zentrale Verwaltung und Sicherung von Smartphones und Tablets in Unternehmen",
                    "Reparatur defekter Mobilgeräte",
                    "Kostenkontrolle für Mobilfunkverträge"
                ],
                correct: 1,
                explanation: "**Mobile Device Management (MDM):**\n• Zentrale Verwaltung mobiler Endgeräte\n• Durchsetzung von Sicherheitsrichtlinien\n• Remote-Verwaltung und -Konfiguration\n\n**Funktionen:**\n• App-Installation und -Verwaltung\n• Passcode-Richtlinien\n• Geräteverschlüsselung\n• Remote Wipe bei Verlust\n• Compliance-Überwachung\n• Inventory Management\n\n**BYOD (Bring Your Own Device):**\n• Separation privat/geschäftlich\n• Container/Sandbox-Ansätze"
            }
        ]
    },

    // 6. Bedrohungslandschaft
    bedrohungen: {
        title: "⚠️ Bedrohungslandschaft",
        description: "Malware, APT, Social Engineering und aktuelle Bedrohungen",
        difficulty: "Experte",
        questions: [
            {
                id: "b1",
                question: "Was charakterisiert Advanced Persistent Threats (APT)?",
                options: [
                    "Schnelle, automatisierte Angriffe",
                    "Langfristige, zielgerichtete Angriffe mit hoher Ressourcenausstattung",
                    "Einfache Malware-Infektionen",
                    "DDoS-Angriffe auf öffentliche Webseiten"
                ],
                correct: 1,
                explanation: "**Advanced Persistent Threats (APT):**\n• Langfristige, zielgerichtete Kampagnen\n• Hohe Ressourcen und Expertise\n• Oft staatlich gesponsert\n• Mehrstufige Angriffe über Monate/Jahre\n\n**APT-Phasen:**\n• Initial Compromise (Spear Phishing, Zero-Day)\n• Establish Foothold (Backdoors, Persistence)\n• Escalate Privileges (Lateral Movement)\n• Internal Reconnaissance\n• Move Laterally\n• Maintain Presence\n• Complete Mission (Data Exfiltration)\n\n**Bekannte APT-Gruppen:**\n• APT1 (China), Lazarus (Nordkorea), Fancy Bear (Russland)"
            },
            {
                id: "b2",
                question: "Welche Aussage zu Ransomware-as-a-Service (RaaS) ist korrekt?",
                options: [
                    "RaaS existiert nicht mehr",
                    "Cyberkriminelle bieten Ransomware-Tools als Service gegen Gewinnbeteiligung an",
                    "RaaS ist nur ein Marketing-Begriff",
                    "RaaS bezieht sich nur auf legitime Backup-Services"
                ],
                correct: 1,
                explanation: "**Ransomware-as-a-Service (RaaS):**\n• Geschäftsmodell im Cybercrime\n• Ransomware-Entwickler vermieten ihre Tools\n• Affiliates führen Angriffe durch\n• Gewinnaufteilung (typisch 70/30 oder 80/20)\n\n**RaaS-Ökosystem:**\n• Malware-Entwicklung\n• Infrastructure-as-a-Service\n• Access Broker (verkaufen Zugang)\n• Money Laundering Services\n• Negotiation Services\n\n**Bekannte RaaS:**\n• Conti, REvil/Sodinokibi, LockBit, BlackCat"
            },
            {
                id: "b3",
                question: "Was ist ein Supply Chain Attack?",
                options: [
                    "Angriff auf Logistikunternehmen",
                    "Kompromittierung von Software-Lieferketten zur Infiltration der Endkunden",
                    "Diebstahl physischer Waren",
                    "Angriff auf E-Commerce-Webseiten"
                ],
                correct: 1,
                explanation: "**Supply Chain Attacks:**\n• Kompromittierung vertrauenswürdiger Software/Hardware\n• Infiltration über Drittanbieter-Komponenten\n• Schwer zu erkennen durch Vertrauen in Quelle\n\n**Angriffsvektoren:**\n• Software Updates (SolarWinds)\n• Open Source Libraries (event-stream npm)\n• Hardware-Manipulation\n• Cloud Service Provider\n• Managed Service Provider\n\n**Schutzmaßnahmen:**\n• Software Bill of Materials (SBOM)\n• Code Signing Verification\n• Zero Trust Architecture\n• Vendor Security Assessment"
            },
            {
                id: "b4",
                question: "Welche Social Engineering Technik nutzt psychologischen Druck durch Zeitnot?",
                options: [
                    "Pretexting",
                    "Urgency/Scarcity (Dringlichkeit)",
                    "Authority (Autorität)",
                    "Baiting"
                ],
                correct: 1,
                explanation: "**Social Engineering Techniken:**\n\n**Urgency/Scarcity (Dringlichkeit):**\n• Zeitdruck erzeugen\n• 'Nur noch heute verfügbar'\n• 'Sofortiges Handeln erforderlich'\n• Verhindert rationale Entscheidungen\n\n**Weitere Techniken:**\n• Authority: Vortäuschen von Befugnis\n• Social Proof: 'Andere machen es auch'\n• Reciprocity: Gefallen/Gegenleistung\n• Liking: Sympathie ausnutzen\n• Commitment: Konsistenz-Bedürfnis\n\n**Schutz:**\n• Awareness Training\n• Verification Procedures\n• 'Think before you click'"
            },
            {
                id: "b5",
                question: "Was ist ein Zero-Day Exploit?",
                options: [
                    "Ein Exploit, der seit null Tagen bekannt ist",
                    "Ausnutzung einer Schwachstelle, für die noch kein Patch verfügbar ist",
                    "Ein Exploit, der nur einen Tag funktioniert",
                    "Automatisch generierte Exploits"
                ],
                correct: 1,
                explanation: "**Zero-Day Exploit:**\n• Ausnutzung unbekannter Schwachstellen\n• Kein Patch verfügbar ('Day Zero')\n• Sehr wertvoll im Cybercrime/Cyberwar\n• Schwer zu erkennen durch traditionelle Signaturen\n\n**Zero-Day Lifecycle:**\n• Discovery: Schwachstelle entdeckt\n• Weaponization: Exploit entwickelt\n• Deployment: Angriff durchgeführt\n• Discovery by Defender: Erkennung\n• Analysis: Reverse Engineering\n• Patch Development: Hersteller entwickelt Fix\n• Patch Deployment: Installation beim Kunden\n\n**Schutz:**\n• Behavior-based Detection\n• Application Sandboxing\n• Zero Trust Architecture"
            }
        ]
    }
};

// Export für Node.js oder Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cybersecurityData;
}
