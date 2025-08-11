// Automated Threat Simulation - Advanced Cybersecurity Training Through Realistic Attack Simulations
class AutomatedThreatSimulation {
    constructor() {
        this.simulations = {};
        this.activeSimulations = new Map();
        this.simulationHistory = new Map();
        this.threatIntelligence = {};
        this.detectionRules = {};
        this.userProgress = new Map();
        this.realTimeEvents = [];
        this.initializeSimulations();
    }

    initializeSimulations() {
        this.simulations = {
            // Advanced Persistent Threat (APT) Simulation
            apt_campaign: {
                id: "apt_campaign",
                name: "🎯 APT Campaign Simulation",
                description: "Multi-stage advanced persistent threat targeting enterprise infrastructure",
                duration: 120, // 2 hours
                difficulty: "expert",
                category: "advanced_threats",
                attackVector: "multi-vector",
                targetEnvironment: "enterprise",
                learningObjectives: [
                    "Detect sophisticated lateral movement techniques",
                    "Identify command and control communications",
                    "Recognize data exfiltration patterns",
                    "Coordinate incident response for complex threats"
                ],
                phases: [
                    {
                        phase: 1,
                        name: "Initial Compromise",
                        duration: 15,
                        description: "Spear-phishing campaign targeting executives",
                        techniques: ["T1566.001", "T1204.002"], // MITRE ATT&CK
                        events: [
                            {
                                timestamp: "00:02:30",
                                type: "email_delivery",
                                description: "Suspicious email delivered to CEO",
                                indicators: ["suspicious-domain.com", "malicious.pdf"],
                                severity: "medium",
                                detection_rules: ["email_attachment_suspicious", "domain_reputation"]
                            },
                            {
                                timestamp: "00:05:15",
                                type: "file_execution",
                                description: "PDF exploit executed, dropper installed",
                                indicators: ["C:\\temp\\update.exe", "reg.exe HKCU\\Software\\Microsoft"],
                                severity: "high",
                                detection_rules: ["suspicious_process_creation", "registry_modification"]
                            }
                        ],
                        questions: [
                            {
                                timestamp: "00:03:00",
                                question: "An email security system flags a PDF attachment. What should be the immediate response?",
                                options: [
                                    "Block the email and quarantine attachment",
                                    "Allow delivery but monitor recipient activity",
                                    "Scan with additional AV engines only",
                                    "Forward to IT security for manual review"
                                ],
                                correct: 0,
                                explanation: "Immediate blocking prevents potential compromise while allowing investigation"
                            }
                        ]
                    },
                    {
                        phase: 2,
                        name: "Persistence & Privilege Escalation",
                        duration: 20,
                        description: "Establishing foothold and gaining elevated privileges",
                        techniques: ["T1547.001", "T1055", "T1134"],
                        events: [
                            {
                                timestamp: "00:18:45",
                                type: "persistence_established",
                                description: "Scheduled task created for persistence",
                                indicators: ["schtasks.exe", "\\Microsoft\\Windows\\SystemUpdate"],
                                severity: "high",
                                detection_rules: ["scheduled_task_creation", "persistence_mechanism"]
                            },
                            {
                                timestamp: "00:22:10",
                                type: "privilege_escalation",
                                description: "Exploiting Windows vulnerability for SYSTEM access",
                                indicators: ["CVE-2023-XXXX", "winlogon.exe process injection"],
                                severity: "critical",
                                detection_rules: ["process_injection", "privilege_escalation_attempt"]
                            }
                        ]
                    },
                    {
                        phase: 3,
                        name: "Discovery & Lateral Movement",
                        duration: 30,
                        description: "Network reconnaissance and spreading to additional systems",
                        techniques: ["T1018", "T1021.001", "T1083"],
                        events: [
                            {
                                timestamp: "00:35:20",
                                type: "network_scanning",
                                description: "Internal network reconnaissance initiated",
                                indicators: ["nmap-like behavior", "SMB enumeration", "LDAP queries"],
                                severity: "medium",
                                detection_rules: ["network_scanning", "smb_enumeration"]
                            },
                            {
                                timestamp: "00:42:15",
                                type: "lateral_movement",
                                description: "RDP connection to domain controller",
                                indicators: ["3389/tcp connections", "mstsc.exe", "credential dumping"],
                                severity: "critical",
                                detection_rules: ["rdp_lateral_movement", "credential_access"]
                            }
                        ]
                    },
                    {
                        phase: 4,
                        name: "Data Collection & Exfiltration",
                        duration: 25,
                        description: "Identifying and stealing sensitive data",
                        techniques: ["T1005", "T1041", "T1048.003"],
                        events: [
                            {
                                timestamp: "01:15:30",
                                type: "data_staging",
                                description: "Sensitive files compressed and staged for exfiltration",
                                indicators: ["7z.exe", "C:\\temp\\backup.7z", "financial_data_Q3.xlsx"],
                                severity: "high",
                                detection_rules: ["file_compression", "sensitive_data_access"]
                            },
                            {
                                timestamp: "01:28:45",
                                type: "exfiltration",
                                description: "Data uploaded to external cloud storage",
                                indicators: ["dropbox-api.com", "HTTPS uploads", "large data transfer"],
                                severity: "critical",
                                detection_rules: ["data_exfiltration", "cloud_upload_suspicious"]
                            }
                        ]
                    }
                ],
                evaluation_criteria: {
                    detection_speed: { weight: 0.3, max_points: 100 },
                    accuracy: { weight: 0.25, max_points: 100 },
                    response_quality: { weight: 0.25, max_points: 100 },
                    investigation_depth: { weight: 0.2, max_points: 100 }
                }
            },

            // Ransomware Attack Simulation
            ransomware_outbreak: {
                id: "ransomware_outbreak",
                name: "🔒 Ransomware Outbreak Simulation",
                description: "Large-scale ransomware deployment across corporate network",
                duration: 90,
                difficulty: "advanced",
                category: "malware",
                attackVector: "email_phishing",
                targetEnvironment: "corporate",
                learningObjectives: [
                    "Rapid ransomware detection and containment",
                    "Business continuity during crypto-attacks",
                    "Recovery procedures and backup validation",
                    "Communication with stakeholders and authorities"
                ],
                phases: [
                    {
                        phase: 1,
                        name: "Initial Infection",
                        duration: 10,
                        description: "Employee opens malicious attachment, ransomware begins encryption",
                        techniques: ["T1486", "T1083", "T1082"],
                        events: [
                            {
                                timestamp: "00:01:15",
                                type: "file_encryption_start",
                                description: "Ransomware begins encrypting user documents",
                                indicators: ["rapid file modifications", ".locked extension", "ransom_note.txt"],
                                severity: "critical",
                                detection_rules: ["mass_file_encryption", "ransom_note_creation"]
                            }
                        ]
                    },
                    {
                        phase: 2,
                        name: "Lateral Spread",
                        duration: 20,
                        description: "Ransomware spreads across network shares and connected systems",
                        techniques: ["T1021.002", "T1570", "T1135"],
                        events: [
                            {
                                timestamp: "00:08:30",
                                type: "network_propagation",
                                description: "Ransomware accessing network shares for encryption",
                                indicators: ["SMB traffic spikes", "multiple system encryption", "server share access"],
                                severity: "critical",
                                detection_rules: ["network_share_encryption", "multi_system_infection"]
                            }
                        ]
                    },
                    {
                        phase: 3,
                        name: "System Impact",
                        duration: 30,
                        description: "Critical business systems become unavailable",
                        events: [
                            {
                                timestamp: "00:25:00",
                                type: "business_disruption",
                                description: "Database servers and file servers encrypted",
                                indicators: ["database connection failures", "application downtime", "backup system alerts"],
                                severity: "critical"
                            }
                        ]
                    }
                ]
            },

            // Insider Threat Simulation
            insider_threat: {
                id: "insider_threat",
                name: "👤 Insider Threat Simulation",
                description: "Malicious insider conducting data theft and sabotage",
                duration: 75,
                difficulty: "intermediate",
                category: "insider_threats",
                attackVector: "legitimate_access",
                targetEnvironment: "corporate",
                learningObjectives: [
                    "Detect abnormal user behavior patterns",
                    "Monitor privileged user activities",
                    "Investigate potential insider threats",
                    "Balance security with employee privacy"
                ],
                phases: [
                    {
                        phase: 1,
                        name: "Unusual Access Patterns",
                        duration: 25,
                        description: "Employee accessing files outside normal scope",
                        events: [
                            {
                                timestamp: "00:05:00",
                                type: "unusual_file_access",
                                description: "HR employee accessing financial databases",
                                indicators: ["cross-department access", "after-hours activity", "bulk downloads"],
                                severity: "medium",
                                detection_rules: ["unusual_access_pattern", "privilege_misuse"]
                            }
                        ]
                    },
                    {
                        phase: 2,
                        name: "Data Hoarding",
                        duration: 30,
                        description: "Systematic collection of sensitive information",
                        events: [
                            {
                                timestamp: "00:35:00",
                                type: "data_collection",
                                description: "Large volumes of data copied to personal cloud storage",
                                indicators: ["cloud sync activity", "USB device usage", "email forwarding"],
                                severity: "high",
                                detection_rules: ["data_hoarding", "external_transfer"]
                            }
                        ]
                    }
                ]
            },

            // Supply Chain Attack Simulation
            supply_chain_attack: {
                id: "supply_chain_attack",
                name: "🔗 Supply Chain Attack Simulation",
                description: "Compromised software update delivering backdoor",
                duration: 100,
                difficulty: "expert",
                category: "supply_chain",
                attackVector: "software_update",
                targetEnvironment: "enterprise",
                learningObjectives: [
                    "Identify compromised software components",
                    "Validate software integrity and signatures",
                    "Assess third-party security risks",
                    "Implement supply chain security controls"
                ],
                phases: [
                    {
                        phase: 1,
                        name: "Compromised Update",
                        duration: 15,
                        description: "Legitimate software update contains hidden backdoor",
                        events: [
                            {
                                timestamp: "00:02:00",
                                type: "software_installation",
                                description: "Accounting software update automatically installed",
                                indicators: ["signed binary", "legitimate certificate", "hidden payload"],
                                severity: "high",
                                detection_rules: ["supply_chain_compromise", "software_integrity"]
                            }
                        ]
                    }
                ]
            },

            // Zero-Day Exploit Simulation
            zero_day_exploit: {
                id: "zero_day_exploit",
                name: "🆕 Zero-Day Exploit Simulation",
                description: "Previously unknown vulnerability being actively exploited",
                duration: 60,
                difficulty: "expert",
                category: "exploits",
                attackVector: "web_application",
                targetEnvironment: "web_server",
                learningObjectives: [
                    "Detect unknown attack patterns",
                    "Respond to novel exploitation techniques",
                    "Coordinate with vendor for patches",
                    "Implement emergency mitigations"
                ],
                phases: [
                    {
                        phase: 1,
                        name: "Initial Exploitation",
                        duration: 20,
                        description: "Unknown web application vulnerability exploited",
                        events: [
                            {
                                timestamp: "00:03:00",
                                type: "exploitation_attempt",
                                description: "Unusual web requests triggering application errors",
                                indicators: ["anomalous HTTP requests", "application crashes", "memory corruption"],
                                severity: "high",
                                detection_rules: ["web_application_anomaly", "exploit_attempt"]
                            }
                        ]
                    }
                ]
            }
        };

        this.initializeDetectionRules();
        this.initializeThreatIntelligence();
    }

