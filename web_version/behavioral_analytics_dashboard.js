// Behavioral Analytics Dashboard - Advanced Learning Analytics & User Behavior Insights
class BehavioralAnalyticsDashboard {
    constructor() {
        this.userBehaviorData = new Map();
        this.analyticsMetrics = {};
        this.learningPatterns = {};
        this.performanceTrends = {};
        this.engagementScores = new Map();
        this.predictionModels = {};
        this.initializeAnalytics();
    }

    initializeAnalytics() {
        this.analyticsMetrics = {
            learning_velocity: {
                name: "Learning Velocity",
                description: "Speed of knowledge acquisition across topics",
                unit: "concepts/hour",
                calculation: "completed_modules / study_time"
            },
            retention_rate: {
                name: "Knowledge Retention",
                description: "Percentage of knowledge retained over time",
                unit: "percentage",
                calculation: "current_score / peak_score * 100"
            },
            engagement_score: {
                name: "Engagement Score",
                description: "Overall platform engagement level",
                unit: "score",
                calculation: "weighted_activity_score"
            },
            skill_progression: {
                name: "Skill Progression Rate",
                description: "Rate of skill level advancement",
                unit: "levels/week",
                calculation: "skill_gains / time_period"
            },
            focus_time: {
                name: "Average Focus Duration",
                description: "Mean time spent in focused learning sessions",
                unit: "minutes",
                calculation: "total_session_time / session_count"
            },
            error_recovery: {
                name: "Error Recovery Rate",
                description: "How quickly users learn from mistakes",
                unit: "attempts",
                calculation: "mistakes_to_mastery_ratio"
            }
        };

        this.initializePredictionModels();
    }

    initializePredictionModels() {
        this.predictionModels = {
            dropout_risk: {
                name: "Dropout Risk Predictor",
                factors: ["engagement_decline", "session_frequency", "performance_drop"],
                threshold: 0.7,
                actions: ["intervention_needed", "support_recommended"]
            },
            certification_readiness: {
                name: "Certification Readiness",
                factors: ["practice_test_scores", "study_hours", "weak_areas"],
                threshold: 0.85,
                actions: ["ready_for_exam", "additional_study_needed"]
            },
            learning_path_optimization: {
                name: "Optimal Learning Path",
                factors: ["learning_style", "performance_patterns", "time_constraints"],
                threshold: 0.8,
                actions: ["path_adjustment", "personalization_update"]
            }
        };
    }

    trackUserBehavior(userId, action, context = {}) {
        if (!this.userBehaviorData.has(userId)) {
            this.userBehaviorData.set(userId, {
                sessions: [],
                actions: [],
                patterns: {},
                metrics: {},
                predictions: {}
            });
        }

        const userData = this.userBehaviorData.get(userId);
        const timestamp = new Date();

        const behaviorEvent = {
            timestamp,
            action,
            context,
            sessionId: this.getCurrentSessionId(userId),
            duration: context.duration || 0,
            performance: context.performance || null
        };

        userData.actions.push(behaviorEvent);
        this.updateRealTimeMetrics(userId, behaviorEvent);
        this.detectPatterns(userId);
        
        return behaviorEvent;
    }

    startLearningSession(userId, moduleType) {
        const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const userData = this.userBehaviorData.get(userId);
        
        if (userData) {
            const session = {
                sessionId,
                startTime: new Date(),
                moduleType,
                actions: [],
                focusEvents: [],
                performance: {},
                engagement: 0,
                status: "active"
            };
            
            userData.sessions.push(session);
            this.trackUserBehavior(userId, "session_start", { moduleType, sessionId });
        }

        return sessionId;
    }

    endLearningSession(userId, sessionId, performance = {}) {
        const userData = this.userBehaviorData.get(userId);
        if (!userData) return;

        const session = userData.sessions.find(s => s.sessionId === sessionId);
        if (session) {
            session.endTime = new Date();
            session.duration = session.endTime - session.startTime;
            session.performance = performance;
            session.status = "completed";
            
            this.calculateSessionMetrics(userId, session);
            this.trackUserBehavior(userId, "session_end", {
                sessionId,
                duration: session.duration,
                performance
            });
        }

        return session;
    }

