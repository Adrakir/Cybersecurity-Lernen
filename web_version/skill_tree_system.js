// Skill Tree System - RPG-style Cybersecurity Competency Development
class SkillTreeSystem {
    constructor() {
        this.userSkills = new Map();
        this.skillTrees = {};
        this.prerequisites = new Map();
        this.skillExperience = new Map();
        this.currentUser = null;
        this.initializeSkillTrees();
    }

    initializeSkillTrees() {
        // Defensive Security Skill Tree
        this.skillTrees.defensive = {
            id: "defensive",
            name: "🛡️ Defensive Security",
            description: "Verteidigung, Überwachung und Incident Response",
            color: "#007bff",
            icon: "🛡️",
            skills: {
                // Tier 1 - Foundation
                security_fundamentals: {
                    id: "security_fundamentals",
                    name: "Security Fundamentals",
                    description: "Grundlagen der IT-Sicherheit: CIA-Triad, Risikomanagement, Compliance",
                    tier: 1,
                    maxLevel: 5,
                    experienceRequired: [100, 250, 500, 1000, 2000],
                    prerequisites: [],
                    unlocks: ["network_security", "incident_response_basics", "vulnerability_assessment"],
                    benefits: {
                        1: "Grundverständnis für Sicherheitsprinzipien",
                        2: "Erkennung von Sicherheitsrisiken",
                        3: "Bewertung von Sicherheitsmaßnahmen",
                        4: "Entwicklung von Sicherheitsrichtlinien",
                        5: "Strategische Sicherheitsplanung"
                    },
                    practicalApplications: [
                        "Sicherheitsaudits durchführen",
                        "Risikobewertungen erstellen",
                        "Compliance-Checks durchführen",
                        "Sicherheitsschulungen entwickeln"
                    ]
                },

                network_security: {
                    id: "network_security",
                    name: "Network Security",
                    description: "Netzwerksicherheit: Firewalls, IDS/IPS, Segmentierung",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [150, 350, 700, 1400, 2800],
                    prerequisites: ["security_fundamentals"],
                    unlocks: ["advanced_monitoring", "network_forensics"],
                    benefits: {
                        1: "Firewall-Regeln verstehen und konfigurieren",
                        2: "IDS/IPS-Systeme einrichten",
                        3: "Netzwerk-Segmentierung implementieren",
                        4: "Zero Trust Architecture verstehen",
                        5: "Enterprise Network Security Design"
                    }
                },

                incident_response_basics: {
                    id: "incident_response_basics",
                    name: "Incident Response Basics",
                    description: "Grundlagen der Incident Response nach NIST Framework",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [200, 400, 800, 1600, 3200],
                    prerequisites: ["security_fundamentals"],
                    unlocks: ["advanced_incident_response", "digital_forensics"],
                    benefits: {
                        1: "Incident Classification und Prioritization",
                        2: "Containment Strategien umsetzen",
                        3: "Evidence Collection durchführen",
                        4: "Post-Incident Analysis leiten",
                        5: "IR Playbooks entwickeln"
                    }
                },

                vulnerability_assessment: {
                    id: "vulnerability_assessment",
                    name: "Vulnerability Assessment",
                    description: "Schwachstellenanalyse und -management",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [150, 350, 700, 1400, 2800],
                    prerequisites: ["security_fundamentals"],
                    unlocks: ["penetration_testing", "risk_management"],
                    benefits: {
                        1: "Vulnerability Scanner bedienen",
                        2: "CVSS Scores interpretieren",
                        3: "Vulnerability Prioritization",
                        4: "Patch Management Prozesse",
                        5: "Enterprise Vulnerability Program"
                    }
                },

                // Tier 3 - Advanced
                advanced_monitoring: {
                    id: "advanced_monitoring",
                    name: "Advanced Security Monitoring",
                    description: "SIEM, SOAR, Threat Hunting",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [300, 600, 1200, 2400, 4800],
                    prerequisites: ["network_security"],
                    unlocks: ["threat_intelligence", "soc_leadership"],
                    benefits: {
                        1: "SIEM-Regeln erstellen und tunen",
                        2: "Custom Detection Logic entwickeln",
                        3: "Threat Hunting Methodologien",
                        4: "SOAR-Workflows implementieren",
                        5: "Advanced Persistent Threat Detection"
                    }
                },

                advanced_incident_response: {
                    id: "advanced_incident_response",
                    name: "Advanced Incident Response",
                    description: "Complex Incident Handling, Coordination, Leadership",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [400, 800, 1600, 3200, 6400],
                    prerequisites: ["incident_response_basics"],
                    unlocks: ["crisis_management", "business_continuity"],
                    benefits: {
                        1: "Multi-Vector Attack Response",
                        2: "Incident Command System",
                        3: "Stakeholder Communication",
                        4: "Crisis Decision Making",
                        5: "Enterprise IR Program Leadership"
                    }
                },

                digital_forensics: {
                    id: "digital_forensics",
                    name: "Digital Forensics",
                    description: "Computer- und Netzwerk-Forensik",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [500, 1000, 2000, 4000, 8000],
                    prerequisites: ["incident_response_basics"],
                    unlocks: ["malware_analysis", "expert_witness"],
                    benefits: {
                        1: "Disk Imaging und Chain of Custody",
                        2: "File System Analysis",
                        3: "Memory Forensics",
                        4: "Network Forensics",
                        5: "Mobile und Cloud Forensics"
                    }
                },

                // Tier 4 - Expert
                threat_intelligence: {
                    id: "threat_intelligence",
                    name: "Threat Intelligence",
                    description: "CTI Analysis, Attribution, Strategic Intelligence",
                    tier: 4,
                    maxLevel: 5,
                    experienceRequired: [600, 1200, 2400, 4800, 9600],
                    prerequisites: ["advanced_monitoring"],
                    unlocks: ["strategic_security"],
                    benefits: {
                        1: "IOC Analysis und STIX/TAXII",
                        2: "TTP Mapping (MITRE ATT&CK)",
                        3: "Threat Actor Profiling",
                        4: "Strategic Threat Assessment",
                        5: "National Security Intelligence"
                    }
                },

                malware_analysis: {
                    id: "malware_analysis",
                    name: "Malware Analysis",
                    description: "Static und Dynamic Malware Analysis",
                    tier: 4,
                    maxLevel: 5,
                    experienceRequired: [800, 1600, 3200, 6400, 12800],
                    prerequisites: ["digital_forensics"],
                    unlocks: ["reverse_engineering"],
                    benefits: {
                        1: "Static Analysis Techniken",
                        2: "Dynamic Analysis in Sandbox",
                        3: "Code Deobfuscation",
                        4: "Advanced Evasion Techniques",
                        5: "Zero-Day Malware Research"
                    }
                }
            }
        };

        // Offensive Security Skill Tree
        this.skillTrees.offensive = {
            id: "offensive",
            name: "⚔️ Offensive Security",
            description: "Penetration Testing, Red Teaming, Ethical Hacking",
            color: "#dc3545",
            icon: "⚔️",
            skills: {
                // Tier 1 - Foundation
                ethical_hacking_basics: {
                    id: "ethical_hacking_basics",
                    name: "Ethical Hacking Basics",
                    description: "Grundlagen des ethischen Hackings und Penetration Testing",
                    tier: 1,
                    maxLevel: 5,
                    experienceRequired: [100, 250, 500, 1000, 2000],
                    prerequisites: [],
                    unlocks: ["web_application_testing", "network_penetration", "social_engineering"],
                    benefits: {
                        1: "Grundlegende Hacking-Methoden verstehen",
                        2: "Reconnaissance und Information Gathering",
                        3: "Scanning und Enumeration",
                        4: "Basic Exploitation Techniken",
                        5: "Pentesting Methodology (OWASP, NIST)"
                    }
                },

                // Tier 2 - Specialization
                web_application_testing: {
                    id: "web_application_testing",
                    name: "Web Application Security Testing",
                    description: "OWASP Top 10, Web App Penetration Testing",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [200, 400, 800, 1600, 3200],
                    prerequisites: ["ethical_hacking_basics"],
                    unlocks: ["api_security_testing", "mobile_app_testing"],
                    benefits: {
                        1: "OWASP Top 10 Vulnerabilities",
                        2: "SQL Injection und XSS",
                        3: "Authentication und Session Management",
                        4: "Business Logic Testing",
                        5: "Advanced Web App Attacks"
                    }
                },

                network_penetration: {
                    id: "network_penetration",
                    name: "Network Penetration Testing",
                    description: "Netzwerk-Infrastruktur Testing",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [250, 500, 1000, 2000, 4000],
                    prerequisites: ["ethical_hacking_basics"],
                    unlocks: ["wireless_security", "active_directory_attacks"],
                    benefits: {
                        1: "Port Scanning und Service Enumeration",
                        2: "Network Service Exploitation",
                        3: "Privilege Escalation",
                        4: "Lateral Movement Techniken",
                        5: "Advanced Persistent Access"
                    }
                },

                social_engineering: {
                    id: "social_engineering",
                    name: "Social Engineering",
                    description: "Human-based Attacks und Psychological Manipulation",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [150, 350, 700, 1400, 2800],
                    prerequisites: ["ethical_hacking_basics"],
                    unlocks: ["physical_security", "osint_advanced"],
                    benefits: {
                        1: "Phishing Campaign Development",
                        2: "Vishing und Smishing Techniken",
                        3: "Pretexting und Impersonation",
                        4: "Psychological Profiling",
                        5: "Advanced Social Engineering Operations"
                    }
                },

                // Tier 3 - Advanced
                active_directory_attacks: {
                    id: "active_directory_attacks",
                    name: "Active Directory Attacks",
                    description: "Windows Domain Exploitation",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [400, 800, 1600, 3200, 6400],
                    prerequisites: ["network_penetration"],
                    unlocks: ["red_team_operations"],
                    benefits: {
                        1: "Kerberoasting und ASREPRoasting",
                        2: "Golden und Silver Tickets",
                        3: "DCSync und DCShadow",
                        4: "Trust Relationship Exploitation",
                        5: "Advanced AD Persistence"
                    }
                },

                red_team_operations: {
                    id: "red_team_operations",
                    name: "Red Team Operations",
                    description: "Advanced Persistent Threat Simulation",
                    tier: 4,
                    maxLevel: 5,
                    experienceRequired: [800, 1600, 3200, 6400, 12800],
                    prerequisites: ["active_directory_attacks", "social_engineering"],
                    unlocks: ["advanced_evasion"],
                    benefits: {
                        1: "C2 Framework Development",
                        2: "Living off the Land Techniken",
                        3: "Advanced Persistence Mechanisms",
                        4: "Attribution Avoidance",
                        5: "Nation-State Actor Simulation"
                    }
                }
            }
        };

        // Cloud Security Skill Tree
        this.skillTrees.cloud_security = {
            id: "cloud_security",
            name: "☁️ Cloud Security",
            description: "AWS, Azure, GCP Security und Cloud-Native Protection",
            color: "#17a2b8",
            icon: "☁️",
            skills: {
                cloud_fundamentals: {
                    id: "cloud_fundamentals",
                    name: "Cloud Security Fundamentals",
                    description: "Shared Responsibility Model, Cloud Architecture Security",
                    tier: 1,
                    maxLevel: 5,
                    experienceRequired: [100, 250, 500, 1000, 2000],
                    prerequisites: [],
                    unlocks: ["aws_security", "azure_security", "gcp_security"],
                    benefits: {
                        1: "Cloud Service Models verstehen",
                        2: "Shared Responsibility Model",
                        3: "Cloud Security Best Practices",
                        4: "Multi-Cloud Strategy",
                        5: "Cloud Security Architecture"
                    }
                },

                aws_security: {
                    id: "aws_security",
                    name: "AWS Security",
                    description: "Amazon Web Services Security Services",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [200, 400, 800, 1600, 3200],
                    prerequisites: ["cloud_fundamentals"],
                    unlocks: ["container_security", "serverless_security"],
                    benefits: {
                        1: "IAM Policies und Roles",
                        2: "VPC Security Groups",
                        3: "CloudTrail und GuardDuty",
                        4: "AWS Security Hub",
                        5: "Advanced AWS Security Services"
                    }
                },

                container_security: {
                    id: "container_security",
                    name: "Container Security",
                    description: "Docker, Kubernetes Security",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [300, 600, 1200, 2400, 4800],
                    prerequisites: ["aws_security"],
                    unlocks: ["devsecops"],
                    benefits: {
                        1: "Container Image Scanning",
                        2: "Runtime Security",
                        3: "Kubernetes Security Policies",
                        4: "Service Mesh Security",
                        5: "Container Attack Surface Reduction"
                    }
                }
            }
        };

        // Governance, Risk & Compliance Skill Tree
        this.skillTrees.grc = {
            id: "grc",
            name: "⚖️ Governance, Risk & Compliance",
            description: "Regulatory Compliance, Risk Management, Security Governance",
            color: "#28a745",
            icon: "⚖️",
            skills: {
                compliance_fundamentals: {
                    id: "compliance_fundamentals",
                    name: "Compliance Fundamentals",
                    description: "DSGVO, ISO 27001, SOC 2, PCI DSS Grundlagen",
                    tier: 1,
                    maxLevel: 5,
                    experienceRequired: [100, 250, 500, 1000, 2000],
                    prerequisites: [],
                    unlocks: ["risk_management", "audit_management", "privacy_engineering"],
                    benefits: {
                        1: "Regulatory Landscape verstehen",
                        2: "Compliance Gap Analysis",
                        3: "Control Implementation",
                        4: "Audit Preparation",
                        5: "Compliance Program Management"
                    }
                },

                risk_management: {
                    id: "risk_management",
                    name: "Risk Management",
                    description: "Quantitative und Qualitative Risikobewertung",
                    tier: 2,
                    maxLevel: 5,
                    experienceRequired: [200, 400, 800, 1600, 3200],
                    prerequisites: ["compliance_fundamentals"],
                    unlocks: ["business_continuity", "third_party_risk"],
                    benefits: {
                        1: "Risk Assessment Methodologies",
                        2: "Risk Register Management",
                        3: "Quantitative Risk Analysis",
                        4: "Risk Treatment Strategies",
                        5: "Enterprise Risk Management"
                    }
                }
            }
        };

        // Application Security Skill Tree
        this.skillTrees.appsec = {
            id: "appsec",
            name: "🔐 Application Security",
            description: "Secure Development, Code Review, DevSecOps",
            color: "#6f42c1",
            icon: "🔐",
            skills: {
                secure_coding: {
                    id: "secure_coding",
                    name: "Secure Coding Practices",
                    description: "Sichere Programmierung in verschiedenen Sprachen",
                    tier: 1,
                    maxLevel: 5,
                    experienceRequired: [150, 300, 600, 1200, 2400],
                    prerequisites: [],
                    unlocks: ["code_review", "sast_dast"],
                    benefits: {
                        1: "Input Validation und Sanitization",
                        2: "Authentication und Authorization",
                        3: "Cryptographic Implementation",
                        4: "Secure Architecture Patterns",
                        5: "Security Design Principles"
                    }
                },

                devsecops: {
                    id: "devsecops",
                    name: "DevSecOps",
                    description: "Security in CI/CD Pipelines",
                    tier: 3,
                    maxLevel: 5,
                    experienceRequired: [400, 800, 1600, 3200, 6400],
                    prerequisites: ["secure_coding", "container_security"],
                    unlocks: ["security_automation"],
                    benefits: {
                        1: "Security in CI/CD Pipeline",
                        2: "Infrastructure as Code Security",
                        3: "Automated Security Testing",
                        4: "Security Orchestration",
                        5: "Zero Trust Development"
                    }
                }
            }
        };

        // Initialize skill dependencies
        this.buildPrerequisiteMap();
    }