    initializeDetectionRules() {
        this.detectionRules = {
            email_attachment_suspicious: {
                name: "Suspicious Email Attachment",
                description: "Detects potentially malicious email attachments",
                confidence: 0.75,
                false_positive_rate: 0.1
            },
            domain_reputation: {
                name: "Domain Reputation Check",
                description: "Checks domain against threat intelligence feeds",
                confidence: 0.9,
                false_positive_rate: 0.05
            },
            mass_file_encryption: {
                name: "Mass File Encryption",
                description: "Detects rapid encryption of multiple files",
                confidence: 0.95,
                false_positive_rate: 0.02
            },
            unusual_access_pattern: {
                name: "Unusual Access Pattern",
                description: "Identifies abnormal user access behaviors",
                confidence: 0.7,
                false_positive_rate: 0.15
            },
            supply_chain_compromise: {
                name: "Supply Chain Compromise",
                description: "Detects indicators of compromised software",
                confidence: 0.8,
                false_positive_rate: 0.08
            }
        };
    }

    initializeThreatIntelligence() {
        this.threatIntelligence = {
            apt_groups: {
                "APT29": { targets: ["government", "healthcare"], techniques: ["T1566.001", "T1055"] },
                "APT1": { targets: ["financial", "technology"], techniques: ["T1021.001", "T1041"] }
            },
            ransomware_families: {
                "Ryuk": { deployment: "manual", targets: ["healthcare", "municipal"] },
                "Conti": { deployment: "automated", targets: ["corporate", "financial"] }
            },
            indicators_of_compromise: {
                domains: ["malicious-domain.com", "c2-server.net"],
                file_hashes: ["a1b2c3d4e5f6...", "9f8e7d6c5b4a..."],
                ip_addresses: ["192.168.1.100", "10.0.0.50"]
            }
        };
    }

