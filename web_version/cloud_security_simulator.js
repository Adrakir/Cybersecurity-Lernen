// Cloud Security Simulator - Comprehensive Cloud Infrastructure Security Training Platform
class CloudSecuritySimulator {
    constructor() {
        this.cloudEnvironments = {};
        this.securityScenarios = {};
        this.vulnerabilityDatabase = {};
        this.complianceFrameworks = {};
        this.simulationSessions = new Map();
        this.userProgress = new Map();
        this.initializeSimulator();
    }

    initializeSimulator() {
        this.cloudEnvironments = {
            aws_enterprise: {
                id: "aws_enterprise",
                name: "🌩️ AWS Enterprise Environment",
                provider: "AWS",
                complexity: "high",
                services: {
                    compute: ["EC2", "Lambda", "ECS", "EKS"],
                    storage: ["S3", "EBS", "EFS"],
                    database: ["RDS", "DynamoDB", "ElastiCache"],
                    networking: ["VPC", "Route53", "CloudFront", "ALB"],
                    security: ["IAM", "KMS", "CloudTrail", "GuardDuty", "Security Hub"],
                    management: ["CloudWatch", "Config", "Systems Manager"]
                },
                commonMisconfigurations: [
                    "Public S3 buckets", "Overprivileged IAM roles", "Unencrypted data",
                    "Open security groups", "Missing CloudTrail logs", "Weak access controls"
                ],
                securityControls: ["MFA enforcement", "Network segmentation", "Encryption at rest/transit"]
            },

            azure_hybrid: {
                id: "azure_hybrid",
                name: "☁️ Azure Hybrid Cloud",
                provider: "Azure",
                complexity: "medium",
                services: {
                    compute: ["Virtual Machines", "App Service", "AKS", "Functions"],
                    storage: ["Blob Storage", "File Storage", "Disk Storage"],
                    database: ["SQL Database", "Cosmos DB", "PostgreSQL"],
                    networking: ["Virtual Network", "Load Balancer", "Application Gateway"],
                    security: ["Azure AD", "Key Vault", "Security Center", "Sentinel"],
                    management: ["Monitor", "Policy", "Resource Manager"]
                },
                commonMisconfigurations: [
                    "Weak Azure AD policies", "Unmanaged endpoints", "Insufficient monitoring",
                    "Open NSG rules", "Disabled security features", "Poor backup strategies"
                ],
                securityControls: ["Conditional Access", "JIT access", "Threat protection"]
            },

            gcp_startup: {
                id: "gcp_startup",
                name: "🚀 GCP Startup Environment",
                provider: "GCP",
                complexity: "low",
                services: {
                    compute: ["Compute Engine", "Cloud Run", "GKE"],
                    storage: ["Cloud Storage", "Persistent Disk"],
                    database: ["Cloud SQL", "Firestore", "BigQuery"],
                    networking: ["VPC", "Cloud Load Balancing", "Cloud CDN"],
                    security: ["IAM", "Cloud KMS", "Security Command Center"],
                    management: ["Cloud Monitoring", "Cloud Logging"]
                },
                commonMisconfigurations: [
                    "Default service accounts", "Public cloud storage", "Weak firewall rules",
                    "Missing audit logs", "Unencrypted backups", "Inadequate access controls"
                ],
                securityControls: ["Identity-aware proxy", "Binary authorization", "VPC security"]
            },

            multi_cloud: {
                id: "multi_cloud",
                name: "🌐 Multi-Cloud Architecture",
                provider: "Multi-Cloud",
                complexity: "expert",
                services: {
                    orchestration: ["Kubernetes", "Terraform", "Ansible"],
                    security: ["Vault", "Consul", "External Secrets"],
                    monitoring: ["Prometheus", "Grafana", "ELK Stack"],
                    networking: ["Service Mesh", "API Gateway", "VPN"],
                    compliance: ["Policy as Code", "Security Scanning", "Audit Tools"]
                },
                commonMisconfigurations: [
                    "Inconsistent security policies", "Cross-cloud data exposure", "Complex access management",
                    "Monitoring gaps", "Compliance drift", "Integration vulnerabilities"
                ],
                securityControls: ["Unified identity management", "Cross-cloud encryption", "Centralized logging"]
            }
        };

        this.initializeSecurityScenarios();
        this.initializeVulnerabilityDatabase();
        this.initializeComplianceFrameworks();
    }