    buildPrerequisiteMap() {
        Object.values(this.skillTrees).forEach(tree => {
            Object.values(tree.skills).forEach(skill => {
                this.prerequisites.set(skill.id, skill.prerequisites || []);
            });
        });
    }

    initializeUserSkills(userId) {
        if (!this.userSkills.has(userId)) {
            this.userSkills.set(userId, new Map());
            this.skillExperience.set(userId, new Map());
        }
    }

    addExperience(userId, skillId, amount, source = 'general') {
        this.initializeUserSkills(userId);
        
        const userExp = this.skillExperience.get(userId);
        const currentExp = userExp.get(skillId) || 0;
        const newExp = currentExp + amount;
        
        userExp.set(skillId, newExp);
        
        // Check for level up
        const currentLevel = this.getSkillLevel(userId, skillId);
        const newLevel = this.calculateLevelFromExperience(skillId, newExp);
        
        if (newLevel > currentLevel) {
            this.levelUpSkill(userId, skillId, newLevel, source);
        }

        // Check for skill unlocks
        this.checkSkillUnlocks(userId, skillId);

        return {
            experienceGained: amount,
            totalExperience: newExp,
            currentLevel: newLevel,
            leveledUp: newLevel > currentLevel,
            source: source
        };
    }

    calculateLevelFromExperience(skillId, experience) {
        const skill = this.findSkill(skillId);
        if (!skill) return 0;

        for (let level = 1; level <= skill.maxLevel; level++) {
            const requiredExp = skill.experienceRequired[level - 1];
            if (experience < requiredExp) {
                return level - 1;
            }
        }
        
        return skill.maxLevel;
    }

