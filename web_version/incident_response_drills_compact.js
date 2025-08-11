// Incident Response Drills - Comprehensive Incident Response Training Platform
class IncidentResponseDrills {
    constructor() {
        this.incidentTypes = {};
        this.drillSessions = new Map();
        this.responsePlaybooks = {};
        this.teamRoles = {};
        this.communicationTemplates = {};
        this.metricsData = new Map();
        this.initializeDrills();
    }

    initializeDrills() {
        this.incidentTypes = {
            data_breach: {
                id: "data_breach",
                title: "🔓 Data Breach Response",
                severity: "critical",
                complexity: "high",
                estimatedDuration: 180, // minutes
                description: "Customer database compromised with PII exposure",
                initialState: {
                    affectedSystems: ["customer_db", "web_portal", "backup_system"],
                    dataTypes: ["PII", "financial", "authentication"],
                    estimatedRecords: 50000,
                    breachVector: "SQL injection",
                    containmentStatus: "not_contained",
                    stakeholderNotified: false
                },
                phases: [
                    { phase: "detection", duration: 30, objectives: ["Confirm breach", "Assess scope", "Activate team"] },
                    { phase: "containment", duration: 60, objectives: ["Stop data flow", "Preserve evidence", "Isolate systems"] },
                    { phase: "eradication", duration: 45, objectives: ["Remove threat", "Patch vulnerabilities", "Validate security"] },
                    { phase: "recovery", duration: 30, objectives: ["Restore services", "Monitor systems", "Validate integrity"] },
                    { phase: "lessons_learned", duration: 15, objectives: ["Document findings", "Update procedures", "Train team"] }
                ],
                requiredRoles: ["incident_commander", "security_analyst", "legal_counsel", "communications", "technical_lead"],
                complianceRequirements: ["GDPR notification (72h)", "Customer notification", "Regulatory filing"]
            },

            ransomware_attack: {
                id: "ransomware_attack",
                title: "🦠 Ransomware Incident",
                severity: "critical",
                complexity: "high",
                estimatedDuration: 240,
                description: "Widespread ransomware deployment across enterprise network",
                initialState: {
                    affectedSystems: ["file_servers", "workstations", "domain_controllers"],
                    encryptionStatus: "spreading",
                    backupStatus: "partially_affected",
                    ransomDemand: "$2.5M Bitcoin",
                    communicationReceived: true,
                    businessImpact: "severe"
                },
                phases: [
                    { phase: "immediate_response", duration: 15, objectives: ["Disconnect network", "Assess spread", "Alert team"] },
                    { phase: "containment", duration: 90, objectives: ["Isolate systems", "Stop spread", "Preserve evidence"] },
                    { phase: "assessment", duration: 60, objectives: ["Inventory damage", "Check backups", "Evaluate options"] },
                    { phase: "recovery", duration: 60, objectives: ["Restore from backups", "Rebuild systems", "Validate integrity"] },
                    { phase: "strengthening", duration: 15, objectives: ["Improve defenses", "Update procedures", "Train users"] }
                ],
                requiredRoles: ["incident_commander", "security_analyst", "system_admin", "backup_specialist", "legal_counsel"],
                complianceRequirements: ["Law enforcement notification", "Insurance claim", "Regulatory reporting"]
            },

            phishing_campaign: {
                id: "phishing_campaign",
                title: "🎣 Large-scale Phishing Attack",
                severity: "high",
                complexity: "medium",
                estimatedDuration: 120,
                description: "Sophisticated phishing campaign targeting executive credentials",
                initialState: {
                    affectedUsers: 150,
                    credentialsCompromised: 8,
                    emailsDelivered: 1200,
                    clickThroughRate: "12%",
                    executiveTargeted: true,
                    ongoingCampaign: true
                },
                phases: [
                    { phase: "detection", duration: 20, objectives: ["Identify campaign", "Count victims", "Analyze emails"] },
                    { phase: "containment", duration: 40, objectives: ["Block emails", "Reset passwords", "Revoke sessions"] },
                    { phase: "investigation", duration: 30, objectives: ["Trace source", "Analyze payload", "Check for data theft"] },
                    { phase: "recovery", duration: 20, objectives: ["Restore access", "Update security", "Validate systems"] },
                    { phase: "prevention", duration: 10, objectives: ["User training", "Email filtering", "Awareness campaign"] }
                ],
                requiredRoles: ["security_analyst", "email_admin", "user_support", "communications"],
                complianceRequirements: ["User notification", "Security awareness update"]
            },

            insider_threat: {
                id: "insider_threat",
                title: "👤 Insider Threat Investigation",
                severity: "high",
                complexity: "expert",
                estimatedDuration: 300,
                description: "Suspicious activity detected from privileged user account",
                initialState: {
                    suspiciousUser: "john.doe@company.com",
                    privilegeLevel: "database_admin",
                    anomalousActivity: ["off-hours access", "bulk data download", "privilege escalation"],
                    dataAccessed: "financial_records",
                    investigationStatus: "covert",
                    evidencePreserved: false
                },
                phases: [
                    { phase: "initial_assessment", duration: 60, objectives: ["Validate threat", "Preserve evidence", "Plan investigation"] },
                    { phase: "covert_monitoring", duration: 120, objectives: ["Monitor activity", "Gather evidence", "Assess intent"] },
                    { phase: "confrontation", duration: 60, objectives: ["Interview subject", "Secure access", "Document findings"] },
                    { phase: "remediation", duration: 45, objectives: ["Revoke access", "Secure data", "Legal coordination"] },
                    { phase: "prevention", duration: 15, objectives: ["Update monitoring", "Policy review", "Team training"] }
                ],
                requiredRoles: ["security_analyst", "hr_representative", "legal_counsel", "forensics_specialist"],
                complianceRequirements: ["HR coordination", "Legal review", "Evidence chain of custody"]
            },

            ddos_attack: {
                id: "ddos_attack",
                title: "🌊 DDoS Attack Response",
                severity: "high",
                complexity: "medium",
                estimatedDuration: 90,
                description: "Distributed denial of service attack overwhelming web services",
                initialState: {
                    targetServices: ["web_portal", "api_gateway", "customer_app"],
                    attackVector: "volumetric",
                    trafficVolume: "500Gbps",
                    serviceStatus: "degraded",
                    mitigationActive: false,
                    customerImpact: "high"
                },
                phases: [
                    { phase: "detection", duration: 10, objectives: ["Confirm attack", "Identify vector", "Assess impact"] },
                    { phase: "mitigation", duration: 30, objectives: ["Activate DDoS protection", "Filter traffic", "Scale resources"] },
                    { phase: "stabilization", duration: 30, objectives: ["Monitor effectiveness", "Adjust filtering", "Restore services"] },
                    { phase: "investigation", duration: 15, objectives: ["Analyze attack", "Identify source", "Document timeline"] },
                    { phase: "strengthening", duration: 5, objectives: ["Update defenses", "Review capacity", "Improve monitoring"] }
                ],
                requiredRoles: ["network_engineer", "security_analyst", "operations_team", "communications"],
                complianceRequirements: ["Customer communication", "Service level documentation"]
            },

            supply_chain_attack: {
                id: "supply_chain_attack",
                title: "🔗 Supply Chain Compromise",
                severity: "critical",
                complexity: "expert",
                estimatedDuration: 360,
                description: "Third-party software update contains malicious code",
                initialState: {
                    compromisedVendor: "TechSoft Solutions",
                    affectedSoftware: "Enterprise Management Suite",
                    deploymentScope: "80% of infrastructure",
                    backdoorPresent: true,
                    vendorNotified: false,
                    industryImpact: "widespread"
                },
                phases: [
                    { phase: "discovery", duration: 45, objectives: ["Confirm compromise", "Assess scope", "Isolate systems"] },
                    { phase: "vendor_coordination", duration: 60, objectives: ["Contact vendor", "Share intelligence", "Coordinate response"] },
                    { phase: "remediation", duration: 120, objectives: ["Remove malware", "Patch systems", "Validate integrity"] },
                    { phase: "monitoring", duration: 90, objectives: ["Enhanced monitoring", "Threat hunting", "Validate clean state"] },
                    { phase: "industry_coordination", duration: 45, objectives: ["Share IOCs", "Notify peers", "Update defenses"] }
                ],
                requiredRoles: ["incident_commander", "threat_intelligence", "vendor_management", "technical_lead", "communications"],
                complianceRequirements: ["Vendor notification", "Industry sharing", "Regulatory reporting"]
            }
        };

        this.initializePlaybooks();
        this.initializeTeamRoles();
        this.initializeCommunicationTemplates();
    }