    trackFocusEvent(userId, eventType, duration = 0) {
        const focusEvents = ["focus_gained", "focus_lost", "tab_switch", "scroll_activity", "interaction"];
        
        if (focusEvents.includes(eventType)) {
            this.trackUserBehavior(userId, eventType, { 
                duration,
                focusRelated: true 
            });
        }
    }

    calculateSessionMetrics(userId, session) {
        const metrics = {
            learning_velocity: this.calculateLearningVelocity(session),
            engagement_score: this.calculateEngagementScore(session),
            focus_time: this.calculateFocusTime(session),
            interaction_frequency: this.calculateInteractionFrequency(session)
        };

        session.calculatedMetrics = metrics;
        this.updateUserMetrics(userId, metrics);
        return metrics;
    }

    calculateLearningVelocity(session) {
        const completedConcepts = session.performance.completed_concepts || 0;
        const sessionHours = (session.duration || 0) / (1000 * 60 * 60);
        return sessionHours > 0 ? completedConcepts / sessionHours : 0;
    }

    calculateEngagementScore(session) {
        let score = 0;
        
        // Base engagement from session duration
        const sessionMinutes = (session.duration || 0) / (1000 * 60);
        score += Math.min(sessionMinutes / 30, 1) * 30; // Up to 30 points for 30+ min sessions
        
        // Interaction frequency
        const interactions = session.actions.filter(a => 
            ["click", "answer_question", "navigate", "search"].includes(a.action)
        ).length;
        score += Math.min(interactions / 10, 1) * 25; // Up to 25 points for interactions
        
        // Performance bonus
        if (session.performance.score) {
            score += (session.performance.score / 100) * 25; // Up to 25 points for performance
        }
        
        // Focus maintenance
        const focusEvents = session.focusEvents || [];
        const focusScore = focusEvents.filter(e => e.type === "focus_gained").length - 
                          focusEvents.filter(e => e.type === "focus_lost").length;
        score += Math.max(0, focusScore) * 5; // Bonus for maintaining focus
        
        return Math.min(score, 100);
    }

    calculateFocusTime(session) {
        const focusEvents = session.focusEvents || [];
        let totalFocusTime = 0;
        let currentFocusStart = session.startTime;
        
        focusEvents.forEach(event => {
            if (event.type === "focus_lost" && currentFocusStart) {
                totalFocusTime += event.timestamp - currentFocusStart;
                currentFocusStart = null;
            } else if (event.type === "focus_gained") {
                currentFocusStart = event.timestamp;
            }
        });
        
        // If still focused at end of session
        if (currentFocusStart && session.endTime) {
            totalFocusTime += session.endTime - currentFocusStart;
        }
        
        return totalFocusTime / (1000 * 60); // Return in minutes
    }

    calculateInteractionFrequency(session) {
        const sessionMinutes = (session.duration || 0) / (1000 * 60);
        const interactions = session.actions.length;
        return sessionMinutes > 0 ? interactions / sessionMinutes : 0;
    }

    detectPatterns(userId) {
        const userData = this.userBehaviorData.get(userId);
        if (!userData || userData.sessions.length < 3) return;

        const patterns = {
            optimal_study_time: this.detectOptimalStudyTime(userData),
            learning_style: this.detectLearningStyle(userData),
            struggle_areas: this.detectStruggleAreas(userData),
            motivation_triggers: this.detectMotivationTriggers(userData),
            attention_span: this.detectAttentionSpan(userData)
        };

        userData.patterns = patterns;
        this.generatePersonalizedRecommendations(userId, patterns);
        return patterns;
    }

    detectOptimalStudyTime(userData) {
        const sessionsByHour = {};
        
        userData.sessions.forEach(session => {
            const hour = session.startTime.getHours();
            if (!sessionsByHour[hour]) {
                sessionsByHour[hour] = { sessions: 0, totalPerformance: 0 };
            }
            sessionsByHour[hour].sessions++;
            sessionsByHour[hour].totalPerformance += session.performance.score || 0;
        });

        let bestHour = 0;
        let bestAvgPerformance = 0;
        
        Object.entries(sessionsByHour).forEach(([hour, data]) => {
            const avgPerformance = data.totalPerformance / data.sessions;
            if (avgPerformance > bestAvgPerformance) {
                bestAvgPerformance = avgPerformance;
                bestHour = parseInt(hour);
            }
        });

        return {
            optimal_hour: bestHour,
            performance_boost: bestAvgPerformance,
            confidence: Math.min(Object.keys(sessionsByHour).length / 10, 1)
        };
    }

