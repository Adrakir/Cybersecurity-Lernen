// Master Integration Suite für Enhanced Learning Platform v3.0
class MasterIntegrationSuite {
    constructor() {
        this.version = '3.0.0';
        this.systems = new Map();
        this.eventBus = new EventBus();
        this.healthStatus = new Map();
        this.integrationMetrics = {
            totalEvents: 0,
            systemUptime: new Map(),
            errorCount: 0,
            performanceMetrics: new Map()
        };
        
        this.systemDependencies = new Map();
        this.initializationOrder = [];
        this.configurationManager = new ConfigurationManager();
        
        this.initializeMasterSuite();
    }

    initializeMasterSuite() {
        console.log(`🎯 Master Integration Suite v${this.version} initializing...`);
        
        // Setup System Dependencies
        this.defineDependencies();
        
        // Initialize Configuration Manager
        this.configurationManager.loadConfiguration();
        
        // Setup Health Monitoring
        this.setupHealthMonitoring();
        
        // Setup Error Handling
        this.setupGlobalErrorHandling();
        
        // Initialize Event Bus
        this.initializeEventBus();
        
        // Start System Integration
        this.startSystemIntegration();
        
        console.log('✅ Master Integration Suite ready');
    }

    defineDependencies() {
        // Definiere System-Abhängigkeiten für korrekte Initialisierung
        this.systemDependencies.set('performanceOptimizer', []);
        this.systemDependencies.set('moduleLoader', ['performanceOptimizer']);
        this.systemDependencies.set('enhancedPlatform', ['moduleLoader']);
        this.systemDependencies.set('aiLearningService', ['enhancedPlatform']);
        this.systemDependencies.set('gamificationEngine', ['enhancedPlatform']);
        this.systemDependencies.set('adaptiveQuizEngine', ['enhancedPlatform', 'aiLearningService']);
        this.systemDependencies.set('advancedAnalytics', ['enhancedPlatform', 'gamificationEngine']);
        this.systemDependencies.set('smartNotifications', ['enhancedPlatform', 'advancedAnalytics']);
        this.systemDependencies.set('collaborationSystem', ['enhancedPlatform', 'gamificationEngine']);
        
        // Bestimme Initialisierungsreihenfolge
        this.initializationOrder = this.topologicalSort();
    }

    topologicalSort() {
        const visited = new Set();
        const result = [];
        
        const visit = (system) => {
            if (visited.has(system)) return;
            visited.add(system);
            
            const dependencies = this.systemDependencies.get(system) || [];
            dependencies.forEach(dep => visit(dep));
            result.push(system);
        };
        
        Array.from(this.systemDependencies.keys()).forEach(system => visit(system));
        return result;
    }

    async startSystemIntegration() {
        console.log('🚀 Starting system integration in dependency order...');
        
        for (const systemName of this.initializationOrder) {
            try {
                await this.initializeSystem(systemName);
                this.healthStatus.set(systemName, 'healthy');
                this.integrationMetrics.systemUptime.set(systemName, Date.now());
            } catch (error) {
                console.error(`💥 Failed to initialize ${systemName}:`, error);
                this.healthStatus.set(systemName, 'failed');
                this.integrationMetrics.errorCount++;
                
                // Continue with non-critical systems
                if (this.isCriticalSystem(systemName)) {
                    throw new Error(`Critical system ${systemName} failed to initialize`);
                }
            }
        }
        
        // Setup System Bridges
        this.setupSystemBridges();
        
        // Start Health Monitoring
        this.startHealthMonitoring();
        
        // Trigger Integration Complete Event
        this.eventBus.emit('integration:complete', {
            systems: Array.from(this.systems.keys()),
            metrics: this.integrationMetrics
        });
    }

