// Advanced Security Analytics Dashboard - Comprehensive Security Metrics & Intelligence
class AdvancedSecurityAnalyticsDashboard {
    constructor() {
        this.metrics = new Map();
        this.threats = new Map();
        this.vulnerabilities = new Map();
        this.incidents = new Map();
        this.compliance = new Map();
        this.riskAssessments = new Map();
        this.securityScore = 0;
        this.analyticsEngine = {};
        this.realTimeData = {};
        this.predictiveModels = {};
        this.benchmarking = {};
        this.reportingSystem = {};
        this.alerting = {};
        this.initializeDashboard();
    }

    initializeDashboard() {
        this.setupSecurityMetrics();
        this.setupThreatIntelligence();
        this.setupVulnerabilityManagement();
        this.setupIncidentTracking();
        this.setupComplianceMonitoring();
        this.setupRiskAssessment();
        this.setupAnalyticsEngine();
        this.setupRealTimeData();
        this.setupPredictiveModels();
        this.setupBenchmarking();
        this.setupReportingSystem();
        this.setupAlerting();
        this.calculateSecurityScore();
    }

    setupSecurityMetrics() {
        this.metrics = new Map([
            ['security_incidents', {
                id: 'security_incidents',
                name: 'Security Incidents',
                category: 'Incident Response',
                currentValue: 23,
                previousValue: 31,
                target: 15,
                trend: 'improving',
                changePercent: -25.8,
                unit: 'incidents',
                timeframe: 'monthly',
                severity: 'medium',
                description: 'Total security incidents detected and responded to',
                kpi: true,
                businessImpact: 'high'
            }],
            ['mean_time_to_detection', {
                id: 'mean_time_to_detection',
                name: 'Mean Time to Detection (MTTD)',
                category: 'Detection',
                currentValue: 4.2,
                previousValue: 6.1,
                target: 3.0,
                trend: 'improving',
                changePercent: -31.1,
                unit: 'hours',
                timeframe: 'monthly',
                severity: 'medium',
                description: 'Average time to detect security threats',
                kpi: true,
                businessImpact: 'high'
            }],
            ['mean_time_to_response', {
                id: 'mean_time_to_response',
                name: 'Mean Time to Response (MTTR)',
                category: 'Incident Response',
                currentValue: 2.8,
                previousValue: 4.2,
                target: 2.0,
                trend: 'improving',
                changePercent: -33.3,
                unit: 'hours',
                timeframe: 'monthly',
                severity: 'medium',
                description: 'Average time to respond to security incidents',
                kpi: true,
                businessImpact: 'high'
            }],
            ['vulnerability_exposure', {
                id: 'vulnerability_exposure',
                name: 'Critical Vulnerability Exposure',
                category: 'Vulnerability Management',
                currentValue: 12,
                previousValue: 18,
                target: 5,
                trend: 'improving',
                changePercent: -33.3,
                unit: 'vulnerabilities',
                timeframe: 'weekly',
                severity: 'high',
                description: 'Number of unpatched critical vulnerabilities',
                kpi: true,
                businessImpact: 'critical'
            }],
            ['phishing_success_rate', {
                id: 'phishing_success_rate',
                name: 'Phishing Simulation Success Rate',
                category: 'Security Awareness',
                currentValue: 8.5,
                previousValue: 12.3,
                target: 5.0,
                trend: 'improving',
                changePercent: -30.9,
                unit: 'percent',
                timeframe: 'quarterly',
                severity: 'medium',
                description: 'Percentage of employees failing phishing tests',
                kpi: true,
                businessImpact: 'medium'
            }],
            ['security_training_completion', {
                id: 'security_training_completion',
                name: 'Security Training Completion',
                category: 'Security Awareness',
                currentValue: 94.2,
                previousValue: 87.1,
                target: 95.0,
                trend: 'improving',
                changePercent: 8.2,
                unit: 'percent',
                timeframe: 'quarterly',
                severity: 'low',
                description: 'Percentage of employees completing security training',
                kpi: true,
                businessImpact: 'medium'
            }],
            ['compliance_score', {
                id: 'compliance_score',
                name: 'Overall Compliance Score',
                category: 'Compliance',
                currentValue: 87.5,
                previousValue: 82.1,
                target: 90.0,
                trend: 'improving',
                changePercent: 6.6,
                unit: 'percent',
                timeframe: 'monthly',
                severity: 'medium',
                description: 'Aggregate compliance score across all frameworks',
                kpi: true,
                businessImpact: 'high'
            }],
            ['security_budget_utilization', {
                id: 'security_budget_utilization',
                name: 'Security Budget Utilization',
                category: 'Financial',
                currentValue: 78.3,
                previousValue: 71.2,
                target: 85.0,
                trend: 'improving',
                changePercent: 10.0,
                unit: 'percent',
                timeframe: 'monthly',
                severity: 'low',
                description: 'Percentage of allocated security budget utilized',
                kpi: false,
                businessImpact: 'medium'
            }]
        ]);
    }

