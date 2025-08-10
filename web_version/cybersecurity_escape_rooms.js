// Cybersecurity Escape Rooms - Gamified Security Learning Platform
class CybersecurityEscapeRooms {
    constructor() {
        this.escapeRooms = {};
        this.activeRooms = new Map();
        this.userProgress = new Map();
        this.hints = {};
        this.achievements = {};
        this.initializeEscapeRooms();
    }

    initializeEscapeRooms() {
        this.escapeRooms = {
            // Network Intrusion Room
            network_intrusion: {
                id: "network_intrusion",
                title: "🌐 The Network Breach",
                description: "A hacker has infiltrated the corporate network. Find the entry point and stop the attack!",
                difficulty: "beginner",
                theme: "dark_corporate",
                timeLimit: 30, // minutes
                maxPlayers: 4,
                tags: ["network_security", "forensics", "incident_response"],
                story: {
                    intro: "It's 2 AM and the SOC alarm is blaring. Someone has breached your company's network and is moving laterally through systems. You have 30 minutes before they reach the crown jewels - the customer database.",
                    background: "TechCorp Inc. - A mid-size software company with 500 employees. Recent expansion has led to some security gaps in the network infrastructure.",
                    objective: "Identify the attack vector, trace the attacker's path, and contain the breach before critical data is compromised."
                },
                rooms: [
                    {
                        id: "soc_center",
                        name: "Security Operations Center",
                        description: "The heart of your security monitoring. Multiple screens show network traffic and alerts.",
                        items: [
                            { id: "siem_dashboard", name: "SIEM Dashboard", type: "computer", interactive: true },
                            { id: "firewall_logs", name: "Firewall Logs", type: "document", interactive: true },
                            { id: "network_diagram", name: "Network Diagram", type: "poster", interactive: false },
                            { id: "incident_playbook", name: "Incident Response Playbook", type: "book", interactive: true }
                        ],
                        connections: ["server_room", "network_closet"],
                        clues: [
                            {
                                id: "suspicious_traffic",
                                trigger: "examine_siem_dashboard",
                                text: "Unusual outbound traffic to IP 185.220.101.45 detected at 01:47 AM",
                                type: "network_anomaly"
                            },
                            {
                                id: "failed_logins",
                                trigger: "examine_firewall_logs",
                                text: "Multiple failed VPN login attempts from various geographic locations",
                                type: "authentication_anomaly"
                            }
                        ]
                    },
                    {
                        id: "server_room",
                        name: "Server Room",
                        description: "A climate-controlled room housing critical servers. Something feels off...",
                        items: [
                            { id: "database_server", name: "Database Server", type: "server", interactive: true },
                            { id: "web_server", name: "Web Server", type: "server", interactive: true },
                            { id: "backup_system", name: "Backup System", type: "server", interactive: true },
                            { id: "access_logs", name: "Physical Access Logs", type: "tablet", interactive: true }
                        ],
                        connections: ["soc_center", "it_office"],
                        clues: [
                            {
                                id: "unauthorized_access",
                                trigger: "examine_access_logs",
                                text: "Badge scan recorded at 01:30 AM - Employee John Smith (but he's on vacation!)",
                                type: "physical_security"
                            },
                            {
                                id: "database_anomaly",
                                trigger: "examine_database_server",
                                text: "Unusual queries executed against customer table - SELECT * FROM customers WHERE ...",
                                type: "data_breach"
                            }
                        ]
                    },
                    {
                        id: "it_office",
                        name: "IT Office",
                        description: "Workstations and equipment scattered around. One computer is still logged in...",
                        items: [
                            { id: "admin_workstation", name: "Admin Workstation", type: "computer", interactive: true },
                            { id: "network_equipment", name: "Network Equipment", type: "hardware", interactive: true },
                            { id: "usb_device", name: "Suspicious USB Device", type: "storage", interactive: true },
                            { id: "employee_badge", name: "Employee Badge (John Smith)", type: "card", interactive: true }
                        ],
                        connections: ["server_room", "network_closet"],
                        clues: [
                            {
                                id: "malware_detected",
                                trigger: "examine_admin_workstation",
                                text: "PowerShell execution history shows encoded commands and persistence mechanisms",
                                type: "malware"
                            },
                            {
                                id: "usb_infection",
                                trigger: "examine_usb_device",
                                text: "USB contains BadUSB firmware - automatically executes payload when inserted",
                                type: "malware_vector"
                            }
                        ]
                    },
                    {
                        id: "network_closet",
                        name: "Network Closet",
                        description: "Network switches and cables. A small device you don't recognize is plugged in.",
                        items: [
                            { id: "rogue_device", name: "Rogue Network Device", type: "hardware", interactive: true },
                            { id: "network_switch", name: "Network Switch", type: "hardware", interactive: true },
                            { id: "cable_management", name: "Cable Management Panel", type: "hardware", interactive: false }
                        ],
                        connections: ["soc_center", "it_office"],
                        clues: [
                            {
                                id: "network_tap",
                                trigger: "examine_rogue_device",
                                text: "Device is a network tap - capturing all traffic and sending to external IP",
                                type: "exfiltration"
                            }
                        ]
                    }
                ],
                puzzles: [
                    {
                        id: "trace_attack_vector",
                        title: "Identify the Initial Attack Vector",
                        description: "Based on the evidence, how did the attacker first gain access?",
                        type: "multiple_choice",
                        question: "What was the primary method of initial compromise?",
                        options: [
                            "Phishing email with malicious attachment",
                            "Physical access using stolen badge and BadUSB",
                            "VPN brute force attack",
                            "Web application vulnerability"
                        ],
                        correct_answer: 1,
                        points: 25,
                        explanation: "The attacker used a stolen employee badge to gain physical access and planted a BadUSB device that automatically installed malware."
                    },
                    {
                        id: "lateral_movement",
                        title: "Map the Lateral Movement",
                        description: "Put the attacker's actions in chronological order",
                        type: "sequence",
                        items: [
                            "Physical access using stolen badge",
                            "BadUSB payload execution on admin workstation", 
                            "Network reconnaissance and credential harvesting",
                            "Installation of network tap device",
                            "Database access and data exfiltration"
                        ],
                        correct_sequence: [0, 1, 2, 3, 4],
                        points: 30,
                        explanation: "The attack followed a logical progression from initial access to data exfiltration."
                    },
                    {
                        id: "containment_strategy",
                        title: "Implement Containment",
                        description: "Select the most effective immediate containment actions",
                        type: "multiple_select",
                        question: "Which actions should be taken immediately? (Select all that apply)",
                        options: [
                            "Disable John Smith's badge access",
                            "Remove the rogue network device",
                            "Isolate the compromised admin workstation",
                            "Block communication to IP 185.220.101.45",
                            "Change all admin passwords",
                            "Notify law enforcement immediately"
                        ],
                        correct_answers: [0, 1, 2, 3, 4],
                        points: 35,
                        explanation: "All selected actions help contain the immediate threat. Law enforcement notification comes later in the process."
                    }
                ],
                hints: [
                    {
                        id: "hint_1",
                        cost: 2,
                        text: "Check the timeline of events - when did unusual activity start and what physical access occurred around that time?"
                    },
                    {
                        id: "hint_2", 
                        cost: 3,
                        text: "The USB device isn't just storage - examine what happens when it's connected to a computer."
                    },
                    {
                        id: "hint_3",
                        cost: 5,
                        text: "Look for the connection between the rogue device in the network closet and the suspicious outbound traffic."
                    }
                ],
                rewards: {
                    completion_time_bonus: true,
                    perfect_score_bonus: 50,
                    hint_penalty: -2, // points per hint used
                    skill_experience: {
                        "network_security": 100,
                        "incident_response_basics": 75,
                        "digital_forensics": 50
                    }
                }
            },

            // Ransomware Crisis Room
            ransomware_crisis: {
                id: "ransomware_crisis",
                title: "🦠 Ransomware Crisis Command",
                description: "The hospital's systems are being encrypted! Save patient data and restore operations.",
                difficulty: "intermediate",
                theme: "medical_emergency",
                timeLimit: 45,
                maxPlayers: 6,
                tags: ["ransomware", "crisis_management", "business_continuity"],
                story: {
                    intro: "MedCenter Hospital's IT systems are under ransomware attack. Patient monitoring systems are failing, and surgery schedules are disrupted. Lives are at stake.",
                    background: "A 400-bed hospital serving a metropolitan area. Recent budget cuts led to deferred IT security upgrades.",
                    objective: "Contain the ransomware, maintain critical patient care systems, and coordinate crisis response."
                },
                rooms: [
                    {
                        id: "emergency_command",
                        name: "Emergency Command Center",
                        description: "Hastily setup crisis command center. Phone calls, radio chatter, and urgent discussions fill the air.",
                        items: [
                            { id: "crisis_phone", name: "Crisis Communication Phone", type: "phone", interactive: true },
                            { id: "backup_procedures", name: "Emergency Procedures Manual", type: "book", interactive: true },
                            { id: "staff_directory", name: "Key Personnel Directory", type: "document", interactive: true },
                            { id: "news_alerts", name: "News/Media Alerts", type: "tablet", interactive: true }
                        ]
                    },
                    {
                        id: "it_bunker",
                        name: "IT Emergency Bunker",
                        description: "Backup IT facility with isolated systems and emergency equipment.",
                        items: [
                            { id: "isolated_workstation", name: "Air-Gapped Workstation", type: "computer", interactive: true },
                            { id: "backup_drives", name: "Offline Backup Drives", type: "storage", interactive: true },
                            { id: "network_diagrams", name: "Network Architecture Diagrams", type: "document", interactive: true }
                        ]
                    },
                    {
                        id: "patient_care",
                        name: "Critical Care Unit",
                        description: "Life support systems and patient monitoring. Some systems are failing.",
                        items: [
                            { id: "patient_monitors", name: "Patient Monitoring Systems", type: "medical", interactive: true },
                            { id: "manual_charts", name: "Paper Patient Charts", type: "document", interactive: true },
                            { id: "backup_generator", name: "Emergency Power Systems", type: "infrastructure", interactive: true }
                        ]
                    }
                ],
                puzzles: [
                    {
                        id: "triage_systems",
                        title: "System Triage Priority",
                        description: "Rank systems by criticality for recovery efforts",
                        type: "ranking",
                        items: [
                            "Life support monitoring",
                            "Electronic health records",
                            "Pharmacy management",
                            "Billing systems",
                            "Email and communications",
                            "Facility management"
                        ],
                        correct_order: [0, 2, 4, 1, 5, 3],
                        points: 40
                    },
                    {
                        id: "communication_plan",
                        title: "Crisis Communication Strategy",
                        description: "Choose the appropriate communication approach",
                        type: "scenario_response",
                        scenario: "Media has caught wind of the cyberattack. How do you respond?",
                        options: [
                            "Deny any security incident",
                            "Acknowledge the incident with transparency and focus on patient safety",
                            "No comment until investigation complete",
                            "Blame the attack on foreign adversaries"
                        ],
                        correct_answer: 1,
                        points: 30
                    }
                ]
            },

            // Insider Threat Room
            insider_threat: {
                id: "insider_threat",
                title: "👤 The Insider",
                description: "Someone inside your organization is stealing secrets. Find them before they disappear.",
                difficulty: "advanced",
                theme: "corporate_espionage",
                timeLimit: 60,
                maxPlayers: 3,
                tags: ["insider_threats", "digital_forensics", "behavioral_analysis"],
                story: {
                    intro: "TechStartup's latest product design has appeared on a competitor's website. Someone with inside access is selling company secrets.",
                    background: "A fast-growing tech startup with relaxed security culture and high employee turnover.",
                    objective: "Identify the insider threat through digital forensics and behavioral analysis before they escape with more valuable IP."
                }
            },

            // Social Engineering Room
            social_engineering: {
                id: "social_engineering",
                title: "🎭 The Art of Deception",
                description: "Navigate a world of social engineering attacks and learn to spot manipulation.",
                difficulty: "beginner",
                theme: "modern_office",
                timeLimit: 25,
                maxPlayers: 2,
                tags: ["social_engineering", "awareness", "human_psychology"],
                story: {
                    intro: "You're the new security awareness trainer. Today's challenge: Survive a day filled with social engineering attempts without falling victim.",
                    background: "A typical corporate office where social engineers are testing the security awareness of employees.",
                    objective: "Identify and properly respond to various social engineering tactics throughout your workday."
                }
            }
        };
    }