    initializePlaybooks() {
        this.responsePlaybooks = {
            data_breach: {
                immediateActions: [
                    "Activate incident response team within 15 minutes",
                    "Document initial findings and timeline",
                    "Preserve system state and evidence",
                    "Assess scope and impact of breach"
                ],
                containmentSteps: [
                    "Isolate affected systems from network",
                    "Change all potentially compromised credentials",
                    "Implement additional monitoring",
                    "Block unauthorized access vectors"
                ],
                communicationPlan: [
                    "Notify legal and compliance teams immediately",
                    "Prepare stakeholder communication",
                    "Draft customer notification (if required)",
                    "Coordinate with law enforcement if needed"
                ],
                recoveryActions: [
                    "Validate system integrity before restoration",
                    "Implement additional security controls",
                    "Monitor for signs of continued compromise",
                    "Update incident response procedures"
                ]
            },

            ransomware_attack: {
                immediateActions: [
                    "Disconnect affected systems from network IMMEDIATELY",
                    "Do not power down systems (preserve memory)",
                    "Activate incident response team",
                    "Contact law enforcement and legal team"
                ],
                containmentSteps: [
                    "Identify patient zero and attack vector",
                    "Isolate all potentially affected systems",
                    "Assess backup integrity and availability",
                    "Document all evidence and actions taken"
                ],
                recoveryActions: [
                    "Restore from clean, verified backups",
                    "Rebuild compromised systems from scratch",
                    "Implement enhanced endpoint protection",
                    "Conduct thorough security assessment"
                ]
            }
        };
    }

