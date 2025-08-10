// Career Path Simulator - Cybersecurity Career Development Platform
class CareerPathSimulator {
    constructor() {
        this.careerPaths = {};
        this.userProgress = new Map();
        this.jobMarket = {};
        this.salaryData = {};
        this.certificationRequirements = {};
        this.initializeCareerPaths();
        this.initializeJobMarket();
    }

    initializeCareerPaths() {
        this.careerPaths = {
            // SOC Analyst Career Path
            soc_analyst: {
                id: "soc_analyst",
                name: "🛡️ SOC Analyst",
                description: "Security Operations Center Spezialist",
                icon: "🛡️",
                color: "#007bff",
                duration: "2-4 Jahre",
                averageSalary: "45.000 - 75.000 €",
                levels: [
                    {
                        level: 1,
                        title: "Junior SOC Analyst",
                        duration: "6-12 Monate",
                        salary: "40.000 - 50.000 €",
                        skills: ["security_fundamentals", "network_security", "incident_response_basics"],
                        certifications: ["Security+", "GCIH"],
                        responsibilities: [
                            "Überwachung von Sicherheitswarnungen",
                            "Erste Analyse von Sicherheitsvorfällen",
                            "Dokumentation von Incidents",
                            "Escalation an Senior Analysten"
                        ],
                        dailyTasks: [
                            "SIEM Dashboard Monitoring",
                            "Ticket-Management",
                            "Grundlegende Incident Response",
                            "Security Tool Bedienung"
                        ]
                    },
                    {
                        level: 2,
                        title: "SOC Analyst",
                        duration: "12-18 Monate",
                        salary: "50.000 - 65.000 €",
                        skills: ["advanced_monitoring", "digital_forensics", "threat_intelligence"],
                        certifications: ["CySA+", "GIAC GCIA"],
                        responsibilities: [
                            "Komplexe Incident Investigation",
                            "Threat Hunting Aktivitäten",
                            "SIEM Rule Development",
                            "Junior Analyst Mentoring"
                        ],
                        dailyTasks: [
                            "Advanced Threat Analysis",
                            "Forensic Investigation",
                            "IOC Development",
                            "Process Improvement"
                        ]
                    },
                    {
                        level: 3,
                        title: "Senior SOC Analyst",
                        duration: "18+ Monate",
                        salary: "65.000 - 80.000 €",
                        skills: ["malware_analysis", "advanced_incident_response", "soc_leadership"],
                        certifications: ["GCFA", "GNFA"],
                        responsibilities: [
                            "SOC Process Leadership",
                            "Complex Malware Analysis",
                            "Tool Evaluation & Implementation",
                            "Cross-team Coordination"
                        ],
                        dailyTasks: [
                            "Strategic Threat Analysis",
                            "Team Leadership",
                            "Technology Planning",
                            "Executive Reporting"
                        ]
                    }
                ],
                nextPaths: ["incident_responder", "threat_hunter", "security_architect"]
            },

            // Penetration Tester Career Path
            penetration_tester: {
                id: "penetration_tester",
                name: "⚔️ Penetration Tester",
                description: "Ethical Hacking Spezialist",
                icon: "⚔️",
                color: "#dc3545",
                duration: "2-5 Jahre",
                averageSalary: "55.000 - 95.000 €",
                levels: [
                    {
                        level: 1,
                        title: "Junior Penetration Tester",
                        duration: "6-12 Monate",
                        salary: "45.000 - 60.000 €",
                        skills: ["ethical_hacking_basics", "web_application_testing", "network_penetration"],
                        certifications: ["CEH", "eJPT"],
                        responsibilities: [
                            "Grundlegende Penetration Tests",
                            "Vulnerability Assessment",
                            "Report Writing",
                            "Tool Operation"
                        ],
                        dailyTasks: [
                            "Automated Scanning",
                            "Basic Manual Testing",
                            "Documentation",
                            "Client Communication"
                        ]
                    },
                    {
                        level: 2,
                        title: "Penetration Tester",
                        duration: "12-24 Monate",
                        salary: "60.000 - 80.000 €",
                        skills: ["social_engineering", "active_directory_attacks", "wireless_security"],
                        certifications: ["OSCP", "GPEN"],
                        responsibilities: [
                            "Comprehensive Penetration Testing",
                            "Social Engineering Assessments",
                            "Client Presentation",
                            "Methodology Development"
                        ],
                        dailyTasks: [
                            "Advanced Manual Testing",
                            "Exploit Development",
                            "Client Meetings",
                            "Team Collaboration"
                        ]
                    },
                    {
                        level: 3,
                        title: "Senior Penetration Tester",
                        duration: "24+ Monate",
                        salary: "80.000 - 100.000 €",
                        skills: ["red_team_operations", "advanced_evasion", "zero_day_research"],
                        certifications: ["OSEE", "GXPN"],
                        responsibilities: [
                            "Red Team Leadership",
                            "Advanced Attack Simulation",
                            "Zero-Day Research",
                            "Business Development"
                        ],
                        dailyTasks: [
                            "Complex Attack Chains",
                            "Team Leadership",
                            "Research & Development",
                            "Strategic Planning"
                        ]
                    }
                ],
                nextPaths: ["red_team_leader", "security_researcher", "security_consultant"]
            },

            // Cloud Security Engineer
            cloud_security_engineer: {
                id: "cloud_security_engineer",
                name: "☁️ Cloud Security Engineer",
                description: "Cloud-Infrastruktur Sicherheitsspezialist",
                icon: "☁️",
                color: "#17a2b8",
                duration: "3-5 Jahre",
                averageSalary: "65.000 - 110.000 €",
                levels: [
                    {
                        level: 1,
                        title: "Junior Cloud Security Engineer",
                        duration: "6-18 Monate",
                        salary: "55.000 - 75.000 €",
                        skills: ["cloud_fundamentals", "aws_security", "container_security"],
                        certifications: ["AWS Security Specialty", "Azure Security"],
                        responsibilities: [
                            "Cloud Security Implementation",
                            "IAM Policy Management",
                            "Security Monitoring Setup",
                            "Compliance Auditing"
                        ],
                        dailyTasks: [
                            "Security Configuration",
                            "Policy Implementation",
                            "Monitoring Setup",
                            "Documentation"
                        ]
                    },
                    {
                        level: 2,
                        title: "Cloud Security Engineer",
                        duration: "18-30 Monate",
                        salary: "75.000 - 95.000 €",
                        skills: ["devsecops", "kubernetes_security", "serverless_security"],
                        certifications: ["CCSP", "CKS"],
                        responsibilities: [
                            "DevSecOps Implementation",
                            "Security Architecture Design",
                            "Incident Response",
                            "Team Collaboration"
                        ],
                        dailyTasks: [
                            "Architecture Design",
                            "Security Integration",
                            "Automation Development",
                            "Cross-team Support"
                        ]
                    },
                    {
                        level: 3,
                        title: "Senior Cloud Security Engineer",
                        duration: "30+ Monate",
                        salary: "95.000 - 120.000 €",
                        skills: ["multi_cloud_security", "zero_trust_architecture", "security_automation"],
                        certifications: ["Professional Cloud Security Manager"],
                        responsibilities: [
                            "Strategic Security Planning",
                            "Multi-Cloud Architecture",
                            "Security Program Leadership",
                            "Vendor Management"
                        ],
                        dailyTasks: [
                            "Strategic Planning",
                            "Architecture Review",
                            "Team Leadership",
                            "Executive Reporting"
                        ]
                    }
                ],
                nextPaths: ["cloud_architect", "devsecops_lead", "security_architect"]
            },

            // GRC Specialist
            grc_specialist: {
                id: "grc_specialist",
                name: "⚖️ GRC Specialist",
                description: "Governance, Risk & Compliance Experte",
                icon: "⚖️",
                color: "#28a745",
                duration: "3-6 Jahre",
                averageSalary: "60.000 - 100.000 €",
                levels: [
                    {
                        level: 1,
                        title: "Junior GRC Analyst",
                        duration: "12-18 Monate",
                        salary: "50.000 - 65.000 €",
                        skills: ["compliance_fundamentals", "risk_management", "audit_management"],
                        certifications: ["CISA", "CRISC"],
                        responsibilities: [
                            "Compliance Monitoring",
                            "Risk Assessment Support",
                            "Audit Coordination",
                            "Policy Documentation"
                        ],
                        dailyTasks: [
                            "Compliance Tracking",
                            "Risk Register Updates",
                            "Audit Support",
                            "Report Generation"
                        ]
                    },
                    {
                        level: 2,
                        title: "GRC Specialist",
                        duration: "18-36 Monate",
                        salary: "65.000 - 85.000 €",
                        skills: ["advanced_risk_management", "regulatory_expertise", "business_continuity"],
                        certifications: ["CISM", "ISO 27001 Lead Auditor"],
                        responsibilities: [
                            "Risk Management Program",
                            "Regulatory Compliance",
                            "Business Continuity Planning",
                            "Stakeholder Communication"
                        ],
                        dailyTasks: [
                            "Risk Analysis",
                            "Compliance Management",
                            "Stakeholder Meetings",
                            "Program Development"
                        ]
                    },
                    {
                        level: 3,
                        title: "Senior GRC Manager",
                        duration: "36+ Monate",
                        salary: "85.000 - 110.000 €",
                        skills: ["enterprise_risk_management", "strategic_compliance", "board_reporting"],
                        certifications: ["CISSP", "COSO"],
                        responsibilities: [
                            "Enterprise Risk Strategy",
                            "Board Reporting",
                            "Regulatory Relationships",
                            "Team Leadership"
                        ],
                        dailyTasks: [
                            "Strategic Planning",
                            "Executive Reporting",
                            "Regulatory Relations",
                            "Team Management"
                        ]
                    }
                ],
                nextPaths: ["chief_risk_officer", "compliance_director", "security_consultant"]
            }
        };
    }