    startEscapeRoom(userId, roomId, playerCount = 1) {
        const room = this.escapeRooms[roomId];
        if (!room) return null;

        const session = {
            userId,
            roomId,
            playerCount,
            startTime: new Date(),
            timeRemaining: room.timeLimit * 60, // convert to seconds
            currentRoom: room.rooms[0].id,
            visitedRooms: [room.rooms[0].id],
            discoveredClues: [],
            completedPuzzles: [],
            hintsUsed: [],
            inventory: [],
            score: 0,
            status: "active",
            teamMembers: playerCount > 1 ? this.generateTeamMembers(playerCount) : []
        };

        this.activeRooms.set(`${userId}_${roomId}`, session);
        this.initializeUserProgress(userId);

        // Start timer
        this.startRoomTimer(session);

        return session;
    }

    generateTeamMembers(count) {
        const roles = ["Security Analyst", "Network Admin", "Forensics Expert", "Incident Commander"];
        const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley"];
        
        return Array.from({length: count - 1}, (_, i) => ({
            name: names[i % names.length],
            role: roles[i % roles.length],
            skills: this.generateRandomSkills()
        }));
    }

    generateRandomSkills() {
        const skills = ["Network Analysis", "Malware Analysis", "Social Engineering", "Crisis Management"];
        return skills.slice(0, Math.floor(Math.random() * 3) + 1);
    }