    initializeTeamRoles() {
        this.teamRoles = {
            incident_commander: {
                title: "Incident Commander",
                responsibilities: [
                    "Overall incident coordination and decision making",
                    "Stakeholder communication and updates",
                    "Resource allocation and team coordination",
                    "Strategic decisions on response approach"
                ],
                skills: ["Leadership", "Decision making", "Communication", "Risk assessment"],
                authority: "Full incident response authority"
            },

            security_analyst: {
                title: "Security Analyst",
                responsibilities: [
                    "Technical analysis of security events",
                    "Threat hunting and forensics",
                    "Security tool operation and monitoring",
                    "Evidence collection and preservation"
                ],
                skills: ["Technical analysis", "Forensics", "Tool expertise", "Documentation"],
                authority: "Technical investigation and containment"
            },

            communications: {
                title: "Communications Lead",
                responsibilities: [
                    "Internal and external communications",
                    "Media relations and public statements",
                    "Customer and stakeholder notifications",
                    "Messaging consistency and coordination"
                ],
                skills: ["Communication", "Public relations", "Crisis management", "Stakeholder management"],
                authority: "Communication approval and coordination"
            },

            legal_counsel: {
                title: "Legal Counsel",
                responsibilities: [
                    "Legal and regulatory compliance guidance",
                    "Law enforcement coordination",
                    "Contract and liability assessment",
                    "Evidence handling and chain of custody"
                ],
                skills: ["Legal expertise", "Compliance", "Risk assessment", "Documentation"],
                authority: "Legal guidance and compliance decisions"
            },

            technical_lead: {
                title: "Technical Lead",
                responsibilities: [
                    "Technical response coordination",
                    "System recovery and restoration",
                    "Infrastructure security assessment",
                    "Technical solution implementation"
                ],
                skills: ["Technical expertise", "System administration", "Security engineering", "Problem solving"],
                authority: "Technical implementation and system changes"
            }
        };
    }

    initializeCommunicationTemplates() {
        this.communicationTemplates = {
            initial_notification: {
                subject: "URGENT: Security Incident Response Activated",
                content: `
Incident Response Team,

A security incident has been detected and the incident response process is now activated.

Incident Type: {INCIDENT_TYPE}
Severity: {SEVERITY}
Initial Assessment: {DESCRIPTION}
Incident Commander: {COMMANDER}

Immediate Actions Required:
{IMMEDIATE_ACTIONS}

Please join the incident response call: {BRIDGE_NUMBER}
War room location: {LOCATION}

Next update scheduled: {NEXT_UPDATE}

{COMMANDER}
Incident Commander
                `
            },

            stakeholder_update: {
                subject: "Security Incident Status Update #{UPDATE_NUMBER}",
                content: `
Leadership Team,

Security Incident Status Update:

Current Status: {STATUS}
Time Since Detection: {ELAPSED_TIME}
Impact Assessment: {IMPACT}

Progress Update:
{PROGRESS_SUMMARY}

Next Steps:
{NEXT_STEPS}

Estimated Resolution: {ETA}
Next Update: {NEXT_UPDATE}

{COMMANDER}
Incident Commander
                `
            },

            customer_notification: {
                subject: "Important Security Notice",
                content: `
Dear Valued Customer,

We are writing to inform you of a security incident that may have affected your account information.

What Happened:
{INCIDENT_SUMMARY}

Information Involved:
{AFFECTED_DATA}

What We Are Doing:
{OUR_RESPONSE}

What You Should Do:
{CUSTOMER_ACTIONS}

We sincerely apologize for this incident and any inconvenience it may cause.

For questions: {CONTACT_INFO}

Security Team
                `
            }
        };
    }

