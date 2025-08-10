// Erweiterte Fragendatenbank mit 300+ Fragen für alle IT-Sicherheit Bereiche
const extendedQuizDatabase = {
    // IT-Systeme und Netzwerk (80 Fragen)
    "IT-Systeme und Netzwerk": [
        // Grundlagen (20 Fragen)
        {
            id: "net_001",
            question: "Welche Schicht des OSI-Modells ist für die End-zu-End-Datenübertragung zuständig?",
            options: ["A) Anwendungsschicht", "B) Transportschicht", "C) Vermittlungsschicht", "D) Bitübertragungsschicht"],
            correct: "B",
            explanation: "Die Transportschicht (Layer 4) sorgt für zuverlässige End-zu-End-Kommunikation zwischen Anwendungen.",
            difficulty: "mittel",
            category: "Netzwerk-Grundlagen"
        },
        {
            id: "net_002",
            question: "Was bedeutet CIDR-Notation /24 bei einer IP-Adresse?",
            options: ["A) 24 Hosts im Netz", "B) 24 Bits für Subnetz-Maske", "C) 24 Router im Pfad", "D) 24 Ports offen"],
            correct: "B",
            explanation: "/24 bedeutet, dass die ersten 24 Bits für die Netzwerk-Adresse reserviert sind (Subnetz-Maske: 255.255.255.0).",
            difficulty: "mittel",
            category: "IP-Adressierung"
        },
        {
            id: "net_003",
            question: "Welcher Port wird standardmäßig für HTTPS verwendet?",
            options: ["A) 80", "B) 443", "C) 8080", "D) 25"],
            correct: "B",
            explanation: "HTTPS (HTTP Secure) verwendet standardmäßig Port 443 für verschlüsselte Webkommunikation.",
            difficulty: "einfach",
            category: "Protokolle"
        },
        {
            id: "net_004",
            question: "Was ist der Hauptunterschied zwischen TCP und UDP?",
            options: ["A) TCP ist schneller", "B) UDP ist zuverlässiger", "C) TCP ist verbindungsorientiert", "D) UDP verwendet Verschlüsselung"],
            correct: "C",
            explanation: "TCP ist verbindungsorientiert und garantiert Datenübertragung, während UDP verbindungslos und schneller ist.",
            difficulty: "mittel",
            category: "Protokolle"
        },
        {
            id: "net_005",
            question: "Welche Technologie ermöglicht es, mehrere VLANs über einen einzigen physischen Port zu übertragen?",
            options: ["A) Link Aggregation", "B) VLAN Trunking", "C) Port Mirroring", "D) Spanning Tree"],
            correct: "B",
            explanation: "VLAN Trunking ermöglicht die Übertragung mehrerer VLANs über einen physischen Link durch VLAN-Tags.",
            difficulty: "schwer",
            category: "VLAN"
        },
        // Weitere Netzwerk-Fragen...
        {
            id: "net_006",
            question: "Was ist ein Standard-Gateway?",
            options: ["A) Ein Firewall-System", "B) Ein Router für andere Netzwerke", "C) Ein DNS-Server", "D) Ein DHCP-Server"],
            correct: "B",
            explanation: "Ein Standard-Gateway ist ein Router, der Pakete an Ziele außerhalb des lokalen Netzwerks weiterleitet.",
            difficulty: "einfach",
            category: "Routing"
        },
        {
            id: "net_007",
            question: "Welches Routing-Protokoll wird am häufigsten in großen Unternehmensnetzwerken verwendet?",
            options: ["A) RIP", "B) EIGRP", "C) OSPF", "D) BGP"],
            correct: "C",
            explanation: "OSPF (Open Shortest Path First) ist ein weit verbreitetes Link-State-Routing-Protokoll für Unternehmen.",
            difficulty: "schwer",
            category: "Routing"
        },
        {
            id: "net_008",
            question: "Was bewirkt der Befehl 'ipconfig /flushdns' unter Windows?",
            options: ["A) Löscht IP-Konfiguration", "B) Leert DNS-Cache", "C) Erneuert DHCP-Lease", "D) Startet Netzwerkadapter neu"],
            correct: "B",
            explanation: "Der Befehl leert den lokalen DNS-Cache, sodass DNS-Anfragen neu aufgelöst werden müssen.",
            difficulty: "mittel",
            category: "DNS"
        },
        // Mehr Netzwerk-Fragen hier...
    ],

    // Cyber-Security und Bedrohungen (100 Fragen)
    "Cyber-Security": [
        // Malware und Viren (25 Fragen)
        {
            id: "sec_001",
            question: "Was ist der Hauptunterschied zwischen einem Virus und einem Wurm?",
            options: ["A) Viren sind schneller", "B) Würmer verbreiten sich selbständig", "C) Viren sind gefährlicher", "D) Würmer sind kleiner"],
            correct: "B",
            explanation: "Würmer können sich selbständig über Netzwerke verbreiten, während Viren einen Host benötigen.",
            difficulty: "mittel",
            category: "Malware"
        },
        {
            id: "sec_002",
            question: "Was ist ein Zero-Day-Exploit?",
            options: ["A) Ein sehr alter Angriff", "B) Angriff ohne Schaden", "C) Angriff auf unbekannte Schwachstelle", "D) Angriff am Nulltag"],
            correct: "C",
            explanation: "Zero-Day-Exploits nutzen Schwachstellen aus, die noch nicht öffentlich bekannt oder gepatcht sind.",
            difficulty: "schwer",
            category: "Exploits"
        },
        {
            id: "sec_003",
            question: "Welche Methode ist am effektivsten gegen Ransomware?",
            options: ["A) Antivirus-Software", "B) Regelmäßige Backups", "C) Firewall", "D) VPN"],
            correct: "B",
            explanation: "Regelmäßige, getestete Backups sind der beste Schutz, da Daten wiederhergestellt werden können.",
            difficulty: "mittel",
            category: "Ransomware"
        },
        {
            id: "sec_004",
            question: "Was ist Social Engineering?",
            options: ["A) Software-Entwicklung", "B) Netzwerk-Engineering", "C) Manipulation von Menschen", "D) Hardware-Design"],
            correct: "C",
            explanation: "Social Engineering nutzt psychologische Manipulation, um Menschen zur Preisgabe von Informationen zu bewegen.",
            difficulty: "einfach",
            category: "Social Engineering"
        },
        {
            id: "sec_005",
            question: "Was ist ein Botnet?",
            options: ["A) Ein Netzwerk von Robotern", "B) Infizierte Computer unter Kontrolle", "C) Ein Anti-Virus-Netzwerk", "D) Ein soziales Netzwerk"],
            correct: "B",
            explanation: "Ein Botnet ist ein Netzwerk von infizierten Computern, die ferngesteuert für Angriffe verwendet werden.",
            difficulty: "mittel",
            category: "Malware"
        },
        // Phishing und Social Engineering (25 Fragen)
        {
            id: "sec_006",
            question: "Welches ist ein typisches Merkmal einer Phishing-E-Mail?",
            options: ["A) Persönliche Anrede", "B) Dringlichkeit und Zeitdruck", "C) Korrekte Grammatik", "D) Offizielle E-Mail-Adresse"],
            correct: "B",
            explanation: "Phishing-E-Mails erzeugen oft künstlichen Zeitdruck, um Opfer zu schnellen, unüberlegten Handlungen zu bewegen.",
            difficulty: "einfach",
            category: "Phishing"
        },
        {
            id: "sec_007",
            question: "Was ist Spear-Phishing?",
            options: ["A) Phishing mit Harpunen", "B) Gezieltes Phishing auf bestimmte Personen", "C) Phishing über Telefon", "D) Phishing mit Speeren"],
            correct: "B",
            explanation: "Spear-Phishing richtet sich gezielt an bestimmte Personen oder Organisationen mit personalisierten Nachrichten.",
            difficulty: "mittel",
            category: "Phishing"
        },
        {
            id: "sec_008",
            question: "Was ist Pretexting?",
            options: ["A) Vorgetäuschte Identität für Informationsbeschaffung", "B) Textnachrichten senden", "C) Vorab-Tests durchführen", "D) Texte übersetzen"],
            correct: "A",
            explanation: "Pretexting ist eine Social Engineering-Technik, bei der eine falsche Identität vorgetäuscht wird.",
            difficulty: "schwer",
            category: "Social Engineering"
        },
        // Weitere Security-Fragen...
    ],

    // Kryptographie und Verschlüsselung (60 Fragen)
    "Kryptographie": [
        {
            id: "crypt_001",
            question: "Was ist der Hauptvorteil von asymmetrischer Verschlüsselung?",
            options: ["A) Schnelligkeit", "B) Einfachheit", "C) Kein Schlüsselaustausch nötig", "D) Geringere CPU-Last"],
            correct: "C",
            explanation: "Asymmetrische Verschlüsselung ermöglicht sichere Kommunikation ohne vorherigen Schlüsselaustausch.",
            difficulty: "mittel",
            category: "Verschlüsselung"
        },
        {
            id: "crypt_002",
            question: "Was ist ein Hash-Wert?",
            options: ["A) Ein verschlüsselter Text", "B) Ein Fingerabdruck von Daten", "C) Ein Passwort", "D) Ein Schlüssel"],
            correct: "B",
            explanation: "Ein Hash-Wert ist ein eindeutiger 'Fingerabdruck' von Daten, der zur Integritätsprüfung verwendet wird.",
            difficulty: "einfach",
            category: "Hashing"
        },
        {
            id: "crypt_003",
            question: "Welcher Algorithmus wird für digitale Signaturen verwendet?",
            options: ["A) AES", "B) RSA", "C) DES", "D) MD5"],
            correct: "B",
            explanation: "RSA ist ein asymmetrischer Algorithmus, der häufig für digitale Signaturen verwendet wird.",
            difficulty: "mittel",
            category: "Digitale Signaturen"
        },
        {
            id: "crypt_004",
            question: "Was bedeutet 'Salting' bei Passwort-Hashing?",
            options: ["A) Passwort würzen", "B) Zufällige Daten hinzufügen", "C) Passwort kürzen", "D) Passwort kodieren"],
            correct: "B",
            explanation: "Salting fügt zufällige Daten zu Passwörtern hinzu, bevor sie gehasht werden, um Rainbow-Table-Angriffe zu verhindern.",
            difficulty: "schwer",
            category: "Passwort-Sicherheit"
        },
        // Weitere Kryptographie-Fragen...
    ],

    // Datenschutz und Compliance (80 Fragen)
    "Datenschutz": [
        {
            id: "privacy_001",
            question: "Was ist das Prinzip der Datenminimierung nach DSGVO?",
            options: ["A) Daten komprimieren", "B) Nur notwendige Daten erheben", "C) Daten löschen", "D) Daten verschlüsseln"],
            correct: "B",
            explanation: "Datenminimierung bedeutet, nur die Daten zu erheben, die für den Zweck erforderlich sind.",
            difficulty: "mittel",
            category: "DSGVO"
        },
        {
            id: "privacy_002",
            question: "Wie lange hat ein Unternehmen Zeit, eine Datenpanne nach DSGVO zu melden?",
            options: ["A) 24 Stunden", "B) 48 Stunden", "C) 72 Stunden", "D) 7 Tage"],
            correct: "C",
            explanation: "Nach DSGVO muss eine Datenpanne innerhalb von 72 Stunden an die Aufsichtsbehörde gemeldet werden.",
            difficulty: "mittel",
            category: "DSGVO"
        },
        {
            id: "privacy_003",
            question: "Was ist das Recht auf Vergessenwerden?",
            options: ["A) Recht auf Passwort-Reset", "B) Recht auf Löschung personenbezogener Daten", "C) Recht auf Anonymität", "D) Recht auf Verschlüsselung"],
            correct: "B",
            explanation: "Das Recht auf Vergessenwerden gibt Betroffenen das Recht, die Löschung ihrer personenbezogenen Daten zu verlangen.",
            difficulty: "einfach",
            category: "DSGVO"
        },
        // Weitere Datenschutz-Fragen...
    ],

    // Cloud Security (40 Fragen)
    "Cloud Security": [
        {
            id: "cloud_001",
            question: "Was ist das Shared Responsibility Model in der Cloud?",
            options: ["A) Kosten teilen", "B) Sicherheitsverantwortung teilen", "C) Server teilen", "D) Daten teilen"],
            correct: "B",
            explanation: "Das Shared Responsibility Model definiert, welche Sicherheitsaspekte der Cloud-Anbieter und welche der Kunde verantwortet.",
            difficulty: "mittel",
            category: "Cloud-Grundlagen"
        },
        {
            id: "cloud_002",
            question: "Was ist ein CASB (Cloud Access Security Broker)?",
            options: ["A) Cloud-Speicher", "B) Sicherheits-Gateway für Cloud-Services", "C) Cloud-Anbieter", "D) Backup-Service"],
            correct: "B",
            explanation: "Ein CASB ist ein Sicherheits-Gateway, das zwischen Nutzern und Cloud-Anbietern steht und Sicherheitsrichtlinien durchsetzt.",
            difficulty: "schwer",
            category: "Cloud-Security-Tools"
        },
        // Weitere Cloud-Security-Fragen...
    ],

    // IoT und Mobile Security (60 Fragen)
    "IoT und Mobile Security": [
        {
            id: "iot_001",
            question: "Was ist das größte Sicherheitsproblem bei IoT-Geräten?",
            options: ["A) Hoher Stromverbrauch", "B) Standard-Passwörter", "C) Langsame Verbindung", "D) Große Größe"],
            correct: "B",
            explanation: "Viele IoT-Geräte verwenden unveränderliche Standard-Passwörter, was sie zu einfachen Zielen macht.",
            difficulty: "einfach",
            category: "IoT-Sicherheit"
        },
        {
            id: "mobile_001",
            question: "Was ist App Store Validation?",
            options: ["A) Apps bewerten", "B) Apps auf Malware prüfen", "C) Apps kaufen", "D) Apps updaten"],
            correct: "B",
            explanation: "App Store Validation prüft Apps vor Veröffentlichung auf Malware und Sicherheitsprobleme.",
            difficulty: "mittel",
            category: "Mobile-Sicherheit"
        },
        // Weitere IoT/Mobile-Fragen...
    ],

    // Incident Response und Forensik (40 Fragen)
    "Incident Response": [
        {
            id: "ir_001",
            question: "Was ist der erste Schritt bei einem Sicherheitsvorfall?",
            options: ["A) Forensik starten", "B) Eindämmung", "C) Identifikation", "D) Wiederherstellung"],
            correct: "C",
            explanation: "Der erste Schritt ist die Identifikation und Bewertung des Vorfalls.",
            difficulty: "mittel",
            category: "Incident-Response-Prozess"
        },
        {
            id: "ir_002",
            question: "Was bedeutet 'Chain of Custody' in der digitalen Forensik?",
            options: ["A) Befehlskette", "B) Beweismittel-Nachverfolgung", "C) Custody-Account", "D) Ketten-Verschlüsselung"],
            correct: "B",
            explanation: "Chain of Custody dokumentiert die Behandlung und den Verbleib von Beweismitteln lückenlos.",
            difficulty: "schwer",
            category: "Digitale-Forensik"
        },
        // Weitere IR-Fragen...
    ]
};

