// Virtual SOC Environment - Realistic Security Operations Center Simulation
class VirtualSOCEnvironment {
    constructor() {
        this.socInstance = null;
        this.activeAlerts = new Map();
        this.incidentQueue = [];
        this.socMetrics = {};
        this.networkTopology = {};
        this.assetInventory = new Map();
        this.threatFeeds = [];
        this.analystWorkstations = new Map();
        this.timeAcceleration = 1; // 1x = real time, 60x = 1 hour per minute
        this.socShift = null;
        this.initializeSOCEnvironment();
    }

    initializeSOCEnvironment() {
        this.createNetworkTopology();
        this.setupAssetInventory();
        this.initializeThreatFeeds();
        this.createSOCWorkstations();
        this.startSOCOperations();
    }

    createNetworkTopology() {
        this.networkTopology = {
            corporate_network: {
                id: "corp_net",
                name: "Corporate Network",
                subnets: [
                    { id: "dmz", name: "DMZ", range: "10.0.1.0/24", criticality: "high" },
                    { id: "internal", name: "Internal LAN", range: "192.168.1.0/24", criticality: "medium" },
                    { id: "servers", name: "Server Farm", range: "172.16.1.0/24", criticality: "critical" },
                    { id: "guest", name: "Guest Network", range: "10.0.100.0/24", criticality: "low" }
                ],
                monitoring_points: [
                    { id: "firewall_01", type: "firewall", location: "perimeter" },
                    { id: "ids_01", type: "IDS", location: "dmz" },
                    { id: "switch_core", type: "switch", location: "internal" }
                ]
            },
            cloud_infrastructure: {
                id: "cloud_infra",
                name: "Cloud Infrastructure",
                providers: ["AWS", "Azure"],
                services: [
                    { name: "Web Applications", instances: 12, criticality: "high" },
                    { name: "Databases", instances: 5, criticality: "critical" },
                    { name: "API Gateway", instances: 3, criticality: "high" }
                ]
            }
        };
    }

    setupAssetInventory() {
        const assets = [
            // Critical Infrastructure
            { id: "DC01", type: "Domain Controller", ip: "172.16.1.10", criticality: "critical", status: "online" },
            { id: "DB01", type: "Database Server", ip: "172.16.1.20", criticality: "critical", status: "online" },
            { id: "WEB01", type: "Web Server", ip: "10.0.1.10", criticality: "high", status: "online" },
            { id: "MAIL01", type: "Mail Server", ip: "172.16.1.30", criticality: "high", status: "online" },
            
            // Network Infrastructure
            { id: "FW01", type: "Firewall", ip: "10.0.1.1", criticality: "critical", status: "online" },
            { id: "SW01", type: "Core Switch", ip: "172.16.1.1", criticality: "high", status: "online" },
            
            // Endpoints
            { id: "WS001-050", type: "Workstation", ip_range: "192.168.1.10-60", criticality: "medium", count: 50 },
            { id: "LAP001-025", type: "Laptop", ip_range: "192.168.1.100-125", criticality: "medium", count: 25 }
        ];

        assets.forEach(asset => {
            this.assetInventory.set(asset.id, {
                ...asset,
                lastSeen: new Date(),
                vulnerabilities: this.generateVulnerabilities(asset.type),
                monitoring: this.getMonitoringCapabilities(asset.type)
            });
        });
    }

    generateVulnerabilities(assetType) {
        const vulnDatabase = {
            "Domain Controller": [
                { cve: "CVE-2021-42287", severity: "critical", description: "Active Directory Privilege Escalation" },
                { cve: "CVE-2020-1472", severity: "critical", description: "Zerologon Vulnerability" }
            ],
            "Web Server": [
                { cve: "CVE-2021-44228", severity: "critical", description: "Log4j Remote Code Execution" },
                { cve: "CVE-2021-34527", severity: "high", description: "PrintNightmare" }
            ],
            "Database Server": [
                { cve: "CVE-2020-14750", severity: "high", description: "Oracle Database Vulnerability" }
            ],
            "Workstation": [
                { cve: "CVE-2021-1675", severity: "medium", description: "Windows Print Spooler" }
            ]
        };

        return vulnDatabase[assetType] || [];
    }