    async initializeSystem(systemName) {
        const startTime = performance.now();
        
        switch (systemName) {
            case 'performanceOptimizer':
                await this.initializePerformanceOptimizer();
                break;
            case 'moduleLoader':
                await this.initializeModuleLoader();
                break;
            case 'enhancedPlatform':
                await this.initializeEnhancedPlatform();
                break;
            case 'aiLearningService':
                await this.initializeAILearningService();
                break;
            case 'gamificationEngine':
                await this.initializeGamificationEngine();
                break;
            case 'adaptiveQuizEngine':
                await this.initializeAdaptiveQuizEngine();
                break;
            case 'advancedAnalytics':
                await this.initializeAdvancedAnalytics();
                break;
            case 'smartNotifications':
                await this.initializeSmartNotifications();
                break;
            case 'collaborationSystem':
                await this.initializeCollaborationSystem();
                break;
            default:
                throw new Error(`Unknown system: ${systemName}`);
        }
        
        const initTime = performance.now() - startTime;
        this.integrationMetrics.performanceMetrics.set(systemName, initTime);
        
        console.log(`✅ ${systemName} initialized in ${initTime.toFixed(2)}ms`);
    }

    async initializePerformanceOptimizer() {
        if (typeof PerformanceOptimizer !== 'undefined') {
            const optimizer = window.performanceOptimizer || new PerformanceOptimizer();
            this.systems.set('performanceOptimizer', optimizer);
            
            // Configure performance thresholds
            optimizer.thresholds = this.configurationManager.get('performance.thresholds');
        }
    }

    async initializeModuleLoader() {
        if (typeof ModuleLoader !== 'undefined') {
            const loader = window.moduleLoader || new ModuleLoader();
            this.systems.set('moduleLoader', loader);
            
            // Wait for critical modules
            await loader.waitForModule('enhanced_platform.js');
        }
    }

    async initializeEnhancedPlatform() {
        if (typeof EnhancedLearningPlatform !== 'undefined') {
            const platform = window.platform || new EnhancedLearningPlatform();
            this.systems.set('enhancedPlatform', platform);
            
            // Setup platform integration events
            this.setupPlatformIntegration(platform);
        }
    }

    async initializeAILearningService() {
        if (typeof AILearningService !== 'undefined') {
            const aiService = window.aiService || new AILearningService();
            this.systems.set('aiLearningService', aiService);
            
            // Configure AI settings
            const aiConfig = this.configurationManager.get('ai');
            if (aiConfig) {
                await aiService.updateConfiguration(aiConfig);
            }
        }
    }

    async initializeGamificationEngine() {
        if (typeof GamificationEngine !== 'undefined') {
            const gamification = window.gamificationEngine || new GamificationEngine();
            this.systems.set('gamificationEngine', gamification);
            
            // Setup achievement integration
            this.setupGamificationIntegration(gamification);
        }
    }

    async initializeAdaptiveQuizEngine() {
        if (typeof AdaptiveQuizEngine !== 'undefined') {
            const quizEngine = window.adaptiveQuizEngine || new AdaptiveQuizEngine();
            this.systems.set('adaptiveQuizEngine', quizEngine);
            
            // Connect to AI service
            const aiService = this.systems.get('aiLearningService');
            if (aiService) {
                quizEngine.setAIService(aiService);
            }
        }
    }

    async initializeAdvancedAnalytics() {
        if (typeof AdvancedAnalytics !== 'undefined') {
            const analytics = window.advancedAnalytics || new AdvancedAnalytics();
            this.systems.set('advancedAnalytics', analytics);
            
            // Setup analytics integration
            this.setupAnalyticsIntegration(analytics);
        }
    }

    async initializeSmartNotifications() {
        if (typeof SmartNotificationSystem !== 'undefined') {
            const notifications = window.smartNotifications || new SmartNotificationSystem();
            this.systems.set('smartNotifications', notifications);
            
            // Configure notification preferences
            const notificationConfig = this.configurationManager.get('notifications');
            if (notificationConfig) {
                notifications.updateUserPreferences(notificationConfig);
            }
        }
    }

