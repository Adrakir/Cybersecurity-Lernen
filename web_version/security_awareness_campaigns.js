// Security Awareness Campaigns - Comprehensive Security Awareness Training Platform
class SecurityAwarenessCampaigns {
    constructor() {
        this.campaigns = {};
        this.phishingSimulations = {};
        this.userBehavior = new Map();
        this.templates = {};
        this.metrics = new Map();
        this.activeSimulations = new Map();
        this.initializeCampaigns();
    }

    initializeCampaigns() {
        this.campaigns = {
            phishing_awareness: {
                id: "phishing_awareness",
                name: "🎣 Anti-Phishing Campaign",
                description: "Comprehensive phishing awareness and simulation training",
                duration: 30, // days
                phases: [
                    {
                        phase: 1,
                        name: "Baseline Assessment",
                        duration: 7,
                        activities: ["initial_phishing_test", "knowledge_assessment"],
                        goals: ["measure_current_awareness", "identify_vulnerable_users"]
                    },
                    {
                        phase: 2,
                        name: "Education & Training",
                        duration: 14,
                        activities: ["interactive_modules", "video_training", "case_studies"],
                        goals: ["improve_recognition", "teach_reporting_procedures"]
                    },
                    {
                        phase: 3,
                        name: "Reinforcement & Testing",
                        duration: 9,
                        activities: ["follow_up_simulations", "micro_learning", "peer_challenges"],
                        goals: ["validate_improvement", "sustain_behavior_change"]
                    }
                ],
                targetAudience: ["all_employees", "high_risk_roles"],
                businessImpact: "high",
                complianceFrameworks: ["ISO 27001", "NIST CSF"]
            },

            password_security: {
                id: "password_security",
                name: "🔐 Password Security Campaign",
                description: "Strong password practices and password manager adoption",
                duration: 21,
                phases: [
                    {
                        phase: 1,
                        name: "Password Audit",
                        duration: 3,
                        activities: ["password_strength_check", "breach_exposure_check"],
                        goals: ["identify_weak_passwords", "assess_reuse_patterns"]
                    },
                    {
                        phase: 2,
                        name: "Training & Tools",
                        duration: 10,
                        activities: ["password_manager_training", "mfa_setup", "policy_education"],
                        goals: ["increase_manager_adoption", "enable_mfa"]
                    },
                    {
                        phase: 3,
                        name: "Validation",
                        duration: 8,
                        activities: ["compliance_check", "manager_usage_audit"],
                        goals: ["verify_adoption", "measure_improvement"]
                    }
                ],
                targetAudience: ["all_employees"],
                businessImpact: "medium",
                complianceFrameworks: ["NIST CSF", "CIS Controls"]
            },

            social_engineering: {
                id: "social_engineering",
                name: "🎭 Social Engineering Defense",
                description: "Recognition and defense against social engineering attacks",
                duration: 28,
                phases: [
                    {
                        phase: 1,
                        name: "Threat Landscape",
                        duration: 7,
                        activities: ["se_attack_overview", "real_case_studies", "impact_analysis"],
                        goals: ["understand_threats", "recognize_tactics"]
                    },
                    {
                        phase: 2,
                        name: "Practical Defense",
                        duration: 14,
                        activities: ["voice_phishing_sim", "pretexting_scenarios", "verification_training"],
                        goals: ["practice_defense", "build_verification_habits"]
                    },
                    {
                        phase: 3,
                        name: "Continuous Vigilance",
                        duration: 7,
                        activities: ["ongoing_simulations", "reporting_exercises"],
                        goals: ["maintain_awareness", "improve_reporting"]
                    }
                ],
                targetAudience: ["executives", "hr", "finance", "it_support"],
                businessImpact: "high",
                complianceFrameworks: ["SOC 2", "ISO 27001"]
            },

            data_protection: {
                id: "data_protection",
                name: "🛡️ Data Protection Awareness",
                description: "GDPR compliance and data handling best practices",
                duration: 35,
                phases: [
                    {
                        phase: 1,
                        name: "Regulatory Foundation",
                        duration: 10,
                        activities: ["gdpr_overview", "data_classification", "legal_obligations"],
                        goals: ["understand_requirements", "classify_data_properly"]
                    },
                    {
                        phase: 2,
                        name: "Practical Application",
                        duration: 15,
                        activities: ["handling_scenarios", "breach_response", "consent_management"],
                        goals: ["apply_controls", "practice_procedures"]
                    },
                    {
                        phase: 3,
                        name: "Compliance Validation",
                        duration: 10,
                        activities: ["audit_simulation", "incident_drill", "documentation_review"],
                        goals: ["validate_compliance", "test_response"]
                    }
                ],
                targetAudience: ["data_handlers", "managers", "legal"],
                businessImpact: "critical",
                complianceFrameworks: ["GDPR", "CCPA", "ISO 27001"]
            },

            remote_work_security: {
                id: "remote_work_security",
                name: "🏠 Remote Work Security",
                description: "Secure remote work practices and home office security",
                duration: 14,
                phases: [
                    {
                        phase: 1,
                        name: "Environment Assessment",
                        duration: 3,
                        activities: ["home_security_audit", "device_inventory", "network_check"],
                        goals: ["assess_current_setup", "identify_risks"]
                    },
                    {
                        phase: 2,
                        name: "Security Hardening",
                        duration: 8,
                        activities: ["vpn_training", "device_securing", "wifi_security"],
                        goals: ["implement_controls", "secure_connections"]
                    },
                    {
                        phase: 3,
                        name: "Ongoing Vigilance",
                        duration: 3,
                        activities: ["security_checkups", "incident_reporting"],
                        goals: ["maintain_security", "continuous_improvement"]
                    }
                ],
                targetAudience: ["remote_workers", "hybrid_employees"],
                businessImpact: "medium",
                complianceFrameworks: ["NIST CSF", "ISO 27001"]
            }
        };

        this.initializePhishingSimulations();
        this.initializeTemplates();
    }

