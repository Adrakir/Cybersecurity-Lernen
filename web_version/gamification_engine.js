// Advanced Gamification & Achievement System
class GamificationEngine {
    constructor() {
        this.userProgress = this.loadProgress();
        this.achievements = this.initializeAchievements();
        this.leaderboard = this.loadLeaderboard();
        this.dailyChallenges = this.generateDailyChallenges();
        this.streaks = this.loadStreaks();
    }

    initializeAchievements() {
        return {
            // Grundlegende Achievements
            'first_correct': {
                id: 'first_correct',
                name: '🎯 Erste richtige Antwort',
                description: 'Beantworte deine erste Frage korrekt',
                icon: '🎯',
                xp: 10,
                unlocked: false,
                category: 'milestone'
            },
            'streak_5': {
                id: 'streak_5',
                name: '🔥 Streak Master',
                description: '5 richtige Antworten in Folge',
                icon: '🔥',
                xp: 50,
                unlocked: false,
                category: 'streak'
            },
            'speed_demon': {
                id: 'speed_demon',
                name: '⚡ Speed Demon',
                description: 'Beantworte 10 Fragen in unter 5 Sekunden',
                icon: '⚡',
                xp: 75,
                unlocked: false,
                category: 'speed'
            },
            
            // Kategorie-spezifische Achievements
            'security_expert': {
                id: 'security_expert',
                name: '🛡️ Sicherheits-Experte',
                description: '95% Genauigkeit in IT-Sicherheit (min. 20 Fragen)',
                icon: '🛡️',
                xp: 100,
                unlocked: false,
                category: 'expertise'
            },
            'network_ninja': {
                id: 'network_ninja',
                name: '🌐 Netzwerk-Ninja',
                description: '90% Genauigkeit in Netzwerk-Fragen (min. 15 Fragen)',
                icon: '🌐',
                xp: 100,
                unlocked: false,
                category: 'expertise'
            },
            'privacy_guardian': {
                id: 'privacy_guardian',
                name: '🔒 Datenschutz-Wächter',
                description: '100% in allen Datenschutz-Fragen',
                icon: '🔒',
                xp: 125,
                unlocked: false,
                category: 'expertise'
            },

            // Social Achievements
            'helper': {
                id: 'helper',
                name: '🤝 Hilfsbereit',
                description: 'Hilf 5 anderen Nutzern bei Fragen',
                icon: '🤝',
                xp: 60,
                unlocked: false,
                category: 'social'
            },
            'challenger': {
                id: 'challenger',
                name: '⚔️ Herausforderer',
                description: 'Gewinne 3 Duelle gegen andere Nutzer',
                icon: '⚔️',
                xp: 80,
                unlocked: false,
                category: 'social'
            },

            // Time-based Achievements
            'early_bird': {
                id: 'early_bird',
                name: '🌅 Frühaufsteher',
                description: 'Lerne 7 Tage vor 9:00 Uhr',
                icon: '🌅',
                xp: 40,
                unlocked: false,
                category: 'time'
            },
            'night_owl': {
                id: 'night_owl',
                name: '🦉 Nachteule',
                description: 'Lerne 5 Tage nach 22:00 Uhr',
                icon: '🦉',
                xp: 40,
                unlocked: false,
                category: 'time'
            },
            'consistent': {
                id: 'consistent',
                name: '📅 Beständig',
                description: '30 Tage täglich gelernt',
                icon: '📅',
                xp: 200,
                unlocked: false,
                category: 'time'
            },

            // Special Achievements
            'perfectionist': {
                id: 'perfectionist',
                name: '💯 Perfektionist',
                description: '100% in einem kompletten Modul',
                icon: '💯',
                xp: 150,
                unlocked: false,
                category: 'special'
            },
            'explorer': {
                id: 'explorer',
                name: '🗺️ Entdecker',
                description: 'Teste alle verfügbaren Module',
                icon: '🗺️',
                xp: 75,
                unlocked: false,
                category: 'special'
            },
            'ai_student': {
                id: 'ai_student',
                name: '🤖 KI-Schüler',
                description: 'Nutze 10x den KI-Tutor',
                icon: '🤖',
                xp: 50,
                unlocked: false,
                category: 'special'
            }
        };
    }