    detectLearningStyle(userData) {
        const styleIndicators = {
            visual: 0,
            auditory: 0,
            kinesthetic: 0,
            reading: 0
        };

        userData.actions.forEach(action => {
            switch (action.action) {
                case "view_diagram":
                case "watch_video":
                case "visual_simulation":
                    styleIndicators.visual++;
                    break;
                case "audio_content":
                case "voice_interaction":
                    styleIndicators.auditory++;
                    break;
                case "hands_on_lab":
                case "interactive_exercise":
                    styleIndicators.kinesthetic++;
                    break;
                case "read_documentation":
                case "text_based_quiz":
                    styleIndicators.reading++;
                    break;
            }
        });

        const dominantStyle = Object.entries(styleIndicators)
            .sort(([,a], [,b]) => b - a)[0];

        return {
            dominant_style: dominantStyle[0],
            confidence: dominantStyle[1] / userData.actions.length,
            distribution: styleIndicators
        };
    }

    detectStruggleAreas(userData) {
        const topicPerformance = {};
        
        userData.actions.forEach(action => {
            if (action.context.topic && action.context.performance) {
                if (!topicPerformance[action.context.topic]) {
                    topicPerformance[action.context.topic] = [];
                }
                topicPerformance[action.context.topic].push(action.context.performance);
            }
        });

        const struggleAreas = [];
        Object.entries(topicPerformance).forEach(([topic, performances]) => {
            const avgPerformance = performances.reduce((a, b) => a + b, 0) / performances.length;
            if (avgPerformance < 60) {
                struggleAreas.push({
                    topic,
                    avg_performance: avgPerformance,
                    attempts: performances.length
                });
            }
        });

        return struggleAreas.sort((a, b) => a.avg_performance - b.avg_performance);
    }

    detectMotivationTriggers(userData) {
        const triggers = {
            achievements: 0,
            competition: 0,
            progress_visualization: 0,
            social_interaction: 0
        };

        userData.actions.forEach(action => {
            if (action.context.triggered_by) {
                triggers[action.context.triggered_by] = (triggers[action.context.triggered_by] || 0) + 1;
            }
        });

        return Object.entries(triggers)
            .sort(([,a], [,b]) => b - a)
            .map(([trigger, count]) => ({ trigger, effectiveness: count }));
    }

    detectAttentionSpan(userData) {
        const sessionDurations = userData.sessions
            .filter(s => s.status === "completed")
            .map(s => s.duration / (1000 * 60)); // Convert to minutes

        if (sessionDurations.length === 0) return { avg_span: 0, recommended_session_length: 30 };

        const avgSpan = sessionDurations.reduce((a, b) => a + b, 0) / sessionDurations.length;
        const optimalLength = Math.min(Math.max(avgSpan * 0.8, 15), 60); // Between 15-60 minutes

        return {
            avg_span: avgSpan,
            recommended_session_length: optimalLength,
            consistency: this.calculateConsistency(sessionDurations)
        };
    }

    calculateConsistency(values) {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;
        const stdDev = Math.sqrt(variance);
        return Math.max(0, 1 - (stdDev / mean)); // Higher consistency = lower relative std dev
    }

