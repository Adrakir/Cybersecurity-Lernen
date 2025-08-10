// Analytics Dashboard für Learning Platform
class Analytics {
    constructor() {
        this.sessionData = {
            startTime: new Date(),
            events: [],
            interactions: [],
            performance: {
                responseTimesMs: [],
                accuracyByCategory: {},
                learningVelocity: [],
                focusMetrics: []
            },
            userBehavior: {
                clickHeatmap: new Map(),
                navigationPatterns: [],
                timeSpentBySection: new Map(),
                errorPatterns: []
            },
            aiInteractions: {
                questionsAsked: [],
                helpRequests: [],
                topicCoverage: new Set(),
                satisfactionRatings: []
            }
        };
        
        this.realTimeMetrics = {
            currentStreakLength: 0,
            questionsPerMinute: 0,
            accuracyTrend: [],
            engagementScore: 100,
            difficultyProgression: []
        };
        
        this.charts = new Map();
        this.updateInterval = null;
        
        this.initializeAnalytics();
    }

    initializeAnalytics() {
        console.log('📊 Advanced Analytics Dashboard initializing...');
        
        // Event Listeners für Tracking
        this.setupEventTracking();
        
        // Real-time Updates starten
        this.startRealTimeUpdates();
        
        // Performance Observer
        this.setupPerformanceMonitoring();
        
        // User Behavior Tracking
        this.setupBehaviorTracking();
        
        console.log('✅ Advanced Analytics ready');
    }

    setupEventTracking() {
        // Quiz-Events
        window.addEventListener('questionAnswered', (event) => {
            this.trackQuestionAnswered(event.detail);
        });

        window.addEventListener('quizCompleted', (event) => {
            this.trackQuizCompleted(event.detail);
        });

        // KI-Events
        window.addEventListener('aiInteraction', (event) => {
            this.trackAIInteraction(event.detail);
        });

        // Navigation Events
        window.addEventListener('sectionChanged', (event) => {
            this.trackNavigation(event.detail);
        });

        // Achievement Events
        window.addEventListener('achievementUnlocked', (event) => {
            this.trackAchievement(event.detail);
        });
    }

    trackQuestionAnswered(data) {
        const event = {
            type: 'question_answered',
            timestamp: new Date(),
            questionId: data.questionId,
            category: data.category,
            difficulty: data.difficulty,
            isCorrect: data.isCorrect,
            responseTime: data.responseTime,
            selectedAnswer: data.selectedAnswer,
            correctAnswer: data.correctAnswer,
            hintsUsed: data.hintsUsed || 0,
            aiHelpRequested: data.aiHelpRequested || false
        };

        this.sessionData.events.push(event);
        this.sessionData.performance.responseTimesMs.push(data.responseTime);
        
        // Update Category Accuracy
        const category = data.category;
        if (!this.sessionData.performance.accuracyByCategory[category]) {
            this.sessionData.performance.accuracyByCategory[category] = {
                correct: 0,
                total: 0,
                accuracy: 0
            };
        }
        
        const categoryStats = this.sessionData.performance.accuracyByCategory[category];
        categoryStats.total++;
        if (data.isCorrect) {
            categoryStats.correct++;
        }
        categoryStats.accuracy = categoryStats.correct / categoryStats.total;

        // Update Real-time Metrics
        this.updateRealTimeMetrics(event);
        
        // Emit custom event für andere Module
        window.dispatchEvent(new CustomEvent('analyticsUpdated', {
            detail: { type: 'question', data: event }
        }));
    }

    trackAIInteraction(data) {
        const interaction = {
            type: 'ai_interaction',
            timestamp: new Date(),
            interactionType: data.type, // 'question', 'help', 'explanation'
            question: data.question,
            response: data.response,
            context: data.context,
            satisfaction: data.satisfaction,
            topicTags: data.topicTags || []
        };

        this.sessionData.aiInteractions.questionsAsked.push(interaction);
        
        // Track topic coverage
        if (data.topicTags) {
            data.topicTags.forEach(tag => {
                this.sessionData.aiInteractions.topicCoverage.add(tag);
            });
        }
    }

