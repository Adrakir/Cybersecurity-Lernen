// Interactive Simulation System
// Realistische Cybersecurity-Fallbeispiele mit KI-Integration und adaptivem Lernen

class InteractiveSimulation {
    constructor() {
        this.version = '1.0.0';
        this.cases = new Map();
        this.userProgress = new Map();
        this.analytics = new Map();
        this.difficultyAdjustment = new DifficultyAdapter();
        this.scenarioGenerator = new ScenarioGenerator();
        this.realtimeSimulator = new RealtimeSimulator();
        this.teamCollaboration = new TeamCollaboration();
        
        this.initializeCases();
        this.setupEventHandlers();
    }

    initializeCases() {
        // Realistische, multi-dimensionale Fallstudien
        this.cases.set('cyber_incident_response', {
            id: 'cyber_incident_response',
            title: '🚨 Cyber Incident Response - Live Simulation',
            category: 'Incident Response',
            difficulty: 'dynamic', // Passt sich an Nutzerverhalten an
            estimatedTime: '25-45 Minuten',
            tags: ['Incident Response', 'Crisis Management', 'Forensics', 'Communication'],
            
            // Multi-Phase Szenario
            phases: [
                {
                    id: 'detection',
                    title: 'Phase 1: Erkennung & Erstbewertung',
                    timeLimit: 600, // 10 Minuten
                    realtime: true,
                    stress_level: 'medium'
                },
                {
                    id: 'containment',
                    title: 'Phase 2: Eindämmung & Isolierung',
                    timeLimit: 900,
                    realtime: true,
                    stress_level: 'high'
                },
                {
                    id: 'recovery',
                    title: 'Phase 3: Wiederherstellung & Lessons Learned',
                    timeLimit: 1200,
                    realtime: false,
                    stress_level: 'low'
                }
            ],

            // Realistische Rollensimulation
            roles: [
                {
                    id: 'security_analyst',
                    name: 'Security Analyst',
                    responsibilities: ['Threat Analysis', 'SIEM Monitoring', 'Evidence Collection'],
                    tools: ['SIEM', 'EDR', 'Network Scanner', 'Forensic Tools']
                },
                {
                    id: 'incident_commander',
                    name: 'Incident Commander',
                    responsibilities: ['Decision Making', 'Communication', 'Resource Coordination'],
                    tools: ['Communication Systems', 'Status Dashboard', 'Resource Management']
                },
                {
                    id: 'system_admin',
                    name: 'System Administrator',
                    responsibilities: ['System Recovery', 'Backup Management', 'Infrastructure'],
                    tools: ['Server Management', 'Backup Systems', 'Network Tools']
                }
            ],

            // Dynamische Story mit verzweigten Pfaden
            storyEngine: {
                initialScenario: {
                    timestamp: '2024-08-10T14:30:00Z',
                    location: 'Corporate HQ, Munich',
                    weather: 'Regnerisch - Freitag Nachmittag',
                    context: `
                        Es ist ein ruhiger Freitagnachmittag. Die meisten Kollegen denken bereits ans Wochenende.
                        Plötzlich schlägt das SIEM-System Alarm: Ungewöhnliche Netzwerkaktivitäten werden erkannt.
                        Verschlüsselte Datenübertragungen zu unbekannten IP-Adressen in Osteuropa.
                        Die ersten Dateiserver melden "Zugriff verweigert"-Fehler.
                        
                        Sie sind der erste, der den Alarm bemerkt. Was passiert in den nächsten 30 Minuten
                        könnte über das Überleben des Unternehmens entscheiden.
                    `,
                    mood: 'tension_rising',
                    urgency: 'high'
                },
                
                // Adaptive Ereignisse basierend auf Entscheidungen
                eventTree: {
                    detection: {
                        quick_response: {
                            description: 'Sofortige Alarmierung des Incident Response Teams',
                            consequences: [
                                'Team ist in 5 Minuten vor Ort',
                                'Weitere Systeme werden überwacht',
                                'Management wird vorbereitet'
                            ],
                            newEvents: ['management_pressure', 'media_interest'],
                            timeGained: 300
                        },
                        investigate_alone: {
                            description: 'Eigenständige Untersuchung der Anomalien',
                            consequences: [
                                'Detailliertere technische Analyse möglich',
                                'Risiko der Verschlimmerung',
                                'Zeitverlust bei falscher Diagnose'
                            ],
                            newEvents: ['deeper_compromise', 'false_positive_risk'],
                            timeGained: -180
                        },
                        escalate_immediately: {
                            description: 'Sofortige Eskalation an Management und externe Experten',
                            consequences: [
                                'Ressourcen werden mobilisiert',
                                'Kosten steigen drastisch',
                                'Reputation des Analysten auf dem Spiel'
                            ],
                            newEvents: ['external_experts_arrive', 'cost_pressure'],
                            timeGained: 120
                        }
                    }
                }
            },

            // Realistische Stress-Faktoren
            stressFactors: {
                timepressure: {
                    description: 'Jede Minute kostet das Unternehmen 10.000€',
                    effect: 'Entscheidungszeit verkürzt sich',
                    visualization: 'countdown_timer'
                },
                managementPressure: {
                    description: 'CEO ruft alle 10 Minuten nach Updates',
                    effect: 'Zusätzliche Kommunikationsaufgaben',
                    visualization: 'phone_interruptions'
                },
                mediaAttention: {
                    description: 'Erste Journalisten rufen an',
                    effect: 'PR-Überlegungen werden wichtig',
                    visualization: 'news_ticker'
                },
                customerComplaints: {
                    description: 'Kunden können nicht auf Services zugreifen',
                    effect: 'Wiederherstellung wird prioritär',
                    visualization: 'complaint_counter'
                }
            },

            // Realistische Tools und Systeme
            availableTools: [
                {
                    id: 'siem_dashboard',
                    name: 'SIEM Dashboard',
                    category: 'monitoring',
                    usageTime: 60,
                    reliability: 0.95,
                    information_quality: 'high',
                    realistic_output: [
                        'Suspicious PowerShell execution detected on DESKTOP-FINANCE-01',
                        'Unusual outbound traffic to 185.243.115.84 (Suspected C&C)',
                        'Multiple failed login attempts from internal IP 192.168.1.45',
                        'File encryption activity detected in shared drives'
                    ]
                },
                {
                    id: 'network_analyzer',
                    name: 'Network Traffic Analyzer',
                    category: 'forensics',
                    usageTime: 180,
                    reliability: 0.88,
                    information_quality: 'very_high',
                    realistic_output: [
                        'Encrypted tunnel established using TOR proxy',
                        'Data exfiltration: 2.3 GB transferred in last 20 minutes',
                        'Lateral movement detected: SMB connections to multiple hosts',
                        'DNS queries to suspicious domains: temp-files[.]download'
                    ]
                },
                {
                    id: 'edr_console',
                    name: 'Endpoint Detection & Response',
                    category: 'endpoint_security',
                    usageTime: 120,
                    reliability: 0.92,
                    information_quality: 'high',
                    realistic_output: [
                        'Malware family: Ryuk Ransomware variant detected',
                        'Process injection into explorer.exe observed',
                        'Registry modifications for persistence detected',
                        '47 endpoints potentially compromised'
                    ]
                }
            ],

            // Adaptive Schwierigkeit
            adaptiveElements: {
                beginnerMode: {
                    hints: 'frequent',
                    toolTips: 'detailed',
                    timeExtension: true,
                    guidedQuestions: true
                },
                expertMode: {
                    hints: 'minimal',
                    toolTips: 'none',
                    timeExtension: false,
                    additionalComplications: true
                }
            },

            // Bewertungskriterien
            scoring: {
                technical_accuracy: { weight: 0.3, max: 100 },
                time_efficiency: { weight: 0.2, max: 100 },
                communication: { weight: 0.2, max: 100 },
                decision_quality: { weight: 0.2, max: 100 },
                stress_management: { weight: 0.1, max: 100 }
            }
        });

        // Weitere realistische Fallstudien
        this.cases.set('social_engineering_defense', {
            id: 'social_engineering_defense',
            title: '🎭 Social Engineering Prevention - Interactive Training',
            category: 'Social Engineering',
            difficulty: 'adaptive',
            estimatedTime: '15-30 Minuten',

            scenario: {
                title: 'Der charmante "IT-Support" Anruf',
                setting: `
                    Montag, 9:15 Uhr. Sie haben gerade Ihren Kaffee geholt und setzen sich an den Arbeitsplatz.
                    Das Telefon klingelt. Ein freundlicher Mann meldet sich als "Marcus Weber vom IT-Support".
                    Er erklärt, dass es ein kritisches Sicherheitsupdate gibt und er Ihre Zugangsdaten 
                    "nur kurz verifizieren" muss...
                `,
                psychology: {
                    techniques_used: ['Authority', 'Urgency', 'Trust Building', 'Technical Jargon'],
                    emotional_pressure: ['Time Pressure', 'Fear of Consequences', 'Desire to Help'],
                    red_flags: ['Unexpected Call', 'Password Request', 'Immediate Action Required']
                }
            },

            interactiveElements: {
                voiceSimulation: {
                    enabled: true,
                    caller_profile: {
                        name: 'Marcus Weber',
                        accent: 'German',
                        tone: 'confident_friendly',
                        knowledge_level: 'technical_intermediate'
                    },
                    conversation_flow: 'adaptive_based_on_responses'
                },
                
                realtime_pressure: {
                    background_noises: ['office_environment', 'phone_ringing'],
                    interruptions: ['colleague_questions', 'email_notifications'],
                    time_constraints: ['meeting_in_10_minutes']
                }
            }
        });

        this.cases.set('compliance_audit_simulation', {
            id: 'compliance_audit_simulation',
            title: '📋 GDPR Compliance Audit - Realistic Simulation',
            category: 'Compliance',
            difficulty: 'advanced',
            estimatedTime: '45-60 Minuten',

            scenario: {
                title: 'Überraschungsaudit der Datenschutzbehörde',
                setting: `
                    Dienstag, 10:30 Uhr. Zwei Auditoren der Datenschutzbehörde stehen unangemeldet 
                    vor der Tür. Sie haben 24 Stunden Zeit, alle GDPR-relevanten Dokumente und 
                    Prozesse zu präsentieren. Ein Verstoß könnte das Unternehmen bis zu 4% des 
                    Jahresumsatzes kosten...
                `,
                
                auditAreas: [
                    {
                        area: 'Data Processing Records',
                        documents_required: ['Processing registry', 'Legal basis documentation', 'Data flow maps'],
                        complexity: 'high',
                        time_required: 180
                    },
                    {
                        area: 'Individual Rights Management',
                        documents_required: ['Request handling procedures', 'Response time logs', 'Deletion protocols'],
                        complexity: 'medium',
                        time_required: 120
                    },
                    {
                        area: 'Technical Safeguards',
                        documents_required: ['Encryption policies', 'Access control logs', 'Incident response plan'],
                        complexity: 'high',
                        time_required: 240
                    }
                ]
            }
        });
    }