    initializeSecurityScenarios() {
        this.securityScenarios = {
            data_breach_response: {
                id: "data_breach_response",
                title: "🚨 Cloud Data Breach Response",
                environment: "aws_enterprise",
                difficulty: "expert",
                scenario: "Suspicious access detected on production S3 bucket containing customer PII",
                objectives: [
                    "Identify scope of potential breach",
                    "Implement immediate containment",
                    "Preserve evidence for investigation",
                    "Notify stakeholders appropriately",
                    "Implement recovery measures"
                ],
                initialState: {
                    s3Bucket: { status: "compromised", encryption: false, logging: "partial" },
                    iamRoles: { overprivileged: true, mfaRequired: false },
                    monitoring: { alertsActive: true, logsRetained: "30days" },
                    compliance: { gdprApplicable: true, breachNotified: false }
                },
                timeLimit: 45, // minutes
                scoringCriteria: ["response_time", "containment_effectiveness", "evidence_preservation", "compliance_adherence"]
            },

            misconfigured_iam: {
                id: "misconfigured_iam",
                title: "🔐 IAM Security Hardening",
                environment: "azure_hybrid",
                difficulty: "intermediate",
                scenario: "Audit reveals overprivileged service accounts and weak access controls",
                objectives: [
                    "Identify overprivileged accounts",
                    "Implement principle of least privilege",
                    "Enable MFA for all accounts",
                    "Set up conditional access policies",
                    "Establish regular access reviews"
                ],
                initialState: {
                    serviceAccounts: { count: 25, overprivileged: 18, mfaEnabled: 3 },
                    userAccounts: { count: 150, adminRights: 45, lastReview: "never" },
                    policies: { conditionalAccess: false, passwordPolicy: "weak" },
                    monitoring: { signInLogs: true, auditLogs: false }
                },
                timeLimit: 30,
                scoringCriteria: ["privilege_reduction", "mfa_implementation", "policy_strength", "audit_improvement"]
            },

            container_vulnerability: {
                id: "container_vulnerability",
                title: "📦 Container Security Incident",
                environment: "gcp_startup",
                difficulty: "advanced",
                scenario: "Vulnerability scanner detects critical CVEs in production container images",
                objectives: [
                    "Assess vulnerability impact",
                    "Prioritize patching efforts",
                    "Implement security scanning",
                    "Harden container configurations",
                    "Establish secure CI/CD pipeline"
                ],
                initialState: {
                    containers: { running: 15, vulnerabilities: { critical: 3, high: 8, medium: 12 } },
                    images: { baseImages: "outdated", scanning: false, signatures: false },
                    runtime: { securityPolicies: false, networkPolicies: "permissive" },
                    pipeline: { securityGates: false, automatedTesting: "limited" }
                },
                timeLimit: 40,
                scoringCriteria: ["vulnerability_mitigation", "scanning_implementation", "policy_hardening", "pipeline_security"]
            },

            compliance_audit: {
                id: "compliance_audit",
                title: "📋 Multi-Cloud Compliance Audit",
                environment: "multi_cloud",
                difficulty: "expert",
                scenario: "Quarterly SOC 2 audit reveals compliance gaps across cloud environments",
                objectives: [
                    "Map compliance requirements",
                    "Identify control gaps",
                    "Implement missing controls",
                    "Establish continuous monitoring",
                    "Prepare audit evidence"
                ],
                initialState: {
                    controls: { implemented: "60%", documented: "45%", monitored: "30%" },
                    evidence: { automated: false, centralized: false, retention: "inconsistent" },
                    policies: { updated: false, approved: "partial", distributed: false },
                    monitoring: { continuous: false, alerting: "basic", reporting: "manual" }
                },
                timeLimit: 60,
                scoringCriteria: ["control_implementation", "evidence_quality", "automation_level", "audit_readiness"]
            },

            network_segmentation: {
                id: "network_segmentation",
                title: "🌐 Cloud Network Security",
                environment: "aws_enterprise",
                difficulty: "intermediate",
                scenario: "Security assessment reveals flat network architecture with insufficient segmentation",
                objectives: [
                    "Design network segmentation strategy",
                    "Implement security groups and NACLs",
                    "Configure VPC flow logs",
                    "Set up network monitoring",
                    "Test segmentation effectiveness"
                ],
                initialState: {
                    network: { segmentation: "flat", flowLogs: false, monitoring: "basic" },
                    securityGroups: { rules: "permissive", documented: false },
                    nacls: { configured: false, tested: false },
                    monitoring: { networkAnalysis: false, anomalieDetection: false }
                },
                timeLimit: 35,
                scoringCriteria: ["segmentation_design", "rule_implementation", "logging_coverage", "monitoring_effectiveness"]
            }
        };
    }