    // Achievement-Überprüfung nach jeder Frage
    checkAchievements(questionResult) {
        const newAchievements = [];

        // Erste richtige Antwort
        if (questionResult.isCorrect && !this.achievements.first_correct.unlocked) {
            newAchievements.push(this.unlockAchievement('first_correct'));
        }

        // Streak-Achievements
        if (this.userProgress.currentStreak >= 5 && !this.achievements.streak_5.unlocked) {
            newAchievements.push(this.unlockAchievement('streak_5'));
        }

        // Speed-Achievement
        if (questionResult.timeSpent < 5000 && this.userProgress.fastAnswers >= 10 && !this.achievements.speed_demon.unlocked) {
            newAchievements.push(this.unlockAchievement('speed_demon'));
        }

        // Kategorie-Expertise
        this.checkExpertiseAchievements();

        // Zeit-basierte Achievements
        this.checkTimeBasedAchievements();

        return newAchievements;
    }

    checkExpertiseAchievements() {
        const categoryStats = this.userProgress.categoryStats;
        
        // Sicherheits-Experte
        if (categoryStats['IT-Sicherheit']?.accuracy >= 0.95 && 
            categoryStats['IT-Sicherheit']?.totalQuestions >= 20 &&
            !this.achievements.security_expert.unlocked) {
            this.unlockAchievement('security_expert');
        }

        // Netzwerk-Ninja
        if (categoryStats['Netzwerk']?.accuracy >= 0.90 && 
            categoryStats['Netzwerk']?.totalQuestions >= 15 &&
            !this.achievements.network_ninja.unlocked) {
            this.unlockAchievement('network_ninja');
        }

        // Datenschutz-Wächter
        if (categoryStats['Datenschutz']?.accuracy >= 1.0 && 
            categoryStats['Datenschutz']?.totalQuestions >= 10 &&
            !this.achievements.privacy_guardian.unlocked) {
            this.unlockAchievement('privacy_guardian');
        }
    }

    checkTimeBasedAchievements() {
        const now = new Date();
        const hour = now.getHours();

        // Frühaufsteher
        if (hour < 9 && !this.achievements.early_bird.unlocked) {
            this.userProgress.earlyBirdDays = (this.userProgress.earlyBirdDays || 0) + 1;
            if (this.userProgress.earlyBirdDays >= 7) {
                this.unlockAchievement('early_bird');
            }
        }

        // Nachteule
        if (hour >= 22 && !this.achievements.night_owl.unlocked) {
            this.userProgress.nightOwlDays = (this.userProgress.nightOwlDays || 0) + 1;
            if (this.userProgress.nightOwlDays >= 5) {
                this.unlockAchievement('night_owl');
            }
        }

        // Beständigkeit
        if (this.userProgress.consecutiveDays >= 30 && !this.achievements.consistent.unlocked) {
            this.unlockAchievement('consistent');
        }
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || achievement.unlocked) return null;

        achievement.unlocked = true;
        achievement.unlockedAt = new Date();
        
        // XP hinzufügen
        this.addXP(achievement.xp);
        
        // Achievement anzeigen
        this.showAchievementNotification(achievement);
        
        // Speichern
        this.saveProgress();
        