    // Realtime Simulation Features
    startRealtimeSimulation(caseId, selectedRole) {
        const case_data = this.cases.get(caseId);
        if (!case_data) return;

        const simulation = new RealtimeSimulation({
            case: case_data,
            role: selectedRole,
            onUpdate: (state) => this.handleSimulationUpdate(state),
            onComplete: (results) => this.handleSimulationComplete(results)
        });

        return simulation.start();
    }

    handleSimulationUpdate(state) {
        // Update UI in real-time
        this.updateSimulationDisplay(state);
        
        // Track user behavior
        this.analytics.set('current_session', {
            ...this.analytics.get('current_session'),
            updates: [...(this.analytics.get('current_session')?.updates || []), state]
        });
    }

    // AI-gestützte Szenario-Generierung
    generateAdaptiveScenario(userProfile, difficulty, preferences) {
        const scenarioParams = {
            user_experience_level: userProfile.experienceLevel,
            preferred_learning_style: preferences.learningStyle,
            weak_areas: userProfile.weakAreas,
            time_available: preferences.timeAvailable,
            current_difficulty: difficulty
        };

        return this.scenarioGenerator.create(scenarioParams);
    }

    // Team-Collaboration Features
    startTeamCase(caseId, teamMembers) {
        const collaboration = new TeamCollaboration({
            caseId: caseId,
            members: teamMembers,
            communication: {
                chat: true,
                voip: true,
                screen_sharing: true,
                collaborative_whiteboard: true
            }
        });

        return collaboration.initialize();
    }