    levelUpSkill(userId, skillId, newLevel, source) {
        const userSkills = this.userSkills.get(userId);
        const oldLevel = userSkills.get(skillId) || 0;
        
        userSkills.set(skillId, newLevel);

        // Award achievements for level milestones
        if (window.achievementSystem) {
            window.achievementSystem.updateProgress(userId, 'skill_developer', 1);
            
            if (newLevel === 5) {
                window.achievementSystem.updateProgress(userId, 'skill_master', 1);
            }
            
            if (newLevel >= 3) {
                window.achievementSystem.updateProgress(userId, 'specialist', 1);
            }
        }

        // Broadcast level up event
        this.broadcastLevelUp(userId, skillId, oldLevel, newLevel, source);

        return true;
    }

    checkSkillUnlocks(userId, skillId) {
        const skill = this.findSkill(skillId);
        if (!skill || !skill.unlocks) return;

        const userLevel = this.getSkillLevel(userId, skillId);
        if (userLevel === 0) return;

        skill.unlocks.forEach(unlockedSkillId => {
            if (this.canUnlockSkill(userId, unlockedSkillId)) {
                this.unlockSkill(userId, unlockedSkillId);
            }
        });
    }

    canUnlockSkill(userId, skillId) {
        const prerequisites = this.prerequisites.get(skillId) || [];
        
        return prerequisites.every(prereqId => {
            const prereqLevel = this.getSkillLevel(userId, prereqId);
            return prereqLevel > 0;
        });
    }

