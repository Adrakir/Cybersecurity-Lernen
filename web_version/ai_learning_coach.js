// AI-Powered Learning Coach für Cybersecurity Training
class AILearningCoach {
    constructor() {
        this.userProfile = this.loadUserProfile();
        this.learningPath = [];
        this.weaknessAnalysis = {};
        this.personalizedContent = [];
        this.adaptiveSettings = {
            difficultyLevel: 'intermediate',
            learningStyle: 'mixed',
            pace: 'normal'
        };
        this.initialize();
    }

    initialize() {
        this.analyzeUserBehavior();
        this.generatePersonalizedPath();
        this.setupAdaptiveDifficulty();
    }

    loadUserProfile() {
        return JSON.parse(localStorage.getItem('ai_learning_profile') || JSON.stringify({
            completedQuizzes: [],
            timeSpentPerCategory: {},
            correctAnswerRate: {},
            preferredTopics: [],
            strugglingAreas: [],
            learningSessionData: [],
            industry: 'general',
            role: 'it_professional',
            experience: 'intermediate'
        }));
    }

    analyzeUserBehavior() {
        const recentSessions = this.userProfile.learningSessionData.slice(-10);
        
        // Analyze response patterns
        this.analyzeResponsePatterns(recentSessions);
        
        // Identify struggling areas
        this.identifyWeaknesses();
        
        // Determine learning style
        this.determineLearningStyle();
        
        // Assess current skill level
        this.assessSkillLevel();
    }

    analyzeResponsePatterns(sessions) {
        const patterns = {
            quickCorrect: 0,
            slowCorrect: 0,
            quickIncorrect: 0,
            slowIncorrect: 0,
            hintsUsed: 0,
            totalQuestions: 0
        };

        sessions.forEach(session => {
            session.questions.forEach(q => {
                patterns.totalQuestions++;
                
                if (q.correct) {
                    if (q.timeSpent < 30) patterns.quickCorrect++;
                    else patterns.slowCorrect++;
                } else {
                    if (q.timeSpent < 30) patterns.quickIncorrect++;
                    else patterns.slowIncorrect++;
                }
                
                if (q.hintsUsed) patterns.hintsUsed += q.hintsUsed;
            });
        });

        this.responsePatterns = patterns;
        return patterns;
    }

    identifyWeaknesses() {
        const categoryPerformance = {};
        
        // Analyze performance by category
        Object.keys(this.userProfile.correctAnswerRate).forEach(category => {
            const rate = this.userProfile.correctAnswerRate[category];
            if (rate < 0.7) {
                categoryPerformance[category] = {
                    correctRate: rate,
                    needsImprovement: true,
                    priority: rate < 0.5 ? 'high' : 'medium'
                };
            }
        });

        this.weaknessAnalysis = categoryPerformance;
    }

    determineLearningStyle() {
        const patterns = this.responsePatterns;
        
        if (patterns.quickCorrect > patterns.slowCorrect) {
            this.adaptiveSettings.learningStyle = 'fast_paced';
            this.adaptiveSettings.pace = 'fast';
        } else if (patterns.hintsUsed / patterns.totalQuestions > 0.3) {
            this.adaptiveSettings.learningStyle = 'guided';
            this.adaptiveSettings.pace = 'slow';
        } else {
            this.adaptiveSettings.learningStyle = 'self_directed';
        }
    }

    assessSkillLevel() {
        const overallCorrectRate = this.calculateOverallCorrectRate();
        
        if (overallCorrectRate > 0.9) {
            this.adaptiveSettings.difficultyLevel = 'expert';
        } else if (overallCorrectRate > 0.7) {
            this.adaptiveSettings.difficultyLevel = 'advanced';
        } else if (overallCorrectRate > 0.5) {
            this.adaptiveSettings.difficultyLevel = 'intermediate';
        } else {
            this.adaptiveSettings.difficultyLevel = 'beginner';
        }
    }