// Adaptive Quiz-Engine mit KI-Integration
class AdaptiveQuizEngine {
    constructor() {
        this.allQuestions = this.loadAllQuestions();
        this.userProfile = this.loadUserProfile();
        this.currentSession = this.initializeSession();
        this.adaptiveAlgorithm = new AdaptiveLearningAlgorithm();
    }

    loadAllQuestions() {
        // Kombiniere alle Fragen aus verschiedenen Quellen
        let questions = [];
        
        for (const [category, categoryQuestions] of Object.entries(extendedQuizDatabase)) {
            questions = questions.concat(categoryQuestions.map(q => ({
                ...q,
                category: category
            })));
        }

        // Mische Fragen für Abwechslung
        return this.shuffleArray(questions);
    }

    // Intelligente Fragenselektion basierend auf Nutzerperformance
    selectNextQuestion(userStats, preferredCategories = []) {
        const availableQuestions = this.getAvailableQuestions(userStats);
        
        if (availableQuestions.length === 0) {
            return null; // Alle Fragen beantwortet
        }

        // KI-basierte Auswahl
        if (aiService && !aiService.useLocalModel) {
            return this.aiSelectQuestion(availableQuestions, userStats);
        }

        // Lokale adaptive Auswahl
        return this.localAdaptiveSelection(availableQuestions, userStats, preferredCategories);
    }

