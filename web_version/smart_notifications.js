// Smart Notification System für Enhanced Learning Platform
class SmartNotificationSystem {
    constructor() {
        this.notifications = new Map();
        this.notificationQueue = [];
        this.userPreferences = this.loadUserPreferences();
        this.learningPatterns = this.loadLearningPatterns();
        this.notificationHistory = [];
        this.adaptiveScheduler = new AdaptiveScheduler();
        
        this.notificationTypes = {
            REMINDER: 'reminder',
            ACHIEVEMENT: 'achievement',
            STREAK_WARNING: 'streak_warning',
            PERFORMANCE_UPDATE: 'performance_update',
            STUDY_SUGGESTION: 'study_suggestion',
            AI_INSIGHT: 'ai_insight',
            CHALLENGE: 'challenge',
            MILESTONE: 'milestone'
        };
        
        this.initializeNotificationSystem();
    }

    initializeNotificationSystem() {
        console.log('🔔 Smart Notification System initializing...');
        
        // Request Notification Permission
        this.requestNotificationPermission();
        
        // Setup Service Worker Messaging
        this.setupServiceWorkerMessaging();
        
        // Initialize Adaptive Scheduler
        this.setupAdaptiveScheduler();
        
        // Setup Event Listeners
        this.setupEventListeners();
        
        // Load Scheduled Notifications
        this.loadScheduledNotifications();
        
        console.log('✅ Smart Notification System ready');
    }