    generatePersonalizedPath() {
        const path = [];
        
        // Address weaknesses first
        Object.keys(this.weaknessAnalysis).forEach(category => {
            const weakness = this.weaknessAnalysis[category];
            if (weakness.priority === 'high') {
                path.push({
                    type: 'remedial',
                    category: category,
                    focus: 'foundation',
                    estimatedTime: 45,
                    priority: 1
                });
            }
        });

        // Add progressive learning modules
        const skillProgression = this.getSkillProgression();
        skillProgression.forEach(skill => {
            path.push({
                type: 'progressive',
                skill: skill,
                difficulty: this.adaptiveSettings.difficultyLevel,
                estimatedTime: 30,
                priority: 2
            });
        });

        // Add practical applications
        path.push({
            type: 'practical',
            scenarios: this.generateCustomScenarios(),
            difficulty: this.adaptiveSettings.difficultyLevel,
            estimatedTime: 60,
            priority: 3
        });

        this.learningPath = path;
    }

    getSkillProgression() {
        const allSkills = [
            'password_security', 'phishing_detection', 'malware_analysis',
            'network_security', 'incident_response', 'cryptography',
            'social_engineering', 'risk_assessment', 'compliance'
        ];

        // Filter based on user's industry and role
        return allSkills.filter(skill => {
            if (this.userProfile.industry === 'healthcare' && skill === 'compliance') return true;
            if (this.userProfile.role === 'manager' && skill === 'risk_assessment') return true;
            return !this.userProfile.completedQuizzes.includes(skill);
        });
    }

    generateCustomScenarios() {
        const scenarios = [];
        
        // Industry-specific scenarios
        if (this.userProfile.industry === 'healthcare') {
            scenarios.push({
                title: "HIPAA-Verletzung durch Phishing",
                description: "Patientendaten wurden durch einen Phishing-Angriff kompromittiert",
                skills: ['phishing_detection', 'incident_response', 'compliance']
            });
        } else if (this.userProfile.industry === 'finance') {
            scenarios.push({
                title: "Banking-Trojaner-Angriff",
                description: "Finanzielle Transaktionen wurden durch Malware beeinträchtigt",
                skills: ['malware_analysis', 'network_security', 'fraud_detection']
            });
        }

        // Role-specific scenarios
        if (this.userProfile.role === 'manager') {
            scenarios.push({
                title: "Budgetplanung für Cybersecurity",
                description: "Rechtfertigung von Sicherheitsinvestitionen gegenüber der Geschäftsleitung",
                skills: ['risk_assessment', 'business_impact', 'communication']
            });
        }

        // Weakness-targeted scenarios
        Object.keys(this.weaknessAnalysis).forEach(weakness => {
            scenarios.push({
                title: `${weakness} Challenge`,
                description: `Spezielles Szenario zur Verbesserung in ${weakness}`,
                skills: [weakness],
                adaptive: true
            });
        });

        return scenarios;
    }

    getNextRecommendation() {
        if (this.learningPath.length === 0) {
            this.generatePersonalizedPath();
        }

        const nextItem = this.learningPath.find(item => !item.completed);
        
        if (!nextItem) {
            return this.generateAdvancedRecommendation();
        }

        return {
            recommendation: nextItem,
            reasoning: this.generateRecommendationReasoning(nextItem),
            alternatives: this.getAlternativeRecommendations(nextItem)
        };
    }

    generateRecommendationReasoning(item) {
        const reasons = [];

        if (item.type === 'remedial') {
            reasons.push(`Sie haben in ${item.category} eine Erfolgsquote von ${Math.round(this.userProfile.correctAnswerRate[item.category] * 100)}%`);
            reasons.push("Durch gezielte Übung können Sie diese Schwäche in eine Stärke verwandeln");
        }

        if (item.type === 'progressive') {
            reasons.push(`Basierend auf Ihren bisherigen Leistungen ist dies der nächste logische Schritt`);
            reasons.push(`Geschätzte Lernzeit: ${item.estimatedTime} Minuten`);
        }

        if (item.type === 'practical') {
            reasons.push("Praktische Anwendung festigt das Gelernte und bereitet auf reale Situationen vor");
        }

        return reasons;
    }

    getAlternativeRecommendations(primaryItem) {
        return this.learningPath
            .filter(item => item !== primaryItem && !item.completed)
            .slice(0, 3)
            .map(item => ({
                title: item.title || `${item.type} - ${item.category || item.skill}`,
                reason: `Alternative basierend auf ${item.type}`,
                estimatedTime: item.estimatedTime
            }));
    }