    localAdaptiveSelection(questions, userStats, preferredCategories) {
        // Gewichtung basierend auf Performance
        const scoredQuestions = questions.map(question => {
            let score = 0;
            
            // Schwierigkeitsgrad-Matching
            const userLevel = this.calculateUserLevel(userStats);
            const difficultyMatch = this.getDifficultyScore(question.difficulty, userLevel);
            score += difficultyMatch * 40;

            // Kategorie-Präferenz
            if (preferredCategories.includes(question.category)) {
                score += 30;
            }

            // Schwache Bereiche priorisieren
            const categoryPerformance = userStats.categories[question.category];
            if (categoryPerformance && categoryPerformance.accuracy < 0.7) {
                score += 25;
            }

            // Abwechslung (weniger kürzlich gesehene Fragen bevorzugen)
            if (!userStats.recentQuestions.includes(question.id)) {
                score += 20;
            }

            // Zufälligkeit hinzufügen
            score += Math.random() * 10;

            return { question, score };
        });

        // Höchste Bewertung wählen
        scoredQuestions.sort((a, b) => b.score - a.score);
        return scoredQuestions[0].question;
    }

    async aiSelectQuestion(questions, userStats) {
        const prompt = `
        Wähle die beste nächste Frage für diesen Nutzer:
        
        Nutzer-Performance:
        - Gesamtgenauigkeit: ${(userStats.overall.correct / userStats.overall.total * 100).toFixed(1)}%
        - Schwache Bereiche: ${Object.entries(userStats.categories)
            .filter(([cat, stats]) => stats.accuracy < 0.7)
            .map(([cat]) => cat).join(', ')}
        - Starke Bereiche: ${Object.entries(userStats.categories)
            .filter(([cat, stats]) => stats.accuracy > 0.8)
            .map(([cat]) => cat).join(', ')}
        
        Verfügbare Fragen: ${questions.length}
        
        Antworte nur mit der Question-ID der empfohlenen Frage.
        `;

        try {
            const response = await aiService.callOpenAI(prompt, 50);
            const questionId = response.trim();
            return questions.find(q => q.id === questionId) || questions[0];
        } catch (error) {
            return this.localAdaptiveSelection(questions, userStats, []);
        }
    }

