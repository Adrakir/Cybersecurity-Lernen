// Achievement System für Cybersecurity Learning Platform
class AchievementSystem {
    constructor() {
        this.achievements = this.loadAchievements();
        this.userProgress = this.loadUserProgress();
        this.unlockedAchievements = this.loadUnlockedAchievements();
        this.init();
    }

    init() {
        this.createAchievementUI();
        this.checkStartupAchievements();
    }

    loadAchievements() {
        return {
            // Grundlagen Achievements
            "first_login": {
                id: "first_login",
                title: "🚀 Willkommen an Bord!",
                description: "Erste Anmeldung in der Cybersecurity-Plattform",
                category: "Grundlagen",
                points: 50,
                rarity: "common",
                icon: "🎯",
                unlocked: false,
                condition: () => true
            },
            "quiz_rookie": {
                id: "quiz_rookie",
                title: "📚 Quiz-Neuling",
                description: "Erstes Quiz erfolgreich abgeschlossen",
                category: "Quiz",
                points: 100,
                rarity: "common",
                icon: "📝",
                unlocked: false,
                condition: () => this.userProgress.quizzesCompleted >= 1
            },
            "perfect_score": {
                id: "perfect_score",
                title: "💯 Perfektionist",
                description: "100% Punktzahl in einem Quiz erreicht",
                category: "Quiz",
                points: 250,
                rarity: "uncommon",
                icon: "⭐",
                unlocked: false,
                condition: () => this.userProgress.perfectScores >= 1
            },

            // Phishing & Social Engineering
            "phishing_detective": {
                id: "phishing_detective",
                title: "🎣 Phishing-Detektiv",
                description: "10 Phishing-E-Mails korrekt identifiziert",
                category: "Phishing",
                points: 300,
                rarity: "uncommon",
                icon: "🕵️",
                unlocked: false,
                condition: () => this.userProgress.phishingDetected >= 10
            },
            "phishing_expert": {
                id: "phishing_expert",
                title: "🏆 Phishing-Experte",
                description: "50 Phishing-Versuche erfolgreich abgewehrt",
                category: "Phishing",
                points: 500,
                rarity: "rare",
                icon: "🛡️",
                unlocked: false,
                condition: () => this.userProgress.phishingDetected >= 50
            },
            "social_engineer_nemesis": {
                id: "social_engineer_nemesis",
                title: "🧠 Social Engineering Nemesis",
                description: "Alle Social Engineering Szenarien gemeistert",
                category: "Social Engineering",
                points: 750,
                rarity: "epic",
                icon: "🧩",
                unlocked: false,
                condition: () => this.userProgress.socialEngineeringCompleted >= 20
            },

            // Malware & Ransomware
            "malware_hunter": {
                id: "malware_hunter",
                title: "🦠 Malware-Jäger",
                description: "25 verschiedene Malware-Arten identifiziert",
                category: "Malware",
                points: 400,
                rarity: "uncommon",
                icon: "🔍",
                unlocked: false,
                condition: () => this.userProgress.malwareIdentified >= 25
            },
            "ransomware_defender": {
                id: "ransomware_defender",
                title: "🛡️ Ransomware-Verteidiger",
                description: "Alle Ransomware-Szenarien erfolgreich abgewehrt",
                category: "Ransomware",
                points: 1000,
                rarity: "legendary",
                icon: "⚔️",
                unlocked: false,
                condition: () => this.userProgress.ransomwareDefended >= 15
            },

            // Incident Response
            "incident_rookie": {
                id: "incident_rookie",
                title: "🚨 Incident-Neuling",
                description: "Ersten Sicherheitsvorfall erfolgreich behandelt",
                category: "Incident Response",
                points: 200,
                rarity: "common",
                icon: "🚑",
                unlocked: false,
                condition: () => this.userProgress.incidentsHandled >= 1
            },
            "incident_commander": {
                id: "incident_commander",
                title: "👨‍💼 Incident Commander",
                description: "10 komplexe Sicherheitsvorfälle erfolgreich koordiniert",
                category: "Incident Response",
                points: 800,
                rarity: "epic",
                icon: "📋",
                unlocked: false,
                condition: () => this.userProgress.incidentsHandled >= 10
            },
            "crisis_manager": {
                id: "crisis_manager",
                title: "🎯 Krisenmanager",
                description: "Großen Cyberangriff erfolgreich abgewehrt",
                category: "Incident Response",
                points: 1500,
                rarity: "legendary",
                icon: "🏆",
                unlocked: false,
                condition: () => this.userProgress.majorIncidentsHandled >= 1
            },

            // Netzwerk & Infrastruktur
            "network_guardian": {
                id: "network_guardian",
                title: "🌐 Netzwerk-Wächter",
                description: "Alle Netzwerk-Sicherheitsmodule abgeschlossen",
                category: "Netzwerk",
                points: 600,
                rarity: "rare",
                icon: "🔒",
                unlocked: false,
                condition: () => this.userProgress.networkModulesCompleted >= 15
            },
            "firewall_master": {
                id: "firewall_master",
                title: "🔥 Firewall-Meister",
                description: "Firewall-Konfiguration perfekt gemeistert",
                category: "Netzwerk",
                points: 700,
                rarity: "epic",
                icon: "🛡️",
                unlocked: false,
                condition: () => this.userProgress.firewallConfigsCorrect >= 10
            },

            // Compliance & Governance
            "compliance_rookie": {
                id: "compliance_rookie",
                title: "📋 Compliance-Neuling",
                description: "Erste Compliance-Schulung erfolgreich abgeschlossen",
                category: "Compliance",
                points: 150,
                rarity: "common",
                icon: "✅",
                unlocked: false,
                condition: () => this.userProgress.complianceModulesCompleted >= 1
            },
            "gdpr_expert": {
                id: "gdpr_expert",
                title: "🇪🇺 DSGVO-Experte",
                description: "Alle DSGVO-Module mit 90%+ abgeschlossen",
                category: "Compliance",
                points: 800,
                rarity: "epic",
                icon: "⚖️",
                unlocked: false,
                condition: () => this.userProgress.gdprExpertise >= 90
            },

            // Spezial Achievements
            "night_owl": {
                id: "night_owl",
                title: "🦉 Nachteule",
                description: "Learning Session zwischen 23:00 und 05:00 Uhr",
                category: "Spezial",
                points: 100,
                rarity: "uncommon",
                icon: "🌙",
                unlocked: false,
                condition: () => this.isNightTime()
            },
            "weekend_warrior": {
                id: "weekend_warrior",
                title: "⚔️ Wochenend-Krieger",
                description: "Am Wochenende fleißig gelernt",
                category: "Spezial",
                points: 150,
                rarity: "uncommon",
                icon: "📅",
                unlocked: false,
                condition: () => this.isWeekend()
            },
            "streak_master": {
                id: "streak_master",
                title: "🔥 Streak-Meister",
                description: "7 Tage hintereinander gelernt",
                category: "Spezial",
                points: 500,
                rarity: "rare",
                icon: "📈",
                unlocked: false,
                condition: () => this.userProgress.learningStreak >= 7
            },
            "knowledge_seeker": {
                id: "knowledge_seeker",
                title: "🧠 Wissenssucher",
                description: "100 verschiedene Lernmodule abgeschlossen",
                category: "Spezial",
                points: 1000,
                rarity: "epic",
                icon: "📚",
                unlocked: false,
                condition: () => this.userProgress.modulesCompleted >= 100
            },

            // Community Achievements
            "helpful_mentor": {
                id: "helpful_mentor",
                title: "👨‍🏫 Hilfreicher Mentor",
                description: "10 anderen Lernenden geholfen",
                category: "Community",
                points: 400,
                rarity: "rare",
                icon: "🤝",
                unlocked: false,
                condition: () => this.userProgress.helpedOthers >= 10
            },
            "team_player": {
                id: "team_player",
                title: "👥 Teamplayer",
                description: "An 5 Team-Challenges teilgenommen",
                category: "Community",
                points: 300,
                rarity: "uncommon",
                icon: "⚽",
                unlocked: false,
                condition: () => this.userProgress.teamChallenges >= 5
            }
        };
    }