    setupThreatIntelligence() {
        this.threats = new Map([
            ['apt_campaigns', {
                id: 'apt_campaigns',
                name: 'Active APT Campaigns',
                threatType: 'Advanced Persistent Threat',
                severity: 'critical',
                count: 5,
                industries: ['Financial Services', 'Healthcare', 'Government'],
                regions: ['North America', 'Europe', 'Asia-Pacific'],
                techniques: ['Spear Phishing', 'Supply Chain', 'Zero-Day Exploits'],
                attribution: ['APT29', 'APT40', 'Lazarus Group'],
                indicators: 127,
                lastUpdated: new Date(),
                confidence: 'high'
            }],
            ['ransomware_groups', {
                id: 'ransomware_groups',
                name: 'Active Ransomware Groups',
                threatType: 'Ransomware',
                severity: 'critical',
                count: 12,
                industries: ['Manufacturing', 'Healthcare', 'Education'],
                regions: ['Global'],
                techniques: ['Double Extortion', 'RaaS', 'Living off the Land'],
                attribution: ['Conti', 'LockBit', 'BlackCat'],
                indicators: 245,
                lastUpdated: new Date(),
                confidence: 'high'
            }],
            ['supply_chain_attacks', {
                id: 'supply_chain_attacks',
                name: 'Supply Chain Threats',
                threatType: 'Supply Chain',
                severity: 'high',
                count: 8,
                industries: ['Technology', 'Manufacturing', 'Finance'],
                regions: ['Global'],
                techniques: ['Software Supply Chain', 'Hardware Tampering', 'Third-Party Compromise'],
                attribution: ['Various State Actors', 'Cybercriminal Groups'],
                indicators: 89,
                lastUpdated: new Date(),
                confidence: 'medium'
            }],
            ['cloud_threats', {
                id: 'cloud_threats',
                name: 'Cloud-Specific Threats',
                threatType: 'Cloud Security',
                severity: 'high',
                count: 15,
                industries: ['All Cloud Users'],
                regions: ['Global'],
                techniques: ['Misconfiguration Exploitation', 'Identity Attacks', 'Container Escapes'],
                attribution: ['Various Actors'],
                indicators: 156,
                lastUpdated: new Date(),
                confidence: 'high'
            }]
        ]);
    }

    setupVulnerabilityManagement() {
        this.vulnerabilities = new Map([
            ['critical_vulns', {
                id: 'critical_vulns',
                severity: 'Critical',
                count: 12,
                averageAge: 8.5,
                oldestAge: 23,
                categories: {
                    'Remote Code Execution': 5,
                    'Privilege Escalation': 3,
                    'Information Disclosure': 2,
                    'Authentication Bypass': 2
                },
                affectedSystems: {
                    'Web Applications': 6,
                    'Operating Systems': 4,
                    'Network Devices': 2
                },
                patchStatus: {
                    'Patches Available': 8,
                    'Workarounds Available': 3,
                    'No Fix Available': 1
                },
                businessImpact: 'High'
            }],
            ['high_vulns', {
                id: 'high_vulns',
                severity: 'High',
                count: 34,
                averageAge: 15.2,
                oldestAge: 45,
                categories: {
                    'Cross-Site Scripting': 12,
                    'SQL Injection': 8,
                    'Buffer Overflow': 6,
                    'Denial of Service': 5,
                    'Other': 3
                },
                affectedSystems: {
                    'Web Applications': 20,
                    'Database Systems': 8,
                    'Network Services': 6
                },
                patchStatus: {
                    'Patches Available': 28,
                    'Workarounds Available': 5,
                    'No Fix Available': 1
                },
                businessImpact: 'Medium'
            }],
            ['medium_vulns', {
                id: 'medium_vulns',
                severity: 'Medium',
                count: 78,
                averageAge: 32.1,
                oldestAge: 120,
                categories: {
                    'Information Disclosure': 25,
                    'Cross-Site Scripting': 18,
                    'Weak Authentication': 15,
                    'Configuration Issues': 12,
                    'Other': 8
                },
                affectedSystems: {
                    'Web Applications': 45,
                    'Network Devices': 20,
                    'Workstations': 13
                },
                patchStatus: {
                    'Patches Available': 65,
                    'Workarounds Available': 10,
                    'No Fix Available': 3
                },
                businessImpact: 'Low'
            }]
        ]);
    }

    setupIncidentTracking() {
        this.incidents = new Map([
            ['inc_001', {
                id: 'inc_001',
                title: 'Phishing Campaign Targeting Finance Team',
                category: 'Phishing',
                severity: 'High',
                status: 'Contained',
                reportedDate: new Date('2025-08-10T09:15:00'),
                detectedDate: new Date('2025-08-10T09:45:00'),
                responseDate: new Date('2025-08-10T10:30:00'),
                resolvedDate: null,
                assignedTo: 'SOC Team Alpha',
                affectedSystems: ['Email Infrastructure', 'User Workstations'],
                affectedUsers: 23,
                businessImpact: 'Medium',
                timeline: [
                    { time: '09:15', event: 'Initial phishing email reported by user' },
                    { time: '09:45', event: 'SOC confirms phishing campaign' },
                    { time: '10:30', event: 'Email filters updated, users notified' },
                    { time: '11:00', event: 'Forensic analysis initiated' }
                ],
                containmentActions: [
                    'Email quarantine implemented',
                    'User awareness notification sent',
                    'Additional monitoring deployed'
                ],
                indicators: ['suspicious-email@fake-bank.com', '192.168.1.100', 'malicious-attachment.pdf'],
                cost: 15000
            }],
            ['inc_002', {
                id: 'inc_002',
                title: 'Unauthorized Access to Development Server',
                category: 'Unauthorized Access',
                severity: 'Critical',
                status: 'Under Investigation',
                reportedDate: new Date('2025-08-09T14:22:00'),
                detectedDate: new Date('2025-08-09T14:22:00'),
                responseDate: new Date('2025-08-09T14:45:00'),
                resolvedDate: null,
                assignedTo: 'Incident Response Team',
                affectedSystems: ['Development Server', 'Source Code Repository'],
                affectedUsers: 0,
                businessImpact: 'High',
                timeline: [
                    { time: '14:22', event: 'Automated alert for unusual login activity' },
                    { time: '14:45', event: 'SOC analyst confirms unauthorized access' },
                    { time: '15:00', event: 'Server isolated from network' },
                    { time: '15:30', event: 'Forensic imaging initiated' }
                ],
                containmentActions: [
                    'Server network isolation',
                    'Account credentials reset',
                    'Access logs preserved'
                ],
                indicators: ['attacker-ip: 203.0.113.45', 'compromised-account: dev_user_123'],
                cost: 25000
            }]
        ]);
    }

