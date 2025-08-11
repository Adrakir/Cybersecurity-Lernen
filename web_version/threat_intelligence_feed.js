// Threat Intelligence Feed - Real-time Cybersecurity Threat Intelligence Platform
class ThreatIntelligenceFeed {
    constructor() {
        this.threats = new Map();
        this.indicators = new Map();
        this.campaigns = new Map();
        this.sources = {};
        this.subscriptions = new Map();
        this.analysisResults = new Map();
        this.initializeThreatIntelligence();
    }

    initializeThreatIntelligence() {
        this.sources = {
            mitre_attack: {
                name: "MITRE ATT&CK",
                type: "framework",
                reliability: 0.95,
                updateFrequency: "weekly",
                categories: ["techniques", "tactics", "procedures"]
            },
            cti_feeds: {
                name: "Commercial CTI Feeds",
                type: "commercial",
                reliability: 0.90,
                updateFrequency: "daily",
                categories: ["iocs", "campaigns", "actors"]
            },
            osint: {
                name: "Open Source Intelligence",
                type: "open_source",
                reliability: 0.75,
                updateFrequency: "hourly",
                categories: ["vulnerabilities", "exploits", "malware"]
            },
            government: {
                name: "Government Alerts",
                type: "official",
                reliability: 0.98,
                updateFrequency: "as_needed",
                categories: ["alerts", "advisories", "bulletins"]
            }
        };

        this.loadCurrentThreats();
        this.loadIndicators();
        this.loadCampaigns();
    }

    loadCurrentThreats() {
        const currentThreats = [
            {
                id: "TH_2025_001",
                title: "New Ransomware Variant - CryptoStorm 3.0",
                severity: "critical",
                confidence: 0.92,
                firstSeen: new Date("2025-08-10"),
                lastUpdated: new Date("2025-08-11"),
                ttps: ["T1486", "T1083", "T1021.001"],
                targets: ["healthcare", "financial", "manufacturing"],
                description: "Advanced ransomware with improved evasion techniques and faster encryption",
                indicators: ["crypto_storm_hash_1", "crypto_storm_c2_1", "crypto_storm_domain_1"],
                mitigations: [
                    "Implement endpoint detection and response",
                    "Regular offline backups",
                    "Network segmentation",
                    "Employee training on phishing"
                ],
                source: "cti_feeds",
                tags: ["ransomware", "encryption", "double_extortion"]
            },
            {
                id: "TH_2025_002", 
                title: "APT Group 'ShadowLink' Targets Cloud Infrastructure",
                severity: "high",
                confidence: 0.88,
                firstSeen: new Date("2025-08-08"),
                lastUpdated: new Date("2025-08-11"),
                ttps: ["T1078", "T1552.001", "T1567.002"],
                targets: ["technology", "government", "defense"],
                description: "Sophisticated APT group exploiting cloud misconfigurations and stolen credentials",
                indicators: ["shadowlink_c2_aws", "shadowlink_tool_1", "shadowlink_cert_1"],
                mitigations: [
                    "Enable cloud security monitoring",
                    "Implement zero-trust architecture",
                    "Regular credential rotation",
                    "Multi-factor authentication"
                ],
                source: "government",
                tags: ["apt", "cloud", "credential_theft"]
            },
            {
                id: "TH_2025_003",
                title: "Supply Chain Attack via Compromised NPM Packages",
                severity: "high", 
                confidence: 0.85,
                firstSeen: new Date("2025-08-09"),
                lastUpdated: new Date("2025-08-11"),
                ttps: ["T1195.002", "T1059.007"],
                targets: ["technology", "software_development"],
                description: "Malicious code injected into popular NPM packages affecting thousands of projects",
                indicators: ["malicious_npm_1", "malicious_npm_2", "supply_chain_domain"],
                mitigations: [
                    "Dependency scanning tools",
                    "Package signature verification", 
                    "Software bill of materials (SBOM)",
                    "Isolated development environments"
                ],
                source: "osint",
                tags: ["supply_chain", "npm", "software_development"]
            }
        ];

        currentThreats.forEach(threat => {
            this.threats.set(threat.id, threat);
        });
    }

