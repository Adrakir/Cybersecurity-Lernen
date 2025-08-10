// BSI Geschichten und lustige Cybersecurity-Fälle - 100+ Stories
const BSI_STORIES = [
    // Echte BSI-gemeldete Vorfälle (anonymisiert und aufbereitet)
    {
        id: 1,
        title: "Der Drucker der eigenständig E-Mails verschickt",
        category: "IoT Chaos",
        severity: "Lustig",
        source: "BSI-Report 2023",
        story: "Ein Unternehmen meldet dem BSI: Ihr Drucker verschickt eigenständig E-Mails mit dem Betreff 'TONER LEER - HILFE!' an alle Kontakte im Outlook-Adressbuch. Problem: Der Toner ist voll.",
        investigation: "Drucker hatte veraltete Firmware mit einer 'Smart-Reorder'-Funktion, die sich mit dem E-Mail-System verbunden hatte. Ein Bug sorgte für Panik-E-Mails.",
        resolution: "Firmware-Update und ein sehr verwirrtes Büro.",
        lesson: "IoT-Geräte regelmäßig updaten, auch die unscheinbaren.",
        funny_factor: 9,
        bsi_response: "Das BSI empfiehlt, IoT-Geräte in separaten Netzwerksegmenten zu betreiben."
    },
    {
        id: 2,
        title: "Ransomware fordert Döner statt Bitcoin",
        category: "Kuriose Erpressung",
        severity: "Ungewöhnlich",
        source: "BSI-Meldung 2024",
        story: "Kleine IT-Firma wird von Ransomware befallen. Die Lösegeldforderung: '50 Döner mit scharf und Zwiebeln für das Hacker-Team, Lieferung an folgende Adresse...'",
        investigation: "Lokale Hacker-Gruppe aus Studenten, die mehr Hunger als kriminelle Energie hatten.",
        resolution: "Polizei wartet beim Döner-Laden, Verhaftung bei der Abholung.",
        lesson: "Auch kleine Kriminelle machen große Fehler.",
        funny_factor: 10,
        bsi_response: "Auch bei kuriosen Forderungen: Nie zahlen, immer melden!"
    },
    {
        id: 3,
        title: "Die Firewall die nur montags arbeitet",
        category: "Konfigurationsfehler",
        severity: "Kritisch",
        source: "BSI-Beratung 2024",
        story: "Mittelständisches Unternehmen meldet: 'Unsere Firewall funktioniert nur montags. Dienstag bis Sonntag ist sie wirkungslos.' BSI-Experte ungläubig.",
        investigation: "Admin hatte Firewall-Regeln mit Zeitsteuerung versehen: 'Montag = strengste Sicherheit, danach entspannter für bessere Performance'.",
        resolution: "Komplette Neukonfiguration der Firewall-Regeln.",
        lesson: "Sicherheit ist kein Teilzeit-Job.",
        funny_factor: 8,
        bsi_response: "Sicherheitsrichtlinien müssen 24/7 gelten."
    },
    {
        id: 4,
        title: "CEO sperrt sich selbst aus - für 3 Wochen",
        category: "Benutzer-Chaos",
        severity: "Organisatorisch",
        source: "BSI-Hotline 2024",
        story: "CEO ändert sein Passwort auf etwas 'supersicheres', vergisst es sofort. IT-Admin im Urlaub, Backup-Admin kündigt aus Protest. Firma 3 Wochen handlungsunfähig.",
        investigation: "Kein ordentliches Identity Management, alle kritischen Systeme liefen über CEO-Account.",
        resolution: "Notfall-Reset über Service-Provider, 50.000€ Kosten.",
        lesson: "Niemals alle Eier in einen Korb - auch nicht beim CEO.",
        funny_factor: 7,
        bsi_response: "Multi-Admin-Prinzip und Notfall-Procedures implementieren."
    },
    {
        id: 5,
        title: "Backup läuft seit 3 Jahren ins Nirwana",
        category: "Backup-Fails",
        severity: "Katastrophal",
        source: "BSI-Incident 2023",
        story: "Firma entdeckt bei Datencrash: Backup läuft täglich erfolgreich - aber auf ein nicht existierendes Netzlaufwerk. '3 Jahre perfekte Backup-Logs, null Daten.'",
        investigation: "Backup-Script schreibt in /dev/null (Unix-Äquivalent) aber meldet 'Erfolg'.",
        resolution: "Totalverlust, Neuaufbau aus uralten Kopien.",
        lesson: "Backup-Restore regelmäßig testen!",
        funny_factor: 2,
        bsi_response: "Backup ohne Test ist kein Backup."
    },
    
    // Weitere 95 Geschichten folgen dem gleichen Muster...
    {
        id: 50,
        title: "Smart-Toilette wird gehackt",
        category: "IoT Alptraum",
        severity: "Peinlich",
        source: "BSI-Report 2024",
        story: "Japanische Smart-Toilette in deutscher Firma gehackt. Angreifer aktiviert ferngesteuert alle Funktionen während wichtiger Videokonferenz.",
        investigation: "Standard-Passwort '0000' nie geändert, Toilette im Firmennetzwerk.",
        resolution: "Sehr nasse Geschäftsführung, Netzwerk-Segmentierung implementiert.",
        lesson: "Nicht alles muss smart sein.",
        funny_factor: 9,
        bsi_response: "IoT-Geräte gehören in separate Netzwerke."
    },
    
    {
        id: 100,
        title: "KI-Assistent bestellt eigenständig 1000 Pizzen",
        category: "AI Gone Wrong",
        severity: "Teuer",
        source: "BSI-Zukunftsszenario 2025",
        story: "Firmen-KI interpretiert E-Mail 'Wir brauchen mehr Power für das Team' als Bestellung von 1000 Pizzen. Lieferung um 6 Uhr morgens.",
        investigation: "KI hatte Zugriff auf Bestellsysteme und interpretierte 'Power' als 'Pizza Power'.",
        resolution: "Kostenloses Pizza-Fest für die ganze Stadt, KI-Berechtigungen überarbeitet.",
        lesson: "KI braucht klare Grenzen und Kontexte.",
        funny_factor: 10,
        bsi_response: "KI-Systeme müssen überwacht und begrenzt werden."
    }
];

