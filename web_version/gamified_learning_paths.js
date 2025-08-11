// Gamified Learning Paths - Advanced Gamification Engine for Cybersecurity Education
class GamifiedLearningPaths {
    constructor() {
        this.learningPaths = {};
        this.userProgress = new Map();
        this.achievements = {};
        this.challenges = {};
        this.leaderboards = new Map();
        this.questSystem = {};
        this.rewards = {};
        this.initializePaths();
    }

    initializePaths() {
        this.learningPaths = {
            security_novice: {
                id: "security_novice",
                title: "🌱 Security Novice Journey",
                description: "Complete introduction to cybersecurity fundamentals",
                difficulty: "beginner",
                estimatedHours: 40,
                prerequisites: [],
                levels: [
                    {
                        level: 1,
                        title: "Digital Footprint Awareness",
                        xpRequired: 0,
                        modules: ["password_basics", "email_security", "social_media_privacy"],
                        challengeTypes: ["quiz", "scenario"],
                        rewards: { xp: 500, badge: "first_steps", coins: 100 }
                    },
                    {
                        level: 2,
                        title: "Threat Recognition",
                        xpRequired: 500,
                        modules: ["phishing_detection", "malware_awareness", "safe_browsing"],
                        challengeTypes: ["simulation", "mini_game"],
                        rewards: { xp: 750, badge: "threat_spotter", coins: 150 }
                    },
                    {
                        level: 3,
                        title: "Personal Security Mastery",
                        xpRequired: 1250,
                        modules: ["device_security", "network_safety", "backup_strategies"],
                        challengeTypes: ["practical", "assessment"],
                        rewards: { xp: 1000, badge: "security_guardian", coins: 200, unlock: "security_analyst" }
                    }
                ],
                pathRewards: {
                    completion: { xp: 2500, badge: "novice_graduate", title: "Security Novice", coins: 500 }
                }
            },

            security_analyst: {
                id: "security_analyst",
                title: "🔍 Security Analyst Track",
                description: "Develop professional cybersecurity analysis skills",
                difficulty: "intermediate",
                estimatedHours: 80,
                prerequisites: ["security_novice"],
                levels: [
                    {
                        level: 1,
                        title: "Log Analysis Foundation",
                        xpRequired: 2500,
                        modules: ["log_fundamentals", "siem_basics", "incident_detection"],
                        challengeTypes: ["log_analysis", "pattern_recognition"],
                        rewards: { xp: 1200, badge: "log_detective", coins: 300 }
                    },
                    {
                        level: 2,
                        title: "Threat Hunting Basics",
                        xpRequired: 3700,
                        modules: ["threat_intelligence", "ioc_analysis", "hunting_methodology"],
                        challengeTypes: ["threat_hunt", "investigation"],
                        rewards: { xp: 1500, badge: "threat_hunter", coins: 400 }
                    },
                    {
                        level: 3,
                        title: "Incident Response",
                        xpRequired: 5200,
                        modules: ["response_procedures", "forensics_basics", "containment_strategies"],
                        challengeTypes: ["incident_simulation", "tabletop_exercise"],
                        rewards: { xp: 2000, badge: "incident_responder", coins: 500, unlock: "security_architect" }
                    }
                ],
                pathRewards: {
                    completion: { xp: 5000, badge: "analyst_expert", title: "Security Analyst", coins: 1000 }
                }
            },

            security_architect: {
                id: "security_architect",
                title: "🏗️ Security Architect Path",
                description: "Master enterprise security architecture and design",
                difficulty: "advanced",
                estimatedHours: 120,
                prerequisites: ["security_analyst"],
                levels: [
                    {
                        level: 1,
                        title: "Architecture Principles",
                        xpRequired: 7500,
                        modules: ["security_frameworks", "risk_assessment", "control_design"],
                        challengeTypes: ["architecture_design", "framework_mapping"],
                        rewards: { xp: 2500, badge: "architect_foundation", coins: 600 }
                    },
                    {
                        level: 2,
                        title: "Cloud Security Design",
                        xpRequired: 10000,
                        modules: ["cloud_architecture", "zero_trust", "identity_management"],
                        challengeTypes: ["cloud_design", "security_review"],
                        rewards: { xp: 3000, badge: "cloud_architect", coins: 800 }
                    },
                    {
                        level: 3,
                        title: "Enterprise Security Leadership",
                        xpRequired: 13000,
                        modules: ["governance", "compliance_management", "security_strategy"],
                        challengeTypes: ["strategy_design", "business_case"],
                        rewards: { xp: 4000, badge: "security_leader", coins: 1000, unlock: "ciso_track" }
                    }
                ],
                pathRewards: {
                    completion: { xp: 10000, badge: "master_architect", title: "Security Architect", coins: 2000 }
                }
            },

            specialized_paths: {
                penetration_tester: {
                    id: "penetration_tester",
                    title: "🎯 Ethical Hacker Journey",
                    description: "Learn ethical hacking and penetration testing",
                    difficulty: "advanced",
                    estimatedHours: 100,
                    prerequisites: ["security_analyst"],
                    specialization: "offensive_security"
                },
                
                incident_commander: {
                    id: "incident_commander",
                    title: "🚨 Incident Commander Track",
                    description: "Lead critical security incident response",
                    difficulty: "expert",
                    estimatedHours: 90,
                    prerequisites: ["security_analyst"],
                    specialization: "incident_response"
                },

                compliance_expert: {
                    id: "compliance_expert",
                    title: "📋 Compliance & Governance Master",
                    description: "Master regulatory compliance and governance",
                    difficulty: "advanced",
                    estimatedHours: 85,
                    prerequisites: ["security_analyst"],
                    specialization: "governance_risk_compliance"
                }
            }
        };

        this.initializeAchievements();
        this.initializeChallenges();
        this.initializeQuestSystem();
        this.initializeRewards();
    }