    getMonitoringCapabilities(assetType) {
        const capabilities = {
            "Domain Controller": ["windows_event_logs", "ldap_monitoring", "kerberos_logs"],
            "Database Server": ["db_audit_logs", "connection_monitoring", "query_analysis"],
            "Web Server": ["access_logs", "error_logs", "performance_metrics"],
            "Firewall": ["traffic_logs", "blocked_connections", "rule_hits"],
            "Workstation": ["process_monitoring", "file_access", "network_connections"]
        };

        return capabilities[assetType] || ["basic_monitoring"];
    }

    initializeThreatFeeds() {
        this.threatFeeds = [
            {
                name: "MISP Threat Intelligence",
                type: "ioc_feed",
                updateFrequency: 15, // minutes
                lastUpdate: new Date(),
                indicators: this.generateThreatIndicators("ioc")
            },
            {
                name: "Commercial CTI Feed",
                type: "apt_intelligence",
                updateFrequency: 60,
                lastUpdate: new Date(),
                indicators: this.generateThreatIndicators("apt")
            },
            {
                name: "Internal Threat Intelligence",
                type: "internal_iocs",
                updateFrequency: 30,
                lastUpdate: new Date(),
                indicators: this.generateThreatIndicators("internal")
            }
        ];
    }

    generateThreatIndicators(type) {
        const indicators = {
            ioc: [
                { type: "ip", value: "185.220.101.45", description: "Known C2 Server", confidence: 85 },
                { type: "domain", value: "malicious-domain.com", description: "Phishing Domain", confidence: 90 },
                { type: "hash", value: "a4b5c6d7e8f9", description: "Malware Hash", confidence: 95 }
            ],
            apt: [
                { group: "APT29", ttp: "T1566.001", description: "Spearphishing Attachment", confidence: 80 },
                { group: "APT28", ttp: "T1055", description: "Process Injection", confidence: 85 }
            ],
            internal: [
                { type: "user", value: "suspicious_user@company.com", description: "Unusual Activity", confidence: 70 }
            ]
        };

        return indicators[type] || [];
    }

    createSOCWorkstations() {
        const workstations = [
            {
                id: "SOC-WS-01",
                role: "Tier 1 Analyst",
                analyst: "John Doe",
                shift: "day",
                tools: ["SIEM Dashboard", "Ticket System", "Network Monitor"],
                current_tasks: []
            },
            {
                id: "SOC-WS-02", 
                role: "Tier 2 Analyst",
                analyst: "Jane Smith",
                shift: "day",
                tools: ["SIEM Dashboard", "Forensic Tools", "Threat Intel Platform"],
                current_tasks: []
            },
            {
                id: "SOC-WS-03",
                role: "SOC Manager",
                analyst: "Mike Johnson",
                shift: "day",
                tools: ["SOC Dashboard", "Metrics Platform", "Communication Tools"],
                current_tasks: []
            }
        ];

        workstations.forEach(ws => {
            this.analystWorkstations.set(ws.id, ws);
        });
    }

    startSOCOperations() {
        this.socInstance = {
            startTime: new Date(),
            currentShift: this.getCurrentShift(),
            alertsProcessed: 0,
            incidentsCreated: 0,
            meanTimeToDetection: 0,
            meanTimeToResponse: 0,
            falsePositiveRate: 0.15,
            isActive: true
        };

        // Start generating alerts
        this.generatePeriodicAlerts();
        
        // Start metrics collection
        this.collectSOCMetrics();
    }

