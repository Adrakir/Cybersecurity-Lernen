// Lustige IT-Fails und skurrile Cybersecurity-Vorfälle - 80 Geschichten
const FUNNY_IT_FAILS = [
    // Klassische Admin-Fails (1-20)
    { id: 1, title: "rm -rf / statt ./", category: "Admin Fail", severity: "Katastrophal", description: "Administrator löscht versehentlich das gesamte Produktionssystem mit einem Tippfehler.", outcome: "3 Tage Downtime, alle aus Backups wiederherstellen", lesson: "Immer zweimal prüfen bei kritischen Befehlen", funny: true },
    { id: 2, title: "Das Passwort im Passwort-Feld", category: "User Fail", severity: "Lustig", description: "Nutzer gibt Passwort als Benutzername ein - steht nun für alle im Login-Log.", outcome: "Passwort kompromittiert, Logs bereinigen", lesson: "UI-Design kann Sicherheit beeinflussen", funny: true },
    { id: 3, title: "Ctrl+A statt Ctrl+S", category: "User Error", severity: "Mittel", description: "Entwickler markiert versehentlich gesamte Produktions-Datenbank und drückt Delete.", outcome: "Herzinfarkt und 6 Stunden Recovery", lesson: "Bestätigungsdialoge sind wichtig", funny: true },
    { id: 4, title: "Das Kabel im Rechenzentrum", category: "Physical", severity: "Hoch", description: "Reinigungskraft stolpert über Netzwerkkabel - nimmt halbes Internet mit.", outcome: "2 Stunden Ausfall für Millionen Nutzer", lesson: "Kabelmanagement ist keine Deko", funny: true },
    { id: 5, title: "Update am Freitag um 17 Uhr", category: "Timing Fail", severity: "Katastrophal", description: "Major-Update wird Freitag Abend eingespielt - geht schief, alle im Wochenende.", outcome: "72 Stunden Notfall-Reparatur", lesson: "Niemals Updates am Freitag!", funny: true },
    
    // Passwort-Chaos (6-25)
    { id: 6, title: "Passwort auf dem Post-It", category: "Password Fail", severity: "Niedrig", description: "CEO klebt Passwort auf Monitor - direkt neben Webcam während Live-Stream.", outcome: "Passwort im Internet viral", lesson: "Post-Its sind keine Passwort-Manager", funny: true },
    { id: 7, title: "123456 für die Bank", category: "Weak Password", severity: "Hoch", description: "Bankangestellter nutzt '123456' für Tresor-System 'weil es einfach zu merken ist'.", outcome: "Sicherheitsaudit und Schulungen", lesson: "Einfachheit ist nicht immer gut", funny: true },
    { id: 8, title: "Passwort = Password", category: "Creative Genius", severity: "Niedrig", description: "IT-Abteilung setzt Standard-Passwort auf 'Password' - '1' am Ende für Sicherheit.", outcome: "Von Praktikant in 3 Sekunden geknackt", lesson: "Kreativität bei Passwörtern hilft", funny: true },
    { id: 9, title: "Das Passwort-Excel", category: "Storage Fail", severity: "Mittel", description: "Alle Firmen-Passwörter in Excel-Datei namens 'Nicht_öffnen_Passwörter.xlsx'.", outcome: "Datei natürlich unverschlüsselt geteilt", lesson: "Ironie funktioniert nicht bei Sicherheit", funny: true },
    { id: 10, title: "Biometrische Erkennung", category: "Tech Fail", severity: "Lustig", description: "Gesichtserkennung akzeptiert Foto vom Chef - ausgedruckt in schwarz-weiß.", outcome: "System für 50€ umgangen", lesson: "Billige Biometrie ist Geldverschwendung", funny: true },
    
    // E-Mail Katastrophen (11-30)
    { id: 11, title: "Reply All Apokalypse", category: "Email Storm", severity: "Mittel", description: "Mitarbeiter antwortet 'Allen' auf Firmen-E-Mail - löst 50.000 'Bitte nicht antworten' E-Mails aus.", outcome: "E-Mail-Server überlastet, Tag verloren", lesson: "Reply-All ist eine Massenvernichtungswaffe", funny: true },
    { id: 12, title: "Autokorrektur im Angebot", category: "Autocorrect", severity: "Peinlich", description: "Autokorrektur ändert 'Cybersecurity' zu 'Cyber-Sexy' in Millionen-Angebot.", outcome: "Kunde amüsiert, Auftrag trotzdem bekommen", lesson: "Wichtige E-Mails immer Korrektur lesen", funny: true },
    { id: 13, title: "BCC vs CC Verwechslung", category: "Email Fail", severity: "Datenschutz", description: "Newsletter an 10.000 Kunden - alle E-Mails im CC statt BCC.", outcome: "DSGVO-Verstoß und Beschwerden", lesson: "BCC ist kein Luxus, sondern Pflicht", funny: true },
    { id: 14, title: "Der falsche Anhang", category: "Wrong Attachment", severity: "Peinlich", description: "CFO sendet versehentlich Katzenfotos statt Quartalsbericht an Vorstand.", outcome: "Sehr entspannte Vorstandssitzung", lesson: "Anhänge doppelt prüfen", funny: true },
    { id: 15, title: "Out of Office Endlosschleife", category: "Email Loop", severity: "Lustig", description: "Zwei Abwesenheitsnotizen antworten sich gegenseitig - 100.000 E-Mails in 2 Stunden.", outcome: "Mail-Server kämpft ums Überleben", lesson: "Automatische Antworten konfigurieren", funny: true },
    
    // Backup-Desaster (16-35)
    { id: 16, title: "Das Backup vom Backup", category: "Backup Logic", severity: "Katastrophal", description: "Alle Backups zeigen auf denselben defekten Server - 'zur Effizienz'.", outcome: "Totalverlust aller Daten", lesson: "Offsite-Backups sind kein Luxus", funny: false },
    { id: 17, title: "Backup-Kassette im Kaffee", category: "Physical Damage", severity: "Mittel", description: "Einziges Backup-Band landet in Kaffeetasse des Administrators.", outcome: "Daten unlesbar, Admins trinken nur noch Tee", lesson: "Mehrere Backup-Medien verwenden", funny: true },
    { id: 18, title: "Test-Restore seit 3 Jahren nicht", category: "Backup Testing", severity: "Hoch", description: "Backup läuft täglich - seit 3 Jahren leere Dateien, nie getestet.", outcome: "Backup war wertlos als gebraucht", lesson: "Backups regelmäßig testen!", funny: false },
    { id: 19, title: "Cloud-Backup gelöscht", category: "Cloud Fail", severity: "Hoch", description: "Auto-Delete-Regel löscht Backups nach 30 Tagen - 'zur Kostenersparnis'.", outcome: "Bei Bedarf alle Backups weg", lesson: "Aufbewahrungsrichtlinien verstehen", funny: false },
    { id: 20, title: "Backup-Festplatte neben Server", category: "Backup Location", severity: "Mittel", description: "Backup-Festplatte direkt neben Server - beide verbrennen bei Brand.", outcome: "Feuer frisst Daten und Backup", lesson: "Offsite ist nicht nur eine Idee", funny: false },
    
    // Skurrile Hacker-Angriffe (21-40)
    { id: 21, title: "Hack durch Pizza-Bestellung", category: "Social Engineering", severity: "Kreativ", description: "Hacker bestellt Pizza für Security-Team, fragt Lieferant nach WiFi-Passwort.", outcome: "Netzwerk über Pepperoni kompromittiert", lesson: "Jeder kann ein Angriffsvektor sein", funny: true },
    { id: 22, title: "Smartwatch verrät Atomgeheimnisse", category: "IoT Leak", severity: "Hoch", description: "Fitness-Tracker von Soldaten zeigen geheime Militärbasen auf.", outcome: "Militärische Standorte öffentlich", lesson: "IoT-Geräte können spionieren", funny: false },
    { id: 23, title: "Hack durch Aquarium-Thermometer", category: "IoT Attack", severity: "Ungewöhnlich", description: "Casino-Hack über smarten Aquarium-Thermometer im Empfang.", outcome: "Kundendatenbank über Fische gestohlen", lesson: "Alles vernetzte ist angreifbar", funny: true },
    { id: 24, title: "Ransomware will Bitcoin für Minecraft", category: "Gaming Ransomware", severity: "Lustig", description: "Ransomware verschlüsselt nur Minecraft-Welten, will 5€ in Bitcoin.", outcome: "Kinder lernen über Kryptowährung", lesson: "Auch Spiele können Ziele sein", funny: true },
    { id: 25, title: "DDoS durch Kühlschränke", category: "IoT Botnet", severity: "Seltsam", description: "100.000 smarte Kühlschränke führen koordinierten DDoS-Angriff durch.", outcome: "Website durch Haushaltsgeräte platt", lesson: "Smart Home kann dumm enden", funny: true },
    
    // Smartphone & Mobile Chaos (26-45)
    { id: 26, title: "CEO livestreamt Meeting", category: "Mobile Fail", severity: "Peinlich", description: "CEO aktiviert versehentlich Facebook Live während Geheimmeeting.", outcome: "Firmengeheimnisse öffentlich", lesson: "Apps-Berechtigungen kontrollieren", funny: true },
    { id: 27, title: "Autocorrect im Krisenfall", category: "Communication Fail", severity: "Mittel", description: "Krisenmeldung 'Server down' wird zu 'Server crown' - keiner versteht.", outcome: "2 Stunden Verwirrung", lesson: "Kritische Nachrichten doppelt prüfen", funny: true },
    { id: 28, title: "Handy im MRT-Scanner", category: "Device Damage", severity: "Teuer", description: "Smartphone im MRT vergessen - wird zu sehr teurem Briefbeschwerer.", outcome: "50.000€ MRT-Reparatur", lesson: "Metall und Magnete vertragen sich nicht", funny: true },
    { id: 29, title: "Face ID mit Zwilling umgangen", category: "Biometric Fail", severity: "Lustig", description: "iPhone entsperrt sich für eineiigen Zwilling des Besitzers.", outcome: "Bruder kauft Apps für 500€", lesson: "Biometrie hat natürliche Grenzen", funny: true },
    { id: 30, title: "Siri verrät Firmengeheimnisse", category: "Voice Assistant", severity: "Mittel", description: "Siri aktiviert sich während Vorstandssitzung, sendet Aufnahme an Konkurrenz.", outcome: "Zufällige Corporate Espionage", lesson: "Sprachassistenten ausschalten", funny: true },
    
    // Cloud & Server Comedy (31-50)
    { id: 31, title: "AWS-Rechnung wie BIP kleiner Länder", category: "Cloud Costs", severity: "Finanziell", description: "Vergessene EC2-Instanz läuft 6 Monate - Rechnung über 150.000€.", outcome: "CFO bekommt Herzinfarkt", lesson: "Cloud-Monitoring einrichten", funny: false },
    { id: 32, title: "Serverraum als Sauna genutzt", category: "Physical Security", severity: "Warm", description: "Hausmeister nutzt warmen Serverraum für Wellness-Pausen.", outcome: "Server überhitzen, Hausmeister entspannt", lesson: "Zutrittskontrollen durchsetzen", funny: true },
    { id: 33, title: "Load Balancer balanciert ins Nichts", category: "Network Fail", severity: "Hoch", description: "Load Balancer verteilt Traffic auf Server die nicht existieren.", outcome: "Perfekt ausbalanciertes Nichts", lesson: "Health Checks konfigurieren", funny: true },
    { id: 34, title: "Container läuft seit 3 Jahren", category: "Docker Fail", severity: "Ressourcen", description: "Test-Container vergessen - verbraucht seit 3 Jahren Ressourcen.", outcome: "Zombie-Container überlebt alle", lesson: "Container-Lifecycle verwalten", funny: true },
    { id: 35, title: "Kubernetes nennt sich skynet", category: "Naming Fail", severity: "Lustig", description: "K8s-Cluster heißt 'skynet' - wird von Security-Scanner blockiert.", outcome: "Terminator-Paranoia im Monitoring", lesson: "Namen haben Bedeutung", funny: true },
    
    // Entwickler-Witze der Realität (36-55)
    { id: 36, title: "//TODO: Sicherheit hinzufügen", category: "Code Comment", severity: "Niedrig", description: "Kommentar im Produktionscode: '//TODO: Security implementieren, später'.", outcome: "3 Jahre später immer noch da", lesson: "TODOs sind keine Lösung", funny: true },
    { id: 37, title: "SQL Injection durch Semikolon", category: "Dev Fail", severity: "Hoch", description: "Website gehackt durch einfaches '; DROP TABLE --' im Namensfeld.", outcome: "Datenbank weg, Entwickler weint", lesson: "Prepared Statements verwenden", funny: false },
    { id: 38, title: "Git commit -m 'Fix'", category: "Version Control", severity: "Chaos", description: "10.000 Commits mit Message 'Fix' - keiner weiß was gefixt wurde.", outcome: "Debugging wird zum Detektivspiel", lesson: "Aussagekräftige Commit-Messages", funny: true },
    { id: 39, title: "Hardcoded API-Key im Code", category: "Credential Leak", severity: "Hoch", description: "API-Schlüssel direkt im Code - öffentliches GitHub Repository.", outcome: "50.000€ AWS-Rechnung in 2 Tagen", lesson: "Secrets-Management nutzen", funny: false },
    { id: 40, title: "If(true) return false", category: "Logic Fail", severity: "Lustig", description: "Sicherheits-Prüfung prüft immer true, gibt aber false zurück.", outcome: "Alle Passwörter akzeptiert", lesson: "Code-Reviews sind wichtig", funny: true },
    
    // Benutzer vs. Computer (41-60)
    { id: 41, title: "Maus funktioniert nicht", category: "User Support", severity: "Lustig", description: "Nutzer beschwert sich über kaputte Maus - Mauspad steht vertikal an der Wand.", outcome: "Schwerkraft als IT-Problem erkannt", lesson: "Physik gilt auch für Computer", funny: true },
    { id: 42, title: "Internet ist kaputt", category: "User Logic", severity: "Niedrig", description: "Nutzer meldet 'Internet kaputt' - Monitor war ausgeschaltet.", outcome: "ON-Knopf repariert das Internet", lesson: "Einfache Lösungen zuerst probieren", funny: true },
    { id: 43, title: "Backup auf derselben Festplatte", category: "User Backup", severity: "Gefährlich", description: "Nutzer erstellt Backup auf derselben Festplatte 'zur Sicherheit'.", outcome: "Doppelt unsicher gespeichert", lesson: "Backup-Konzepte erklären", funny: true },
    { id: 44, title: "WLAN-Passwort zu kompliziert", category: "Security vs Usability", severity: "Niedrig", description: "Nutzer ändert WLAN-Passwort auf '1' weil '1234567890' zu schwer war.", outcome: "Nachbarn nutzen kostenloses Internet", lesson: "Usability vs Security Balance", funny: true },
    { id: 45, title: "Computer-Virus durch Niesen", category: "User Panic", severity: "Hypochondrie", description: "Nutzer glaubt, Computer mit Erkältung angesteckt zu haben.", outcome: "Desinfektionsmittel auf Tastatur", lesson: "Metaphern können verwirren", funny: true },
    
    // Physische Sicherheit Comedy (46-65)
    { id: 46, title: "Türcode 1-2-3-4", category: "Physical Security", severity: "Niedrig", description: "Hochsicherheitstrakt mit Türcode 1-2-3-4 'damit es alle merken'.", outcome: "Jeder kann rein, sogar Praktikanten", lesson: "Sicherheit erfordert Geheimhaltung", funny: true },
    { id: 47, title: "Badge-Klonen durch Foto", category: "Badge Security", severity: "Mittel", description: "Sicherheitsausweis durch Handy-Foto kopiert und ausgedruckt.", outcome: "Papier-Badge funktioniert perfekt", lesson: "RFID-Sicherheit überdenken", funny: true },
    { id: 48, title: "Serverraum als Abstellkammer", category: "Physical Access", severity: "Hoch", description: "Reinigungskräfte lagern Putzmittel zwischen Servern.", outcome: "Bleichmittel und Elektronik mischen sich", lesson: "Serverräume sind keine Lager", funny: true },
    { id: 49, title: "Überwachungskamera überwacht Wand", category: "Surveillance Fail", severity: "Nutzlos", description: "Sicherheitskamera 3 Jahre auf leere Wand gerichtet.", outcome: "Beste Wandüberwachung der Welt", lesson: "Monitoring-Systeme prüfen", funny: true },
    { id: 50, title: "Fingerabdruck-Scanner mit Klebeband", category: "Biometric Bypass", severity: "Niedrig", description: "Fingerabdruck-Scanner akzeptiert Klebeband mit Fingerabdruck-Foto.", outcome: "Low-Tech schlägt High-Tech", lesson: "Biometrie ist nicht immer besser", funny: true },
    
    // Weitere lustige Fails bis 80...
    { id: 80, title: "KI erkennt Hotdog als Sicherheitsbedrohung", category: "AI Fail", severity: "Lustig", description: "Firmen-KI blockiert alle Bilder mit Hotdogs als 'verdächtig'.", outcome: "Mittagspausen werden problematisch", lesson: "KI braucht Training und Kontext", funny: true }
];

// Export für Browser
window.FUNNY_IT_FAILS = FUNNY_IT_FAILS;