    loadUserProgress() {
        const saved = localStorage.getItem('cybersec_user_progress');
        return saved ? JSON.parse(saved) : {
            quizzesCompleted: 0,
            perfectScores: 0,
            phishingDetected: 0,
            malwareIdentified: 0,
            incidentsHandled: 0,
            majorIncidentsHandled: 0,
            ransomwareDefended: 0,
            socialEngineeringCompleted: 0,
            networkModulesCompleted: 0,
            firewallConfigsCorrect: 0,
            complianceModulesCompleted: 0,
            gdprExpertise: 0,
            learningStreak: 0,
            modulesCompleted: 0,
            helpedOthers: 0,
            teamChallenges: 0,
            totalPoints: 0,
            sessionCount: 0,
            startDate: new Date().toISOString()
        };
    }

    loadUnlockedAchievements() {
        const saved = localStorage.getItem('cybersec_achievements');
        return saved ? JSON.parse(saved) : [];
    }

    saveProgress() {
        localStorage.setItem('cybersec_user_progress', JSON.stringify(this.userProgress));
        localStorage.setItem('cybersec_achievements', JSON.stringify(this.unlockedAchievements));
    }

    checkAchievements() {
        Object.values(this.achievements).forEach(achievement => {
            if (!achievement.unlocked && !this.unlockedAchievements.includes(achievement.id)) {
                if (achievement.condition()) {
                    this.unlockAchievement(achievement.id);
                }
            }
        });
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || this.unlockedAchievements.includes(achievementId)) return;