    initializeJobMarket() {
        this.jobMarket = {
            demand: {
                "soc_analyst": { level: "high", growth: "+15%", openings: 2500 },
                "penetration_tester": { level: "very_high", growth: "+22%", openings: 800 },
                "cloud_security_engineer": { level: "extremely_high", growth: "+35%", openings: 1200 },
                "grc_specialist": { level: "high", growth: "+18%", openings: 1800 }
            },
            locations: {
                "Deutschland": { modifier: 1.0, demand: "high" },
                "USA": { modifier: 1.8, demand: "very_high" },
                "UK": { modifier: 1.4, demand: "high" },
                "Schweiz": { modifier: 1.6, demand: "high" }
            },
            industries: {
                "Financial Services": { modifier: 1.3, security_focus: "high" },
                "Healthcare": { modifier: 1.1, security_focus: "high" },
                "Technology": { modifier: 1.4, security_focus: "very_high" },
                "Government": { modifier: 0.9, security_focus: "high" },
                "Consulting": { modifier: 1.2, security_focus: "medium" }
            }
        };
    }

    startCareerSimulation(userId, pathId, preferences = {}) {
        const path = this.careerPaths[pathId];
        if (!path) return null;

        const simulation = {
            userId,
            pathId,
            startDate: new Date(),
            currentLevel: 1,
            monthsInCurrentLevel: 0,
            totalExperience: 0,
            completedCertifications: [],
            skillProgress: new Map(),
            preferences: {
                location: preferences.location || "Deutschland",
                industry: preferences.industry || "Technology",
                workStyle: preferences.workStyle || "office", // office, remote, hybrid
                careerSpeed: preferences.careerSpeed || "normal" // fast, normal, steady
            },
            achievements: [],
            currentSalary: 0,
            projectedPath: []
        };

        this.userProgress.set(userId, simulation);
        this.calculateCareerProjection(userId);
        
        return simulation;
    }

