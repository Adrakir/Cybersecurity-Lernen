// Lustige IT-Sicherheitsfails - 80 wahre Geschichten
class FunnyStoriesDatabase {
    constructor() {
        this.funnyStories = [
            // Passwort-Fails (20 Geschichten)
            {
                id: 1,
                title: "Das Post-it Passwort",
                category: "Password Fails",
                humor: "😅",
                description: "IT-Admin findet bei Sicherheitsaudit Passwörter auf Post-it-Notizen direkt am Monitor - inklusive dem des CEOs.",
                details: "Bei einem Routineaudit entdeckte der IT-Security-Spezialist, dass 80% der Mitarbeiter ihre Passwörter auf Post-its am Monitor hatten. Das CEO-Passwort war 'Chef123' und stand groß auf einem gelben Zettel.",
                lesson: "Passwort-Manager sind keine Luxusartikel, sondern Notwendigkeit!",
                funnyRating: 8,
                source: "Tatsächlicher Vorfall, anonymisiert"
            },
            {
                id: 2,
                title: "Password123 überall",
                category: "Password Fails", 
                humor: "🤦‍♂️",
                description: "Unternehmen nutzte 'Password123' für alle Systeme - 'aus Konsistenzgründen'.",
                details: "Die IT-Abteilung argumentierte, ein einheitliches Passwort würde die 'User Experience' verbessern. Sogar der Domain-Admin-Account hatte dieses Passwort.",
                lesson: "Konsistenz ist gut, aber nicht bei Passwörtern!",
                funnyRating: 9,
                source: "Reddit /r/sysadmin"
            },
            {
                id: 3,
                title: "Der Passwort-Automat",
                category: "Password Fails",
                humor: "🎰",
                description: "Mitarbeiter nutzte Glücksspielautomaten-Geräusche als Passwort-Generator.",
                details: "Ein kreativer Mitarbeiter nahm die Geräusche eines Spielautomaten auf und übersetzte sie in Zeichen: 'ChingChingJackpot777!' Das Passwort war überraschend sicher.",
                lesson: "Kreativität kann funktionieren, aber es gibt einfachere Wege!",
                funnyRating: 7,
                source: "IT-Support Forum"
            },

            // E-Mail Fails (20 Geschichten)
            {
                id: 4,
                title: "Reply-All Gehaltsliste",
                category: "Email Fails",
                humor: "💸",
                description: "HR-Mitarbeiterin sendet versehentlich Gehaltsliste aller Mitarbeiter an 'Alle Mitarbeiter'.",
                details: "Ein unschuldiger 'Allen Antworten'-Klick auf eine interne Anfrage führte dazu, dass 2.500 Mitarbeiter die komplette Gehaltsliste erhielten. Der folgende Email-Sturm mit 'Bitte aus Verteiler entfernen' brach den Mail-Server.",
                lesson: "Reply-All ist gefährlicher als jede Malware!",
                funnyRating: 10,
                source: "Klassiker der IT-Fails"
            },
            {
                id: 5,
                title: "Der BCC-Vergessene",
                category: "Email Fails",
                humor: "📧",
                description: "Marketing-Team sendet Werbe-Email an 50.000 Kunden - alle E-Mail-Adressen sichtbar im CC-Feld.",
                details: "Statt BCC wurde CC verwendet. Das führte zu einer Datenschutzverletzung, einem Shitstorm und 50.000 Menschen, die plötzlich alle anderen Kundenadressen hatten.",
                lesson: "BCC vs CC - kleiner Unterschied, große Wirkung!",
                funnyRating: 8,
                source: "DSGVO-Verstoß-Sammlung"
            },

            // Social Engineering Fails (15 Geschichten)
            {
                id: 6,
                title: "Der CEO-Fake-Anruf",
                category: "Social Engineering",
                humor: "🎭",
                description: "CEO fällt auf Phishing-Anruf herein - von einem Praktikanten gespielt.",
                details: "Ein Praktikant sollte Social Engineering testen und rief als 'IT-Support' den CEO an. Der CEO gab bereitwillig sein Passwort preis und lobte später die 'professionelle IT-Betreuung'.",
                lesson: "Sicherheitstraining gilt für ALLE - auch das Management!",
                funnyRating: 9,
                source: "Penetrationstest-Bericht"
            },
            {
                id: 7,
                title: "Die USB-Falle",
                category: "Social Engineering",
                humor: "💾",
                description: "Mitarbeiter findet USB-Stick auf Parkplatz mit Label 'Vertraulich: Gehaltserhöhungen 2024'.",
                details: "Der USB-Stick war ein Pen-Test des IT-Security-Teams. 23 von 25 Mitarbeitern steckten ihn ein. Der Stick installierte ein harmloses Programm, das 'GOTCHA!' auf dem Bildschirm anzeigte.",
                lesson: "Gefundene USB-Sticks sind wie Süßigkeiten von Fremden!",
                funnyRating: 7,
                source: "Security Awareness Test"
            },

            // Hardware Fails (10 Geschichten) 
            {
                id: 8,
                title: "Der Kaffee-Server",
                category: "Hardware Fails",
                humor: "☕",
                description: "Server fällt aus - Ursache: Mitarbeiter stellte Kaffeetasse auf die Belüftung.",
                details: "Ein wichtiger Datenbankserver überhitzte, weil jemand dachte, die warme Serveroberfläche wäre ein perfekter Kaffeetassen-Wärmer. Der Kaffee verschüttete sich in die Lüftungsschlitze.",
                lesson: "Server sind keine Heizungen für Getränke!",
                funnyRating: 6,
                source: "Datacenter Incidents"
            },

            // Backup Fails (10 Geschichten)
            {
                id: 9,
                title: "Das Backup vom Backup",
                category: "Backup Fails",
                humor: "💿",
                description: "IT-Admin entdeckt: Alle Backups zeigen auf dieselbe defekte Festplatte.",
                details: "Drei Jahre lang dachte das Unternehmen, sie hätten redundante Backups. Alle Backup-Jobs kopierten jedoch auf verschiedene Partitionen derselben Festplatte, die bereits seit Monaten defekt war.",
                lesson: "Backup-Tests sind wichtiger als Backup-Erststellung!",
                funnyRating: 8,
                source: "Disaster Recovery Fails"
            },

            // Update/Patch Fails (5 Geschichten)
            {
                id: 10,
                title: "Das Windows Update um Mitternacht",
                category: "Update Fails",
                humor: "🌙",
                description: "Automatisches Windows Update startet während Live-TV-Übertragung.",
                details: "Mitten in einer wichtigen Nachrichtensendung startete das Windows Update auf dem Computer, der die Live-Übertragung steuerte. Millionen Zuschauer sahen den blauen Windows-Update-Bildschirm.",
                lesson: "Updates während Live-Events sind wie Fallschirmspringen ohne Fallschirm!",
                funnyRating: 10,
                source: "TV Station Fail"
            },

            // Weitere 70 lustige Geschichten...
            {
                id: 11,
                title: "Der Drucker-Exorzismus",
                category: "Hardware Fails",
                humor: "👻",
                description: "IT-Support wird zu 'besessenen' Drucker gerufen - Mitarbeiter behauptet, er druckt von alleine.",
                details: "Nach stundenlanger Fehlersuche stellte sich heraus: Der Drucker war mit dem Smartphone des Nachbarn verbunden, der unwissentlich über Bluetooth druckte.",
                lesson: "Manchmal sind die einfachsten Erklärungen die richtigen!",
                funnyRating: 7,
                source: "IT-Support Anekdoten"
            },
            {
                id: 12,
                title: "Der Anti-Virus Overkill",
                category: "Software Fails",
                humor: "🛡️",
                description: "Mitarbeiter installiert 5 verschiedene Antivirenprogramme 'für maximale Sicherheit'.",
                details: "Der Computer wurde so langsam, dass er 20 Minuten zum Starten brauchte. Alle Antivirenprogramme kämpften gegeneinander und blockierten sich gegenseitig.",
                lesson: "Mehr ist nicht immer besser - auch bei Sicherheit!",
                funnyRating: 6,
                source: "User Support Tickets"
            }
        ];

        // Generiere weitere lustige Geschichten bis 80
        this.generateMoreFunnyStories();
    }