    trackNavigation(data) {
        const navigation = {
            timestamp: new Date(),
            from: data.from,
            to: data.to,
            method: data.method, // 'click', 'keyboard', 'programmatic'
            timeSpent: data.timeSpent
        };

        this.sessionData.userBehavior.navigationPatterns.push(navigation);
        
        // Update time spent tracking
        if (data.timeSpent && data.from) {
            const currentTime = this.sessionData.userBehavior.timeSpentBySection.get(data.from) || 0;
            this.sessionData.userBehavior.timeSpentBySection.set(data.from, currentTime + data.timeSpent);
        }
    }

    updateRealTimeMetrics(event) {
        // Accuracy Trend (letzte 10 Antworten)
        this.realTimeMetrics.accuracyTrend.push({
            timestamp: event.timestamp,
            isCorrect: event.isCorrect
        });
        
        // Behalte nur die letzten 10
        if (this.realTimeMetrics.accuracyTrend.length > 10) {
            this.realTimeMetrics.accuracyTrend.shift();
        }

        // Questions per Minute berechnen
        const oneMinuteAgo = new Date(Date.now() - 60000);
        const recentQuestions = this.sessionData.events.filter(e => 
            e.type === 'question_answered' && e.timestamp > oneMinuteAgo
        );
        this.realTimeMetrics.questionsPerMinute = recentQuestions.length;

        // Engagement Score (basierend auf verschiedenen Faktoren)
        this.calculateEngagementScore();

        // Streak Length
        this.updateStreakLength(event.isCorrect);
    }

    calculateEngagementScore() {
        let score = 100;
        
        // Faktor 1: Response Time (schneller = besser engagement)
        const avgResponseTime = this.getAverageResponseTime();
        if (avgResponseTime > 30000) score -= 20; // Über 30s
        else if (avgResponseTime > 15000) score -= 10; // Über 15s
        
        // Faktor 2: Accuracy Trend
        const recentAccuracy = this.getRecentAccuracy();
        if (recentAccuracy < 0.5) score -= 30;
        else if (recentAccuracy < 0.7) score -= 15;
        else if (recentAccuracy > 0.9) score += 10;
        
        // Faktor 3: AI Interaction (positiv für Engagement)
        const aiInteractions = this.sessionData.aiInteractions.questionsAsked.length;
        score += Math.min(aiInteractions * 2, 20);
        
        // Faktor 4: Consecutive Sessions
        score += this.getConsecutiveSessionBonus();
        
        this.realTimeMetrics.engagementScore = Math.max(0, Math.min(150, score));
    }

    generateAdvancedReport() {
        const now = new Date();
        const sessionDuration = now - this.sessionData.startTime;
        
        return {
            sessionOverview: {
                duration: sessionDuration,
                totalQuestions: this.sessionData.events.filter(e => e.type === 'question_answered').length,
                overallAccuracy: this.calculateOverallAccuracy(),
                engagementScore: this.realTimeMetrics.engagementScore,
                questionsPerMinute: this.realTimeMetrics.questionsPerMinute
            },
            
            performanceAnalysis: {
                categoryBreakdown: this.sessionData.performance.accuracyByCategory,
                responseTimeAnalysis: this.analyzeResponseTimes(),
                learningVelocity: this.calculateLearningVelocity(),
                difficultyProgression: this.analyzeDifficultyProgression(),
                streakAnalysis: this.analyzeStreaks()
            },
            
            behaviorInsights: {
                navigationEfficiency: this.analyzeNavigationPatterns(),
                timeDistribution: this.analyzeTimeDistribution(),
                errorPatterns: this.analyzeErrorPatterns(),
                interactionHeatmap: this.generateHeatmapData()
            },
            
            aiUtilization: {
                totalInteractions: this.sessionData.aiInteractions.questionsAsked.length,
                topicCoverage: Array.from(this.sessionData.aiInteractions.topicCoverage),
                helpEffectiveness: this.analyzeAIEffectiveness(),
                questionTypes: this.categorizeAIQuestions()
            },
            
            recommendations: this.generatePersonalizedRecommendations(),
            
            comparativeAnalysis: this.getComparativeMetrics(),
            
            learningPathOptimization: this.suggestLearningPath()
        };
    }

