// Red Team vs Blue Team Simulator
class RedVsBlueSimulator {
    constructor() {
        this.activeExercises = new Map();
        this.exerciseTemplates = {};
        this.teamAssignments = new Map();
        this.actionHistory = new Map();
        this.currentUser = null;
        this.websocketConnection = null;
        this.initializeExerciseTemplates();
    }

    initializeExerciseTemplates() {
        // Corporate Network Infiltration Exercise
        this.exerciseTemplates.network_infiltration = {
            id: "network_infiltration",
            title: "🏢 Corporate Network Infiltration",
            description: "Red Team versucht in ein Unternehmensnetzwerk einzudringen, während Blue Team verteidigt",
            duration: 120, // 2 hours
            difficulty: "expert",
            environment: {
                name: "TechCorp International",
                type: "Corporate Network",
                assets: [
                    {
                        id: "web_server",
                        name: "Corporate Website (web01.techcorp.com)",
                        type: "web_server",
                        vulnerabilities: ["CVE-2024-1234", "SQL Injection", "XSS"],
                        criticality: "medium",
                        services: ["HTTP:80", "HTTPS:443", "SSH:22"],
                        os: "Ubuntu 20.04",
                        patches: "partially_updated"
                    },
                    {
                        id: "domain_controller",
                        name: "Primary Domain Controller (dc01.internal)",
                        type: "domain_controller",
                        vulnerabilities: ["MS17-010", "Kerberoasting"],
                        criticality: "critical",
                        services: ["LDAP:389", "Kerberos:88", "SMB:445"],
                        os: "Windows Server 2019",
                        patches: "outdated"
                    },
                    {
                        id: "file_server",
                        name: "File Server (files01.internal)",
                        type: "file_server",
                        vulnerabilities: ["SMB Relay", "Weak Permissions"],
                        criticality: "high",
                        services: ["SMB:445", "FTP:21"],
                        os: "Windows Server 2016",
                        patches: "current"
                    },
                    {
                        id: "workstation_01",
                        name: "CEO Workstation (ceo-laptop)",
                        type: "workstation",
                        vulnerabilities: ["Phishing Susceptible", "Local Privilege Escalation"],
                        criticality: "high",
                        services: ["RDP:3389"],
                        os: "Windows 11",
                        patches: "current"
                    },
                    {
                        id: "database_server",
                        name: "Customer Database (db01.internal)",
                        type: "database",
                        vulnerabilities: ["Default Credentials", "Privilege Escalation"],
                        criticality: "critical",
                        services: ["MySQL:3306", "SSH:22"],
                        os: "CentOS 7",
                        patches: "outdated"
                    }
                ],
                network_segments: [
                    {
                        name: "DMZ",
                        assets: ["web_server"],
                        security_level: "medium",
                        monitoring: "high"
                    },
                    {
                        name: "Internal Network",
                        assets: ["domain_controller", "file_server", "database_server"],
                        security_level: "high",
                        monitoring: "medium"
                    },
                    {
                        name: "Executive Network",
                        assets: ["workstation_01"],
                        security_level: "high",
                        monitoring: "high"
                    }
                ]
            },
            red_team: {
                objectives: [
                    {
                        id: "initial_access",
                        name: "Establish Initial Access",
                        description: "Gain initial foothold in the target network",
                        points: 100,
                        methods: ["Web Application Exploit", "Phishing", "External Service Exploit"],
                        completed: false
                    },
                    {
                        id: "privilege_escalation",
                        name: "Privilege Escalation",
                        description: "Escalate privileges on compromised systems",
                        points: 150,
                        methods: ["Local Exploit", "Token Impersonation", "Service Account Abuse"],
                        completed: false
                    },
                    {
                        id: "lateral_movement",
                        name: "Lateral Movement",
                        description: "Move laterally through the network",
                        points: 200,
                        methods: ["SMB Relay", "Credential Dumping", "Pass-the-Hash"],
                        completed: false
                    },
                    {
                        id: "persistence",
                        name: "Establish Persistence",
                        description: "Maintain access to compromised systems",
                        points: 150,
                        methods: ["Scheduled Tasks", "Registry Modification", "Service Creation"],
                        completed: false
                    },
                    {
                        id: "data_exfiltration",
                        name: "Data Exfiltration",
                        description: "Exfiltrate sensitive data",
                        points: 250,
                        methods: ["DNS Exfiltration", "HTTPS Tunnel", "Cloud Storage"],
                        completed: false
                    },
                    {
                        id: "domain_admin",
                        name: "Domain Admin Compromise",
                        description: "Achieve Domain Administrator privileges",
                        points: 300,
                        methods: ["DCSync", "Golden Ticket", "Kerberoasting"],
                        completed: false
                    }
                ],
                available_tools: [
                    "Nmap", "Metasploit", "Cobalt Strike", "BloodHound", "Mimikatz",
                    "PowerShell Empire", "Burp Suite", "SQLMap", "Responder", "Impacket"
                ],
                techniques: {
                    "Initial Access": ["T1566.001", "T1190", "T1078"],
                    "Execution": ["T1059.001", "T1059.003", "T1053.005"],
                    "Persistence": ["T1053.005", "T1547.001", "T1136.001"],
                    "Privilege Escalation": ["T1068", "T1134", "T1558.003"],
                    "Defense Evasion": ["T1070", "T1027", "T1055"],
                    "Credential Access": ["T1003", "T1558.003", "T1110"],
                    "Discovery": ["T1018", "T1083", "T1482"],
                    "Lateral Movement": ["T1021.001", "T1550.002", "T1021.002"],
                    "Collection": ["T1005", "T1039", "T1114.001"],
                    "Exfiltration": ["T1041", "T1567.002", "T1048.003"]
                }
            },
            blue_team: {
                objectives: [
                    {
                        id: "threat_detection",
                        name: "Threat Detection",
                        description: "Detect Red Team activities early",
                        points: 100,
                        methods: ["SIEM Analysis", "Network Monitoring", "Endpoint Detection"],
                        completed: false
                    },
                    {
                        id: "incident_response",
                        name: "Incident Response",
                        description: "Respond to detected threats effectively",
                        points: 150,
                        methods: ["Isolation", "Containment", "Evidence Collection"],
                        completed: false
                    },
                    {
                        id: "threat_hunting",
                        name: "Proactive Threat Hunting",
                        description: "Hunt for threats not detected by automated tools",
                        points: 200,
                        methods: ["IOC Hunting", "Behavioral Analysis", "Log Analysis"],
                        completed: false
                    },
                    {
                        id: "vulnerability_management",
                        name: "Vulnerability Management",
                        description: "Identify and remediate vulnerabilities",
                        points: 150,
                        methods: ["Vulnerability Scanning", "Patch Management", "Configuration Review"],
                        completed: false
                    },
                    {
                        id: "forensic_analysis",
                        name: "Digital Forensics",
                        description: "Conduct forensic analysis of incidents",
                        points: 200,
                        methods: ["Memory Analysis", "Disk Forensics", "Network Forensics"],
                        completed: false
                    },
                    {
                        id: "threat_intelligence",
                        name: "Threat Intelligence",
                        description: "Gather and analyze threat intelligence",
                        points: 150,
                        methods: ["IOC Analysis", "TTP Mapping", "Attribution"],
                        completed: false
                    }
                ],
                available_tools: [
                    "Splunk", "ELK Stack", "CrowdStrike Falcon", "Carbon Black", "Wireshark",
                    "Volatility", "YARA", "Suricata", "OSSEC", "TheHive", "MISP", "Cortex"
                ],
                defensive_techniques: {
                    "Detection": ["Network Monitoring", "Endpoint Detection", "Log Analysis"],
                    "Analysis": ["Malware Analysis", "Behavioral Analysis", "Timeline Analysis"],
                    "Containment": ["Network Isolation", "System Quarantine", "Account Disabling"],
                    "Eradication": ["Malware Removal", "System Rebuilding", "Credential Reset"],
                    "Recovery": ["System Restoration", "Service Recovery", "Business Continuity"],
                    "Lessons Learned": ["Post-Incident Review", "Process Improvement", "Training"]
                }
            },
            phases: [
                {
                    name: "Preparation",
                    duration: 15,
                    description: "Teams prepare their strategies and tools",
                    activities: {
                        red_team: ["Reconnaissance", "Tool Preparation", "Attack Planning"],
                        blue_team: ["Defense Setup", "Monitoring Configuration", "Response Planning"]
                    }
                },
                {
                    name: "Initial Engagement",
                    duration: 30,
                    description: "Red Team begins initial attacks, Blue Team monitors",
                    activities: {
                        red_team: ["External Reconnaissance", "Initial Access Attempts", "Vulnerability Exploitation"],
                        blue_team: ["Perimeter Monitoring", "Alert Triage", "Initial Investigation"]
                    }
                },
                {
                    name: "Active Operations",
                    duration: 45,
                    description: "Intensive attack and defense operations",
                    activities: {
                        red_team: ["Lateral Movement", "Privilege Escalation", "Persistence"],
                        blue_team: ["Threat Hunting", "Incident Response", "Containment"]
                    }
                },
                {
                    name: "Final Push",
                    duration: 20,
                    description: "Red Team attempts to achieve final objectives",
                    activities: {
                        red_team: ["Data Exfiltration", "Domain Compromise", "Impact"],
                        blue_team: ["Advanced Hunting", "Forensic Analysis", "Recovery"]
                    }
                },
                {
                    name: "Debrief",
                    duration: 10,
                    description: "Teams review actions and lessons learned",
                    activities: {
                        red_team: ["Attack Documentation", "Lessons Learned", "Improvement Areas"],
                        blue_team: ["Defense Analysis", "Gap Identification", "Process Improvement"]
                    }
                }
            ]
        };

        // Web Application Security Exercise
        this.exerciseTemplates.webapp_security = {
            id: "webapp_security",
            title: "🕸️ Web Application Security Assessment",
            description: "Red Team attacks web applications while Blue Team defends and monitors",
            duration: 90,
            difficulty: "advanced",
            environment: {
                name: "E-Commerce Platform",
                type: "Web Application",
                applications: [
                    {
                        id: "main_app",
                        name: "ShopSafe E-Commerce",
                        url: "https://shopsafe.example.com",
                        technologies: ["PHP", "MySQL", "Apache", "JavaScript"],
                        vulnerabilities: ["SQL Injection", "XSS", "CSRF", "Authentication Bypass"]
                    },
                    {
                        id: "admin_panel",
                        name: "Admin Dashboard",
                        url: "https://admin.shopsafe.example.com",
                        technologies: ["React", "Node.js", "MongoDB"],
                        vulnerabilities: ["Weak Authentication", "Authorization Bypass", "API Vulnerabilities"]
                    },
                    {
                        id: "api_service",
                        name: "Payment API",
                        url: "https://api.shopsafe.example.com",
                        technologies: ["REST API", "JWT", "PostgreSQL"],
                        vulnerabilities: ["Broken Authentication", "Excessive Data Exposure", "Injection"]
                    }
                ]
            }
        };

        // Cloud Security Exercise
        this.exerciseTemplates.cloud_security = {
            id: "cloud_security",
            title: "☁️ Cloud Infrastructure Security",
            description: "Multi-cloud environment security assessment and defense",
            duration: 100,
            difficulty: "expert",
            environment: {
                name: "Multi-Cloud Infrastructure",
                type: "Cloud Environment",
                cloud_providers: ["AWS", "Azure", "GCP"],
                services: [
                    "EC2/VM Instances", "S3/Blob Storage", "Lambda/Functions", 
                    "RDS/SQL Database", "IAM", "VPC/Virtual Networks"
                ]
            }
        };

        // IoT Security Exercise
        this.exerciseTemplates.iot_security = {
            id: "iot_security",
            title: "🏠 IoT Smart Home Security",
            description: "Smart home environment with various IoT devices under attack",
            duration: 80,
            difficulty: "intermediate",
            environment: {
                name: "Smart Home Network",
                type: "IoT Environment",
                devices: [
                    "Smart Cameras", "Door Locks", "Thermostats", "Light Bulbs",
                    "Smart TV", "Voice Assistants", "Security System"
                ]
            }
        };
    }