    async requestNotificationPermission() {
        if (!('Notification' in window)) {
            console.warn('📱 Browser unterstützt keine Notifications');
            return false;
        }

        if (Notification.permission === 'granted') {
            console.log('✅ Notification permission already granted');
            return true;
        }

        if (Notification.permission === 'denied') {
            console.warn('❌ Notification permission denied');
            return false;
        }

        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                console.log('✅ Notification permission granted');
                this.showWelcomeNotification();
                return true;
            } else {
                console.warn('❌ Notification permission denied by user');
                return false;
            }
        } catch (error) {
            console.error('💥 Error requesting notification permission:', error);
            return false;
        }
    }

    showWelcomeNotification() {
        this.createNotification({
            type: this.notificationTypes.MILESTONE,
            title: '🎉 Willkommen!',
            body: 'Intelligente Benachrichtigungen aktiviert. Wir helfen Ihnen beim Lernen!',
            icon: '/icons/icon-192x192.png',
            tag: 'welcome',
            requireInteraction: false,
            actions: [
                {
                    action: 'settings',
                    title: '⚙️ Einstellungen',
                    icon: '/icons/settings.png'
                }
            ]
        });
    }

    createNotification(options) {
        const defaultOptions = {
            icon: '/icons/icon-192x192.png',
            badge: '/icons/badge-72x72.png',
            image: null,
            vibrate: [200, 100, 200],
            requireInteraction: false,
            silent: this.userPreferences.silentMode || false,
            timestamp: Date.now(),
            data: {
                url: '/cybersecurity_training.html',
                analytics: {
                    type: options.type,
                    createdAt: new Date().toISOString()
                }
            }
        };

        const notificationOptions = { ...defaultOptions, ...options };
        
        // Check if notification should be shown based on user preferences
        if (!this.shouldShowNotification(notificationOptions)) {
            console.log('🔇 Notification suppressed due to user preferences');
            return null;
        }

        // Create notification
        const notification = new Notification(notificationOptions.title, notificationOptions);
        
        // Add click handler
        notification.onclick = (event) => {
            event.preventDefault();
            this.handleNotificationClick(notificationOptions);
            notification.close();
        };

        // Track notification
        this.trackNotification(notificationOptions);
        
        return notification;
    }

    shouldShowNotification(options) {
        // Check user preferences
        if (!this.userPreferences.enabled) return false;
        if (this.userPreferences.quietHours && this.isQuietHours()) return false;
        if (!this.userPreferences.types[options.type]) return false;
        
        // Check frequency limits
        if (this.hasExceededFrequencyLimit(options.type)) return false;
        
        // Check if user is currently active (don't show if actively using app)
        if (this.isUserActive() && options.type !== this.notificationTypes.ACHIEVEMENT) {
            return false;
        }
        
        return true;
    }

    isQuietHours() {
        const now = new Date();
        const currentHour = now.getHours();
        const quietStart = this.userPreferences.quietHours.start;
        const quietEnd = this.userPreferences.quietHours.end;
        
        if (quietStart <= quietEnd) {
            return currentHour >= quietStart && currentHour < quietEnd;
        } else {
            // Overnight quiet hours (e.g., 22:00 to 08:00)
            return currentHour >= quietStart || currentHour < quietEnd;
        }
    }

    setupAdaptiveScheduler() {
        // Analysiere Lernmuster und erstelle intelligente Benachrichtigungen
        this.adaptiveScheduler.analyzeLearningPatterns(this.learningPatterns);
        
        // Schedule verschiedene Arten von Benachrichtigungen
        this.scheduleStreakReminders();
        this.scheduleStudySuggestions();
        this.schedulePerformanceUpdates();
        this.scheduleChallengeNotifications();
    }

    scheduleStreakReminders() {
        const streakData = this.getStreakData();
        
        if (streakData.current > 0) {
            // Streak in Gefahr - erinnere nach 20 Stunden ohne Aktivität
            const lastActivity = new Date(streakData.lastActivity);
            const warningTime = new Date(lastActivity.getTime() + (20 * 60 * 60 * 1000));
            
            if (warningTime > new Date()) {
                this.scheduleNotification({
                    type: this.notificationTypes.STREAK_WARNING,
                    title: `🔥 Ihre ${streakData.current}-Tage Streak ist in Gefahr!`,
                    body: 'Lösen Sie eine Frage, um Ihre Lernstreak zu erhalten.',
                    scheduledFor: warningTime,
                    priority: 'high'
                });
            }
        }
        
        // Tägliche Streak-Erinnerung zur optimalen Zeit
        const optimalTime = this.adaptiveScheduler.getOptimalStudyTime();
        this.scheduleRecurringNotification({
            type: this.notificationTypes.REMINDER,
            title: '📚 Zeit zum Lernen!',
            body: 'Ihre tägliche Lerneinheit wartet auf Sie.',
            time: optimalTime,
            recurrence: 'daily'
        });
    }

    scheduleStudySuggestions() {
        // Analysiere schwache Bereiche und schlage gezieltes Lernen vor
        const weakAreas = this.getWeakPerformanceAreas();
        
        weakAreas.forEach(area => {
            const suggestion = this.generateStudySuggestion(area);
            
            this.scheduleNotification({
                type: this.notificationTypes.STUDY_SUGGESTION,
                title: `💡 Verbesserungsvorschlag: ${area.category}`,
                body: suggestion.message,
                scheduledFor: suggestion.suggestedTime,
                data: {
                    category: area.category,
                    difficulty: area.suggestedDifficulty,
                    questionCount: suggestion.questionCount
                }
            });
        });
    }

    generateAIInsightNotification(insight) {
        const notification = {
            type: this.notificationTypes.AI_INSIGHT,
            title: '🤖 KI-Lerntipp',
            body: insight.message,
            data: {
                insight: insight.details,
                confidence: insight.confidence,
                actionable: insight.actionable
            },
            actions: [
                {
                    action: 'apply',
                    title: '✅ Anwenden',
                    icon: '/icons/apply.png'
                },
                {
                    action: 'learn_more',
                    title: '📖 Mehr erfahren',
                    icon: '/icons/learn.png'
                }
            ]
        };

        this.createNotification(notification);
    }

    createAchievementNotification(achievement) {
        const notification = {
            type: this.notificationTypes.ACHIEVEMENT,
            title: `🏆 Achievement freigeschaltet!`,
            body: `${achievement.name}: ${achievement.description}`,
            icon: '/icons/achievement.png',
            image: achievement.image || '/images/achievement-banner.png',
            requireInteraction: true,
            vibrate: [200, 100, 200, 100, 200],
            data: {
                achievement: achievement,
                xpReward: achievement.xp
            },
            actions: [
                {
                    action: 'view',
                    title: '👀 Anzeigen',
                    icon: '/icons/view.png'
                },
                {
                    action: 'share',
                    title: '📤 Teilen',
                    icon: '/icons/share.png'
                }
            ]
        };

        this.createNotification(notification);
        
        // Zusätzlich: Confetti-Animation wenn App geöffnet ist
        if (this.isUserActive()) {
            this.triggerConfettiAnimation();
        }
    }

    createPerformanceUpdateNotification(performanceData) {
        const trend = performanceData.trend;
        const emoji = trend === 'improving' ? '📈' : trend === 'declining' ? '📉' : '📊';
        
        const notification = {
            type: this.notificationTypes.PERFORMANCE_UPDATE,
            title: `${emoji} Leistungsupdate`,
            body: this.generatePerformanceMessage(performanceData),
            data: {
                performance: performanceData,
                recommendations: performanceData.recommendations
            },
            actions: [
                {
                    action: 'view_details',
                    title: '📊 Details',
                    icon: '/icons/analytics.png'
                }
            ]
        };

        this.createNotification(notification);
    }

    createChallengeNotification(challenge) {
        const notification = {
            type: this.notificationTypes.CHALLENGE,
            title: `🎯 Neue Herausforderung!`,
            body: `${challenge.title}: ${challenge.description}`,
            data: {
                challenge: challenge,
                reward: challenge.reward,
                deadline: challenge.deadline
            },
            actions: [
                {
                    action: 'accept',
                    title: '🚀 Annehmen',
                    icon: '/icons/accept.png'
                },
                {
                    action: 'remind_later',
                    title: '⏰ Später erinnern',
                    icon: '/icons/remind.png'
                }
            ]
        };

        this.createNotification(notification);
    }

    handleNotificationClick(notificationOptions) {
        // Analytics
        this.trackNotificationInteraction('click', notificationOptions);
        
        // Open app
        if (notificationOptions.data?.url) {
            window.focus();
            
            // Navigate to specific section if specified
            if (notificationOptions.data.section) {
                this.navigateToSection(notificationOptions.data.section);
            }
        }
        
        // Handle specific actions
        switch (notificationOptions.type) {
            case this.notificationTypes.ACHIEVEMENT:
                this.showAchievementModal(notificationOptions.data.achievement);
                break;
                
            case this.notificationTypes.STUDY_SUGGESTION:
                this.startSuggestedStudySession(notificationOptions.data);
                break;
                
            case this.notificationTypes.CHALLENGE:
                this.showChallengeModal(notificationOptions.data.challenge);
                break;
                
            case this.notificationTypes.AI_INSIGHT:
                this.showAIInsightModal(notificationOptions.data.insight);
                break;
        }
    }

    scheduleNotification(options) {
        const scheduledNotification = {
            id: this.generateNotificationId(),
            ...options,
            scheduled: true,
            createdAt: new Date()
        };
        
        // Store in scheduled notifications
        const scheduledNotifications = JSON.parse(
            localStorage.getItem('scheduledNotifications') || '[]'
        );
        scheduledNotifications.push(scheduledNotification);
        localStorage.setItem('scheduledNotifications', JSON.stringify(scheduledNotifications));
        
        // Set timeout for notification
        const delay = new Date(options.scheduledFor) - new Date();
        if (delay > 0) {
            setTimeout(() => {
                this.createNotification(scheduledNotification);
                this.removeScheduledNotification(scheduledNotification.id);
            }, delay);
        }
        
        console.log(`⏰ Notification scheduled for ${options.scheduledFor}`);
    }

    scheduleRecurringNotification(options) {
        const recurringNotification = {
            id: this.generateNotificationId(),
            ...options,
            recurring: true,
            createdAt: new Date()
        };
        
        // Store in recurring notifications
        const recurringNotifications = JSON.parse(
            localStorage.getItem('recurringNotifications') || '[]'
        );
        recurringNotifications.push(recurringNotification);
        localStorage.setItem('recurringNotifications', JSON.stringify(recurringNotifications));
        
        // Schedule first occurrence
        this.scheduleNextRecurrence(recurringNotification);
        
        console.log(`🔄 Recurring notification scheduled: ${options.recurrence}`);
    }

    loadScheduledNotifications() {
        const scheduledNotifications = JSON.parse(
            localStorage.getItem('scheduledNotifications') || '[]'
        );
        
        scheduledNotifications.forEach(notification => {
            const delay = new Date(notification.scheduledFor) - new Date();
            if (delay > 0) {
                setTimeout(() => {
                    this.createNotification(notification);
                    this.removeScheduledNotification(notification.id);
                }, delay);
            }
        });
        
        // Load recurring notifications
        const recurringNotifications = JSON.parse(
            localStorage.getItem('recurringNotifications') || '[]'
        );
        
        recurringNotifications.forEach(notification => {
            this.scheduleNextRecurrence(notification);
        });
    }

    updateUserPreferences(newPreferences) {
        this.userPreferences = { ...this.userPreferences, ...newPreferences };
        localStorage.setItem('notificationPreferences', JSON.stringify(this.userPreferences));
        
        console.log('⚙️ Notification preferences updated');
        
        // Restart scheduler with new preferences
        this.setupAdaptiveScheduler();
    }

    renderNotificationSettings() {
        return `
            <div class="notification-settings">
                <h3>🔔 Benachrichtigungseinstellungen</h3>
                
                <div class="setting-group">
                    <label class="setting-item">
                        <input type="checkbox" ${this.userPreferences.enabled ? 'checked' : ''} 
                               onchange="smartNotifications.toggleNotifications(this.checked)">
                        <span>Benachrichtigungen aktivieren</span>
                    </label>
                </div>
                
                <div class="setting-group">
                    <h4>Benachrichtigungstypen</h4>
                    ${Object.values(this.notificationTypes).map(type => `
                        <label class="setting-item">
                            <input type="checkbox" ${this.userPreferences.types[type] ? 'checked' : ''} 
                                   onchange="smartNotifications.toggleNotificationType('${type}', this.checked)">
                            <span>${this.getNotificationTypeLabel(type)}</span>
                        </label>
                    `).join('')}
                </div>
                
                <div class="setting-group">
                    <h4>Ruhezeiten</h4>
                    <label class="setting-item">
                        <input type="checkbox" ${this.userPreferences.quietHours.enabled ? 'checked' : ''} 
                               onchange="smartNotifications.toggleQuietHours(this.checked)">
                        <span>Ruhezeiten aktivieren</span>
                    </label>
                    
                    <div class="time-range">
                        <label>Von: 
                            <input type="time" value="${this.userPreferences.quietHours.start.toString().padStart(2, '0')}:00" 
                                   onchange="smartNotifications.setQuietHourStart(this.value)">
                        </label>
                        <label>Bis: 
                            <input type="time" value="${this.userPreferences.quietHours.end.toString().padStart(2, '0')}:00" 
                                   onchange="smartNotifications.setQuietHourEnd(this.value)">
                        </label>
                    </div>
                </div>
                
                <div class="setting-group">
                    <h4>Häufigkeit</h4>
                    <select onchange="smartNotifications.setFrequency(this.value)" 
                            value="${this.userPreferences.frequency}">
                        <option value="low">Niedrig (1-2 pro Tag)</option>
                        <option value="medium">Mittel (3-5 pro Tag)</option>
                        <option value="high">Hoch (unbegrenzt)</option>
                    </select>
                </div>
                
                <div class="setting-actions">
                    <button onclick="smartNotifications.testNotification()" class="btn-secondary">
                        🧪 Test-Benachrichtigung
                    </button>
                    <button onclick="smartNotifications.clearNotificationHistory()" class="btn-secondary">
                        🗑️ Verlauf löschen
                    </button>
                </div>
            </div>
        `;
    }

    testNotification() {
        this.createNotification({
            type: this.notificationTypes.REMINDER,
            title: '🧪 Test-Benachrichtigung',
            body: 'Das ist eine Test-Benachrichtigung. Alles funktioniert!',
            tag: 'test'
        });
    }

    // Analytics und Tracking
    trackNotification(notification) {
        const trackingData = {
            id: this.generateNotificationId(),
            type: notification.type,
            title: notification.title,
            createdAt: new Date(),
            shown: true,
            clicked: false,
            dismissed: false
        };
        
        this.notificationHistory.push(trackingData);
        this.saveNotificationHistory();
    }

    trackNotificationInteraction(action, notification) {
        const history = this.notificationHistory.find(n => 
            n.title === notification.title && n.type === notification.type
        );
        
        if (history) {
            history[action] = true;
            history.interactionTime = new Date();
            this.saveNotificationHistory();
        }
        
        // Send to analytics
        if (window.advancedAnalytics) {
            window.advancedAnalytics.trackEvent('notification_interaction', {
                action,
                type: notification.type,
                title: notification.title
            });
        }
    }

    generateNotificationReport() {
        const report = {
            totalSent: this.notificationHistory.length,
            clickThroughRate: this.calculateClickThroughRate(),
            typeBreakdown: this.getNotificationTypeBreakdown(),
            optimalTimes: this.getOptimalNotificationTimes(),
            userEngagement: this.calculateNotificationEngagement()
        };
        
        return report;
    }

    // Hilfsmethoden
    loadUserPreferences() {
        const defaultPreferences = {
            enabled: true,
            silentMode: false,
            frequency: 'medium',
            types: {
                [this.notificationTypes.REMINDER]: true,
                [this.notificationTypes.ACHIEVEMENT]: true,
                [this.notificationTypes.STREAK_WARNING]: true,
                [this.notificationTypes.PERFORMANCE_UPDATE]: true,
                [this.notificationTypes.STUDY_SUGGESTION]: true,
                [this.notificationTypes.AI_INSIGHT]: true,
                [this.notificationTypes.CHALLENGE]: true,
                [this.notificationTypes.MILESTONE]: true
            },
            quietHours: {
                enabled: true,
                start: 22, // 22:00
                end: 8     // 08:00
            }
        };
        
        const saved = localStorage.getItem('notificationPreferences');
        return saved ? { ...defaultPreferences, ...JSON.parse(saved) } : defaultPreferences;
    }

    loadLearningPatterns() {
        const saved = localStorage.getItem('learningPatterns');
        return saved ? JSON.parse(saved) : {
            preferredStudyTimes: [],
            averageSessionLength: 15,
            strongCategories: [],
            weakCategories: [],
            responsePatterns: []
        };
    }

    generateNotificationId() {
        return 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    saveNotificationHistory() {
        // Behalte nur die letzten 1000 Benachrichtigungen
        if (this.notificationHistory.length > 1000) {
            this.notificationHistory = this.notificationHistory.slice(-1000);
        }
        
        localStorage.setItem('notificationHistory', JSON.stringify(this.notificationHistory));
    }

    isUserActive() {
        // Prüfe ob Benutzer gerade aktiv ist (Mausaktivität, Tastatureingaben, etc.)
        const lastActivity = localStorage.getItem('lastUserActivity');
        if (!lastActivity) return false;
        
        const timeDiff = Date.now() - parseInt(lastActivity);
        return timeDiff < 30000; // Aktiv wenn letzte Aktivität < 30 Sekunden
    }

    setupEventListeners() {
        // Track user activity
        ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, () => {
                localStorage.setItem('lastUserActivity', Date.now().toString());
            }, { passive: true });
        });

        // Listen for platform events
        window.addEventListener('questionAnswered', (event) => {
            this.onQuestionAnswered(event.detail);
        });

        window.addEventListener('achievementUnlocked', (event) => {
            this.createAchievementNotification(event.detail);
        });

        window.addEventListener('streakUpdate', (event) => {
            this.onStreakUpdate(event.detail);
        });
    }

    onQuestionAnswered(data) {
        // Update learning patterns
        this.updateLearningPatterns(data);
        
        // Check for performance insights
        this.checkForPerformanceInsights(data);
    }

    onStreakUpdate(streakData) {
        if (streakData.newRecord) {
            this.createNotification({
                type: this.notificationTypes.MILESTONE,
                title: '🔥 Neuer Streak-Rekord!',
                body: `Glückwunsch! ${streakData.length} Tage in Folge - das ist Ihr neuer Rekord!`,
                requireInteraction: true
            });
        }
    }
}

