// Hauptintegrations-Script für das KI-Learning System
class LearningPlatform {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.userProfile = this.loadUserProfile();
        this.sessionData = this.initializeSession();
        this.aiChatOpen = false;
        this.achievements = [];
        this.currentQuiz = null;
        
        this.initializePlatform();
    }

    async initializePlatform() {
        console.log('🚀 Initializing Enhanced Learning Platform...');
        
        // Theme anwenden
        this.applyTheme(this.currentTheme);
        
        // UI-Elemente erstellen
        this.createUIElements();
        
        // Event Listeners hinzufügen
        this.setupEventListeners();
        
        // KI-System initialisieren
        if (typeof aiService !== 'undefined') {
            await aiService.initializeAI();
        }
        
        // Gamification initialisieren
        if (typeof gamificationEngine !== 'undefined') {
            await this.initializeGamification();
        }
        
        // Adaptive Quiz Engine starten
        if (typeof adaptiveQuizEngine !== 'undefined') {
            this.setupAdaptiveQuiz();
        }
        
        // Welcome Message anzeigen
        this.showWelcomeMessage();
        
        console.log('✅ Platform initialized successfully!');
    }

    createUIElements() {
        // Theme Toggle Button
        this.createThemeToggle();
        
        // AI Chat Interface
        this.createAIChatInterface();
        
        // Enhanced Navigation
        this.enhanceNavigation();
        
        // Progress Dashboard
        this.createProgressDashboard();
    }

    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = this.getThemeIcon();
        themeToggle.title = 'Theme wechseln';
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        document.body.appendChild(themeToggle);
    }

    createAIChatInterface() {
        // Chat Toggle Button
        const chatToggle = document.createElement('button');
        chatToggle.className = 'ai-chat-toggle';
        chatToggle.innerHTML = '🤖';
        chatToggle.title = 'KI-Tutor öffnen';
        chatToggle.addEventListener('click', () => this.toggleAIChat());
        
        // Chat Container
        const chatContainer = document.createElement('div');
        chatContainer.className = 'ai-chat-container';
        chatContainer.innerHTML = `
            <div class="ai-chat-header">
                <h3>🤖 KI-Tutor</h3>
                <button class="ai-chat-close">×</button>
            </div>
            <div class="ai-chat-messages" id="ai-chat-messages">
                <div class="ai-message">
                    Hallo! Ich bin Ihr persönlicher KI-Tutor. Wie kann ich Ihnen beim Lernen helfen?
                </div>
            </div>
            <div class="ai-chat-input">
                <input type="text" id="ai-chat-input" placeholder="Stellen Sie eine Frage..." maxlength="500">
                <button id="ai-chat-send">📤</button>
            </div>
        `;
        
        document.body.appendChild(chatToggle);
        document.body.appendChild(chatContainer);
        
        // Event Listeners für Chat
        chatContainer.querySelector('.ai-chat-close').addEventListener('click', () => this.toggleAIChat());
        chatContainer.querySelector('#ai-chat-send').addEventListener('click', () => this.sendAIMessage());
        chatContainer.querySelector('#ai-chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendAIMessage();
        });
    }

    enhanceNavigation() {
        // Füge erweiterte Navigation hinzu
        const navContainer = document.querySelector('.nav-container') || document.querySelector('nav');
        if (navContainer) {
            const enhancedNav = document.createElement('div');
            enhancedNav.className = 'enhanced-nav';
            enhancedNav.innerHTML = `
                <div class="nav-stats">
                    <div class="nav-level">Level ${gamificationEngine?.getCurrentLevel() || 1}</div>
                    <div class="nav-xp">${gamificationEngine?.userProgress?.totalXP || 0} XP</div>
                    <div class="nav-streak">🔥 ${gamificationEngine?.userProgress?.currentStreak || 0}</div>
                </div>
                <button class="nav-achievements" onclick="platform.showAchievements()">
                    🏆 Erfolge
                </button>
                <button class="nav-leaderboard" onclick="platform.showLeaderboard()">
                    📊 Rangliste
                </button>
                <button class="nav-ai-tutor" onclick="platform.toggleAIChat()">
                    🤖 KI-Tutor
                </button>
            `;
            navContainer.appendChild(enhancedNav);
        }
    }

    createProgressDashboard() {
        // Progress Dashboard Button hinzufügen
        const dashboardBtn = document.createElement('button');
        dashboardBtn.className = 'dashboard-toggle';
        dashboardBtn.innerHTML = '📊';
        dashboardBtn.title = 'Dashboard anzeigen';
        dashboardBtn.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: var(--shadow-medium);
            z-index: 999;
        `;
        dashboardBtn.addEventListener('click', () => this.showProgressDashboard());
        
        document.body.appendChild(dashboardBtn);
    }

    setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 't': // Ctrl+T für Theme Toggle
                        e.preventDefault();
                        this.toggleTheme();
                        break;
                    case 'h': // Ctrl+H für Help/AI Chat
                        e.preventDefault();
                        this.toggleAIChat();
                        break;
                    case 'd': // Ctrl+D für Dashboard
                        e.preventDefault();
                        this.showProgressDashboard();
                        break;
                }
            }
        });

        // Erweiterte Quiz-Integration
        this.enhanceQuizExperience();
        
        // Performance Monitoring
        this.setupPerformanceMonitoring();
    }

    enhanceQuizExperience() {
        // Intercepte Quiz-Antworten für erweiterte Funktionalität
        const originalAnswerFunction = window.answerQuestion;
        
        window.answerQuestion = (questionId, selectedAnswer) => {
            const startTime = performance.now();
            
            // Original Funktion ausführen
            if (originalAnswerFunction) {
                originalAnswerFunction(questionId, selectedAnswer);
            }
            
            // Erweiterte Verarbeitung
            this.processQuizAnswer(questionId, selectedAnswer, startTime);
        };
    }

    async processQuizAnswer(questionId, selectedAnswer, startTime) {
        const endTime = performance.now();
        const timeSpent = endTime - startTime;
        
        // Frage-Daten abrufen
        const question = this.findQuestionById(questionId);
        if (!question) return;
        
        const isCorrect = selectedAnswer === question.correct;
        
        // Antwort-Objekt erstellen
        const answerData = {
            questionId,
            selectedAnswer,
            correctAnswer: question.correct,
            isCorrect,
            timeSpent,
            timestamp: new Date(),
            category: question.category,
            difficulty: question.difficulty
        };
        
        // Session-Daten aktualisieren
        this.sessionData.answers.push(answerData);
        this.sessionData.questionsAnswered++;
        if (isCorrect) this.sessionData.correctAnswers++;
        
        // Gamification aktualisieren
        if (typeof gamificationEngine !== 'undefined') {
            const newAchievements = gamificationEngine.checkAchievements(answerData);
            gamificationEngine.updateStreak(isCorrect);
            
            // Neue Achievements anzeigen
            newAchievements.forEach(achievement => {
                setTimeout(() => this.showAchievementNotification(achievement), 500);
            });
        }
        
        // KI-Analyse (wenn verfügbar)
        if (typeof aiService !== 'undefined') {
            try {
                const analysis = await aiService.analyzeQuestion(question, selectedAnswer, question.correct);
                this.showAIAnalysis(analysis);
            } catch (error) {
                console.log('AI analysis not available:', error.message);
            }
        }
        
        // Adaptive Schwierigkeit anpassen
        if (typeof adaptiveQuizEngine !== 'undefined') {
            this.updateAdaptiveDifficulty();
        }
        
        // Daily Challenges aktualisieren
        this.updateDailyChallenges(answerData);
        
        // Session speichern
        this.saveSessionData();
    }

    showAIAnalysis(analysis) {
        if (!analysis || !analysis.personalizedHint) return;
        
        const analysisCard = document.createElement('div');
        analysisCard.className = 'ai-analysis-card';
        analysisCard.innerHTML = `
            <div class="ai-analysis-content">
                <h4>🤖 KI-Analyse</h4>
                <p><strong>Erklärung:</strong> ${analysis.explanation}</p>
                <p><strong>Persönlicher Tipp:</strong> ${analysis.personalizedHint}</p>
                ${analysis.nextSteps ? `
                    <div class="next-steps">
                        <strong>Nächste Schritte:</strong>
                        <ul>
                            ${analysis.nextSteps.map(step => `<li>${step}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <button onclick="this.parentElement.parentElement.remove()" class="close-analysis">
                    Verstanden
                </button>
            </div>
        `;
        
        analysisCard.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bg-primary);
            padding: 24px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-heavy);
            z-index: 9000;
            max-width: 500px;
            width: 90%;
            border: 2px solid var(--info-color);
        `;
        
        document.body.appendChild(analysisCard);
        
        // Automatisch nach 15 Sekunden entfernen
        setTimeout(() => {
            if (document.body.contains(analysisCard)) {
                analysisCard.remove();
            }
        }, 15000);
    }

    updateDailyChallenges(answerData) {
        if (typeof gamificationEngine === 'undefined') return;
        
        // Streak Challenge
        if (answerData.isCorrect) {
            gamificationEngine.updateDailyChallenge('daily_streak', 1);
        }
        
        // Speed Challenge
        if (answerData.timeSpent < 10000) { // unter 10 Sekunden
            gamificationEngine.updateDailyChallenge('daily_speed', 1);
        }
        
        // Category Challenge
        const categoryAccuracy = this.calculateCategoryAccuracy(answerData.category);
        if (categoryAccuracy >= 0.8) {
            gamificationEngine.updateDailyChallenge('daily_category', categoryAccuracy * 100);
        }
    }

    calculateCategoryAccuracy(category) {
        const categoryAnswers = this.sessionData.answers.filter(a => a.category === category);
        if (categoryAnswers.length === 0) return 0;
        
        const correctAnswers = categoryAnswers.filter(a => a.isCorrect).length;
        return correctAnswers / categoryAnswers.length;
    }

    async sendAIMessage() {
        const input = document.getElementById('ai-chat-input');
        const messagesContainer = document.getElementById('ai-chat-messages');
        const message = input.value.trim();
        
        if (!message) return;
        
        // User Message anzeigen
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);
        
        // Input leeren
        input.value = '';
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Typing Indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'ai-message typing-indicator';
        typingIndicator.innerHTML = '🤖 Denkt nach...';
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        try {
            // KI-Antwort abrufen
            let response;
            if (typeof aiService !== 'undefined') {
                const context = {
                    currentTopic: this.getCurrentTopic(),
                    userLevel: this.getUserLevel(),
                    recentQuestions: this.getRecentQuestions()
                };
                response = await aiService.chatWithTutor(message, context);
                
                // AI Challenge aktualisieren
                if (typeof gamificationEngine !== 'undefined') {
                    gamificationEngine.updateDailyChallenge('daily_ai', 1);
                }
            } else {
                response = this.getLocalAIResponse(message);
            }
            
            // Typing Indicator entfernen
            typingIndicator.remove();
            
            // AI Response anzeigen
            const aiMessage = document.createElement('div');
            aiMessage.className = 'ai-message';
            aiMessage.textContent = response;
            messagesContainer.appendChild(aiMessage);
            
        } catch (error) {
            console.error('AI Chat Error:', error);
            typingIndicator.remove();
            
            const errorMessage = document.createElement('div');
            errorMessage.className = 'ai-message error';
            errorMessage.textContent = 'Entschuldigung, ich kann gerade nicht antworten. Versuchen Sie es später nochmal.';
            messagesContainer.appendChild(errorMessage);
        }
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getLocalAIResponse(message) {
        const responses = {
            'hallo': 'Hallo! Wie kann ich Ihnen heute beim Lernen helfen?',
            'hilfe': 'Gerne helfe ich Ihnen! Sie können mich zu IT-Sicherheit, Netzwerken oder Datenschutz fragen.',
            'schwierig': 'Das verstehe ich. Lassen Sie uns das Schritt für Schritt durchgehen. Was genau bereitet Ihnen Schwierigkeiten?',
            'danke': 'Gerne geschehen! Weiter so beim Lernen!',
            'tschüss': 'Auf Wiedersehen! Viel Erfolg beim Lernen!',
            'quiz': 'Möchten Sie ein Quiz starten? Ich kann Ihnen dabei helfen, das richtige Schwierigkeitslevel zu finden.',
            'netzwerk': 'Netzwerke sind fundamental in der IT. Haben Sie spezielle Fragen zu TCP/IP, Routing oder Switches?',
            'sicherheit': 'IT-Sicherheit ist sehr wichtig! Interessiert Sie Verschlüsselung, Firewalls oder Malware-Schutz?',
            'passwort': 'Sichere Passwörter sollten mindestens 12 Zeichen haben und Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen enthalten.',
            'default': 'Das ist eine interessante Frage! Können Sie mir mehr Details geben, damit ich Ihnen besser helfen kann?'
        };
        
        const keywords = message.toLowerCase();
        for (const [key, response] of Object.entries(responses)) {
            if (keywords.includes(key)) {
                return response;
            }
        }
        return responses.default;
    }

    toggleTheme() {
        const themes = ['light', 'dark', 'high-contrast'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        
        this.currentTheme = themes[nextIndex];
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        // Theme Toggle Icon aktualisieren
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = this.getThemeIcon();
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    getThemeIcon() {
        const icons = {
            'light': '🌙',
            'dark': '🌞',
            'high-contrast': '⚫'
        };
        return icons[this.currentTheme] || '🌙';
    }

    toggleAIChat() {
        const chatContainer = document.querySelector('.ai-chat-container');
        if (chatContainer) {
            this.aiChatOpen = !this.aiChatOpen;
            if (this.aiChatOpen) {
                chatContainer.classList.add('open');
            } else {
                chatContainer.classList.remove('open');
            }
        }
    }

    showProgressDashboard() {
        if (typeof gamificationEngine === 'undefined') {
            alert('Gamification System nicht verfügbar');
            return;
        }
        
        const dashboardHTML = gamificationEngine.renderProgressDashboard();
        this.showModal('📊 Ihr Fortschritt', dashboardHTML);
    }

    showAchievements() {
        if (typeof gamificationEngine === 'undefined') {
            alert('Achievement System nicht verfügbar');
            return;
        }
        
        const achievementsHTML = gamificationEngine.renderAchievementsPage();
        this.showModal('🏆 Ihre Erfolge', achievementsHTML);
    }

    showLeaderboard() {
        if (typeof gamificationEngine === 'undefined') {
            alert('Leaderboard nicht verfügbar');
            return;
        }
        
        const leaderboard = gamificationEngine.getLeaderboard();
        const leaderboardHTML = `
            <div class="leaderboard">
                <h3>🏆 Top 10 Lernende</h3>
                ${leaderboard.map((entry, index) => `
                    <div class="leaderboard-entry">
                        <span class="rank">#${index + 1}</span>
                        <span class="name">${entry.name}</span>
                        <span class="score">${entry.score} Punkte</span>
                        <span class="level">Level ${entry.level}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        this.showModal('📊 Rangliste', leaderboardHTML);
    }

    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'enhanced-modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close" onclick="this.closest('.enhanced-modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(modal);
    }

    showWelcomeMessage() {
        if (localStorage.getItem('welcome_shown') === 'true') return;
        
        const welcomeHTML = `
            <div class="welcome-content">
                <h2>🎉 Willkommen zur Enhanced Learning Platform!</h2>
                <p>Entdecken Sie die neuen KI-gestützten Lernfunktionen:</p>
                <ul>
                    <li>🤖 <strong>KI-Tutor:</strong> Stellen Sie jederzeit Fragen</li>
                    <li>🏆 <strong>Achievements:</strong> Sammeln Sie Erfolge und XP</li>
                    <li>📊 <strong>Adaptives Lernen:</strong> Personalisierte Schwierigkeit</li>
                    <li>🎯 <strong>Tägliche Challenges:</strong> Neue Ziele jeden Tag</li>
                    <li>🌙 <strong>Themes:</strong> Dark Mode und High Contrast</li>
                </ul>
                <p><strong>Tastenkürzel:</strong></p>
                <ul>
                    <li>Ctrl+T: Theme wechseln</li>
                    <li>Ctrl+H: KI-Tutor öffnen</li>
                    <li>Ctrl+D: Dashboard anzeigen</li>
                </ul>
                <button onclick="this.closest('.enhanced-modal').remove(); localStorage.setItem('welcome_shown', 'true');" class="btn-primary">
                    Los geht's! 🚀
                </button>
            </div>
        `;
        
        setTimeout(() => {
            this.showModal('🎓 Enhanced Learning Platform', welcomeHTML);
        }, 1000);
    }

    // Hilfsfunktionen
    findQuestionById(questionId) {
        // Suche in verschiedenen Quiz-Datenbanken
        const databases = [
            window.extendedQuizDatabase || {},
            window.comprehensiveQuizzes || {},
            window.cyberSecurityQuestions || {}
        ];
        
        for (const db of databases) {
            for (const category of Object.values(db)) {
                if (Array.isArray(category)) {
                    const question = category.find(q => q.id === questionId);
                    if (question) return question;
                }
            }
        }
        return null;
    }

    getCurrentTopic() {
        const activeTab = document.querySelector('.tab-button.active');
        return activeTab ? activeTab.textContent.trim() : 'IT-Sicherheit';
    }

    getUserLevel() {
        const stats = this.calculateUserStats();
        const accuracy = stats.overall.accuracy;
        
        if (accuracy > 0.9) return 'expert';
        if (accuracy > 0.8) return 'advanced';
        if (accuracy > 0.7) return 'intermediate';
        return 'beginner';
    }

    getRecentQuestions() {
        return this.sessionData.answers.slice(-5).map(a => a.questionId);
    }

    calculateUserStats() {
        const answers = this.sessionData.answers;
        if (answers.length === 0) {
            return { overall: { correct: 0, total: 0, accuracy: 0 } };
        }
        
        const correct = answers.filter(a => a.isCorrect).length;
        return {
            overall: {
                correct,
                total: answers.length,
                accuracy: correct / answers.length
            }
        };
    }

    initializeSession() {
        return {
            startTime: new Date(),
            answers: [],
            questionsAnswered: 0,
            correctAnswers: 0
        };
    }

    loadUserProfile() {
        return JSON.parse(localStorage.getItem('enhanced_user_profile')) || {
            name: '',
            level: 'beginner',
            preferences: [],
            totalPlayTime: 0,
            lastLoginDate: null
        };
    }

    saveSessionData() {
        localStorage.setItem('current_session', JSON.stringify(this.sessionData));
        
        // User Profile aktualisieren
        this.userProfile.lastLoginDate = new Date();
        localStorage.setItem('enhanced_user_profile', JSON.stringify(this.userProfile));
    }

    setupPerformanceMonitoring() {
        // Performance-Metriken sammeln
        setInterval(() => {
            const stats = {
                timestamp: new Date(),
                questionsAnswered: this.sessionData.questionsAnswered,
                accuracy: this.calculateUserStats().overall.accuracy,
                sessionTime: new Date() - this.sessionData.startTime
            };
            
            // Lokale Performance-Daten speichern
            const performanceData = JSON.parse(localStorage.getItem('performance_data')) || [];
            performanceData.push(stats);
            
            // Nur letzte 100 Einträge behalten
            if (performanceData.length > 100) {
                performanceData.splice(0, performanceData.length - 100);
            }
            
            localStorage.setItem('performance_data', JSON.stringify(performanceData));
        }, 60000); // Alle 60 Sekunden
    }

    setupAdaptiveQuiz() {
        if (typeof adaptiveQuizEngine === 'undefined') return;
        
        // Überschreibe die Standard-Quiz-Funktionen
        const platform = this;
        
        window.getNextAdaptiveQuestion = function() {
            const userStats = platform.calculateUserStats();
            return adaptiveQuizEngine.selectNextQuestion(userStats);
        };
        
        window.generateDetailedReport = function() {
            const detailedStats = adaptiveQuizEngine.generateDetailedStats(platform.sessionData.answers);
            platform.showDetailedReport(detailedStats);
        };
    }

    showDetailedReport(stats) {
        const reportHTML = `
            <div class="detailed-report">
                <h3>📊 Detaillierte Lernanalyse</h3>
                
                <div class="report-section">
                    <h4>Gesamtleistung</h4>
                    <p>Genauigkeit: ${(stats.overall.accuracy * 100).toFixed(1)}%</p>
                    <p>Fragen beantwortet: ${stats.overall.total}</p>
                    <p>Durchschnittliche Zeit: ${(stats.timeStats.averageTime / 1000).toFixed(1)}s</p>
                </div>
                
                <div class="report-section">
                    <h4>Kategorien-Performance</h4>
                    ${Object.entries(stats.categories).map(([cat, data]) => `
                        <div class="category-stat">
                            <strong>${cat}:</strong> ${(data.accuracy * 100).toFixed(1)}% (${data.correct}/${data.total})
                        </div>
                    `).join('')}
                </div>
                
                <div class="report-section">
                    <h4>Empfehlungen</h4>
                    ${stats.recommendations.map(rec => `
                        <div class="recommendation ${rec.priority}">
                            <strong>${rec.title}</strong><br>
                            ${rec.description}
                        </div>
                    `).join('')}
                </div>
                
                <div class="report-section">
                    <h4>Lernfortschritt</h4>
                    <p>Verbesserungsrate: ${stats.learningProgress.improvementRate.toFixed(1)}%</p>
                    <p>Konsistenz-Score: ${stats.learningProgress.consistencyScore.toFixed(1)}%</p>
                    <p>Aktuelle Streak: ${stats.learningProgress.streakInfo.current}</p>
                    <p>Beste Streak: ${stats.learningProgress.streakInfo.max}</p>
                </div>
            </div>
        `;
        
        this.showModal('📈 Lernanalyse', reportHTML);
    }

    async initializeGamification() {
        if (typeof gamificationEngine === 'undefined') return;
        
        // Daily Challenges generieren
        gamificationEngine.generateDailyChallenges();
        
        // Achievements laden
        this.achievements = Object.values(gamificationEngine.achievements);
        
        // Level-System initialisieren
        const currentLevel = gamificationEngine.getCurrentLevel();
        console.log(`🎮 Gamification initialized - Level ${currentLevel}`);
    }

    showAchievementNotification(achievement) {
        // Benachrichtigung für neue Achievements
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <h3>🏆 Achievement freigeschaltet!</h3>
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                    <div class="xp-reward">+${achievement.xp} XP</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Automatisch nach 5 Sekunden entfernen
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    updateAdaptiveDifficulty() {
        if (typeof adaptiveQuizEngine === 'undefined') return;
        
        const userStats = this.calculateUserStats();
        const currentDifficulty = 0.5; // Mittlere Schwierigkeit als Standard
        
        const newDifficulty = adaptiveQuizEngine.adaptiveAlgorithm.adjustDifficulty(
            {
                accuracy: userStats.overall.accuracy,
                questionsAnswered: userStats.overall.total
            },
            currentDifficulty
        );
        
        // Schwierigkeit in localStorage speichern
        localStorage.setItem('adaptive_difficulty', newDifficulty.toString());
    }
}

// Platform initialisieren, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    // Global Platform Instance
    window.platform = new LearningPlatform();
});

// Service Worker registrieren für Offline-Funktionalität
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}