    analyzeResponseTimes() {
        const times = this.sessionData.performance.responseTimesMs;
        if (times.length === 0) return null;
        
        times.sort((a, b) => a - b);
        
        return {
            average: times.reduce((sum, time) => sum + time, 0) / times.length,
            median: times[Math.floor(times.length / 2)],
            p95: times[Math.floor(times.length * 0.95)],
            fastest: times[0],
            slowest: times[times.length - 1],
            distribution: this.getResponseTimeDistribution(times)
        };
    }

    calculateLearningVelocity() {
        const events = this.sessionData.events.filter(e => e.type === 'question_answered');
        if (events.length < 5) return null;
        
        const windows = [];
        const windowSize = 5; // 5-question windows
        
        for (let i = 0; i <= events.length - windowSize; i++) {
            const window = events.slice(i, i + windowSize);
            const accuracy = window.filter(e => e.isCorrect).length / windowSize;
            const avgTime = window.reduce((sum, e) => sum + e.responseTime, 0) / windowSize;
            
            windows.push({
                startIndex: i,
                accuracy,
                avgResponseTime: avgTime,
                efficiency: accuracy / (avgTime / 1000) // accuracy per second
            });
        }
        
        return {
            windows,
            trend: this.calculateTrend(windows.map(w => w.efficiency)),
            currentEfficiency: windows[windows.length - 1]?.efficiency || 0
        };
    }