    initializeVulnerabilityDatabase() {
        this.vulnerabilityDatabase = {
            cloud_misconfigurations: {
                category: "Configuration",
                vulnerabilities: [
                    {
                        id: "CLOUD-001",
                        title: "Public S3 Bucket",
                        severity: "high",
                        description: "S3 bucket configured with public read/write access",
                        impact: "Data exposure, unauthorized access, potential data loss",
                        remediation: "Remove public access, implement bucket policies, enable logging"
                    },
                    {
                        id: "CLOUD-002", 
                        title: "Overprivileged IAM Role",
                        severity: "medium",
                        description: "Service account with broader permissions than required",
                        impact: "Privilege escalation, lateral movement, excessive access",
                        remediation: "Apply principle of least privilege, regular access reviews"
                    },
                    {
                        id: "CLOUD-003",
                        title: "Unencrypted Data Storage",
                        severity: "high",
                        description: "Sensitive data stored without encryption at rest",
                        impact: "Data breach, compliance violations, confidentiality loss",
                        remediation: "Enable encryption at rest, manage keys properly, audit access"
                    }
                ]
            },

            container_security: {
                category: "Container",
                vulnerabilities: [
                    {
                        id: "CONT-001",
                        title: "Vulnerable Base Image",
                        severity: "critical",
                        description: "Container image contains known CVEs in base layer",
                        impact: "Container compromise, host escape, data exposure",
                        remediation: "Update base images, implement image scanning, use minimal images"
                    },
                    {
                        id: "CONT-002",
                        title: "Privileged Container",
                        severity: "high",
                        description: "Container running with privileged access",
                        impact: "Host compromise, container escape, privilege escalation",
                        remediation: "Remove privileged flag, use security contexts, implement policies"
                    }
                ]
            },

            network_security: {
                category: "Network",
                vulnerabilities: [
                    {
                        id: "NET-001",
                        title: "Open Security Group",
                        severity: "medium",
                        description: "Security group allows 0.0.0.0/0 access on sensitive ports",
                        impact: "Unauthorized access, lateral movement, service exposure",
                        remediation: "Restrict source ranges, implement least privilege network access"
                    }
                ]
            }
        };
    }

    initializeComplianceFrameworks() {
        this.complianceFrameworks = {
            soc2: {
                name: "SOC 2 Type II",
                categories: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"],
                controls: {
                    security: ["Access controls", "Network security", "Data protection", "Monitoring"],
                    availability: ["System monitoring", "Incident response", "Backup procedures"],
                    confidentiality: ["Encryption", "Access restriction", "Data classification"]
                }
            },
            iso27001: {
                name: "ISO 27001",
                categories: ["Information Security Management", "Risk Management", "Asset Management"],
                controls: {
                    isms: ["Security policy", "Risk assessment", "Security objectives"],
                    asset: ["Asset inventory", "Asset classification", "Asset handling"]
                }
            }
        };
    }