    startRoomTimer(session) {
        const interval = setInterval(() => {
            if (session.status !== "active") {
                clearInterval(interval);
                return;
            }

            session.timeRemaining--;
            
            if (session.timeRemaining <= 0) {
                session.status = "time_expired";
                this.endEscapeRoom(session, "timeout");
                clearInterval(interval);
            }
        }, 1000);

        session.timerInterval = interval;
    }

    examineItem(userId, roomId, itemId) {
        const sessionKey = `${userId}_${roomId}`;
        const session = this.activeRooms.get(sessionKey);
        if (!session) return null;

        const room = this.escapeRooms[roomId];
        const currentRoomData = room.rooms.find(r => r.id === session.currentRoom);
        const item = currentRoomData.items.find(i => i.id === itemId);

        if (!item || !item.interactive) {
            return { success: false, message: "Cannot examine this item" };
        }

        // Check for triggered clues
        const triggeredClues = currentRoomData.clues?.filter(clue => 
            clue.trigger === `examine_${itemId}` && !session.discoveredClues.includes(clue.id)
        ) || [];

        triggeredClues.forEach(clue => {
            session.discoveredClues.push(clue.id);
            session.score += 5; // Points for discovering clues
        });

        return {
            success: true,
            item: item,
            clues: triggeredClues,
            message: `Examined ${item.name}`,
            newCluesFound: triggeredClues.length
        };
    }

