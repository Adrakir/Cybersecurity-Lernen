// Gamified Learning Paths - Comprehensive Gamification System for Security Education
class GamifiedLearningPaths {
    constructor() {
        this.learningPaths = {};
        this.achievements = {};
        this.badges = {};
        this.leaderboards = new Map();
        this.userProgress = new Map();
        this.challenges = {};
        this.rewards = {};
        this.initializePaths();
    }

    initializePaths() {
        this.learningPaths = {
            cybersecurity_fundamentals: {
                id: "cybersecurity_fundamentals",
                title: "🛡️ Cybersecurity Fundamentals Journey",
                description: "Master the essential concepts of cybersecurity",
                difficulty: "beginner",
                estimatedTime: "4-6 weeks",
                totalXP: 2500,
                levels: [
                    {
                        level: 1,
                        title: "Security Awareness Rookie",
                        modules: ["basic_threats", "password_security", "email_security"],
                        xpRequired: 0,
                        xpReward: 300,
                        badge: "security_awareness_badge"
                    },
                    {
                        level: 2,
                        title: "Threat Recognition Apprentice",
                        modules: ["phishing_identification", "malware_basics", "social_engineering"],
                        xpRequired: 300,
                        xpReward: 400,
                        badge: "threat_hunter_badge"
                    },
                    {
                        level: 3,
                        title: "Defense Practitioner",
                        modules: ["network_security", "encryption_basics", "incident_response"],
                        xpRequired: 700,
                        xpReward: 500,
                        badge: "security_defender_badge"
                    },
                    {
                        level: 4,
                        title: "Security Specialist",
                        modules: ["advanced_threats", "forensics_intro", "compliance_basics"],
                        xpRequired: 1200,
                        xpReward: 600,
                        badge: "security_specialist_badge"
                    },
                    {
                        level: 5,
                        title: "Cybersecurity Champion",
                        modules: ["security_architecture", "risk_management", "leadership_skills"],
                        xpRequired: 1800,
                        xpReward: 700,
                        badge: "cybersecurity_champion_badge"
                    }
                ],
                prerequisites: [],
                pathRewards: {
                    completion: "Master Security Analyst Certification",
                    xpBonus: 1000,
                    specialBadge: "fundamentals_master"
                }
            },

            ethical_hacking: {
                id: "ethical_hacking",
                title: "🎯 Ethical Hacking Mastery",
                description: "Learn penetration testing and ethical hacking techniques",
                difficulty: "advanced",
                estimatedTime: "8-12 weeks",
                totalXP: 5000,
                levels: [
                    {
                        level: 1,
                        title: "White Hat Initiate",
                        modules: ["hacking_ethics", "reconnaissance", "footprinting"],
                        xpRequired: 0,
                        xpReward: 500,
                        badge: "white_hat_badge"
                    },
                    {
                        level: 2,
                        title: "Vulnerability Scout",
                        modules: ["vulnerability_scanning", "enumeration", "service_identification"],
                        xpRequired: 500,
                        xpReward: 700,
                        badge: "vulnerability_finder_badge"
                    },
                    {
                        level: 3,
                        title: "Exploitation Expert",
                        modules: ["web_exploitation", "network_attacks", "privilege_escalation"],
                        xpRequired: 1200,
                        xpReward: 900,
                        badge: "exploitation_expert_badge"
                    },
                    {
                        level: 4,
                        title: "Advanced Penetrator",
                        modules: ["advanced_persistence", "lateral_movement", "evasion_techniques"],
                        xpRequired: 2100,
                        xpReward: 1100,
                        badge: "advanced_pentester_badge"
                    },
                    {
                        level: 5,
                        title: "Ethical Hacking Master",
                        modules: ["red_team_ops", "custom_exploits", "report_writing"],
                        xpRequired: 3200,
                        xpReward: 1300,
                        badge: "ethical_hacker_master_badge"
                    }
                ],
                prerequisites: ["cybersecurity_fundamentals"],
                pathRewards: {
                    completion: "Certified Ethical Hacker Plus",
                    xpBonus: 2000,
                    specialBadge: "ethical_hacking_grandmaster"
                }
            },

            incident_response_pro: {
                id: "incident_response_pro",
                title: "🚨 Incident Response Professional",
                description: "Become an expert in cybersecurity incident response",
                difficulty: "expert",
                estimatedTime: "6-8 weeks",
                totalXP: 4000,
                levels: [
                    {
                        level: 1,
                        title: "Response Coordinator",
                        modules: ["incident_types", "response_frameworks", "team_coordination"],
                        xpRequired: 0,
                        xpReward: 400,
                        badge: "response_coordinator_badge"
                    },
                    {
                        level: 2,
                        title: "Forensics Investigator",
                        modules: ["digital_forensics", "evidence_collection", "timeline_analysis"],
                        xpRequired: 400,
                        xpReward: 600,
                        badge: "forensics_badge"
                    },
                    {
                        level: 3,
                        title: "Containment Specialist",
                        modules: ["threat_containment", "system_isolation", "damage_assessment"],
                        xpRequired: 1000,
                        xpReward: 800,
                        badge: "containment_specialist_badge"
                    },
                    {
                        level: 4,
                        title: "Recovery Expert",
                        modules: ["system_recovery", "business_continuity", "lessons_learned"],
                        xpRequired: 1800,
                        xpReward: 1000,
                        badge: "recovery_expert_badge"
                    },
                    {
                        level: 5,
                        title: "Incident Commander",
                        modules: ["crisis_leadership", "stakeholder_management", "process_improvement"],
                        xpRequired: 2800,
                        xpReward: 1200,
                        badge: "incident_commander_badge"
                    }
                ],
                prerequisites: ["cybersecurity_fundamentals"],
                pathRewards: {
                    completion: "Certified Incident Response Leader",
                    xpBonus: 1500,
                    specialBadge: "incident_response_master"
                }
            },

            cloud_security_expert: {
                id: "cloud_security_expert",
                title: "☁️ Cloud Security Expert",
                description: "Master cloud infrastructure security across platforms",
                difficulty: "advanced",
                estimatedTime: "10-14 weeks",
                totalXP: 4500,
                levels: [
                    {
                        level: 1,
                        title: "Cloud Security Novice",
                        modules: ["cloud_fundamentals", "shared_responsibility", "basic_controls"],
                        xpRequired: 0,
                        xpReward: 450,
                        badge: "cloud_novice_badge"
                    },
                    {
                        level: 2,
                        title: "Multi-Cloud Practitioner",
                        modules: ["aws_security", "azure_security", "gcp_security"],
                        xpRequired: 450,
                        xpReward: 650,
                        badge: "multi_cloud_badge"
                    },
                    {
                        level: 3,
                        title: "Container Security Specialist",
                        modules: ["container_security", "kubernetes_hardening", "devsecops"],
                        xpRequired: 1100,
                        xpReward: 850,
                        badge: "container_security_badge"
                    },
                    {
                        level: 4,
                        title: "Cloud Architecture Defender",
                        modules: ["security_architecture", "zero_trust", "compliance_automation"],
                        xpRequired: 1950,
                        xpReward: 1050,
                        badge: "cloud_architect_badge"
                    },
                    {
                        level: 5,
                        title: "Cloud Security Virtuoso",
                        modules: ["advanced_monitoring", "threat_modeling", "security_innovation"],
                        xpRequired: 3000,
                        xpReward: 1250,
                        badge: "cloud_virtuoso_badge"
                    }
                ],
                prerequisites: ["cybersecurity_fundamentals"],
                pathRewards: {
                    completion: "Cloud Security Architect Certification",
                    xpBonus: 1800,
                    specialBadge: "cloud_security_grandmaster"
                }
            }
        };

        this.initializeAchievements();
        this.initializeBadges();
        this.initializeChallenges();
        this.initializeRewards();
    }