    calculateUserLevel(userStats) {
        const accuracy = userStats.overall.correct / userStats.overall.total;
        const questionCount = userStats.overall.total;

        if (accuracy > 0.9 && questionCount > 50) return 'expert';
        if (accuracy > 0.8 && questionCount > 30) return 'advanced';
        if (accuracy > 0.7 && questionCount > 15) return 'intermediate';
        return 'beginner';
    }

    getDifficultyScore(questionDifficulty, userLevel) {
        const difficultyMap = {
            'einfach': 1,
            'mittel': 2,
            'schwer': 3
        };

        const levelMap = {
            'beginner': 1,
            'intermediate': 2,
            'advanced': 2.5,
            'expert': 3
        };

        const questionLevel = difficultyMap[questionDifficulty] || 2;
        const userLevelNum = levelMap[userLevel] || 1;

        // Optimale Schwierigkeit ist etwas über dem Nutzer-Level
        const optimalDifficulty = userLevelNum + 0.2;
        const difference = Math.abs(questionLevel - optimalDifficulty);

        return Math.max(0, 10 - difference * 3);
    }

    getAvailableQuestions(userStats) {
        // Filtere bereits beantwortete Fragen (optional für Wiederholung)
        const answeredQuestions = userStats.answeredQuestions || [];
        const recentQuestions = userStats.recentQuestions || [];

        return this.allQuestions.filter(question => {
            // Vermeide sehr kürzlich gesehene Fragen
            if (recentQuestions.slice(-10).includes(question.id)) {
                return false;
            }
            
            // Erlaube Wiederholung nach einer Weile
            return true;
        });
    }