    loadIndicators() {
        const indicators = [
            {
                id: "crypto_storm_hash_1",
                type: "file_hash",
                value: "a1b2c3d4e5f6789012345678901234567890abcd",
                algorithm: "SHA1",
                threatId: "TH_2025_001",
                confidence: 0.95,
                firstSeen: new Date("2025-08-10"),
                context: "CryptoStorm 3.0 main executable"
            },
            {
                id: "crypto_storm_c2_1",
                type: "ip_address",
                value: "192.168.100.50",
                threatId: "TH_2025_001",
                confidence: 0.90,
                firstSeen: new Date("2025-08-10"),
                context: "Command and control server"
            },
            {
                id: "shadowlink_c2_aws",
                type: "domain",
                value: "secure-aws-login.com",
                threatId: "TH_2025_002",
                confidence: 0.88,
                firstSeen: new Date("2025-08-08"),
                context: "Fake AWS login portal"
            },
            {
                id: "malicious_npm_1",
                type: "package_name",
                value: "crypto-secure-utils",
                threatId: "TH_2025_003",
                confidence: 0.92,
                firstSeen: new Date("2025-08-09"),
                context: "Compromised NPM package"
            }
        ];

        indicators.forEach(indicator => {
            this.indicators.set(indicator.id, indicator);
        });
    }

    loadCampaigns() {
        const campaigns = [
            {
                id: "CAMP_2025_001",
                name: "Operation CloudBreach",
                description: "Coordinated attacks against cloud infrastructure by APT ShadowLink",
                firstSeen: new Date("2025-07-15"),
                lastActivity: new Date("2025-08-11"),
                status: "active",
                threatActors: ["ShadowLink"],
                associatedThreats: ["TH_2025_002"],
                targetSectors: ["technology", "government", "financial"],
                ttps: ["T1078", "T1552.001", "T1567.002", "T1190"],
                victimCount: 12,
                attribution: {
                    confidence: 0.75,
                    country: "Unknown",
                    motivation: "espionage"
                }
            }
        ];

        campaigns.forEach(campaign => {
            this.campaigns.set(campaign.id, campaign);
        });
    }

    subscribeThreatFeed(userId, filters = {}) {
        if (!this.subscriptions.has(userId)) {
            this.subscriptions.set(userId, {
                filters: {
                    severities: filters.severities || ["critical", "high"],
                    sectors: filters.sectors || [],
                    threatTypes: filters.threatTypes || [],
                    sources: filters.sources || ["all"]
                },
                notifications: {
                    realTime: filters.realTime || false,
                    daily: filters.daily || true,
                    weekly: filters.weekly || true
                },
                preferences: {
                    detailedAnalysis: filters.detailedAnalysis || false,
                    mitigation_focus: filters.mitigation_focus || true
                }
            });
        }

        return {
            subscribed: true,
            filters: this.subscriptions.get(userId).filters,
            message: "Successfully subscribed to threat intelligence feed"
        };
    }

    getFilteredThreats(userId) {
        const subscription = this.subscriptions.get(userId);
        if (!subscription) return Array.from(this.threats.values());

        const { severities, sectors, threatTypes, sources } = subscription.filters;
        
        return Array.from(this.threats.values()).filter(threat => {
            // Severity filter
            if (severities.length > 0 && !severities.includes(threat.severity)) return false;
            
            // Sector filter  
            if (sectors.length > 0 && !threat.targets.some(target => sectors.includes(target))) return false;
            
            // Threat type filter
            if (threatTypes.length > 0 && !threat.tags.some(tag => threatTypes.includes(tag))) return false;
            
            // Source filter
            if (sources.length > 0 && !sources.includes("all") && !sources.includes(threat.source)) return false;
            
            return true;
        });
    }