    initializePhishingSimulations() {
        this.phishingSimulations = {
            basic_phishing: {
                id: "basic_phishing",
                name: "Basic Phishing Email",
                difficulty: "easy",
                template: {
                    subject: "Urgent: Verify Your Account",
                    sender: "security@company-portal.com",
                    content: "Your account will be suspended. Click here to verify: [MALICIOUS_LINK]",
                    indicators: ["urgency", "suspicious_domain", "generic_greeting"]
                },
                expectedActions: ["report_phishing", "do_not_click"],
                learningPoints: ["check_sender_domain", "verify_through_official_channels"]
            },

            spear_phishing: {
                id: "spear_phishing", 
                name: "Targeted Spear Phishing",
                difficulty: "medium",
                template: {
                    subject: "Q3 Budget Review - Action Required",
                    sender: "cfo@company.com",
                    content: "Please review the attached budget document for our upcoming meeting.",
                    indicators: ["executive_impersonation", "realistic_context", "malicious_attachment"]
                },
                expectedActions: ["verify_sender", "check_attachment", "report_suspicious"],
                learningPoints: ["executive_impersonation_tactics", "out_of_band_verification"]
            },

            advanced_phishing: {
                id: "advanced_phishing",
                name: "Advanced Social Engineering",
                difficulty: "hard",
                template: {
                    subject: "IT Security Update - New VPN Client",
                    sender: "it-support@company.com",
                    content: "Download the new VPN client from our secure portal using your credentials.",
                    indicators: ["credential_harvesting", "fake_software", "domain_spoofing"]
                },
                expectedActions: ["verify_it_request", "check_download_source", "report_immediately"],
                learningPoints: ["credential_harvesting_techniques", "software_verification"]
            },

            voice_phishing: {
                id: "voice_phishing",
                name: "Voice Phishing (Vishing)",
                difficulty: "medium",
                template: {
                    scenario: "Caller claims to be from IT support requesting remote access to fix security issue",
                    indicators: ["unsolicited_call", "urgency", "remote_access_request"],
                    context: "Caller has some company information but requests sensitive data"
                },
                expectedActions: ["verify_caller_identity", "hang_up_callback", "report_incident"],
                learningPoints: ["phone_verification_procedures", "social_engineering_over_phone"]
            }
        };
    }