    generatePersonalizedRecommendations() {
        const recommendations = [];
        const report = this.generateAdvancedReport();
        
        // Performance-basierte Empfehlungen
        Object.entries(report.performanceAnalysis.categoryBreakdown).forEach(([category, stats]) => {
            if (stats.accuracy < 0.7) {
                recommendations.push({
                    type: 'improvement',
                    priority: 'high',
                    category: category,
                    title: `Verbessern Sie Ihre ${category}-Kenntnisse`,
                    description: `Ihre Genauigkeit in ${category} liegt bei ${(stats.accuracy * 100).toFixed(1)}%. Konzentrieren Sie sich auf diese Bereiche.`,
                    actionItems: this.getActionItemsForCategory(category),
                    estimatedImpact: 'Hoch'
                });
            }
        });
        
        // Response Time Empfehlungen
        const avgResponseTime = report.performanceAnalysis.responseTimeAnalysis?.average;
        if (avgResponseTime > 20000) {
            recommendations.push({
                type: 'efficiency',
                priority: 'medium',
                title: 'Antwortzeit optimieren',
                description: 'Ihre durchschnittliche Antwortzeit ist überdurchschnittlich hoch. Versuchen Sie, intuitiver zu antworten.',
                actionItems: [
                    'Vertrauen Sie auf Ihr erstes Gefühl',
                    'Üben Sie Time-Boxing-Techniken',
                    'Nutzen Sie Eliminierungsstrategien'
                ],
                estimatedImpact: 'Mittel'
            });
        }
        
        // AI Nutzung Empfehlungen
        if (this.sessionData.aiInteractions.questionsAsked.length < 3) {
            recommendations.push({
                type: 'engagement',
                priority: 'low',
                title: 'KI-Tutor mehr nutzen',
                description: 'Der KI-Tutor kann Ihnen bei schwierigen Konzepten helfen. Zögern Sie nicht zu fragen!',
                actionItems: [
                    'Stellen Sie Fragen zu unklaren Konzepten',
                    'Bitten Sie um alternative Erklärungen',
                    'Nutzen Sie den Tutor für Lernstrategien'
                ],
                estimatedImpact: 'Hoch'
            });
        }
        
        return recommendations.sort((a, b) => {
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }

    renderAdvancedDashboard() {
        const report = this.generateAdvancedReport();
        
        const dashboardHTML = `
            <div class="advanced-analytics-dashboard">
                <div class="dashboard-header">
                    <h2>📊 Erweiterte Lernanalyse</h2>
                    <div class="real-time-metrics">
                        <div class="metric-card">
                            <span class="metric-value">${this.realTimeMetrics.engagementScore}</span>
                            <span class="metric-label">Engagement Score</span>
                        </div>
                        <div class="metric-card">
                            <span class="metric-value">${this.realTimeMetrics.questionsPerMinute}</span>
                            <span class="metric-label">Fragen/Min</span>
                        </div>
                        <div class="metric-card">
                            <span class="metric-value">${this.realTimeMetrics.currentStreakLength}</span>
                            <span class="metric-label">Aktuelle Streak</span>
                        </div>
                    </div>
                </div>
                
                <div class="dashboard-grid">
                    <div class="dashboard-section performance-overview">
                        <h3>🎯 Performance-Übersicht</h3>
                        ${this.renderPerformanceCharts(report.performanceAnalysis)}
                    </div>
                    
                    <div class="dashboard-section category-breakdown">
                        <h3>📚 Kategorien-Analyse</h3>
                        ${this.renderCategoryBreakdown(report.performanceAnalysis.categoryBreakdown)}
                    </div>
                    
                    <div class="dashboard-section response-time-analysis">
                        <h3>⏱️ Antwortzeit-Analyse</h3>
                        ${this.renderResponseTimeAnalysis(report.performanceAnalysis.responseTimeAnalysis)}
                    </div>
                    
                    <div class="dashboard-section ai-insights">
                        <h3>🤖 KI-Nutzungsstatistiken</h3>
                        ${this.renderAIInsights(report.aiUtilization)}
                    </div>
                    
                    <div class="dashboard-section behavior-insights">
                        <h3>👤 Verhaltensmuster</h3>
                        ${this.renderBehaviorInsights(report.behaviorInsights)}
                    </div>
                    
                    <div class="dashboard-section recommendations">
                        <h3>💡 Personalisierte Empfehlungen</h3>
                        ${this.renderRecommendations(report.recommendations)}
                    </div>
                </div>
                
                <div class="dashboard-footer">
                    <button onclick="analytics.exportReport()" class="btn-primary">
                        📥 Detailbericht exportieren
                    </button>
                    <button onclick="analytics.shareReport()" class="btn-secondary">
                        📤 Bericht teilen
                    </button>
                    <button onclick="analytics.scheduleReport()" class="btn-secondary">
                        ⏰ Regelmäßige Berichte
                    </button>
                </div>
            </div>
        `;
        
        return dashboardHTML;
    }

    renderPerformanceCharts(performanceData) {
        return `
            <div class="performance-charts">
                <div class="chart-container">
                    <canvas id="accuracy-trend-chart" width="300" height="150"></canvas>
                    <p class="chart-title">Genauigkeitstrend</p>
                </div>
                <div class="chart-container">
                    <canvas id="velocity-chart" width="300" height="150"></canvas>
                    <p class="chart-title">Lerngeschwindigkeit</p>
                </div>
                <div class="chart-container">
                    <canvas id="difficulty-progression-chart" width="300" height="150"></canvas>
                    <p class="chart-title">Schwierigkeitsprogression</p>
                </div>
            </div>
        `;
    }

    renderCategoryBreakdown(categoryData) {
        const categories = Object.entries(categoryData).map(([name, stats]) => `
            <div class="category-item">
                <div class="category-header">
                    <span class="category-name">${name}</span>
                    <span class="category-accuracy ${stats.accuracy >= 0.8 ? 'high' : stats.accuracy >= 0.6 ? 'medium' : 'low'}">
                        ${(stats.accuracy * 100).toFixed(1)}%
                    </span>
                </div>
                <div class="category-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${stats.accuracy * 100}%"></div>
                    </div>
                    <span class="category-stats">${stats.correct}/${stats.total} richtig</span>
                </div>
                <div class="category-recommendations">
                    ${this.getCategoryRecommendation(name, stats)}
                </div>
            </div>
        `).join('');
        
        return `<div class="category-breakdown">${categories}</div>`;
    }

    startRealTimeUpdates() {
        this.updateInterval = setInterval(() => {
            this.updateRealTimeDashboard();
        }, 5000); // Update alle 5 Sekunden
    }

    updateRealTimeDashboard() {
        // Update Engagement Score Display
        const engagementElement = document.querySelector('.metric-value');
        if (engagementElement) {
            engagementElement.textContent = this.realTimeMetrics.engagementScore;
            
            // Color coding für Engagement Score
            const parent = engagementElement.closest('.metric-card');
            if (parent) {
                parent.className = `metric-card ${this.getEngagementScoreClass()}`;
            }
        }
        
        // Update Charts wenn Dashboard sichtbar
        if (document.querySelector('.advanced-analytics-dashboard')) {
            this.updateCharts();
        }
    }

    getEngagementScoreClass() {
        const score = this.realTimeMetrics.engagementScore;
        if (score >= 120) return 'excellent';
        if (score >= 100) return 'good';
        if (score >= 80) return 'average';
        return 'needs-improvement';
    }

    exportReport() {
        const report = this.generateAdvancedReport();
        const exportData = {
            generatedAt: new Date().toISOString(),
            platform: 'Enhanced Learning Platform',
            version: '2.0.0',
            ...report
        };
        
        // Als JSON exportieren
        const blob = new Blob([JSON.stringify(exportData, null, 2)], 
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `learning-analytics-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('📥 Analytics report exported');
    }

    setupPerformanceMonitoring() {
        // Performance Observer für Web Vitals
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        this.trackPerformanceMetric(entry);
                    }
                });
                
                observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
            } catch (error) {
                console.warn('Performance Observer not supported:', error);
            }
        }
    }

    trackPerformanceMetric(entry) {
        const metric = {
            timestamp: new Date(),
            type: entry.entryType,
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime
        };
        
        this.sessionData.performance.focusMetrics.push(metric);
    }

    // Cleanup
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        // Remove event listeners
        // (In einer echten Implementierung würden wir alle Listener tracken und entfernen)
        
        console.log('🧹 Advanced Analytics destroyed');
    }
}

// CSS für Advanced Analytics Dashboard
const analyticsCSS = `
<style>
.advanced-analytics-dashboard {
    padding: 24px;
    background: var(--bg-primary);
    border-radius: 12px;
    max-width: 1200px;
    margin: 0 auto;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--border-color);
}

.real-time-metrics {
    display: flex;
    gap: 16px;
}

.metric-card {
    background: var(--bg-secondary);
    padding: 16px 24px;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.metric-card.excellent { border-color: var(--success-color); }
.metric-card.good { border-color: var(--info-color); }
.metric-card.average { border-color: var(--warning-color); }
.metric-card.needs-improvement { border-color: var(--error-color); }

.metric-value {
    display: block;
    font-size: 2em;
    font-weight: bold;
    color: var(--primary-color);
}

.metric-label {
    display: block;
    font-size: 0.9em;
    color: var(--text-secondary);
    margin-top: 4px;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
}

.dashboard-section {
    background: var(--bg-secondary);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.dashboard-section h3 {
    margin: 0 0 20px 0;
    color: var(--text-primary);
    font-size: 1.3em;
}

.performance-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

.chart-container {
    text-align: center;
}

.chart-title {
    margin: 8px 0 0 0;
    font-size: 0.9em;
    color: var(--text-secondary);
}

.category-item {
    margin-bottom: 20px;
    padding: 16px;
    background: var(--bg-primary);
    border-radius: 8px;
}

.category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.category-name {
    font-weight: 600;
    color: var(--text-primary);
}

.category-accuracy {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: bold;
}

.category-accuracy.high { background: var(--success-color); color: white; }
.category-accuracy.medium { background: var(--warning-color); color: white; }
.category-accuracy.low { background: var(--error-color); color: white; }

.progress-bar {
    background: var(--border-color);
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin: 8px 0;
}

.progress-fill {
    height: 100%;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.category-stats {
    font-size: 0.9em;
    color: var(--text-secondary);
}

.dashboard-footer {
    display: flex;
    gap: 16px;
    justify-content: center;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
    
    .real-time-metrics {
        flex-direction: column;
        gap: 8px;
    }
    
    .dashboard-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}
</style>
`;

// Füge CSS zum Document hinzu
if (!document.querySelector('#analytics-css')) {
    const style = document.createElement('style');
    style.id = 'analytics-css';
    style.textContent = analyticsCSS;
    document.head.appendChild(style);
}

// Global Analytics Instance
window.analytics = new Analytics();