    adaptDifficultyBasedOnPerformance(sessionResults) {
        const correctRate = sessionResults.correct / sessionResults.total;
        const avgTime = sessionResults.totalTime / sessionResults.total;

        // Adjust difficulty based on performance
        if (correctRate > 0.9 && avgTime < 20) {
            // Too easy, increase difficulty
            this.increaseDifficulty();
        } else if (correctRate < 0.6) {
            // Too hard, decrease difficulty
            this.decreaseDifficulty();
        }

        // Update user profile
        this.updateUserProfile(sessionResults);
    }

    increaseDifficulty() {
        const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
        const currentIndex = levels.indexOf(this.adaptiveSettings.difficultyLevel);
        
        if (currentIndex < levels.length - 1) {
            this.adaptiveSettings.difficultyLevel = levels[currentIndex + 1];
            this.showDifficultyChangeNotification('increased');
        }
    }

    decreaseDifficulty() {
        const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
        const currentIndex = levels.indexOf(this.adaptiveSettings.difficultyLevel);
        
        if (currentIndex > 0) {
            this.adaptiveSettings.difficultyLevel = levels[currentIndex - 1];
            this.showDifficultyChangeNotification('decreased');
        }
    }

    showDifficultyChangeNotification(direction) {
        const notification = document.createElement('div');
        notification.className = 'ai-coach-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>🤖 AI-Coach Anpassung</h3>
                <p>Schwierigkeitsgrad wurde ${direction === 'increased' ? 'erhöht' : 'verringert'} 
                   auf "${this.adaptiveSettings.difficultyLevel}"</p>
                <small>Basierend auf Ihrer Leistung</small>
            </div>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    }

    generatePersonalizedQuestions(category, count = 10) {
        // This would integrate with the existing question database
        const allQuestions = window.EXTENDED_QUESTIONS_DB[category] || [];
        
        // Filter based on difficulty
        let filteredQuestions = allQuestions.filter(q => 
            q.difficulty === this.adaptiveSettings.difficultyLevel
        );

        // If not enough questions at current difficulty, expand
        if (filteredQuestions.length < count) {
            filteredQuestions = allQuestions;
        }

        // Prioritize questions the user hasn't seen recently
        const recentQuestions = this.userProfile.completedQuizzes
            .slice(-50)
            .map(quiz => quiz.questionIds || [])
            .flat();

        filteredQuestions = filteredQuestions.filter(q => 
            !recentQuestions.includes(q.id)
        );

        // Shuffle and select
        return this.shuffleArray(filteredQuestions).slice(0, count);
    }

    providePersonalizedFeedback(answer, question, correct) {
        const feedback = {
            general: correct ? "Richtig!" : "Nicht ganz richtig.",
            specific: "",
            learning_tip: "",
            next_steps: []
        };

        if (!correct) {
            // Analyze the type of mistake
            const mistakeType = this.analyzeMistake(answer, question);
            
            feedback.specific = this.generateSpecificFeedback(mistakeType, question);
            feedback.learning_tip = this.generateLearningTip(mistakeType, question.category);
            feedback.next_steps = this.generateNextSteps(mistakeType);
        } else {
            feedback.specific = this.generatePositiveFeedback(question);
            feedback.next_steps = ["Weiter mit dem nächsten Thema"];
        }

        return feedback;
    }

    analyzeMistake(userAnswer, question) {
        // Simple analysis - could be more sophisticated
        const correctAnswer = question.answers[question.correct];
        
        if (typeof userAnswer === 'number') {
            const chosenAnswer = question.answers[userAnswer];
            
            // Analyze common mistake patterns
            if (chosenAnswer.includes('nicht') && correctAnswer.includes('nicht')) {
                return 'negation_confusion';
            }
            if (chosenAnswer.includes('alle') || chosenAnswer.includes('immer')) {
                return 'overgeneralization';
            }
            if (chosenAnswer.includes('nie') || chosenAnswer.includes('kein')) {
                return 'absolutism';
            }
        }
        
        return 'knowledge_gap';
    }