    startSimulation(userId, simulationId, configuration = {}) {
        const simulation = this.simulations[simulationId];
        if (!simulation) {
            throw new Error(`Simulation ${simulationId} not found`);
        }

        const sessionId = this.generateSessionId();
        const session = {
            sessionId,
            userId,
            simulationId,
            startTime: new Date(),
            configuration,
            currentPhase: 0,
            status: "running",
            detections: [],
            responses: [],
            score: 0,
            mistakes: [],
            timeline: [],
            realTimeMode: configuration.realTimeMode || false,
            speedMultiplier: configuration.speedMultiplier || 1.0
        };

        this.activeSimulations.set(sessionId, session);
        this.initializeUserProgress(userId);

        // Start first phase
        this.triggerPhaseEvents(sessionId, 0);

        return {
            sessionId,
            simulation: simulation,
            message: `Simulation "${simulation.name}" started successfully`,
            estimatedDuration: `${simulation.duration} minutes`,
            nextAction: "Monitor events and respond to security alerts"
        };
    }

    triggerPhaseEvents(sessionId, phaseIndex) {
        const session = this.activeSimulations.get(sessionId);
        const simulation = this.simulations[session.simulationId];
        const phase = simulation.phases[phaseIndex];

        if (!phase) return;

        session.currentPhase = phaseIndex;
        session.timeline.push({
            timestamp: new Date(),
            event: `Phase ${phaseIndex + 1} started: ${phase.name}`,
            type: "phase_start"
        });

        // Schedule events based on real-time mode
        if (session.realTimeMode) {
            this.scheduleRealTimeEvents(sessionId, phase);
        } else {
            // Immediate event delivery for training mode
            phase.events.forEach(event => {
                this.deliverEvent(sessionId, event);
            });
        }
    }

