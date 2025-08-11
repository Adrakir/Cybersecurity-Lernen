// Mobile Security Training - Comprehensive Mobile Device Security Education Platform
class MobileSecurityTraining {
    constructor() {
        this.trainingModules = {};
        this.deviceProfiles = new Map();
        this.vulnerabilityScenarios = {};
        this.securityPolicies = {};
        this.assessmentResults = new Map();
        this.initializeTraining();
    }

    initializeTraining() {
        this.trainingModules = {
            device_basics: {
                id: "device_basics",
                title: "📱 Mobile Device Security Fundamentals",
                duration: 20,
                difficulty: "beginner",
                topics: [
                    { id: "screen_locks", title: "Screen Lock Security", content: "Strong PINs, patterns, biometrics" },
                    { id: "app_permissions", title: "App Permissions Management", content: "Understanding and controlling app access" },
                    { id: "os_updates", title: "Operating System Updates", content: "Importance of timely security patches" },
                    { id: "device_encryption", title: "Device Encryption", content: "Full disk encryption setup and benefits" }
                ],
                practicalExercises: ["setup_secure_lock", "review_app_permissions", "enable_encryption"],
                learningObjectives: ["Secure device configuration", "Permission awareness", "Update importance"]
            },

            app_security: {
                id: "app_security",
                title: "🛡️ Mobile Application Security",
                duration: 25,
                difficulty: "intermediate",
                topics: [
                    { id: "app_sources", title: "Trusted App Sources", content: "Official stores vs third-party sources" },
                    { id: "malware_detection", title: "Mobile Malware Recognition", content: "Identifying suspicious app behavior" },
                    { id: "app_reviews", title: "App Security Assessment", content: "Evaluating app credibility and risks" },
                    { id: "sandbox_security", title: "App Sandboxing", content: "How mobile OS protects against malicious apps" }
                ],
                practicalExercises: ["analyze_app_permissions", "malware_simulation", "security_audit"],
                learningObjectives: ["Safe app installation", "Malware recognition", "Risk assessment"]
            },

            network_security: {
                id: "network_security",
                title: "🌐 Mobile Network Security",
                duration: 30,
                difficulty: "intermediate",
                topics: [
                    { id: "wifi_security", title: "Wi-Fi Security Best Practices", content: "WPA3, VPN usage, public Wi-Fi risks" },
                    { id: "cellular_security", title: "Cellular Network Threats", content: "IMSI catchers, SS7 vulnerabilities" },
                    { id: "bluetooth_security", title: "Bluetooth Security", content: "Pairing security, attack vectors" },
                    { id: "vpn_mobile", title: "Mobile VPN Configuration", content: "Setting up and using VPNs on mobile" }
                ],
                practicalExercises: ["wifi_audit", "vpn_setup", "bluetooth_security_check"],
                learningObjectives: ["Network threat awareness", "VPN implementation", "Secure connectivity"]
            },

            data_protection: {
                id: "data_protection",
                title: "🔒 Mobile Data Protection",
                duration: 22,
                difficulty: "intermediate",
                topics: [
                    { id: "data_backup", title: "Secure Data Backup", content: "Cloud backup security, encryption" },
                    { id: "remote_wipe", title: "Remote Device Management", content: "Find My Device, remote wipe capabilities" },
                    { id: "app_data_security", title: "Application Data Security", content: "Data storage, keychain security" },
                    { id: "privacy_settings", title: "Privacy Configuration", content: "Location services, data sharing controls" }
                ],
                practicalExercises: ["backup_configuration", "privacy_audit", "remote_management_setup"],
                learningObjectives: ["Data protection", "Privacy control", "Loss prevention"]
            },

            enterprise_mobile: {
                id: "enterprise_mobile",
                title: "🏢 Enterprise Mobile Security",
                duration: 35,
                difficulty: "advanced",
                topics: [
                    { id: "mdm_systems", title: "Mobile Device Management", content: "MDM/EMM solutions, policy enforcement" },
                    { id: "byod_security", title: "BYOD Security Policies", content: "Bring Your Own Device best practices" },
                    { id: "app_wrapping", title: "Application Wrapping", content: "Enterprise app security containers" },
                    { id: "compliance_mobile", title: "Mobile Compliance", content: "GDPR, HIPAA, SOX mobile requirements" }
                ],
                practicalExercises: ["mdm_configuration", "byod_policy_creation", "compliance_audit"],
                learningObjectives: ["Enterprise deployment", "Policy management", "Compliance adherence"]
            }
        };

        this.initializeVulnerabilityScenarios();
        this.initializeSecurityPolicies();
    }