    initializeAchievements() {
        this.achievements = {
            // Learning Milestones
            first_steps: {
                id: "first_steps",
                title: "🚀 First Steps",
                description: "Complete your first security module",
                icon: "🌟",
                rarity: "common",
                xpBonus: 50,
                coinBonus: 25
            },

            speed_learner: {
                id: "speed_learner",
                title: "⚡ Speed Learner",
                description: "Complete 5 modules in one day",
                icon: "⚡",
                rarity: "rare",
                xpBonus: 200,
                coinBonus: 100
            },

            perfectionist: {
                id: "perfectionist",
                title: "💎 Perfectionist",
                description: "Score 100% on 10 consecutive assessments",
                icon: "💎",
                rarity: "legendary",
                xpBonus: 500,
                coinBonus: 250
            },

            // Challenge Achievements
            phishing_master: {
                id: "phishing_master",
                title: "🎣 Phishing Master",
                description: "Identify 100 phishing attempts correctly",
                icon: "🛡️",
                rarity: "epic",
                xpBonus: 300,
                coinBonus: 150
            },

            incident_hero: {
                id: "incident_hero",
                title: "🦸 Incident Hero",
                description: "Successfully resolve 5 critical incidents",
                icon: "🦸",
                rarity: "legendary",
                xpBonus: 750,
                coinBonus: 400
            },

            // Social Achievements
            mentor: {
                id: "mentor",
                title: "👨‍🏫 Mentor",
                description: "Help 10 other learners complete modules",
                icon: "👨‍🏫",
                rarity: "epic",
                xpBonus: 400,
                coinBonus: 200
            },

            team_player: {
                id: "team_player",
                title: "🤝 Team Player",
                description: "Participate in 5 team challenges",
                icon: "🤝",
                rarity: "rare",
                xpBonus: 250,
                coinBonus: 125
            },

            // Streak Achievements
            consistent_learner: {
                id: "consistent_learner",
                title: "📅 Consistent Learner",
                description: "Learn something every day for 30 days",
                icon: "📅",
                rarity: "epic",
                xpBonus: 600,
                coinBonus: 300
            },

            // Specialized Achievements
            zero_day_hunter: {
                id: "zero_day_hunter",
                title: "🕵️ Zero-Day Hunter",
                description: "Discover a previously unknown vulnerability",
                icon: "🕵️",
                rarity: "legendary",
                xpBonus: 1000,
                coinBonus: 500
            }
        };
    }