    startSimulation(userId, scenarioId) {
        const scenario = this.securityScenarios[scenarioId];
        if (!scenario) return null;

        const simulation = {
            sessionId: `sim_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            scenarioId,
            startTime: new Date(),
            timeLimit: scenario.timeLimit * 60 * 1000, // Convert to milliseconds
            currentState: JSON.parse(JSON.stringify(scenario.initialState)),
            actions: [],
            score: 0,
            status: "active",
            environment: this.cloudEnvironments[scenario.environment]
        };

        this.simulationSessions.set(simulation.sessionId, simulation);

        // Initialize user progress if not exists
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                completedScenarios: [],
                totalScore: 0,
                certifications: [],
                vulnerabilitiesFound: 0,
                mitigationsImplemented: 0
            });
        }

        return simulation;
    }

    executeSecurityAction(sessionId, actionType, parameters) {
        const simulation = this.simulationSessions.get(sessionId);
        if (!simulation || simulation.status !== "active") return null;

        const action = {
            type: actionType,
            parameters,
            timestamp: new Date(),
            result: null
        };

        // Execute action based on type
        switch (actionType) {
            case "isolate_resource":
                action.result = this.isolateCloudResource(simulation, parameters);
                break;
            case "analyze_logs":
                action.result = this.analyzeLogs(simulation, parameters);
                break;
            case "implement_security_control":
                action.result = this.implementSecurityControl(simulation, parameters);
                break;
            case "patch_vulnerability":
                action.result = this.patchVulnerability(simulation, parameters);
                break;
            case "configure_monitoring":
                action.result = this.configureMonitoring(simulation, parameters);
                break;
            case "update_iam_policy":
                action.result = this.updateIAMPolicy(simulation, parameters);
                break;
            default:
                action.result = { success: false, message: "Unknown action type" };
        }

        simulation.actions.push(action);

        // Update score based on action effectiveness
        if (action.result.success) {
            simulation.score += action.result.points || 10;
            
            // Award XP for successful security actions
            if (window.skillTree) {
                window.skillTree.awardXP(simulation.userId, action.result.points || 10, 
                    `Cloud Security: ${actionType.replace('_', ' ')}`);
            }
        }

        // Check if simulation is complete
        this.checkSimulationCompletion(simulation);

        return action.result;
    }

    isolateCloudResource(simulation, parameters) {
        const { resourceType, resourceId } = parameters;
        
        // Simulate resource isolation
        if (resourceType === "s3_bucket" && simulation.currentState.s3Bucket) {
            simulation.currentState.s3Bucket.status = "isolated";
            return {
                success: true,
                message: `Successfully isolated ${resourceType}: ${resourceId}`,
                points: 25,
                impact: "Prevented further unauthorized access"
            };
        }

        return {
            success: false,
            message: `Failed to isolate ${resourceType}: ${resourceId}`,
            points: 0
        };
    }

    analyzeLogs(simulation, parameters) {
        const { logType, timeRange } = parameters;
        
        // Simulate log analysis
        const findings = this.generateLogFindings(simulation.scenarioId, logType);
        
        return {
            success: true,
            message: `Analyzed ${logType} logs for ${timeRange}`,
            points: 15,
            findings: findings,
            evidence: "Log entries preserved for investigation"
        };
    }

    implementSecurityControl(simulation, parameters) {
        const { controlType, configuration } = parameters;
        
        // Simulate security control implementation
        const controlMap = {
            "mfa_enforcement": { points: 30, impact: "Reduced account compromise risk" },
            "encryption_at_rest": { points: 25, impact: "Protected data confidentiality" },
            "network_segmentation": { points: 35, impact: "Limited lateral movement" },
            "access_logging": { points: 20, impact: "Improved audit capabilities" }
        };

        const control = controlMap[controlType];
        if (control) {
            return {
                success: true,
                message: `Successfully implemented ${controlType}`,
                points: control.points,
                impact: control.impact,
                configuration: configuration
            };
        }

        return {
            success: false,
            message: `Failed to implement ${controlType}`,
            points: 0
        };
    }

    patchVulnerability(simulation, parameters) {
        const { vulnerabilityId, patchMethod } = parameters;
        
        // Simulate vulnerability patching
        const vulnerability = this.findVulnerability(vulnerabilityId);
        if (vulnerability) {
            return {
                success: true,
                message: `Successfully patched ${vulnerability.title}`,
                points: this.calculatePatchPoints(vulnerability.severity),
                vulnerabilityId: vulnerabilityId,
                method: patchMethod
            };
        }

        return {
            success: false,
            message: `Vulnerability ${vulnerabilityId} not found`,
            points: 0
        };
    }

    generateLogFindings(scenarioId, logType) {
        const findingsMap = {
            "data_breach_response": {
                "access_logs": [
                    "Unusual access pattern from IP 192.168.1.100",
                    "Multiple failed authentication attempts",
                    "Large data download at 2:30 AM"
                ],
                "audit_logs": [
                    "Privilege escalation event detected",
                    "New IAM role created without approval",
                    "Encryption disabled on sensitive bucket"
                ]
            },
            "misconfigured_iam": {
                "audit_logs": [
                    "18 service accounts with admin privileges",
                    "No MFA requirement on 90% of accounts",
                    "Last access review: Never"
                ]
            }
        };

        return findingsMap[scenarioId]?.[logType] || ["No significant findings"];
    }

    findVulnerability(vulnerabilityId) {
        for (const category of Object.values(this.vulnerabilityDatabase)) {
            const vuln = category.vulnerabilities.find(v => v.id === vulnerabilityId);
            if (vuln) return vuln;
        }
        return null;
    }

    calculatePatchPoints(severity) {
        const pointsMap = {
            "critical": 50,
            "high": 35,
            "medium": 20,
            "low": 10
        };
        return pointsMap[severity] || 10;
    }

    checkSimulationCompletion(simulation) {
        const scenario = this.securityScenarios[simulation.scenarioId];
        const elapsed = new Date() - simulation.startTime;

        // Check time limit
        if (elapsed >= simulation.timeLimit) {
            simulation.status = "timeout";
            this.finalizeSimulation(simulation);
            return;
        }

        // Check objectives completion
        const completedObjectives = this.evaluateObjectives(simulation, scenario.objectives);
        if (completedObjectives >= scenario.objectives.length * 0.8) { // 80% completion
            simulation.status = "completed";
            this.finalizeSimulation(simulation);
        }
    }

    evaluateObjectives(simulation, objectives) {
        // Simple evaluation based on actions taken
        const actionTypes = simulation.actions.map(a => a.type);
        let completed = 0;

        objectives.forEach(objective => {
            if (this.isObjectiveCompleted(objective, actionTypes, simulation.currentState)) {
                completed++;
            }
        });

        return completed;
    }

    isObjectiveCompleted(objective, actionTypes, currentState) {
        // Simple heuristic for objective completion
        if (objective.includes("containment") || objective.includes("isolate")) {
            return actionTypes.includes("isolate_resource");
        }
        if (objective.includes("evidence") || objective.includes("logs")) {
            return actionTypes.includes("analyze_logs");
        }
        if (objective.includes("implement") || objective.includes("harden")) {
            return actionTypes.includes("implement_security_control");
        }
        return false;
    }

    finalizeSimulation(simulation) {
        const report = this.generateSimulationReport(simulation);
        
        // Update user progress
        const userProgress = this.userProgress.get(simulation.userId);
        if (userProgress) {
            userProgress.completedScenarios.push({
                scenarioId: simulation.scenarioId,
                score: simulation.score,
                completedAt: new Date(),
                status: simulation.status
            });
            userProgress.totalScore += simulation.score;
        }

        simulation.report = report;
        return report;
    }

    generateSimulationReport(simulation) {
        const scenario = this.securityScenarios[simulation.scenarioId];
        const timeSpent = Math.round((new Date() - simulation.startTime) / 60000); // minutes

        return {
            scenario: scenario.title,
            duration: `${timeSpent} minutes`,
            finalScore: simulation.score,
            maxScore: scenario.objectives.length * 40, // Estimated max points
            actionsPerformed: simulation.actions.length,
            successfulActions: simulation.actions.filter(a => a.result.success).length,
            keyAchievements: this.extractKeyAchievements(simulation),
            recommendations: this.generateRecommendations(simulation),
            nextSteps: this.suggestNextScenarios(simulation.scenarioId, simulation.score)
        };
    }

    extractKeyAchievements(simulation) {
        return simulation.actions
            .filter(a => a.result.success && a.result.points >= 25)
            .map(a => `${a.type.replace('_', ' ')}: ${a.result.message}`);
    }

    generateRecommendations(simulation) {
        const recommendations = [];
        
        if (simulation.score < 100) {
            recommendations.push("Focus on rapid incident response - time is critical in security incidents");
        }
        
        if (simulation.actions.filter(a => a.type === "analyze_logs").length === 0) {
            recommendations.push("Always analyze logs for evidence collection and forensics");
        }
        
        if (simulation.actions.filter(a => a.type === "implement_security_control").length < 2) {
            recommendations.push("Implement multiple security controls for defense in depth");
        }

        return recommendations;
    }

    renderCloudSimulatorDashboard() {
        return `
            <div class="cloud-simulator">
                <div class="simulator-header">
                    <h1>☁️ Cloud Security Simulator</h1>
                    <p>Advanced cloud infrastructure security training platform</p>
                </div>
                
                <div class="environments-section">
                    <h2>🌐 Cloud Environments</h2>
                    <div class="environments-grid">
                        ${Object.values(this.cloudEnvironments).map(env => 
                            this.renderEnvironmentCard(env)
                        ).join('')}
                    </div>
                </div>
                
                <div class="scenarios-section">
                    <h2>🎯 Security Scenarios</h2>
                    <div class="scenarios-grid">
                        ${Object.values(this.securityScenarios).map(scenario => 
                            this.renderScenarioCard(scenario)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderEnvironmentCard(environment) {
        const complexityClass = `complexity-${environment.complexity}`;
        
        return `
            <div class="environment-card ${complexityClass}">
                <div class="env-header">
                    <h3>${environment.name}</h3>
                    <span class="provider">${environment.provider}</span>
                </div>
                
                <div class="env-content">
                    <div class="services">
                        <h4>🛠️ Services:</h4>
                        <div class="service-categories">
                            ${Object.entries(environment.services).map(([category, services]) => 
                                `<div class="service-category">
                                    <strong>${category}:</strong> ${services.slice(0, 3).join(', ')}${services.length > 3 ? '...' : ''}
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="common-issues">
                        <h4>⚠️ Common Issues:</h4>
                        <ul>
                            ${environment.commonMisconfigurations.slice(0, 3).map(issue => 
                                `<li>${issue}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="env-meta">
                    <span class="complexity">Complexity: ${environment.complexity}</span>
                </div>
            </div>
        `;
    }

    renderScenarioCard(scenario) {
        const difficultyClass = `difficulty-${scenario.difficulty}`;
        
        return `
            <div class="scenario-card ${difficultyClass}">
                <div class="scenario-header">
                    <h4>${scenario.title}</h4>
                    <div class="scenario-meta">
                        <span class="difficulty">${scenario.difficulty}</span>
                        <span class="time-limit">${scenario.timeLimit}min</span>
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
                </div>
                
                <button onclick="cloudSimulator.startSimulation('demo_user', '${scenario.id}')" 
                        class="start-simulation-btn">
                    Start Simulation
                </button>
            </div>
        `;
    }
}

// CSS für Cloud Security Simulator
const cloudSimulatorCSS = `
    .cloud-simulator {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .simulator-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .environments-grid, .scenarios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .environment-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .environment-card.complexity-low { border-left-color: #28a745; }
    .environment-card.complexity-medium { border-left-color: #ffc107; }
    .environment-card.complexity-high { border-left-color: #fd7e14; }
    .environment-card.complexity-expert { border-left-color: #dc3545; }
    
    .env-header {
        padding: 20px;
        background: #f8f9fa;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .env-header h3 {
        margin: 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .provider {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: 500;
    }
    
    .env-content {
        padding: 20px;
    }
    
    .services h4, .common-issues h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .service-categories {
        margin-bottom: 15px;
    }
    
    .service-category {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 5px;
    }
    
    .service-category strong {
        color: #2c3e50;
        text-transform: capitalize;
    }
    
    .common-issues ul {
        margin: 0;
        padding-left: 15px;
    }
    
    .common-issues li {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 3px;
    }
    
    .env-meta {
        padding: 15px 20px;
        background: #f8f9fa;
        border-top: 1px solid #dee2e6;
    }
    
    .complexity {
        font-size: 0.8em;
        color: #6c757d;
        text-transform: capitalize;
    }
    
    .scenario-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .scenario-card.difficulty-intermediate { border-left-color: #ffc107; }
    .scenario-card.difficulty-advanced { border-left-color: #fd7e14; }
    .scenario-card.difficulty-expert { border-left-color: #dc3545; }
    
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
    
    .difficulty, .time-limit {
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
        margin: 0;
        padding-left: 15px;
    }
    
    .objectives li {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 3px;
    }
    
    .start-simulation-btn {
        width: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .start-simulation-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
`;

// Style hinzufügen
const cloudSimulatorStyleSheet = document.createElement('style');
cloudSimulatorStyleSheet.textContent = cloudSimulatorCSS;
document.head.appendChild(cloudSimulatorStyleSheet);

// Global instance
window.cloudSimulator = new CloudSecuritySimulator();