    analyzeThreat(threatId, userContext = {}) {
        const threat = this.threats.get(threatId);
        if (!threat) return null;

        const analysis = {
            threatId,
            timestamp: new Date(),
            riskAssessment: this.calculateRiskScore(threat, userContext),
            relevanceScore: this.calculateRelevance(threat, userContext),
            indicators: this.getRelatedIndicators(threatId),
            mitigationPriority: this.prioritizeMitigations(threat, userContext),
            actionableIntelligence: this.generateActionableIntel(threat, userContext),
            relatedCampaigns: this.findRelatedCampaigns(threatId)
        };

        this.analysisResults.set(`${threatId}_${Date.now()}`, analysis);
        return analysis;
    }

    calculateRiskScore(threat, userContext) {
        let baseScore = { "critical": 90, "high": 70, "medium": 50, "low": 30 }[threat.severity] || 50;
        
        // Adjust based on user's industry
        if (userContext.industry && threat.targets.includes(userContext.industry)) {
            baseScore += 10;
        }
        
        // Adjust based on confidence
        baseScore = baseScore * threat.confidence;
        
        // Adjust based on recency
        const daysSinceFirst = (new Date() - threat.firstSeen) / (1000 * 60 * 60 * 24);
        if (daysSinceFirst < 7) baseScore += 5; // Recent threats are more dangerous
        
        return Math.min(100, Math.round(baseScore));
    }

    calculateRelevance(threat, userContext) {
        let relevance = 50; // Base relevance
        
        // Industry relevance
        if (userContext.industry && threat.targets.includes(userContext.industry)) {
            relevance += 30;
        }
        
        // Technology stack relevance
        if (userContext.technologies) {
            const relevantTechs = threat.tags.filter(tag => 
                userContext.technologies.includes(tag)
            );
            relevance += relevantTechs.length * 10;
        }
        
        // Geographic relevance
        if (userContext.region && threat.regions && threat.regions.includes(userContext.region)) {
            relevance += 15;
        }
        
        return Math.min(100, relevance);
    }

    getRelatedIndicators(threatId) {
        return Array.from(this.indicators.values())
            .filter(indicator => indicator.threatId === threatId)
            .map(indicator => ({
                type: indicator.type,
                value: indicator.value,
                confidence: indicator.confidence,
                context: indicator.context
            }));
    }

    prioritizeMitigations(threat, userContext) {
        const mitigations = threat.mitigations.map(mitigation => ({
            description: mitigation,
            priority: this.calculateMitigationPriority(mitigation, threat, userContext),
            effort: this.estimateImplementationEffort(mitigation),
            impact: this.estimateSecurityImpact(mitigation)
        }));

        return mitigations.sort((a, b) => b.priority - a.priority);
    }

    calculateMitigationPriority(mitigation, threat, userContext) {
        let priority = 50;
        
        // High priority for critical threats
        if (threat.severity === "critical") priority += 20;
        
        // Boost priority based on user context
        if (userContext.currentSecurityLevel === "basic") {
            if (mitigation.includes("training") || mitigation.includes("awareness")) priority += 15;
        }
        
        // Quick wins get priority boost
        if (mitigation.includes("patch") || mitigation.includes("update")) priority += 10;
        
        return priority;
    }

    estimateImplementationEffort(mitigation) {
        const effortKeywords = {
            "high": ["infrastructure", "architecture", "complete overhaul"],
            "medium": ["training", "process", "configuration"],
            "low": ["patch", "update", "enable", "disable"]
        };

        for (const [effort, keywords] of Object.entries(effortKeywords)) {
            if (keywords.some(keyword => mitigation.toLowerCase().includes(keyword))) {
                return effort;
            }
        }
        
        return "medium";
    }

    estimateSecurityImpact(mitigation) {
        const impactKeywords = {
            "high": ["zero-trust", "segmentation", "endpoint detection"],
            "medium": ["monitoring", "authentication", "backup"],
            "low": ["training", "awareness", "documentation"]
        };

        for (const [impact, keywords] of Object.entries(impactKeywords)) {
            if (keywords.some(keyword => mitigation.toLowerCase().includes(keyword))) {
                return impact;
            }
        }
        
        return "medium";
    }