    initializeTemplates() {
        this.templates = {
            awareness_email: {
                subject: "🚨 Security Alert: {THREAT_TYPE} Campaign Detected",
                content: `
Dear {USER_NAME},

Our security team has detected a {THREAT_TYPE} campaign targeting our organization. 

Key indicators to watch for:
{INDICATORS_LIST}

If you receive suspicious communications:
1. Do not click links or download attachments
2. Report immediately using our security reporting tool
3. Contact IT security if uncertain

Stay vigilant!
Security Team
                `
            },

            training_reminder: {
                subject: "📚 Security Training: {CAMPAIGN_NAME} - {PHASE_NAME}",
                content: `
Hi {USER_NAME},

You have a new security training module available:

Campaign: {CAMPAIGN_NAME}
Phase: {PHASE_NAME}
Estimated Time: {DURATION} minutes
Deadline: {DEADLINE}

Complete your training: {TRAINING_LINK}

Questions? Contact our security awareness team.

Best regards,
Security Training Team
                `
            },

            simulation_result: {
                subject: "🎯 Phishing Simulation Results - Learning Opportunity",
                content: `
Hello {USER_NAME},

You recently participated in a phishing simulation. This is a learning opportunity, not a test.

Simulation: {SIMULATION_NAME}
Result: {RESULT}
Key Learning Points:
{LEARNING_POINTS}

Additional Resources:
{RESOURCES_LINKS}

Remember: It's better to be cautious and report suspicious emails than to click dangerous links.

Security Awareness Team
                `
            }
        };
    }

    launchCampaign(campaignId, targetUsers, customization = {}) {
        const campaign = this.campaigns[campaignId];
        if (!campaign) return null;

        const campaignInstance = {
            instanceId: `campaign_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            campaignId,
            targetUsers,
            startDate: new Date(),
            endDate: new Date(Date.now() + campaign.duration * 24 * 60 * 60 * 1000),
            currentPhase: 0,
            status: "active",
            customization,
            metrics: {
                totalUsers: targetUsers.length,
                completedUsers: 0,
                phishingClickRate: 0,
                reportingRate: 0,
                improvementScore: 0
            },
            phaseHistory: []
        };

        // Initialize user behavior tracking
        targetUsers.forEach(userId => {
            if (!this.userBehavior.has(userId)) {
                this.userBehavior.set(userId, {
                    campaigns: [],
                    phishingHistory: [],
                    trainingCompletion: [],
                    riskScore: 50,
                    strengths: [],
                    improvements: []
                });
            }
            this.userBehavior.get(userId).campaigns.push(campaignInstance.instanceId);
        });

        // Start first phase
        this.startCampaignPhase(campaignInstance.instanceId, 0);

        return campaignInstance;
    }

    startCampaignPhase(instanceId, phaseIndex) {
        const instance = this.findCampaignInstance(instanceId);
        const campaign = this.campaigns[instance.campaignId];
        const phase = campaign.phases[phaseIndex];

        if (!instance || !phase) return;

        instance.currentPhase = phaseIndex;
        instance.phaseHistory.push({
            phaseIndex,
            startDate: new Date(),
            activities: phase.activities,
            status: "active"
        });

        // Execute phase activities
        phase.activities.forEach(activity => {
            this.executeActivity(instanceId, activity);
        });

        // Schedule next phase
        setTimeout(() => {
            this.completePhase(instanceId, phaseIndex);
        }, phase.duration * 24 * 60 * 60 * 1000); // Convert days to milliseconds

        return instance;
    }

    executeActivity(instanceId, activity) {
        const instance = this.findCampaignInstance(instanceId);
        if (!instance) return;

        switch (activity) {
            case "initial_phishing_test":
                this.sendPhishingSimulation(instance.targetUsers, "basic_phishing", instanceId);
                break;
            case "knowledge_assessment":
                this.sendKnowledgeAssessment(instance.targetUsers, instance.campaignId);
                break;
            case "interactive_modules":
                this.assignTrainingModules(instance.targetUsers, instance.campaignId);
                break;
            case "follow_up_simulations":
                this.sendPhishingSimulation(instance.targetUsers, "spear_phishing", instanceId);
                break;
            case "voice_phishing_sim":
                this.scheduleVoicePhishingTest(instance.targetUsers, instanceId);
                break;
            default:
                console.log(`Executing activity: ${activity}`);
        }
    }

    sendPhishingSimulation(userIds, simulationType, campaignInstanceId) {
        const simulation = this.phishingSimulations[simulationType];
        if (!simulation) return;

        const simulationInstance = {
            id: `sim_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type: simulationType,
            campaignInstanceId,
            targetUsers: userIds,
            sentDate: new Date(),
            responses: new Map(),
            status: "active"
        };

        this.activeSimulations.set(simulationInstance.id, simulationInstance);

        // Send simulation to each user
        userIds.forEach(userId => {
            this.deliverPhishingEmail(userId, simulation, simulationInstance.id);
        });

        return simulationInstance;
    }