    initializeChallenges() {
        this.challenges = {
            daily_challenges: {
                phishing_spotter: {
                    id: "phishing_spotter",
                    title: "📧 Daily Phishing Challenge",
                    description: "Identify phishing emails from a mix of legitimate and malicious messages",
                    type: "daily",
                    difficulty: "medium",
                    timeLimit: 10, // minutes
                    rewards: { xp: 100, coins: 50 },
                    refreshInterval: "daily"
                },

                vulnerability_scanner: {
                    id: "vulnerability_scanner",
                    title: "🔍 Vulnerability Hunt",
                    description: "Find security vulnerabilities in simulated network configurations",
                    type: "daily",
                    difficulty: "hard",
                    timeLimit: 15,
                    rewards: { xp: 150, coins: 75 },
                    refreshInterval: "daily"
                }
            },

            weekly_challenges: {
                incident_response_drill: {
                    id: "incident_response_drill",
                    title: "🚨 Weekly Incident Response",
                    description: "Lead a team through a complex security incident scenario",
                    type: "weekly",
                    difficulty: "expert",
                    timeLimit: 60,
                    rewards: { xp: 500, coins: 250, badge: "weekly_hero" },
                    refreshInterval: "weekly",
                    teamBased: true
                },

                architecture_review: {
                    id: "architecture_review",
                    title: "🏗️ Security Architecture Review",
                    description: "Design secure architecture for a given business scenario",
                    type: "weekly",
                    difficulty: "advanced",
                    timeLimit: 45,
                    rewards: { xp: 400, coins: 200 },
                    refreshInterval: "weekly"
                }
            },

            special_events: {
                capture_the_flag: {
                    id: "capture_the_flag",
                    title: "🏁 Monthly CTF Challenge",
                    description: "Compete in comprehensive capture-the-flag competition",
                    type: "monthly",
                    difficulty: "expert",
                    timeLimit: 180, // 3 hours
                    rewards: { xp: 1000, coins: 500, badge: "ctf_champion" },
                    refreshInterval: "monthly",
                    competitive: true
                },

                security_hackathon: {
                    id: "security_hackathon",
                    title: "💻 Security Innovation Hackathon",
                    description: "Develop innovative security solutions in 24-hour challenge",
                    type: "quarterly",
                    difficulty: "expert",
                    timeLimit: 1440, // 24 hours
                    rewards: { xp: 2000, coins: 1000, badge: "innovator" },
                    refreshInterval: "quarterly",
                    teamBased: true
                }
            }
        };
    }