    initializeAchievements() {
        this.achievements = {
            first_steps: {
                id: "first_steps",
                title: "🌟 First Steps",
                description: "Complete your first security training module",
                category: "progression",
                points: 100,
                rarity: "common",
                condition: { type: "modules_completed", value: 1 }
            },
            knowledge_seeker: {
                id: "knowledge_seeker",
                title: "📚 Knowledge Seeker",
                description: "Complete 10 training modules",
                category: "progression",
                points: 500,
                rarity: "uncommon",
                condition: { type: "modules_completed", value: 10 }
            },
            threat_hunter: {
                id: "threat_hunter",
                title: "🔍 Threat Hunter",
                description: "Successfully identify 50 security threats",
                category: "skill",
                points: 750,
                rarity: "rare",
                condition: { type: "threats_identified", value: 50 }
            },
            rapid_responder: {
                id: "rapid_responder",
                title: "⚡ Rapid Responder",
                description: "Complete incident response drill in under 30 minutes",
                category: "performance",
                points: 800,
                rarity: "rare",
                condition: { type: "incident_response_time", value: 30 }
            },
            perfect_score: {
                id: "perfect_score",
                title: "💯 Perfectionist",
                description: "Achieve 100% score on any assessment",
                category: "performance",
                points: 600,
                rarity: "uncommon",
                condition: { type: "perfect_assessment", value: 1 }
            },
            streak_master: {
                id: "streak_master",
                title: "🔥 Streak Master",
                description: "Maintain a 30-day learning streak",
                category: "dedication",
                points: 1000,
                rarity: "epic",
                condition: { type: "learning_streak", value: 30 }
            },
            mentor: {
                id: "mentor",
                title: "👨‍🏫 Mentor",
                description: "Help 10 other learners with their progress",
                category: "community",
                points: 1200,
                rarity: "epic",
                condition: { type: "helped_learners", value: 10 }
            },
            security_champion: {
                id: "security_champion",
                title: "🏆 Security Champion",
                description: "Complete all learning paths with distinction",
                category: "mastery",
                points: 5000,
                rarity: "legendary",
                condition: { type: "paths_completed", value: "all" }
            }
        };
    }