    generatePersonalizedRecommendations(userId, patterns) {
        const recommendations = [];

        // Optimal study time recommendation
        if (patterns.optimal_study_time.confidence > 0.5) {
            recommendations.push({
                type: "schedule_optimization",
                title: "Optimize Your Study Schedule",
                description: `Your peak performance occurs around ${patterns.optimal_study_time.optimal_hour}:00. Consider scheduling important learning sessions during this time.`,
                priority: "high",
                actionable: true
            });
        }

        // Learning style recommendations
        if (patterns.learning_style.confidence > 0.3) {
            const style = patterns.learning_style.dominant_style;
            const styleRecommendations = {
                visual: "Focus on diagrams, videos, and visual simulations",
                auditory: "Incorporate podcasts, audio content, and discussion",
                kinesthetic: "Engage with hands-on labs and interactive exercises",
                reading: "Use text-based materials and documentation"
            };

            recommendations.push({
                type: "learning_style",
                title: "Leverage Your Learning Style",
                description: `You learn best through ${style} methods. ${styleRecommendations[style]}.`,
                priority: "medium",
                actionable: true
            });
        }

        // Struggle area recommendations
        if (patterns.struggle_areas.length > 0) {
            const topStruggleArea = patterns.struggle_areas[0];
            recommendations.push({
                type: "improvement_focus",
                title: "Focus on Challenging Topics",
                description: `Consider additional practice in "${topStruggleArea.topic}" where your performance is ${topStruggleArea.avg_performance.toFixed(1)}%.`,
                priority: "high",
                actionable: true
            });
        }

        // Attention span recommendations
        if (patterns.attention_span.recommended_session_length) {
            recommendations.push({
                type: "session_optimization",
                title: "Optimize Session Length",
                description: `Your optimal session length is ${patterns.attention_span.recommended_session_length.toFixed(0)} minutes based on your attention patterns.`,
                priority: "medium",
                actionable: true
            });
        }

        const userData = this.userBehaviorData.get(userId);
        userData.recommendations = recommendations;
        return recommendations;
    }

    generateAnalyticsReport(userId, timeframe = "week") {
        const userData = this.userBehaviorData.get(userId);
        if (!userData) return null;

        const now = new Date();
        const timeframeDays = { day: 1, week: 7, month: 30, quarter: 90 }[timeframe] || 7;
        const startDate = new Date(now.getTime() - timeframeDays * 24 * 60 * 60 * 1000);

        const filteredSessions = userData.sessions.filter(s => s.startTime >= startDate);
        const filteredActions = userData.actions.filter(a => a.timestamp >= startDate);

        return {
            timeframe,
            period: `${startDate.toISOString().split('T')[0]} to ${now.toISOString().split('T')[0]}`,
            summary: {
                total_sessions: filteredSessions.length,
                total_study_time: this.calculateTotalStudyTime(filteredSessions),
                avg_session_length: this.calculateAverageSessionLength(filteredSessions),
                completion_rate: this.calculateCompletionRate(filteredSessions),
                engagement_trend: this.calculateEngagementTrend(filteredSessions)
            },
            performance: {
                avg_score: this.calculateAverageScore(filteredSessions),
                improvement_rate: this.calculateImprovementRate(filteredSessions),
                consistency_score: this.calculateConsistencyScore(filteredSessions),
                weak_areas: userData.patterns.struggle_areas || []
            },
            behavior: {
                optimal_study_time: userData.patterns.optimal_study_time,
                learning_style: userData.patterns.learning_style,
                attention_patterns: userData.patterns.attention_span,
                motivation_factors: userData.patterns.motivation_triggers
            },
            predictions: this.generatePredictions(userId, filteredSessions),
            recommendations: userData.recommendations || []
        };
    }

    generatePredictions(userId, sessions) {
        const predictions = {};

        // Dropout Risk
        const recentEngagement = this.calculateRecentEngagement(sessions);
        const sessionFrequency = sessions.length / 7; // Sessions per week
        predictions.dropout_risk = {
            risk_level: recentEngagement < 30 || sessionFrequency < 2 ? "high" : 
                       recentEngagement < 50 || sessionFrequency < 3 ? "medium" : "low",
            confidence: 0.75,
            factors: ["engagement_score", "session_frequency"]
        };

        // Performance Trend
        const performanceTrend = this.calculatePerformanceTrend(sessions);
        predictions.performance_trend = {
            direction: performanceTrend > 5 ? "improving" : performanceTrend < -5 ? "declining" : "stable",
            rate: Math.abs(performanceTrend),
            confidence: 0.7
        };

        return predictions;
    }