// Adaptive Scheduler Klasse
class AdaptiveScheduler {
    constructor() {
        this.patterns = new Map();
        this.optimalTimes = [];
    }

    analyzeLearningPatterns(patterns) {
        // Analysiere wann der Nutzer am besten lernt
        this.optimalTimes = this.findOptimalStudyTimes(patterns);
        console.log('🧠 Optimal study times identified:', this.optimalTimes);
    }

    findOptimalStudyTimes(patterns) {
        // Implementierung der Analyse von Lernmustern
        // Basierend auf Performance zu verschiedenen Tageszeiten
        const hourlyPerformance = new Array(24).fill(0).map(() => ({ total: 0, correct: 0 }));
        
        patterns.responsePatterns?.forEach(response => {
            const hour = new Date(response.timestamp).getHours();
            hourlyPerformance[hour].total++;
            if (response.isCorrect) {
                hourlyPerformance[hour].correct++;
            }
        });
        
        // Finde Stunden mit höchster Accuracy und ausreichend Daten
        return hourlyPerformance
            .map((data, hour) => ({
                hour,
                accuracy: data.total > 0 ? data.correct / data.total : 0,
                sampleSize: data.total
            }))
            .filter(data => data.sampleSize >= 5) // Mindestens 5 Antworten
            .sort((a, b) => b.accuracy - a.accuracy)
            .slice(0, 3) // Top 3 Stunden
            .map(data => data.hour);
    }

    getOptimalStudyTime() {
        if (this.optimalTimes.length === 0) {
            // Standard-Zeiten falls keine Daten verfügbar
            return new Date().setHours(19, 0, 0, 0); // 19:00 Uhr
        }
        
        // Nächste optimale Zeit finden
        const now = new Date();
        const currentHour = now.getHours();
        
        for (const hour of this.optimalTimes) {
            if (hour > currentHour) {
                const nextTime = new Date();
                nextTime.setHours(hour, 0, 0, 0);
                return nextTime;
            }
        }
        
        // Nächster Tag, erste optimale Zeit
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(this.optimalTimes[0], 0, 0, 0);
        return tomorrow;
    }
}

// Global Smart Notification Instance
window.smartNotifications = new SmartNotificationSystem();