    deliverPhishingEmail(userId, simulation, simulationId) {
        // In real implementation, this would send an actual email
        console.log(`Delivering phishing simulation to ${userId}:`, simulation.template);

        // Track delivery
        const userBehavior = this.userBehavior.get(userId);
        if (userBehavior) {
            userBehavior.phishingHistory.push({
                simulationId,
                type: simulation.id,
                deliveredAt: new Date(),
                status: "delivered"
            });
        }
    }

    handlePhishingResponse(userId, simulationId, action) {
        const simulation = this.activeSimulations.get(simulationId);
        if (!simulation) return null;

        const response = {
            userId,
            action, // "clicked", "reported", "ignored", "deleted"
            timestamp: new Date(),
            userAgent: "browser_info", // Would capture actual user agent
            ipAddress: "user_ip" // Would capture actual IP
        };

        simulation.responses.set(userId, response);

        // Update user behavior
        const userBehavior = this.userBehavior.get(userId);
        if (userBehavior) {
            const phishingEntry = userBehavior.phishingHistory.find(p => p.simulationId === simulationId);
            if (phishingEntry) {
                phishingEntry.action = action;
                phishingEntry.respondedAt = new Date();
                phishingEntry.status = "completed";
            }

            // Update risk score based on action
            this.updateUserRiskScore(userId, action);
        }

        // Send follow-up education
        this.sendSimulationFeedback(userId, simulationId, action);

        return response;
    }

    updateUserRiskScore(userId, action) {
        const userBehavior = this.userBehavior.get(userId);
        if (!userBehavior) return;

        const scoreChanges = {
            "clicked": +15,      // Increased risk
            "reported": -10,     // Decreased risk  
            "ignored": +5,       // Slight increase
            "deleted": -2        // Slight decrease
        };

        const change = scoreChanges[action] || 0;
        userBehavior.riskScore = Math.max(0, Math.min(100, userBehavior.riskScore + change));

        // Update strengths/improvements
        if (action === "reported") {
            if (!userBehavior.strengths.includes("phishing_reporting")) {
                userBehavior.strengths.push("phishing_reporting");
            }
        } else if (action === "clicked") {
            if (!userBehavior.improvements.includes("phishing_recognition")) {
                userBehavior.improvements.push("phishing_recognition");
            }
        }
    }

    sendSimulationFeedback(userId, simulationId, action) {
        const simulation = this.activeSimulations.get(simulationId);
        const phishingType = this.phishingSimulations[simulation.type];
        
        let feedback = {
            type: action === "clicked" ? "learning_opportunity" : "good_catch",
            learningPoints: phishingType.learningPoints,
            additionalResources: this.getRecommendedResources(action),
            nextSteps: this.getNextSteps(action)
        };

        // Send feedback email using template
        this.sendTemplatedEmail(userId, "simulation_result", {
            USER_NAME: userId,
            SIMULATION_NAME: phishingType.name,
            RESULT: action,
            LEARNING_POINTS: feedback.learningPoints.join("\n• "),
            RESOURCES_LINKS: feedback.additionalResources.join("\n• ")
        });

        return feedback;
    }

    assignTrainingModules(userIds, campaignId) {
        const campaign = this.campaigns[campaignId];
        const modules = this.getTrainingModules(campaignId);

        userIds.forEach(userId => {
            const userBehavior = this.userBehavior.get(userId);
            if (userBehavior) {
                modules.forEach(module => {
                    userBehavior.trainingCompletion.push({
                        module: module.id,
                        assignedAt: new Date(),
                        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
                        status: "assigned"
                    });
                });
            }

            // Send training notification
            this.sendTemplatedEmail(userId, "training_reminder", {
                USER_NAME: userId,
                CAMPAIGN_NAME: campaign.name,
                PHASE_NAME: campaign.phases[0].name,
                DURATION: "15-20",
                DEADLINE: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toDateString(),
                TRAINING_LINK: "https://training.company.com/security"
            });
        });
    }