    scheduleRealTimeEvents(sessionId, phase) {
        phase.events.forEach(event => {
            const delay = this.parseTimestamp(event.timestamp) * session.speedMultiplier;
            setTimeout(() => {
                this.deliverEvent(sessionId, event);
            }, delay);
        });
    }

    deliverEvent(sessionId, event) {
        const session = this.activeSimulations.get(sessionId);
        if (!session || session.status !== "running") return;

        // Add event to timeline
        session.timeline.push({
            ...event,
            deliveredAt: new Date(),
            sessionTime: Date.now() - session.startTime.getTime()
        });

        // Trigger detection rules
        const detections = this.evaluateDetectionRules(event);
        detections.forEach(detection => {
            session.detections.push({
                ...detection,
                event: event,
                timestamp: new Date()
            });
        });

        // Notify frontend
        this.notifyEventDelivered(sessionId, event, detections);
    }

    evaluateDetectionRules(event) {
        const detections = [];
        
        if (event.detection_rules) {
            event.detection_rules.forEach(ruleId => {
                const rule = this.detectionRules[ruleId];
                if (rule && Math.random() < rule.confidence) {
                    // Check for false positive
                    if (Math.random() >= rule.false_positive_rate) {
                        detections.push({
                            ruleId,
                            ruleName: rule.name,
                            confidence: rule.confidence,
                            severity: event.severity,
                            indicators: event.indicators || []
                        });
                    }
                }
            });
        }

        return detections;
    }

    respondToEvent(sessionId, eventIndex, response) {
        const session = this.activeSimulations.get(sessionId);
        if (!session) return null;

        const event = session.timeline[eventIndex];
        if (!event) return null;

        const responseTime = Date.now() - event.deliveredAt.getTime();
        const responseData = {
            eventIndex,
            response,
            responseTime,
            timestamp: new Date()
        };

        session.responses.push(responseData);

        // Evaluate response quality
        const evaluation = this.evaluateResponse(session.simulationId, event, response, responseTime);
        
        session.score += evaluation.points;
        if (evaluation.mistakes.length > 0) {
            session.mistakes.push(...evaluation.mistakes);
        }

        return {
            evaluation,
            currentScore: session.score,
            feedback: evaluation.feedback
        };
    }

    evaluateResponse(simulationId, event, response, responseTime) {
        const simulation = this.simulations[simulationId];
        const evaluation = {
            points: 0,
            feedback: "",
            mistakes: [],
            strengths: []
        };

        // Time-based scoring
        if (event.severity === "critical" && responseTime < 300000) { // 5 minutes
            evaluation.points += 20;
            evaluation.strengths.push("Rapid response to critical event");
        } else if (responseTime > 900000) { // 15 minutes
            evaluation.mistakes.push("Slow response time for security event");
        }

        // Response appropriateness
        const appropriateActions = this.getAppropriateActions(event);
        if (appropriateActions.includes(response.action)) {
            evaluation.points += 15;
            evaluation.strengths.push("Appropriate action selected");
        } else {
            evaluation.mistakes.push("Inappropriate response action");
        }

        // Investigation depth
        if (response.investigation && response.investigation.length > 2) {
            evaluation.points += 10;
            evaluation.strengths.push("Thorough investigation conducted");
        }

        evaluation.feedback = this.generateResponseFeedback(evaluation);
        return evaluation;
    }

    getAppropriateActions(event) {
        const actionMapping = {
            "file_execution": ["isolate_system", "block_process", "analyze_file"],
            "network_scanning": ["monitor_traffic", "block_source", "investigate_target"],
            "data_exfiltration": ["block_connection", "isolate_system", "preserve_evidence"],
            "lateral_movement": ["disable_account", "isolate_systems", "reset_credentials"],
            "file_encryption_start": ["isolate_system", "stop_processes", "activate_backup"]
        };

        return actionMapping[event.type] || ["investigate", "monitor", "escalate"];
    }

    generateResponseFeedback(evaluation) {
        let feedback = "Response Analysis:\n";
        
        if (evaluation.strengths.length > 0) {
            feedback += "✅ Strengths:\n" + evaluation.strengths.map(s => `• ${s}`).join("\n") + "\n";
        }
        
        if (evaluation.mistakes.length > 0) {
            feedback += "⚠️ Areas for Improvement:\n" + evaluation.mistakes.map(m => `• ${m}`).join("\n") + "\n";
        }
        
        feedback += `📊 Points Earned: ${evaluation.points}`;
        return feedback;
    }