    calculateCareerProjection(userId) {
        const progress = this.userProgress.get(userId);
        if (!progress) return;

        const path = this.careerPaths[progress.pathId];
        const speedMultiplier = this.getSpeedMultiplier(progress.preferences.careerSpeed);
        const locationModifier = this.jobMarket.locations[progress.preferences.location]?.modifier || 1.0;
        const industryModifier = this.jobMarket.industries[progress.preferences.industry]?.modifier || 1.0;

        progress.projectedPath = path.levels.map((level, index) => {
            const adjustedDuration = this.parseDuration(level.duration) / speedMultiplier;
            const adjustedSalary = this.calculateSalary(level.salary, locationModifier, industryModifier);
            
            return {
                level: level.level,
                title: level.title,
                estimatedMonths: Math.round(adjustedDuration),
                projectedSalary: adjustedSalary,
                requiredSkills: level.skills,
                recommendedCertifications: level.certifications,
                keyMilestones: this.generateMilestones(level, adjustedDuration)
            };
        });
    }

    getSpeedMultiplier(speed) {
        const multipliers = {
            "fast": 0.7,      // 30% faster progression
            "normal": 1.0,    // Standard progression
            "steady": 1.3     // 30% slower but thorough
        };
        return multipliers[speed] || 1.0;
    }