    setupComplianceMonitoring() {
        this.compliance = new Map([
            ['iso27001', {
                framework: 'ISO 27001',
                overallScore: 89.2,
                lastAssessment: new Date('2025-07-15'),
                nextAssessment: new Date('2025-10-15'),
                domains: {
                    'Information Security Policies': { score: 95, status: 'Compliant' },
                    'Organization of Information Security': { score: 88, status: 'Compliant' },
                    'Human Resource Security': { score: 82, status: 'Minor Gaps' },
                    'Asset Management': { score: 91, status: 'Compliant' },
                    'Access Control': { score: 87, status: 'Compliant' },
                    'Cryptography': { score: 94, status: 'Compliant' },
                    'Physical and Environmental Security': { score: 89, status: 'Compliant' },
                    'Operations Security': { score: 85, status: 'Minor Gaps' },
                    'Communications Security': { score: 92, status: 'Compliant' },
                    'System Acquisition': { score: 88, status: 'Compliant' },
                    'Supplier Relationships': { score: 78, status: 'Major Gaps' },
                    'Incident Management': { score: 96, status: 'Compliant' },
                    'Business Continuity': { score: 84, status: 'Minor Gaps' },
                    'Compliance': { score: 93, status: 'Compliant' }
                },
                findings: 12,
                criticalFindings: 1,
                actionItems: 8
            }],
            ['sox', {
                framework: 'SOX (Sarbanes-Oxley)',
                overallScore: 92.1,
                lastAssessment: new Date('2025-06-30'),
                nextAssessment: new Date('2025-12-31'),
                domains: {
                    'Internal Controls': { score: 94, status: 'Compliant' },
                    'Financial Reporting': { score: 91, status: 'Compliant' },
                    'IT General Controls': { score: 89, status: 'Compliant' },
                    'Application Controls': { score: 93, status: 'Compliant' },
                    'Change Management': { score: 90, status: 'Compliant' }
                },
                findings: 6,
                criticalFindings: 0,
                actionItems: 4
            }],
            ['gdpr', {
                framework: 'GDPR (General Data Protection Regulation)',
                overallScore: 85.7,
                lastAssessment: new Date('2025-05-25'),
                nextAssessment: new Date('2025-11-25'),
                domains: {
                    'Data Protection Principles': { score: 88, status: 'Compliant' },
                    'Individual Rights': { score: 82, status: 'Minor Gaps' },
                    'Data Protection Officer': { score: 95, status: 'Compliant' },
                    'Data Protection Impact Assessment': { score: 79, status: 'Major Gaps' },
                    'Data Breach Notification': { score: 91, status: 'Compliant' },
                    'International Transfers': { score: 86, status: 'Compliant' }
                },
                findings: 15,
                criticalFindings: 2,
                actionItems: 11
            }]
        ]);
    }

    setupRiskAssessment() {
        this.riskAssessments = new Map([
            ['cyber_risk_2025', {
                id: 'cyber_risk_2025',
                name: 'Annual Cybersecurity Risk Assessment 2025',
                assessmentDate: new Date('2025-07-01'),
                methodology: 'NIST Cybersecurity Framework',
                overallRiskScore: 3.2, // Scale of 1-5
                riskCategories: {
                    'Data Breach': { probability: 3, impact: 4, riskScore: 3.5, mitigation: 'Enhanced monitoring and encryption' },
                    'Ransomware': { probability: 4, impact: 5, riskScore: 4.5, mitigation: 'Improved backup strategy and training' },
                    'Insider Threat': { probability: 2, impact: 4, riskScore: 2.8, mitigation: 'Access controls and monitoring' },
                    'Supply Chain Attack': { probability: 3, impact: 4, riskScore: 3.5, mitigation: 'Vendor security assessments' },
                    'Cloud Misconfiguration': { probability: 3, impact: 3, riskScore: 3.0, mitigation: 'Automated compliance checking' },
                    'IoT/OT Compromise': { probability: 2, impact: 3, riskScore: 2.4, mitigation: 'Network segmentation' }
                },
                topRisks: [
                    'Ransomware attack on critical systems',
                    'Data breach involving customer PII',
                    'Supply chain compromise affecting operations',
                    'Insider threat leading to data exfiltration',
                    'Cloud misconfiguration exposing sensitive data'
                ],
                mitigationPlan: {
                    immediate: ['Patch critical vulnerabilities', 'Update incident response procedures'],
                    shortTerm: ['Enhanced security training', 'Third-party security assessments'],
                    longTerm: ['Zero trust architecture implementation', 'Advanced threat detection deployment']
                }
            }]
        ]);
    }