    // Erweiterte Bewertung und Feedback
    generateComprehensiveFeedback(sessionData) {
        const feedback = {
            overall_performance: this.calculateOverallScore(sessionData),
            detailed_analysis: {
                strengths: this.identifyStrengths(sessionData),
                improvement_areas: this.identifyWeaknesses(sessionData),
                decision_analysis: this.analyzeDecisions(sessionData)
            },
            personalized_recommendations: this.generateRecommendations(sessionData),
            comparative_analysis: this.compareWithPeers(sessionData),
            learning_path: this.suggestLearningPath(sessionData)
        };

        return feedback;
    }

    // Progressive Skill Building
    trackSkillProgression(userId, caseResults) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                overall_level: 1,
                skill_areas: new Map(),
                completed_cases: [],
                learning_preferences: {},
                weakness_patterns: []
            });
        }

        const progress = this.userProgress.get(userId);
        progress.completed_cases.push(caseResults);
        
        // Update skill levels
        this.updateSkillLevels(progress, caseResults);
        
        // Adjust difficulty for next cases
        this.difficultyAdjustment.updateUserProfile(userId, caseResults);
    }

    // Gamification Enhancement
    awardAchievements(userId, caseResults) {
        const achievements = [];
        
        // Performance-based achievements
        if (caseResults.overall_score >= 95) {
            achievements.push({
                id: 'perfectionist',
                title: '🏆 Perfektionist',
                description: 'Fallstudie mit 95%+ Punktzahl abgeschlossen',
                rarity: 'legendary'
            });
        }

        // Speed achievements
        if (caseResults.completion_time < caseResults.expected_time * 0.7) {
            achievements.push({
                id: 'speed_demon',
                title: '⚡ Blitzschnell',
                description: 'Fallstudie in Rekordzeit gelöst',
                rarity: 'rare'
            });
        }

        // Stress management
        if (caseResults.stress_level === 'high' && caseResults.decision_quality >= 85) {
            achievements.push({
                id: 'cool_under_pressure',
                title: '🧊 Kühler Kopf',
                description: 'Exzellente Entscheidungen unter hohem Stress',
                rarity: 'epic'
            });
        }

        return achievements;
    }

    // Export/Import für Lehrer und Trainer
    exportCaseResults(sessionId, format = 'detailed_pdf') {
        const sessionData = this.analytics.get(sessionId);
        
        const exportData = {
            metadata: {
                export_date: new Date(),
                case_id: sessionData.case_id,
                user_info: sessionData.user_info,
                session_duration: sessionData.duration
            },
            performance_metrics: sessionData.performance,
            detailed_timeline: sessionData.timeline,
            decision_analysis: sessionData.decisions,
            recommendations: sessionData.recommendations
        };

        switch (format) {
            case 'detailed_pdf':
                return this.generatePDFReport(exportData);
            case 'excel_analytics':
                return this.generateExcelReport(exportData);
            case 'json_data':
                return JSON.stringify(exportData, null, 2);
            default:
                return exportData;
        }
    }

    // Adaptive Hint System
    provideContextualHint(currentSituation, userProfile) {
        const hints = {
            beginner: {
                content: "💡 Tipp: Bei einem Ransomware-Angriff ist es wichtig, zuerst alle betroffenen Systeme vom Netzwerk zu trennen, um eine weitere Ausbreitung zu verhindern.",
                detail_level: 'high',
                show_solution_path: true
            },
            intermediate: {
                content: "🔍 Hinweis: Denken Sie an die Incident Response Prioritäten: Contain, Eradicate, Recover.",
                detail_level: 'medium',
                show_solution_path: false
            },
            expert: {
                content: "⚠️ Bedenken Sie: Ihre Entscheidung hat Auswirkungen auf Compliance und forensische Untersuchungen.",
                detail_level: 'low',
                show_solution_path: false
            }
        };

        return hints[userProfile.level] || hints.intermediate;
    }

    // Integration mit v3.0 Master System
    integrateWithMasterSuite() {
        if (window.masterSuite) {
            // Register case engine with master integration
            window.masterSuite.systems.set('enhancedCases', this);
            
            // Setup event listeners
            window.masterSuite.eventBus.on('user:learningPathUpdate', (data) => {
                this.adjustCaseDifficulty(data.userId, data.recommendations);
            });

            window.masterSuite.eventBus.on('analytics:patternDetected', (pattern) => {
                this.handleLearningPattern(pattern);
            });

            console.log('✅ Enhanced Interactive Cases integrated with Master Suite');
        }
    }

    // Accessibility und Inklusion
    setupAccessibilityFeatures() {
        return {
            screen_reader_support: true,
            keyboard_navigation: true,
            high_contrast_mode: true,
            text_size_adjustment: true,
            color_blind_friendly: true,
            audio_descriptions: true,
            subtitle_support: true,
            slow_motion_mode: true // Für zeitkritische Szenarien
        };
    }
}