    unlockSkill(userId, skillId) {
        // Skill is automatically "unlocked" when prerequisites are met
        // No explicit unlock needed, just track that it's available
        
        this.broadcastSkillUnlock(userId, skillId);
    }

    getSkillLevel(userId, skillId) {
        this.initializeUserSkills(userId);
        return this.userSkills.get(userId).get(skillId) || 0;
    }

    getSkillExperience(userId, skillId) {
        this.initializeUserSkills(userId);
        return this.skillExperience.get(userId).get(skillId) || 0;
    }

    findSkill(skillId) {
        for (const tree of Object.values(this.skillTrees)) {
            if (tree.skills[skillId]) {
                return tree.skills[skillId];
            }
        }
        return null;
    }

    findSkillTree(skillId) {
        for (const [treeId, tree] of Object.entries(this.skillTrees)) {
            if (tree.skills[skillId]) {
                return { treeId, tree };
            }
        }
        return null;
    }

    getUserSkillSummary(userId) {
        this.initializeUserSkills(userId);
        
        const summary = {
            totalSkills: 0,
            totalLevels: 0,
            maxedSkills: 0,
            trees: {}
        };

        Object.entries(this.skillTrees).forEach(([treeId, tree]) => {
            summary.trees[treeId] = {
                name: tree.name,
                skills: 0,
                levels: 0,
                maxed: 0,
                available: 0
            };

            Object.keys(tree.skills).forEach(skillId => {
                const level = this.getSkillLevel(userId, skillId);
                const skill = tree.skills[skillId];
                
                if (level > 0) {
                    summary.totalSkills++;
                    summary.totalLevels += level;
                    summary.trees[treeId].skills++;
                    summary.trees[treeId].levels += level;
                    
                    if (level === skill.maxLevel) {
                        summary.maxedSkills++;
                        summary.trees[treeId].maxed++;
                    }
                }

                if (this.canUnlockSkill(userId, skillId)) {
                    summary.trees[treeId].available++;
                }
            });
        });

        return summary;
    }