    initializeBadges() {
        this.badges = {
            security_awareness_badge: { id: "security_awareness_badge", name: "Security Awareness", icon: "🛡️", description: "Demonstrated basic security awareness", category: "fundamental" },
            threat_hunter_badge: { id: "threat_hunter_badge", name: "Threat Hunter", icon: "🎯", description: "Skilled in identifying security threats", category: "detection" },
            ethical_hacker_badge: { id: "ethical_hacker_badge", name: "Ethical Hacker", icon: "⚡", description: "Certified ethical hacking practitioner", category: "offensive" },
            incident_commander_badge: { id: "incident_commander_badge", name: "Incident Commander", icon: "🚨", description: "Expert in incident response leadership", category: "leadership" },
            cloud_security_badge: { id: "cloud_security_badge", name: "Cloud Security Expert", icon: "☁️", description: "Master of cloud security practices", category: "specialized" },
            compliance_badge: { id: "compliance_badge", name: "Compliance Specialist", icon: "📋", description: "Expert in security compliance frameworks", category: "governance" }
        };
    }

    initializeChallenges() {
        this.challenges = {
            weekly_warrior: { id: "weekly_warrior", title: "📅 Weekly Warrior", description: "Complete 5 modules this week", type: "weekly", target: 5, metric: "modules_completed", reward: { xp: 300, badge: null }, timeFrame: "week" },
            phishing_expert: { id: "phishing_expert", title: "🎣 Phishing Expert Challenge", description: "Identify 20 phishing attempts correctly", type: "skill", target: 20, metric: "phishing_identified", reward: { xp: 500, badge: "phishing_expert_badge" }, timeFrame: "month" },
            speed_learner: { id: "speed_learner", title: "🏃‍♂️ Speed Learner", description: "Complete a learning path in record time", type: "performance", target: 1, metric: "fast_path_completion", reward: { xp: 800, badge: "speed_learner_badge" }, timeFrame: "anytime" },
            community_helper: { id: "community_helper", title: "🤝 Community Helper", description: "Answer 10 questions in the community forum", type: "community", target: 10, metric: "forum_answers", reward: { xp: 600, badge: "community_helper_badge" }, timeFrame: "month" },
            vulnerability_hunter: { id: "vulnerability_hunter", title: "🔍 Vulnerability Hunter", description: "Find and report 5 security vulnerabilities", type: "practical", target: 5, metric: "vulnerabilities_found", reward: { xp: 1000, badge: "vulnerability_hunter_badge" }, timeFrame: "quarter" }
        };
    }