    generateActionableIntelligence(threat, userContext) {
        const actions = [];
        
        // Immediate actions
        actions.push({
            category: "immediate",
            timeframe: "24 hours",
            actions: [
                `Search for IOCs: ${this.getRelatedIndicators(threat.id).map(i => i.value).join(', ')}`,
                `Review logs for TTPs: ${threat.ttps.join(', ')}`,
                "Inform security team and stakeholders"
            ]
        });
        
        // Short-term actions
        actions.push({
            category: "short_term",
            timeframe: "1 week",
            actions: [
                "Implement priority mitigations",
                "Update detection rules",
                "Conduct threat hunting activities"
            ]
        });
        
        // Long-term actions
        actions.push({
            category: "long_term", 
            timeframe: "1 month+",
            actions: [
                "Review and update security architecture",
                "Enhance monitoring capabilities",
                "Conduct tabletop exercises"
            ]
        });
        
        return actions;
    }

    findRelatedCampaigns(threatId) {
        return Array.from(this.campaigns.values())
            .filter(campaign => campaign.associatedThreats.includes(threatId))
            .map(campaign => ({
                id: campaign.id,
                name: campaign.name,
                status: campaign.status,
                victimCount: campaign.victimCount,
                attribution: campaign.attribution
            }));
    }

    searchThreats(query, filters = {}) {
        const allThreats = Array.from(this.threats.values());
        const lowercaseQuery = query.toLowerCase();
        
        let results = allThreats.filter(threat => 
            threat.title.toLowerCase().includes(lowercaseQuery) ||
            threat.description.toLowerCase().includes(lowercaseQuery) ||
            threat.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
            threat.ttps.some(ttp => ttp.toLowerCase().includes(lowercaseQuery))
        );
        
        // Apply additional filters
        if (filters.severity) {
            results = results.filter(threat => threat.severity === filters.severity);
        }
        
        if (filters.dateRange) {
            const { start, end } = filters.dateRange;
            results = results.filter(threat => 
                threat.firstSeen >= start && threat.firstSeen <= end
            );
        }
        
        return results;
    }

    generateThreatReport(timeframe = "week") {
        const now = new Date();
        const days = { day: 1, week: 7, month: 30 }[timeframe] || 7;
        const startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
        
        const recentThreats = Array.from(this.threats.values())
            .filter(threat => threat.firstSeen >= startDate);
        
        const severityCounts = recentThreats.reduce((acc, threat) => {
            acc[threat.severity] = (acc[threat.severity] || 0) + 1;
            return acc;
        }, {});
        
        const topTargets = this.getTopTargets(recentThreats);
        const topTTPs = this.getTopTTPs(recentThreats);
        const emergingTrends = this.identifyEmergingTrends(recentThreats);
        
        return {
            period: `${startDate.toISOString().split('T')[0]} to ${now.toISOString().split('T')[0]}`,
            summary: {
                totalThreats: recentThreats.length,
                severityBreakdown: severityCounts,
                activeCampaigns: this.getActiveCampaigns().length,
                newIOCs: this.getNewIOCs(startDate).length
            },
            topTargets,
            topTTPs,
            emergingTrends,
            recommendations: this.generatePeriodRecommendations(recentThreats)
        };
    }

    getTopTargets(threats) {
        const targetCounts = threats.reduce((acc, threat) => {
            threat.targets.forEach(target => {
                acc[target] = (acc[target] || 0) + 1;
            });
            return acc;
        }, {});
        
        return Object.entries(targetCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([target, count]) => ({ target, count }));
    }

    getTopTTPs(threats) {
        const ttpCounts = threats.reduce((acc, threat) => {
            threat.ttps.forEach(ttp => {
                acc[ttp] = (acc[ttp] || 0) + 1;
            });
            return acc;
        }, {});
        
        return Object.entries(ttpCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([ttp, count]) => ({ ttp, count }));
    }

    identifyEmergingTrends(threats) {
        const trends = [];
        
        // Tag frequency analysis
        const tagCounts = threats.reduce((acc, threat) => {
            threat.tags.forEach(tag => {
                acc[tag] = (acc[tag] || 0) + 1;
            });
            return acc;
        }, {});
        
        Object.entries(tagCounts).forEach(([tag, count]) => {
            if (count >= 2) { // Threshold for emerging trend
                trends.push({
                    type: "technique",
                    name: tag,
                    frequency: count,
                    significance: count >= 3 ? "high" : "medium"
                });
            }
        });
        
        return trends;
    }