    calculateTotalStudyTime(sessions) {
        return sessions.reduce((total, session) => total + (session.duration || 0), 0) / (1000 * 60); // Minutes
    }

    calculateAverageSessionLength(sessions) {
        if (sessions.length === 0) return 0;
        return this.calculateTotalStudyTime(sessions) / sessions.length;
    }

    calculateCompletionRate(sessions) {
        if (sessions.length === 0) return 0;
        const completedSessions = sessions.filter(s => s.status === "completed").length;
        return (completedSessions / sessions.length) * 100;
    }

    calculateEngagementTrend(sessions) {
        if (sessions.length === 0) return 0;
        const avgEngagement = sessions.reduce((sum, s) => sum + (s.calculatedMetrics?.engagement_score || 0), 0) / sessions.length;
        return avgEngagement;
    }

    calculateAverageScore(sessions) {
        const scoresAvailable = sessions.filter(s => s.performance?.score);
        if (scoresAvailable.length === 0) return 0;
        return scoresAvailable.reduce((sum, s) => sum + s.performance.score, 0) / scoresAvailable.length;
    }

    calculateImprovementRate(sessions) {
        if (sessions.length < 2) return 0;
        const sortedSessions = sessions.sort((a, b) => a.startTime - b.startTime);
        const firstHalf = sortedSessions.slice(0, Math.floor(sessions.length / 2));
        const secondHalf = sortedSessions.slice(Math.floor(sessions.length / 2));
        
        const firstAvg = this.calculateAverageScore(firstHalf);
        const secondAvg = this.calculateAverageScore(secondHalf);
        
        return secondAvg - firstAvg;
    }

    calculateConsistencyScore(sessions) {
        if (sessions.length === 0) return 0;
        const scores = sessions.map(s => s.performance?.score).filter(s => s !== undefined);
        return this.calculateConsistency(scores);
    }

    calculateRecentEngagement(sessions) {
        const recentSessions = sessions.slice(-5); // Last 5 sessions
        return this.calculateEngagementTrend(recentSessions);
    }

    calculatePerformanceTrend(sessions) {
        if (sessions.length < 3) return 0;
        const scores = sessions.map(s => s.performance?.score).filter(s => s !== undefined);
        if (scores.length < 3) return 0;
        
        // Simple linear trend calculation
        const n = scores.length;
        const sumX = (n * (n + 1)) / 2;
        const sumY = scores.reduce((a, b) => a + b, 0);
        const sumXY = scores.reduce((sum, score, index) => sum + score * (index + 1), 0);
        const sumX2 = (n * (n + 1) * (2 * n + 1)) / 6;
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        return slope;
    }

    updateRealTimeMetrics(userId, event) {
        // Update engagement score in real-time
        if (!this.engagementScores.has(userId)) {
            this.engagementScores.set(userId, { score: 50, lastUpdate: new Date() });
        }

        const engagement = this.engagementScores.get(userId);
        const timeSinceLastUpdate = (new Date() - engagement.lastUpdate) / (1000 * 60); // Minutes

        // Decay engagement over time
        engagement.score = Math.max(0, engagement.score - timeSinceLastUpdate * 0.5);

        // Boost engagement based on action type
        const engagementBoosts = {
            "answer_question": 2,
            "complete_module": 5,
            "start_simulation": 3,
            "achieve_milestone": 4,
            "session_start": 1,
            "focus_gained": 0.5
        };

        engagement.score = Math.min(100, engagement.score + (engagementBoosts[event.action] || 0.1));
        engagement.lastUpdate = new Date();
    }

    getCurrentSessionId(userId) {
        const userData = this.userBehaviorData.get(userId);
        if (!userData) return null;
        
        const activeSessions = userData.sessions.filter(s => s.status === "active");
        return activeSessions.length > 0 ? activeSessions[0].sessionId : null;
    }