    parseDuration(duration) {
        // Convert duration strings like "6-12 Monate" to average months
        const match = duration.match(/(\d+)-?(\d+)?\s*Monate?/);
        if (match) {
            const min = parseInt(match[1]);
            const max = parseInt(match[2]) || min;
            return (min + max) / 2;
        }
        return 12; // Default fallback
    }

    calculateSalary(salaryRange, locationModifier, industryModifier) {
        // Parse salary range like "50.000 - 65.000 €"
        const match = salaryRange.match(/([\d.]+)\s*-\s*([\d.]+)/);
        if (match) {
            const min = parseInt(match[1].replace(/\./g, ''));
            const max = parseInt(match[2].replace(/\./g, ''));
            const avgSalary = (min + max) / 2;
            return Math.round(avgSalary * locationModifier * industryModifier);
        }
        return 60000; // Default fallback
    }

    generateMilestones(level, durationMonths) {
        const milestones = [];
        const quarterMonths = Math.round(durationMonths / 4);
        
        milestones.push({
            month: quarterMonths,
            description: `Grundlegende ${level.title} Fähigkeiten entwickelt`,
            type: "skill_development"
        });
        
        milestones.push({
            month: quarterMonths * 2,
            description: `Erste Zertifizierung angestrebt: ${level.certifications[0]}`,
            type: "certification"
        });
        
        milestones.push({
            month: quarterMonths * 3,
            description: "Erweiterte Verantwortlichkeiten übernommen",
            type: "responsibility"
        });
        
        milestones.push({
            month: durationMonths,
            description: `Bereit für nächste Karrierestufe`,
            type: "promotion_ready"
        });
        
        return milestones;
    }

    simulateMonthlyProgress(userId) {
        const progress = this.userProgress.get(userId);
        if (!progress) return null;

        const path = this.careerPaths[progress.pathId];
        const currentLevel = path.levels[progress.currentLevel - 1];
        
        progress.monthsInCurrentLevel++;
        progress.totalExperience += this.calculateMonthlyExperience(progress);
        
        // Check for skill progress
        this.updateSkillProgress(userId, currentLevel);
        
        // Check for level advancement
        const levelDuration = this.parseDuration(currentLevel.duration);
        const speedMultiplier = this.getSpeedMultiplier(progress.preferences.careerSpeed);
        const adjustedDuration = levelDuration / speedMultiplier;
        
        if (progress.monthsInCurrentLevel >= adjustedDuration && progress.currentLevel < path.levels.length) {
            this.advanceToNextLevel(userId);
        }
        
        // Update salary based on experience and performance
        this.updateSalary(userId);
        
        return this.getProgressSummary(userId);
    }

    calculateMonthlyExperience(progress) {
        const baseExperience = 100;
        const industryBonus = this.jobMarket.industries[progress.preferences.industry]?.security_focus === "very_high" ? 1.2 : 1.0;
        const locationBonus = this.jobMarket.locations[progress.preferences.location]?.demand === "very_high" ? 1.1 : 1.0;
        
        return Math.round(baseExperience * industryBonus * locationBonus);
    }

    updateSkillProgress(userId, currentLevel) {
        const progress = this.userProgress.get(userId);
        
        currentLevel.skills.forEach(skillId => {
            if (window.skillTree) {
                // Award experience to relevant skills
                window.skillTree.addExperience(userId, skillId, 50, 'career_progression');
            }
            
            const currentProgress = progress.skillProgress.get(skillId) || 0;
            progress.skillProgress.set(skillId, Math.min(100, currentProgress + 5));
        });
    }