    createExercise(templateId, exerciseName, redTeamLeader, blueTeamLeader) {
        const template = this.exerciseTemplates[templateId];
        if (!template) {
            throw new Error('Exercise template not found');
        }

        const exerciseId = this.generateExerciseId();
        const exercise = {
            id: exerciseId,
            name: exerciseName,
            template: template,
            templateId: templateId,
            status: 'preparation', // preparation, active, paused, completed
            createdAt: new Date(),
            startedAt: null,
            completedAt: null,
            currentPhase: 0,
            phaseStartTime: null,
            teams: {
                red: {
                    leader: redTeamLeader,
                    members: [redTeamLeader],
                    score: 0,
                    completedObjectives: [],
                    actions: [],
                    compromisedAssets: [],
                    flags: []
                },
                blue: {
                    leader: blueTeamLeader,
                    members: [blueTeamLeader],
                    score: 0,
                    completedObjectives: [],
                    actions: [],
                    detections: [],
                    mitigations: []
                }
            },
            timeline: [],
            chat: {
                red_team: [],
                blue_team: [],
                organizers: []
            },
            environment_state: this.initializeEnvironmentState(template),
            scoring: {
                red_total: 0,
                blue_total: 0,
                bonus_points: {
                    red: 0,
                    blue: 0
                }
            }
        };

        this.activeExercises.set(exerciseId, exercise);
        this.teamAssignments.set(redTeamLeader, { exerciseId, team: 'red' });
        this.teamAssignments.set(blueTeamLeader, { exerciseId, team: 'blue' });

        return exercise;
    }