    getTrainingModules(campaignId) {
        const moduleMapping = {
            "phishing_awareness": [
                { id: "phishing_101", title: "Phishing Fundamentals", duration: 15 },
                { id: "email_security", title: "Email Security Best Practices", duration: 20 }
            ],
            "password_security": [
                { id: "password_manager", title: "Password Manager Training", duration: 10 },
                { id: "mfa_setup", title: "Multi-Factor Authentication", duration: 15 }
            ],
            "social_engineering": [
                { id: "se_tactics", title: "Social Engineering Tactics", duration: 25 },
                { id: "verification_methods", title: "Identity Verification", duration: 15 }
            ]
        };

        return moduleMapping[campaignId] || [];
    }

    generateCampaignReport(instanceId) {
        const instance = this.findCampaignInstance(instanceId);
        if (!instance) return null;

        const campaign = this.campaigns[instance.campaignId];
        const report = {
            campaign: campaign.name,
            duration: `${Math.floor((new Date() - instance.startDate) / (1000 * 60 * 60 * 24))} days`,
            participants: instance.targetUsers.length,
            completion: this.calculateCompletionRate(instanceId),
            phishingResults: this.analyzePhishingResults(instanceId),
            trainingProgress: this.analyzeTrainingProgress(instanceId),
            riskAssessment: this.generateRiskAssessment(instanceId),
            recommendations: this.generateRecommendations(instanceId)
        };

        return report;
    }

    calculateCompletionRate(instanceId) {
        const instance = this.findCampaignInstance(instanceId);
        let completed = 0;

        instance.targetUsers.forEach(userId => {
            const userBehavior = this.userBehavior.get(userId);
            if (userBehavior) {
                const campaignTraining = userBehavior.trainingCompletion.filter(t => 
                    t.status === "completed"
                ).length;
                if (campaignTraining > 0) completed++;
            }
        });

        return Math.round((completed / instance.targetUsers.length) * 100);
    }

    analyzePhishingResults(instanceId) {
        const results = { clicked: 0, reported: 0, ignored: 0, total: 0 };
        
        this.activeSimulations.forEach(sim => {
            if (sim.campaignInstanceId === instanceId) {
                sim.responses.forEach(response => {
                    results[response.action] = (results[response.action] || 0) + 1;
                    results.total++;
                });
            }
        });

        return {
            clickRate: results.total > 0 ? Math.round((results.clicked / results.total) * 100) : 0,
            reportingRate: results.total > 0 ? Math.round((results.reported / results.total) * 100) : 0,
            improvement: this.calculateImprovement(instanceId)
        };
    }

    calculateImprovement(instanceId) {
        // Compare first and last simulation results
        const simulations = Array.from(this.activeSimulations.values())
            .filter(sim => sim.campaignInstanceId === instanceId)
            .sort((a, b) => a.sentDate - b.sentDate);

        if (simulations.length < 2) return 0;

        const first = simulations[0];
        const last = simulations[simulations.length - 1];

        const firstClickRate = this.calculateClickRate(first);
        const lastClickRate = this.calculateClickRate(last);

        return Math.round(firstClickRate - lastClickRate); // Positive = improvement
    }

    calculateClickRate(simulation) {
        let clicked = 0;
        simulation.responses.forEach(response => {
            if (response.action === "clicked") clicked++;
        });
        return simulation.responses.size > 0 ? (clicked / simulation.responses.size) * 100 : 0;
    }