    async initializeCollaborationSystem() {
        if (typeof CollaborationSystem !== 'undefined') {
            const collaboration = window.collaboration || new CollaborationSystem();
            this.systems.set('collaborationSystem', collaboration);
            
            // Setup collaboration integration
            this.setupCollaborationIntegration(collaboration);
        }
    }

    setupSystemBridges() {
        console.log('🌉 Setting up system bridges...');
        
        // Quiz Engine ↔ Analytics Bridge
        this.bridgeQuizAnalytics();
        
        // Gamification ↔ Notifications Bridge
        this.bridgeGamificationNotifications();
        
        // AI Service ↔ Analytics Bridge
        this.bridgeAIAnalytics();
        
        // Collaboration ↔ Gamification Bridge
        this.bridgeCollaborationGamification();
        
        // Performance ↔ All Systems Bridge
        this.bridgePerformanceMonitoring();
    }

    bridgeQuizAnalytics() {
        const quizEngine = this.systems.get('adaptiveQuizEngine');
        const analytics = this.systems.get('advancedAnalytics');
        
        if (quizEngine && analytics) {
            this.eventBus.on('quiz:questionAnswered', (data) => {
                analytics.trackQuestionAnswered(data);
            });
            
            this.eventBus.on('quiz:completed', (data) => {
                analytics.trackQuizCompleted(data);
            });
        }
    }

    bridgeGamificationNotifications() {
        const gamification = this.systems.get('gamificationEngine');
        const notifications = this.systems.get('smartNotifications');
        
        if (gamification && notifications) {
            this.eventBus.on('gamification:achievementUnlocked', (achievement) => {
                notifications.createAchievementNotification(achievement);
            });
            
            this.eventBus.on('gamification:levelUp', (levelData) => {
                notifications.createNotification({
                    type: 'milestone',
                    title: `🎉 Level ${levelData.newLevel} erreicht!`,
                    body: `Glückwunsch! Sie haben Level ${levelData.newLevel} erreicht.`
                });
            });
        }
    }

    bridgeAIAnalytics() {
        const aiService = this.systems.get('aiLearningService');
        const analytics = this.systems.get('advancedAnalytics');
        
        if (aiService && analytics) {
            this.eventBus.on('ai:interactionComplete', (data) => {
                analytics.trackAIInteraction(data);
            });
            
            this.eventBus.on('ai:insightGenerated', (insight) => {
                analytics.trackEvent('ai_insight', insight);
            });
        }
    }

    bridgeCollaborationGamification() {
        const collaboration = this.systems.get('collaborationSystem');
        const gamification = this.systems.get('gamificationEngine');
        
        if (collaboration && gamification) {
            this.eventBus.on('collaboration:sessionComplete', (data) => {
                gamification.updateCollaborationProgress(data);
            });
            
            this.eventBus.on('collaboration:helpProvided', (data) => {
                gamification.awardCollaborationPoints(data.userId, 10);
            });
        }
    }

    bridgePerformanceMonitoring() {
        const performance = this.systems.get('performanceOptimizer');
        
        if (performance) {
            // Monitor all system events for performance impact
            this.eventBus.onAny((eventName, data) => {
                performance.trackEvent(eventName, data);
            });
        }
    }

    initializeEventBus() {
        // Global Event Bus für System-übergreifende Kommunikation
        this.eventBus.on('system:error', (error) => {
            this.handleSystemError(error);
        });
        
        this.eventBus.on('system:warning', (warning) => {
            this.handleSystemWarning(warning);
        });
        
        this.eventBus.on('user:action', (action) => {
            this.trackUserAction(action);
        });
        
        // Performance Events
        this.eventBus.on('performance:warning', (data) => {
            console.warn('⚠️ Performance warning:', data);
        });
        
        // Memory Events
        this.eventBus.on('memory:high', (data) => {
            this.triggerMemoryOptimization();
        });
    }