    advanceToNextLevel(userId) {
        const progress = this.userProgress.get(userId);
        const path = this.careerPaths[progress.pathId];
        
        if (progress.currentLevel < path.levels.length) {
            progress.currentLevel++;
            progress.monthsInCurrentLevel = 0;
            
            progress.achievements.push({
                date: new Date(),
                type: "level_advancement",
                description: `Befördert zu ${path.levels[progress.currentLevel - 1].title}`,
                level: progress.currentLevel
            });
            
            // Award achievement
            if (window.achievementSystem) {
                window.achievementSystem.updateProgress(userId, 'career_advancement', 1);
            }
        }
    }

    updateSalary(userId) {
        const progress = this.userProgress.get(userId);
        const path = this.careerPaths[progress.pathId];
        const currentLevel = path.levels[progress.currentLevel - 1];
        
        const locationModifier = this.jobMarket.locations[progress.preferences.location]?.modifier || 1.0;
        const industryModifier = this.jobMarket.industries[progress.preferences.industry]?.modifier || 1.0;
        const experienceBonus = 1 + (progress.totalExperience / 10000) * 0.1; // 10% bonus per 10k experience
        
        progress.currentSalary = this.calculateSalary(currentLevel.salary, locationModifier, industryModifier) * experienceBonus;
    }

    getProgressSummary(userId) {
        const progress = this.userProgress.get(userId);
        if (!progress) return null;

        const path = this.careerPaths[progress.pathId];
        const currentLevel = path.levels[progress.currentLevel - 1];
        
        return {
            currentTitle: currentLevel.title,
            currentLevel: progress.currentLevel,
            monthsInLevel: progress.monthsInCurrentLevel,
            totalExperience: progress.totalExperience,
            currentSalary: Math.round(progress.currentSalary),
            nextMilestone: this.getNextMilestone(progress),
            skillProgress: Object.fromEntries(progress.skillProgress),
            achievements: progress.achievements,
            marketDemand: this.jobMarket.demand[progress.pathId],
            recommendedActions: this.getRecommendedActions(userId)
        };
    }

    getNextMilestone(progress) {
        const currentLevelData = progress.projectedPath[progress.currentLevel - 1];
        if (!currentLevelData) return null;
        
        const relevantMilestones = currentLevelData.keyMilestones.filter(
            milestone => milestone.month > progress.monthsInCurrentLevel
        );
        
        return relevantMilestones.length > 0 ? relevantMilestones[0] : null;
    }

    getRecommendedActions(userId) {
        const progress = this.userProgress.get(userId);
        const path = this.careerPaths[progress.pathId];
        const currentLevel = path.levels[progress.currentLevel - 1];
        const actions = [];
        
        // Check certification progress
        currentLevel.certifications.forEach(cert => {
            if (!progress.completedCertifications.includes(cert)) {
                actions.push({
                    type: "certification",
                    priority: "high",
                    description: `Zertifizierung ${cert} anstreben`,
                    timeline: "3-6 Monate"
                });
            }
        });
        
        // Check skill development
        currentLevel.skills.forEach(skillId => {
            const skillProgress = progress.skillProgress.get(skillId) || 0;
            if (skillProgress < 80) {
                actions.push({
                    type: "skill_development",
                    priority: "medium",
                    description: `Skill ${skillId} vertiefen`,
                    timeline: "1-3 Monate"
                });
            }
        });
        
        // Career advancement preparation
        if (progress.monthsInCurrentLevel > this.parseDuration(currentLevel.duration) * 0.7) {
            actions.push({
                type: "career_preparation",
                priority: "high",
                description: "Vorbereitung auf nächste Karrierestufe",
                timeline: "2-4 Monate"
            });
        }
        
        return actions.slice(0, 3); // Top 3 recommendations
    }

    renderCareerSimulator() {
        return `
            <div class="career-simulator-container">
                <div class="career-header">
                    <h1>🏢 Career Path Simulator</h1>
                    <p>Planen Sie Ihre Cybersecurity-Karriere strategisch</p>
                </div>
                
                <div class="career-paths-grid">
                    ${Object.values(this.careerPaths).map(path => 
                        this.renderCareerPathCard(path)
                    ).join('')}
                </div>
                
                <div class="market-insights">
                    <h2>📊 Arbeitsmarkt Insights</h2>
                    ${this.renderMarketData()}
                </div>
            </div>
        `;
    }