    generateRecommendations(instanceId) {
        const instance = this.findCampaignInstance(instanceId);
        const phishingResults = this.analyzePhishingResults(instanceId);
        const recommendations = [];

        if (phishingResults.clickRate > 20) {
            recommendations.push({
                priority: "high",
                category: "training",
                action: "Increase phishing awareness training frequency",
                reason: `Click rate of ${phishingResults.clickRate}% exceeds acceptable threshold`
            });
        }

        if (phishingResults.reportingRate < 30) {
            recommendations.push({
                priority: "medium",
                category: "process",
                action: "Improve phishing reporting procedures",
                reason: `Only ${phishingResults.reportingRate}% of users report suspicious emails`
            });
        }

        if (phishingResults.improvement < 5) {
            recommendations.push({
                priority: "medium",
                category: "content",
                action: "Enhance training content effectiveness",
                reason: "Limited improvement observed between simulations"
            });
        }

        return recommendations;
    }

    findCampaignInstance(instanceId) {
        // In real implementation, this would query a database
        return this.activeCampaigns ? this.activeCampaigns.get(instanceId) : null;
    }

    sendTemplatedEmail(userId, templateId, variables) {
        const template = this.templates[templateId];
        if (!template) return;

        let subject = template.subject;
        let content = template.content;

        // Replace variables
        Object.entries(variables).forEach(([key, value]) => {
            const placeholder = `{${key}}`;
            subject = subject.replace(new RegExp(placeholder, 'g'), value);
            content = content.replace(new RegExp(placeholder, 'g'), value);
        });

        // In real implementation, send actual email
        console.log(`Email to ${userId}:\nSubject: ${subject}\n${content}`);
    }

    getRecommendedResources(action) {
        const resourceMap = {
            "clicked": [
                "Phishing Recognition Training Module",
                "Email Security Best Practices Guide",
                "How to Verify Suspicious Links"
            ],
            "reported": [
                "Advanced Threat Recognition",
                "Security Champion Program",
                "Incident Response Procedures"
            ],
            "ignored": [
                "Email Security Awareness",
                "Reporting Procedures Guide"
            ]
        };

        return resourceMap[action] || ["General Security Awareness"];
    }

    getNextSteps(action) {
        const stepMap = {
            "clicked": [
                "Complete additional phishing training",
                "Practice identifying suspicious emails",
                "Set up email security filters"
            ],
            "reported": [
                "Continue excellent security practices",
                "Consider security champion role",
                "Help train colleagues"
            ],
            "ignored": [
                "Learn to recognize phishing indicators",
                "Practice reporting procedures"
            ]
        };

        return stepMap[action] || ["Continue security awareness training"];
    }