    completeSimulation(sessionId) {
        const session = this.activeSimulations.get(sessionId);
        if (!session) return null;

        session.status = "completed";
        session.endTime = new Date();
        session.duration = session.endTime.getTime() - session.startTime.getTime();

        // Calculate final score and metrics
        const results = this.calculateSimulationResults(session);
        
        // Update user progress
        this.updateUserProgress(session.userId, session.simulationId, results);
        
        // Archive session
        this.archiveSession(session);
        this.activeSimulations.delete(sessionId);

        return results;
    }

    calculateSimulationResults(session) {
        const simulation = this.simulations[session.simulationId];
        const criteria = simulation.evaluation_criteria;
        
        const metrics = {
            total_score: session.score,
            detection_speed: this.calculateDetectionSpeed(session),
            accuracy: this.calculateAccuracy(session),
            response_quality: this.calculateResponseQuality(session),
            investigation_depth: this.calculateInvestigationDepth(session)
        };

        // Weight and combine scores
        let finalScore = 0;
        Object.entries(criteria).forEach(([metric, config]) => {
            const score = Math.min(metrics[metric] || 0, config.max_points);
            finalScore += score * config.weight;
        });

        const performance = this.categorizePerformance(finalScore);

        return {
            finalScore: Math.round(finalScore),
            performance,
            metrics,
            strengths: this.identifyStrengths(session),
            improvements: this.identifyImprovements(session),
            recommendations: this.generateRecommendations(session, performance),
            certificate: performance === "excellent" ? this.generateCertificate(session) : null
        };
    }

    calculateDetectionSpeed(session) {
        const criticalEvents = session.timeline.filter(e => e.severity === "critical");
        const responses = session.responses.filter(r => 
            criticalEvents.some(e => session.timeline.indexOf(e) === r.eventIndex)
        );

        if (responses.length === 0) return 0;

        const avgResponseTime = responses.reduce((sum, r) => sum + r.responseTime, 0) / responses.length;
        
        // Score based on response time (inverse relationship)
        return Math.max(0, 100 - (avgResponseTime / 60000) * 10); // 10 points per minute
    }

    calculateAccuracy(session) {
        if (session.responses.length === 0) return 0;
        
        const correctResponses = session.responses.filter(r => {
            const event = session.timeline[r.eventIndex];
            return this.getAppropriateActions(event).includes(r.response.action);
        });

        return (correctResponses.length / session.responses.length) * 100;
    }

    calculateResponseQuality(session) {
        // Base score on response appropriateness, investigation depth, and communication
        let totalQuality = 0;
        
        session.responses.forEach(response => {
            let quality = 0;
            
            // Investigation depth
            if (response.response.investigation) {
                quality += Math.min(response.response.investigation.length * 10, 30);
            }
            
            // Communication quality
            if (response.response.communication && response.response.communication.length > 50) {
                quality += 20;
            }
            
            // Documentation
            if (response.response.documentation) {
                quality += 15;
            }
            
            totalQuality += quality;
        });

        return session.responses.length > 0 ? totalQuality / session.responses.length : 0;
    }

    calculateInvestigationDepth(session) {
        // Score based on number of indicators analyzed, tools used, etc.
        let investigationScore = 0;
        
        session.responses.forEach(response => {
            if (response.response.indicators_analyzed) {
                investigationScore += response.response.indicators_analyzed.length * 5;
            }
            
            if (response.response.tools_used) {
                investigationScore += response.response.tools_used.length * 3;
            }
        });

        return Math.min(investigationScore, 100);
    }

    categorizePerformance(score) {
        if (score >= 90) return "excellent";
        if (score >= 80) return "good";
        if (score >= 70) return "satisfactory";
        if (score >= 60) return "needs_improvement";
        return "poor";
    }

    identifyStrengths(session) {
        const strengths = [];
        
        if (session.detections.length > session.timeline.filter(e => e.severity === "critical").length * 0.8) {
            strengths.push("Strong threat detection capabilities");
        }
        
        const avgResponseTime = session.responses.reduce((sum, r) => sum + r.responseTime, 0) / session.responses.length;
        if (avgResponseTime < 300000) { // 5 minutes
            strengths.push("Rapid incident response");
        }
        
        if (session.mistakes.length < 3) {
            strengths.push("Consistent decision-making");
        }

        return strengths;
    }

    identifyImprovements(session) {
        const improvements = [];
        
        const criticalEvents = session.timeline.filter(e => e.severity === "critical").length;
        const criticalResponses = session.responses.filter(r => {
            const event = session.timeline[r.eventIndex];
            return event.severity === "critical";
        }).length;
        
        if (criticalResponses < criticalEvents * 0.7) {
            improvements.push("Improve response to critical security events");
        }
        
        if (session.mistakes.length > 5) {
            improvements.push("Focus on decision-making accuracy");
        }
        
        const investigationResponses = session.responses.filter(r => 
            r.response.investigation && r.response.investigation.length > 2
        ).length;
        
        if (investigationResponses < session.responses.length * 0.5) {
            improvements.push("Enhance investigation thoroughness");
        }

        return improvements;
    }