    setupHealthMonitoring() {
        // Health Check für alle Systeme
        setInterval(() => {
            this.performHealthCheck();
        }, 30000); // Alle 30 Sekunden
        
        // System Metrics Collection
        setInterval(() => {
            this.collectSystemMetrics();
        }, 10000); // Alle 10 Sekunden
    }

    performHealthCheck() {
        this.systems.forEach((system, name) => {
            try {
                const isHealthy = this.checkSystemHealth(system, name);
                this.healthStatus.set(name, isHealthy ? 'healthy' : 'degraded');
            } catch (error) {
                this.healthStatus.set(name, 'failed');
                this.handleSystemError({ system: name, error });
            }
        });
        
        // Emit health status
        this.eventBus.emit('health:status', Object.fromEntries(this.healthStatus));
    }

    checkSystemHealth(system, name) {
        // Basic health checks
        if (!system) return false;
        
        // System-specific health checks
        switch (name) {
            case 'performanceOptimizer':
                return system.connectionStatus !== 'failed';
            case 'aiLearningService':
                return system.isAvailable && !system.hasErrors;
            case 'gamificationEngine':
                return system.userProgress !== null;
            default:
                return true; // Basic existence check
        }
    }

    collectSystemMetrics() {
        this.systems.forEach((system, name) => {
            try {
                const metrics = this.getSystemMetrics(system, name);
                this.integrationMetrics.performanceMetrics.set(name, metrics);
            } catch (error) {
                console.warn(`Failed to collect metrics for ${name}:`, error);
            }
        });
    }

    getSystemMetrics(system, name) {
        const baseMetrics = {
            uptime: Date.now() - (this.integrationMetrics.systemUptime.get(name) || Date.now()),
            memoryUsage: this.getSystemMemoryUsage(system),
            eventCount: this.getSystemEventCount(name)
        };
        
        // System-specific metrics
        switch (name) {
            case 'advancedAnalytics':
                return {
                    ...baseMetrics,
                    sessionsTracked: system.sessionData?.events?.length || 0,
                    eventsProcessed: system.realTimeEvents?.length || 0
                };
            case 'gamificationEngine':
                return {
                    ...baseMetrics,
                    achievementsEarned: Object.keys(system.userProgress?.achievements || {}).length,
                    currentLevel: system.getCurrentLevel()
                };
            default:
                return baseMetrics;
        }
    }

    setupGlobalErrorHandling() {
        // Global Error Handler
        window.addEventListener('error', (event) => {
            this.handleGlobalError(event.error);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            this.handleGlobalError(event.reason);
        });
        
        // Console Error Interception
        const originalError = console.error;
        console.error = (...args) => {
            this.handleConsoleError(args);
            originalError.apply(console, args);
        };
    }

    handleGlobalError(error) {
        this.integrationMetrics.errorCount++;
        
        this.eventBus.emit('system:error', {
            error: error,
            timestamp: new Date(),
            systemState: this.getSystemState()
        });
        
        // Auto-recovery versuchen
        this.attemptAutoRecovery(error);
    }

    attemptAutoRecovery(error) {
        console.log('🔧 Attempting auto-recovery...');
        
        // Memory cleanup
        if (error.message?.includes('memory') || error.name === 'OutOfMemoryError') {
            this.triggerMemoryOptimization();
        }
        
        // System restart für bestimmte kritische Fehler
        if (this.isCriticalError(error)) {
            this.restartFailedSystems();
        }
    }

    triggerMemoryOptimization() {
        console.log('🧹 Triggering memory optimization...');
        
        const performance = this.systems.get('performanceOptimizer');
        if (performance) {
            performance.triggerMemoryCleanup();
        }
        
        // Clear analytics history
        const analytics = this.systems.get('advancedAnalytics');
        if (analytics) {
            analytics.clearOldData();
        }
        
        // Clear notification history
        const notifications = this.systems.get('smartNotifications');
        if (notifications) {
            notifications.clearNotificationHistory();
        }
    }