    generateSpecificFeedback(mistakeType, question) {
        const feedbacks = {
            'negation_confusion': "Achten Sie auf Negationen in der Frage. Lesen Sie aufmerksam.",
            'overgeneralization': "Vorsicht vor absoluten Aussagen - Sicherheit hat meist Ausnahmen.",
            'absolutism': "In der Cybersecurity gibt es selten absolute Regeln.",
            'knowledge_gap': "Diese Frage erfordert spezifisches Fachwissen."
        };
        
        return feedbacks[mistakeType] || "Schauen Sie sich die Erklärung genau an.";
    }

    generateLearningTip(mistakeType, category) {
        const tips = {
            'password_security': "Denken Sie an die drei Faktoren: Komplexität, Einzigartigkeit, Aktualität",
            'phishing_detection': "Prüfen Sie immer: Absender, Links, Dringlichkeit und Rechtschreibung",
            'malware_analysis': "Verhalten ist wichtiger als Signaturen bei der Malware-Erkennung",
            'network_security': "Defense in Depth: Mehrere Sicherheitsebenen sind besser als eine starke"
        };
        
        return tips[category] || "Vertiefen Sie Ihr Wissen in diesem Bereich durch zusätzliche Übungen.";
    }

    generateNextSteps(mistakeType) {
        const steps = {
            'negation_confusion': [
                "Üben Sie mit Fragen mit Negationen",
                "Markieren Sie Negationswörter beim Lesen"
            ],
            'overgeneralization': [
                "Studieren Sie Ausnahmen und Grenzfälle",
                "Üben Sie mit nuancierten Szenarien"
            ],
            'knowledge_gap': [
                "Lesen Sie zusätzliche Materialien zu diesem Thema",
                "Schauen Sie sich ähnliche Fragen an"
            ]
        };
        
        return steps[mistakeType] || ["Wiederholen Sie dieses Thema"];
    }