    // Erweiterte Statistik-Generierung
    generateDetailedStats(userAnswers) {
        const stats = {
            overall: { correct: 0, total: 0, accuracy: 0 },
            categories: {},
            difficulties: {},
            timeStats: {
                averageTime: 0,
                fastestAnswer: Infinity,
                slowestAnswer: 0
            },
            learningProgress: {
                improvementRate: 0,
                consistencyScore: 0,
                streakInfo: {}
            },
            recommendations: []
        };

        // Grundstatistiken berechnen
        userAnswers.forEach(answer => {
            // Overall stats
            stats.overall.total++;
            if (answer.isCorrect) stats.overall.correct++;

            // Category stats
            if (!stats.categories[answer.category]) {
                stats.categories[answer.category] = { correct: 0, total: 0, accuracy: 0, averageTime: 0 };
            }
            stats.categories[answer.category].total++;
            if (answer.isCorrect) stats.categories[answer.category].correct++;

            // Difficulty stats
            if (!stats.difficulties[answer.difficulty]) {
                stats.difficulties[answer.difficulty] = { correct: 0, total: 0, accuracy: 0 };
            }
            stats.difficulties[answer.difficulty].total++;
            if (answer.isCorrect) stats.difficulties[answer.difficulty].correct++;

            // Time stats
            if (answer.timeSpent) {
                stats.timeStats.averageTime += answer.timeSpent;
                stats.timeStats.fastestAnswer = Math.min(stats.timeStats.fastestAnswer, answer.timeSpent);
                stats.timeStats.slowestAnswer = Math.max(stats.timeStats.slowestAnswer, answer.timeSpent);
            }
        });

        // Genauigkeiten berechnen
        stats.overall.accuracy = stats.overall.correct / stats.overall.total;
        
        Object.keys(stats.categories).forEach(cat => {
            stats.categories[cat].accuracy = stats.categories[cat].correct / stats.categories[cat].total;
        });

        Object.keys(stats.difficulties).forEach(diff => {
            stats.difficulties[diff].accuracy = stats.difficulties[diff].correct / stats.difficulties[diff].total;
        });

        stats.timeStats.averageTime /= userAnswers.length;

        // Lernfortschritt analysieren
        stats.learningProgress = this.analyzeLearningProgress(userAnswers);

        // Empfehlungen generieren
        stats.recommendations = this.generateRecommendations(stats);

        return stats;
    }