    renderCareerPathCard(path) {
        const demand = this.jobMarket.demand[path.id];
        
        return `
            <div class="career-path-card" onclick="careerSimulator.startCareerPath('${path.id}')">
                <div class="path-header" style="background: ${path.color}">
                    <div class="path-icon">${path.icon}</div>
                    <div class="path-info">
                        <h3>${path.name}</h3>
                        <p>${path.description}</p>
                    </div>
                </div>
                
                <div class="path-details">
                    <div class="detail-item">
                        <span class="label">Dauer:</span>
                        <span class="value">${path.duration}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Gehalt:</span>
                        <span class="value">${path.averageSalary}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Nachfrage:</span>
                        <span class="value demand-${demand.level}">${demand.level.replace('_', ' ').toUpperCase()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Wachstum:</span>
                        <span class="value growth">${demand.growth}</span>
                    </div>
                </div>
                
                <div class="career-levels">
                    <h4>Karrierestufen:</h4>
                    ${path.levels.map((level, index) => `
                        <div class="level-item">
                            <span class="level-number">${level.level}</span>
                            <span class="level-title">${level.title}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderMarketData() {
        return `
            <div class="market-data-grid">
                <div class="market-card">
                    <h3>🌍 Regionale Nachfrage</h3>
                    ${Object.entries(this.jobMarket.locations).map(([location, data]) => `
                        <div class="market-item">
                            <span>${location}</span>
                            <span class="demand-${data.demand}">${data.demand.replace('_', ' ')}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="market-card">
                    <h3>🏭 Branchen-Fokus</h3>
                    ${Object.entries(this.jobMarket.industries).map(([industry, data]) => `
                        <div class="market-item">
                            <span>${industry}</span>
                            <span class="focus-${data.security_focus}">${data.security_focus}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    startCareerPath(pathId) {
        // Simple path start - in real implementation would show configuration modal
        const userId = 'current_user';
        const simulation = this.startCareerSimulation(userId, pathId);
        alert(`Karrieresimulation für ${this.careerPaths[pathId].name} gestartet!`);
        console.log('Career simulation started:', simulation);
    }
}

// CSS for Career Path Simulator
const careerSimulatorCSS = `
    .career-simulator-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .career-header {
        text-align: center;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .career-paths-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }
    
    .career-path-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .career-path-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .path-header {
        padding: 25px;
        color: white;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .path-icon {
        font-size: 2.5em;
    }
    
    .path-details {
        padding: 20px;
        background: #f8f9fa;
    }
    
    .detail-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .label {
        font-weight: 500;
        color: #6c757d;
    }
    
    .value {
        font-weight: 600;
        color: #2c3e50;
    }
    
    .demand-high { color: #28a745; }
    .demand-very_high { color: #007bff; }
    .demand-extremely_high { color: #dc3545; font-weight: bold; }
    
    .growth {
        color: #28a745;
        font-weight: bold;
    }
    
    .career-levels {
        padding: 20px;
    }
    
    .career-levels h4 {
        margin: 0 0 15px 0;
        color: #2c3e50;
    }
    
    .level-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
    }
    
    .level-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background: #007bff;
        color: white;
        border-radius: 50%;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .level-title {
        color: #495057;
        font-size: 0.9em;
    }
    
    .market-insights {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .market-data-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }
    
    .market-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
    }
    
    .market-card h3 {
        margin: 0 0 20px 0;
        color: #2c3e50;
    }
    
    .market-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #dee2e6;
    }
    
    .market-item:last-child {
        border-bottom: none;
    }
    
    .focus-high { color: #dc3545; font-weight: bold; }
    .focus-very_high { color: #007bff; font-weight: bold; }
    .focus-medium { color: #ffc107; font-weight: bold; }
    
    @media (max-width: 768px) {
        .career-paths-grid {
            grid-template-columns: 1fr;
        }
        
        .path-header {
            flex-direction: column;
            text-align: center;
        }
    }
`;

// Style hinzufügen
const careerStyleSheet = document.createElement('style');
careerStyleSheet.textContent = careerSimulatorCSS;
document.head.appendChild(careerStyleSheet);

// Global instance
window.careerSimulator = new CareerPathSimulator();
