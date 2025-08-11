// Incident Response Drills - Comprehensive Security Incident Training Platform
class IncidentResponseDrills {
    constructor() {
        this.incidentTypes = {};
        this.drillScenarios = {};
        this.responseTeams = new Map();
        this.activeDrills = new Map();
        this.performanceMetrics = new Map();
        this.playbooks = {};
        this.initializeDrills();
    }

    initializeDrills() {
        this.incidentTypes = {
            data_breach: {
                id: "data_breach",
                name: "🚨 Data Breach Response",
                severity: "critical",
                description: "Customer data compromise requiring immediate response",
                averageResponseTime: "4 hours",
                stakeholders: ["CISO", "Legal", "PR", "IT Security", "Management"],
                phases: ["Detection", "Containment", "Investigation", "Recovery", "Lessons Learned"],
                regulatoryRequirements: ["GDPR 72h notification", "Customer notification", "Regulatory filing"]
            },

            ransomware: {
                id: "ransomware",
                name: "🔒 Ransomware Attack",
                severity: "critical", 
                description: "Malware encryption attack on critical systems",
                averageResponseTime: "2 hours",
                stakeholders: ["IT Security", "IT Operations", "Management", "Legal", "FBI"],
                phases: ["Isolation", "Assessment", "Recovery", "Negotiation", "Restoration"],
                regulatoryRequirements: ["Law enforcement notification", "Insurance claim", "Business continuity"]
            },

            phishing_campaign: {
                id: "phishing_campaign",
                name: "🎣 Phishing Campaign",
                severity: "high",
                description: "Widespread phishing attack targeting employees",
                averageResponseTime: "1 hour",
                stakeholders: ["IT Security", "HR", "Communications", "Training Team"],
                phases: ["Detection", "Analysis", "Blocking", "User Education", "Monitoring"],
                regulatoryRequirements: ["Internal notification", "Security awareness update"]
            },

            insider_threat: {
                id: "insider_threat",
                name: "👤 Insider Threat",
                severity: "high",
                description: "Malicious or negligent employee activity",
                averageResponseTime: "8 hours",
                stakeholders: ["CISO", "HR", "Legal", "Management", "Investigation Team"],
                phases: ["Detection", "Evidence Collection", "Interview", "Disciplinary Action", "Prevention"],
                regulatoryRequirements: ["HR documentation", "Legal consultation", "Access review"]
            },

            ddos_attack: {
                id: "ddos_attack",
                name: "🌊 DDoS Attack",
                severity: "medium",
                description: "Distributed denial of service against web services",
                averageResponseTime: "30 minutes",
                stakeholders: ["IT Operations", "Network Team", "IT Security", "Management"],
                phases: ["Detection", "Mitigation", "Traffic Analysis", "Recovery", "Hardening"],
                regulatoryRequirements: ["Service level notifications", "Customer communication"]
            },

            supply_chain: {
                id: "supply_chain",
                name: "🔗 Supply Chain Attack",
                severity: "critical",
                description: "Compromise through third-party vendor",
                averageResponseTime: "6 hours",
                stakeholders: ["CISO", "Procurement", "Vendor Management", "Legal", "IT Security"],
                phases: ["Vendor Assessment", "Isolation", "Investigation", "Remediation", "Contract Review"],
                regulatoryRequirements: ["Vendor notification", "Contract breach assessment", "Regulatory disclosure"]
            }
        };

        this.initializeDrillScenarios();
        this.initializePlaybooks();
    }