    initializeVulnerabilityScenarios() {
        this.vulnerabilityScenarios = {
            malicious_app: {
                id: "malicious_app",
                title: "🦠 Malicious App Installation",
                scenario: "User downloads flashlight app that requests excessive permissions",
                riskLevel: "high",
                indicators: ["Excessive permissions", "Unknown developer", "Recent publication"],
                correctActions: ["Check app permissions", "Research developer", "Use official store"],
                consequences: ["Data theft", "Privacy breach", "Device compromise"],
                prevention: ["Permission review", "Source verification", "Security software"]
            },

            public_wifi: {
                id: "public_wifi",
                title: "📶 Unsecured Public Wi-Fi",
                scenario: "Connecting to free airport Wi-Fi without protection",
                riskLevel: "medium",
                indicators: ["No password required", "Generic network name", "Multiple similar networks"],
                correctActions: ["Use VPN", "Avoid sensitive activities", "Verify network authenticity"],
                consequences: ["Data interception", "Man-in-the-middle attacks", "Credential theft"],
                prevention: ["VPN usage", "Network verification", "Secure protocols only"]
            },

            smishing_attack: {
                id: "smishing_attack", 
                title: "📱 SMS Phishing (Smishing)",
                scenario: "SMS claiming bank account suspension with urgent action link",
                riskLevel: "high",
                indicators: ["Urgency language", "Suspicious links", "Unknown sender"],
                correctActions: ["Don't click links", "Verify independently", "Report to carrier"],
                consequences: ["Credential theft", "Financial fraud", "Identity theft"],
                prevention: ["SMS filtering", "Verification habits", "Security awareness"]
            },

            app_update_fraud: {
                id: "app_update_fraud",
                title: "🔄 Fake App Update",
                scenario: "Pop-up claiming critical security update outside app store",
                riskLevel: "high",
                indicators: ["Outside official store", "Urgent security claims", "Different URL"],
                correctActions: ["Use official store only", "Verify update source", "Check app directly"],
                consequences: ["Malware installation", "Data compromise", "Financial loss"],
                prevention: ["Official store usage", "Update verification", "Security education"]
            },

            device_theft: {
                id: "device_theft",
                title: "📱 Physical Device Security",
                scenario: "Device left unattended in public space without proper security",
                riskLevel: "medium",
                indicators: ["No screen lock", "Auto-login enabled", "Sensitive data visible"],
                correctActions: ["Strong screen lock", "Auto-lock timing", "Remote wipe capability"],
                consequences: ["Data access", "Identity theft", "Privacy breach"],
                prevention: ["Screen lock", "Encryption", "Remote management"]
            }
        };
    }

    initializeSecurityPolicies() {
        this.securityPolicies = {
            personal_device: {
                id: "personal_device",
                title: "Personal Device Security Policy",
                requirements: {
                    screenLock: { required: true, minComplexity: "6-digit PIN or biometric" },
                    osUpdates: { required: true, maxDelay: "30 days" },
                    appSources: { restriction: "Official stores only" },
                    encryption: { required: true, type: "Full device encryption" },
                    backup: { required: true, method: "Encrypted cloud or local" }
                }
            },

            enterprise_device: {
                id: "enterprise_device", 
                title: "Enterprise Device Security Policy",
                requirements: {
                    screenLock: { required: true, minComplexity: "8-character password + biometric" },
                    osUpdates: { required: true, maxDelay: "7 days" },
                    appSources: { restriction: "Company app store only" },
                    encryption: { required: true, type: "Hardware-backed encryption" },
                    mdm: { required: true, monitoring: "Full device management" },
                    vpn: { required: true, usage: "All internet access" }
                }
            },

            byod_policy: {
                id: "byod_policy",
                title: "BYOD Security Policy",
                requirements: {
                    containerization: { required: true, type: "Work profile separation" },
                    compliance: { required: true, auditing: "Monthly security scans" },
                    dataSegregation: { required: true, isolation: "Corporate data isolated" },
                    remoteWipe: { required: true, scope: "Work data only" },
                    appApproval: { required: true, process: "IT-approved business apps" }
                }
            }
        };
    }