    renderAnalyticsDashboard(userId) {
        const report = this.generateAnalyticsReport(userId, "week");
        if (!report) return "<p>No analytics data available</p>";

        return `
            <div class="analytics-dashboard">
                <div class="dashboard-header">
                    <h1>📊 Behavioral Analytics Dashboard</h1>
                    <p>Insights into your learning patterns and performance</p>
                </div>
                
                <div class="metrics-grid">
                    <div class="metric-card">
                        <h3>📈 Study Performance</h3>
                        <div class="metric-value">${report.performance.avg_score.toFixed(1)}%</div>
                        <div class="metric-trend ${report.predictions.performance_trend.direction}">
                            ${report.predictions.performance_trend.direction.toUpperCase()}
                        </div>
                    </div>
                    
                    <div class="metric-card">
                        <h3>⏱️ Total Study Time</h3>
                        <div class="metric-value">${Math.round(report.summary.total_study_time)}min</div>
                        <div class="metric-detail">${report.summary.total_sessions} sessions</div>
                    </div>
                    
                    <div class="metric-card">
                        <h3>🎯 Engagement Score</h3>
                        <div class="metric-value">${Math.round(report.summary.engagement_trend)}</div>
                        <div class="metric-detail">Current trend</div>
                    </div>
                    
                    <div class="metric-card">
                        <h3>📚 Completion Rate</h3>
                        <div class="metric-value">${report.summary.completion_rate.toFixed(1)}%</div>
                        <div class="metric-detail">Session completion</div>
                    </div>
                </div>
                
                <div class="insights-section">
                    <h2>🧠 Learning Insights</h2>
                    <div class="insights-grid">
                        <div class="insight-card">
                            <h3>🕐 Optimal Study Time</h3>
                            <p>Best performance at ${report.behavior.optimal_study_time?.optimal_hour || 'N/A'}:00</p>
                        </div>
                        
                        <div class="insight-card">
                            <h3>🎨 Learning Style</h3>
                            <p>${report.behavior.learning_style?.dominant_style || 'Unknown'} learner</p>
                        </div>
                        
                        <div class="insight-card">
                            <h3>⏰ Attention Span</h3>
                            <p>${Math.round(report.behavior.attention_patterns?.recommended_session_length || 30)} min optimal</p>
                        </div>
                    </div>
                </div>
                
                <div class="recommendations-section">
                    <h2>💡 Personalized Recommendations</h2>
                    <div class="recommendations-list">
                        ${report.recommendations.map(rec => `
                            <div class="recommendation-item priority-${rec.priority}">
                                <h4>${rec.title}</h4>
                                <p>${rec.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// CSS for Analytics Dashboard
const analyticsCSS = `
    .analytics-dashboard {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .dashboard-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .metric-card {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        text-align: center;
    }
    
    .metric-card h3 {
        margin: 0 0 15px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .metric-value {
        font-size: 2.5em;
        font-weight: bold;
        color: #3498db;
        margin-bottom: 10px;
    }
    
    .metric-trend {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .metric-trend.improving { background: #d4edda; color: #155724; }
    .metric-trend.declining { background: #f8d7da; color: #721c24; }
    .metric-trend.stable { background: #fff3cd; color: #856404; }
    
    .metric-detail {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .insights-section, .recommendations-section {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        margin-bottom: 25px;
    }
    
    .insights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
    
    .insight-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        border-left: 4px solid #3498db;
    }
    
    .insight-card h3 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .insight-card p {
        margin: 0;
        color: #495057;
        font-size: 0.85em;
    }
    
    .recommendations-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .recommendation-item {
        padding: 20px;
        border-radius: 10px;
        border-left: 4px solid #28a745;
    }
    
    .recommendation-item.priority-high {
        background: #f8d7da;
        border-left-color: #dc3545;
    }
    
    .recommendation-item.priority-medium {
        background: #fff3cd;
        border-left-color: #ffc107;
    }
    
    .recommendation-item.priority-low {
        background: #d4edda;
        border-left-color: #28a745;
    }
    
    .recommendation-item h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .recommendation-item p {
        margin: 0;
        color: #495057;
        font-size: 0.9em;
        line-height: 1.4;
    }
`;

// Style hinzufügen
const analyticsStyleSheet = document.createElement('style');
analyticsStyleSheet.textContent = analyticsCSS;
document.head.appendChild(analyticsStyleSheet);

// Global instance
window.behavioralAnalytics = new BehavioralAnalyticsDashboard();