    generateRecommendations(session, performance) {
        const recommendations = [];
        const simulation = this.simulations[session.simulationId];
        
        if (performance === "poor" || performance === "needs_improvement") {
            recommendations.push({
                type: "remedial_training",
                title: "Foundation Skills Review",
                description: `Review fundamental concepts for ${simulation.category}`,
                priority: "high"
            });
        }
        
        recommendations.push({
            type: "advanced_training",
            title: "Next Level Simulation",
            description: "Try an advanced scenario in the same category",
            priority: "medium"
        });
        
        if (session.mistakes.some(m => m.includes("investigation"))) {
            recommendations.push({
                type: "skill_development",
                title: "Digital Forensics Training",
                description: "Enhance investigation and analysis skills",
                priority: "high"
            });
        }

        return recommendations;
    }

    generateCertificate(session) {
        const simulation = this.simulations[session.simulationId];
        return {
            id: this.generateCertificateId(),
            simulation: simulation.name,
            userId: session.userId,
            completedAt: session.endTime,
            performance: "excellent",
            validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
        };
    }

    updateUserProgress(userId, simulationId, results) {
        this.initializeUserProgress(userId);
        const progress = this.userProgress.get(userId);
        
        progress.completedSimulations.push({
            simulationId,
            completedAt: new Date(),
            score: results.finalScore,
            performance: results.performance
        });
        
        progress.totalScore += results.finalScore;
        progress.averageScore = progress.totalScore / progress.completedSimulations.length;
        
        // Update skill areas
        const simulation = this.simulations[simulationId];
        if (!progress.skillAreas[simulation.category]) {
            progress.skillAreas[simulation.category] = { count: 0, avgScore: 0 };
        }
        
        const skillArea = progress.skillAreas[simulation.category];
        skillArea.count++;
        skillArea.avgScore = ((skillArea.avgScore * (skillArea.count - 1)) + results.finalScore) / skillArea.count;

        // Award achievements and skill experience
        this.awardSimulationAchievements(userId, simulationId, results);
        this.awardSkillExperience(userId, simulationId, results);
    }

    awardSimulationAchievements(userId, simulationId, results) {
        if (!window.achievementSystem) return;

        const simulation = this.simulations[simulationId];
        
        // Simulation completion achievements
        window.achievementSystem.updateProgress(userId, 'threat_simulation_novice', 1);
        
        if (results.performance === "excellent") {
            window.achievementSystem.updateProgress(userId, 'simulation_expert', 1);
        }
        
        // Category-specific achievements
        if (simulation.category === "advanced_threats") {
            window.achievementSystem.updateProgress(userId, 'apt_hunter', 1);
        }
        
        // Speed achievements
        if (results.metrics.detection_speed > 90) {
            window.achievementSystem.updateProgress(userId, 'rapid_responder', 1);
        }
    }

    awardSkillExperience(userId, simulationId, results) {
        if (!window.skillTree) return;

        const simulation = this.simulations[simulationId];
        const baseXP = Math.round(results.finalScore * 2);
        
        const skillMapping = {
            "advanced_threats": ["threat_intelligence", "advanced_incident_response"],
            "malware": ["malware_analysis", "incident_response_basics"],
            "insider_threats": ["behavioral_analysis", "investigation_techniques"],
            "supply_chain": ["risk_management", "vendor_security"],
            "exploits": ["vulnerability_assessment", "patch_management"]
        };
        
        const relevantSkills = skillMapping[simulation.category] || ["security_fundamentals"];
        
        relevantSkills.forEach(skillId => {
            window.skillTree.addExperience(userId, skillId, baseXP, 'threat_simulation');
        });
    }

    archiveSession(session) {
        if (!this.simulationHistory.has(session.userId)) {
            this.simulationHistory.set(session.userId, []);
        }
        
        this.simulationHistory.get(session.userId).push(session);
    }