    renderCoachDashboard() {
        const recommendation = this.getNextRecommendation();
        
        return `
            <div class="ai-coach-dashboard">
                <div class="coach-header">
                    <h2>🤖 Ihr AI-Lerncoach</h2>
                    <div class="coach-stats">
                        <div class="stat">
                            <span class="label">Aktuelles Level:</span>
                            <span class="value">${this.adaptiveSettings.difficultyLevel}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Lernstil:</span>
                            <span class="value">${this.adaptiveSettings.learningStyle}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Fortschritt:</span>
                            <span class="value">${this.calculateProgress()}%</span>
                        </div>
                    </div>
                </div>

                <div class="recommendation-section">
                    <h3>📚 Empfehlung für Sie</h3>
                    <div class="recommendation-card">
                        <h4>${recommendation.recommendation.type} - ${recommendation.recommendation.category || recommendation.recommendation.skill}</h4>
                        <p>Geschätzte Zeit: ${recommendation.recommendation.estimatedTime} Minuten</p>
                        
                        <div class="reasoning">
                            <h5>💡 Warum diese Empfehlung?</h5>
                            <ul>
                                ${recommendation.reasoning.map(reason => `<li>${reason}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <button class="start-recommendation-btn" onclick="aiCoach.startRecommendedSession()">
                            Jetzt starten
                        </button>
                    </div>
                </div>

                <div class="weakness-analysis">
                    <h3>🎯 Verbesserungsbereiche</h3>
                    ${this.renderWeaknessAnalysis()}
                </div>

                <div class="learning-path">
                    <h3>🗺️ Ihr Lernpfad</h3>
                    ${this.renderLearningPath()}
                </div>
            </div>
        `;
    }

    renderWeaknessAnalysis() {
        const weaknesses = Object.keys(this.weaknessAnalysis);
        
        if (weaknesses.length === 0) {
            return '<p>🎉 Keine kritischen Schwächen erkannt! Sie machen großartige Fortschritte.</p>';
        }

        return weaknesses.map(category => {
            const weakness = this.weaknessAnalysis[category];
            return `
                <div class="weakness-item ${weakness.priority}">
                    <h4>${category.replace(/_/g, ' ')}</h4>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${weakness.correctRate * 100}%"></div>
                    </div>
                    <span class="percentage">${Math.round(weakness.correctRate * 100)}%</span>
                    <span class="priority ${weakness.priority}">${weakness.priority} Priorität</span>
                </div>
            `;
        }).join('');
    }

    renderLearningPath() {
        return `
            <div class="learning-path-timeline">
                ${this.learningPath.map((item, index) => `
                    <div class="path-item ${item.completed ? 'completed' : 'pending'}">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4>${item.title || `${item.type} - ${item.category || item.skill}`}</h4>
                            <p>Zeit: ${item.estimatedTime} Min | Priorität: ${item.priority}</p>
                        </div>
                        <div class="step-status">
                            ${item.completed ? '✅' : '⏳'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    calculateProgress() {
        const completed = this.learningPath.filter(item => item.completed).length;
        const total = this.learningPath.length;
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    }

    calculateOverallCorrectRate() {
        const rates = Object.values(this.userProfile.correctAnswerRate);
        return rates.length > 0 ? rates.reduce((a, b) => a + b, 0) / rates.length : 0;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    updateUserProfile(sessionData) {
        // Update learning session data
        this.userProfile.learningSessionData.push({
            timestamp: new Date().toISOString(),
            ...sessionData
        });

        // Keep only last 50 sessions
        if (this.userProfile.learningSessionData.length > 50) {
            this.userProfile.learningSessionData = this.userProfile.learningSessionData.slice(-50);
        }

        this.saveUserProfile();
    }

    saveUserProfile() {
        localStorage.setItem('ai_learning_profile', JSON.stringify(this.userProfile));
    }
}

// CSS für AI Learning Coach
const aiCoachCSS = `
    .ai-coach-dashboard {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .coach-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 25px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .coach-stats {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    
    .coach-stats .stat {
        text-align: center;
    }
    
    .coach-stats .label {
        display: block;
        font-size: 0.9em;
        opacity: 0.9;
    }
    
    .coach-stats .value {
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 5px;
    }
    
    .recommendation-card {
        background: white;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-left: 5px solid #28a745;
    }
    
    .reasoning ul {
        margin: 10px 0;
        padding-left: 20px;
    }
    
    .start-recommendation-btn {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 1.1em;
        cursor: pointer;
        margin-top: 15px;
    }
    
    .weakness-item {
        background: white;
        border-radius: 8px;
        padding: 15px;
        margin: 10px 0;
        display: flex;
        align-items: center;
        gap: 15px;
        border-left: 4px solid;
    }
    
    .weakness-item.high {
        border-left-color: #dc3545;
    }
    
    .weakness-item.medium {
        border-left-color: #ffc107;
    }
    
    .weakness-item h4 {
        flex: 1;
        margin: 0;
        text-transform: capitalize;
    }
    
    .weakness-item .progress-bar {
        width: 200px;
        height: 10px;
        background: #e9ecef;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .weakness-item .progress {
        height: 100%;
        background: linear-gradient(90deg, #dc3545, #ffc107, #28a745);
        transition: width 0.3s ease;
    }
    
    .weakness-item .percentage {
        font-weight: bold;
        min-width: 50px;
    }
    
    .weakness-item .priority {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .priority.high {
        background: #f8d7da;
        color: #721c24;
    }
    
    .priority.medium {
        background: #fff3cd;
        color: #856404;
    }
    
    .learning-path-timeline {
        position: relative;
    }
    
    .learning-path-timeline::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #e9ecef;
    }
    
    .path-item {
        display: flex;
        align-items: center;
        margin: 20px 0;
        position: relative;
    }
    
    .step-number {
        background: #007bff;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 20px;
        z-index: 1;
    }
    
    .path-item.completed .step-number {
        background: #28a745;
    }
    
    .step-content {
        flex: 1;
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .step-content h4 {
        margin: 0 0 5px 0;
        color: #2c3e50;
    }
    
    .step-content p {
        margin: 0;
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .step-status {
        font-size: 1.5em;
        margin-left: 15px;
    }
    
    .ai-coach-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 350px;
    }
    
    .ai-coach-notification h3 {
        margin: 0 0 10px 0;
    }
    
    .ai-coach-notification p {
        margin: 0 0 5px 0;
    }
    
    .ai-coach-notification small {
        opacity: 0.8;
    }
`;

// Style hinzufügen
const aiCoachStyleSheet = document.createElement('style');
aiCoachStyleSheet.textContent = aiCoachCSS;
document.head.appendChild(aiCoachStyleSheet);

// Global instance
window.aiCoach = new AILearningCoach();