    setupAnalyticsEngine() {
        this.analyticsEngine = {
            correlationRules: [
                {
                    name: 'Coordinated Attack Pattern',
                    description: 'Multiple failed logins followed by privilege escalation',
                    confidence: 0.85,
                    severity: 'High',
                    triggers: ['failed_logins > 10', 'privilege_escalation = true'],
                    actions: ['alert_soc', 'isolate_account']
                },
                {
                    name: 'Data Exfiltration Pattern',
                    description: 'Large data transfers outside business hours',
                    confidence: 0.72,
                    severity: 'Medium',
                    triggers: ['data_transfer > 1GB', 'time = after_hours'],
                    actions: ['alert_analyst', 'monitor_network']
                }
            ],
            mlModels: {
                anomalyDetection: { accuracy: 0.87, lastTrained: new Date('2025-08-01') },
                threatClassification: { accuracy: 0.91, lastTrained: new Date('2025-07-25') },
                riskPrediction: { accuracy: 0.83, lastTrained: new Date('2025-07-30') }
            },
            dataProcessing: {
                logsPerDay: 2500000,
                eventsProcessed: 150000,
                alertsGenerated: 1250,
                falsePositiveRate: 0.12
            }
        };
    }

    setupRealTimeData() {
        this.realTimeData = {
            networkTraffic: {
                inbound: 1247, // Mbps
                outbound: 892,
                suspicious: 23,
                blocked: 156
            },
            endpoints: {
                total: 2547,
                online: 2134,
                protected: 2098,
                quarantined: 12,
                offline: 413
            },
            securityEvents: {
                last24Hours: 1847,
                criticalAlerts: 8,
                resolved: 1652,
                investigating: 187,
                falsePositives: 195
            },
            threatFeeds: {
                activeFeedsCount: 25,
                newIndicators: 1247,
                blockedThreats: 892,
                lastUpdate: new Date()
            }
        };
    }

    setupPredictiveModels() {
        this.predictiveModels = {
            attackProbability: {
                next7Days: 0.23,
                next30Days: 0.67,
                confidence: 0.78,
                factors: ['Increased APT activity', 'Industry targeting', 'Vulnerability exposure']
            },
            breachLikelihood: {
                currentQuarter: 0.15,
                nextQuarter: 0.31,
                confidence: 0.82,
                factors: ['Phishing success rates', 'Unpatched vulnerabilities', 'Third-party risks']
            },
            resourceNeeds: {
                staffingGap: 2.3, // FTE
                budgetShortfall: 145000, // USD
                trainingHours: 240,
                confidence: 0.75
            }
        };
    }

    setupBenchmarking() {
        this.benchmarking = {
            industryComparison: {
                industry: 'Financial Services',
                metrics: {
                    'MTTD': { ourValue: 4.2, industryAverage: 6.8, percentile: 75 },
                    'MTTR': { ourValue: 2.8, industryAverage: 4.1, percentile: 72 },
                    'Security Budget %': { ourValue: 12.5, industryAverage: 10.2, percentile: 68 },
                    'Phishing Success Rate': { ourValue: 8.5, industryAverage: 14.2, percentile: 78 },
                    'Training Completion': { ourValue: 94.2, industryAverage: 87.1, percentile: 71 }
                }
            },
            peerComparison: {
                similarSizeCompanies: 45,
                betterThanPeers: 0.73,
                topPerformer: false,
                improvementAreas: ['Vulnerability Management', 'Third-party Risk']
            }
        };
    }

    setupReportingSystem() {
        this.reportingSystem = {
            scheduledReports: [
                { name: 'Executive Security Dashboard', frequency: 'Weekly', recipients: ['CISO', 'CTO', 'CEO'] },
                { name: 'SOC Operations Report', frequency: 'Daily', recipients: ['SOC Manager', 'Security Team'] },
                { name: 'Compliance Status Report', frequency: 'Monthly', recipients: ['Compliance Team', 'Legal'] },
                { name: 'Risk Assessment Update', frequency: 'Quarterly', recipients: ['Risk Committee', 'Board'] }
            ],
            customReports: 12,
            reportTemplates: 8,
            automatedDelivery: true
        };
    }

    setupAlerting() {
        this.alerting = {
            escalationMatrix: {
                'Critical': { immediate: ['CISO', 'SOC Manager'], within30min: ['CTO', 'CEO'] },
                'High': { immediate: ['SOC Manager'], within1hour: ['CISO'] },
                'Medium': { immediate: ['SOC Analyst'], within4hours: ['SOC Manager'] },
                'Low': { daily: ['SOC Team'] }
            },
            notificationChannels: ['Email', 'SMS', 'Slack', 'ITSM Ticket'],
            alertsLast24Hours: 1847,
            escalatedAlerts: 23,
            acknowledgedAlerts: 1652
        };
    }

    calculateSecurityScore() {
        const weights = {
            incidents: 0.25,
            vulnerabilities: 0.20,
            compliance: 0.20,
            detection: 0.15,
            response: 0.10,
            training: 0.10
        };

        const scores = {
            incidents: Math.max(0, 100 - (this.metrics.get('security_incidents').currentValue * 2)),
            vulnerabilities: Math.max(0, 100 - (this.vulnerabilities.get('critical_vulns').count * 5)),
            compliance: this.metrics.get('compliance_score').currentValue,
            detection: Math.max(0, 100 - (this.metrics.get('mean_time_to_detection').currentValue * 10)),
            response: Math.max(0, 100 - (this.metrics.get('mean_time_to_response').currentValue * 15)),
            training: this.metrics.get('security_training_completion').currentValue
        };

        this.securityScore = Object.keys(weights).reduce((total, key) => {
            return total + (scores[key] * weights[key]);
        }, 0);

        return Math.round(this.securityScore);
    }