    solvePuzzle(userId, roomId, puzzleId, answer) {
        const sessionKey = `${userId}_${roomId}`;
        const session = this.activeRooms.get(sessionKey);
        if (!session) return null;

        const room = this.escapeRooms[roomId];
        const puzzle = room.puzzles.find(p => p.id === puzzleId);
        
        if (!puzzle || session.completedPuzzles.includes(puzzleId)) {
            return { success: false, message: "Puzzle not available or already completed" };
        }

        const isCorrect = this.validatePuzzleAnswer(puzzle, answer);
        
        if (isCorrect) {
            session.completedPuzzles.push(puzzleId);
            session.score += puzzle.points;
            
            // Check if room is complete
            const allPuzzlesComplete = room.puzzles.every(p => session.completedPuzzles.includes(p.id));
            if (allPuzzlesComplete) {
                this.completeEscapeRoom(session, room);
            }

            return {
                success: true,
                points: puzzle.points,
                explanation: puzzle.explanation,
                roomComplete: allPuzzlesComplete
            };
        } else {
            return {
                success: false,
                message: "Incorrect answer. Try again!",
                hint: puzzle.hint || "Review the clues you've discovered"
            };
        }
    }

    validatePuzzleAnswer(puzzle, answer) {
        switch (puzzle.type) {
            case "multiple_choice":
                return answer === puzzle.correct_answer;
            case "sequence":
                return JSON.stringify(answer) === JSON.stringify(puzzle.correct_sequence);
            case "multiple_select":
                return JSON.stringify(answer.sort()) === JSON.stringify(puzzle.correct_answers.sort());
            case "text_input":
                return answer.toLowerCase().trim() === puzzle.correct_answer.toLowerCase().trim();
            default:
                return false;
        }
    }