    initializeUserProgress(userId) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                completedSimulations: [],
                totalScore: 0,
                averageScore: 0,
                skillAreas: {},
                certificates: [],
                preferences: {
                    realTimeMode: false,
                    speedMultiplier: 1.0,
                    preferredCategories: []
                }
            });
        }
    }

    generateSessionId() {
        return 'sim_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateCertificateId() {
        return 'cert_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    parseTimestamp(timestamp) {
        // Convert "00:05:30" to milliseconds
        const parts = timestamp.split(':');
        return (parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2])) * 1000;
    }

    notifyEventDelivered(sessionId, event, detections) {
        // This would integrate with frontend notifications
        console.log(`Event delivered for session ${sessionId}:`, event);
        if (detections.length > 0) {
            console.log(`Detections triggered:`, detections);
        }
    }

    getSimulationOverview(userId) {
        this.initializeUserProgress(userId);
        const progress = this.userProgress.get(userId);
        
        return {
            availableSimulations: Object.values(this.simulations).map(sim => ({
                id: sim.id,
                name: sim.name,
                description: sim.description,
                difficulty: sim.difficulty,
                duration: sim.duration,
                category: sim.category,
                completed: progress.completedSimulations.some(cs => cs.simulationId === sim.id)
            })),
            userProgress: {
                totalCompleted: progress.completedSimulations.length,
                averageScore: Math.round(progress.averageScore),
                skillAreas: progress.skillAreas,
                certificates: progress.certificates.length
            },
            recommendations: this.getPersonalizedRecommendations(userId)
        };
    }

    getPersonalizedRecommendations(userId) {
        const progress = this.userProgress.get(userId);
        const recommendations = [];
        
        // Recommend based on skill gaps
        const weakAreas = Object.entries(progress.skillAreas)
            .filter(([_, area]) => area.avgScore < 70)
            .map(([category, _]) => category);
        
        weakAreas.forEach(category => {
            const simulation = Object.values(this.simulations)
                .find(sim => sim.category === category && 
                      !progress.completedSimulations.some(cs => cs.simulationId === sim.id));
            
            if (simulation) {
                recommendations.push({
                    type: "skill_improvement",
                    simulation: simulation,
                    reason: `Improve performance in ${category}`
                });
            }
        });
        
        // Recommend next difficulty level
        if (progress.averageScore > 85) {
            const expertSims = Object.values(this.simulations)
                .filter(sim => sim.difficulty === "expert" && 
                        !progress.completedSimulations.some(cs => cs.simulationId === sim.id));
            
            if (expertSims.length > 0) {
                recommendations.push({
                    type: "challenge",
                    simulation: expertSims[0],
                    reason: "Ready for expert-level challenges"
                });
            }
        }

        return recommendations.slice(0, 3); // Top 3 recommendations
    }

    renderSimulationDashboard() {
        return `
            <div class="threat-simulation-container">
                <div class="simulation-header">
                    <h1>🎯 Automated Threat Simulation</h1>
                    <p>Realistic cybersecurity scenarios for advanced training</p>
                </div>
                
                <div class="simulation-grid">
                    ${Object.values(this.simulations).map(simulation => 
                        this.renderSimulationCard(simulation)
                    ).join('')}
                </div>
                
                <div class="simulation-controls">
                    <h2>⚙️ Simulation Settings</h2>
                    ${this.renderSimulationControls()}
                </div>
            </div>
        `;
    }

    renderSimulationCard(simulation) {
        const difficultyClass = `difficulty-${simulation.difficulty}`;
        
        return `
            <div class="simulation-card ${difficultyClass}">
                <div class="card-header">
                    <h3>${simulation.name}</h3>
                    <span class="difficulty-badge">${simulation.difficulty}</span>
                </div>
                
                <div class="card-content">
                    <p class="description">${simulation.description}</p>
                    
                    <div class="simulation-meta">
                        <div class="meta-item">
                            <span class="label">Duration:</span>
                            <span class="value">${simulation.duration} min</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Category:</span>
                            <span class="value">${simulation.category}</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Attack Vector:</span>
                            <span class="value">${simulation.attackVector}</span>
                        </div>
                    </div>
                    
                    <div class="learning-objectives">
                        <h4>🎯 Learning Objectives:</h4>
                        <ul>
                            ${simulation.learningObjectives.map(obj => 
                                `<li>${obj}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="simulation-phases">
                        <h4>📅 Simulation Phases:</h4>
                        <div class="phase-list">
                            ${simulation.phases.map((phase, index) => 
                                `<div class="phase-item">
                                    <span class="phase-number">${index + 1}</span>
                                    <span class="phase-name">${phase.name}</span>
                                    <span class="phase-duration">${phase.duration}min</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="card-actions">
                    <button onclick="threatSimulation.startSimulation('current_user', '${simulation.id}')" 
                            class="start-simulation-btn">
                        Start Simulation
                    </button>
                    <button onclick="threatSimulation.showSimulationDetails('${simulation.id}')" 
                            class="details-btn">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }

    renderSimulationControls() {
        return `
            <div class="controls-grid">
                <div class="control-group">
                    <label>⏱️ Real-Time Mode:</label>
                    <input type="checkbox" id="realTimeMode" onchange="threatSimulation.updateSettings()">
                    <span class="help-text">Events occur in real-time with delays</span>
                </div>
                
                <div class="control-group">
                    <label>⚡ Speed Multiplier:</label>
                    <select id="speedMultiplier" onchange="threatSimulation.updateSettings()">
                        <option value="0.5">0.5x (Slow)</option>
                        <option value="1.0" selected>1.0x (Normal)</option>
                        <option value="2.0">2.0x (Fast)</option>
                        <option value="5.0">5.0x (Very Fast)</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label>🎯 Preferred Categories:</label>
                    <div class="category-checkboxes">
                        <label><input type="checkbox" value="advanced_threats"> Advanced Threats</label>
                        <label><input type="checkbox" value="malware"> Malware</label>
                        <label><input type="checkbox" value="insider_threats"> Insider Threats</label>
                        <label><input type="checkbox" value="supply_chain"> Supply Chain</label>
                        <label><input type="checkbox" value="exploits"> Exploits</label>
                    </div>
                </div>
            </div>
        `;
    }

    showSimulationDetails(simulationId) {
        const simulation = this.simulations[simulationId];
        alert(`Simulation Details:\n\n${simulation.name}\n\n${simulation.description}\n\nThis simulation will test your ability to detect and respond to sophisticated cybersecurity threats in a realistic environment.`);
    }

    updateSettings() {
        const realTimeMode = document.getElementById('realTimeMode').checked;
        const speedMultiplier = parseFloat(document.getElementById('speedMultiplier').value);
        
        console.log('Simulation settings updated:', { realTimeMode, speedMultiplier });
    }
}

// CSS for Automated Threat Simulation
const threatSimulationCSS = `
    .threat-simulation-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .simulation-header {
        text-align: center;
        background: linear-gradient(135deg, #dc3545 0%, #6f42c1 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .simulation-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }
    
    .simulation-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        border-left: 5px solid #e9ecef;
    }
    
    .simulation-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .simulation-card.difficulty-expert {
        border-left-color: #dc3545;
    }
    
    .simulation-card.difficulty-advanced {
        border-left-color: #fd7e14;
    }
    
    .simulation-card.difficulty-intermediate {
        border-left-color: #ffc107;
    }
    
    .card-header {
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .card-header h3 {
        margin: 0;
        font-size: 1.2em;
    }
    
    .difficulty-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
        background: rgba(255,255,255,0.2);
    }
    
    .card-content {
        padding: 25px;
    }
    
    .description {
        color: #495057;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    
    .simulation-meta {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .meta-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    
    .meta-item:last-child {
        margin-bottom: 0;
    }
    
    .meta-item .label {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .meta-item .value {
        color: #2c3e50;
        font-weight: 500;
        font-size: 0.9em;
    }
    
    .learning-objectives {
        margin-bottom: 20px;
    }
    
    .learning-objectives h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.95em;
    }
    
    .learning-objectives ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .learning-objectives li {
        color: #495057;
        font-size: 0.85em;
        margin-bottom: 5px;
    }
    
    .simulation-phases {
        margin-bottom: 20px;
    }
    
    .simulation-phases h4 {
        margin: 0 0 15px 0;
        color: #2c3e50;
        font-size: 0.95em;
    }
    
    .phase-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .phase-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        background: #f8f9fa;
        border-radius: 8px;
        font-size: 0.85em;
    }
    
    .phase-number {
        background: #007bff;
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .phase-name {
        flex: 1;
        color: #2c3e50;
        font-weight: 500;
    }
    
    .phase-duration {
        color: #6c757d;
        font-size: 0.8em;
    }
    
    .card-actions {
        padding: 20px;
        background: #f8f9fa;
        display: flex;
        gap: 10px;
    }
    
    .start-simulation-btn {
        flex: 1;
        background: linear-gradient(135deg, #dc3545 0%, #6f42c1 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    .start-simulation-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
    }
    
    .details-btn {
        background: #6c757d;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .details-btn:hover {
        background: #5a6268;
        transform: translateY(-1px);
    }
    
    .simulation-controls {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .simulation-controls h2 {
        color: #2c3e50;
        margin-bottom: 25px;
    }
    
    .controls-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }
    
    .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .control-group label {
        color: #2c3e50;
        font-weight: 500;
        font-size: 0.9em;
    }
    
    .control-group input, .control-group select {
        padding: 8px 12px;
        border: 1px solid #ced4da;
        border-radius: 6px;
        font-size: 0.9em;
    }
    
    .help-text {
        color: #6c757d;
        font-size: 0.8em;
        margin-top: 4px;
    }
    
    .category-checkboxes {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .category-checkboxes label {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #495057;
        font-weight: normal;
        font-size: 0.85em;
    }
    
    .category-checkboxes input[type="checkbox"] {
        margin: 0;
        width: auto;
    }
    
    @media (max-width: 768px) {
        .simulation-grid {
            grid-template-columns: 1fr;
        }
        
        .controls-grid {
            grid-template-columns: 1fr;
        }
        
        .card-actions {
            flex-direction: column;
        }
    }
`;

// Style hinzufügen
const threatSimulationStyleSheet = document.createElement('style');
threatSimulationStyleSheet.textContent = threatSimulationCSS;
document.head.appendChild(threatSimulationStyleSheet);

// Global instance
window.threatSimulation = new AutomatedThreatSimulation();