    generateSecurityReport(timeframe = 'monthly') {
        const kpiMetrics = Array.from(this.metrics.values()).filter(metric => metric.kpi);
        const criticalIncidents = Array.from(this.incidents.values()).filter(inc => inc.severity === 'Critical');
        const topThreats = Array.from(this.threats.values()).sort((a, b) => b.count - a.count);

        return {
            executiveSummary: {
                securityScore: this.securityScore,
                scoreChange: '+5.2%',
                keyAchievements: [
                    'Reduced MTTD by 31% through improved detection capabilities',
                    'Achieved 94.2% security training completion rate',
                    'Successfully contained 2 critical incidents with no data loss'
                ],
                keyRisks: [
                    'Elevated ransomware threat landscape',
                    '12 critical vulnerabilities requiring immediate attention',
                    'Supply chain security assessment gaps'
                ]
            },
            kpiDashboard: kpiMetrics.map(metric => ({
                name: metric.name,
                current: metric.currentValue,
                target: metric.target,
                trend: metric.trend,
                status: this.getMetricStatus(metric)
            })),
            threatLandscape: {
                totalThreats: topThreats.length,
                criticalThreats: topThreats.filter(t => t.severity === 'critical').length,
                newIndicators: this.realTimeData.threatFeeds.newIndicators,
                topThreats: topThreats.slice(0, 3).map(threat => ({
                    name: threat.name,
                    severity: threat.severity,
                    count: threat.count,
                    confidence: threat.confidence
                }))
            },
            incidentSummary: {
                totalIncidents: this.incidents.size,
                criticalIncidents: criticalIncidents.length,
                averageResponseTime: this.metrics.get('mean_time_to_response').currentValue,
                containedIncidents: Array.from(this.incidents.values()).filter(inc => inc.status === 'Contained').length
            },
            complianceStatus: Array.from(this.compliance.values()).map(comp => ({
                framework: comp.framework,
                score: comp.overallScore,
                status: comp.overallScore >= 90 ? 'Compliant' : comp.overallScore >= 80 ? 'Minor Gaps' : 'Major Gaps',
                criticalFindings: comp.criticalFindings
            })),
            recommendations: this.generateRecommendations()
        };
    }

    getMetricStatus(metric) {
        if (metric.trend === 'improving' && metric.currentValue >= metric.target) return 'Excellent';
        if (metric.trend === 'improving') return 'Good';
        if (metric.trend === 'stable' && metric.currentValue >= metric.target) return 'Good';
        if (metric.trend === 'stable') return 'Acceptable';
        return 'Needs Attention';
    }

    generateRecommendations() {
        return [
            {
                category: 'Immediate Actions',
                recommendations: [
                    'Patch 12 critical vulnerabilities within 72 hours',
                    'Investigate and resolve 2 ongoing critical incidents',
                    'Review and update incident response procedures'
                ]
            },
            {
                category: 'Short-term Improvements',
                recommendations: [
                    'Implement additional phishing awareness training',
                    'Enhance third-party risk assessment program',
                    'Deploy advanced threat detection capabilities'
                ]
            },
            {
                category: 'Strategic Initiatives',
                recommendations: [
                    'Develop zero trust architecture roadmap',
                    'Establish security metrics automation',
                    'Create incident response simulation program'
                ]
            }
        ];
    }

    renderAnalyticsDashboard() {
        return `
            <div class="security-analytics-dashboard">
                <div class="dashboard-header">
                    <h1>🔍 Advanced Security Analytics Dashboard</h1>
                    <p>Comprehensive security metrics, threat intelligence, and risk analytics</p>
                    <div class="security-score">
                        <div class="score-circle">
                            <span class="score-value">${Math.round(this.securityScore)}</span>
                            <span class="score-label">Security Score</span>
                        </div>
                    </div>
                </div>

                <div class="kpi-section">
                    <h2>📊 Key Performance Indicators</h2>
                    <div class="kpi-grid">
                        ${Array.from(this.metrics.values()).filter(m => m.kpi).map(metric => 
                            this.renderKPICard(metric)
                        ).join('')}
                    </div>
                </div>

                <div class="real-time-section">
                    <h2>⚡ Real-Time Security Status</h2>
                    <div class="real-time-grid">
                        ${this.renderRealTimeCards()}
                    </div>
                </div>

                <div class="threat-intelligence">
                    <h2>🎯 Threat Intelligence</h2>
                    <div class="threat-grid">
                        ${Array.from(this.threats.values()).map(threat => 
                            this.renderThreatCard(threat)
                        ).join('')}
                    </div>
                </div>

                <div class="vulnerability-overview">
                    <h2>🔓 Vulnerability Management</h2>
                    <div class="vuln-summary">
                        ${this.renderVulnerabilityDashboard()}
                    </div>
                </div>

                <div class="compliance-section">
                    <h2>📋 Compliance Status</h2>
                    <div class="compliance-grid">
                        ${Array.from(this.compliance.values()).map(comp => 
                            this.renderComplianceCard(comp)
                        ).join('')}
                    </div>
                </div>

                <div class="incidents-section">
                    <h2>🚨 Recent Security Incidents</h2>
                    <div class="incidents-list">
                        ${Array.from(this.incidents.values()).map(incident => 
                            this.renderIncidentCard(incident)
                        ).join('')}
                    </div>
                </div>

                <div class="analytics-section">
                    <h2>🤖 Security Analytics & Predictions</h2>
                    <div class="analytics-grid">
                        ${this.renderAnalyticsCards()}
                    </div>
                </div>
            </div>
        `;
    }