    initializeDrillScenarios() {
        this.drillScenarios = {
            healthcare_breach: {
                id: "healthcare_breach",
                title: "🏥 Healthcare Data Breach Drill",
                incidentType: "data_breach",
                industry: "Healthcare",
                complexity: "high",
                duration: 4, // hours
                scenario: "Unauthorized access to patient records database detected. 50,000 patient records potentially compromised including PHI, SSNs, and medical histories.",
                injects: [
                    { time: 0, event: "Security alert: Unusual database access detected" },
                    { time: 30, event: "Investigation confirms unauthorized access to patient database" },
                    { time: 60, event: "Media inquiry received about potential data breach" },
                    { time: 90, event: "Regulatory body requests immediate status update" },
                    { time: 150, event: "Evidence suggests ongoing exfiltration" },
                    { time: 180, event: "Competitor announces they received anonymous tip about breach" }
                ],
                objectives: [
                    "Contain breach within 2 hours",
                    "Notify regulatory authorities within 72 hours",
                    "Preserve digital evidence",
                    "Coordinate with legal and PR teams",
                    "Implement patient notification process"
                ],
                successCriteria: {
                    containment: "< 2 hours",
                    notification: "< 72 hours", 
                    evidencePreservation: "Complete forensic images",
                    communicationPlan: "Approved messaging",
                    compliance: "All regulatory requirements met"
                }
            },

            financial_ransomware: {
                id: "financial_ransomware",
                title: "🏦 Banking Ransomware Incident",
                incidentType: "ransomware",
                industry: "Financial Services",
                complexity: "expert",
                duration: 6,
                scenario: "Critical banking systems encrypted by ransomware. Online banking, ATM network, and core banking systems affected. Ransom demand: $5M in Bitcoin.",
                injects: [
                    { time: 0, event: "Multiple system alerts: Files being encrypted" },
                    { time: 15, event: "Ransom note appears on executive workstations" },
                    { time: 45, event: "ATM network begins failing nationwide" },
                    { time: 90, event: "Social media reports of banking outages trending" },
                    { time: 120, event: "Regulators requesting immediate briefing" },
                    { time: 180, event: "News media contacts for statement on outage" },
                    { time: 240, event: "Ransomware group posts stolen data samples online" }
                ],
                objectives: [
                    "Isolate infected systems immediately",
                    "Activate business continuity procedures",
                    "Coordinate with law enforcement",
                    "Manage public communications",
                    "Restore critical services within 24 hours"
                ],
                successCriteria: {
                    isolation: "< 30 minutes",
                    bcpActivation: "< 1 hour",
                    lawEnforcement: "FBI contacted within 2 hours",
                    publicComms: "Coordinated messaging strategy",
                    restoration: "Critical services restored < 24 hours"
                }
            },

            tech_supply_chain: {
                id: "tech_supply_chain",
                title: "🔧 Software Supply Chain Compromise",
                incidentType: "supply_chain",
                industry: "Technology",
                complexity: "expert",
                duration: 8,
                scenario: "Malicious code discovered in third-party software library used across organization. Backdoor provides remote access to internal systems.",
                injects: [
                    { time: 0, event: "Security researcher publishes vulnerability in vendor software" },
                    { time: 30, event: "Internal scan confirms presence of vulnerable library" },
                    { time: 90, event: "Network monitoring detects suspicious outbound connections" },
                    { time: 150, event: "Vendor confirms malicious code in software update" },
                    { time: 240, event: "Evidence of data exfiltration discovered" },
                    { time: 300, event: "Industry peers report similar compromises" },
                    { time: 360, event: "Attribution to nation-state actor suggested" }
                ],
                objectives: [
                    "Identify all affected systems",
                    "Isolate compromised infrastructure", 
                    "Coordinate with vendor for patches",
                    "Assess data exposure scope",
                    "Implement enhanced monitoring"
                ],
                successCriteria: {
                    assetInventory: "Complete affected system list",
                    isolation: "All compromised systems quarantined",
                    vendorCoordination: "Patch timeline established",
                    dataAssessment: "Exposure scope documented",
                    monitoring: "Enhanced detection rules deployed"
                }
            },

            retail_pos: {
                id: "retail_pos",
                title: "🛒 Retail POS System Breach",
                incidentType: "data_breach",
                industry: "Retail",
                complexity: "medium",
                duration: 3,
                scenario: "Point-of-sale malware detected across retail locations. Credit card data potentially compromised during peak shopping season.",
                injects: [
                    { time: 0, event: "POS system performance degradation reported" },
                    { time: 45, event: "Malware signatures detected on POS terminals" },
                    { time: 90, event: "Credit card fraud alerts from payment processor" },
                    { time: 120, event: "Customer complaints about unauthorized charges" },
                    { time: 150, event: "Payment card industry requests investigation status" }
                ],
                objectives: [
                    "Isolate infected POS systems",
                    "Preserve transaction logs",
                    "Coordinate with payment processors",
                    "Implement customer notification",
                    "Engage forensic investigators"
                ],
                successCriteria: {
                    isolation: "POS systems secured",
                    evidencePreservation: "Transaction logs preserved",
                    processorCoordination: "Payment partners notified",
                    customerNotification: "Notification plan approved",
                    forensics: "Investigation team engaged"
                }
            }
        };
    }