    startTrainingModule(userId, moduleId) {
        const module = this.trainingModules[moduleId];
        if (!module) return null;

        const session = {
            sessionId: `mobile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            moduleId,
            startTime: new Date(),
            progress: {
                currentTopic: 0,
                completedTopics: [],
                exercisesCompleted: [],
                assessmentScore: 0
            },
            status: "active"
        };

        // Initialize device profile if not exists
        if (!this.deviceProfiles.has(userId)) {
            this.deviceProfiles.set(userId, {
                deviceType: "unknown",
                osVersion: "unknown",
                securityScore: 0,
                vulnerabilities: [],
                policies: []
            });
        }

        return session;
    }

    completeTopicLearning(sessionId, topicId, userResponse) {
        const session = this.findSession(sessionId);
        if (!session) return null;

        const module = this.trainingModules[session.moduleId];
        const topic = module.topics.find(t => t.id === topicId);

        if (topic && !session.progress.completedTopics.includes(topicId)) {
            session.progress.completedTopics.push(topicId);
            session.progress.currentTopic++;

            // Award XP for topic completion
            if (window.skillTree) {
                window.skillTree.awardXP(session.userId, 25, `Mobile Security: ${topic.title}`);
            }
        }

        return session.progress;
    }

    conductPracticalExercise(sessionId, exerciseId) {
        const session = this.findSession(sessionId);
        if (!session) return null;

        const exercises = {
            setup_secure_lock: {
                title: "Setup Secure Screen Lock",
                instructions: "Configure a strong screen lock on your device",
                steps: [
                    "Go to Settings > Security",
                    "Choose Screen Lock method",
                    "Select Password or Pattern",
                    "Set auto-lock to 1 minute"
                ],
                verification: "Screenshot of lock screen settings",
                points: 30
            },

            analyze_app_permissions: {
                title: "App Permissions Analysis",
                instructions: "Review and analyze permissions of installed apps",
                steps: [
                    "Go to Settings > Apps",
                    "Select a social media app",
                    "Review permissions granted",
                    "Identify unnecessary permissions"
                ],
                verification: "List of concerning permissions found",
                points: 35
            },

            wifi_audit: {
                title: "Wi-Fi Security Audit",
                instructions: "Audit current Wi-Fi connections for security",
                steps: [
                    "Check saved Wi-Fi networks",
                    "Identify open/unsecured networks",
                    "Remove unnecessary connections",
                    "Verify WPA3 encryption on home network"
                ],
                verification: "Report of network security status",
                points: 40
            },

            vpn_setup: {
                title: "VPN Configuration",
                instructions: "Set up and test VPN connection",
                steps: [
                    "Install reputable VPN app",
                    "Configure connection settings",
                    "Test connection on public Wi-Fi",
                    "Verify IP address change"
                ],
                verification: "VPN connection test results",
                points: 45
            },

            privacy_audit: {
                title: "Privacy Settings Audit",
                instructions: "Comprehensive privacy settings review",
                steps: [
                    "Review location services permissions",
                    "Check advertising tracking settings",
                    "Audit app data sharing permissions",
                    "Configure privacy-focused defaults"
                ],
                verification: "Privacy configuration summary",
                points: 35
            }
        };

        const exercise = exercises[exerciseId];
        if (!exercise) return null;

        session.progress.exercisesCompleted.push({
            exerciseId,
            completedAt: new Date(),
            result: "completed"
        });

        // Award XP for exercise completion
        if (window.skillTree) {
            window.skillTree.awardXP(session.userId, exercise.points, `Exercise: ${exercise.title}`);
        }

        return {
            exercise,
            status: "completed",
            nextExercise: this.getNextExercise(session.moduleId, exerciseId)
        };
    }

    runVulnerabilityScenario(userId, scenarioId) {
        const scenario = this.vulnerabilityScenarios[scenarioId];
        if (!scenario) return null;

        const scenarioInstance = {
            instanceId: `scenario_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            scenarioId,
            startTime: new Date(),
            userChoices: [],
            score: 0,
            status: "active"
        };

        return {
            instance: scenarioInstance,
            scenario: scenario,
            question: `Scenario: ${scenario.scenario}\n\nWhat should you do?`,
            options: [
                ...scenario.correctActions,
                ...this.generateDistractorOptions(scenario)
            ].sort(() => Math.random() - 0.5)
        };
    }