    startDrill(userId, incidentTypeId, teamMembers = []) {
        const incidentType = this.incidentTypes[incidentTypeId];
        if (!incidentType) return null;

        const drill = {
            drillId: `drill_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            incidentTypeId,
            teamMembers,
            startTime: new Date(),
            currentPhase: 0,
            status: "active",
            currentState: JSON.parse(JSON.stringify(incidentType.initialState)),
            timeline: [],
            decisions: [],
            score: 0,
            phaseCompletions: []
        };

        this.drillSessions.set(drill.drillId, drill);

        // Start first phase
        this.startPhase(drill.drillId, 0);

        return drill;
    }

    makeDecision(drillId, decisionType, parameters) {
        const drill = this.drillSessions.get(drillId);
        if (!drill || drill.status !== "active") return null;

        const decision = {
            decisionId: `decision_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type: decisionType,
            parameters,
            timestamp: new Date(),
            phase: drill.currentPhase,
            impact: null,
            effectiveness: 0
        };

        // Evaluate decision effectiveness
        decision.impact = this.evaluateDecision(drill, decision);
        drill.decisions.push(decision);

        // Update drill state and score
        this.updateDrillState(drill, decision);
        drill.score += decision.effectiveness;

        // Add to timeline
        drill.timeline.push({
            timestamp: new Date(),
            event: `Decision made: ${decisionType}`,
            type: "decision",
            details: decision.impact
        });

        // Award XP for good decisions
        if (decision.effectiveness > 0 && window.skillTree) {
            window.skillTree.awardXP(drill.userId, decision.effectiveness, 
                `Incident Response: ${decisionType.replace('_', ' ')}`);
        }

        return decision;
    }

    evaluateDecision(drill, decision) {
        const decisionEffectiveness = {
            activate_team: { points: 20, impact: "Incident response team activated and coordinated" },
            isolate_systems: { points: 30, impact: "Systems isolated to prevent spread" },
            preserve_evidence: { points: 25, impact: "Digital evidence preserved for investigation" },
            notify_stakeholders: { points: 15, impact: "Stakeholders informed of incident status" },
            reset_credentials: { points: 20, impact: "Compromised credentials reset" },
            activate_backups: { points: 25, impact: "Backup systems activated for recovery" },
            contact_law_enforcement: { points: 15, impact: "Law enforcement contacted for support" },
            implement_monitoring: { points: 20, impact: "Enhanced monitoring implemented" },
            patch_vulnerabilities: { points: 30, impact: "Security vulnerabilities patched" },
            restore_services: { points: 25, impact: "Critical services restored to operation" }
        };

        const effectiveness = decisionEffectiveness[decision.type];
        if (effectiveness) {
            decision.effectiveness = effectiveness.points;
            return effectiveness.impact;
        }

        return "Decision implemented with uncertain effectiveness";
    }

    updateDrillState(drill, decision) {
        // Update drill state based on decision type
        switch (decision.type) {
            case "isolate_systems":
                drill.currentState.containmentStatus = "partial";
                break;
            case "notify_stakeholders":
                drill.currentState.stakeholderNotified = true;
                break;
            case "reset_credentials":
                drill.currentState.credentialsSecured = true;
                break;
        }
    }