    generateMasterReport() {
        const report = {
            platform: 'Enhanced Learning Platform',
            version: this.version,
            timestamp: new Date(),
            systemStatus: Object.fromEntries(this.healthStatus),
            integrationMetrics: this.integrationMetrics,
            systemReports: {},
            recommendations: []
        };
        
        // Collect individual system reports
        this.systems.forEach((system, name) => {
            try {
                if (typeof system.generateReport === 'function') {
                    report.systemReports[name] = system.generateReport();
                }
            } catch (error) {
                console.warn(`Failed to generate report for ${name}:`, error);
            }
        });
        
        // Generate master recommendations
        report.recommendations = this.generateMasterRecommendations();
        
        return report;
    }

    generateMasterRecommendations() {
        const recommendations = [];
        
        // System Health Recommendations
        this.healthStatus.forEach((status, system) => {
            if (status !== 'healthy') {
                recommendations.push({
                    type: 'system_health',
                    priority: status === 'failed' ? 'critical' : 'high',
                    system: system,
                    title: `${system} System ${status}`,
                    description: `Das ${system} System zeigt ${status} Status.`,
                    actions: this.getSystemRecoveryActions(system)
                });
            }
        });
        
        // Performance Recommendations
        const avgInitTime = Array.from(this.integrationMetrics.performanceMetrics.values())
            .reduce((sum, time) => sum + time, 0) / this.integrationMetrics.performanceMetrics.size;
        
        if (avgInitTime > 1000) {
            recommendations.push({
                type: 'performance',
                priority: 'medium',
                title: 'System-Initialisierung optimieren',
                description: `Durchschnittliche Initialisierungszeit: ${avgInitTime.toFixed(0)}ms`,
                actions: [
                    'Module-Loading optimieren',
                    'Lazy Loading erweitern',
                    'Critical Path reduzieren'
                ]
            });
        }
        
        // Error Rate Recommendations
        if (this.integrationMetrics.errorCount > 5) {
            recommendations.push({
                type: 'reliability',
                priority: 'high',
                title: 'Fehlerrate reduzieren',
                description: `${this.integrationMetrics.errorCount} Fehler erkannt`,
                actions: [
                    'Error Handling verbessern',
                    'Input Validation verstärken',
                    'Automated Testing implementieren'
                ]
            });
        }
        
        return recommendations;
    }

    renderMasterDashboard() {
        const report = this.generateMasterReport();
        
        return `
            <div class="master-dashboard">
                <div class="dashboard-header">
                    <div class="platform-info">
                        <h1>🎯 Enhanced Learning Platform v${this.version}</h1>
                        <p class="platform-tagline">KI-gestützte Cybersecurity-Ausbildung der nächsten Generation</p>
                    </div>
                    <div class="master-metrics">
                        <div class="metric-card">
                            <span class="metric-value">${this.systems.size}</span>
                            <span class="metric-label">Aktive Systeme</span>
                        </div>
                        <div class="metric-card">
                            <span class="metric-value">${this.getHealthySystemsCount()}</span>
                            <span class="metric-label">Gesunde Systeme</span>
                        </div>
                        <div class="metric-card">
                            <span class="metric-value">${this.integrationMetrics.totalEvents}</span>
                            <span class="metric-label">Events Verarbeitet</span>
                        </div>
                    </div>
                </div>
                
                <div class="system-status-grid">
                    ${this.renderSystemStatusCards()}
                </div>
                
                <div class="integration-features">
                    <h2>🚀 Platform Features</h2>
                    <div class="features-grid">
                        ${this.renderFeatureCards()}
                    </div>
                </div>
                
                <div class="master-recommendations">
                    <h2>💡 Master Empfehlungen</h2>
                    <div class="recommendations-list">
                        ${report.recommendations.map(rec => this.renderMasterRecommendation(rec)).join('')}
                    </div>
                </div>
                
                <div class="master-actions">
                    <button onclick="masterSuite.optimizeAllSystems()" class="btn-primary">
                        🚀 Alle Systeme optimieren
                    </button>
                    <button onclick="masterSuite.restartAllSystems()" class="btn-secondary">
                        🔄 Systeme neustarten
                    </button>
                    <button onclick="masterSuite.exportMasterReport()" class="btn-secondary">
                        📊 Master-Bericht exportieren
                    </button>
                    <button onclick="masterSuite.openSystemConsole()" class="btn-secondary">
                        🖥️ System-Konsole
                    </button>
                </div>
            </div>
        `;
    }