    getExperienceSources() {
        return {
            'quiz_completion': { multiplier: 1.0, description: 'Quiz erfolgreich abgeschlossen' },
            'scenario_success': { multiplier: 1.5, description: 'Szenario erfolgreich gelöst' },
            'team_challenge': { multiplier: 2.0, description: 'Team Challenge Teilnahme' },
            'red_vs_blue': { multiplier: 2.5, description: 'Red vs Blue Exercise' },
            'escape_room': { multiplier: 1.8, description: 'Escape Room abgeschlossen' },
            'industry_training': { multiplier: 1.3, description: 'Branchenspezifische Schulung' },
            'daily_challenge': { multiplier: 0.8, description: 'Tägliche Herausforderung' },
            'achievement_unlock': { multiplier: 3.0, description: 'Achievement freigeschaltet' },
            'perfect_score': { multiplier: 2.0, description: 'Perfekte Punktzahl erreicht' },
            'consecutive_days': { multiplier: 1.2, description: 'Aufeinanderfolgende Tage aktiv' }
        };
    }

    awardExperienceForActivity(userId, activity, baseExperience, relatedSkills = []) {
        const sources = this.getExperienceSources();
        const source = sources[activity] || { multiplier: 1.0, description: activity };
        
        const finalExperience = Math.round(baseExperience * source.multiplier);
        const results = [];

        if (relatedSkills.length === 0) {
            // If no specific skills provided, award to most relevant skills based on activity
            relatedSkills = this.getRelevantSkillsForActivity(activity);
        }

        relatedSkills.forEach(skillId => {
            const result = this.addExperience(userId, skillId, finalExperience, activity);
            results.push({
                skillId,
                ...result
            });
        });

        return results;
    }

    getRelevantSkillsForActivity(activity) {
        const activitySkillMap = {
            'quiz_completion': ['security_fundamentals'],
            'scenario_success': ['incident_response_basics', 'vulnerability_assessment'],
            'team_challenge': ['advanced_incident_response', 'crisis_management'],
            'red_vs_blue': ['ethical_hacking_basics', 'network_penetration', 'advanced_monitoring'],
            'escape_room': ['digital_forensics', 'malware_analysis'],
            'industry_training': ['compliance_fundamentals', 'risk_management'],
            'web_security_test': ['web_application_testing', 'secure_coding'],
            'network_analysis': ['network_security', 'network_penetration'],
            'malware_analysis': ['malware_analysis', 'digital_forensics'],
            'cloud_exercise': ['cloud_fundamentals', 'aws_security']
        };

        return activitySkillMap[activity] || ['security_fundamentals'];
    }