// Realtime Simulation Engine
class RealtimeSimulation {
    constructor(config) {
        this.config = config;
        this.startTime = Date.now();
        this.events = [];
        this.state = {
            phase: 'initial',
            timeRemaining: config.case.phases[0].timeLimit,
            stress_level: 'normal',
            available_actions: [],
            active_tools: []
        };
        this.intervalId = null;
    }

    start() {
        console.log(`🚀 Starting realtime simulation: ${this.config.case.title}`);
        
        this.intervalId = setInterval(() => {
            this.tick();
        }, 1000); // Update every second

        this.generateInitialEvents();
        return this.state;
    }

    tick() {
        this.state.timeRemaining--;
        
        // Generate random events based on scenario
        if (Math.random() < 0.1) { // 10% chance per second
            this.generateRandomEvent();
        }

        // Update stress level based on time pressure
        this.updateStressLevel();
        
        // Trigger callback
        if (this.config.onUpdate) {
            this.config.onUpdate(this.state);
        }

        // Check completion conditions
        if (this.state.timeRemaining <= 0) {
            this.complete();
        }
    }

    generateRandomEvent() {
        const events = [
            {
                type: 'phone_call',
                message: '📞 CEO ruft an: "Wie ist der aktuelle Status?"',
                impact: 'stress_increase',
                duration: 30
            },
            {
                type: 'system_alert',
                message: '🚨 Weitere 5 Systeme zeigen Verschlüsselungsaktivität',
                impact: 'complexity_increase',
                action_required: true
            },
            {
                type: 'news_alert',
                message: '📺 Erste Medienberichte über den Vorfall erscheinen online',
                impact: 'reputation_pressure',
                urgency: 'high'
            }
        ];

        const event = events[Math.floor(Math.random() * events.length)];
        this.events.push({
            ...event,
            timestamp: Date.now() - this.startTime
        });
    }