    renderSystemStatusCards() {
        return Array.from(this.systems.entries()).map(([name, system]) => {
            const status = this.healthStatus.get(name) || 'unknown';
            const uptime = this.getSystemUptime(name);
            
            return `
                <div class="system-card ${status}" data-system="${name}">
                    <div class="system-header">
                        <h3>${this.getSystemDisplayName(name)}</h3>
                        <span class="status-indicator ${status}"></span>
                    </div>
                    <div class="system-metrics">
                        <div class="metric">
                            <span class="metric-label">Status:</span>
                            <span class="metric-value ${status}">${this.getStatusText(status)}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Uptime:</span>
                            <span class="metric-value">${this.formatUptime(uptime)}</span>
                        </div>
                    </div>
                    <div class="system-actions">
                        <button onclick="masterSuite.inspectSystem('${name}')" class="btn-small">
                            🔍 Inspect
                        </button>
                        <button onclick="masterSuite.restartSystem('${name}')" class="btn-small">
                            🔄 Restart
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderFeatureCards() {
        const features = [
            {
                icon: '🤖',
                title: 'KI-Tutor',
                description: 'Intelligente Lernhilfe mit OpenAI',
                status: this.systems.has('aiLearningService')
            },
            {
                icon: '🎮',
                title: 'Gamification',
                description: 'Achievements & Level-System',
                status: this.systems.has('gamificationEngine')
            },
            {
                icon: '📊',
                title: 'Analytics',
                description: 'Detaillierte Lernstatistiken',
                status: this.systems.has('advancedAnalytics')
            },
            {
                icon: '🔔',
                title: 'Smart Notifications',
                description: 'Intelligente Benachrichtigungen',
                status: this.systems.has('smartNotifications')
            },
            {
                icon: '🤝',
                title: 'Collaboration',
                description: 'Team-Learning Features',
                status: this.systems.has('collaborationSystem')
            },
            {
                icon: '⚡',
                title: 'Performance',
                description: 'Optimierte Geschwindigkeit',
                status: this.systems.has('performanceOptimizer')
            }
        ];
        
        return features.map(feature => `
            <div class="feature-card ${feature.status ? 'active' : 'inactive'}">
                <div class="feature-icon">${feature.icon}</div>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
                <div class="feature-status">
                    ${feature.status ? '✅ Aktiv' : '❌ Inaktiv'}
                </div>
            </div>
        `).join('');
    }

    optimizeAllSystems() {
        console.log('🚀 Optimizing all systems...');
        
        this.systems.forEach((system, name) => {
            try {
                if (typeof system.optimize === 'function') {
                    system.optimize();
                }
            } catch (error) {
                console.warn(`Failed to optimize ${name}:`, error);
            }
        });
        
        this.showOptimizationComplete();
    }

    exportMasterReport() {
        const report = this.generateMasterReport();
        const blob = new Blob([JSON.stringify(report, null, 2)], 
            { type: 'application/json' });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `master-report-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Utility Methods
    isCriticalSystem(systemName) {
        const criticalSystems = ['enhancedPlatform', 'performanceOptimizer', 'moduleLoader'];
        return criticalSystems.includes(systemName);
    }

    getHealthySystemsCount() {
        return Array.from(this.healthStatus.values()).filter(status => status === 'healthy').length;
    }

    getSystemUptime(systemName) {
        const startTime = this.integrationMetrics.systemUptime.get(systemName);
        return startTime ? Date.now() - startTime : 0;
    }

    formatUptime(uptime) {
        const seconds = Math.floor(uptime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
        return `${seconds}s`;
    }

    getSystemDisplayName(systemName) {
        const displayNames = {
            'performanceOptimizer': 'Performance Optimizer',
            'moduleLoader': 'Module Loader',
            'enhancedPlatform': 'Enhanced Platform',
            'aiLearningService': 'KI Learning Service',
            'gamificationEngine': 'Gamification Engine',
            'adaptiveQuizEngine': 'Adaptive Quiz Engine',
            'advancedAnalytics': 'Advanced Analytics',
            'smartNotifications': 'Smart Notifications',
            'collaborationSystem': 'Collaboration System'
        };
        return displayNames[systemName] || systemName;
    }

    getStatusText(status) {
        const statusTexts = {
            'healthy': 'Gesund',
            'degraded': 'Beeinträchtigt',
            'failed': 'Fehlgeschlagen',
            'unknown': 'Unbekannt'
        };
        return statusTexts[status] || status;
    }
}

// Event Bus Implementation
class EventBus {
    constructor() {
        this.events = new Map();
        this.anyListeners = [];
    }

    on(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);
    }

    off(eventName, callback) {
        if (this.events.has(eventName)) {
            const callbacks = this.events.get(eventName);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    emit(eventName, data) {
        // Trigger specific event listeners
        if (this.events.has(eventName)) {
            this.events.get(eventName).forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in event listener for ${eventName}:`, error);
                }
            });
        }
        
        // Trigger any listeners
        this.anyListeners.forEach(callback => {
            try {
                callback(eventName, data);
            } catch (error) {
                console.error(`Error in any listener:`, error);
            }
        });
    }

    onAny(callback) {
        this.anyListeners.push(callback);
    }
}

// Configuration Manager
class ConfigurationManager {
    constructor() {
        this.config = new Map();
        this.defaultConfig = this.getDefaultConfiguration();
    }

    loadConfiguration() {
        // Load from localStorage
        const saved = localStorage.getItem('platformConfiguration');
        if (saved) {
            try {
                const parsedConfig = JSON.parse(saved);
                Object.entries(parsedConfig).forEach(([key, value]) => {
                    this.config.set(key, value);
                });
            } catch (error) {
                console.warn('Failed to load configuration:', error);
            }
        }
        
        // Merge with defaults
        Object.entries(this.defaultConfig).forEach(([key, value]) => {
            if (!this.config.has(key)) {
                this.config.set(key, value);
            }
        });
    }

    get(key) {
        return this.config.get(key);
    }

    set(key, value) {
        this.config.set(key, value);
        this.saveConfiguration();
    }

    saveConfiguration() {
        const configObject = Object.fromEntries(this.config);
        localStorage.setItem('platformConfiguration', JSON.stringify(configObject));
    }

    getDefaultConfiguration() {
        return {
            'performance.thresholds': {
                criticalRenderTime: 100,
                memoryWarning: 50 * 1024 * 1024,
                domNodeLimit: 1000,
                networkTimeout: 5000
            },
            'ai.provider': 'openai',
            'ai.model': 'gpt-3.5-turbo',
            'ai.maxTokens': 150,
            'notifications.enabled': true,
            'notifications.frequency': 'medium',
            'analytics.retention': 30, // days
            'collaboration.enabled': true,
            'gamification.enabled': true
        };
    }
}

// Global Master Integration Suite Instance
window.masterSuite = new MasterIntegrationSuite();

// Auto-start integration when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Enhanced Learning Platform v3.0 - Master Integration Suite');
    console.log('🚀 All systems integrated and ready for next-generation learning!');
});