    initializePlaybooks() {
        this.playbooks = {
            data_breach: {
                phases: {
                    "Detection": [
                        "Verify incident authenticity",
                        "Determine scope of compromise",
                        "Activate incident response team",
                        "Begin evidence preservation"
                    ],
                    "Containment": [
                        "Isolate affected systems",
                        "Prevent further data loss",
                        "Implement access controls",
                        "Coordinate with IT operations"
                    ],
                    "Investigation": [
                        "Conduct forensic analysis",
                        "Determine attack vector",
                        "Assess data exposure",
                        "Document timeline of events"
                    ],
                    "Recovery": [
                        "Restore affected systems",
                        "Implement security improvements",
                        "Resume normal operations",
                        "Monitor for suspicious activity"
                    ],
                    "Lessons Learned": [
                        "Conduct post-incident review",
                        "Update security controls",
                        "Revise incident procedures",
                        "Provide additional training"
                    ]
                }
            },

            ransomware: {
                phases: {
                    "Isolation": [
                        "Disconnect affected systems from network",
                        "Power down infected machines",
                        "Preserve evidence for investigation",
                        "Activate backup systems"
                    ],
                    "Assessment": [
                        "Determine encryption scope",
                        "Identify ransomware variant",
                        "Assess backup integrity",
                        "Evaluate business impact"
                    ],
                    "Recovery": [
                        "Implement backup restoration",
                        "Rebuild compromised systems",
                        "Deploy enhanced monitoring",
                        "Test system functionality"
                    ]
                }
            }
        };
    }