    useHint(userId, roomId, hintId) {
        const sessionKey = `${userId}_${roomId}`;
        const session = this.activeRooms.get(sessionKey);
        if (!session) return null;

        const room = this.escapeRooms[roomId];
        const hint = room.hints.find(h => h.id === hintId);
        
        if (!hint || session.hintsUsed.includes(hintId)) {
            return { success: false, message: "Hint not available or already used" };
        }

        session.hintsUsed.push(hintId);
        session.score += room.rewards.hint_penalty * hint.cost;

        return {
            success: true,
            hint: hint.text,
            pointsPenalty: room.rewards.hint_penalty * hint.cost
        };
    }

    completeEscapeRoom(session, room) {
        session.status = "completed";
        session.endTime = new Date();
        session.completionTime = (session.endTime - session.startTime) / 1000 / 60; // minutes

        // Calculate time bonus
        if (room.rewards.completion_time_bonus && session.completionTime < room.timeLimit * 0.75) {
            const timeBonus = Math.round((room.timeLimit - session.completionTime) * 2);
            session.score += timeBonus;
        }

        // Perfect score bonus
        if (session.hintsUsed.length === 0 && session.completedPuzzles.length === room.puzzles.length) {
            session.score += room.rewards.perfect_score_bonus || 0;
        }

        this.updateUserProgress(session.userId, room, session);
        this.awardRewards(session.userId, room, session);

        clearInterval(session.timerInterval);
    }

    endEscapeRoom(session, reason) {
        session.status = reason;
        session.endTime = new Date();
        clearInterval(session.timerInterval);
    }