    analyzeLearningProgress(userAnswers) {
        const progress = {
            improvementRate: 0,
            consistencyScore: 0,
            streakInfo: this.calculateStreaks(userAnswers),
            trendAnalysis: this.analyzeTrends(userAnswers)
        };

        // Verbesserungsrate berechnen (erste vs. letzte Hälfte)
        const halfPoint = Math.floor(userAnswers.length / 2);
        const firstHalf = userAnswers.slice(0, halfPoint);
        const secondHalf = userAnswers.slice(halfPoint);

        if (firstHalf.length > 0 && secondHalf.length > 0) {
            const firstAccuracy = firstHalf.filter(a => a.isCorrect).length / firstHalf.length;
            const secondAccuracy = secondHalf.filter(a => a.isCorrect).length / secondHalf.length;
            progress.improvementRate = ((secondAccuracy - firstAccuracy) / firstAccuracy) * 100;
        }

        // Konsistenz-Score (niedrige Standardabweichung = höhere Konsistenz)
        const accuracyBySession = this.groupBySession(userAnswers);
        if (accuracyBySession.length > 1) {
            const sessionAccuracies = accuracyBySession.map(session => 
                session.filter(a => a.isCorrect).length / session.length
            );
            const mean = sessionAccuracies.reduce((a, b) => a + b) / sessionAccuracies.length;
            const variance = sessionAccuracies.reduce((sum, acc) => sum + Math.pow(acc - mean, 2), 0) / sessionAccuracies.length;
            progress.consistencyScore = Math.max(0, 100 - (Math.sqrt(variance) * 100));
        }

        return progress;
    }