    complete() {
        clearInterval(this.intervalId);
        
        const results = {
            duration: Date.now() - this.startTime,
            events_handled: this.events.length,
            final_state: this.state,
            performance_metrics: this.calculateMetrics()
        };

        if (this.config.onComplete) {
            this.config.onComplete(results);
        }
    }
}

// Difficulty Adapter
class DifficultyAdapter {
    constructor() {
        this.userProfiles = new Map();
    }

    updateUserProfile(userId, results) {
        if (!this.userProfiles.has(userId)) {
            this.userProfiles.set(userId, {
                skill_level: 1,
                completion_rate: 1.0,
                average_score: 0,
                time_efficiency: 1.0,
                stress_tolerance: 1.0
            });
        }

        const profile = this.userProfiles.get(userId);
        
        // Update metrics based on results
        profile.average_score = (profile.average_score + results.score) / 2;
        profile.time_efficiency = (profile.time_efficiency + results.time_efficiency) / 2;
        profile.stress_tolerance = (profile.stress_tolerance + results.stress_management) / 2;

        // Adjust skill level
        if (results.score >= 90 && results.time_efficiency >= 0.8) {
            profile.skill_level = Math.min(10, profile.skill_level + 0.5);
        } else if (results.score < 60 || results.time_efficiency < 0.5) {
            profile.skill_level = Math.max(1, profile.skill_level - 0.2);
        }
    }