        achievement.unlocked = true;
        this.unlockedAchievements.push(achievementId);
        this.userProgress.totalPoints += achievement.points;
        
        this.showAchievementNotification(achievement);
        this.saveProgress();
        this.updateAchievementDisplay();
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = `achievement-notification ${achievement.rarity}`;
        notification.innerHTML = `
            <div class="achievement-popup">
                <div class="achievement-header">
                    <span class="achievement-icon">${achievement.icon}</span>
                    <div class="achievement-text">
                        <h3>Achievement Unlocked!</h3>
                        <h4>${achievement.title}</h4>
                        <p>${achievement.description}</p>
                        <div class="achievement-points">+${achievement.points} Punkte</div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animation und Auto-Remove
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 500);
        }, 4000);

        // Sound Effect (optional)
        this.playAchievementSound(achievement.rarity);
    }

    playAchievementSound(rarity) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const frequencies = {
                'common': [523.25, 659.25, 783.99],
                'uncommon': [523.25, 659.25, 783.99, 1046.50],
                'rare': [440, 554.37, 659.25, 880],
                'epic': [523.25, 659.25, 783.99, 1046.50, 1318.51],
                'legendary': [440, 554.37, 659.25, 783.99, 1046.50, 1318.51]
            };

            const freq = frequencies[rarity] || frequencies.common;
            freq.forEach((f, i) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(f, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.2);
                }, i * 100);
            });
        } catch (e) {
            console.log('Audio nicht verfügbar');
        }
    }

    createAchievementUI() {
        // Achievement Button im Hauptmenü hinzufügen
        const mainMenu = document.getElementById('mainMenu');
        if (mainMenu) {
            const achievementBtn = document.createElement('button');
            achievementBtn.className = 'btn btn-outline-primary achievement-btn';
            achievementBtn.innerHTML = `
                <i class="fas fa-trophy me-2"></i>
                Achievements
                <span class="achievement-count">${this.unlockedAchievements.length}</span>
            `;
            achievementBtn.onclick = () => this.showAchievementOverview();
            
            // Nach dem ersten Button einfügen
            const firstBtn = mainMenu.querySelector('.btn');
            if (firstBtn) {
                firstBtn.parentNode.insertBefore(achievementBtn, firstBtn.nextSibling);
            }
        }
    }

    showAchievementOverview() {
        const categories = this.groupAchievementsByCategory();
        const totalPoints = this.userProgress.totalPoints;
        const completionRate = Math.round((this.unlockedAchievements.length / Object.keys(this.achievements).length) * 100);

        const html = `
            <div class="achievement-overview">
                <div class="achievement-header">
                    <h2><i class="fas fa-trophy text-warning me-3"></i>Achievements & Erfolge</h2>
                    <div class="achievement-stats">
                        <div class="stat-card">
                            <div class="stat-number">${this.unlockedAchievements.length}</div>
                            <div class="stat-label">Freigeschaltet</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${totalPoints}</div>
                            <div class="stat-label">Gesamtpunkte</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${completionRate}%</div>
                            <div class="stat-label">Abgeschlossen</div>
                        </div>
                    </div>
                    <button class="btn btn-secondary" onclick="showMainMenu()">
                        <i class="fas fa-arrow-left me-2"></i>Zurück
                    </button>
                </div>

