// Live Threat Intelligence Feed System
class LiveThreatFeed {
    constructor() {
        this.threatData = [];
        this.updateInterval = 300000; // 5 minutes
        this.lastUpdate = null;
        this.categories = ['malware', 'phishing', 'vulnerabilities', 'ransomware', 'apt'];
        this.initializeFeed();
    }

    initializeFeed() {
        // Simulate real threat data - in production, this would connect to actual threat feeds
        this.loadInitialThreats();
        this.startAutoUpdate();
        this.setupNotifications();
    }

    loadInitialThreats() {
        // Simulated current threats - would come from APIs like MISP, OTX, etc.
        this.threatData = [
            {
                id: "CVE-2024-8901",
                title: "Critical Windows RCE Vulnerability",
                type: "vulnerability",
                severity: "critical",
                cve: "CVE-2024-8901",
                cvssScore: 9.8,
                description: "Remote Code Execution in Windows Print Spooler Service",
                affectedSystems: ["Windows 10", "Windows 11", "Windows Server 2019+"],
                exploitation: "Aktiv ausgenutzt",
                firstSeen: "2024-08-09T14:30:00Z",
                lastUpdate: "2024-08-10T08:15:00Z",
                indicators: [
                    "C:\\Windows\\System32\\spoolsv.exe",
                    "Unerwartete Netzwerkverbindungen von spoolsv.exe"
                ],
                mitigation: [
                    "Sofortige Patches installieren",
                    "Print Spooler Service deaktivieren wenn möglich",
                    "Netzwerkzugriff auf Port 135 beschränken"
                ],
                source: "BSI-CERT",
                tags: ["windows", "rce", "critical", "zero-day"]
            },
            {
                id: "MAL-2024-0842",
                title: "Neue BlackCat Ransomware Variante",
                type: "malware",
                severity: "high",
                family: "BlackCat/ALPHV",
                description: "Erweiterte BlackCat-Variante mit verbesserter Verschlüsselung",
                ttps: [
                    "T1486 - Data Encrypted for Impact",
                    "T1490 - Inhibit System Recovery",
                    "T1562 - Impair Defenses"
                ],
                fileHashes: {
                    "md5": "7d865e959b2466918c9863afca942d0f",
                    "sha256": "6a741b923793c8ac6c296bc2c1e4a8d1b7e21a8b9a1a8c5d4c2e6f1a8b9c1d2e"
                },
                networkIndicators: [
                    "185.220.100.240",
                    "tor2web.blutmagie.de",
                    "avaddongun7rngel.onion"
                ],
                firstSeen: "2024-08-08T22:45:00Z",
                targetSectors: ["Healthcare", "Manufacturing", "Government"],
                prevention: [
                    "Offline-Backups erstellen",
                    "Endpoint Detection and Response (EDR) aktivieren",
                    "Makros in Office-Dokumenten deaktivieren"
                ],
                source: "CrowdStrike Intelligence",
                tags: ["ransomware", "blackcat", "alphv", "healthcare"]
            },
            {
                id: "PHISH-2024-1127",
                title: "Microsoft 365 Phishing Kampagne",
                type: "phishing",
                severity: "medium",
                description: "Großangelegte Phishing-Kampagne targeting Microsoft 365 Zugangsdaten",
                campaign: "Operation CloudThief",
                emailSubjects: [
                    "Urgent: Your Microsoft account will be suspended",
                    "Action Required: Verify your Office 365 account",
                    "Security Alert: Unusual sign-in activity detected"
                ],
                domains: [
                    "microsft-security.com",
                    "office365-verification.net", 
                    "ms-account-verify.org"
                ],
                ipAddresses: [
                    "192.168.1.100",
                    "203.0.113.45",
                    "198.51.100.78"
                ],
                firstSeen: "2024-08-09T16:20:00Z",
                targetedOrganizations: ["Small to medium businesses", "Educational institutions"],
                detectionRules: [
                    "Sender domain mimicking Microsoft",
                    "Urgent language in subject lines",
                    "Links to non-Microsoft domains"
                ],
                prevention: [
                    "SPF/DKIM/DMARC konfigurieren",
                    "Multi-Factor Authentication aktivieren",
                    "Benutzer-Awareness-Training durchführen"
                ],
                source: "PhishTank",
                tags: ["phishing", "microsoft", "credentials", "business"]
            },
            {
                id: "APT-2024-0156",
                title: "APT29 (Cozy Bear) neue TTPs",
                type: "apt",
                severity: "high",
                actor: "APT29 / Cozy Bear",
                attribution: "Russia - SVR",
                description: "Neue Techniken von APT29 gegen diplomatische Ziele",
                campaign: "Operation DiplomaticHunter",
                newTtps: [
                    "Living-off-the-Land mit PowerShell",
                    "Abuse von Microsoft Graph APIs",
                    "Custom C2 über legitime Cloud-Services"
                ],
                targetSectors: ["Government", "Diplomatic missions", "Think tanks"],
                iocs: [
                    "powershell.exe -WindowStyle Hidden -EncodedCommand",
                    "graph.microsoft.com unusual API calls",
                    "OneDrive.exe with network beaconing"
                ],
                firstSeen: "2024-08-07T11:30:00Z",
                mitigation: [
                    "PowerShell Script Block Logging aktivieren",
                    "Graph API Überwachung implementieren",
                    "Zero Trust Network Access (ZTNA)"
                ],
                source: "CISA Alert",
                tags: ["apt29", "russia", "government", "diplomacy"]
            },
            {
                id: "IOT-2024-0891",
                title: "Mirai Botnet-Variante targeting IoT Cameras",
                type: "botnet",
                severity: "medium",
                family: "Mirai",
                description: "Neue Mirai-Variante nutzt Schwachstellen in IP-Kameras aus",
                exploitedVulnerabilities: [
                    "CVE-2024-8745 - Hikvision Command Injection",
                    "CVE-2024-8746 - Dahua Authentication Bypass"
                ],
                targetedDevices: [
                    "Hikvision IP Cameras",
                    "Dahua Security Cameras", 
                    "Generic ONVIF cameras"
                ],
                botnetSize: "~50,000 infected devices",
                c2Servers: [
                    "botnet-c2.example.com",
                    "185.220.101.42",
                    "mirai-controller.darkweb.onion"
                ],
                firstSeen: "2024-08-06T09:15:00Z",
                prevention: [
                    "Default-Passwörter ändern",
                    "Firmware-Updates installieren",
                    "Netzwerk-Segmentierung für IoT-Geräte"
                ],
                source: "Shadowserver Foundation",
                tags: ["mirai", "iot", "cameras", "botnet"]
            }
        ];

        this.lastUpdate = new Date();
    }