    getActiveCampaigns() {
        return Array.from(this.campaigns.values())
            .filter(campaign => campaign.status === "active");
    }

    getNewIOCs(sinceDate) {
        return Array.from(this.indicators.values())
            .filter(indicator => indicator.firstSeen >= sinceDate);
    }

    generatePeriodRecommendations(threats) {
        const recommendations = [];
        
        if (threats.some(t => t.severity === "critical")) {
            recommendations.push({
                priority: "high",
                action: "Immediate security review",
                description: "Critical threats detected - conduct emergency security assessment"
            });
        }
        
        const cloudThreats = threats.filter(t => t.tags.includes("cloud"));
        if (cloudThreats.length > 0) {
            recommendations.push({
                priority: "medium",
                action: "Cloud security audit",
                description: `${cloudThreats.length} cloud-related threats identified`
            });
        }
        
        return recommendations;
    }

    renderThreatFeed(userId) {
        const threats = this.getFilteredThreats(userId);
        const report = this.generateThreatReport("week");
        
        return `
            <div class="threat-intelligence-feed">
                <div class="feed-header">
                    <h1>🔍 Threat Intelligence Feed</h1>
                    <p>Real-time cybersecurity threat intelligence and analysis</p>
                </div>
                
                <div class="threat-summary">
                    <div class="summary-card">
                        <h3>📊 This Week</h3>
                        <div class="summary-stats">
                            <div class="stat">
                                <span class="stat-number">${report.summary.totalThreats}</span>
                                <span class="stat-label">New Threats</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">${report.summary.activeCampaigns}</span>
                                <span class="stat-label">Active Campaigns</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">${report.summary.newIOCs}</span>
                                <span class="stat-label">New IOCs</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="threats-container">
                    <h2>🚨 Current Threats</h2>
                    <div class="threats-list">
                        ${threats.map(threat => this.renderThreatCard(threat)).join('')}
                    </div>
                </div>
                
                <div class="intelligence-insights">
                    <h2>🧠 Intelligence Insights</h2>
                    <div class="insights-grid">
                        <div class="insight-panel">
                            <h3>🎯 Top Targets</h3>
                            <ul>
                                ${report.topTargets.map(target => 
                                    `<li>${target.target} (${target.count} threats)</li>`
                                ).join('')}
                            </ul>
                        </div>
                        
                        <div class="insight-panel">
                            <h3>⚔️ Common TTPs</h3>
                            <ul>
                                ${report.topTTPs.slice(0, 5).map(ttp => 
                                    `<li>${ttp.ttp} (${ttp.count})</li>`
                                ).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderThreatCard(threat) {
        const severityClass = `severity-${threat.severity}`;
        const daysAgo = Math.floor((new Date() - threat.firstSeen) / (1000 * 60 * 60 * 24));
        
        return `
            <div class="threat-card ${severityClass}">
                <div class="threat-header">
                    <h3>${threat.title}</h3>
                    <div class="threat-meta">
                        <span class="severity-badge">${threat.severity.toUpperCase()}</span>
                        <span class="confidence">Confidence: ${Math.round(threat.confidence * 100)}%</span>
                        <span class="age">${daysAgo} days ago</span>
                    </div>
                </div>
                
                <div class="threat-content">
                    <p class="threat-description">${threat.description}</p>
                    
                    <div class="threat-details">
                        <div class="detail-section">
                            <h4>🎯 Targets:</h4>
                            <div class="tags">
                                ${threat.targets.map(target => 
                                    `<span class="tag target-tag">${target}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="detail-section">
                            <h4>⚔️ TTPs:</h4>
                            <div class="tags">
                                ${threat.ttps.slice(0, 3).map(ttp => 
                                    `<span class="tag ttp-tag">${ttp}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="detail-section">
                            <h4>🛡️ Key Mitigations:</h4>
                            <ul class="mitigations-list">
                                ${threat.mitigations.slice(0, 2).map(mitigation => 
                                    `<li>${mitigation}</li>`
                                ).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="threat-actions">
                    <button onclick="threatIntel.analyzeThreat('${threat.id}')" class="analyze-btn">
                        Analyze Threat
                    </button>
                    <button onclick="threatIntel.viewDetails('${threat.id}')" class="details-btn">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }

    viewDetails(threatId) {
        const threat = this.threats.get(threatId);
        if (!threat) return;
        
        alert(`Threat Details:\n\n${threat.title}\n\nSeverity: ${threat.severity}\nConfidence: ${Math.round(threat.confidence * 100)}%\n\nDescription:\n${threat.description}\n\nThis would open a detailed analysis panel in a real implementation.`);
    }
}

// CSS for Threat Intelligence Feed
const threatIntelCSS = `
    .threat-intelligence-feed {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .feed-header {
        text-align: center;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .threat-summary {
        margin-bottom: 30px;
    }
    
    .summary-card {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .summary-stats {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    
    .stat {
        text-align: center;
    }
    
    .stat-number {
        display: block;
        font-size: 2em;
        font-weight: bold;
        color: #e74c3c;
    }
    
    .stat-label {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .threats-container {
        margin-bottom: 30px;
    }
    
    .threats-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .threat-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #e9ecef;
    }
    
    .threat-card.severity-critical { border-left-color: #dc3545; }
    .threat-card.severity-high { border-left-color: #fd7e14; }
    .threat-card.severity-medium { border-left-color: #ffc107; }
    .threat-card.severity-low { border-left-color: #28a745; }
    
    .threat-header {
        padding: 20px 25px 15px;
        border-bottom: 1px solid #e9ecef;
    }
    
    .threat-header h3 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 1.2em;
    }
    
    .threat-meta {
        display: flex;
        gap: 15px;
        align-items: center;
    }
    
    .severity-badge {
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: bold;
        color: white;
    }
    
    .threat-card.severity-critical .severity-badge { background: #dc3545; }
    .threat-card.severity-high .severity-badge { background: #fd7e14; }
    .threat-card.severity-medium .severity-badge { background: #ffc107; color: #000; }
    .threat-card.severity-low .severity-badge { background: #28a745; }
    
    .confidence, .age {
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .threat-content {
        padding: 20px 25px;
    }
    
    .threat-description {
        color: #495057;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    
    .threat-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
    
    .detail-section h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .tag {
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: 500;
    }
    
    .target-tag {
        background: #e3f2fd;
        color: #1976d2;
    }
    
    .ttp-tag {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .mitigations-list {
        margin: 0;
        padding-left: 20px;
    }
    
    .mitigations-list li {
        font-size: 0.85em;
        color: #495057;
        margin-bottom: 5px;
    }
    
    .threat-actions {
        padding: 15px 25px;
        background: #f8f9fa;
        display: flex;
        gap: 10px;
    }
    
    .analyze-btn, .details-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.85em;
        transition: all 0.3s ease;
    }
    
    .analyze-btn {
        background: #e74c3c;
        color: white;
    }
    
    .analyze-btn:hover {
        background: #c0392b;
        transform: translateY(-1px);
    }
    
    .details-btn {
        background: #6c757d;
        color: white;
    }
    
    .details-btn:hover {
        background: #5a6268;
    }
    
    .intelligence-insights {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .insights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
        margin-top: 20px;
    }
    
    .insight-panel {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        border-left: 4px solid #e74c3c;
    }
    
    .insight-panel h3 {
        margin: 0 0 15px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .insight-panel ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .insight-panel li {
        font-size: 0.85em;
        color: #495057;
        margin-bottom: 8px;
    }
`;

// Style hinzufügen
const threatIntelStyleSheet = document.createElement('style');
threatIntelStyleSheet.textContent = threatIntelCSS;
document.head.appendChild(threatIntelStyleSheet);

// Global instance
window.threatIntel = new ThreatIntelligenceFeed();