    renderSkillTrees(userId) {
        this.initializeUserSkills(userId);
        const summary = this.getUserSkillSummary(userId);

        return `
            <div class="skill-trees-container">
                <div class="skill-trees-header">
                    <h1>🎯 Skill Trees</h1>
                    <p>Entwickeln Sie Ihre Cybersecurity-Kompetenzen</p>
                </div>
                
                <div class="skill-summary">
                    <h2>📊 Ihre Fortschritte</h2>
                    <div class="summary-stats">
                        <div class="stat-card">
                            <span class="stat-number">${summary.totalSkills}</span>
                            <span class="stat-label">Entwickelte Skills</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">${summary.totalLevels}</span>
                            <span class="stat-label">Gesamt Level</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">${summary.maxedSkills}</span>
                            <span class="stat-label">Meisterhafte Skills</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">${this.calculateSkillPoints(userId)}</span>
                            <span class="stat-label">Skill Points</span>
                        </div>
                    </div>
                </div>
                
                <div class="skill-trees-grid">
                    ${Object.entries(this.skillTrees).map(([treeId, tree]) => 
                        this.renderSkillTree(userId, treeId, tree, summary.trees[treeId])
                    ).join('')}
                </div>
            </div>
        `;
    }

    renderSkillTree(userId, treeId, tree, treeSummary) {
        return `
            <div class="skill-tree-card" onclick="skillTree.showDetailedTree('${treeId}')">
                <div class="tree-header" style="background: ${tree.color}">
                    <div class="tree-icon">${tree.icon}</div>
                    <div class="tree-info">
                        <h3>${tree.name}</h3>
                        <p>${tree.description}</p>
                    </div>
                </div>
                
                <div class="tree-stats">
                    <div class="tree-stat">
                        <span class="stat-number">${treeSummary.skills}</span>
                        <span class="stat-label">Aktive Skills</span>
                    </div>
                    <div class="tree-stat">
                        <span class="stat-number">${treeSummary.levels}</span>
                        <span class="stat-label">Level</span>
                    </div>
                    <div class="tree-stat">
                        <span class="stat-number">${treeSummary.maxed}</span>
                        <span class="stat-label">Gemeistert</span>
                    </div>
                    <div class="tree-stat">
                        <span class="stat-number">${treeSummary.available}</span>
                        <span class="stat-label">Verfügbar</span>
                    </div>
                </div>
                
                <div class="skills-preview">
                    ${this.renderSkillsPreview(userId, tree)}
                </div>
                
                <div class="tree-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.calculateTreeProgress(userId, tree)}%; background: ${tree.color}"></div>
                    </div>
                    <span class="progress-text">${Math.round(this.calculateTreeProgress(userId, tree))}% Fortschritt</span>
                </div>
            </div>
        `;
    }

    renderSkillsPreview(userId, tree) {
        const skills = Object.values(tree.skills);
        const previewSkills = skills.slice(0, 6);
        
        return previewSkills.map(skill => {
            const level = this.getSkillLevel(userId, skill.id);
            const canUnlock = this.canUnlockSkill(userId, skill.id);
            
            return `
                <div class="skill-preview ${level > 0 ? 'unlocked' : canUnlock ? 'available' : 'locked'}">
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-level">
                        ${level > 0 ? `Level ${level}/${skill.maxLevel}` : canUnlock ? 'Verfügbar' : 'Gesperrt'}
                    </div>
                </div>
            `;
        }).join('');
    }

    calculateTreeProgress(userId, tree) {
        const skills = Object.values(tree.skills);
        let totalPossibleLevels = 0;
        let currentLevels = 0;
        
        skills.forEach(skill => {
            totalPossibleLevels += skill.maxLevel;
            currentLevels += this.getSkillLevel(userId, skill.id);
        });
        
        return totalPossibleLevels > 0 ? (currentLevels / totalPossibleLevels) * 100 : 0;
    }

    calculateSkillPoints(userId) {
        this.initializeUserSkills(userId);
        let points = 0;
        
        Object.values(this.skillTrees).forEach(tree => {
            Object.values(tree.skills).forEach(skill => {
                const level = this.getSkillLevel(userId, skill.id);
                points += level * skill.tier * 10; // Points = level * tier * 10
            });
        });
        
        return points;
    }