    startAutoUpdate() {
        setInterval(() => {
            this.updateThreatFeed();
        }, this.updateInterval);
    }

    async updateThreatFeed() {
        try {
            // Simulate API calls to threat intelligence sources
            const newThreats = await this.fetchLatestThreats();
            
            if (newThreats.length > 0) {
                this.procesNewThreats(newThreats);
                this.notifyNewThreats(newThreats);
            }
            
            this.lastUpdate = new Date();
            this.updateFeedDisplay();
            
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Threat Feeds:', error);
        }
    }

    async fetchLatestThreats() {
        // Simulate fetching from various sources
        // In production: MISP, OTX, VirusTotal, etc.
        
        return new Promise(resolve => {
            setTimeout(() => {
                // Simulate new threats
                const newThreat = {
                    id: `SIM-${Date.now()}`,
                    title: this.generateRandomThreatTitle(),
                    type: this.categories[Math.floor(Math.random() * this.categories.length)],
                    severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)],
                    description: "Simulierte neue Bedrohung für Demo-Zwecke",
                    firstSeen: new Date().toISOString(),
                    source: "Simulated Feed",
                    tags: ["demo", "simulated"]
                };
                
                resolve(Math.random() > 0.7 ? [newThreat] : []);
            }, 1000);
        });
    }

    generateRandomThreatTitle() {
        const threatTypes = [
            "Neue Ransomware-Familie entdeckt",
            "Zero-Day Exploit in beliebter Software", 
            "Phishing-Kampagne targeting deutsche Unternehmen",
            "APT-Gruppe ändert Taktiken",
            "IoT-Malware breitet sich aus"
        ];
        
        return threatTypes[Math.floor(Math.random() * threatTypes.length)];
    }

    procesNewThreats(newThreats) {
        newThreats.forEach(threat => {
            // Analyze threat relevance
            threat.relevanceScore = this.calculateRelevanceScore(threat);
            
            // Enrich with additional context
            threat.context = this.generateThreatContext(threat);
            
            // Add to main feed
            this.threatData.unshift(threat);
        });

        // Keep only latest 100 threats
        if (this.threatData.length > 100) {
            this.threatData = this.threatData.slice(0, 100);
        }
    }

    calculateRelevanceScore(threat) {
        let score = 50; // Base score
        
        // Severity adjustment
        const severityScores = { 'low': 0, 'medium': 20, 'high': 40, 'critical': 60 };
        score += severityScores[threat.severity] || 0;
        
        // Type adjustment (some types more relevant for training)
        const typeScores = { 'phishing': 30, 'ransomware': 25, 'vulnerability': 20 };
        score += typeScores[threat.type] || 10;
        
        // Recency bonus
        const hoursSinceDiscovery = (new Date() - new Date(threat.firstSeen)) / (1000 * 60 * 60);
        if (hoursSinceDiscovery < 24) score += 20;
        
        return Math.min(100, score);
    }

    generateThreatContext(threat) {
        const contexts = {
            'phishing': "Schulen Sie Ihre Mitarbeiter, diese Art von Angriff zu erkennen",
            'ransomware': "Überprüfen Sie Ihre Backup-Strategie und Incident Response Pläne",
            'vulnerability': "Prüfen Sie, ob Ihre Systeme betroffen sind und Updates verfügbar sind",
            'apt': "Verstärken Sie Ihre Überwachung und Threat Hunting Aktivitäten",
            'malware': "Aktualisieren Sie Ihre Endpoint Protection Signaturen"
        };
        
        return contexts[threat.type] || "Bewerten Sie die Auswirkungen auf Ihre Infrastruktur";
    }

    notifyNewThreats(threats) {
        threats.forEach(threat => {
            if (threat.severity === 'critical' || threat.relevanceScore > 80) {
                this.showHighPriorityAlert(threat);
            }
        });
    }

    showHighPriorityAlert(threat) {
        const notification = document.createElement('div');
        notification.className = `threat-alert ${threat.severity}`;
        notification.innerHTML = `
            <div class="alert-content">
                <div class="alert-header">
                    <span class="alert-icon">⚠️</span>
                    <h3>Neue ${threat.severity.toUpperCase()} Bedrohung</h3>
                    <button class="close-alert" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <h4>${threat.title}</h4>
                <p>${threat.description}</p>
                <div class="alert-actions">
                    <button onclick="threatFeed.showThreatDetails('${threat.id}')">Details anzeigen</button>
                    <button onclick="threatFeed.createLearningScenario('${threat.id}')">Lernszenario erstellen</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 10000);
    }

    renderThreatFeed() {
        const recentThreats = this.threatData.slice(0, 20);
        
        return `
            <div class="threat-feed-container">
                <div class="threat-feed-header">
                    <h2>🌐 Live Threat Intelligence</h2>
                    <div class="feed-status">
                        <span class="status-indicator ${this.isOnline() ? 'online' : 'offline'}"></span>
                        <span>Letzte Aktualisierung: ${this.formatLastUpdate()}</span>
                        <button onclick="threatFeed.updateThreatFeed()" class="refresh-btn">🔄 Aktualisieren</button>
                    </div>
                </div>
                
                <div class="threat-filters">
                    <h3>🔍 Filter</h3>
                    <div class="filter-controls">
                        <select id="severity-filter" onchange="threatFeed.applyFilters()">
                            <option value="">Alle Schweregrade</option>
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        
                        <select id="type-filter" onchange="threatFeed.applyFilters()">
                            <option value="">Alle Typen</option>
                            <option value="malware">Malware</option>
                            <option value="phishing">Phishing</option>
                            <option value="vulnerability">Vulnerabilities</option>
                            <option value="ransomware">Ransomware</option>
                            <option value="apt">APT</option>
                        </select>
                        
                        <input type="text" id="search-filter" placeholder="Suche..." onkeyup="threatFeed.applyFilters()">
                    </div>
                </div>
                
                <div class="threat-statistics">
                    <h3>📊 Statistiken (24h)</h3>
                    <div class="stats-grid">
                        ${this.renderThreatStatistics()}
                    </div>
                </div>
                
                <div class="threat-list" id="threat-list">
                    ${this.renderThreatList(recentThreats)}
                </div>
            </div>
        `;
    }

    renderThreatStatistics() {
        const last24h = this.threatData.filter(threat => {
            const threatTime = new Date(threat.firstSeen);
            const now = new Date();
            return (now - threatTime) < (24 * 60 * 60 * 1000);
        });

        const stats = {
            total: last24h.length,
            critical: last24h.filter(t => t.severity === 'critical').length,
            high: last24h.filter(t => t.severity === 'high').length,
            malware: last24h.filter(t => t.type === 'malware').length,
            phishing: last24h.filter(t => t.type === 'phishing').length
        };

        return `
            <div class="stat-item">
                <span class="stat-number">${stats.total}</span>
                <span class="stat-label">Neue Bedrohungen</span>
            </div>
            <div class="stat-item critical">
                <span class="stat-number">${stats.critical}</span>
                <span class="stat-label">Critical</span>
            </div>
            <div class="stat-item high">
                <span class="stat-number">${stats.high}</span>
                <span class="stat-label">High</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.malware}</span>
                <span class="stat-label">Malware</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.phishing}</span>
                <span class="stat-label">Phishing</span>
            </div>
        `;
    }

    renderThreatList(threats) {
        return threats.map(threat => `
            <div class="threat-item ${threat.severity}" data-type="${threat.type}" data-id="${threat.id}">
                <div class="threat-header">
                    <div class="threat-title">
                        <h4>${threat.title}</h4>
                        <div class="threat-meta">
                            <span class="severity-badge ${threat.severity}">${threat.severity.toUpperCase()}</span>
                            <span class="type-badge">${threat.type}</span>
                            <span class="relevance-score">Relevanz: ${threat.relevanceScore || 50}%</span>
                        </div>
                    </div>
                    <div class="threat-time">
                        ${this.formatThreatTime(threat.firstSeen)}
                    </div>
                </div>
                
                <div class="threat-description">
                    ${threat.description}
                </div>
                
                ${threat.context ? `
                    <div class="threat-context">
                        <strong>💡 Für Sie relevant:</strong> ${threat.context}
                    </div>
                ` : ''}
                
                <div class="threat-actions">
                    <button onclick="threatFeed.showThreatDetails('${threat.id}')" class="btn-details">
                        📋 Details
                    </button>
                    <button onclick="threatFeed.createLearningScenario('${threat.id}')" class="btn-learn">
                        🎓 Lernszenario
                    </button>
                    <button onclick="threatFeed.addToWatchlist('${threat.id}')" class="btn-watch">
                        👁️ Beobachten
                    </button>
                </div>
            </div>
        `).join('');
    }

    applyFilters() {
        const severityFilter = document.getElementById('severity-filter').value;
        const typeFilter = document.getElementById('type-filter').value;
        const searchFilter = document.getElementById('search-filter').value.toLowerCase();
        
        let filteredThreats = this.threatData;
        
        if (severityFilter) {
            filteredThreats = filteredThreats.filter(t => t.severity === severityFilter);
        }
        
        if (typeFilter) {
            filteredThreats = filteredThreats.filter(t => t.type === typeFilter);
        }
        
        if (searchFilter) {
            filteredThreats = filteredThreats.filter(t => 
                t.title.toLowerCase().includes(searchFilter) ||
                t.description.toLowerCase().includes(searchFilter)
            );
        }
        
        document.getElementById('threat-list').innerHTML = this.renderThreatList(filteredThreats);
    }

    showThreatDetails(threatId) {
        const threat = this.threatData.find(t => t.id === threatId);
        if (!threat) return;
        
        const modal = document.createElement('div');
        modal.className = 'threat-details-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${threat.title}</h2>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                
                <div class="threat-full-details">
                    ${this.renderFullThreatDetails(threat)}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    renderFullThreatDetails(threat) {
        let details = `
            <div class="detail-section">
                <h3>📋 Grundinformationen</h3>
                <table class="details-table">
                    <tr><td>ID:</td><td>${threat.id}</td></tr>
                    <tr><td>Typ:</td><td>${threat.type}</td></tr>
                    <tr><td>Schweregrad:</td><td class="severity-${threat.severity}">${threat.severity}</td></tr>
                    <tr><td>Quelle:</td><td>${threat.source}</td></tr>
                    <tr><td>Erstmals gesehen:</td><td>${new Date(threat.firstSeen).toLocaleString()}</td></tr>
                </table>
            </div>
            
            <div class="detail-section">
                <h3>📝 Beschreibung</h3>
                <p>${threat.description}</p>
            </div>
        `;
        
        // Add specific details based on threat type
        if (threat.cvssScore) {
            details += `
                <div class="detail-section">
                    <h3>🎯 CVSS Score</h3>
                    <div class="cvss-score ${threat.cvssScore >= 9 ? 'critical' : threat.cvssScore >= 7 ? 'high' : 'medium'}">
                        ${threat.cvssScore}/10
                    </div>
                </div>
            `;
        }
        
        if (threat.indicators && threat.indicators.length > 0) {
            details += `
                <div class="detail-section">
                    <h3>🔍 Indikatoren</h3>
                    <ul>
                        ${threat.indicators.map(indicator => `<li><code>${indicator}</code></li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (threat.mitigation && threat.mitigation.length > 0) {
            details += `
                <div class="detail-section">
                    <h3>🛡️ Gegenmaßnahmen</h3>
                    <ul>
                        ${threat.mitigation.map(measure => `<li>${measure}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        return details;
    }

    createLearningScenario(threatId) {
        const threat = this.threatData.find(t => t.id === threatId);
        if (!threat) return;
        
        // Create interactive learning scenario based on threat
        const scenario = {
            title: `Szenario: ${threat.title}`,
            description: `Lernen Sie, wie Sie auf diese Bedrohung reagieren`,
            threat: threat,
            questions: this.generateScenarioQuestions(threat),
            timeLimit: 20
        };
        
        // Integrate with existing learning systems
        if (window.escapeRoom) {
            window.escapeRoom.startCustomScenario(scenario);
        } else {
            alert(`Lernszenario für ${threat.title} wird erstellt...`);
        }
    }

    generateScenarioQuestions(threat) {
        const baseQuestions = [
            {
                question: `Wie würden Sie auf diese ${threat.type}-Bedrohung reagieren?`,
                type: 'multiple_choice',
                answers: [
                    'Sofort alle Systeme herunterfahren',
                    'Incident Response Team informieren', // Correct
                    'Abwarten und beobachten',
                    'E-Mail an alle Mitarbeiter senden'
                ],
                correct: 1
            }
        ];
        
        // Add threat-specific questions
        if (threat.type === 'phishing') {
            baseQuestions.push({
                question: 'Welche Maßnahme ist bei einer Phishing-Kampagne am wichtigsten?',
                type: 'multiple_choice',
                answers: [
                    'Benutzer warnen',
                    'E-Mail-Filter aktualisieren', // Correct
                    'Internet-Zugang sperren',
                    'Neue Passwörter vergeben'
                ],
                correct: 1
            });
        }
        
        return baseQuestions;
    }

    isOnline() {
        // Simulate connection status
        return navigator.onLine;
    }

    formatLastUpdate() {
        if (!this.lastUpdate) return 'Nie';
        
        const now = new Date();
        const diff = now - this.lastUpdate;
        const minutes = Math.floor(diff / (1000 * 60));
        
        if (minutes < 1) return 'Gerade eben';
        if (minutes < 60) return `vor ${minutes} Minuten`;
        
        const hours = Math.floor(minutes / 60);
        return `vor ${hours} Stunden`;
    }

    formatThreatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        
        if (hours < 1) return 'Vor wenigen Minuten';
        if (hours < 24) return `vor ${hours}h`;
        
        const days = Math.floor(hours / 24);
        return `vor ${days}d`;
    }

    updateFeedDisplay() {
        const threatListElement = document.getElementById('threat-list');
        if (threatListElement) {
            threatListElement.innerHTML = this.renderThreatList(this.threatData.slice(0, 20));
        }
    }

    setupNotifications() {
        // Request notification permission
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }
}

// CSS für Live Threat Feed
const threatFeedCSS = `
    .threat-feed-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .threat-feed-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .feed-status {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .status-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #dc3545;
    }
    
    .status-indicator.online {
        background: #28a745;
        animation: pulse-green 2s infinite;
    }
    
    @keyframes pulse-green {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    .refresh-btn {
        background: rgba(255,255,255,0.2);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .threat-filters {
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .filter-controls {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .filter-controls select,
    .filter-controls input {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
    }
    
    .threat-statistics {
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-top: 15px;
    }
    
    .stat-item {
        text-align: center;
        padding: 15px;
        border-radius: 8px;
        background: #f8f9fa;
        border-left: 4px solid #007bff;
    }
    
    .stat-item.critical {
        border-left-color: #dc3545;
        background: #fff5f5;
    }
    
    .stat-item.high {
        border-left-color: #fd7e14;
        background: #fff8f0;
    }
    
    .stat-number {
        display: block;
        font-size: 2em;
        font-weight: bold;
        color: #2c3e50;
    }
    
    .stat-label {
        display: block;
        font-size: 0.9em;
        color: #6c757d;
        margin-top: 5px;
    }
    
    .threat-item {
        background: white;
        border-radius: 10px;
        padding: 20px;
        margin: 15px 0;
        border-left: 5px solid #007bff;
        transition: transform 0.3s ease;
    }
    
    .threat-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .threat-item.critical {
        border-left-color: #dc3545;
        background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
    }
    
    .threat-item.high {
        border-left-color: #fd7e14;
        background: linear-gradient(135deg, #fff8f0 0%, #ffffff 100%);
    }
    
    .threat-item.medium {
        border-left-color: #ffc107;
    }
    
    .threat-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .threat-title h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
    }
    
    .threat-meta {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .severity-badge,
    .type-badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .severity-badge.critical {
        background: #f8d7da;
        color: #721c24;
    }
    
    .severity-badge.high {
        background: #fff3cd;
        color: #856404;
    }
    
    .severity-badge.medium {
        background: #d1ecf1;
        color: #0c5460;
    }
    
    .severity-badge.low {
        background: #d4edda;
        color: #155724;
    }
    
    .type-badge {
        background: #e9ecef;
        color: #495057;
    }
    
    .relevance-score {
        font-size: 0.8em;
        color: #6c757d;
    }
    
    .threat-time {
        font-size: 0.9em;
        color: #6c757d;
        white-space: nowrap;
    }
    
    .threat-description {
        color: #495057;
        line-height: 1.5;
        margin-bottom: 15px;
    }
    
    .threat-context {
        background: #e3f2fd;
        border: 1px solid #bbdefb;
        border-radius: 5px;
        padding: 10px;
        margin: 15px 0;
        font-size: 0.9em;
    }
    
    .threat-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .threat-actions button {
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
        transition: background-color 0.3s ease;
    }
    
    .btn-details {
        background: #007bff;
        color: white;
    }
    
    .btn-learn {
        background: #28a745;
        color: white;
    }
    
    .btn-watch {
        background: #6c757d;
        color: white;
    }
    
    .threat-alert {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        border-left: 5px solid #dc3545;
    }
    
    .threat-alert.critical {
        border-left-color: #dc3545;
        animation: alert-pulse 2s infinite;
    }
    
    @keyframes alert-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    .alert-content {
        padding: 20px;
    }
    
    .alert-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    
    .alert-icon {
        font-size: 1.5em;
        margin-right: 10px;
    }
    
    .close-alert {
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: #6c757d;
    }
    
    .alert-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }
    
    .alert-actions button {
        flex: 1;
        padding: 8px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
    }
    
    .threat-details-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    
    .threat-details-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 0;
    }
    
    .threat-details-modal .modal-header {
        background: #f8f9fa;
        padding: 20px;
        border-bottom: 1px solid #dee2e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .threat-full-details {
        padding: 20px;
    }
    
    .detail-section {
        margin: 20px 0;
    }
    
    .detail-section h3 {
        color: #2c3e50;
        border-bottom: 2px solid #e9ecef;
        padding-bottom: 10px;
    }
    
    .details-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .details-table td {
        padding: 8px;
        border-bottom: 1px solid #e9ecef;
    }
    
    .details-table td:first-child {
        font-weight: bold;
        width: 150px;
    }
    
    .cvss-score {
        display: inline-block;
        padding: 15px 25px;
        border-radius: 50%;
        color: white;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
    
    .cvss-score.critical {
        background: #dc3545;
    }
    
    .cvss-score.high {
        background: #fd7e14;
    }
    
    .cvss-score.medium {
        background: #ffc107;
        color: black;
    }
`;

// Style hinzufügen
const threatFeedStyleSheet = document.createElement('style');
threatFeedStyleSheet.textContent = threatFeedCSS;
document.head.appendChild(threatFeedStyleSheet);

// Global instance
window.threatFeed = new LiveThreatFeed();