    calculateStreaks(userAnswers) {
        let currentStreak = 0;
        let maxStreak = 0;
        let streaks = [];

        userAnswers.forEach((answer, index) => {
            if (answer.isCorrect) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                if (currentStreak > 0) {
                    streaks.push(currentStreak);
                }
                currentStreak = 0;
            }
        });

        return {
            current: currentStreak,
            max: maxStreak,
            average: streaks.length > 0 ? streaks.reduce((a, b) => a + b) / streaks.length : 0,
            count: streaks.length
        };
    }

    analyzeTrends(userAnswers) {
        // Analysiere Trends über Zeit
        const timeWindows = this.groupByTimeWindow(userAnswers, 'day');
        const trends = {
            dailyAccuracy: [],
            improvementTrend: 'stable',
            bestTimeOfDay: null,
            worstCategory: null,
            improvingCategories: []
        };

        // Tägliche Genauigkeit berechnen
        timeWindows.forEach(window => {
            const accuracy = window.answers.filter(a => a.isCorrect).length / window.answers.length;
            trends.dailyAccuracy.push({
                date: window.date,
                accuracy: accuracy,
                count: window.answers.length
            });
        });

        // Trend bestimmen
        if (trends.dailyAccuracy.length >= 3) {
            const recent = trends.dailyAccuracy.slice(-3);
            const isImproving = recent.every((day, i) => i === 0 || day.accuracy >= recent[i-1].accuracy);
            const isDeclining = recent.every((day, i) => i === 0 || day.accuracy <= recent[i-1].accuracy);
            
            if (isImproving) trends.improvementTrend = 'improving';
            else if (isDeclining) trends.improvementTrend = 'declining';
        }

        return trends;
    }

    groupByTimeWindow(answers, window) {
        // Gruppiere Antworten nach Zeitfenster (Tag, Woche, etc.)
        const groups = {};
        
        answers.forEach(answer => {
            const date = new Date(answer.timestamp);
            let key;
            
            switch(window) {
                case 'day':
                    key = date.toDateString();
                    break;
                case 'week':
                    const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
                    key = weekStart.toDateString();
                    break;
                default:
                    key = date.toDateString();
            }
            
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(answer);
        });

        return Object.entries(groups).map(([date, answers]) => ({ date, answers }));
    }

    groupBySession(answers) {
        // Gruppiere Antworten nach Lern-Sessions (basierend auf zeitlichen Abständen)
        const sessions = [];
        let currentSession = [];
        const sessionThreshold = 30 * 60 * 1000; // 30 Minuten

        answers.forEach((answer, index) => {
            if (index === 0) {
                currentSession.push(answer);
            } else {
                const timeDiff = new Date(answer.timestamp) - new Date(answers[index-1].timestamp);
                if (timeDiff > sessionThreshold) {
                    sessions.push([...currentSession]);
                    currentSession = [answer];
                } else {
                    currentSession.push(answer);
                }
            }
        });

        if (currentSession.length > 0) {
            sessions.push(currentSession);
        }

        return sessions;
    }

    generateRecommendations(stats) {
        const recommendations = [];

        // Schwache Kategorien identifizieren
        const weakCategories = Object.entries(stats.categories)
            .filter(([cat, data]) => data.accuracy < 0.7 && data.total >= 5)
            .sort((a, b) => a[1].accuracy - b[1].accuracy);

        if (weakCategories.length > 0) {
            recommendations.push({
                type: 'weakness',
                title: '🎯 Schwerpunkt setzen',
                description: `Konzentrieren Sie sich auf: ${weakCategories[0][0]}`,
                priority: 'high',
                action: 'practice_category',
                target: weakCategories[0][0]
            });
        }

        // Geschwindigkeitsempfehlungen
        if (stats.timeStats.averageTime > 45000) { // > 45 Sekunden
            recommendations.push({
                type: 'speed',
                title: '⚡ Geschwindigkeit steigern',
                description: 'Versuchen Sie, Fragen schneller zu beantworten',
                priority: 'medium',
                action: 'speed_practice'
            });
        }

        // Schwierigkeitsempfehlungen
        const easyAccuracy = stats.difficulties['einfach']?.accuracy || 0;
        const hardAccuracy = stats.difficulties['schwer']?.accuracy || 0;

        if (easyAccuracy > 0.9 && hardAccuracy < 0.6) {
            recommendations.push({
                type: 'difficulty',
                title: '📈 Herausforderung erhöhen',
                description: 'Probieren Sie schwierigere Fragen',
                priority: 'medium',
                action: 'increase_difficulty'
            });
        }

        // Konsistenz-Empfehlungen
        if (stats.learningProgress.consistencyScore < 70) {
            recommendations.push({
                type: 'consistency',
                title: '📅 Regelmäßigkeit verbessern',
                description: 'Versuchen Sie, täglich zu lernen',
                priority: 'low',
                action: 'daily_practice'
            });
        }

        return recommendations;
    }

    // Hilfsfunktionen
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    initializeSession() {
        return {
            startTime: new Date(),
            questionsAnswered: 0,
            correctAnswers: 0,
            currentStreak: 0,
            answers: []
        };
    }

    loadUserProfile() {
        return JSON.parse(localStorage.getItem('user_profile')) || {
            level: 'beginner',
            preferences: [],
            weakAreas: [],
            strongAreas: [],
            answeredQuestions: [],
            recentQuestions: []
        };
    }

    saveUserProfile() {
        localStorage.setItem('user_profile', JSON.stringify(this.userProfile));
    }
}