    recommendDifficulty(userId) {
        const profile = this.userProfiles.get(userId);
        if (!profile) return 'beginner';

        if (profile.skill_level >= 7) return 'expert';
        if (profile.skill_level >= 4) return 'intermediate';
        return 'beginner';
    }
}

// Team Collaboration System
class TeamCollaboration {
    constructor(config) {
        this.config = config;
        this.members = new Map();
        this.chatHistory = [];
        this.sharedState = {};
        this.roles = new Map();
    }

    initialize() {
        console.log('🤝 Initializing team collaboration for case:', this.config.caseId);
        
        // Setup WebSocket simulation for real-time communication
        this.setupCommunication();
        
        // Assign roles to team members
        this.assignRoles();
        
        return {
            session_id: this.generateSessionId(),
            team_members: Array.from(this.members.values()),
            communication_channels: this.getAvailableChannels()
        };
    }

    setupCommunication() {
        // Simulate real-time communication
        setInterval(() => {
            this.simulateTeamCommunication();
        }, 5000);
    }

    simulateTeamCommunication() {
        const messages = [
            "Security Analyst: SIEM zeigt weitere verdächtige Aktivitäten auf Server-03",
            "Incident Commander: Alle Teams, Status-Update in 2 Minuten",
            "System Admin: Backup-Systeme sind betriebsbereit für Recovery",
            "Legal Team: Meldepflicht nach GDPR muss innerhalb 72h erfolgen"
        ];

        if (Math.random() < 0.3) {
            const message = messages[Math.floor(Math.random() * messages.length)];
            this.addChatMessage('system', message);
        }
    }

    addChatMessage(sender, message) {
        this.chatHistory.push({
            sender: sender,
            message: message,
            timestamp: new Date(),
            type: 'team_communication'
        });
    }
}

// Scenario Generator
class ScenarioGenerator {
    constructor() {
        this.templates = new Map();
        this.initializeTemplates();
    }

    initializeTemplates() {
        this.templates.set('ransomware_variants', [
            {
                name: 'Ryuk',
                characteristics: ['Targeted', 'High-value victims', 'Manual deployment'],
                technical_indicators: ['PowerShell usage', 'Lateral movement', 'Service disruption']
            },
            {
                name: 'LockBit',
                characteristics: ['Double extortion', 'Fast encryption', 'Leak sites'],
                technical_indicators: ['File system encryption', 'Data exfiltration', 'Tor communication']
            }
        ]);
    }

    create(params) {
        // Generate scenario based on user parameters
        const scenario = {
            id: this.generateId(),
            title: this.generateTitle(params),
            difficulty: params.current_difficulty,
            estimated_time: this.calculateEstimatedTime(params),
            content: this.generateContent(params),
            success_criteria: this.defineSuccessCriteria(params)
        };

        return scenario;
    }

    generateContent(params) {
        // AI-style content generation (simplified)
        const templates = {
            beginner: "Ein einfacher {threat_type} Angriff wurde erkannt. Die Systeme zeigen {indicators}.",
            intermediate: "Ein komplexerer {threat_type} Vorfall erfordert {skills}. Zusätzlich müssen Sie {additional_challenges} bewältigen.",
            expert: "Ein hochkomplexer {threat_type} APT-Angriff mit {advanced_techniques}. {time_pressure} und {stakeholder_pressure} erschweren die Situation."
        };

        return templates[params.current_difficulty] || templates.intermediate;
    }
}

// Global Instance
window.simulation = new InteractiveSimulation();

// Integration with Master Suite
document.addEventListener('DOMContentLoaded', () => {
    if (window.enhancedCases) {
        window.enhancedCases.integrateWithMasterSuite();
        console.log('🎯 Enhanced Interactive Cases v3.0 initialized');
    }
});