    renderCampaignDashboard() {
        return `
            <div class="awareness-campaigns">
                <div class="campaigns-header">
                    <h1>🎯 Security Awareness Campaigns</h1>
                    <p>Comprehensive security awareness training and phishing simulations</p>
                </div>
                
                <div class="campaigns-grid">
                    ${Object.values(this.campaigns).map(campaign => 
                        this.renderCampaignCard(campaign)
                    ).join('')}
                </div>
                
                <div class="simulation-center">
                    <h2>🎣 Phishing Simulation Center</h2>
                    <div class="simulations-grid">
                        ${Object.values(this.phishingSimulations).map(sim => 
                            this.renderSimulationCard(sim)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderCampaignCard(campaign) {
        const impactClass = `impact-${campaign.businessImpact}`;
        
        return `
            <div class="campaign-card ${impactClass}">
                <div class="card-header">
                    <h3>${campaign.name}</h3>
                    <span class="duration">${campaign.duration} days</span>
                </div>
                
                <div class="card-content">
                    <p class="description">${campaign.description}</p>
                    
                    <div class="campaign-phases">
                        <h4>📅 Phases (${campaign.phases.length}):</h4>
                        <ul>
                            ${campaign.phases.map((phase, index) => 
                                `<li><strong>Phase ${index + 1}:</strong> ${phase.name} (${phase.duration} days)</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="target-audience">
                        <h4>👥 Target Audience:</h4>
                        <div class="audience-tags">
                            ${campaign.targetAudience.map(audience => 
                                `<span class="audience-tag">${audience.replace('_', ' ')}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="card-actions">
                    <button onclick="awarenessCampaigns.launchCampaign('${campaign.id}', ['demo_user'])" 
                            class="launch-btn">
                        Launch Campaign
                    </button>
                </div>
            </div>
        `;
    }

    renderSimulationCard(simulation) {
        const difficultyClass = `difficulty-${simulation.difficulty}`;
        
        return `
            <div class="simulation-card ${difficultyClass}">
                <div class="sim-header">
                    <h4>${simulation.name}</h4>
                    <span class="difficulty-badge">${simulation.difficulty}</span>
                </div>
                
                <div class="sim-content">
                    <div class="sim-details">
                        <p><strong>Subject:</strong> ${simulation.template.subject || 'N/A'}</p>
                        <p><strong>Sender:</strong> ${simulation.template.sender || 'Phone-based'}</p>
                    </div>
                    
                    <div class="indicators">
                        <h5>🚨 Red Flags:</h5>
                        <ul>
                            ${simulation.template.indicators.map(indicator => 
                                `<li>${indicator.replace('_', ' ')}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <button onclick="awarenessCampaigns.previewSimulation('${simulation.id}')" 
                        class="preview-btn">
                    Preview Simulation
                </button>
            </div>
        `;
    }

    previewSimulation(simulationId) {
        const simulation = this.phishingSimulations[simulationId];
        if (!simulation) return;
        
        alert(`Simulation Preview:\n\n${simulation.name}\n\nDifficulty: ${simulation.difficulty}\n\nTemplate:\nSubject: ${simulation.template.subject || 'Phone call scenario'}\nSender: ${simulation.template.sender || 'Unknown caller'}\n\nKey indicators to watch for:\n• ${simulation.template.indicators.join('\n• ')}`);
    }
}

// CSS für Security Awareness Campaigns
const awarenessCSS = `
    .awareness-campaigns {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .campaigns-header {
        text-align: center;
        background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .campaigns-grid, .simulations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .campaign-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #e9ecef;
    }
    
    .campaign-card.impact-critical { border-left-color: #dc3545; }
    .campaign-card.impact-high { border-left-color: #fd7e14; }
    .campaign-card.impact-medium { border-left-color: #ffc107; }
    
    .card-header {
        padding: 20px;
        background: #f8f9fa;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .card-header h3 {
        margin: 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .duration {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: 500;
    }
    
    .card-content {
        padding: 20px;
    }
    
    .description {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
    }
    
    .campaign-phases h4, .target-audience h4 {
        margin: 15px 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .campaign-phases ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .campaign-phases li {
        font-size: 0.85em;
        color: #495057;
        margin-bottom: 5px;
    }
    
    .audience-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .audience-tag {
        background: #f8f9fa;
        color: #495057;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        border: 1px solid #dee2e6;
    }
    
    .card-actions {
        padding: 15px 20px;
        background: #f8f9fa;
    }
    
    .launch-btn {
        width: 100%;
        background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    .launch-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
    }
    
    .simulation-center {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .simulation-center h2 {
        color: #2c3e50;
        margin-bottom: 20px;
    }
    
    .simulation-card {
        background: #f8f9fa;
        border-radius: 10px;
        padding: 20px;
        border-left: 4px solid #6c757d;
    }
    
    .simulation-card.difficulty-easy { border-left-color: #28a745; }
    .simulation-card.difficulty-medium { border-left-color: #ffc107; }
    .simulation-card.difficulty-hard { border-left-color: #dc3545; }
    
    .sim-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .sim-header h4 {
        margin: 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .difficulty-badge {
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .simulation-card.difficulty-easy .difficulty-badge {
        background: #d4edda;
        color: #155724;
    }
    
    .simulation-card.difficulty-medium .difficulty-badge {
        background: #fff3cd;
        color: #856404;
    }
    
    .simulation-card.difficulty-hard .difficulty-badge {
        background: #f8d7da;
        color: #721c24;
    }
    
    .sim-details p {
        margin: 5px 0;
        font-size: 0.85em;
        color: #495057;
    }
    
    .indicators h5 {
        margin: 15px 0 8px 0;
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
    
    .preview-btn {
        width: 100%;
        background: #6c757d;
        color: white;
        border: none;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 15px;
        transition: all 0.3s ease;
    }
    
    .preview-btn:hover {
        background: #5a6268;
        transform: translateY(-1px);
    }
`;

// Style hinzufügen
const awarenessStyleSheet = document.createElement('style');
awarenessStyleSheet.textContent = awarenessCSS;
document.head.appendChild(awarenessStyleSheet);

// Global instance
window.awarenessCampaigns = new SecurityAwarenessCampaigns();