    renderKPICard(metric) {
        const statusClass = this.getMetricStatus(metric).toLowerCase().replace(' ', '-');
        const trendIcon = metric.trend === 'improving' ? '📈' : metric.trend === 'declining' ? '📉' : '➡️';
        const changeColor = metric.changePercent > 0 ? (metric.id.includes('training') ? 'positive' : 'negative') : 'positive';
        
        return `
            <div class="kpi-card ${statusClass}">
                <div class="kpi-header">
                    <h3>${metric.name}</h3>
                    <span class="trend-indicator">${trendIcon}</span>
                </div>
                <div class="kpi-value">
                    <span class="current-value">${metric.currentValue}</span>
                    <span class="unit">${metric.unit}</span>
                </div>
                <div class="kpi-change ${changeColor}">
                    ${metric.changePercent > 0 ? '+' : ''}${metric.changePercent}% vs last ${metric.timeframe}
                </div>
                <div class="kpi-target">
                    Target: ${metric.target} ${metric.unit}
                </div>
                <div class="kpi-category">${metric.category}</div>
            </div>
        `;
    }

    renderRealTimeCards() {
        return `
            <div class="real-time-card">
                <h3>🌐 Network Traffic</h3>
                <div class="metrics">
                    <div class="metric">
                        <span class="label">Inbound:</span>
                        <span class="value">${this.realTimeData.networkTraffic.inbound} Mbps</span>
                    </div>
                    <div class="metric">
                        <span class="label">Outbound:</span>
                        <span class="value">${this.realTimeData.networkTraffic.outbound} Mbps</span>
                    </div>
                    <div class="metric warning">
                        <span class="label">Suspicious:</span>
                        <span class="value">${this.realTimeData.networkTraffic.suspicious}</span>
                    </div>
                    <div class="metric success">
                        <span class="label">Blocked:</span>
                        <span class="value">${this.realTimeData.networkTraffic.blocked}</span>
                    </div>
                </div>
            </div>
            
            <div class="real-time-card">
                <h3>💻 Endpoint Status</h3>
                <div class="metrics">
                    <div class="metric">
                        <span class="label">Total:</span>
                        <span class="value">${this.realTimeData.endpoints.total}</span>
                    </div>
                    <div class="metric success">
                        <span class="label">Protected:</span>
                        <span class="value">${this.realTimeData.endpoints.protected}</span>
                    </div>
                    <div class="metric warning">
                        <span class="label">Quarantined:</span>
                        <span class="value">${this.realTimeData.endpoints.quarantined}</span>
                    </div>
                    <div class="metric">
                        <span class="label">Offline:</span>
                        <span class="value">${this.realTimeData.endpoints.offline}</span>
                    </div>
                </div>
            </div>
            
            <div class="real-time-card">
                <h3>🚨 Security Events</h3>
                <div class="metrics">
                    <div class="metric">
                        <span class="label">Last 24h:</span>
                        <span class="value">${this.realTimeData.securityEvents.last24Hours}</span>
                    </div>
                    <div class="metric critical">
                        <span class="label">Critical:</span>
                        <span class="value">${this.realTimeData.securityEvents.criticalAlerts}</span>
                    </div>
                    <div class="metric success">
                        <span class="label">Resolved:</span>
                        <span class="value">${this.realTimeData.securityEvents.resolved}</span>
                    </div>
                    <div class="metric">
                        <span class="label">Investigating:</span>
                        <span class="value">${this.realTimeData.securityEvents.investigating}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderThreatCard(threat) {
        const severityClass = threat.severity.toLowerCase();
        
        return `
            <div class="threat-card ${severityClass}">
                <div class="threat-header">
                    <h3>${threat.name}</h3>
                    <span class="severity-badge ${severityClass}">${threat.severity}</span>
                </div>
                <div class="threat-content">
                    <div class="threat-stat">
                        <span class="label">Active Campaigns:</span>
                        <span class="value">${threat.count}</span>
                    </div>
                    <div class="threat-stat">
                        <span class="label">Indicators:</span>
                        <span class="value">${threat.indicators}</span>
                    </div>
                    <div class="threat-stat">
                        <span class="label">Confidence:</span>
                        <span class="value">${threat.confidence}</span>
                    </div>
                    
                    <div class="threat-details">
                        <h4>🎯 Primary Techniques:</h4>
                        <div class="techniques">
                            ${threat.techniques.slice(0, 3).map(technique => 
                                `<span class="technique-tag">${technique}</span>`
                            ).join('')}
                        </div>
                        
                        <h4>🌍 Affected Regions:</h4>
                        <div class="regions">
                            ${threat.regions.slice(0, 2).map(region => 
                                `<span class="region-tag">${region}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderVulnerabilityDashboard() {
        const critical = this.vulnerabilities.get('critical_vulns');
        const high = this.vulnerabilities.get('high_vulns');
        const medium = this.vulnerabilities.get('medium_vulns');
        
        return `
            <div class="vuln-summary-cards">
                <div class="vuln-card critical">
                    <h3>🔴 Critical</h3>
                    <div class="vuln-count">${critical.count}</div>
                    <div class="vuln-age">Avg Age: ${critical.averageAge} days</div>
                    <div class="vuln-patch">Patches Available: ${critical.patchStatus['Patches Available']}</div>
                </div>
                
                <div class="vuln-card high">
                    <h3>🟠 High</h3>
                    <div class="vuln-count">${high.count}</div>
                    <div class="vuln-age">Avg Age: ${high.averageAge} days</div>
                    <div class="vuln-patch">Patches Available: ${high.patchStatus['Patches Available']}</div>
                </div>
                
                <div class="vuln-card medium">
                    <h3>🟡 Medium</h3>
                    <div class="vuln-count">${medium.count}</div>
                    <div class="vuln-age">Avg Age: ${medium.averageAge} days</div>
                    <div class="vuln-patch">Patches Available: ${medium.patchStatus['Patches Available']}</div>
                </div>
            </div>
        `;
    }

    renderComplianceCard(compliance) {
        const statusClass = compliance.overallScore >= 90 ? 'compliant' : compliance.overallScore >= 80 ? 'minor-gaps' : 'major-gaps';
        
        return `
            <div class="compliance-card ${statusClass}">
                <div class="compliance-header">
                    <h3>${compliance.framework}</h3>
                    <span class="compliance-score">${compliance.overallScore}%</span>
                </div>
                <div class="compliance-content">
                    <div class="compliance-stats">
                        <div class="stat">
                            <span class="label">Total Findings:</span>
                            <span class="value">${compliance.findings}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Critical:</span>
                            <span class="value critical">${compliance.criticalFindings}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Action Items:</span>
                            <span class="value">${compliance.actionItems}</span>
                        </div>
                    </div>
                    <div class="next-assessment">
                        Next Assessment: ${compliance.nextAssessment.toLocaleDateString()}
                    </div>
                </div>
            </div>
        `;
    }

    renderIncidentCard(incident) {
        const severityClass = incident.severity.toLowerCase();
        const statusClass = incident.status.toLowerCase().replace(' ', '-');
        
        return `
            <div class="incident-card ${severityClass}">
                <div class="incident-header">
                    <h3>${incident.title}</h3>
                    <div class="incident-meta">
                        <span class="severity-badge ${severityClass}">${incident.severity}</span>
                        <span class="status-badge ${statusClass}">${incident.status}</span>
                    </div>
                </div>
                <div class="incident-content">
                    <div class="incident-details">
                        <div class="detail">
                            <span class="label">Category:</span>
                            <span class="value">${incident.category}</span>
                        </div>
                        <div class="detail">
                            <span class="label">Detected:</span>
                            <span class="value">${incident.detectedDate.toLocaleString()}</span>
                        </div>
                        <div class="detail">
                            <span class="label">Affected Users:</span>
                            <span class="value">${incident.affectedUsers}</span>
                        </div>
                        <div class="detail">
                            <span class="label">Impact:</span>
                            <span class="value">${incident.businessImpact}</span>
                        </div>
                    </div>
                    <div class="incident-timeline">
                        <h4>Latest Updates:</h4>
                        ${incident.timeline.slice(-2).map(event => 
                            `<div class="timeline-event">
                                <span class="time">${event.time}</span>
                                <span class="event">${event.event}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderAnalyticsCards() {
        return `
            <div class="analytics-card">
                <h3>🤖 ML Models Performance</h3>
                <div class="ml-models">
                    <div class="model">
                        <span class="model-name">Anomaly Detection:</span>
                        <span class="accuracy">${Math.round(this.analyticsEngine.mlModels.anomalyDetection.accuracy * 100)}%</span>
                    </div>
                    <div class="model">
                        <span class="model-name">Threat Classification:</span>
                        <span class="accuracy">${Math.round(this.analyticsEngine.mlModels.threatClassification.accuracy * 100)}%</span>
                    </div>
                    <div class="model">
                        <span class="model-name">Risk Prediction:</span>
                        <span class="accuracy">${Math.round(this.analyticsEngine.mlModels.riskPrediction.accuracy * 100)}%</span>
                    </div>
                </div>
            </div>
            
            <div class="analytics-card">
                <h3>🔮 Predictive Analytics</h3>
                <div class="predictions">
                    <div class="prediction">
                        <span class="prediction-label">Attack Probability (7 days):</span>
                        <span class="prediction-value">${Math.round(this.predictiveModels.attackProbability.next7Days * 100)}%</span>
                    </div>
                    <div class="prediction">
                        <span class="prediction-label">Breach Likelihood (Q3):</span>
                        <span class="prediction-value">${Math.round(this.predictiveModels.breachLikelihood.currentQuarter * 100)}%</span>
                    </div>
                    <div class="prediction">
                        <span class="prediction-label">Staffing Gap:</span>
                        <span class="prediction-value">${this.predictiveModels.resourceNeeds.staffingGap} FTE</span>
                    </div>
                </div>
            </div>
            
            <div class="analytics-card">
                <h3>📊 Industry Benchmarking</h3>
                <div class="benchmarks">
                    <div class="benchmark">
                        <span class="benchmark-label">MTTD Percentile:</span>
                        <span class="benchmark-value">${this.benchmarking.industryComparison.metrics.MTTD.percentile}th</span>
                    </div>
                    <div class="benchmark">
                        <span class="benchmark-label">Better than Peers:</span>
                        <span class="benchmark-value">${Math.round(this.benchmarking.peerComparison.betterThanPeers * 100)}%</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// CSS (simplified for length optimization)
const analyticsCSS = `
    .security-analytics-dashboard { max-width: 1400px; margin: 0 auto; padding: 20px; }
    .dashboard-header { text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 15px; margin-bottom: 30px; position: relative; }
    .security-score { position: absolute; top: 20px; right: 30px; }
    .score-circle { background: rgba(255,255,255,0.2); border-radius: 50%; width: 100px; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid rgba(255,255,255,0.3); }
    .score-value { font-size: 2em; font-weight: bold; }
    .score-label { font-size: 0.8em; opacity: 0.9; }
    .kpi-grid, .real-time-grid, .threat-grid, .compliance-grid { display: grid; gap: 20px; margin-bottom: 30px; }
    .kpi-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    .real-time-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
    .threat-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
    .compliance-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    .kpi-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #28a745; }
    .kpi-card.needs-attention { border-left-color: #dc3545; }
    .kpi-card.acceptable { border-left-color: #ffc107; }
    .kpi-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .kpi-header h3 { margin: 0; color: #2c3e50; font-size: 0.95em; }
    .kpi-value { display: flex; align-items: baseline; gap: 5px; margin-bottom: 10px; }
    .current-value { font-size: 2.2em; font-weight: bold; color: #2c3e50; }
    .unit { color: #6c757d; font-size: 0.9em; }
    .kpi-change { font-size: 0.85em; margin-bottom: 8px; }
    .kpi-change.positive { color: #28a745; }
    .kpi-change.negative { color: #dc3545; }
    .kpi-target, .kpi-category { font-size: 0.8em; color: #6c757d; }
    .real-time-card, .analytics-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    .real-time-card h3, .analytics-card h3 { margin: 0 0 15px 0; color: #2c3e50; font-size: 1em; }
    .metrics, .ml-models, .predictions, .benchmarks { display: flex; flex-direction: column; gap: 8px; }
    .metric, .model, .prediction, .benchmark { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f1f3f4; }
    .metric:last-child, .model:last-child, .prediction:last-child, .benchmark:last-child { border-bottom: none; }
    .metric .label, .model-name, .prediction-label, .benchmark-label { color: #6c757d; font-size: 0.85em; }
    .metric .value, .accuracy, .prediction-value, .benchmark-value { font-weight: 500; color: #2c3e50; }
    .metric.success .value { color: #28a745; }
    .metric.warning .value { color: #ffc107; }
    .metric.critical .value { color: #dc3545; }
    .threat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .threat-card.critical { border-left-color: #dc3545; }
    .threat-card.high { border-left-color: #fd7e14; }
    .threat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .threat-header h3 { margin: 0; color: #2c3e50; font-size: 0.95em; }
    .severity-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 500; }
    .severity-badge.critical { background: #f8d7da; color: #721c24; }
    .severity-badge.high { background: #fff3cd; color: #856404; }
    .threat-content { }
    .threat-stat { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .threat-stat .label { color: #6c757d; font-size: 0.85em; }
    .threat-stat .value { font-weight: 500; color: #2c3e50; }
    .threat-details h4 { margin: 15px 0 8px 0; color: #2c3e50; font-size: 0.85em; }
    .techniques, .regions { display: flex; flex-wrap: wrap; gap: 5px; }
    .technique-tag, .region-tag { background: #e9ecef; color: #495057; padding: 3px 6px; border-radius: 6px; font-size: 0.75em; }
    .vuln-summary-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .vuln-card { background: white; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    .vuln-card.critical { border-left: 5px solid #dc3545; }
    .vuln-card.high { border-left: 5px solid #fd7e14; }
    .vuln-card.medium { border-left: 5px solid #ffc107; }
    .vuln-card h3 { margin: 0 0 15px 0; font-size: 1em; }
    .vuln-count { font-size: 2.5em; font-weight: bold; color: #2c3e50; margin-bottom: 10px; }
    .vuln-age, .vuln-patch { font-size: 0.85em; color: #6c757d; margin-bottom: 5px; }
    .compliance-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .compliance-card.compliant { border-left-color: #28a745; }
    .compliance-card.minor-gaps { border-left-color: #ffc107; }
    .compliance-card.major-gaps { border-left-color: #dc3545; }
    .compliance-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .compliance-header h3 { margin: 0; color: #2c3e50; font-size: 0.95em; }
    .compliance-score { font-size: 1.5em; font-weight: bold; color: #2c3e50; }
    .compliance-stats { margin-bottom: 15px; }
    .compliance-stats .stat { display: flex; justify-content: space-between; margin-bottom: 5px; }
    .compliance-stats .label { color: #6c757d; font-size: 0.85em; }
    .compliance-stats .value { font-weight: 500; color: #2c3e50; }
    .compliance-stats .value.critical { color: #dc3545; }
    .next-assessment { font-size: 0.8em; color: #6c757d; }
    .incidents-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; }
    .incident-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .incident-card.critical { border-left-color: #dc3545; }
    .incident-card.high { border-left-color: #fd7e14; }
    .incident-header { margin-bottom: 15px; }
    .incident-header h3 { margin: 0 0 10px 0; color: #2c3e50; font-size: 0.95em; }
    .incident-meta { display: flex; gap: 10px; }
    .status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 500; }
    .status-badge.contained { background: #d1ecf1; color: #0c5460; }
    .status-badge.under-investigation { background: #fff3cd; color: #856404; }
    .incident-details { margin-bottom: 15px; }
    .incident-details .detail { display: flex; justify-content: space-between; margin-bottom: 5px; }
    .incident-details .label { color: #6c757d; font-size: 0.85em; }
    .incident-details .value { font-weight: 500; color: #2c3e50; }
    .incident-timeline h4 { margin: 0 0 8px 0; color: #2c3e50; font-size: 0.85em; }
    .timeline-event { display: flex; gap: 10px; margin-bottom: 5px; }
    .timeline-event .time { color: #6c757d; font-size: 0.8em; min-width: 60px; }
    .timeline-event .event { color: #495057; font-size: 0.8em; }
    .analytics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
`;

const analyticsStyleSheet = document.createElement('style');
analyticsStyleSheet.textContent = analyticsCSS;
document.head.appendChild(analyticsStyleSheet);

window.securityAnalytics = new AdvancedSecurityAnalyticsDashboard();