    initializeRewards() {
        this.rewards = {
            xp_multiplier: { type: "multiplier", description: "2x XP for next 24 hours", duration: 24 * 60 * 60 * 1000, effect: { xpMultiplier: 2 } },
            skip_module: { type: "bypass", description: "Skip one module requirement", usage: "single_use", effect: { skipModule: true } },
            exclusive_content: { type: "access", description: "Access to exclusive advanced content", duration: 30 * 24 * 60 * 60 * 1000, effect: { exclusiveAccess: true } },
            mentor_session: { type: "service", description: "1-on-1 session with security expert", usage: "single_use", effect: { mentorSession: true } },
            certification_voucher: { type: "certification", description: "Free certification exam voucher", usage: "single_use", effect: { certificationVoucher: true } }
        };
    }

    enrollInPath(userId, pathId) {
        const path = this.learningPaths[pathId];
        if (!path) return null;

        // Check prerequisites
        const userProgress = this.getUserProgress(userId);
        const hasPrerequisites = path.prerequisites.every(prereq => 
            userProgress.completedPaths.includes(prereq)
        );

        if (!hasPrerequisites) {
            return { success: false, message: "Prerequisites not met", required: path.prerequisites };
        }

        if (!userProgress.activePaths.includes(pathId)) {
            userProgress.activePaths.push(pathId);
            userProgress.currentLevel[pathId] = 0;
            return { success: true, message: `Enrolled in ${path.title}`, path: path, currentLevel: userProgress.currentLevel[pathId] };
        }

        return { success: false, message: "Already enrolled in this path" };
    }

    completeModule(userId, pathId, moduleId) {
        const userProgress = this.getUserProgress(userId);
        const path = this.learningPaths[pathId];
        
        if (!path || !userProgress.activePaths.includes(pathId)) return null;

        const currentLevel = userProgress.currentLevel[pathId] || 0;
        const level = path.levels[currentLevel];
        
        if (!level || !level.modules.includes(moduleId)) return null;

        // Award XP for module completion
        const moduleXP = Math.round(level.xpReward / level.modules.length);
        this.awardXP(userId, moduleXP, `Module: ${moduleId}`);

        // Check if level is complete
        const completedModules = this.getCompletedModules(userId, pathId, currentLevel);
        if (completedModules.length >= level.modules.length) {
            this.completeLevel(userId, pathId, currentLevel);
        }

        // Update learning streak
        this.updateLearningStreak(userId);

        return {
            moduleCompleted: moduleId,
            xpAwarded: moduleXP,
            levelProgress: `${completedModules.length}/${level.modules.length}`,
            levelComplete: completedModules.length >= level.modules.length
        };
    }

    completeLevel(userId, pathId, levelIndex) {
        const userProgress = this.getUserProgress(userId);
        const path = this.learningPaths[pathId];
        const level = path.levels[levelIndex];

        // Award level completion XP
        this.awardXP(userId, level.xpReward, `Level Complete: ${level.title}`);

        // Award badge if specified
        if (level.badge) {
            this.awardBadge(userId, level.badge);
        }

        // Move to next level or complete path
        if (levelIndex + 1 < path.levels.length) {
            userProgress.currentLevel[pathId] = levelIndex + 1;
        } else {
            this.completePath(userId, pathId);
        }

        // Check for achievements
        this.checkAchievements(userId);

        return {
            levelCompleted: level.title,
            badgeAwarded: level.badge,
            nextLevel: levelIndex + 1 < path.levels.length ? path.levels[levelIndex + 1].title : null,
            pathComplete: levelIndex + 1 >= path.levels.length
        };
    }