        return achievement;
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <h3>Achievement freigeschaltet!</h3>
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                    <div class="xp-reward">+${achievement.xp} XP</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animation und automatisches Entfernen
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }

    // Level-System
    addXP(amount) {
        this.userProgress.totalXP += amount;
        const oldLevel = this.getCurrentLevel();
        const newLevel = this.calculateLevel(this.userProgress.totalXP);
        
        if (newLevel > oldLevel) {
            this.showLevelUpNotification(newLevel);
            this.unlockLevelRewards(newLevel);
        }
    }

    calculateLevel(totalXP) {
        // Exponentielles Level-System
        return Math.floor(Math.sqrt(totalXP / 100)) + 1;
    }

    getCurrentLevel() {
        return this.calculateLevel(this.userProgress.totalXP);
    }

    getXPForNextLevel() {
        const currentLevel = this.getCurrentLevel();
        const xpForNextLevel = Math.pow(currentLevel, 2) * 100;
        return xpForNextLevel - this.userProgress.totalXP;
    }

    showLevelUpNotification(newLevel) {
        const notification = document.createElement('div');
        notification.className = 'level-up-notification';
        notification.innerHTML = `
            <div class="level-up-content">
                <h2>🎉 LEVEL UP! 🎉</h2>
                <div class="level-display">Level ${newLevel}</div>
                <p>Du hast ein neues Level erreicht!</p>
                <div class="level-rewards">
                    ${this.getLevelRewards(newLevel).map(reward => `<div class="reward">${reward}</div>`).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 6000);
    }

    getLevelRewards(level) {
        const rewards = {
            5: ['🎯 Neue Quiz-Modi freigeschaltet', '🎨 Anpassbare Themes'],
            10: ['🤖 KI-Tutor erweitert', '📊 Detaillierte Statistiken'],
            15: ['🏆 Turnier-Modus', '👥 Gruppen-Challenges'],
            20: ['🎓 Experten-Modus', '📜 Zertifikate'],
            25: ['🌟 Premium Features', '🔮 Zukunfts-Vorhersagen']
        };
        
        return rewards[level] || ['🎁 Spezialbelohnung'];
    }

    unlockLevelRewards(level) {
        // Features basierend auf Level freischalten
        if (level >= 5) {
            this.userProgress.unlockedFeatures.push('custom_themes');
        }
        if (level >= 10) {
            this.userProgress.unlockedFeatures.push('ai_tutor_extended');
        }
        // ... weitere Level-Belohnungen
    }

    // Tägliche Herausforderungen
    generateDailyChallenges() {
        const today = new Date().toDateString();
        const savedChallenges = JSON.parse(localStorage.getItem('daily_challenges')) || {};
        
        if (savedChallenges.date === today) {
            return savedChallenges.challenges;
        }

        const challenges = [
            {
                id: 'daily_streak',
                title: '🔥 Streak aufbauen',
                description: 'Beantworte 5 Fragen in Folge richtig',
                progress: 0,
                target: 5,
                reward: 30,
                completed: false
            },
            {
                id: 'daily_speed',
                title: '⚡ Schnell denken',
                description: 'Beantworte 3 Fragen in unter 10 Sekunden',
                progress: 0,
                target: 3,
                reward: 25,
                completed: false
            },
            {
                id: 'daily_category',
                title: '🎯 Kategorie-Fokus',
                description: `Erreiche 80% in "${this.getRandomCategory()}"`,
                progress: 0,
                target: 80,
                reward: 40,
                completed: false
            },
            {
                id: 'daily_ai',
                title: '🤖 KI-Interaktion',
                description: 'Stelle 3 Fragen an den KI-Tutor',
                progress: 0,
                target: 3,
                reward: 20,
                completed: false
            }
        ];

        localStorage.setItem('daily_challenges', JSON.stringify({
            date: today,
            challenges: challenges
        }));

        return challenges;
    }

    updateDailyChallenge(challengeId, progress) {
        const challenge = this.dailyChallenges.find(c => c.id === challengeId);
        if (challenge && !challenge.completed) {
            challenge.progress = Math.min(challenge.progress + progress, challenge.target);
            
            if (challenge.progress >= challenge.target) {
                challenge.completed = true;
                this.addXP(challenge.reward);
                this.showChallengeCompletedNotification(challenge);
            }
            
            this.saveDailyChallenges();
        }
    }

    showChallengeCompletedNotification(challenge) {
        const notification = document.createElement('div');
        notification.className = 'challenge-notification';
        notification.innerHTML = `
            <div class="challenge-content">
                <h3>🏆 Challenge erfüllt!</h3>
                <h4>${challenge.title}</h4>
                <div class="xp-reward">+${challenge.reward} XP</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Streak-System
    updateStreak(isCorrect) {
        if (isCorrect) {
            this.userProgress.currentStreak++;
            this.userProgress.bestStreak = Math.max(this.userProgress.bestStreak, this.userProgress.currentStreak);
        } else {
            this.userProgress.currentStreak = 0;
        }
        
        this.updateDailyChallenge('daily_streak', isCorrect ? 1 : 0);
    }

    // Leaderboard
    updateLeaderboard(score) {
        const entry = {
            name: this.userProgress.username || 'Anonym',
            score: score,
            level: this.getCurrentLevel(),
            achievements: Object.values(this.achievements).filter(a => a.unlocked).length,
            timestamp: new Date()
        };

        this.leaderboard.push(entry);
        this.leaderboard.sort((a, b) => b.score - a.score);
        this.leaderboard = this.leaderboard.slice(0, 100); // Top 100

        this.saveLeaderboard();
    }

    getLeaderboard(limit = 10) {
        return this.leaderboard.slice(0, limit);
    }

    // Social Features
    createChallenge(friendId, questionCount = 10) {
        const challenge = {
            id: 'challenge_' + Date.now(),
            challenger: this.userProgress.username,
            challenged: friendId,
            questionCount: questionCount,
            status: 'pending',
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24h
        };

        // In einer echten App würde das an einen Server gesendet
        this.saveChallengeToLocalStorage(challenge);
        return challenge;
    }

    // Hilfsfunktionen
    getRandomCategory() {
        const categories = ['IT-Sicherheit', 'Netzwerk', 'Datenschutz', 'Hardware', 'Software'];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    // Speicher-Funktionen
    loadProgress() {
        return JSON.parse(localStorage.getItem('gamification_progress')) || {
            totalXP: 0,
            currentStreak: 0,
            bestStreak: 0,
            consecutiveDays: 0,
            fastAnswers: 0,
            categoryStats: {},
            unlockedFeatures: [],
            username: ''
        };
    }

    saveProgress() {
        localStorage.setItem('gamification_progress', JSON.stringify(this.userProgress));
    }

    loadLeaderboard() {
        return JSON.parse(localStorage.getItem('leaderboard')) || [];
    }

    saveLeaderboard() {
        localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard));
    }

    loadStreaks() {
        return JSON.parse(localStorage.getItem('user_streaks')) || {
            daily: 0,
            weekly: 0,
            monthly: 0
        };
    }

    saveDailyChallenges() {
        const today = new Date().toDateString();
        localStorage.setItem('daily_challenges', JSON.stringify({
            date: today,
            challenges: this.dailyChallenges
        }));
    }

    saveChallengeToLocalStorage(challenge) {
        const challenges = JSON.parse(localStorage.getItem('user_challenges')) || [];
        challenges.push(challenge);
        localStorage.setItem('user_challenges', JSON.stringify(challenges));
    }

    // UI-Funktionen
    renderAchievementsPage() {
        const achievementCategories = {
            'milestone': 'Meilensteine',
            'streak': 'Streak-Master',
            'speed': 'Geschwindigkeit',
            'expertise': 'Expertise',
            'social': 'Sozial',
            'time': 'Zeit-basiert',
            'special': 'Besonders'
        };

        let html = '<div class="achievements-page">';
        html += '<h2>🏆 Deine Erfolge</h2>';
        
        for (const [category, title] of Object.entries(achievementCategories)) {
            html += `<div class="achievement-category">`;
            html += `<h3>${title}</h3>`;
            html += `<div class="achievements-grid">`;
            
            const categoryAchievements = Object.values(this.achievements).filter(a => a.category === category);
            
            categoryAchievements.forEach(achievement => {
                const unlockedClass = achievement.unlocked ? 'unlocked' : 'locked';
                html += `
                    <div class="achievement-card ${unlockedClass}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <h4>${achievement.name}</h4>
                        <p>${achievement.description}</p>
                        <div class="achievement-xp">${achievement.xp} XP</div>
                        ${achievement.unlocked ? `<div class="unlocked-date">Freigeschaltet: ${new Date(achievement.unlockedAt).toLocaleDateString()}</div>` : ''}
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
        
        html += '</div>';
        return html;
    }

    renderProgressDashboard() {
        const level = this.getCurrentLevel();
        const xpForNext = this.getXPForNextLevel();
        const completedAchievements = Object.values(this.achievements).filter(a => a.unlocked).length;
        const totalAchievements = Object.keys(this.achievements).length;

        return `
            <div class="progress-dashboard">
                <div class="level-card">
                    <h3>Level ${level}</h3>
                    <div class="xp-bar">
                        <div class="xp-fill" style="width: ${(this.userProgress.totalXP % 100)}%"></div>
                    </div>
                    <p>${xpForNext} XP bis Level ${level + 1}</p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <h4>🔥 Aktuelle Streak</h4>
                        <div class="stat-value">${this.userProgress.currentStreak}</div>
                    </div>
                    <div class="stat-card">
                        <h4>🏆 Erfolge</h4>
                        <div class="stat-value">${completedAchievements}/${totalAchievements}</div>
                    </div>
                    <div class="stat-card">
                        <h4>⭐ Gesamt XP</h4>
                        <div class="stat-value">${this.userProgress.totalXP}</div>
                    </div>
                </div>
                
                <div class="daily-challenges">
                    <h3>📅 Tägliche Herausforderungen</h3>
                    ${this.renderDailyChallenges()}
                </div>
            </div>
        `;
    }

    renderDailyChallenges() {
        return this.dailyChallenges.map(challenge => {
            const progressPercent = (challenge.progress / challenge.target) * 100;
            const completedClass = challenge.completed ? 'completed' : '';
            
            return `
                <div class="challenge-card ${completedClass}">
                    <h4>${challenge.title}</h4>
                    <p>${challenge.description}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="challenge-reward">+${challenge.reward} XP</div>
                </div>
            `;
        }).join('');
    }
}

// Global Gamification Engine
const gamificationEngine = new GamificationEngine();