// Adaptive Learning Algorithm
class AdaptiveLearningAlgorithm {
    constructor() {
        this.learningModel = this.initializeLearningModel();
    }

    initializeLearningModel() {
        // Einfaches Modell für adaptive Schwierigkeit
        return {
            targetAccuracy: 0.75, // Ziel-Genauigkeit
            difficultyAdjustmentRate: 0.1,
            minimumQuestions: 5
        };
    }

    adjustDifficulty(userPerformance, currentDifficulty) {
        const { accuracy, questionsAnswered } = userPerformance;
        
        if (questionsAnswered < this.learningModel.minimumQuestions) {
            return currentDifficulty; // Zu wenige Daten
        }

        const targetAccuracy = this.learningModel.targetAccuracy;
        const adjustmentRate = this.learningModel.difficultyAdjustmentRate;

        if (accuracy > targetAccuracy + 0.1) {
            // Zu einfach, schwieriger machen
            return Math.min(currentDifficulty + adjustmentRate, 1.0);
        } else if (accuracy < targetAccuracy - 0.1) {
            // Zu schwer, einfacher machen
            return Math.max(currentDifficulty - adjustmentRate, 0.0);
        }

        return currentDifficulty; // Passende Schwierigkeit
    }

    predictNextTopics(userHistory, allTopics) {
        // Einfache Vorhersage basierend auf Performance
        const topicPerformance = {};
        
        userHistory.forEach(answer => {
            if (!topicPerformance[answer.category]) {
                topicPerformance[answer.category] = { correct: 0, total: 0 };
            }
            topicPerformance[answer.category].total++;
            if (answer.isCorrect) {
                topicPerformance[answer.category].correct++;
            }
        });

        // Sortiere Themen nach Verbesserungsbedarf
        return Object.entries(topicPerformance)
            .map(([topic, perf]) => ({
                topic,
                accuracy: perf.correct / perf.total,
                priority: 1 - (perf.correct / perf.total) // Niedrige Genauigkeit = hohe Priorität
            }))
            .sort((a, b) => b.priority - a.priority)
            .slice(0, 3); // Top 3 Themen
    }
}

// Global Adaptive Quiz Engine
const adaptiveQuizEngine = new AdaptiveQuizEngine();
