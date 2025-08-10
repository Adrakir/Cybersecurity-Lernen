// KI-Enhanced Learning System mit OpenAI Integration
// Unterstützt sowohl lokale als auch API-basierte KI-Modelle

class AILearningService {
    constructor() {
        this.apiKey = localStorage.getItem('openai_api_key') || '';
        this.useLocalModel = !this.apiKey;
        this.baseURL = 'https://api.openai.com/v1';
        this.model = 'gpt-3.5-turbo'; // Kostenlos mit Rate Limits
        this.learningProfile = this.loadLearningProfile();
        this.conversationHistory = [];
    }

    // KI-Konfiguration
    async initializeAI() {
        if (!this.apiKey && !this.useLocalModel) {
            await this.promptForAPIKey();
        }
        
        console.log('🤖 AI Learning System initialized');
        this.analyzeUserProfile();
    }

    async promptForAPIKey() {
        const modal = document.createElement('div');
        modal.className = 'ai-setup-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>🤖 KI-Assistent Setup</h2>
                <p>Für personalisierte Lernhilfe können Sie einen OpenAI API-Key eingeben:</p>
                
                <div class="setup-options">
                    <div class="option-card">
                        <h3>🆓 Kostenlose Option</h3>
                        <p>Lokale KI-Funktionen nutzen</p>
                        <button onclick="aiService.setupLocalMode()" class="btn-local">
                            Lokal verwenden
                        </button>
                    </div>
                    
                    <div class="option-card">
                        <h3>🚀 Premium Option</h3>
                        <input type="password" id="api-key-input" placeholder="OpenAI API Key (optional)">
                        <small>Kosten: ~$0.002 pro Anfrage</small>
                        <button onclick="aiService.setupAPIMode()" class="btn-api">
                            API verwenden
                        </button>
                    </div>
                </div>
                
                <button onclick="aiService.closeSetup()" class="btn-skip">
                    Später einrichten
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    setupLocalMode() {
        this.useLocalModel = true;
        this.closeSetup();
        this.initializeLocalAI();
    }

    setupAPIMode() {
        const apiKey = document.getElementById('api-key-input').value;
        if (apiKey) {
            this.apiKey = apiKey;
            localStorage.setItem('openai_api_key', apiKey);
            this.useLocalModel = false;
        }
        this.closeSetup();
    }

    closeSetup() {
        const modal = document.querySelector('.ai-setup-modal');
        if (modal) modal.remove();
    }

    // Lokale KI-Implementierung (kostenlos)
    initializeLocalAI() {
        this.localKnowledgeBase = {
            'netzwerk': {
                concepts: ['TCP/IP', 'OSI-Modell', 'Router', 'Switch', 'VLAN'],
                explanations: {
                    'TCP/IP': 'Das TCP/IP-Protokoll ist das Fundament des Internets...',
                    'OSI-Modell': 'Das OSI-Modell strukturiert Netzwerkkommunikation in 7 Schichten...'
                }
            },
            'sicherheit': {
                concepts: ['Verschlüsselung', 'Firewall', 'VPN', 'IDS/IPS', 'Zero Trust'],
                explanations: {
                    'Verschlüsselung': 'Verschlüsselung schützt Daten durch mathematische Transformationen...',
                    'Firewall': 'Eine Firewall kontrolliert Netzwerkverkehr basierend auf Regeln...'
                }
            }
        };
    }

    // Intelligente Fragen-Analyse
    async analyzeQuestion(question, userAnswer, correctAnswer) {
        if (this.useLocalModel) {
            return this.localAnalyzeQuestion(question, userAnswer, correctAnswer);
        } else {
            return this.apiAnalyzeQuestion(question, userAnswer, correctAnswer);
        }
    }

    localAnalyzeQuestion(question, userAnswer, correctAnswer) {
        const isCorrect = userAnswer === correctAnswer;
        const category = this.extractCategory(question.text);
        
        let explanation = question.explanation || 'Grundlegende Erklärung verfügbar.';
        let personalizedHint = this.generateLocalHint(question, isCorrect);
        let nextSteps = this.recommendNextSteps(category, isCorrect);

        return {
            isCorrect,
            explanation,
            personalizedHint,
            nextSteps,
            confidence: isCorrect ? 'hoch' : 'niedrig',
            learningPath: this.generateLearningPath(category)
        };
    }

    async apiAnalyzeQuestion(question, userAnswer, correctAnswer) {
        const prompt = `
        Als IT-Sicherheit Tutor analysiere diese Frage:
        
        Frage: ${question.text}
        Nutzer-Antwort: ${userAnswer}
        Korrekte Antwort: ${correctAnswer}
        Kategorie: ${question.category}
        
        Erstelle eine detaillierte Analyse mit:
        1. Erklärung warum die Antwort richtig/falsch ist
        2. Personalisierter Lernhinweis
        3. Empfohlene nächste Schritte
        4. Verwandte Konzepte zum Vertiefen
        
        Antwort als JSON:
        {
            "explanation": "...",
            "personalizedHint": "...",
            "nextSteps": [...],
            "relatedConcepts": [...],
            "difficulty": "...",
            "confidence": "..."
        }
        `;

        try {
            const response = await fetch(`${this.baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [
                        { role: 'system', content: 'Du bist ein erfahrener IT-Sicherheit Tutor.' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            return JSON.parse(data.choices[0].message.content);
        } catch (error) {
            console.error('API Error:', error);
            return this.localAnalyzeQuestion(question, userAnswer, correctAnswer);
        }
    }

    // Personalisierte Lernpfade
    async generateLearningPath(userProfile, weakAreas) {
        if (this.useLocalModel) {
            return this.localGenerateLearningPath(userProfile, weakAreas);
        }

        const prompt = `
        Erstelle einen personalisierten Lernpfad für IT-Sicherheit:
        
        Nutzer-Profil:
        - Erfahrungslevel: ${userProfile.level}
        - Schwache Bereiche: ${weakAreas.join(', ')}
        - Lernziele: ${userProfile.goals?.join(', ') || 'Allgemeine IT-Sicherheit'}
        
        Erstelle einen strukturierten 4-Wochen Lernplan mit:
        - Wöchentliche Themen
        - Empfohlene Ressourcen
        - Praktische Übungen
        - Meilensteine
        
        Als JSON Array mit Wochen-Objekten.
        `;

        try {
            const response = await this.callOpenAI(prompt, 800);
            return JSON.parse(response);
        } catch (error) {
            return this.localGenerateLearningPath(userProfile, weakAreas);
        }
    }

    localGenerateLearningPath(userProfile, weakAreas) {
        const basePath = [
            {
                week: 1,
                theme: 'Grundlagen der IT-Sicherheit',
                topics: ['CIA-Triad', 'Bedrohungslandschaft', 'Risikomanagement'],
                exercises: ['Quiz: Sicherheitsgrundlagen', 'Fallstudie: Datenschutz'],
                milestone: 'Verständnis der Sicherheitsprinzipien'
            },
            {
                week: 2,
                theme: 'Netzwerksicherheit',
                topics: ['Firewalls', 'VPN', 'Intrusion Detection'],
                exercises: ['Firewall-Konfiguration', 'VPN-Setup'],
                milestone: 'Netzwerk-Sicherheitskonzepte anwenden'
            },
            {
                week: 3,
                theme: 'Anwendungssicherheit',
                topics: ['Secure Coding', 'Penetration Testing', 'OWASP Top 10'],
                exercises: ['Code Review', 'Vulnerability Scan'],
                milestone: 'Anwendungen sicher entwickeln'
            },
            {
                week: 4,
                theme: 'Incident Response & Compliance',
                topics: ['GDPR', 'Incident Handling', 'Business Continuity'],
                exercises: ['Incident Simulation', 'Compliance Audit'],
                milestone: 'Sicherheitsvorfälle professionell behandeln'
            }
        ];

        // Anpassung basierend auf schwachen Bereichen
        if (weakAreas.includes('Netzwerk')) {
            basePath[1].topics.push('TCP/IP Deep Dive', 'DNS Security');
        }
        if (weakAreas.includes('Verschlüsselung')) {
            basePath[0].topics.push('Kryptographie-Grundlagen');
        }

        return basePath;
    }

    // Intelligenter Tutor-Chat
    async chatWithTutor(userMessage, context = {}) {
        const conversationContext = this.conversationHistory.slice(-5); // Letzte 5 Nachrichten
        
        if (this.useLocalModel) {
            return this.localTutorResponse(userMessage, context);
        }

        const prompt = `
        Du bist ein erfahrener IT-Sicherheit Tutor. Der Nutzer stellt eine Frage im Kontext von:
        - Aktuelles Thema: ${context.currentTopic || 'IT-Sicherheit allgemein'}
        - Schwierigkeitslevel: ${context.userLevel || 'Anfänger'}
        - Letzte Fragen: ${context.recentQuestions?.join(', ') || 'Keine'}
        
        Nutzer-Frage: "${userMessage}"
        
        Antworte hilfreich, ermutigend und didaktisch wertvoll. Verwende Beispiele und erkläre komplexe Konzepte einfach.
        `;

        try {
            const response = await this.callOpenAI(prompt, 300);
            this.conversationHistory.push({ user: userMessage, assistant: response });
            return response;
        } catch (error) {
            return this.localTutorResponse(userMessage, context);
        }
    }

    localTutorResponse(userMessage, context) {
        const responses = {
            'firewall': 'Eine Firewall ist wie ein Türsteher für Ihr Netzwerk. Sie entscheidet, welcher Datenverkehr passieren darf und welcher blockiert wird.',
            'verschlüsselung': 'Verschlüsselung wandelt lesbare Daten in unverständlichen Code um. Nur mit dem richtigen Schlüssel können die Daten wieder gelesen werden.',
            'phishing': 'Phishing-Angriffe täuschen vor, von vertrauenswürdigen Quellen zu stammen. Achten Sie immer auf verdächtige E-Mails und Links.',
            'default': 'Das ist eine interessante Frage! Können Sie mir mehr Details geben, damit ich Ihnen besser helfen kann?'
        };

        const keywords = userMessage.toLowerCase();
        for (const [key, response] of Object.entries(responses)) {
            if (keywords.includes(key)) {
                return response;
            }
        }
        return responses.default;
    }

    // Adaptive Schwierigkeitsanpassung
    adjustDifficulty(userPerformance, currentDifficulty) {
        const accuracy = userPerformance.correctAnswers / userPerformance.totalAnswers;
        const averageTime = userPerformance.averageTimePerQuestion;

        if (accuracy > 0.8 && averageTime < 30) {
            return Math.min(currentDifficulty + 1, 5); // Schwieriger
        } else if (accuracy < 0.6) {
            return Math.max(currentDifficulty - 1, 1); // Einfacher
        }
        return currentDifficulty; // Gleich bleiben
    }

    // Lernfortschritt-Analyse
    async analyzeLearningProgress(userStats) {
        const analysis = {
            strongAreas: [],
            weakAreas: [],
            recommendations: [],
            nextChallenges: [],
            motivationalMessage: ''
        };

        // Bereiche nach Performance analysieren
        for (const [category, stats] of Object.entries(userStats.categories)) {
            const accuracy = stats.correct / stats.total;
            if (accuracy > 0.8) {
                analysis.strongAreas.push(category);
            } else if (accuracy < 0.6) {
                analysis.weakAreas.push(category);
            }
        }

        // KI-basierte Empfehlungen
        if (!this.useLocalModel) {
            const aiRecommendations = await this.getAIRecommendations(userStats);
            analysis.recommendations.push(...aiRecommendations);
        }

        // Lokale Empfehlungen
        analysis.recommendations.push(...this.getLocalRecommendations(analysis));

        // Motivationsnachricht
        analysis.motivationalMessage = this.generateMotivationalMessage(userStats);

        return analysis;
    }

    generateMotivationalMessage(userStats) {
        const totalAccuracy = userStats.overall.correct / userStats.overall.total;
        
        if (totalAccuracy > 0.9) {
            return "🏆 Ausgezeichnet! Sie sind auf dem besten Weg zum IT-Sicherheitsexperten!";
        } else if (totalAccuracy > 0.7) {
            return "👍 Sehr gut! Ihre Fortschritte sind beeindruckend. Weiter so!";
        } else if (totalAccuracy > 0.5) {
            return "📚 Sie machen gute Fortschritte! Mit etwas mehr Übung werden Sie noch besser.";
        } else {
            return "💪 Jeder Experte hat mal angefangen. Bleiben Sie dran - der Erfolg kommt!";
        }
    }

    // Hilfsfunktionen
    async callOpenAI(prompt, maxTokens = 150) {
        const response = await fetch(`${this.baseURL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: this.model,
                messages: [
                    { role: 'system', content: 'Du bist ein hilfreicher IT-Sicherheit Tutor.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: maxTokens,
                temperature: 0.7
            })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }
        return data.choices[0].message.content;
    }

    extractCategory(questionText) {
        const categoryKeywords = {
            'netzwerk': ['netzwerk', 'router', 'switch', 'tcp', 'ip', 'lan', 'wan'],
            'sicherheit': ['sicherheit', 'verschlüsselung', 'firewall', 'malware', 'virus'],
            'datenschutz': ['datenschutz', 'gdpr', 'dsgvo', 'privacy', 'compliance']
        };

        const text = questionText.toLowerCase();
        for (const [category, keywords] of Object.entries(categoryKeywords)) {
            if (keywords.some(keyword => text.includes(keyword))) {
                return category;
            }
        }
        return 'allgemein';
    }

    generateLocalHint(question, isCorrect) {
        if (isCorrect) {
            return "🎯 Perfekt! Sie haben das Konzept verstanden.";
        }

        const category = this.extractCategory(question.text);
        const hints = {
            'netzwerk': 'Tipp: Denken Sie an die OSI-Schichten und wie Daten übertragen werden.',
            'sicherheit': 'Tipp: Bedenken Sie die CIA-Triad: Confidentiality, Integrity, Availability.',
            'datenschutz': 'Tipp: GDPR/DSGVO Prinzipien beachten: Datenminimierung und Zweckbindung.'
        };

        return hints[category] || 'Tipp: Lesen Sie die Frage nochmal aufmerksam und denken Sie an die Grundprinzipien.';
    }

    recommendNextSteps(category, isCorrect) {
        if (isCorrect) {
            return [
                `Vertiefen Sie Ihr Wissen in ${category}`,
                'Probieren Sie schwierigere Fragen',
                'Schauen Sie sich verwandte Themen an'
            ];
        } else {
            return [
                `Wiederholen Sie die Grundlagen von ${category}`,
                'Schauen Sie sich Erklärvideos an',
                'Üben Sie mit ähnlichen Fragen'
            ];
        }
    }

    loadLearningProfile() {
        return JSON.parse(localStorage.getItem('learning_profile')) || {
            level: 'anfänger',
            preferences: [],
            goals: [],
            weakAreas: [],
            strongAreas: []
        };
    }

    saveLearningProfile() {
        localStorage.setItem('learning_profile', JSON.stringify(this.learningProfile));
    }

    getLocalRecommendations(analysis) {
        const recommendations = [];
        
        if (analysis.weakAreas.length > 0) {
            recommendations.push(`Fokussieren Sie sich auf: ${analysis.weakAreas.join(', ')}`);
            recommendations.push('Üben Sie täglich 15-20 Minuten in den schwachen Bereichen');
        }

        if (analysis.strongAreas.length > 0) {
            recommendations.push(`Nutzen Sie Ihre Stärken in: ${analysis.strongAreas.join(', ')}`);
            recommendations.push('Helfen Sie anderen Lernenden in Ihren starken Bereichen');
        }

        return recommendations;
    }
}

// Global AI Service Instance
const aiService = new AILearningService();