    completePath(userId, pathId) {
        const userProgress = this.getUserProgress(userId);
        const path = this.learningPaths[pathId];

        // Move from active to completed
        userProgress.activePaths = userProgress.activePaths.filter(p => p !== pathId);
        userProgress.completedPaths.push(pathId);

        // Award path completion rewards
        this.awardXP(userId, path.pathRewards.xpBonus, `Path Complete: ${path.title}`);
        
        if (path.pathRewards.specialBadge) {
            this.awardBadge(userId, path.pathRewards.specialBadge);
        }

        // Award skill tree XP if available
        if (window.skillTree) {
            window.skillTree.awardXP(userId, path.totalXP, `Learning Path: ${path.title}`);
        }

        return {
            pathCompleted: path.title,
            certification: path.pathRewards.completion,
            totalXPAwarded: path.totalXP + path.pathRewards.xpBonus,
            specialBadge: path.pathRewards.specialBadge
        };
    }

    awardXP(userId, amount, reason) {
        const userProgress = this.getUserProgress(userId);
        userProgress.totalXP += amount;
        this.updateLeaderboard(userId, amount);
        return { xpAwarded: amount, totalXP: userProgress.totalXP, reason: reason };
    }

    awardBadge(userId, badgeId) {
        const userProgress = this.getUserProgress(userId);
        const badge = this.badges[badgeId];

        if (badge && !userProgress.badges.includes(badgeId)) {
            userProgress.badges.push(badgeId);
            return { badgeAwarded: badge.name, description: badge.description, icon: badge.icon };
        }
        return null;
    }

    updateLearningStreak(userId) {
        const userProgress = this.getUserProgress(userId);
        const today = new Date().toDateString();
        const lastActivity = userProgress.streaks?.lastActivity;

        if (!userProgress.streaks) {
            userProgress.streaks = { current: 1, longest: 1, lastActivity: today };
            return;
        }

        if (lastActivity) {
            const lastDate = new Date(lastActivity).toDateString();
            const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();

            if (lastDate === today) return;
            else if (lastDate === yesterday) userProgress.streaks.current++;
            else userProgress.streaks.current = 1;
        } else {
            userProgress.streaks.current = 1;
        }

        userProgress.streaks.lastActivity = today;
        userProgress.streaks.longest = Math.max(userProgress.streaks.longest, userProgress.streaks.current);
    }

    updateLeaderboard(userId, xpGained) {
        if (!this.leaderboards.has("global")) {
            this.leaderboards.set("global", new Map());
        }
        const globalBoard = this.leaderboards.get("global");
        const currentXP = globalBoard.get(userId) || 0;
        globalBoard.set(userId, currentXP + xpGained);
    }