    updateUserProgress(userId, room, session) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                completedRooms: [],
                totalScore: 0,
                averageTime: 0,
                favoriteThemes: [],
                achievements: []
            });
        }

        const progress = this.userProgress.get(userId);
        progress.completedRooms.push({
            roomId: room.id,
            score: session.score,
            completionTime: session.completionTime,
            hintsUsed: session.hintsUsed.length,
            completedAt: new Date()
        });

        progress.totalScore += session.score;
    }

    awardRewards(userId, room, session) {
        // Award achievements
        if (window.achievementSystem) {
            window.achievementSystem.updateProgress(userId, 'escape_artist', 1);
            
            if (session.hintsUsed.length === 0) {
                window.achievementSystem.updateProgress(userId, 'puzzle_master', 1);
            }
            
            if (session.completionTime < room.timeLimit * 0.5) {
                window.achievementSystem.updateProgress(userId, 'speed_demon', 1);
            }
        }

        // Award skill experience
        if (window.skillTree && room.rewards.skill_experience) {
            Object.entries(room.rewards.skill_experience).forEach(([skillId, experience]) => {
                window.skillTree.addExperience(userId, skillId, experience, 'escape_room');
            });
        }
    }

    initializeUserProgress(userId) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                completedRooms: [],
                totalScore: 0,
                averageTime: 0,
                favoriteThemes: [],
                achievements: []
            });
        }
    }

    renderEscapeRooms() {
        return `
            <div class="escape-rooms-container">
                <div class="escape-rooms-header">
                    <h1>🎮 Cybersecurity Escape Rooms</h1>
                    <p>Gamified security learning through immersive puzzle-solving adventures</p>
                </div>
                
                <div class="escape-rooms-grid">
                    ${Object.values(this.escapeRooms).map(room => 
                        this.renderEscapeRoomCard(room)
                    ).join('')}
                </div>
            </div>
        `;
    }

    renderEscapeRoomCard(room) {
        const difficultyClass = `difficulty-${room.difficulty}`;
        const difficultyStars = '⭐'.repeat(room.difficulty === 'beginner' ? 1 : room.difficulty === 'intermediate' ? 2 : 3);
        
        return `
            <div class="escape-room-card ${difficultyClass}" onclick="escapeRooms.startRoomFlow('${room.id}')">
                <div class="room-header">
                    <h3>${room.title}</h3>
                    <div class="room-meta">
                        <span class="difficulty">${difficultyStars} ${room.difficulty}</span>
                        <span class="time-limit">⏱️ ${room.timeLimit}min</span>
                    </div>
                </div>
                
                <div class="room-description">
                    <p>${room.description}</p>
                </div>
                
                <div class="room-story">
                    <h4>📖 Story</h4>
                    <p>${room.story.intro}</p>
                </div>
                
                <div class="room-details">
                    <div class="detail-row">
                        <span class="label">Players:</span>
                        <span class="value">1-${room.maxPlayers}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Theme:</span>
                        <span class="value">${room.theme.replace('_', ' ')}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Rooms:</span>
                        <span class="value">${room.rooms ? room.rooms.length : 'Multiple'}</span>
                    </div>
                </div>
                
                <div class="room-tags">
                    ${room.tags.map(tag => `<span class="tag">${tag.replace('_', ' ')}</span>`).join('')}
                </div>
                
                <div class="room-objective">
                    <h4>🎯 Objective</h4>
                    <p>${room.story.objective}</p>
                </div>
            </div>
        `;
    }

    startRoomFlow(roomId) {
        const room = this.escapeRooms[roomId];
        if (!room) return;

        // Show room briefing modal
        const modal = document.createElement('div');
        modal.className = 'room-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🎮 ${room.title}</h2>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                
                <div class="room-briefing">
                    <div class="story-section">
                        <h3>📖 Mission Briefing</h3>
                        <p><strong>Background:</strong> ${room.story.background}</p>
                        <p><strong>Situation:</strong> ${room.story.intro}</p>
                        <p><strong>Your Mission:</strong> ${room.story.objective}</p>
                    </div>
                    
                    <div class="game-setup">
                        <h3>⚙️ Game Setup</h3>
                        <div class="setup-options">
                            <div class="option-group">
                                <label>Number of Players:</label>
                                <select id="player-count">
                                    ${Array.from({length: room.maxPlayers}, (_, i) => 
                                        `<option value="${i + 1}">${i + 1} Player${i > 0 ? 's' : ''}</option>`
                                    ).join('')}
                                </select>
                            </div>
                            
                            <div class="option-group">
                                <label>Difficulty Hint Level:</label>
                                <select id="hint-level">
                                    <option value="none">No Hints (Maximum Challenge)</option>
                                    <option value="minimal">Minimal Hints</option>
                                    <option value="standard" selected>Standard Hints</option>
                                    <option value="guided">Guided Experience</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="time-warning">
                            <h4>⏰ Time Limit: ${room.timeLimit} minutes</h4>
                            <p>Once started, the clock begins ticking. Make sure you have uninterrupted time to complete the challenge!</p>
                        </div>
                        
                        <button onclick="escapeRooms.launchRoom('${roomId}')" class="launch-room-btn">
                            🚀 Enter the Room
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    launchRoom(roomId) {
        const userId = 'current_user';
        const playerCount = parseInt(document.getElementById('player-count')?.value || '1');
        const hintLevel = document.getElementById('hint-level')?.value || 'standard';
        
        const session = this.startEscapeRoom(userId, roomId, playerCount);
        
        // Store hint level preference
        session.hintLevel = hintLevel;
        
        // Close modal
        document.querySelector('.room-modal')?.remove();
        
        // Show game start message
        alert(`Welcome to "${this.escapeRooms[roomId].title}"!\n\nPlayers: ${playerCount}\nTime Limit: ${this.escapeRooms[roomId].timeLimit} minutes\nHint Level: ${hintLevel}\n\nThe escape room has begun. Good luck!`);
        
        console.log('Escape room session started:', session);
    }
}