    initializeEnvironmentState(template) {
        const state = {
            assets: new Map(),
            network_status: {},
            alerts: [],
            logs: [],
            compromised_systems: [],
            blocked_ips: [],
            detection_rules: []
        };

        // Initialize asset states
        if (template.environment.assets) {
            template.environment.assets.forEach(asset => {
                state.assets.set(asset.id, {
                    ...asset,
                    status: 'online',
                    compromised: false,
                    compromise_level: 'none', // none, low, medium, high, critical
                    last_accessed: new Date(),
                    running_processes: [],
                    network_connections: [],
                    installed_backdoors: []
                });
            });
        }

        return state;
    }

    joinTeam(exerciseId, userId, teamColor) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) {
            throw new Error('Exercise not found');
        }

        if (exercise.status !== 'preparation') {
            throw new Error('Cannot join team after exercise has started');
        }

        if (!['red', 'blue'].includes(teamColor)) {
            throw new Error('Invalid team color');
        }

        if (!exercise.teams[teamColor].members.includes(userId)) {
            exercise.teams[teamColor].members.push(userId);
            this.teamAssignments.set(userId, { exerciseId, team: teamColor });
        }

        return true;
    }

    startExercise(exerciseId) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return false;

        if (exercise.teams.red.members.length === 0 || exercise.teams.blue.members.length === 0) {
            throw new Error('Both teams must have at least one member');
        }

        exercise.status = 'active';
        exercise.startedAt = new Date();
        exercise.currentPhase = 0;
        exercise.phaseStartTime = new Date();

        // Start phase timer
        this.startPhaseTimer(exerciseId);

        // Initialize monitoring
        this.startEnvironmentMonitoring(exerciseId);

        return true;
    }

    startPhaseTimer(exerciseId) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise || exercise.status !== 'active') return;

        const currentPhase = exercise.template.phases[exercise.currentPhase];
        if (!currentPhase) return;

        let timeRemaining = currentPhase.duration * 60; // Convert to seconds

        exercise.phaseTimer = setInterval(() => {
            timeRemaining--;

            if (timeRemaining <= 0) {
                this.advancePhase(exerciseId);
            }

            // Broadcast timer update
            this.broadcastToExercise(exerciseId, {
                type: 'phase_timer',
                timeRemaining: timeRemaining,
                phase: exercise.currentPhase,
                phaseName: currentPhase.name
            });
        }, 1000);
    }

    advancePhase(exerciseId) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return;

        if (exercise.phaseTimer) {
            clearInterval(exercise.phaseTimer);
            exercise.phaseTimer = null;
        }

        exercise.currentPhase++;
        exercise.phaseStartTime = new Date();

        if (exercise.currentPhase >= exercise.template.phases.length) {
            this.completeExercise(exerciseId);
        } else {
            this.startPhaseTimer(exerciseId);
            
            this.broadcastToExercise(exerciseId, {
                type: 'phase_advance',
                newPhase: exercise.currentPhase,
                phaseName: exercise.template.phases[exercise.currentPhase].name
            });
        }
    }

    executeRedTeamAction(exerciseId, userId, actionType, target, method, details = {}) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise || exercise.status !== 'active') return false;

        const userTeam = this.teamAssignments.get(userId);
        if (!userTeam || userTeam.team !== 'red' || userTeam.exerciseId !== exerciseId) {
            return false;
        }

        const action = {
            id: Date.now(),
            timestamp: new Date(),
            userId: userId,
            team: 'red',
            type: actionType,
            target: target,
            method: method,
            details: details,
            success: this.calculateActionSuccess(exercise, actionType, target, method),
            detected: false,
            points: 0
        };

        // Calculate success probability and results
        this.processRedTeamAction(exercise, action);

        // Add to exercise timeline
        exercise.timeline.push(action);
        exercise.teams.red.actions.push(action);

        // Check for Blue Team detection
        this.checkForDetection(exercise, action);

        // Update exercise state
        this.updateExerciseState(exercise, action);

        // Broadcast action (with appropriate filtering)
        this.broadcastActionResult(exerciseId, action);

        return action;
    }

    executeBlueTeamAction(exerciseId, userId, actionType, target, method, details = {}) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise || exercise.status !== 'active') return false;

        const userTeam = this.teamAssignments.get(userId);
        if (!userTeam || userTeam.team !== 'blue' || userTeam.exerciseId !== exerciseId) {
            return false;
        }

        const action = {
            id: Date.now(),
            timestamp: new Date(),
            userId: userId,
            team: 'blue',
            type: actionType,
            target: target,
            method: method,
            details: details,
            success: this.calculateActionSuccess(exercise, actionType, target, method),
            points: 0
        };

        // Process Blue Team action
        this.processBlueTeamAction(exercise, action);

        // Add to exercise timeline
        exercise.timeline.push(action);
        exercise.teams.blue.actions.push(action);

        // Update exercise state
        this.updateExerciseState(exercise, action);

        // Broadcast action result
        this.broadcastActionResult(exerciseId, action);

        return action;
    }

    processRedTeamAction(exercise, action) {
        const target = exercise.environment_state.assets.get(action.target);
        if (!target) return;

        switch (action.type) {
            case 'reconnaissance':
                action.success = 0.9; // Usually successful
                action.points = 10;
                if (action.success > 0.8) {
                    action.result = `Discovered ${target.services.length} services on ${target.name}`;
                }
                break;

            case 'vulnerability_scan':
                action.success = 0.85;
                action.points = 20;
                if (action.success > 0.7) {
                    action.result = `Found ${target.vulnerabilities.length} vulnerabilities`;
                }
                break;

            case 'exploit':
                const vulnSeverity = this.getVulnerabilitySeverity(action.method);
                action.success = vulnSeverity === 'critical' ? 0.8 : vulnSeverity === 'high' ? 0.6 : 0.4;
                action.points = vulnSeverity === 'critical' ? 100 : vulnSeverity === 'high' ? 75 : 50;
                
                if (action.success > Math.random()) {
                    target.compromised = true;
                    target.compromise_level = vulnSeverity;
                    exercise.teams.red.compromisedAssets.push(action.target);
                    action.result = `Successfully compromised ${target.name}`;
                } else {
                    action.result = `Exploit failed against ${target.name}`;
                    action.points = 0;
                }
                break;

            case 'lateral_movement':
                if (target.compromised) {
                    action.success = 0.7;
                    action.points = 75;
                    action.result = `Moved laterally to ${target.name}`;
                } else {
                    action.success = 0.2;
                    action.points = 0;
                    action.result = `Cannot move to uncompromised system ${target.name}`;
                }
                break;

            case 'privilege_escalation':
                if (target.compromised) {
                    action.success = 0.6;
                    action.points = 100;
                    if (action.success > Math.random()) {
                        target.compromise_level = 'critical';
                        action.result = `Escalated privileges on ${target.name}`;
                    }
                } else {
                    action.success = 0;
                    action.points = 0;
                }
                break;

            case 'data_exfiltration':
                if (target.compromised && target.compromise_level === 'critical') {
                    action.success = 0.8;
                    action.points = 150;
                    action.result = `Exfiltrated data from ${target.name}`;
                } else {
                    action.success = 0.1;
                    action.points = 0;
                }
                break;
        }

        // Update Red Team score
        exercise.teams.red.score += action.points;
        exercise.scoring.red_total = exercise.teams.red.score;
    }

    processBlueTeamAction(exercise, action) {
        switch (action.type) {
            case 'monitoring_setup':
                action.success = 0.95;
                action.points = 25;
                action.result = `Enhanced monitoring on ${action.target}`;
                break;

            case 'threat_hunting':
                const compromisedCount = exercise.teams.red.compromisedAssets.length;
                action.success = compromisedCount > 0 ? 0.7 : 0.3;
                action.points = action.success > 0.6 ? 50 : 10;
                
                if (action.success > Math.random() && compromisedCount > 0) {
                    const detectedAsset = exercise.teams.red.compromisedAssets[0];
                    exercise.teams.blue.detections.push({
                        timestamp: new Date(),
                        asset: detectedAsset,
                        type: 'compromise_detected'
                    });
                    action.result = `Detected compromise on ${detectedAsset}`;
                    action.points = 100;
                }
                break;

            case 'incident_response':
                action.success = 0.8;
                action.points = 75;
                
                // Remove asset from compromised list if containment successful
                const targetIndex = exercise.teams.red.compromisedAssets.indexOf(action.target);
                if (targetIndex > -1 && action.success > Math.random()) {
                    exercise.teams.red.compromisedAssets.splice(targetIndex, 1);
                    const targetAsset = exercise.environment_state.assets.get(action.target);
                    if (targetAsset) {
                        targetAsset.compromised = false;
                        targetAsset.compromise_level = 'none';
                    }
                    action.result = `Successfully contained ${action.target}`;
                    action.points = 150;
                } else {
                    action.result = `Containment of ${action.target} failed`;
                    action.points = 25;
                }
                break;

            case 'forensic_analysis':
                action.success = 0.75;
                action.points = 100;
                action.result = `Analyzed artifacts from ${action.target}`;
                break;

            case 'patch_deployment':
                const targetAsset = exercise.environment_state.assets.get(action.target);
                if (targetAsset) {
                    action.success = 0.9;
                    action.points = 50;
                    targetAsset.patches = 'current';
                    targetAsset.vulnerabilities = targetAsset.vulnerabilities.filter(vuln => 
                        !this.isPatchableVulnerability(vuln)
                    );
                    action.result = `Patched vulnerabilities on ${targetAsset.name}`;
                }
                break;

            case 'network_isolation':
                action.success = 0.85;
                action.points = 75;
                action.result = `Isolated ${action.target} from network`;
                break;
        }

        // Update Blue Team score
        exercise.teams.blue.score += action.points;
        exercise.scoring.blue_total = exercise.teams.blue.score;
    }

    checkForDetection(exercise, redAction) {
        const detectionProbability = this.calculateDetectionProbability(exercise, redAction);
        
        if (Math.random() < detectionProbability) {
            redAction.detected = true;
            
            // Generate alert
            const alert = {
                id: Date.now(),
                timestamp: new Date(),
                severity: this.getAlertSeverity(redAction),
                source: redAction.target,
                description: this.generateAlertDescription(redAction),
                details: redAction
            };
            
            exercise.environment_state.alerts.push(alert);
            
            // Notify Blue Team
            this.broadcastToTeam(exercise.id, 'blue', {
                type: 'security_alert',
                alert: alert
            });

            // Award detection points to Blue Team
            const detectionPoints = this.calculateDetectionPoints(redAction);
            exercise.teams.blue.score += detectionPoints;
            exercise.scoring.blue_total = exercise.teams.blue.score;
        }
    }

    calculateDetectionProbability(exercise, action) {
        let baseProbability = 0.3;
        
        // Higher detection for certain actions
        const detectionRates = {
            'reconnaissance': 0.2,
            'vulnerability_scan': 0.4,
            'exploit': 0.6,
            'lateral_movement': 0.5,
            'privilege_escalation': 0.7,
            'data_exfiltration': 0.8
        };
        
        baseProbability = detectionRates[action.type] || baseProbability;
        
        // Increase detection if Blue Team has enhanced monitoring
        const monitoringActions = exercise.teams.blue.actions.filter(a => 
            a.type === 'monitoring_setup' && a.target === action.target
        );
        baseProbability += monitoringActions.length * 0.2;
        
        // Decrease detection based on Red Team stealth techniques
        if (action.method.includes('stealth') || action.method.includes('evasion')) {
            baseProbability *= 0.7;
        }
        
        return Math.min(0.95, baseProbability);
    }

    calculateActionSuccess(exercise, actionType, target, method) {
        // Base success rates
        const successRates = {
            'reconnaissance': 0.9,
            'vulnerability_scan': 0.85,
            'exploit': 0.6,
            'lateral_movement': 0.5,
            'privilege_escalation': 0.4,
            'data_exfiltration': 0.7,
            'monitoring_setup': 0.95,
            'threat_hunting': 0.6,
            'incident_response': 0.7,
            'forensic_analysis': 0.8,
            'patch_deployment': 0.9,
            'network_isolation': 0.85
        };
        
        return successRates[actionType] || 0.5;
    }

    getVulnerabilitySeverity(vulnName) {
        const criticalVulns = ['MS17-010', 'CVE-2024-1234', 'EternalBlue'];
        const highVulns = ['SQL Injection', 'Remote Code Execution', 'Privilege Escalation'];
        const mediumVulns = ['XSS', 'CSRF', 'Information Disclosure'];
        
        if (criticalVulns.some(vuln => vulnName.includes(vuln))) return 'critical';
        if (highVulns.some(vuln => vulnName.includes(vuln))) return 'high';
        if (mediumVulns.some(vuln => vulnName.includes(vuln))) return 'medium';
        return 'low';
    }

    generateAlertDescription(action) {
        const descriptions = {
            'reconnaissance': `Port scanning detected on ${action.target}`,
            'vulnerability_scan': `Vulnerability scan detected on ${action.target}`,
            'exploit': `Exploitation attempt detected on ${action.target}`,
            'lateral_movement': `Suspicious lateral movement to ${action.target}`,
            'privilege_escalation': `Privilege escalation attempt on ${action.target}`,
            'data_exfiltration': `Data exfiltration detected from ${action.target}`
        };
        
        return descriptions[action.type] || `Suspicious activity on ${action.target}`;
    }

    completeExercise(exerciseId) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return;

        exercise.status = 'completed';
        exercise.completedAt = new Date();

        if (exercise.phaseTimer) {
            clearInterval(exercise.phaseTimer);
        }

        // Calculate final scores and results
        const results = this.calculateFinalResults(exercise);
        exercise.results = results;

        // Award achievements
        this.awardExerciseAchievements(exercise);

        this.broadcastToExercise(exerciseId, {
            type: 'exercise_completed',
            results: results
        });

        return results;
    }

    calculateFinalResults(exercise) {
        const redScore = exercise.teams.red.score;
        const blueScore = exercise.teams.blue.score;
        
        // Calculate objective completion rates
        const redObjectives = exercise.template.red_team.objectives;
        const blueObjectives = exercise.template.blue_team.objectives;
        
        const redCompletion = (exercise.teams.red.completedObjectives.length / redObjectives.length) * 100;
        const blueCompletion = (exercise.teams.blue.completedObjectives.length / blueObjectives.length) * 100;
        
        const winner = redScore > blueScore ? 'red' : blueScore > redScore ? 'blue' : 'tie';
        
        return {
            winner: winner,
            duration: exercise.completedAt - exercise.startedAt,
            scores: {
                red: redScore,
                blue: blueScore,
                difference: Math.abs(redScore - blueScore)
            },
            completion_rates: {
                red: Math.round(redCompletion),
                blue: Math.round(blueCompletion)
            },
            compromised_assets: exercise.teams.red.compromisedAssets.length,
            detected_activities: exercise.teams.blue.detections.length,
            total_actions: exercise.timeline.length,
            mvp: this.calculateMVP(exercise)
        };
    }

    calculateMVP(exercise) {
        // Calculate Most Valuable Player based on points and key actions
        const playerStats = new Map();
        
        exercise.timeline.forEach(action => {
            if (!playerStats.has(action.userId)) {
                playerStats.set(action.userId, {
                    userId: action.userId,
                    team: action.team,
                    points: 0,
                    actions: 0,
                    criticalActions: 0
                });
            }
            
            const stats = playerStats.get(action.userId);
            stats.points += action.points;
            stats.actions++;
            
            if (action.points >= 100) {
                stats.criticalActions++;
            }
        });
        
        // Find MVP
        let mvp = null;
        let maxScore = 0;
        
        playerStats.forEach(stats => {
            const score = stats.points + (stats.criticalActions * 50);
            if (score > maxScore) {
                maxScore = score;
                mvp = stats;
            }
        });
        
        return mvp;
    }

    broadcastToExercise(exerciseId, message) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return;

        // Broadcast to all participants
        [...exercise.teams.red.members, ...exercise.teams.blue.members].forEach(userId => {
            this.sendToUser(userId, message);
        });
    }

    broadcastToTeam(exerciseId, teamColor, message) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return;

        exercise.teams[teamColor].members.forEach(userId => {
            this.sendToUser(userId, message);
        });
    }

    broadcastActionResult(exerciseId, action) {
        const exercise = this.activeExercises.get(exerciseId);
        if (!exercise) return;

        // Send full details to the acting team
        this.broadcastToTeam(exerciseId, action.team, {
            type: 'action_result',
            action: action
        });

        // Send limited details to opposing team (only if detected)
        if (action.team === 'red' && action.detected) {
            this.broadcastToTeam(exerciseId, 'blue', {
                type: 'threat_detected',
                action: {
                    timestamp: action.timestamp,
                    type: action.type,
                    target: action.target,
                    detected: true
                }
            });
        }
    }

    sendToUser(userId, message) {
        // In real implementation, this would use WebSockets
        const event = new CustomEvent('redVsBlueUpdate', {
            detail: { userId, message }
        });
        document.dispatchEvent(event);
    }

    renderExerciseSelection() {
        return `
            <div class="red-vs-blue-container">
                <div class="rvb-header">
                    <h1>⚔️ Red Team vs Blue Team</h1>
                    <p>Realistische Angriff vs. Verteidigung Simulationen</p>
                </div>
                
                <div class="exercise-templates">
                    <h2>🎯 Verfügbare Übungen</h2>
                    <div class="templates-grid">
                        ${Object.values(this.exerciseTemplates).map(template => this.renderTemplateCard(template)).join('')}
                    </div>
                </div>
                
                <div class="active-exercises">
                    <h2>🔄 Aktive Übungen</h2>
                    <div class="exercises-list">
                        ${this.renderActiveExercises()}
                    </div>
                </div>
            </div>
        `;
    }

    renderTemplateCard(template) {
        const difficultyColors = {
            'beginner': '#28a745',
            'intermediate': '#ffc107', 
            'advanced': '#fd7e14',
            'expert': '#dc3545'
        };

        return `
            <div class="template-card" onclick="redVsBlue.showTemplateDetails('${template.id}')">
                <div class="template-header">
                    <h3>${template.title}</h3>
                    <div class="template-meta">
                        <span class="difficulty-badge" style="background-color: ${difficultyColors[template.difficulty]}">
                            ${template.difficulty.toUpperCase()}
                        </span>
                        <span class="duration-badge">⏱️ ${template.duration}min</span>
                    </div>
                </div>
                
                <p class="template-description">${template.description}</p>
                
                <div class="template-environment">
                    <h4>🎯 Zielumgebung:</h4>
                    <p>${template.environment.name} (${template.environment.type})</p>
                </div>
                
                <div class="template-objectives">
                    <div class="red-objectives">
                        <h5>🔴 Red Team (${template.red_team.objectives.length} Ziele)</h5>
                        <ul>
                            ${template.red_team.objectives.slice(0, 3).map(obj => `<li>${obj.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="blue-objectives">
                        <h5>🔵 Blue Team (${template.blue_team.objectives.length} Ziele)</h5>
                        <ul>
                            ${template.blue_team.objectives.slice(0, 3).map(obj => `<li>${obj.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="template-actions">
                    <button onclick="event.stopPropagation(); redVsBlue.createExerciseDialog('${template.id}')" class="create-exercise-btn">
                        🚀 Übung erstellen
                    </button>
                    <button onclick="event.stopPropagation(); redVsBlue.showTemplateDetails('${template.id}')" class="details-btn">
                        📋 Details
                    </button>
                </div>
            </div>
        `;
    }

    renderActiveExercises() {
        const exercises = Array.from(this.activeExercises.values());
        
        if (exercises.length === 0) {
            return '<p class="no-exercises">Keine aktiven Übungen. Erstellen Sie eine neue Übung!</p>';
        }

        return exercises.map(exercise => `
            <div class="exercise-card">
                <div class="exercise-header">
                    <h4>${exercise.name}</h4>
                    <span class="exercise-status status-${exercise.status}">${this.getStatusText(exercise.status)}</span>
                </div>
                
                <div class="exercise-info">
                    <span class="template-name">${exercise.template.title}</span>
                    <span class="exercise-duration">⏱️ ${exercise.template.duration}min</span>
                </div>
                
                <div class="team-info">
                    <div class="red-team">
                        <span class="team-label">🔴 Red Team</span>
                        <span class="member-count">${exercise.teams.red.members.length} Mitglieder</span>
                        <span class="team-score">${exercise.teams.red.score} Punkte</span>
                    </div>
                    <div class="blue-team">
                        <span class="team-label">🔵 Blue Team</span>
                        <span class="member-count">${exercise.teams.blue.members.length} Mitglieder</span>
                        <span class="team-score">${exercise.teams.blue.score} Punkte</span>
                    </div>
                </div>
                
                <div class="exercise-actions">
                    ${exercise.status === 'preparation' ? `
                        <button onclick="redVsBlue.joinExercise('${exercise.id}', 'red')" class="join-red-btn">Red Team beitreten</button>
                        <button onclick="redVsBlue.joinExercise('${exercise.id}', 'blue')" class="join-blue-btn">Blue Team beitreten</button>
                    ` : `
                        <button onclick="redVsBlue.viewExercise('${exercise.id}')" class="view-exercise-btn">Übung anzeigen</button>
                    `}
                </div>
            </div>
        `).join('');
    }

    getStatusText(status) {
        const statusTexts = {
            'preparation': '⏳ Vorbereitung',
            'active': '🔄 Aktiv',
            'paused': '⏸️ Pausiert',
            'completed': '✅ Abgeschlossen'
        };
        return statusTexts[status] || status;
    }

    generateExerciseId() {
        return 'ex_' + Math.random().toString(36).substr(2, 9);
    }

    awardExerciseAchievements(exercise) {
        // Award achievements to all participants
        const allMembers = [...exercise.teams.red.members, ...exercise.teams.blue.members];
        
        allMembers.forEach(userId => {
            if (window.achievementSystem) {
                window.achievementSystem.updateProgress(userId, 'red_vs_blue_participant', 1);
                
                const userTeam = this.teamAssignments.get(userId);
                if (userTeam) {
                    const teamStats = exercise.teams[userTeam.team];
                    const userActions = exercise.timeline.filter(action => action.userId === userId);
                    
                    // Team-specific achievements
                    if (userTeam.team === 'red') {
                        window.achievementSystem.updateProgress(userId, 'red_team_member', 1);
                        if (teamStats.compromisedAssets.length >= 3) {
                            window.achievementSystem.updateProgress(userId, 'system_infiltrator', 1);
                        }
                    } else {
                        window.achievementSystem.updateProgress(userId, 'blue_team_member', 1);
                        if (teamStats.detections.length >= 5) {
                            window.achievementSystem.updateProgress(userId, 'threat_hunter', 1);
                        }
                    }
                    
                    // Performance achievements
                    if (userActions.filter(a => a.points >= 100).length >= 3) {
                        window.achievementSystem.updateProgress(userId, 'high_impact_player', 1);
                    }
                }
            }
        });
    }
}

// CSS for Red vs Blue Simulator
const redVsBlueCSS = `
    .red-vs-blue-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .rvb-header {
        text-align: center;
        background: linear-gradient(135deg, #dc3545 0%, #007bff 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .rvb-header h1 {
        margin: 0 0 15px 0;
        font-size: 2.5em;
    }
    
    .exercise-templates,
    .active-exercises {
        background: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .exercise-templates h2,
    .active-exercises h2 {
        margin: 0 0 25px 0;
        color: #2c3e50;
    }
    
    .templates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 25px;
    }
    
    .template-card {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid #e9ecef;
    }
    
    .template-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        border-color: #007bff;
        background: white;
    }
    
    .template-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .template-header h3 {
        margin: 0;
        color: #2c3e50;
        font-size: 1.3em;
    }
    
    .template-meta {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-end;
    }
    
    .difficulty-badge,
    .duration-badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: bold;
        color: white;
    }
    
    .duration-badge {
        background: #6c757d;
    }
    
    .template-description {
        color: #495057;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    
    .template-environment {
        background: #e3f2fd;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    
    .template-environment h4 {
        margin: 0 0 8px 0;
        color: #1976d2;
    }
    
    .template-objectives {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .red-objectives,
    .blue-objectives {
        background: white;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #dc3545;
    }
    
    .blue-objectives {
        border-left-color: #007bff;
    }
    
    .red-objectives h5,
    .blue-objectives h5 {
        margin: 0 0 10px 0;
        font-size: 0.9em;
    }
    
    .red-objectives h5 {
        color: #dc3545;
    }
    
    .blue-objectives h5 {
        color: #007bff;
    }
    
    .red-objectives ul,
    .blue-objectives ul {
        margin: 0;
        padding-left: 20px;
        font-size: 0.85em;
    }
    
    .red-objectives li,
    .blue-objectives li {
        margin: 5px 0;
    }
    
    .template-actions {
        display: flex;
        gap: 10px;
    }
    
    .create-exercise-btn,
    .details-btn {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .create-exercise-btn {
        background: #28a745;
        color: white;
    }
    
    .create-exercise-btn:hover {
        background: #218838;
    }
    
    .details-btn {
        background: #6c757d;
        color: white;
    }
    
    .details-btn:hover {
        background: #5a6268;
    }
    
    .exercises-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
    }
    
    .no-exercises {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        padding: 40px;
        background: #f8f9fa;
        border-radius: 10px;
    }
    
    .exercise-card {
        background: white;
        border: 2px solid #e9ecef;
        border-radius: 15px;
        padding: 25px;
        transition: all 0.3s ease;
    }
    
    .exercise-card:hover {
        border-color: #007bff;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .exercise-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .exercise-header h4 {
        margin: 0;
        color: #2c3e50;
    }
    
    .exercise-status {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .status-preparation {
        background: #fff3cd;
        color: #856404;
    }
    
    .status-active {
        background: #d4edda;
        color: #155724;
    }
    
    .status-paused {
        background: #f8d7da;
        color: #721c24;
    }
    
    .status-completed {
        background: #d1ecf1;
        color: #0c5460;
    }
    
    .exercise-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        font-size: 0.9em;
        color: #6c757d;
    }
    
    .team-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 20px;
    }
    
    .red-team,
    .blue-team {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
    }
    
    .red-team {
        border-left: 4px solid #dc3545;
    }
    
    .blue-team {
        border-left: 4px solid #007bff;
    }
    
    .team-label {
        display: block;
        font-weight: bold;
        margin-bottom: 8px;
    }
    
    .member-count,
    .team-score {
        display: block;
        font-size: 0.9em;
        color: #6c757d;
        margin: 4px 0;
    }
    
    .team-score {
        font-weight: bold;
        color: #2c3e50;
    }
    
    .exercise-actions {
        display: flex;
        gap: 10px;
    }
    
    .join-red-btn,
    .join-blue-btn,
    .view-exercise-btn {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .join-red-btn {
        background: #dc3545;
        color: white;
    }
    
    .join-red-btn:hover {
        background: #c82333;
    }
    
    .join-blue-btn {
        background: #007bff;
        color: white;
    }
    
    .join-blue-btn:hover {
        background: #0056b3;
    }
    
    .view-exercise-btn {
        background: #28a745;
        color: white;
    }
    
    .view-exercise-btn:hover {
        background: #218838;
    }
    
    @media (max-width: 768px) {
        .templates-grid {
            grid-template-columns: 1fr;
        }
        
        .exercises-list {
            grid-template-columns: 1fr;
        }
        
        .template-objectives {
            grid-template-columns: 1fr;
        }
        
        .team-info {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const redVsBlueStyleSheet = document.createElement('style');
redVsBlueStyleSheet.textContent = redVsBlueCSS;
document.head.appendChild(redVsBlueStyleSheet);

// Global instance
window.redVsBlue = new RedVsBlueSimulator();