                <div class="achievement-progress-bar">
                    <div class="progress">
                        <div class="progress-bar" style="width: ${completionRate}%"></div>
                    </div>
                    <span>${this.unlockedAchievements.length} / ${Object.keys(this.achievements).length}</span>
                </div>

                <div class="achievement-categories">
                    ${Object.entries(categories).map(([category, achievements]) => `
                        <div class="achievement-category">
                            <h3>${category}</h3>
                            <div class="achievement-grid">
                                ${achievements.map(achievement => this.renderAchievementCard(achievement)).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.getElementById('content').innerHTML = html;
    }

    groupAchievementsByCategory() {
        const categories = {};
        Object.values(this.achievements).forEach(achievement => {
            if (!categories[achievement.category]) {
                categories[achievement.category] = [];
            }
            categories[achievement.category].push(achievement);
        });
        return categories;
    }

    renderAchievementCard(achievement) {
        const isUnlocked = this.unlockedAchievements.includes(achievement.id);
        
        return `
            <div class="achievement-card ${achievement.rarity} ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon-large">${achievement.icon}</div>
                <div class="achievement-info">
                    <h4>${achievement.title}</h4>
                    <p>${achievement.description}</p>
                    <div class="achievement-meta">
                        <span class="points">+${achievement.points} Punkte</span>
                        <span class="rarity ${achievement.rarity}">${achievement.rarity}</span>
                    </div>
                    ${isUnlocked ? '<div class="unlocked-badge">✓ Freigeschaltet</div>' : '<div class="locked-badge">🔒 Gesperrt</div>'}
                </div>
            </div>
        `;
    }

    // Hilfsfunktionen
    isNightTime() {
        const hour = new Date().getHours();
        return hour >= 23 || hour <= 5;
    }

    isWeekend() {
        const day = new Date().getDay();
        return day === 0 || day === 6;
    }

    checkStartupAchievements() {
        this.userProgress.sessionCount++;
        
        // First Login Achievement
        if (this.userProgress.sessionCount === 1) {
            this.unlockAchievement('first_login');
        }

        // Night Owl Achievement
        if (this.isNightTime()) {
            this.unlockAchievement('night_owl');
        }

        // Weekend Warrior Achievement
        if (this.isWeekend()) {
            this.unlockAchievement('weekend_warrior');
        }

        this.saveProgress();
    }

    // Public Methods für Integration
    incrementProgress(type, amount = 1) {
        if (this.userProgress[type] !== undefined) {
            this.userProgress[type] += amount;
            this.checkAchievements();
            this.saveProgress();
        }
    }

    updateAchievementDisplay() {
        const achievementBtn = document.querySelector('.achievement-btn .achievement-count');
        if (achievementBtn) {
            achievementBtn.textContent = this.unlockedAchievements.length;
        }
    }
}

// CSS für Achievement System
const achievementCSS = `
    .achievement-btn {
        position: relative;
        margin: 10px;
    }

    .achievement-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background: #ff6b6b;
        color: white;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        font-weight: bold;
    }

    .achievement-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.5s ease-in-out;
    }