    handleScenarioResponse(instanceId, selectedAction) {
        const instance = this.findScenarioInstance(instanceId);
        if (!instance) return null;

        const scenario = this.vulnerabilityScenarios[instance.scenarioId];
        const isCorrect = scenario.correctActions.includes(selectedAction);

        instance.userChoices.push({
            action: selectedAction,
            isCorrect,
            timestamp: new Date()
        });

        if (isCorrect) {
            instance.score += 20;
            if (window.skillTree) {
                window.skillTree.awardXP(instance.userId, 30, `Correct security decision: ${scenario.title}`);
            }
        }

        return {
            correct: isCorrect,
            explanation: isCorrect ? 
                `Correct! ${selectedAction} is the right approach because it ${this.getActionReasoning(selectedAction, scenario)}.` :
                `Incorrect. The correct action would be: ${scenario.correctActions[0]}. ${this.getConsequenceExplanation(selectedAction, scenario)}.`,
            consequences: isCorrect ? scenario.prevention : scenario.consequences,
            score: instance.score
        };
    }

    assessDeviceSecurity(userId, deviceInfo) {
        const assessment = {
            assessmentId: `assess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            deviceInfo,
            timestamp: new Date(),
            scores: {},
            overallScore: 0,
            recommendations: []
        };

        // Screen Lock Assessment
        assessment.scores.screenLock = this.assessScreenLock(deviceInfo.screenLock);
        
        // OS Update Assessment
        assessment.scores.osUpdates = this.assessOSUpdates(deviceInfo.osVersion, deviceInfo.lastUpdate);
        
        // App Security Assessment
        assessment.scores.appSecurity = this.assessAppSecurity(deviceInfo.installedApps);
        
        // Network Security Assessment
        assessment.scores.networkSecurity = this.assessNetworkSecurity(deviceInfo.networkConfig);
        
        // Privacy Settings Assessment
        assessment.scores.privacySettings = this.assessPrivacySettings(deviceInfo.privacyConfig);

        // Calculate overall score
        const scores = Object.values(assessment.scores);
        assessment.overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

        // Generate recommendations
        assessment.recommendations = this.generateSecurityRecommendations(assessment.scores);

        // Store assessment
        this.assessmentResults.set(assessment.assessmentId, assessment);

        // Update device profile
        const profile = this.deviceProfiles.get(userId);
        if (profile) {
            profile.securityScore = assessment.overallScore;
            profile.lastAssessment = new Date();
            profile.vulnerabilities = assessment.recommendations.filter(r => r.priority === "high");
        }

        return assessment;
    }

    assessScreenLock(screenLockInfo) {
        if (!screenLockInfo.enabled) return 0;
        
        const strengthScores = {
            "none": 0,
            "swipe": 10,
            "pattern": 40,
            "pin": 60,
            "password": 80,
            "biometric": 85,
            "password+biometric": 95
        };

        let score = strengthScores[screenLockInfo.type] || 30;
        
        if (screenLockInfo.autoLock && screenLockInfo.autoLock <= 60) score += 10;
        if (screenLockInfo.complexity === "high") score += 5;

        return Math.min(100, score);
    }

    assessOSUpdates(osVersion, lastUpdate) {
        const daysSinceUpdate = lastUpdate ? 
            Math.floor((new Date() - new Date(lastUpdate)) / (1000 * 60 * 60 * 24)) : 365;

        if (daysSinceUpdate <= 7) return 100;
        if (daysSinceUpdate <= 30) return 80;
        if (daysSinceUpdate <= 90) return 60;
        if (daysSinceUpdate <= 180) return 40;
        return 20;
    }

    assessAppSecurity(installedApps) {
        if (!installedApps || installedApps.length === 0) return 70;

        let riskScore = 0;
        let totalApps = installedApps.length;

        installedApps.forEach(app => {
            if (app.source !== "official_store") riskScore += 20;
            if (app.permissions && app.permissions.length > 10) riskScore += 10;
            if (app.lastUpdate && this.isOutdatedApp(app.lastUpdate)) riskScore += 5;
        });

        const avgRisk = riskScore / totalApps;
        return Math.max(0, 100 - avgRisk);
    }

    generateSecurityRecommendations(scores) {
        const recommendations = [];

        Object.entries(scores).forEach(([category, score]) => {
            if (score < 70) {
                const categoryRecommendations = this.getCategoryRecommendations(category, score);
                recommendations.push(...categoryRecommendations);
            }
        });

        return recommendations.sort((a, b) => {
            const priorityOrder = { "critical": 4, "high": 3, "medium": 2, "low": 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }

    getCategoryRecommendations(category, score) {
        const recommendationMap = {
            screenLock: [
                { priority: "high", action: "Enable strong screen lock", reason: "Device easily accessible without protection" },
                { priority: "medium", action: "Set auto-lock to 1 minute", reason: "Reduces exposure time if device is left unattended" }
            ],
            osUpdates: [
                { priority: "critical", action: "Install latest OS updates immediately", reason: "Security patches protect against known vulnerabilities" },
                { priority: "high", action: "Enable automatic updates", reason: "Ensures timely security patch installation" }
            ],
            appSecurity: [
                { priority: "high", action: "Remove apps from unknown sources", reason: "Third-party apps may contain malware" },
                { priority: "medium", action: "Review and limit app permissions", reason: "Excessive permissions increase attack surface" }
            ],
            networkSecurity: [
                { priority: "high", action: "Install and configure VPN", reason: "Protects data on unsecured networks" },
                { priority: "medium", action: "Remove saved public Wi-Fi networks", reason: "Prevents automatic connection to potentially compromised networks" }
            ],
            privacySettings: [
                { priority: "medium", action: "Disable unnecessary location services", reason: "Reduces privacy exposure and battery drain" },
                { priority: "low", action: "Review advertising and analytics settings", reason: "Limits data collection by third parties" }
            ]
        };

        return recommendationMap[category] || [];
    }

    generateDistractorOptions(scenario) {
        const commonDistractors = [
            "Ignore the warning and continue",
            "Ask a friend for advice first",
            "Wait and see what happens",
            "Try to fix it yourself"
        ];

        return commonDistractors.slice(0, 2);
    }

    getActionReasoning(action, scenario) {
        const reasoningMap = {
            "Check app permissions": "helps identify if the app requests excessive access to device functions",
            "Research developer": "ensures the app comes from a legitimate and trustworthy source",
            "Use VPN": "encrypts your internet traffic and protects against eavesdropping",
            "Verify independently": "confirms the legitimacy of the request through official channels"
        };

        return reasoningMap[action] || "follows security best practices";
    }

    findSession(sessionId) {
        // In real implementation, would query database
        return null; // Placeholder
    }

    findScenarioInstance(instanceId) {
        // In real implementation, would query database  
        return null; // Placeholder
    }

    renderMobileTrainingDashboard() {
        return `
            <div class="mobile-training">
                <div class="training-header">
                    <h1>📱 Mobile Security Training</h1>
                    <p>Comprehensive mobile device security education platform</p>
                </div>
                
                <div class="training-modules">
                    <h2>📚 Training Modules</h2>
                    <div class="modules-grid">
                        ${Object.values(this.trainingModules).map(module => 
                            this.renderModuleCard(module)
                        ).join('')}
                    </div>
                </div>
                
                <div class="vulnerability-scenarios">
                    <h2>🎯 Security Scenarios</h2>
                    <div class="scenarios-grid">
                        ${Object.values(this.vulnerabilityScenarios).map(scenario => 
                            this.renderScenarioCard(scenario)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderModuleCard(module) {
        const difficultyClass = `difficulty-${module.difficulty}`;
        
        return `
            <div class="module-card ${difficultyClass}">
                <div class="module-header">
                    <h3>${module.title}</h3>
                    <div class="module-meta">
                        <span class="duration">${module.duration} min</span>
                        <span class="difficulty">${module.difficulty}</span>
                    </div>
                </div>
                
                <div class="module-content">
                    <div class="topics-list">
                        <h4>📖 Topics (${module.topics.length}):</h4>
                        <ul>
                            ${module.topics.map(topic => 
                                `<li>${topic.title}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="exercises-list">
                        <h4>🛠️ Practical Exercises:</h4>
                        <ul>
                            ${module.practicalExercises.map(exercise => 
                                `<li>${exercise.replace('_', ' ')}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <button onclick="mobileTraining.startTrainingModule('demo_user', '${module.id}')" 
                        class="start-module-btn">
                    Start Module
                </button>
            </div>
        `;
    }

    renderScenarioCard(scenario) {
        const riskClass = `risk-${scenario.riskLevel}`;
        
        return `
            <div class="scenario-card ${riskClass}">
                <div class="scenario-header">
                    <h4>${scenario.title}</h4>
                    <span class="risk-level">${scenario.riskLevel} risk</span>
                </div>
                
                <div class="scenario-content">
                    <p class="scenario-text">${scenario.scenario}</p>
                    
                    <div class="indicators">
                        <h5>⚠️ Warning Signs:</h5>
                        <ul>
                            ${scenario.indicators.map(indicator => 
                                `<li>${indicator}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <button onclick="mobileTraining.runVulnerabilityScenario('demo_user', '${scenario.id}')" 
                        class="run-scenario-btn">
                    Practice Scenario
                </button>
            </div>
        `;
    }
}

// CSS für Mobile Security Training
const mobileTrainingCSS = `
    .mobile-training {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .training-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .modules-grid, .scenarios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .module-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .module-card.difficulty-beginner { border-left-color: #28a745; }
    .module-card.difficulty-intermediate { border-left-color: #ffc107; }
    .module-card.difficulty-advanced { border-left-color: #dc3545; }
    
    .module-header {
        padding: 20px;
        background: #f8f9fa;
    }
    
    .module-header h3 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .module-meta {
        display: flex;
        gap: 10px;
    }
    
    .duration, .difficulty {
        background: #e3f2fd;
        color: #1976d2;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: 500;
    }
    
    .module-content {
        padding: 20px;
    }
    
    .topics-list h4, .exercises-list h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .topics-list ul, .exercises-list ul {
        margin: 0 0 15px 0;
        padding-left: 20px;
    }
    
    .topics-list li, .exercises-list li {
        font-size: 0.85em;
        color: #495057;
        margin-bottom: 4px;
    }
    
    .start-module-btn {
        width: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .start-module-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    .scenario-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .scenario-card.risk-low { border-left-color: #28a745; }
    .scenario-card.risk-medium { border-left-color: #ffc107; }
    .scenario-card.risk-high { border-left-color: #dc3545; }
    
    .scenario-header {
        padding: 15px 20px;
        background: #f8f9fa;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .scenario-header h4 {
        margin: 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .risk-level {
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .scenario-card.risk-low .risk-level {
        background: #d4edda;
        color: #155724;
    }
    
    .scenario-card.risk-medium .risk-level {
        background: #fff3cd;
        color: #856404;
    }
    
    .scenario-card.risk-high .risk-level {
        background: #f8d7da;
        color: #721c24;
    }
    
    .scenario-content {
        padding: 20px;
    }
    
    .scenario-text {
        color: #495057;
        margin-bottom: 15px;
        font-style: italic;
        line-height: 1.4;
    }
    
    .indicators h5 {
        margin: 0 0 8px 0;
        color: #dc3545;
        font-size: 0.85em;
    }
    
    .indicators ul {
        margin: 0;
        padding-left: 15px;
    }
    
    .indicators li {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 3px;
    }
    
    .run-scenario-btn {
        width: 100%;
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .run-scenario-btn:hover {
        background: #5a6268;
        transform: translateY(-1px);
    }
`;

// Style hinzufügen
const mobileTrainingStyleSheet = document.createElement('style');
mobileTrainingStyleSheet.textContent = mobileTrainingCSS;
document.head.appendChild(mobileTrainingStyleSheet);

// Global instance
window.mobileTraining = new MobileSecurityTraining();