    getUserProgress(userId) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                activePaths: [],
                completedPaths: [],
                currentLevel: {},
                totalXP: 0,
                achievements: [],
                badges: [],
                streaks: { current: 0, longest: 0, lastActivity: null }
            });
        }
        return this.userProgress.get(userId);
    }

    getCompletedModules(userId, pathId, levelIndex) {
        // Simulate completed modules - in real implementation, this would query actual progress
        return [];
    }

    checkAchievements(userId) {
        const userProgress = this.getUserProgress(userId);
        const newAchievements = [];

        Object.values(this.achievements).forEach(achievement => {
            if (!userProgress.achievements.includes(achievement.id)) {
                if (this.evaluateAchievementCondition(userId, achievement.condition)) {
                    userProgress.achievements.push(achievement.id);
                    this.awardXP(userId, achievement.points, `Achievement: ${achievement.title}`);
                    newAchievements.push(achievement);
                }
            }
        });

        return newAchievements;
    }

    evaluateAchievementCondition(userId, condition) {
        // Simplified evaluation - in real implementation, would check actual metrics
        return false;
    }

    renderGamificationDashboard() {
        return `
            <div class="gamified-learning">
                <div class="gamification-header">
                    <h1>🎮 Gamified Learning Paths</h1>
                    <p>Level up your cybersecurity skills through engaging learning journeys</p>
                </div>
                
                <div class="learning-paths">
                    <h2>🚀 Learning Paths</h2>
                    <div class="paths-grid">
                        ${Object.values(this.learningPaths).map(path => 
                            this.renderPathCard(path)
                        ).join('')}
                    </div>
                </div>
                
                <div class="achievements-section">
                    <h2>🏆 Achievements & Badges</h2>
                    <div class="achievements-grid">
                        ${Object.values(this.achievements).slice(0, 6).map(achievement => 
                            this.renderAchievementCard(achievement)
                        ).join('')}
                    </div>
                </div>
                
                <div class="challenges-section">
                    <h2>⚡ Active Challenges</h2>
                    <div class="challenges-grid">
                        ${Object.values(this.challenges).slice(0, 4).map(challenge => 
                            this.renderChallengeCard(challenge)
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
                        <span class="duration">${path.estimatedTime}</span>
                    </div>
                </div>
                
                <div class="path-content">
                    <p class="description">${path.description}</p>
                    
                    <div class="path-stats">
                        <div class="stat">
                            <span class="stat-label">Levels:</span>
                            <span class="stat-value">${path.levels.length}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Total XP:</span>
                            <span class="stat-value">${path.totalXP}</span>
                        </div>
                    </div>
                    
                    <div class="path-levels">
                        <h4>🎯 Learning Levels:</h4>
                        <ul>
                            ${path.levels.slice(0, 3).map((level, index) => 
                                `<li><strong>L${index + 1}:</strong> ${level.title}</li>`
                            ).join('')}
                            ${path.levels.length > 3 ? '<li>...and more levels</li>' : ''}
                        </ul>
                    </div>
                    
                    ${path.prerequisites.length > 0 ? `
                        <div class="prerequisites">
                            <h4>📋 Prerequisites:</h4>
                            <ul>
                                ${path.prerequisites.map(prereq => 
                                    `<li>${this.learningPaths[prereq]?.title || prereq}</li>`
                                ).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
                
                <div class="path-rewards">
                    <h4>🎁 Completion Rewards:</h4>
                    <div class="rewards-list">
                        <span class="reward-item">🏆 ${path.pathRewards.completion}</span>
                        <span class="reward-item">⭐ ${path.pathRewards.xpBonus} Bonus XP</span>
                        <span class="reward-item">🎖️ Special Badge</span>
                    </div>
                </div>
                
                <button onclick="gamifiedPaths.enrollInPath('demo_user', '${path.id}')" class="enroll-btn">
                    Start Journey
                </button>
            </div>
        `;
    }

    renderAchievementCard(achievement) {
        const rarityClass = `rarity-${achievement.rarity}`;
        
        return `
            <div class="achievement-card ${rarityClass}">
                <div class="achievement-header">
                    <h4>${achievement.title}</h4>
                    <span class="points">${achievement.points} XP</span>
                </div>
                <div class="achievement-content">
                    <p class="description">${achievement.description}</p>
                    <div class="achievement-meta">
                        <span class="category">${achievement.category}</span>
                        <span class="rarity">${achievement.rarity}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderChallengeCard(challenge) {
        return `
            <div class="challenge-card">
                <div class="challenge-header">
                    <h4>${challenge.title}</h4>
                    <span class="timeframe">${challenge.timeFrame}</span>
                </div>
                <div class="challenge-content">
                    <p class="description">${challenge.description}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                        <span class="progress-text">0 / ${challenge.target}</span>
                    </div>
                    <div class="rewards">
                        <span class="reward">🎯 ${challenge.reward.xp} XP</span>
                        ${challenge.reward.badge ? '<span class="reward">🎖️ Special Badge</span>' : ''}
                    </div>
                </div>
                <button class="participate-btn">Participate</button>
            </div>
        `;
    }
}

// CSS (simplified)
const gamifiedLearningCSS = `
    .gamified-learning { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .gamification-header { text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px; }
    .paths-grid, .achievements-grid, .challenges-grid { display: grid; gap: 20px; margin-bottom: 30px; }
    .paths-grid { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
    .achievements-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
    .challenges-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    .path-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .path-card.difficulty-beginner { border-left-color: #28a745; }
    .path-card.difficulty-advanced { border-left-color: #fd7e14; }
    .path-card.difficulty-expert { border-left-color: #dc3545; }
    .path-header { padding: 20px; background: #f8f9fa; }
    .path-header h3 { margin: 0 0 10px 0; color: #2c3e50; font-size: 1.1em; }
    .path-meta { display: flex; gap: 10px; }
    .difficulty, .duration { background: #e3f2fd; color: #1976d2; padding: 3px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 500; }
    .path-content { padding: 20px; }
    .description { color: #495057; margin-bottom: 15px; line-height: 1.4; }
    .path-stats { display: flex; gap: 20px; margin-bottom: 15px; }
    .stat { display: flex; flex-direction: column; align-items: center; }
    .stat-label { font-size: 0.8em; color: #6c757d; }
    .stat-value { font-weight: bold; color: #2c3e50; }
    .path-levels h4, .prerequisites h4, .path-rewards h4 { margin: 15px 0 8px 0; color: #2c3e50; font-size: 0.9em; }
    .path-levels ul, .prerequisites ul { margin: 0 0 15px 0; padding-left: 20px; }
    .path-levels li, .prerequisites li { font-size: 0.85em; color: #495057; margin-bottom: 4px; }
    .rewards-list { display: flex; flex-direction: column; gap: 5px; margin-bottom: 15px; }
    .reward-item { font-size: 0.8em; color: #495057; }
    .enroll-btn { width: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
    .enroll-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); }
    .achievement-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #6c757d; }
    .achievement-card.rarity-common { border-left-color: #6c757d; }
    .achievement-card.rarity-uncommon { border-left-color: #28a745; }
    .achievement-card.rarity-rare { border-left-color: #007bff; }
    .achievement-card.rarity-epic { border-left-color: #6f42c1; }
    .achievement-card.rarity-legendary { border-left-color: #ffc107; }
    .achievement-header { padding: 15px 20px; background: #f8f9fa; display: flex; justify-content: space-between; align-items: center; }
    .achievement-header h4 { margin: 0; color: #2c3e50; font-size: 0.95em; }
    .points { background: #e3f2fd; color: #1976d2; padding: 3px 8px; border-radius: 12px; font-size: 0.7em; font-weight: 500; }
    .achievement-content { padding: 15px 20px; }
    .achievement-meta { display: flex; gap: 10px; margin-top: 10px; }
    .category, .rarity { padding: 2px 6px; border-radius: 8px; font-size: 0.7em; text-transform: uppercase; }
    .category { background: #f8f9fa; color: #495057; }
    .rarity { background: #e3f2fd; color: #1976d2; }
    .challenge-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #17a2b8; }
    .challenge-header { padding: 15px 20px; background: #f8f9fa; display: flex; justify-content: space-between; align-items: center; }
    .challenge-header h4 { margin: 0; color: #2c3e50; font-size: 0.95em; }
    .timeframe { background: #e3f2fd; color: #1976d2; padding: 3px 8px; border-radius: 12px; font-size: 0.7em; font-weight: 500; }
    .challenge-content { padding: 20px; }
    .progress-bar { background: #e9ecef; border-radius: 10px; height: 20px; margin: 15px 0; position: relative; overflow: hidden; }
    .progress-fill { background: linear-gradient(90deg, #17a2b8 0%, #20c997 100%); height: 100%; transition: width 0.3s ease; }
    .progress-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8em; font-weight: 500; color: #2c3e50; }
    .rewards { display: flex; gap: 10px; margin: 15px 0; }
    .reward { font-size: 0.8em; color: #495057; }
    .participate-btn { width: 100%; background: #17a2b8; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; }
    .participate-btn:hover { background: #138496; transform: translateY(-1px); }
`;

const gamifiedLearningStyleSheet = document.createElement('style');
gamifiedLearningStyleSheet.textContent = gamifiedLearningCSS;
document.head.appendChild(gamifiedLearningStyleSheet);

window.gamifiedPaths = new GamifiedLearningPaths();