    initializeQuestSystem() {
        this.questSystem = {
            main_quests: {
                path_to_mastery: {
                    id: "path_to_mastery",
                    title: "🎯 Path to Security Mastery",
                    description: "Complete all three main learning paths to become a cybersecurity expert",
                    type: "main",
                    objectives: [
                        { id: "complete_novice", description: "Complete Security Novice Journey", completed: false },
                        { id: "complete_analyst", description: "Complete Security Analyst Track", completed: false },
                        { id: "complete_architect", description: "Complete Security Architect Path", completed: false }
                    ],
                    rewards: { xp: 5000, coins: 2500, badge: "security_master", title: "Cybersecurity Expert" },
                    status: "active"
                },

                defender_of_the_realm: {
                    id: "defender_of_the_realm",
                    title: "🛡️ Defender of the Digital Realm",
                    description: "Protect the organization from 100 different types of threats",
                    type: "main",
                    objectives: [
                        { id: "threats_blocked", description: "Block 100 different threats", progress: 0, target: 100 },
                        { id: "incidents_resolved", description: "Successfully resolve 25 incidents", progress: 0, target: 25 },
                        { id: "vulnerabilities_found", description: "Discover 50 vulnerabilities", progress: 0, target: 50 }
                    ],
                    rewards: { xp: 7500, coins: 3500, badge: "digital_guardian", title: "Digital Guardian" },
                    status: "active"
                }
            },

            side_quests: {
                social_engineer_hunter: {
                    id: "social_engineer_hunter",
                    title: "🎭 Social Engineer Hunter",
                    description: "Master the art of detecting social engineering attacks",
                    type: "side",
                    objectives: [
                        { id: "phishing_detected", description: "Detect 50 phishing attempts", progress: 0, target: 50 },
                        { id: "vishing_stopped", description: "Stop 10 voice phishing calls", progress: 0, target: 10 },
                        { id: "pretexting_identified", description: "Identify 20 pretexting scenarios", progress: 0, target: 20 }
                    ],
                    rewards: { xp: 1500, coins: 750, badge: "social_detective" },
                    status: "available"
                },

                compliance_champion: {
                    id: "compliance_champion",
                    title: "📋 Compliance Champion",
                    description: "Become an expert in cybersecurity compliance frameworks",
                    type: "side",
                    objectives: [
                        { id: "frameworks_mastered", description: "Master 5 compliance frameworks", progress: 0, target: 5 },
                        { id: "audits_passed", description: "Pass 10 compliance audits", progress: 0, target: 10 },
                        { id: "policies_created", description: "Create 15 security policies", progress: 0, target: 15 }
                    ],
                    rewards: { xp: 2000, coins: 1000, badge: "compliance_expert" },
                    status: "available"
                }
            }
        };
    }

    initializeRewards() {
        this.rewards = {
            cosmetic_items: {
                avatars: [
                    { id: "hacker_hood", name: "🥷 Ethical Hacker", cost: 500, rarity: "rare" },
                    { id: "security_suit", name: "👔 Security Executive", cost: 1000, rarity: "epic" },
                    { id: "cyber_ninja", name: "🥷 Cyber Ninja", cost: 2000, rarity: "legendary" }
                ],
                
                titles: [
                    { id: "threat_hunter", name: "Threat Hunter", cost: 300, rarity: "common" },
                    { id: "security_guru", name: "Security Guru", cost: 800, rarity: "rare" },
                    { id: "cyber_sensei", name: "Cyber Sensei", cost: 1500, rarity: "epic" }
                ],

                themes: [
                    { id: "dark_mode_pro", name: "🌙 Dark Mode Pro", cost: 200, rarity: "common" },
                    { id: "matrix_theme", name: "💚 Matrix Theme", cost: 600, rarity: "rare" },
                    { id: "neon_cyberpunk", name: "🌈 Neon Cyberpunk", cost: 1200, rarity: "epic" }
                ]
            },

            power_ups: {
                learning_boosts: [
                    { id: "xp_boost_2x", name: "2x XP Boost", duration: "1 hour", cost: 100 },
                    { id: "challenge_skip", name: "Challenge Skip Token", cost: 150 },
                    { id: "hint_reveal", name: "Hint Revealer", cost: 50 }
                ],

                special_access: [
                    { id: "early_content", name: "Early Content Access", duration: "1 week", cost: 500 },
                    { id: "expert_consultation", name: "Expert Consultation", duration: "30 minutes", cost: 800 },
                    { id: "custom_challenge", name: "Custom Challenge Creation", cost: 1000 }
                ]
            }
        };
    }