    showDetailedTree(treeId) {
        const tree = this.skillTrees[treeId];
        if (!tree) return;

        const modal = document.createElement('div');
        modal.className = 'skill-tree-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header" style="background: ${tree.color}">
                    <h2>${tree.icon} ${tree.name}</h2>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                
                <div class="detailed-tree-content">
                    ${this.renderDetailedSkillTree('current_user', treeId, tree)}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    renderDetailedSkillTree(userId, treeId, tree) {
        const skillsByTier = {};
        
        Object.values(tree.skills).forEach(skill => {
            if (!skillsByTier[skill.tier]) {
                skillsByTier[skill.tier] = [];
            }
            skillsByTier[skill.tier].push(skill);
        });

        const maxTier = Math.max(...Object.keys(skillsByTier).map(Number));
        
        return `
            <div class="detailed-skill-tree">
                ${Array.from({length: maxTier}, (_, i) => i + 1).map(tier => `
                    <div class="skill-tier">
                        <h3>Tier ${tier}</h3>
                        <div class="skills-row">
                            ${(skillsByTier[tier] || []).map(skill => 
                                this.renderDetailedSkill(userId, skill)
                            ).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderDetailedSkill(userId, skill) {
        const level = this.getSkillLevel(userId, skill.id);
        const experience = this.getSkillExperience(userId, skill.id);
        const canUnlock = this.canUnlockSkill(userId, skill.id);
        const nextLevelExp = level < skill.maxLevel ? skill.experienceRequired[level] : null;
        
        let status = 'locked';
        if (level > 0) status = 'unlocked';
        else if (canUnlock) status = 'available';

        return `
            <div class="detailed-skill ${status}" onclick="skillTree.showSkillDetails('${skill.id}')">
                <div class="skill-header">
                    <h4>${skill.name}</h4>
                    <div class="skill-level-indicator">
                        ${Array.from({length: skill.maxLevel}, (_, i) => 
                            `<div class="level-dot ${i < level ? 'filled' : ''}"></div>`
                        ).join('')}
                    </div>
                </div>
                
                <p class="skill-description">${skill.description}</p>
                
                <div class="skill-progress-details">
                    <div class="experience-info">
                        <span>XP: ${experience}</span>
                        ${nextLevelExp ? `<span>Next: ${nextLevelExp}</span>` : ''}
                    </div>
                    
                    ${level > 0 && level < skill.maxLevel ? `
                        <div class="experience-bar">
                            <div class="exp-fill" style="width: ${(experience / nextLevelExp) * 100}%"></div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="skill-benefits">
                    <h5>Level ${Math.min(level + 1, skill.maxLevel)} Benefit:</h5>
                    <p>${skill.benefits[Math.min(level + 1, skill.maxLevel)]}</p>
                </div>
                
                ${skill.prerequisites.length > 0 ? `
                    <div class="prerequisites">
                        <h5>Voraussetzungen:</h5>
                        <ul>
                            ${skill.prerequisites.map(prereqId => {
                                const prereqSkill = this.findSkill(prereqId);
                                const prereqLevel = this.getSkillLevel(userId, prereqId);
                                return `<li class="${prereqLevel > 0 ? 'met' : 'unmet'}">${prereqSkill ? prereqSkill.name : prereqId}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    }

    broadcastLevelUp(userId, skillId, oldLevel, newLevel, source) {
        const skill = this.findSkill(skillId);
        const event = new CustomEvent('skillLevelUp', {
            detail: {
                userId,
                skillId,
                skillName: skill ? skill.name : skillId,
                oldLevel,
                newLevel,
                source
            }
        });
        document.dispatchEvent(event);
    }

    broadcastSkillUnlock(userId, skillId) {
        const skill = this.findSkill(skillId);
        const event = new CustomEvent('skillUnlocked', {
            detail: {
                userId,
                skillId,
                skillName: skill ? skill.name : skillId
            }
        });
        document.dispatchEvent(event);
    }

    showSkillDetails(skillId) {
        const skill = this.findSkill(skillId);
        if (!skill) return;

        alert(`${skill.name}\n\n${skill.description}\n\nPraktische Anwendungen:\n${skill.practicalApplications ? skill.practicalApplications.join('\n') : 'Keine spezifischen Anwendungen definiert'}`);
    }
}

// CSS for Skill Tree System
const skillTreeCSS = `
    .skill-trees-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .skill-trees-header {
        text-align: center;
        background: linear-gradient(135deg, #6f42c1 0%, #007bff 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .skill-trees-header h1 {
        margin: 0 0 15px 0;
        font-size: 2.5em;
    }
    
    .skill-summary {
        background: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .skill-summary h2 {
        margin: 0 0 20px 0;
        color: #2c3e50;
    }
    
    .summary-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
    
    .stat-card {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 25px;
        border-radius: 15px;
        text-align: center;
        border-left: 4px solid #007bff;
    }
    
    .stat-number {
        display: block;
        font-size: 2.5em;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .stat-label {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .skill-trees-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 25px;
    }
    
    .skill-tree-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .skill-tree-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .tree-header {
        padding: 25px;
        color: white;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .tree-icon {
        font-size: 2.5em;
    }
    
    .tree-info h3 {
        margin: 0 0 8px 0;
        font-size: 1.3em;
    }
    
    .tree-info p {
        margin: 0;
        opacity: 0.9;
        font-size: 0.9em;
    }
    
    .tree-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 20px;
        background: #f8f9fa;
    }
    
    .tree-stat {
        text-align: center;
        padding: 10px;
    }
    
    .tree-stat .stat-number {
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        color: #2c3e50;
    }
    
    .tree-stat .stat-label {
        display: block;
        font-size: 0.8em;
        color: #6c757d;
        margin-top: 5px;
    }
    
    .skills-preview {
        padding: 20px;
    }
    
    .skill-preview {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #e9ecef;
    }
    
    .skill-preview:last-child {
        border-bottom: none;
    }
    
    .skill-name {
        font-weight: 500;
        color: #2c3e50;
    }
    
    .skill-level {
        font-size: 0.8em;
        padding: 2px 8px;
        border-radius: 12px;
    }
    
    .skill-preview.unlocked .skill-level {
        background: #d4edda;
        color: #155724;
    }
    
    .skill-preview.available .skill-level {
        background: #fff3cd;
        color: #856404;
    }
    
    .skill-preview.locked .skill-level {
        background: #f8d7da;
        color: #721c24;
    }
    
    .skill-preview.locked .skill-name {
        color: #6c757d;
    }
    
    .tree-progress {
        padding: 20px;
        background: #f8f9fa;
    }
    
    .progress-bar {
        background: #e9ecef;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 8px;
    }
    
    .progress-fill {
        height: 100%;
        transition: width 0.5s ease;
    }
    
    .progress-text {
        font-size: 0.9em;
        color: #6c757d;
    }
    
    .skill-tree-modal {
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
    
    .skill-tree-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 90vw;
        max-height: 80vh;
        overflow-y: auto;
        padding: 0;
    }
    
    .skill-tree-modal .modal-header {
        padding: 20px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
    }
    
    .skill-tree-modal .modal-header button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }
    
    .detailed-tree-content {
        padding: 30px;
    }
    
    .detailed-skill-tree {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .skill-tier {
        border: 2px solid #e9ecef;
        border-radius: 15px;
        padding: 20px;
        background: #f8f9fa;
    }
    
    .skill-tier h3 {
        margin: 0 0 20px 0;
        color: #2c3e50;
        text-align: center;
        padding: 10px;
        background: white;
        border-radius: 8px;
    }
    
    .skills-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .detailed-skill {
        background: white;
        border-radius: 15px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid #e9ecef;
    }
    
    .detailed-skill.unlocked {
        border-color: #28a745;
        background: linear-gradient(135deg, #f8fff9 0%, #ffffff 100%);
    }
    
    .detailed-skill.available {
        border-color: #ffc107;
        background: linear-gradient(135deg, #fffbf0 0%, #ffffff 100%);
    }
    
    .detailed-skill.locked {
        border-color: #dc3545;
        background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
        opacity: 0.7;
    }
    
    .detailed-skill:hover:not(.locked) {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
    
    .skill-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .skill-header h4 {
        margin: 0;
        color: #2c3e50;
    }
    
    .skill-level-indicator {
        display: flex;
        gap: 3px;
    }
    
    .level-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #007bff;
        background: transparent;
    }
    
    .level-dot.filled {
        background: #007bff;
    }
    
    .skill-description {
        color: #495057;
        margin-bottom: 15px;
        font-size: 0.9em;
        line-height: 1.4;
    }
    
    .skill-progress-details {
        margin-bottom: 15px;
    }
    
    .experience-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.8em;
        color: #6c757d;
        margin-bottom: 5px;
    }
    
    .experience-bar {
        height: 6px;
        background: #e9ecef;
        border-radius: 3px;
        overflow: hidden;
    }
    
    .exp-fill {
        height: 100%;
        background: #007bff;
        transition: width 0.5s ease;
    }
    
    .skill-benefits {
        background: #e3f2fd;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 15px;
    }
    
    .skill-benefits h5 {
        margin: 0 0 5px 0;
        color: #1976d2;
        font-size: 0.9em;
    }
    
    .skill-benefits p {
        margin: 0;
        font-size: 0.8em;
        color: #495057;
    }
    
    .prerequisites {
        border-top: 1px solid #e9ecef;
        padding-top: 10px;
    }
    
    .prerequisites h5 {
        margin: 0 0 8px 0;
        font-size: 0.9em;
        color: #6c757d;
    }
    
    .prerequisites ul {
        margin: 0;
        padding-left: 20px;
        font-size: 0.8em;
    }
    
    .prerequisites li.met {
        color: #28a745;
    }
    
    .prerequisites li.unmet {
        color: #dc3545;
    }
    
    @media (max-width: 768px) {
        .skill-trees-grid {
            grid-template-columns: 1fr;
        }
        
        .summary-stats {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .tree-stats {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .skills-row {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const skillTreeStyleSheet = document.createElement('style');
skillTreeStyleSheet.textContent = skillTreeCSS;
document.head.appendChild(skillTreeStyleSheet);

// Global instance
window.skillTree = new SkillTreeSystem();