    .achievement-notification.show {
        transform: translateX(0);
    }

    .achievement-notification.hide {
        transform: translateX(400px);
    }

    .achievement-popup {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        min-width: 350px;
    }

    .achievement-header {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .achievement-icon {
        font-size: 3em;
    }

    .achievement-text h3 {
        margin: 0;
        font-size: 1.2em;
        opacity: 0.8;
    }

    .achievement-text h4 {
        margin: 5px 0;
        font-size: 1.4em;
    }

    .achievement-text p {
        margin: 5px 0;
        opacity: 0.9;
    }

    .achievement-points {
        background: rgba(255,255,255,0.2);
        padding: 5px 10px;
        border-radius: 15px;
        font-weight: bold;
        display: inline-block;
        margin-top: 10px;
    }

    .achievement-overview {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .achievement-stats {
        display: flex;
        gap: 20px;
        margin: 20px 0;
    }

    .stat-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        flex: 1;
    }

    .stat-number {
        font-size: 2.5em;
        font-weight: bold;
        color: #007bff;
    }

    .stat-label {
        color: #6c757d;
        margin-top: 5px;
    }

    .achievement-progress-bar {
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .progress {
        flex: 1;
        height: 20px;
        background: #e9ecef;
        border-radius: 10px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: linear-gradient(45deg, #28a745, #20c997);
        transition: width 0.5s ease;
    }

    .achievement-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }

    .achievement-card {
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        border-left: 5px solid #ddd;
    }

    .achievement-card:hover {
        transform: translateY(-5px);
    }

    .achievement-card.unlocked {
        border-left-color: #28a745;
    }

    .achievement-card.locked {
        opacity: 0.6;
        border-left-color: #6c757d;
    }

    .achievement-card.common { border-left-color: #6c757d; }
    .achievement-card.uncommon { border-left-color: #28a745; }
    .achievement-card.rare { border-left-color: #007bff; }
    .achievement-card.epic { border-left-color: #6f42c1; }
    .achievement-card.legendary { border-left-color: #fd7e14; }

    .achievement-icon-large {
        font-size: 3em;
        text-align: center;
        margin-bottom: 15px;
    }

    .achievement-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    .points {
        background: #e9ecef;
        padding: 5px 10px;
        border-radius: 15px;
        font-weight: bold;
        color: #495057;
    }

    .rarity {
        padding: 3px 8px;
        border-radius: 10px;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .rarity.common { background: #6c757d; color: white; }
    .rarity.uncommon { background: #28a745; color: white; }
    .rarity.rare { background: #007bff; color: white; }
    .rarity.epic { background: #6f42c1; color: white; }
    .rarity.legendary { background: #fd7e14; color: white; }

    .unlocked-badge {
        background: #28a745;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9em;
        margin-top: 10px;
        text-align: center;
    }

    .locked-badge {
        background: #6c757d;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9em;
        margin-top: 10px;
        text-align: center;
    }

    .achievement-category {
        margin: 30px 0;
    }

    .achievement-category h3 {
        color: #495057;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
`;

// Style hinzufügen
const achievementStyleSheet = document.createElement('style');
achievementStyleSheet.textContent = achievementCSS;
document.head.appendChild(achievementStyleSheet);

// Global verfügbar machen
window.AchievementSystem = AchievementSystem;

// Auto-Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    window.achievementSystem = new AchievementSystem();
});