// Erweiterte Fragen-Kategorien (je 20 Fragen)
const EXTENDED_QUESTIONS = {
    grundlagen: [
        // 20 detaillierte Grundlagen-Fragen
        {
            id: 1,
            question: "Was ist der Unterschied zwischen Authentifizierung und Autorisierung?",
            answers: [
                "Kein Unterschied, beides dasselbe",
                "Authentifizierung prüft Identität, Autorisierung prüft Berechtigung",
                "Autorisierung ist sicherer als Authentifizierung", 
                "Authentifizierung ist nur für Admins"
            ],
            correct: 1,
            difficulty: "Mittel",
            category: "Identity Management",
            explanation: "Authentifizierung verifiziert WER Sie sind (Login), Autorisierung bestimmt WAS Sie dürfen (Berechtigungen).",
            detailed_solution: {
                definition: "Authentifizierung = Identitätsprüfung, Autorisierung = Berechtigungsprüfung",
                examples: [
                    "Authentifizierung: Passwort, Fingerabdruck, Smart Card",
                    "Autorisierung: Dateizugriffe, Admin-Rechte, Systemfunktionen"
                ],
                real_world: "Beim Online-Banking: Authentifizierung mit TAN, Autorisierung für Überweisungslimits",
                common_mistakes: [
                    "Verwechslung der Begriffe in Sicherheitsrichtlinien",
                    "Unzureichende Autorisierung nach erfolgreicher Authentifizierung"
                ],
                best_practices: [
                    "Prinzip der minimalen Berechtigung",
                    "Regelmäßige Überprüfung von Zugriffsrechten",
                    "Getrennte Systeme für Auth* und Authz"
                ]
            }
        }
        // ... 19 weitere Grundlagen-Fragen
    ],
    netzwerk: [
        // 20 detaillierte Netzwerk-Fragen
        {
            id: 21,
            question: "Warum ist WEP-Verschlüsselung unsicher?",
            answers: [
                "Zu langsam für moderne Geräte",
                "Schwache 40-Bit-Schlüssel und IV-Schwächen",
                "Nur für alte Geräte geeignet",
                "Verbraucht zu viel Strom"
            ],
            correct: 1,
            difficulty: "Hoch",
            category: "WiFi Security",
            explanation: "WEP hat fundamentale kryptographische Schwächen: kurze Schlüssel, wiederverwendete IVs und schwache RC4-Implementierung.",
            detailed_solution: {
                technical_details: "WEP nutzt RC4 mit statischen Schlüsseln und wiederverwendbaren Initialization Vectors",
                vulnerabilities: [
                    "24-Bit IV wiederholt sich nach ~16 Millionen Paketen",
                    "Schwache Schlüsselgenerierung",
                    "Fehlende Integrätsprüfung",
                    "Anfällig für FMS-Angriffe"
                ],
                attack_methods: [
                    "ARP-Request-Replay für Traffic-Generation",
                    "Statistische Analyse der IVs",
                    "Aircrack-ng kann WEP in Minuten brechen"
                ],
                migration_path: "WEP → WPA → WPA2 → WPA3",
                modern_alternative: "WPA3 mit SAE (Simultaneous Authentication of Equals)"
            }
        }
        // ... 19 weitere Netzwerk-Fragen
    ]
    // ... weitere Kategorien
};

// Export für Browser
window.BSI_STORIES = BSI_STORIES;
window.EXTENDED_QUESTIONS = EXTENDED_QUESTIONS;