    getCurrentShift() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 14) return "day";
        if (hour >= 14 && hour < 22) return "evening";
        return "night";
    }

    generatePeriodicAlerts() {
        if (!this.socInstance.isActive) return;

        // Generate alerts based on threat scenarios
        setTimeout(() => {
            this.generateAlert();
            this.generatePeriodicAlerts();
        }, Math.random() * 30000 + 10000); // Random interval 10-40 seconds
    }

    generateAlert() {
        const alertTypes = [
            {
                type: "network_anomaly",
                severity: "medium",
                source: "IDS",
                probability: 0.3,
                generator: () => this.generateNetworkAlert()
            },
            {
                type: "malware_detection",
                severity: "high", 
                source: "Endpoint Protection",
                probability: 0.2,
                generator: () => this.generateMalwareAlert()
            },
            {
                type: "suspicious_login",
                severity: "medium",
                source: "Active Directory",
                probability: 0.25,
                generator: () => this.generateLoginAlert()
            },
            {
                type: "policy_violation",
                severity: "low",
                source: "DLP",
                probability: 0.15,
                generator: () => this.generatePolicyAlert()
            },
            {
                type: "threat_intelligence_match",
                severity: "high",
                source: "Threat Intel",
                probability: 0.1,
                generator: () => this.generateThreatIntelAlert()
            }
        ];

        // Select alert type based on probability
        const random = Math.random();
        let cumulative = 0;
        
        for (const alertType of alertTypes) {
            cumulative += alertType.probability;
            if (random <= cumulative) {
                const alert = alertType.generator();
                this.processNewAlert(alert);
                break;
            }
        }
    }

    generateNetworkAlert() {
        const anomalies = [
            "Unusual traffic volume to external IP",
            "Port scanning detected",
            "DNS tunneling suspected",
            "Beaconing behavior observed",
            "Large data transfer detected"
        ];

        return {
            id: this.generateAlertId(),
            type: "network_anomaly",
            severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
            source: "Network IDS",
            timestamp: new Date(),
            title: anomalies[Math.floor(Math.random() * anomalies.length)],
            details: {
                source_ip: this.generateRandomIP(),
                destination_ip: this.generateRandomIP(),
                protocol: ["TCP", "UDP", "ICMP"][Math.floor(Math.random() * 3)],
                port: Math.floor(Math.random() * 65535),
                bytes_transferred: Math.floor(Math.random() * 1000000)
            },
            raw_logs: this.generateRawLogs("network"),
            status: "new",
            assigned_to: null,
            false_positive_likelihood: Math.random() * 0.3
        };
    }

    generateMalwareAlert() {
        const malwareTypes = [
            "Trojan detected",
            "Ransomware behavior",
            "Suspicious PowerShell execution",
            "Process injection detected", 
            "Credential dumping attempt"
        ];

        return {
            id: this.generateAlertId(),
            type: "malware_detection",
            severity: ["medium", "high", "critical"][Math.floor(Math.random() * 3)],
            source: "Endpoint Protection",
            timestamp: new Date(),
            title: malwareTypes[Math.floor(Math.random() * malwareTypes.length)],
            details: {
                hostname: this.getRandomAsset("Workstation"),
                process_name: ["powershell.exe", "cmd.exe", "regsvr32.exe"][Math.floor(Math.random() * 3)],
                file_hash: this.generateRandomHash(),
                parent_process: "explorer.exe",
                command_line: "powershell.exe -enc base64_encoded_command"
            },
            raw_logs: this.generateRawLogs("endpoint"),
            status: "new",
            assigned_to: null,
            false_positive_likelihood: Math.random() * 0.2
        };
    }

    generateLoginAlert() {
        return {
            id: this.generateAlertId(),
            type: "suspicious_login",
            severity: ["low", "medium"][Math.floor(Math.random() * 2)],
            source: "Active Directory",
            timestamp: new Date(),
            title: "Suspicious login activity detected",
            details: {
                username: this.generateRandomUsername(),
                source_ip: this.generateRandomIP(),
                login_time: new Date(),
                failed_attempts: Math.floor(Math.random() * 10),
                unusual_location: Math.random() > 0.7
            },
            raw_logs: this.generateRawLogs("auth"),
            status: "new",
            assigned_to: null,
            false_positive_likelihood: Math.random() * 0.4
        };
    }

    generatePolicyAlert() {
        return {
            id: this.generateAlertId(),
            type: "policy_violation",
            severity: "low",
            source: "Data Loss Prevention",
            timestamp: new Date(),
            title: "Data exfiltration attempt blocked",
            details: {
                user: this.generateRandomUsername(),
                file_type: ["xlsx", "pdf", "docx"][Math.floor(Math.random() * 3)],
                destination: "external_email",
                rule_triggered: "PII_Detection"
            },
            raw_logs: this.generateRawLogs("dlp"),
            status: "new",
            assigned_to: null,
            false_positive_likelihood: Math.random() * 0.5
        };
    }

    generateThreatIntelAlert() {
        return {
            id: this.generateAlertId(),
            type: "threat_intelligence_match",
            severity: "high",
            source: "Threat Intelligence Platform",
            timestamp: new Date(),
            title: "Known IOC detected in network traffic",
            details: {
                indicator_type: "ip_address",
                indicator_value: "185.220.101.45",
                threat_actor: "APT29",
                campaign: "CozyBear 2024",
                confidence: 85
            },
            raw_logs: this.generateRawLogs("threat_intel"),
            status: "new",
            assigned_to: null,
            false_positive_likelihood: Math.random() * 0.1
        };
    }

    processNewAlert(alert) {
        this.activeAlerts.set(alert.id, alert);
        
        // Auto-assign to available analyst based on severity
        const availableAnalyst = this.findAvailableAnalyst(alert.severity);
        if (availableAnalyst) {
            this.assignAlert(alert.id, availableAnalyst);
        }

        // Check if alert should become incident
        if (this.shouldCreateIncident(alert)) {
            this.createIncident(alert);
        }

        // Update SOC metrics
        this.socInstance.alertsProcessed++;
        
        // Broadcast alert
        this.broadcastAlert(alert);
    }

    findAvailableAnalyst(severity) {
        const tier1 = Array.from(this.analystWorkstations.values()).filter(ws => 
            ws.role === "Tier 1 Analyst" && ws.current_tasks.length < 5
        );
        
        const tier2 = Array.from(this.analystWorkstations.values()).filter(ws => 
            ws.role === "Tier 2 Analyst" && ws.current_tasks.length < 3
        );

        if (severity === "critical" || severity === "high") {
            return tier2.length > 0 ? tier2[0].id : (tier1.length > 0 ? tier1[0].id : null);
        } else {
            return tier1.length > 0 ? tier1[0].id : (tier2.length > 0 ? tier2[0].id : null);
        }
    }

    assignAlert(alertId, analystId) {
        const alert = this.activeAlerts.get(alertId);
        const analyst = this.analystWorkstations.get(analystId);
        
        if (alert && analyst) {
            alert.assigned_to = analystId;
            alert.status = "assigned";
            alert.assignment_time = new Date();
            
            analyst.current_tasks.push({
                type: "alert_investigation",
                alert_id: alertId,
                start_time: new Date()
            });
        }
    }

    shouldCreateIncident(alert) {
        const incidentCriteria = {
            "critical": 0.8,
            "high": 0.4,
            "medium": 0.15,
            "low": 0.05
        };

        return Math.random() < (incidentCriteria[alert.severity] || 0.1);
    }

    createIncident(alert) {
        const incident = {
            id: this.generateIncidentId(),
            title: `Security Incident - ${alert.title}`,
            severity: alert.severity,
            status: "open",
            created_time: new Date(),
            source_alert: alert.id,
            assigned_team: "SOC",
            escalation_level: 1,
            affected_assets: [alert.details.hostname || "Unknown"],
            timeline: [
                {
                    timestamp: new Date(),
                    event: "Incident created from alert",
                    details: `Alert ${alert.id} escalated to incident`
                }
            ]
        };

        this.incidentQueue.push(incident);
        this.socInstance.incidentsCreated++;
        
        // Broadcast incident creation
        this.broadcastIncident(incident);
    }

    collectSOCMetrics() {
        if (!this.socInstance.isActive) return;

        const currentTime = new Date();
        const alerts = Array.from(this.activeAlerts.values());
        
        // Calculate MTTD (Mean Time To Detection)
        const detectedAlerts = alerts.filter(a => a.status !== "new");
        if (detectedAlerts.length > 0) {
            const totalDetectionTime = detectedAlerts.reduce((sum, alert) => {
                return sum + (alert.assignment_time - alert.timestamp);
            }, 0);
            this.socInstance.meanTimeToDetection = totalDetectionTime / detectedAlerts.length / 1000 / 60; // minutes
        }

        // Calculate false positive rate
        const investigatedAlerts = alerts.filter(a => a.status === "closed");
        if (investigatedAlerts.length > 0) {
            const falsePositives = investigatedAlerts.filter(a => a.false_positive_likelihood > 0.7).length;
            this.socInstance.falsePositiveRate = falsePositives / investigatedAlerts.length;
        }

        setTimeout(() => this.collectSOCMetrics(), 60000); // Update every minute
    }

    // Utility functions
    generateAlertId() {
        return `ALR-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    }

    generateIncidentId() {
        return `INC-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    }

    generateRandomIP() {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }

    generateRandomHash() {
        return Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    generateRandomUsername() {
        const users = ["jdoe", "asmith", "mjohnson", "kbrown", "lwilson", "dlee", "sgarcia"];
        return users[Math.floor(Math.random() * users.length)];
    }

    getRandomAsset(type) {
        const assets = Array.from(this.assetInventory.values()).filter(a => a.type === type);
        return assets.length > 0 ? assets[Math.floor(Math.random() * assets.length)].id : "UNKNOWN";
    }

    generateRawLogs(type) {
        const logTemplates = {
            network: "2024-08-10 14:30:15 IDS01 ALERT [1:2001:1] TCP connection attempt [Classification: Attempted Administrator Privilege Gain]",
            endpoint: "EventID:4688 ProcessName:powershell.exe CommandLine:-enc ZQBjAGgAbwAgACIASABlAGwAbABvACAAVwBvAHIAbABkACIA",
            auth: "EventID:4625 LogonType:3 FailureReason:0xC000006D IpAddress:192.168.1.100",
            dlp: "PolicyMatch:PII_SSN_Detection User:jdoe@company.com Action:Block Destination:external@gmail.com",
            threat_intel: "IOC_MATCH type:ip_address value:185.220.101.45 source:MISP confidence:85"
        };

        return logTemplates[type] || "Raw log data not available";
    }

    broadcastAlert(alert) {
        const event = new CustomEvent('socAlert', {
            detail: { alert }
        });
        document.dispatchEvent(event);
    }

    broadcastIncident(incident) {
        const event = new CustomEvent('socIncident', {
            detail: { incident }
        });
        document.dispatchEvent(event);
    }

    renderSOCDashboard() {
        const currentMetrics = this.getCurrentMetrics();
        const recentAlerts = this.getRecentAlerts();
        const activeIncidents = this.getActiveIncidents();

        return `
            <div class="soc-environment-container">
                <div class="soc-header">
                    <h1>🏭 Virtual SOC Environment</h1>
                    <div class="soc-status">
                        <span class="status-indicator ${this.socInstance?.isActive ? 'active' : 'inactive'}"></span>
                        <span>SOC Status: ${this.socInstance?.isActive ? 'Operational' : 'Offline'}</span>
                    </div>
                </div>
                
                <div class="soc-metrics-grid">
                    ${this.renderMetricsCards(currentMetrics)}
                </div>
                
                <div class="soc-workstations">
                    <h2>👥 Analyst Workstations</h2>
                    <div class="workstations-grid">
                        ${Array.from(this.analystWorkstations.values()).map(ws => 
                            this.renderWorkstation(ws)
                        ).join('')}
                    </div>
                </div>
                
                <div class="soc-alerts-incidents">
                    <div class="alerts-panel">
                        <h2>🚨 Active Alerts</h2>
                        <div class="alerts-list">
                            ${recentAlerts.map(alert => this.renderAlert(alert)).join('')}
                        </div>
                    </div>
                    
                    <div class="incidents-panel">
                        <h2>🔥 Active Incidents</h2>
                        <div class="incidents-list">
                            ${activeIncidents.map(incident => this.renderIncident(incident)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getCurrentMetrics() {
        return {
            alertsToday: this.socInstance?.alertsProcessed || 0,
            incidentsToday: this.socInstance?.incidentsCreated || 0,
            mttd: Math.round(this.socInstance?.meanTimeToDetection || 0),
            mttr: Math.round(this.socInstance?.meanTimeToResponse || 0),
            falsePositiveRate: Math.round((this.socInstance?.falsePositiveRate || 0) * 100),
            analystUtilization: this.calculateAnalystUtilization()
        };
    }

    calculateAnalystUtilization() {
        const analysts = Array.from(this.analystWorkstations.values());
        const totalCapacity = analysts.length * 5; // 5 tasks per analyst max
        const currentTasks = analysts.reduce((sum, analyst) => sum + analyst.current_tasks.length, 0);
        return Math.round((currentTasks / totalCapacity) * 100);
    }

    getRecentAlerts() {
        return Array.from(this.activeAlerts.values())
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 10);
    }

    getActiveIncidents() {
        return this.incidentQueue
            .filter(incident => incident.status === "open")
            .slice(0, 5);
    }

    renderMetricsCards(metrics) {
        return `
            <div class="metric-card">
                <div class="metric-value">${metrics.alertsToday}</div>
                <div class="metric-label">Alerts Today</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${metrics.incidentsToday}</div>
                <div class="metric-label">Incidents Today</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${metrics.mttd}m</div>
                <div class="metric-label">MTTD</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${metrics.falsePositiveRate}%</div>
                <div class="metric-label">False Positive Rate</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${metrics.analystUtilization}%</div>
                <div class="metric-label">Analyst Utilization</div>
            </div>
        `;
    }

    renderWorkstation(ws) {
        const taskLoad = ws.current_tasks.length;
        const loadClass = taskLoad >= 4 ? 'high' : taskLoad >= 2 ? 'medium' : 'low';
        
        return `
            <div class="workstation-card">
                <div class="workstation-header">
                    <h4>${ws.id}</h4>
                    <span class="load-indicator ${loadClass}">${taskLoad}/5</span>
                </div>
                <div class="workstation-details">
                    <p><strong>Role:</strong> ${ws.role}</p>
                    <p><strong>Analyst:</strong> ${ws.analyst}</p>
                    <p><strong>Shift:</strong> ${ws.shift}</p>
                </div>
                <div class="current-tasks">
                    <h5>Current Tasks:</h5>
                    ${ws.current_tasks.length > 0 ? 
                        ws.current_tasks.map(task => `<div class="task-item">${task.type}</div>`).join('') :
                        '<div class="no-tasks">No active tasks</div>'
                    }
                </div>
            </div>
        `;
    }

    renderAlert(alert) {
        const severityClass = `severity-${alert.severity}`;
        const statusClass = `status-${alert.status}`;
        
        return `
            <div class="alert-item ${severityClass} ${statusClass}">
                <div class="alert-header">
                    <span class="alert-id">${alert.id}</span>
                    <span class="alert-severity">${alert.severity.toUpperCase()}</span>
                    <span class="alert-time">${alert.timestamp.toLocaleTimeString()}</span>
                </div>
                <div class="alert-title">${alert.title}</div>
                <div class="alert-source">Source: ${alert.source}</div>
            </div>
        `;
    }

    renderIncident(incident) {
        return `
            <div class="incident-item">
                <div class="incident-header">
                    <span class="incident-id">${incident.id}</span>
                    <span class="incident-severity severity-${incident.severity}">${incident.severity.toUpperCase()}</span>
                </div>
                <div class="incident-title">${incident.title}</div>
                <div class="incident-details">
                    <span>Created: ${incident.created_time.toLocaleTimeString()}</span>
                    <span>Team: ${incident.assigned_team}</span>
                </div>
            </div>
        `;
    }
}

// CSS for Virtual SOC Environment
const socEnvironmentCSS = `
    .soc-environment-container {
        max-width: 1600px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .soc-header {
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .soc-status {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .status-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    
    .status-indicator.active {
        background: #28a745;
        box-shadow: 0 0 10px #28a745;
    }
    
    .status-indicator.inactive {
        background: #dc3545;
    }
    
    .soc-metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .metric-card {
        background: white;
        padding: 25px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .metric-value {
        font-size: 2.5em;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .metric-label {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .soc-workstations {
        margin-bottom: 30px;
    }
    
    .soc-workstations h2 {
        color: #2c3e50;
        margin-bottom: 20px;
    }
    
    .workstations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .workstation-card {
        background: white;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .workstation-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .workstation-header h4 {
        margin: 0;
        color: #2c3e50;
    }
    
    .load-indicator {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .load-indicator.low {
        background: #d4edda;
        color: #155724;
    }
    
    .load-indicator.medium {
        background: #fff3cd;
        color: #856404;
    }
    
    .load-indicator.high {
        background: #f8d7da;
        color: #721c24;
    }
    
    .workstation-details p {
        margin: 5px 0;
        font-size: 0.9em;
        color: #495057;
    }
    
    .current-tasks {
        margin-top: 15px;
    }
    
    .current-tasks h5 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .task-item {
        background: #f8f9fa;
        padding: 5px 10px;
        border-radius: 8px;
        margin-bottom: 5px;
        font-size: 0.8em;
        color: #495057;
    }
    
    .no-tasks {
        color: #6c757d;
        font-style: italic;
        font-size: 0.8em;
    }
    
    .soc-alerts-incidents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    
    .alerts-panel, .incidents-panel {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .alerts-panel h2, .incidents-panel h2 {
        margin: 0 0 20px 0;
        color: #2c3e50;
    }
    
    .alerts-list, .incidents-list {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .alert-item {
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 10px;
        border-left: 4px solid #dee2e6;
    }
    
    .alert-item.severity-critical {
        border-left-color: #dc3545;
        background: #fff5f5;
    }
    
    .alert-item.severity-high {
        border-left-color: #fd7e14;
        background: #fff8f0;
    }
    
    .alert-item.severity-medium {
        border-left-color: #ffc107;
        background: #fffbf0;
    }
    
    .alert-item.severity-low {
        border-left-color: #28a745;
        background: #f8fff9;
    }
    
    .alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    
    .alert-id {
        font-family: monospace;
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .alert-severity {
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 0.7em;
        font-weight: bold;
    }
    
    .alert-time {
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .alert-title {
        font-weight: 500;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .alert-source {
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .incident-item {
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 10px;
        background: #fff8f0;
        border: 1px solid #fd7e14;
    }
    
    .incident-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    
    .incident-id {
        font-family: monospace;
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .incident-title {
        font-weight: 500;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .incident-details {
        display: flex;
        justify-content: space-between;
        font-size: 0.8em;
        color: #6c757d;
    }
    
    @media (max-width: 768px) {
        .soc-alerts-incidents {
            grid-template-columns: 1fr;
        }
        
        .workstations-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const socStyleSheet = document.createElement('style');
socStyleSheet.textContent = socEnvironmentCSS;
document.head.appendChild(socStyleSheet);

// Global instance
window.virtualSOC = new VirtualSOCEnvironment();