// CSS for Cybersecurity Escape Rooms
const escapeRoomsCSS = `
    .escape-rooms-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .escape-rooms-header {
        text-align: center;
        background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .escape-rooms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 25px;
    }
    
    .escape-room-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #e9ecef;
    }
    
    .escape-room-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .escape-room-card.difficulty-beginner {
        border-left-color: #28a745;
    }
    
    .escape-room-card.difficulty-intermediate {
        border-left-color: #ffc107;
    }
    
    .escape-room-card.difficulty-advanced {
        border-left-color: #dc3545;
    }
    
    .room-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .room-header h3 {
        margin: 0;
        color: #2c3e50;
    }
    
    .room-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
    }
    
    .difficulty, .time-limit {
        font-size: 0.8em;
        padding: 2px 8px;
        border-radius: 12px;
        background: #f8f9fa;
        color: #495057;
    }
    
    .room-description {
        margin-bottom: 20px;
    }
    
    .room-description p {
        color: #495057;
        line-height: 1.5;
        margin: 0;
    }
    
    .room-story {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .room-story h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .room-story p {
        margin: 0;
        color: #495057;
        font-size: 0.9em;
        font-style: italic;
    }
    
    .room-details {
        margin-bottom: 15px;
    }
    
    .detail-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    
    .detail-row .label {
        color: #6c757d;
        font-size: 0.9em;
    }
    
    .detail-row .value {
        color: #2c3e50;
        font-weight: 500;
        font-size: 0.9em;
    }
    
    .room-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 20px;
    }
    
    .tag {
        background: #e3f2fd;
        color: #1976d2;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: 500;
        text-transform: capitalize;
    }
    
    .room-objective {
        border-top: 1px solid #e9ecef;
        padding-top: 15px;
    }
    
    .room-objective h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .room-objective p {
        margin: 0;
        color: #495057;
        font-size: 0.9em;
    }
    
    .room-modal {
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
    
    .room-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 700px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 0;
    }
    
    .room-modal .modal-header {
        background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
    }
    
    .room-modal .modal-header button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }
    
    .room-briefing {
        padding: 30px;
    }
    
    .story-section {
        margin-bottom: 30px;
    }
    
    .story-section h3 {
        color: #2c3e50;
        margin-bottom: 15px;
    }
    
    .story-section p {
        margin-bottom: 10px;
        color: #495057;
        line-height: 1.5;
    }
    
    .game-setup h3 {
        color: #2c3e50;
        margin-bottom: 20px;
    }
    
    .setup-options {
        margin-bottom: 25px;
    }
    
    .option-group {
        margin-bottom: 15px;
    }
    
    .option-group label {
        display: block;
        margin-bottom: 5px;
        color: #495057;
        font-weight: 500;
    }
    
    .option-group select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        font-size: 0.9em;
    }
    
    .time-warning {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 25px;
    }
    
    .time-warning h4 {
        margin: 0 0 8px 0;
        color: #856404;
    }
    
    .time-warning p {
        margin: 0;
        color: #856404;
        font-size: 0.9em;
    }
    
    .launch-room-btn {
        width: 100%;
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 10px;
        font-size: 1.1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .launch-room-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
    }
    
    @media (max-width: 768px) {
        .escape-rooms-grid {
            grid-template-columns: 1fr;
        }
        
        .room-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }
        
        .room-meta {
            align-items: flex-start;
        }
    }
`;

// Style hinzufügen
const escapeRoomsStyleSheet = document.createElement('style');
escapeRoomsStyleSheet.textContent = escapeRoomsCSS;
document.head.appendChild(escapeRoomsStyleSheet);

// Global instance
window.escapeRooms = new CybersecurityEscapeRooms();