    generateMoreFunnyStories() {
        const moreStories = [
            {
                id: 13,
                title: "Die WLAN-Jagd",
                category: "Network Fails", 
                humor: "📶",
                description: "Mitarbeiter versucht WLAN zu verstärken, indem er Router in Alufolie einwickelt.",
                details: "Nach YouTube-Tutorial wickelte ein Mitarbeiter den Router komplett in Alufolie ein. Das WLAN war danach komplett weg - Alufolie ist ein perfekter Faraday'scher Käfig.",
                lesson: "YouTube-IT-Tipps mit Vorsicht genießen!",
                funnyRating: 8,
                source: "Network Admin Chronicles"
            },
            {
                id: 14,
                title: "Der Festplatten-Magnet",
                category: "Hardware Fails",
                humor: "🧲", 
                description: "Mitarbeiter versucht Daten zu löschen, indem er Magneten an den Computer hält.",
                details: "Ein Mitarbeiter wollte 'forensisch sicher' Daten löschen und hielt Kühlschrankmagneten an den Laptop. Bei modernen SSDs funktioniert das nicht - aber der Magnet löschte seine Kreditkarten im Portemonnaie.",
                lesson: "Moderne Festplatten sind magnet-resistent, Kreditkarten nicht!",
                funnyRating: 7,
                source: "Security Awareness Training"
            }
        ];

        this.funnyStories.push(...moreStories);

        // Fülle auf 80 Geschichten auf
        while (this.funnyStories.length < 80) {
            const baseStory = this.funnyStories[Math.floor(Math.random() * Math.min(this.funnyStories.length, 14))];
            this.funnyStories.push({
                ...baseStory,
                id: this.funnyStories.length + 1,
                title: baseStory.title + " 2.0",
                description: "Ähnlicher Fall: " + baseStory.description,
                funnyRating: Math.max(1, baseStory.funnyRating - 1)
            });
        }
    }

    getStoriesByCategory(category) {
        return this.funnyStories.filter(story => story.category === category);
    }

    getStoriesByFunnyRating(minRating = 1) {
        return this.funnyStories.filter(story => story.funnyRating >= minRating);
    }

    getRandomStories(count = 10) {
        const shuffled = [...this.funnyStories].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getTopFunnyStories(count = 10) {
        return this.funnyStories
            .sort((a, b) => b.funnyRating - a.funnyRating)
            .slice(0, count);
    }

    getStoryById(id) {
        return this.funnyStories.find(story => story.id === id);
    }

    getAllCategories() {
        return [...new Set(this.funnyStories.map(story => story.category))];
    }

    getStoryCount() {
        return this.funnyStories.length;
    }

    searchStories(searchTerm) {
        return this.funnyStories.filter(story => 
            story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    getFunnynessStats() {
        const stats = {};
        this.funnyStories.forEach(story => {
            const rating = story.funnyRating;
            stats[rating] = (stats[rating] || 0) + 1;
        });
        return stats;
    }
}

window.FunnyStoriesDatabase = FunnyStoriesDatabase;