    renderIncidentDrillsDashboard() {
        return `
            <div class="incident-drills">
                <div class="drills-header">
                    <h1>🚨 Incident Response Drills</h1>
                    <p>Comprehensive incident response training and simulation platform</p>
                </div>
                
                <div class="incident-types">
                    <h2>🎯 Incident Scenarios</h2>
                    <div class="incidents-grid">
                        ${Object.values(this.incidentTypes).map(incident => 
                            this.renderIncidentCard(incident)
                        ).join('')}
                    </div>
                </div>
                
                <div class="team-roles">
                    <h2>👥 Response Team Roles</h2>
                    <div class="roles-grid">
                        ${Object.values(this.teamRoles).map(role => 
                            this.renderRoleCard(role)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderIncidentCard(incident) {
        const severityClass = `severity-${incident.severity}`;
        
        return `
            <div class="incident-card ${severityClass}">
                <div class="incident-header">
                    <h3>${incident.title}</h3>
                    <div class="incident-meta">
                        <span class="severity">${incident.severity}</span>
                        <span class="duration">${incident.estimatedDuration}min</span>
                    </div>
                </div>
                
                <div class="incident-content">
                    <p class="description">${incident.description}</p>
                    
                    <div class="phases">
                        <h4>📅 Response Phases (${incident.phases.length}):</h4>
                        <ul>
                            ${incident.phases.slice(0, 3).map(phase => 
                                `<li><strong>${phase.phase}:</strong> ${phase.duration}min</li>`
                            ).join('')}
                            ${incident.phases.length > 3 ? '<li>...and more phases</li>' : ''}
                        </ul>
                    </div>
                    
                    <div class="required-roles">
                        <h4>👤 Required Roles:</h4>
                        <div class="role-tags">
                            ${incident.requiredRoles.slice(0, 3).map(role => 
                                `<span class="role-tag">${role.replace('_', ' ')}</span>`
                            ).join('')}
                            ${incident.requiredRoles.length > 3 ? '<span class="role-tag">+more</span>' : ''}
                        </div>
                    </div>
                </div>
                
                <button onclick="incidentDrills.startDrill('demo_user', '${incident.id}')" 
                        class="start-drill-btn">
                    Start Drill
                </button>
            </div>
        `;
    }

    renderRoleCard(role) {
        return `
            <div class="role-card">
                <div class="role-header">
                    <h4>${role.title}</h4>
                </div>
                
                <div class="role-content">
                    <div class="responsibilities">
                        <h5>🎯 Key Responsibilities:</h5>
                        <ul>
                            ${role.responsibilities.slice(0, 2).map(resp => 
                                `<li>${resp}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="skills">
                        <h5>🛠️ Required Skills:</h5>
                        <div class="skill-tags">
                            ${role.skills.map(skill => 
                                `<span class="skill-tag">${skill}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// CSS (simplified)
const incidentDrillsCSS = `
    .incident-drills { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .drills-header { text-align: center; background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px; }
    .incidents-grid, .roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .incident-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .incident-card.severity-critical { border-left-color: #dc3545; }
    .incident-card.severity-high { border-left-color: #fd7e14; }
    .incident-header { padding: 20px; background: #f8f9fa; }
    .incident-header h3 { margin: 0 0 10px 0; color: #2c3e50; font-size: 1.1em; }
    .incident-meta { display: flex; gap: 10px; }
    .severity, .duration { padding: 3px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 500; background: #e3f2fd; color: #1976d2; }
    .incident-content { padding: 20px; }
    .description { color: #495057; margin-bottom: 15px; line-height: 1.4; font-style: italic; }
    .phases h4, .required-roles h4 { margin: 15px 0 8px 0; color: #2c3e50; font-size: 0.9em; }
    .phases ul { margin: 0 0 15px 0; padding-left: 20px; }
    .phases li { font-size: 0.85em; color: #495057; margin-bottom: 4px; }
    .role-tags { display: flex; flex-wrap: wrap; gap: 5px; }
    .role-tag, .skill-tag { background: #f8f9fa; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 0.75em; border: 1px solid #dee2e6; }
    .start-drill-btn { width: 100%; background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%); color: white; border: none; padding: 12px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
    .start-drill-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3); }
    .role-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6f42c1; }
    .role-header { padding: 15px 20px; background: #f8f9fa; }
    .role-header h4 { margin: 0; color: #2c3e50; font-size: 1em; }
    .role-content { padding: 20px; }
    .responsibilities h5, .skills h5 { margin: 0 0 8px 0; color: #2c3e50; font-size: 0.85em; }
    .responsibilities ul { margin: 0 0 15px 0; padding-left: 15px; }
    .responsibilities li { font-size: 0.8em; color: #495057; margin-bottom: 3px; }
`;

const incidentDrillsStyleSheet = document.createElement('style');
incidentDrillsStyleSheet.textContent = incidentDrillsCSS;
document.head.appendChild(incidentDrillsStyleSheet);

window.incidentDrills = new IncidentResponseDrills();