    startDrill(userId, scenarioId, teamMembers = []) {
        const scenario = this.drillScenarios[scenarioId];
        if (!scenario) return null;

        const drill = {
            drillId: `drill_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            scenarioId,
            facilitator: userId,
            teamMembers,
            startTime: new Date(),
            endTime: new Date(Date.now() + scenario.duration * 60 * 60 * 1000),
            currentPhase: 0,
            injectIndex: 0,
            status: "active",
            decisions: [],
            timeline: [],
            score: 0,
            objectives: {
                completed: [],
                pending: [...scenario.objectives]
            }
        };

        this.activeDrills.set(drill.drillId, drill);

        // Initialize team performance tracking
        teamMembers.forEach(memberId => {
            if (!this.performanceMetrics.has(memberId)) {
                this.performanceMetrics.set(memberId, {
                    drillsParticipated: 0,
                    averageScore: 0,
                    strengths: [],
                    improvements: [],
                    rolePerformance: {}
                });
            }
        });

        // Start first inject
        this.scheduleNextInject(drill.drillId);

        return drill;
    }

    scheduleNextInject(drillId) {
        const drill = this.activeDrills.get(drillId);
        if (!drill) return;

        const scenario = this.drillScenarios[drill.scenarioId];
        const currentInject = scenario.injects[drill.injectIndex];

        if (currentInject) {
            setTimeout(() => {
                this.deliverInject(drillId, currentInject);
            }, currentInject.time * 60 * 1000); // Convert minutes to milliseconds
        }
    }

    deliverInject(drillId, inject) {
        const drill = this.activeDrills.get(drillId);
        if (!drill || drill.status !== "active") return;

        drill.timeline.push({
            timestamp: new Date(),
            type: "inject",
            content: inject.event,
            injectTime: inject.time
        });

        drill.injectIndex++;

        // Schedule next inject
        this.scheduleNextInject(drillId);

        // Notify team members (in real implementation, would send notifications)
        console.log(`DRILL INJECT [${drillId}]: ${inject.event}`);

        return inject;
    }

    makeDecision(drillId, userId, decision, reasoning) {
        const drill = this.activeDrills.get(drillId);
        if (!drill) return null;

        const decisionRecord = {
            timestamp: new Date(),
            userId,
            decision,
            reasoning,
            phase: drill.currentPhase,
            impactScore: this.evaluateDecision(decision, drill.scenarioId)
        };

        drill.decisions.push(decisionRecord);
        drill.score += decisionRecord.impactScore;

        // Check if decision completes an objective
        this.checkObjectiveCompletion(drill, decision);

        // Update timeline
        drill.timeline.push({
            timestamp: new Date(),
            type: "decision",
            content: `${userId}: ${decision}`,
            score: decisionRecord.impactScore
        });

        // Award XP for drill participation
        if (window.skillTree) {
            window.skillTree.awardXP(userId, Math.max(5, decisionRecord.impactScore), 
                `Incident Response: ${decision.substring(0, 30)}`);
        }

        return decisionRecord;
    }

    evaluateDecision(decision, scenarioId) {
        const scenario = this.drillScenarios[scenarioId];
        const incidentType = this.incidentTypes[scenario.incidentType];

        // Score decisions based on best practices
        let score = 0;

        // Time-sensitive actions
        if (decision.toLowerCase().includes("isolate") || decision.toLowerCase().includes("contain")) {
            score += 20;
        }

        // Communication actions
        if (decision.toLowerCase().includes("notify") || decision.toLowerCase().includes("communicate")) {
            score += 15;
        }

        // Evidence preservation
        if (decision.toLowerCase().includes("preserve") || decision.toLowerCase().includes("forensic")) {
            score += 15;
        }

        // Stakeholder involvement
        if (incidentType.stakeholders.some(stakeholder => 
            decision.toLowerCase().includes(stakeholder.toLowerCase()))) {
            score += 10;
        }

        // Regulatory compliance
        if (decision.toLowerCase().includes("regulatory") || decision.toLowerCase().includes("compliance")) {
            score += 12;
        }

        return Math.max(1, score); // Minimum 1 point for participation
    }

    checkObjectiveCompletion(drill, decision) {
        const scenario = this.drillScenarios[drill.scenarioId];
        
        scenario.objectives.forEach(objective => {
            if (drill.objectives.pending.includes(objective)) {
                if (this.doesDecisionMeetObjective(decision, objective)) {
                    drill.objectives.pending = drill.objectives.pending.filter(o => o !== objective);
                    drill.objectives.completed.push(objective);
                    drill.score += 25; // Bonus for objective completion
                }
            }
        });
    }

    doesDecisionMeetObjective(decision, objective) {
        const keywords = objective.toLowerCase().split(' ');
        const decisionLower = decision.toLowerCase();
        
        return keywords.some(keyword => decisionLower.includes(keyword));
    }

    endDrill(drillId) {
        const drill = this.activeDrills.get(drillId);
        if (!drill) return null;

        drill.status = "completed";
        drill.actualEndTime = new Date();

        const report = this.generateDrillReport(drill);
        this.updatePerformanceMetrics(drill);

        return report;
    }

    generateDrillReport(drill) {
        const scenario = this.drillScenarios[drill.scenarioId];
        const duration = Math.round((drill.actualEndTime - drill.startTime) / 60000); // minutes
        
        return {
            scenario: scenario.title,
            duration: `${duration} minutes`,
            teamSize: drill.teamMembers.length,
            totalScore: drill.score,
            maxPossibleScore: scenario.objectives.length * 25 + drill.decisions.length * 20,
            objectivesCompleted: drill.objectives.completed.length,
            totalObjectives: scenario.objectives.length,
            completionRate: Math.round((drill.objectives.completed.length / scenario.objectives.length) * 100),
            keyDecisions: drill.decisions
                .sort((a, b) => b.impactScore - a.impactScore)
                .slice(0, 5)
                .map(d => ({ decision: d.decision, score: d.impactScore })),
            timeline: drill.timeline,
            recommendations: this.generateDrillRecommendations(drill),
            nextSteps: this.suggestFollowUpTraining(drill.scenarioId, drill.score)
        };
    }

    updatePerformanceMetrics(drill) {
        drill.teamMembers.forEach(memberId => {
            const metrics = this.performanceMetrics.get(memberId);
            if (metrics) {
                metrics.drillsParticipated++;
                
                const memberDecisions = drill.decisions.filter(d => d.userId === memberId);
                const memberScore = memberDecisions.reduce((sum, d) => sum + d.impactScore, 0);
                
                // Update average score
                metrics.averageScore = ((metrics.averageScore * (metrics.drillsParticipated - 1)) + memberScore) / metrics.drillsParticipated;
                
                // Identify strengths and improvements
                this.analyzePerformance(metrics, memberDecisions, drill.scenarioId);
            }
        });
    }

    analyzePerformance(metrics, decisions, scenarioId) {
        const scenario = this.drillScenarios[scenarioId];
        const incidentType = this.incidentTypes[scenario.incidentType];

        // Analyze decision patterns
        const communicationDecisions = decisions.filter(d => 
            d.decision.toLowerCase().includes("communicate") || 
            d.decision.toLowerCase().includes("notify")
        );

        const technicalDecisions = decisions.filter(d => 
            d.decision.toLowerCase().includes("isolate") || 
            d.decision.toLowerCase().includes("contain") ||
            d.decision.toLowerCase().includes("investigate")
        );

        // Update strengths
        if (communicationDecisions.length > 0 && !metrics.strengths.includes("communication")) {
            metrics.strengths.push("communication");
        }
        
        if (technicalDecisions.length > 0 && !metrics.strengths.includes("technical_response")) {
            metrics.strengths.push("technical_response");
        }

        // Identify improvements
        if (communicationDecisions.length === 0 && !metrics.improvements.includes("stakeholder_communication")) {
            metrics.improvements.push("stakeholder_communication");
        }
        
        if (technicalDecisions.length === 0 && !metrics.improvements.includes("technical_containment")) {
            metrics.improvements.push("technical_containment");
        }
    }

    generateDrillRecommendations(drill) {
        const recommendations = [];
        
        if (drill.objectives.completed.length < drill.objectives.pending.length) {
            recommendations.push("Focus on objective completion - ensure all incident response goals are addressed");
        }
        
        if (drill.decisions.filter(d => d.impactScore > 15).length < 3) {
            recommendations.push("Improve decision quality - focus on high-impact response actions");
        }
        
        const communicationDecisions = drill.decisions.filter(d => 
            d.decision.toLowerCase().includes("communicate") || d.decision.toLowerCase().includes("notify")
        );
        
        if (communicationDecisions.length < 2) {
            recommendations.push("Enhance communication practices - regular stakeholder updates are critical");
        }

        return recommendations;
    }

    renderDrillDashboard() {
        return `
            <div class="incident-drills">
                <div class="drills-header">
                    <h1>🚨 Incident Response Drills</h1>
                    <p>Comprehensive security incident training and tabletop exercises</p>
                </div>
                
                <div class="incident-types">
                    <h2>🎯 Incident Types</h2>
                    <div class="types-grid">
                        ${Object.values(this.incidentTypes).map(type => 
                            this.renderIncidentTypeCard(type)
                        ).join('')}
                    </div>
                </div>
                
                <div class="drill-scenarios">
                    <h2>📋 Training Scenarios</h2>
                    <div class="scenarios-grid">
                        ${Object.values(this.drillScenarios).map(scenario => 
                            this.renderDrillScenarioCard(scenario)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderIncidentTypeCard(type) {
        const severityClass = `severity-${type.severity}`;
        
        return `
            <div class="incident-type-card ${severityClass}">
                <div class="type-header">
                    <h3>${type.name}</h3>
                    <span class="severity">${type.severity}</span>
                </div>
                
                <div class="type-content">
                    <p class="description">${type.description}</p>
                    
                    <div class="type-details">
                        <div class="response-time">
                            <strong>⏱️ Avg Response:</strong> ${type.averageResponseTime}
                        </div>
                        
                        <div class="stakeholders">
                            <strong>👥 Key Stakeholders:</strong>
                            <div class="stakeholder-tags">
                                ${type.stakeholders.slice(0, 3).map(stakeholder => 
                                    `<span class="stakeholder-tag">${stakeholder}</span>`
                                ).join('')}
                                ${type.stakeholders.length > 3 ? `<span class="more">+${type.stakeholders.length - 3}</span>` : ''}
                            </div>
                        </div>
                        
                        <div class="phases">
                            <strong>📋 Response Phases:</strong> ${type.phases.length}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderDrillScenarioCard(scenario) {
        const complexityClass = `complexity-${scenario.complexity}`;
        
        return `
            <div class="drill-scenario-card ${complexityClass}">
                <div class="scenario-header">
                    <h4>${scenario.title}</h4>
                    <div class="scenario-meta">
                        <span class="industry">${scenario.industry}</span>
                        <span class="duration">${scenario.duration}h</span>
                    </div>
                </div>
                
                <div class="scenario-content">
                    <p class="scenario-description">${scenario.scenario}</p>
                    
                    <div class="objectives">
                        <h5>🎯 Objectives (${scenario.objectives.length}):</h5>
                        <ul>
                            ${scenario.objectives.slice(0, 3).map(objective => 
                                `<li>${objective}</li>`
                            ).join('')}
                            ${scenario.objectives.length > 3 ? '<li>...and more</li>' : ''}
                        </ul>
                    </div>
                    
                    <div class="injects-count">
                        <strong>📢 Injects:</strong> ${scenario.injects.length} planned events
                    </div>
                </div>
                
                <button onclick="incidentDrills.startDrill('demo_user', '${scenario.id}', ['team1', 'team2'])" 
                        class="start-drill-btn">
                    Start Drill
                </button>
            </div>
        `;
    }
}

// CSS für Incident Response Drills
const incidentDrillsCSS = `
    .incident-drills {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .drills-header {
        text-align: center;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .types-grid, .scenarios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .incident-type-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .incident-type-card.severity-medium { border-left-color: #ffc107; }
    .incident-type-card.severity-high { border-left-color: #fd7e14; }
    .incident-type-card.severity-critical { border-left-color: #dc3545; }
    
    .type-header {
        padding: 20px;
        background: #f8f9fa;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .type-header h3 {
        margin: 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .severity {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .incident-type-card.severity-medium .severity {
        background: #fff3cd;
        color: #856404;
    }
    
    .incident-type-card.severity-high .severity {
        background: #ffeaa7;
        color: #d63031;
    }
    
    .incident-type-card.severity-critical .severity {
        background: #f8d7da;
        color: #721c24;
    }
    
    .type-content {
        padding: 20px;
    }
    
    .description {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
    }
    
    .type-details > div {
        margin-bottom: 10px;
        font-size: 0.85em;
    }
    
    .type-details strong {
        color: #2c3e50;
    }
    
    .stakeholder-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 5px;
    }
    
    .stakeholder-tag, .more {
        background: #f8f9fa;
        color: #495057;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 0.7em;
        border: 1px solid #dee2e6;
    }
    
    .drill-scenario-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .drill-scenario-card.complexity-medium { border-left-color: #ffc107; }
    .drill-scenario-card.complexity-high { border-left-color: #fd7e14; }
    .drill-scenario-card.complexity-expert { border-left-color: #dc3545; }
    
    .scenario-header {
        padding: 20px;
        background: #f8f9fa;
    }
    
    .scenario-header h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .scenario-meta {
        display: flex;
        gap: 10px;
    }
    
    .industry, .duration {
        background: #e3f2fd;
        color: #1976d2;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: 500;
    }
    
    .scenario-content {
        padding: 20px;
    }
    
    .scenario-description {
        color: #495057;
        margin-bottom: 15px;
        font-style: italic;
        line-height: 1.4;
    }
    
    .objectives h5 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 0.85em;
    }
    
    .objectives ul {
        margin: 0 0 15px 0;
        padding-left: 15px;
    }
    
    .objectives li {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 3px;
    }
    
    .injects-count {
        font-size: 0.85em;
        color: #6c757d;
    }
    
    .start-drill-btn {
        width: 100%;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        border: none;
        padding: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .start-drill-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
    }
`;

// Style hinzufügen
const incidentDrillsStyleSheet = document.createElement('style');
incidentDrillsStyleSheet.textContent = incidentDrillsCSS;
document.head.appendChild(incidentDrillsStyleSheet);

// Global instance
window.incidentDrills = new IncidentResponseDrills();