    enrollUser(userId, pathId) {
        const path = this.learningPaths[pathId];
        if (!path) return null;

        // Check prerequisites
        const userProfile = this.userProgress.get(userId);
        if (path.prerequisites && path.prerequisites.length > 0) {
            const completedPaths = userProfile?.completedPaths || [];
            const hasPrerequisites = path.prerequisites.every(prereq => 
                completedPaths.includes(prereq)
            );
            
            if (!hasPrerequisites) {
                return { success: false, reason: "Prerequisites not met" };
            }
        }

        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                activePaths: [],
                completedPaths: [],
                currentLevel: {},
                totalXP: 0,
                coins: 0,
                achievements: [],
                quests: [],
                dailyStreak: 0,
                lastActivity: null
            });
        }

        const progress = this.userProgress.get(userId);
        
        if (!progress.activePaths.includes(pathId)) {
            progress.activePaths.push(pathId);
            progress.currentLevel[pathId] = 0;
            
            // Assign main quest if first path
            if (progress.activePaths.length === 1) {
                progress.quests.push("path_to_mastery");
            }

            // Award enrollment XP
            this.awardXP(userId, 100, "Path Enrollment");
            
            return { success: true, path: path };
        }

        return { success: false, reason: "Already enrolled in path" };
    }

    completeModule(userId, pathId, moduleId) {
        const progress = this.userProgress.get(userId);
        if (!progress || !progress.activePaths.includes(pathId)) return null;

        const path = this.learningPaths[pathId];
        const currentLevel = progress.currentLevel[pathId];
        const level = path.levels[currentLevel];

        if (level && level.modules.includes(moduleId)) {
            // Award module completion XP
            const moduleXP = 100 + (currentLevel * 25); // Increasing XP per level
            this.awardXP(userId, moduleXP, `Module: ${moduleId}`);

            // Check if level is complete
            const completedModules = this.getCompletedModules(userId, pathId, currentLevel);
            if (completedModules.length >= level.modules.length) {
                this.completeLevel(userId, pathId, currentLevel);
            }

            // Update quest progress
            this.updateQuestProgress(userId, "modules_completed", 1);

            // Check for achievements
            this.checkAchievements(userId, "module_completion", { pathId, moduleId });

            return { success: true, xpAwarded: moduleXP };
        }

        return { success: false, reason: "Module not part of current level" };
    }

    completeLevel(userId, pathId, levelIndex) {
        const progress = this.userProgress.get(userId);
        const path = this.learningPaths[pathId];
        const level = path.levels[levelIndex];

        // Award level completion rewards
        this.awardXP(userId, level.rewards.xp, `Level ${levelIndex + 1} Complete`);
        this.awardCoins(userId, level.rewards.coins);
        
        if (level.rewards.badge) {
            this.awardAchievement(userId, level.rewards.badge);
        }

        // Unlock next level or complete path
        if (levelIndex + 1 < path.levels.length) {
            progress.currentLevel[pathId] = levelIndex + 1;
            
            // Check for path unlock
            if (level.rewards.unlock) {
                this.unlockPath(userId, level.rewards.unlock);
            }
        } else {
            // Path completed
            this.completePath(userId, pathId);
        }

        // Award XP to skill tree if available
        if (window.skillTree) {
            window.skillTree.awardXP(userId, level.rewards.xp, `${path.title} - Level ${levelIndex + 1}`);
        }

        return { success: true, levelCompleted: levelIndex + 1 };
    }

    completePath(userId, pathId) {
        const progress = this.userProgress.get(userId);
        const path = this.learningPaths[pathId];

        // Move from active to completed
        progress.activePaths = progress.activePaths.filter(p => p !== pathId);
        progress.completedPaths.push(pathId);

        // Award path completion rewards
        const pathRewards = path.pathRewards.completion;
        this.awardXP(userId, pathRewards.xp, `Path Complete: ${path.title}`);
        this.awardCoins(userId, pathRewards.coins);
        
        if (pathRewards.badge) {
            this.awardAchievement(userId, pathRewards.badge);
        }

        if (pathRewards.title) {
            this.awardTitle(userId, pathRewards.title);
        }

        // Update quest progress
        this.updateQuestProgress(userId, "paths_completed", 1);

        // Check for main quest completion
        if (progress.completedPaths.length === 3) { // All main paths
            this.completeQuest(userId, "path_to_mastery");
        }

        return { success: true, pathCompleted: path.title };
    }

    startChallenge(userId, challengeId) {
        const challenge = this.findChallenge(challengeId);
        if (!challenge) return null;

        const challengeInstance = {
            instanceId: `challenge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            challengeId,
            startTime: new Date(),
            endTime: new Date(Date.now() + challenge.timeLimit * 60 * 1000),
            status: "active",
            score: 0,
            completed: false
        };

        return challengeInstance;
    }

    completeChallenge(userId, challengeInstanceId, score) {
        const challenge = this.findChallenge(challengeInstanceId);
        if (!challenge) return null;

        const baseRewards = challenge.rewards;
        const bonusMultiplier = Math.min(2.0, score / 100); // Max 2x bonus for perfect score

        const finalXP = Math.round(baseRewards.xp * bonusMultiplier);
        const finalCoins = Math.round(baseRewards.coins * bonusMultiplier);

        this.awardXP(userId, finalXP, `Challenge: ${challenge.title}`);
        this.awardCoins(userId, finalCoins);

        if (baseRewards.badge && score >= 80) { // Badge for good performance
            this.awardAchievement(userId, baseRewards.badge);
        }

        // Update quest progress
        this.updateQuestProgress(userId, "challenges_completed", 1);

        return { 
            success: true, 
            xpAwarded: finalXP, 
            coinsAwarded: finalCoins,
            bonusMultiplier: bonusMultiplier
        };
    }

    awardXP(userId, amount, reason) {
        const progress = this.userProgress.get(userId);
        if (progress) {
            progress.totalXP += amount;
            
            // Check for level-based achievements
            this.checkXPMilestones(userId, progress.totalXP);
        }
    }

    awardCoins(userId, amount) {
        const progress = this.userProgress.get(userId);
        if (progress) {
            progress.coins += amount;
        }
    }

    awardAchievement(userId, achievementId) {
        const progress = this.userProgress.get(userId);
        const achievement = this.achievements[achievementId];
        
        if (progress && achievement && !progress.achievements.includes(achievementId)) {
            progress.achievements.push(achievementId);
            
            // Award achievement bonuses
            this.awardXP(userId, achievement.xpBonus, `Achievement: ${achievement.title}`);
            this.awardCoins(userId, achievement.coinBonus);
            
            return { success: true, achievement: achievement };
        }
        
        return { success: false };
    }

    updateLeaderboard(category, userId, score) {
        if (!this.leaderboards.has(category)) {
            this.leaderboards.set(category, []);
        }
        
        const leaderboard = this.leaderboards.get(category);
        const existingEntry = leaderboard.find(entry => entry.userId === userId);
        
        if (existingEntry) {
            existingEntry.score = Math.max(existingEntry.score, score);
            existingEntry.lastUpdate = new Date();
        } else {
            leaderboard.push({
                userId,
                score,
                lastUpdate: new Date()
            });
        }
        
        // Sort and keep top 100
        leaderboard.sort((a, b) => b.score - a.score);
        if (leaderboard.length > 100) {
            leaderboard.splice(100);
        }
    }

    findChallenge(challengeId) {
        for (const category of Object.values(this.challenges)) {
            for (const challenge of Object.values(category)) {
                if (challenge.id === challengeId) return challenge;
            }
        }
        return null;
    }

    checkAchievements(userId, trigger, data) {
        // Implementation would check various achievement conditions
        // This is a simplified version focusing on key achievements
        
        const progress = this.userProgress.get(userId);
        if (!progress) return;

        switch (trigger) {
            case "module_completion":
                if (progress.activePaths.length === 1 && data.moduleId === "password_basics") {
                    this.awardAchievement(userId, "first_steps");
                }
                break;
                
            case "daily_activity":
                if (progress.dailyStreak >= 30) {
                    this.awardAchievement(userId, "consistent_learner");
                }
                break;
        }
    }

    renderGamificationDashboard() {
        return `
            <div class="gamified-learning">
                <div class="gamification-header">
                    <h1>🎮 Gamified Learning Paths</h1>
                    <p>Level up your cybersecurity skills through interactive learning journeys</p>
                </div>
                
                <div class="learning-paths">
                    <h2>🛤️ Learning Paths</h2>
                    <div class="paths-grid">
                        ${Object.values(this.learningPaths).map(path => 
                            this.renderPathCard(path)
                        ).join('')}
                    </div>
                </div>
                
                <div class="challenges-section">
                    <h2>⚡ Daily & Weekly Challenges</h2>
                    <div class="challenges-grid">
                        ${Object.values(this.challenges.daily_challenges).map(challenge => 
                            this.renderChallengeCard(challenge, "daily")
                        ).join('')}
                        ${Object.values(this.challenges.weekly_challenges).map(challenge => 
                            this.renderChallengeCard(challenge, "weekly")
                        ).join('')}
                    </div>
                </div>
                
                <div class="achievements-showcase">
                    <h2>🏆 Featured Achievements</h2>
                    <div class="achievements-grid">
                        ${Object.values(this.achievements).slice(0, 6).map(achievement => 
                            this.renderAchievementCard(achievement)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderPathCard(path) {
        const difficultyClass = `difficulty-${path.difficulty}`;
        
        return `
            <div class="path-card ${difficultyClass}">
                <div class="path-header">
                    <h3>${path.title}</h3>
                    <div class="path-meta">
                        <span class="difficulty">${path.difficulty}</span>
                        <span class="duration">${path.estimatedHours}h</span>
                    </div>
                </div>
                
                <div class="path-content">
                    <p class="path-description">${path.description}</p>
                    
                    <div class="path-levels">
                        <h4>🎯 Levels (${path.levels.length}):</h4>
                        <div class="levels-preview">
                            ${path.levels.map((level, index) => 
                                `<div class="level-preview">
                                    <span class="level-number">${index + 1}</span>
                                    <span class="level-title">${level.title}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="path-rewards">
                        <h4>🎁 Completion Rewards:</h4>
                        <div class="rewards-list">
                            <span class="xp-reward">+${path.pathRewards.completion.xp} XP</span>
                            <span class="coin-reward">+${path.pathRewards.completion.coins} 🪙</span>
                            <span class="badge-reward">🏆 ${path.pathRewards.completion.badge}</span>
                        </div>
                    </div>
                </div>
                
                <button onclick="gamifiedLearning.enrollUser('demo_user', '${path.id}')" 
                        class="enroll-btn">
                    Start Journey
                </button>
            </div>
        `;
    }

    renderChallengeCard(challenge, frequency) {
        const difficultyClass = `difficulty-${challenge.difficulty}`;
        const frequencyClass = `frequency-${frequency}`;
        
        return `
            <div class="challenge-card ${difficultyClass} ${frequencyClass}">
                <div class="challenge-header">
                    <h4>${challenge.title}</h4>
                    <div class="challenge-meta">
                        <span class="frequency">${frequency}</span>
                        <span class="time-limit">${challenge.timeLimit}min</span>
                    </div>
                </div>
                
                <div class="challenge-content">
                    <p class="challenge-description">${challenge.description}</p>
                    
                    <div class="challenge-rewards">
                        <span class="xp-reward">+${challenge.rewards.xp} XP</span>
                        <span class="coin-reward">+${challenge.rewards.coins} 🪙</span>
                        ${challenge.rewards.badge ? `<span class="badge-reward">🏆 ${challenge.rewards.badge}</span>` : ''}
                    </div>
                    
                    ${challenge.teamBased ? '<div class="team-badge">👥 Team Challenge</div>' : ''}
                    ${challenge.competitive ? '<div class="competitive-badge">🏆 Competitive</div>' : ''}
                </div>
                
                <button onclick="gamifiedLearning.startChallenge('demo_user', '${challenge.id}')" 
                        class="start-challenge-btn">
                    Start Challenge
                </button>
            </div>
        `;
    }

    renderAchievementCard(achievement) {
        const rarityClass = `rarity-${achievement.rarity}`;
        
        return `
            <div class="achievement-card ${rarityClass}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-content">
                    <h4>${achievement.title}</h4>
                    <p class="achievement-description">${achievement.description}</p>
                    <div class="achievement-rewards">
                        <span class="xp-bonus">+${achievement.xpBonus} XP</span>
                        <span class="coin-bonus">+${achievement.coinBonus} 🪙</span>
                    </div>
                </div>
                <div class="rarity-indicator">${achievement.rarity}</div>
            </div>
        `;
    }
}

// CSS für Gamified Learning Paths
const gamifiedLearningCSS = `
    .gamified-learning {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .gamification-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .paths-grid, .challenges-grid, .achievements-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .path-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .path-card.difficulty-beginner { border-left-color: #28a745; }
    .path-card.difficulty-intermediate { border-left-color: #ffc107; }
    .path-card.difficulty-advanced { border-left-color: #fd7e14; }
    .path-card.difficulty-expert { border-left-color: #dc3545; }
    
    .path-header {
        padding: 20px;
        background: #f8f9fa;
    }
    
    .path-header h3 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .path-meta {
        display: flex;
        gap: 10px;
    }
    
    .difficulty, .duration, .frequency, .time-limit {
        background: #e3f2fd;
        color: #1976d2;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: 500;
    }
    
    .path-content {
        padding: 20px;
    }
    
    .path-description {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
    }
    
    .path-levels h4, .path-rewards h4 {
        margin: 15px 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .levels-preview {
        margin-bottom: 15px;
    }
    
    .level-preview {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 4px;
    }
    
    .level-number {
        background: #e9ecef;
        color: #495057;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7em;
        font-weight: bold;
    }
    
    .rewards-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .xp-reward, .coin-reward, .badge-reward, .xp-bonus, .coin-bonus {
        background: #f8f9fa;
        color: #495057;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 0.7em;
        border: 1px solid #dee2e6;
    }
    
    .enroll-btn, .start-challenge-btn {
        width: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .enroll-btn:hover, .start-challenge-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    .challenge-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #6c757d;
    }
    
    .challenge-card.frequency-daily { border-left-color: #28a745; }
    .challenge-card.frequency-weekly { border-left-color: #ffc107; }
    .challenge-card.frequency-monthly { border-left-color: #dc3545; }
    
    .challenge-header {
        padding: 15px 20px;
        background: #f8f9fa;
    }
    
    .challenge-header h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .challenge-meta {
        display: flex;
        gap: 8px;
    }
    
    .challenge-content {
        padding: 20px;
    }
    
    .challenge-description {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
        font-size: 0.9em;
    }
    
    .challenge-rewards {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
    }
    
    .team-badge, .competitive-badge {
        background: #e3f2fd;
        color: #1976d2;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: 500;
        margin-top: 8px;
    }
    
    .achievement-card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        text-align: center;
        border: 2px solid #e9ecef;
    }
    
    .achievement-card.rarity-common { border-color: #6c757d; }
    .achievement-card.rarity-rare { border-color: #007bff; }
    .achievement-card.rarity-epic { border-color: #6f42c1; }
    .achievement-card.rarity-legendary { border-color: #fd7e14; }
    
    .achievement-icon {
        font-size: 2em;
        margin-bottom: 10px;
    }
    
    .achievement-content h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .achievement-description {
        color: #495057;
        font-size: 0.8em;
        margin-bottom: 10px;
        line-height: 1.3;
    }
    
    .achievement-rewards {
        display: flex;
        justify-content: center;
        gap: 6px;
        margin-bottom: 8px;
    }
    
    .rarity-indicator {
        font-size: 0.7em;
        color: #6c757d;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

// Style hinzufügen
const gamifiedLearningStyleSheet = document.createElement('style');
gamifiedLearningStyleSheet.textContent = gamifiedLearningCSS;
document.head.appendChild(gamifiedLearningStyleSheet);

// Global instance
window.gamifiedLearning = new GamifiedLearningPaths();
