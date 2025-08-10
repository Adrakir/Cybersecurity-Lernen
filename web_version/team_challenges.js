// Team Challenges - Cooperative Cybersecurity Learning
class TeamChallenges {
    constructor() {
        this.activeRooms = new Map();
        this.userRooms = new Map();
        this.challenges = {};
        this.teamResults = new Map();
        this.currentUser = null;
        this.websocketConnection = null;
        this.initializeChallenges();
    }

    initializeChallenges() {
        // Incident Response Team Challenge
        this.challenges.incident_response = {
            id: "incident_response",
            title: "🚨 Cyber-Incident Response Team",
            description: "Koordiniertes Vorgehen bei einem großen Sicherheitsvorfall",
            teamSize: { min: 3, max: 6 },
            duration: 45,
            difficulty: "expert",
            roles: [
                {
                    name: "Incident Commander",
                    icon: "👨‍💼",
                    description: "Leitet die Incident Response, koordiniert Teams, trifft strategische Entscheidungen",
                    responsibilities: [
                        "Gesamtkoordination des Incidents",
                        "Kommunikation mit Stakeholdern",
                        "Strategische Entscheidungen treffen",
                        "Eskalationsmanagement"
                    ],
                    tasks: [
                        "Incident severity assessment",
                        "Resource allocation",
                        "External communication",
                        "Post-incident review planning"
                    ]
                },
                {
                    name: "Security Analyst",
                    icon: "🔍",
                    description: "Analysiert die Bedrohung, sammelt forensische Beweise",
                    responsibilities: [
                        "Threat analysis und IOC extraction",
                        "Forensische Untersuchung",
                        "Malware-Analyse",
                        "Timeline reconstruction"
                    ],
                    tasks: [
                        "Log analysis",
                        "Malware reverse engineering",
                        "Network forensics",
                        "Evidence collection"
                    ]
                },
                {
                    name: "Network Administrator",
                    icon: "🌐",
                    description: "Isoliert betroffene Systeme, implementiert Containment-Maßnahmen",
                    responsibilities: [
                        "Network isolation und segmentation",
                        "Firewall rule management",
                        "Traffic analysis",
                        "System hardening"
                    ],
                    tasks: [
                        "Block malicious IPs",
                        "Isolate infected systems",
                        "Monitor network traffic",
                        "Implement security patches"
                    ]
                },
                {
                    name: "Communications Lead",
                    icon: "📢",
                    description: "Koordiniert interne und externe Kommunikation",
                    responsibilities: [
                        "Stakeholder communication",
                        "Media relations",
                        "Customer notifications",
                        "Regulatory reporting"
                    ],
                    tasks: [
                        "Draft incident reports",
                        "Coordinate with legal team",
                        "Manage public communications",
                        "Update executive leadership"
                    ]
                }
            ],
            scenario: {
                title: "Advanced Persistent Threat (APT) in Corporate Network",
                initialSituation: "Ein fortgeschrittener Angreifer hat sich seit mehreren Wochen in Ihrem Unternehmensnetzwerk eingenistet. Heute Morgen um 08:30 wurden verdächtige Datenübertragungen zu externen IPs entdeckt. Erste Analysen zeigen kompromittierte Domain Controller und möglichen Datendiebstahl.",
                timeline: [
                    {
                        time: "08:30",
                        event: "Anomale Netzwerkaktivität entdeckt",
                        severity: "medium",
                        details: "SIEM Alert: Ungewöhnlich hoher Datenausgang zu 185.220.100.240"
                    },
                    {
                        time: "08:45", 
                        event: "Kompromittierter Domain Controller identifiziert",
                        severity: "high",
                        details: "DC01 zeigt verdächtige PowerShell-Aktivitäten und unbekannte Scheduled Tasks"
                    },
                    {
                        time: "09:15",
                        event: "Lateral Movement erkannt",
                        severity: "critical",
                        details: "Angreifer hat sich auf File Server und HR-Datenbank ausgebreitet"
                    },
                    {
                        time: "09:30",
                        event: "Data Exfiltration bestätigt",
                        severity: "critical", 
                        details: "500GB Kundendaten wurden zu externen Servern übertragen"
                    }
                ],
                objectives: [
                    "Schadensbegrenzung und Containment",
                    "Forensische Sicherung von Beweisen",
                    "Kommunikation mit Stakeholdern",
                    "Systemwiederherstellung planen"
                ]
            },
            phases: [
                {
                    name: "Detection & Analysis",
                    duration: 10,
                    description: "Incident verstehen und Schweregrad bewerten",
                    tasks: {
                        "Incident Commander": [
                            "Incident Team zusammenstellen",
                            "Severity Level bestimmen",
                            "War Room einrichten"
                        ],
                        "Security Analyst": [
                            "IOCs aus SIEM extrahieren",
                            "Malware-Samples analysieren",
                            "Attack timeline erstellen"
                        ],
                        "Network Administrator": [
                            "Betroffene Systeme identifizieren",
                            "Netzwerk-Traffic analysieren",
                            "Backup-Status prüfen"
                        ],
                        "Communications Lead": [
                            "Stakeholder-Liste erstellen",
                            "Erste Statusmeldung vorbereiten",
                            "Legal/Compliance informieren"
                        ]
                    }
                },
                {
                    name: "Containment",
                    duration: 15,
                    description: "Schaden begrenzen und weitere Ausbreitung verhindern",
                    tasks: {
                        "Incident Commander": [
                            "Containment-Strategie definieren",
                            "Business impact bewerten",
                            "Resource allocation"
                        ],
                        "Security Analyst": [
                            "IOCs in defensive tools implementieren",
                            "Weitere kompromittierte Systeme suchen",
                            "Persistence mechanisms identifizieren"
                        ],
                        "Network Administrator": [
                            "Malicious IPs blockieren",
                            "Betroffene Systeme isolieren",
                            "Critical systems härten"
                        ],
                        "Communications Lead": [
                            "Incident update an Management",
                            "Kunden-Benachrichtigung vorbereiten",
                            "Medien-Statement entwickeln"
                        ]
                    }
                },
                {
                    name: "Eradication & Recovery",
                    duration: 15,
                    description: "Bedrohung eliminieren und Systeme wiederherstellen",
                    tasks: {
                        "Incident Commander": [
                            "Recovery-Prioritäten setzen",
                            "Business continuity sicherstellen",
                            "Recovery timeline kommunizieren"
                        ],
                        "Security Analyst": [
                            "Malware vollständig entfernen",
                            "System integrity validieren",
                            "Monitoring verstärken"
                        ],
                        "Network Administrator": [
                            "Clean backups wiederherstellen",
                            "Security patches installieren",
                            "Network segmentation verbessern"
                        ],
                        "Communications Lead": [
                            "Recovery status kommunizieren",
                            "Regulatory notifications",
                            "Customer communications"
                        ]
                    }
                },
                {
                    name: "Post-Incident Review",
                    duration: 5,
                    description: "Lessons learned und Verbesserungen dokumentieren",
                    tasks: {
                        "Incident Commander": [
                            "Post-incident meeting leiten",
                            "Lessons learned dokumentieren",
                            "Process improvements definieren"
                        ],
                        "Security Analyst": [
                            "Forensic report finalisieren",
                            "IOCs an threat intel feeds",
                            "Detection rules verbessern"
                        ],
                        "Network Administrator": [
                            "Technical lessons learned",
                            "Infrastructure improvements",
                            "Security hardening review"
                        ],
                        "Communications Lead": [
                            "Final incident report",
                            "Stakeholder feedback",
                            "Communication process review"
                        ]
                    }
                }
            ]
        };

        // Penetration Testing Team Challenge
        this.challenges.pentest_team = {
            id: "pentest_team",
            title: "🎯 Red Team Penetration Test",
            description: "Koordinierter Penetration Test gegen eine simulierte Unternehmensinfrastruktur",
            teamSize: { min: 3, max: 5 },
            duration: 60,
            difficulty: "expert",
            roles: [
                {
                    name: "Lead Penetration Tester",
                    icon: "🕵️‍♂️",
                    description: "Koordiniert den Pentest, definiert Scope und Methodologie",
                    responsibilities: ["Test planning", "Risk assessment", "Final reporting"]
                },
                {
                    name: "Network Specialist",
                    icon: "🌐",
                    description: "Fokus auf Netzwerk-Infrastruktur und -Services",
                    responsibilities: ["Network scanning", "Service enumeration", "Network exploitation"]
                },
                {
                    name: "Web Application Tester",
                    icon: "🕸️",
                    description: "Spezialist für Web-Anwendungssicherheit",
                    responsibilities: ["Web app scanning", "OWASP testing", "Client-side attacks"]
                },
                {
                    name: "Social Engineer",
                    icon: "👥",
                    description: "Führt Social Engineering Angriffe durch",
                    responsibilities: ["Phishing campaigns", "Physical security", "OSINT gathering"]
                }
            ]
        };

        // Digital Forensics Team Challenge
        this.challenges.forensics_team = {
            id: "forensics_team", 
            title: "🔬 Digital Forensics Investigation",
            description: "Team-basierte forensische Untersuchung eines komplexen Cybercrime-Falls",
            teamSize: { min: 4, max: 6 },
            duration: 90,
            difficulty: "expert",
            roles: [
                {
                    name: "Lead Forensic Investigator",
                    icon: "🕵️",
                    description: "Leitet die Untersuchung und koordiniert das Team",
                    responsibilities: ["Investigation planning", "Evidence coordination", "Legal compliance"]
                },
                {
                    name: "Disk Forensics Specialist",
                    icon: "💽",
                    description: "Analysiert Festplatten und Dateisysteme",
                    responsibilities: ["Disk imaging", "File recovery", "Timeline analysis"]
                },
                {
                    name: "Network Forensics Analyst",
                    icon: "📡",
                    description: "Untersucht Netzwerk-Traffic und -Logs",
                    responsibilities: ["Packet analysis", "Network timeline", "Communication patterns"]
                },
                {
                    name: "Malware Analyst",
                    icon: "🦠",
                    description: "Reverse Engineering und Malware-Analyse",
                    responsibilities: ["Malware dissection", "IOC extraction", "Attribution analysis"]
                }
            ]
        };

        // Crisis Communication Team Challenge
        this.challenges.crisis_comm = {
            id: "crisis_comm",
            title: "📢 Cyber Crisis Communication",
            description: "Koordinierte Krisenkommunikation während eines großen Cyber-Incidents",
            teamSize: { min: 4, max: 6 },
            duration: 30,
            difficulty: "intermediate",
            roles: [
                {
                    name: "Crisis Communication Lead",
                    icon: "📢",
                    description: "Leitet die Krisenkommunikation",
                    responsibilities: ["Message coordination", "Media strategy", "Stakeholder management"]
                },
                {
                    name: "Technical Liaison",
                    icon: "⚙️",
                    description: "Übersetzt technische Details für verschiedene Zielgruppen",
                    responsibilities: ["Technical translation", "Impact assessment", "Recovery updates"]
                },
                {
                    name: "Legal & Compliance Officer",
                    icon: "⚖️",
                    description: "Überwacht rechtliche Aspekte der Kommunikation",
                    responsibilities: ["Regulatory compliance", "Legal review", "Disclosure requirements"]
                },
                {
                    name: "Customer Relations Manager",
                    icon: "👥",
                    description: "Managt Kundenkommunikation und -betreuung",
                    responsibilities: ["Customer notifications", "Support coordination", "Feedback management"]
                }
            ]
        };

        // SOC Team Challenge
        this.challenges.soc_operations = {
            id: "soc_operations",
            title: "🎛️ SOC 24/7 Operations",
            description: "Security Operations Center Schichtbetrieb mit multiple simultanen Incidents",
            teamSize: { min: 4, max: 8 },
            duration: 40,
            difficulty: "advanced",
            roles: [
                {
                    name: "SOC Manager",
                    icon: "👨‍💼",
                    description: "Überwacht SOC-Operations und koordiniert Eskalationen",
                    responsibilities: ["Team coordination", "Escalation management", "SLA monitoring"]
                },
                {
                    name: "L1 Security Analyst",
                    icon: "👤",
                    description: "Erste Triage und Alert-Bearbeitung",
                    responsibilities: ["Alert triage", "Initial investigation", "Documentation"]
                },
                {
                    name: "L2 Security Analyst", 
                    icon: "👥",
                    description: "Tiefere Analyse und komplexere Incidents",
                    responsibilities: ["Deep analysis", "IOC hunting", "Playbook execution"]
                },
                {
                    name: "Threat Hunter",
                    icon: "🎯",
                    description: "Proaktive Bedrohungssuche",
                    responsibilities: ["Proactive hunting", "TTP analysis", "Threat intelligence"]
                }
            ]
        };
    }

    createRoom(challengeId, roomName, hostUserId) {
        const challenge = this.challenges[challengeId];
        if (!challenge) {
            throw new Error('Challenge not found');
        }

        const roomId = this.generateRoomId();
        const room = {
            id: roomId,
            name: roomName,
            challengeId: challengeId,
            challenge: challenge,
            host: hostUserId,
            participants: [hostUserId],
            maxParticipants: challenge.teamSize.max,
            minParticipants: challenge.teamSize.min,
            status: 'waiting', // waiting, in_progress, completed
            createdAt: new Date(),
            startedAt: null,
            completedAt: null,
            currentPhase: 0,
            roleAssignments: new Map(),
            teamChat: [],
            taskProgress: new Map(),
            sharedDocuments: new Map(),
            timer: null,
            results: null
        };

        this.activeRooms.set(roomId, room);
        this.userRooms.set(hostUserId, roomId);

        return room;
    }

    joinRoom(roomId, userId) {
        const room = this.activeRooms.get(roomId);
        if (!room) {
            throw new Error('Room not found');
        }

        if (room.status !== 'waiting') {
            throw new Error('Room is not accepting new participants');
        }

        if (room.participants.length >= room.maxParticipants) {
            throw new Error('Room is full');
        }

        if (!room.participants.includes(userId)) {
            room.participants.push(userId);
            this.userRooms.set(userId, roomId);
        }

        return room;
    }

    assignRole(roomId, userId, roleIndex) {
        const room = this.activeRooms.get(roomId);
        if (!room) return false;

        const role = room.challenge.roles[roleIndex];
        if (!role) return false;

        // Check if role is already assigned
        for (const [assignedUserId, assignedRole] of room.roleAssignments) {
            if (assignedRole.name === role.name && assignedUserId !== userId) {
                return false; // Role already taken
            }
        }

        room.roleAssignments.set(userId, role);
        return true;
    }

    startChallenge(roomId) {
        const room = this.activeRooms.get(roomId);
        if (!room) return false;

        if (room.participants.length < room.minParticipants) {
            throw new Error(`Minimum ${room.minParticipants} participants required`);
        }

        // Check if all participants have roles
        if (room.roleAssignments.size !== room.participants.length) {
            throw new Error('All participants must have assigned roles');
        }

        room.status = 'in_progress';
        room.startedAt = new Date();
        room.currentPhase = 0;

        // Initialize task progress
        room.challenge.phases.forEach((phase, phaseIndex) => {
            Object.keys(phase.tasks).forEach(roleName => {
                phase.tasks[roleName].forEach((task, taskIndex) => {
                    const taskKey = `${phaseIndex}-${roleName}-${taskIndex}`;
                    room.taskProgress.set(taskKey, {
                        completed: false,
                        completedBy: null,
                        completedAt: null,
                        notes: ''
                    });
                });
            });
        });

        // Start phase timer
        this.startPhaseTimer(roomId);

        return true;
    }

    startPhaseTimer(roomId) {
        const room = this.activeRooms.get(roomId);
        if (!room || room.status !== 'in_progress') return;

        const currentPhase = room.challenge.phases[room.currentPhase];
        if (!currentPhase) return;

        let timeRemaining = currentPhase.duration * 60; // Convert to seconds

        room.timer = setInterval(() => {
            timeRemaining--;

            if (timeRemaining <= 0) {
                this.advancePhase(roomId);
            }

            // Broadcast timer update to all participants
            this.broadcastToRoom(roomId, {
                type: 'timer_update',
                timeRemaining: timeRemaining,
                phase: room.currentPhase
            });
        }, 1000);
    }

    advancePhase(roomId) {
        const room = this.activeRooms.get(roomId);
        if (!room) return;

        if (room.timer) {
            clearInterval(room.timer);
            room.timer = null;
        }

        room.currentPhase++;

        if (room.currentPhase >= room.challenge.phases.length) {
            this.completeChallenge(roomId);
        } else {
            this.startPhaseTimer(roomId);
            this.broadcastToRoom(roomId, {
                type: 'phase_advance',
                newPhase: room.currentPhase,
                phaseName: room.challenge.phases[room.currentPhase].name
            });
        }
    }

    completeTask(roomId, userId, phaseIndex, roleName, taskIndex, notes = '') {
        const room = this.activeRooms.get(roomId);
        if (!room || room.status !== 'in_progress') return false;

        const taskKey = `${phaseIndex}-${roleName}-${taskIndex}`;
        const taskProgress = room.taskProgress.get(taskKey);
        
        if (!taskProgress || taskProgress.completed) return false;

        // Verify user has the correct role
        const userRole = room.roleAssignments.get(userId);
        if (!userRole || userRole.name !== roleName) return false;

        taskProgress.completed = true;
        taskProgress.completedBy = userId;
        taskProgress.completedAt = new Date();
        taskProgress.notes = notes;

        room.taskProgress.set(taskKey, taskProgress);

        // Broadcast task completion
        this.broadcastToRoom(roomId, {
            type: 'task_completed',
            taskKey: taskKey,
            completedBy: userId,
            notes: notes
        });

        // Check if phase is complete
        this.checkPhaseCompletion(roomId, phaseIndex);

        return true;
    }

    checkPhaseCompletion(roomId, phaseIndex) {
        const room = this.activeRooms.get(roomId);
        if (!room) return;

        const phase = room.challenge.phases[phaseIndex];
        let allTasksCompleted = true;

        Object.keys(phase.tasks).forEach(roleName => {
            phase.tasks[roleName].forEach((task, taskIndex) => {
                const taskKey = `${phaseIndex}-${roleName}-${taskIndex}`;
                const taskProgress = room.taskProgress.get(taskKey);
                if (!taskProgress || !taskProgress.completed) {
                    allTasksCompleted = false;
                }
            });
        });

        if (allTasksCompleted) {
            // Auto-advance to next phase
            setTimeout(() => {
                this.advancePhase(roomId);
            }, 2000); // 2 second delay for feedback
            
            this.broadcastToRoom(roomId, {
                type: 'phase_completed',
                phase: phaseIndex
            });
        }
    }

    completeChallenge(roomId) {
        const room = this.activeRooms.get(roomId);
        if (!room) return;

        room.status = 'completed';
        room.completedAt = new Date();

        // Calculate team performance
        const results = this.calculateTeamResults(room);
        room.results = results;

        // Award achievements
        this.awardTeamAchievements(room);

        this.broadcastToRoom(roomId, {
            type: 'challenge_completed',
            results: results
        });
    }

    calculateTeamResults(room) {
        const totalTasks = Array.from(room.taskProgress.values()).length;
        const completedTasks = Array.from(room.taskProgress.values()).filter(t => t.completed).length;
        const completionRate = (completedTasks / totalTasks) * 100;

        const duration = room.completedAt - room.startedAt;
        const durationMinutes = Math.floor(duration / (1000 * 60));

        let performanceScore = 0;

        // Base score from completion rate
        performanceScore += completionRate;

        // Time bonus (faster = better)
        const expectedTime = room.challenge.duration;
        if (durationMinutes < expectedTime) {
            const timeBonus = ((expectedTime - durationMinutes) / expectedTime) * 20;
            performanceScore += timeBonus;
        }

        // Team coordination bonus
        const coordinationScore = this.calculateCoordinationScore(room);
        performanceScore += coordinationScore;

        return {
            completionRate: Math.round(completionRate),
            duration: durationMinutes,
            performanceScore: Math.round(performanceScore),
            coordinationScore: Math.round(coordinationScore),
            grade: this.getPerformanceGrade(performanceScore),
            completedTasks: completedTasks,
            totalTasks: totalTasks
        };
    }

    calculateCoordinationScore(room) {
        // Analyze chat patterns, task distribution, etc.
        const chatMessages = room.teamChat.length;
        const participants = room.participants.length;
        
        let coordinationScore = 0;

        // Communication frequency
        if (chatMessages > participants * 5) {
            coordinationScore += 10;
        }

        // Task distribution evenness
        const tasksPerParticipant = new Map();
        room.taskProgress.forEach(task => {
            if (task.completed && task.completedBy) {
                const count = tasksPerParticipant.get(task.completedBy) || 0;
                tasksPerParticipant.set(task.completedBy, count + 1);
            }
        });

        const taskCounts = Array.from(tasksPerParticipant.values());
        const avgTasks = taskCounts.reduce((a, b) => a + b, 0) / taskCounts.length;
        const variance = taskCounts.reduce((acc, count) => acc + Math.pow(count - avgTasks, 2), 0) / taskCounts.length;
        
        if (variance < avgTasks * 0.5) { // Low variance = good distribution
            coordinationScore += 15;
        }

        return coordinationScore;
    }

    getPerformanceGrade(score) {
        if (score >= 95) return 'A+';
        if (score >= 90) return 'A';
        if (score >= 85) return 'A-';
        if (score >= 80) return 'B+';
        if (score >= 75) return 'B';
        if (score >= 70) return 'B-';
        if (score >= 65) return 'C+';
        if (score >= 60) return 'C';
        return 'D';
    }

    awardTeamAchievements(room) {
        room.participants.forEach(userId => {
            if (window.achievementSystem) {
                // Team collaboration achievements
                window.achievementSystem.updateProgress(userId, 'team_player', 1);
                window.achievementSystem.updateProgress(userId, 'communicator', room.teamChat.filter(msg => msg.userId === userId).length);
                
                // Challenge-specific achievements
                if (room.results.grade.startsWith('A')) {
                    window.achievementSystem.updateProgress(userId, 'team_excellence', 1);
                }
                
                if (room.results.duration < room.challenge.duration * 0.8) {
                    window.achievementSystem.updateProgress(userId, 'speed_team', 1);
                }
            }
        });
    }

    sendChatMessage(roomId, userId, message) {
        const room = this.activeRooms.get(roomId);
        if (!room || !room.participants.includes(userId)) return false;

        const chatMessage = {
            id: Date.now(),
            userId: userId,
            message: message,
            timestamp: new Date(),
            type: 'user_message'
        };

        room.teamChat.push(chatMessage);

        this.broadcastToRoom(roomId, {
            type: 'chat_message',
            message: chatMessage
        });

        return true;
    }

    shareDocument(roomId, userId, documentName, content) {
        const room = this.activeRooms.get(roomId);
        if (!room || !room.participants.includes(userId)) return false;

        const document = {
            id: Date.now(),
            name: documentName,
            content: content,
            createdBy: userId,
            createdAt: new Date(),
            lastModified: new Date(),
            collaborators: [userId]
        };

        room.sharedDocuments.set(document.id, document);

        this.broadcastToRoom(roomId, {
            type: 'document_shared',
            document: document
        });

        return document.id;
    }

    broadcastToRoom(roomId, message) {
        // In a real implementation, this would use WebSockets
        const room = this.activeRooms.get(roomId);
        if (!room) return;

        console.log(`Broadcasting to room ${roomId}:`, message);
        
        // Simulate WebSocket broadcast
        room.participants.forEach(userId => {
            // Would send to specific user's WebSocket connection
            this.handleBroadcastMessage(userId, message);
        });
    }

    handleBroadcastMessage(userId, message) {
        // Handle incoming broadcast messages for UI updates
        const event = new CustomEvent('teamChallengeUpdate', {
            detail: { userId, message }
        });
        document.dispatchEvent(event);
    }

    generateRoomId() {
        return 'room_' + Math.random().toString(36).substr(2, 9);
    }

    renderChallengeSelection() {
        return `
            <div class="team-challenges-container">
                <div class="challenges-header">
                    <h1>🤝 Team Challenges</h1>
                    <p>Kooperative Cybersicherheits-Herausforderungen für Teams</p>
                </div>
                
                <div class="challenge-grid">
                    ${Object.values(this.challenges).map(challenge => this.renderChallengeCard(challenge)).join('')}
                </div>
                
                <div class="active-rooms-section">
                    <h2>🏠 Aktive Räume</h2>
                    <div class="active-rooms-list">
                        ${this.renderActiveRooms()}
                    </div>
                </div>
            </div>
        `;
    }

    renderChallengeCard(challenge) {
        const difficultyColors = {
            'beginner': '#28a745',
            'intermediate': '#ffc107', 
            'advanced': '#fd7e14',
            'expert': '#dc3545'
        };

        return `
            <div class="challenge-card" onclick="teamChallenges.showChallengeDetails('${challenge.id}')">
                <div class="challenge-header">
                    <h3>${challenge.title}</h3>
                    <div class="challenge-meta">
                        <span class="difficulty-badge" style="background-color: ${difficultyColors[challenge.difficulty]}">
                            ${challenge.difficulty.toUpperCase()}
                        </span>
                        <span class="duration-badge">⏱️ ${challenge.duration}min</span>
                    </div>
                </div>
                
                <p class="challenge-description">${challenge.description}</p>
                
                <div class="team-size-info">
                    <span class="team-size">👥 ${challenge.teamSize.min}-${challenge.teamSize.max} Teilnehmer</span>
                </div>
                
                <div class="challenge-roles">
                    <h4>Verfügbare Rollen:</h4>
                    <div class="roles-preview">
                        ${challenge.roles.slice(0, 3).map(role => `
                            <span class="role-tag">${role.icon} ${role.name}</span>
                        `).join('')}
                        ${challenge.roles.length > 3 ? `<span class="more-roles">+${challenge.roles.length - 3} weitere</span>` : ''}
                    </div>
                </div>
                
                <div class="challenge-actions">
                    <button onclick="event.stopPropagation(); teamChallenges.createRoom('${challenge.id}')" class="create-room-btn">
                        🏠 Raum erstellen
                    </button>
                    <button onclick="event.stopPropagation(); teamChallenges.showChallengeDetails('${challenge.id}')" class="details-btn">
                        📋 Details
                    </button>
                </div>
            </div>
        `;
    }

    renderActiveRooms() {
        const rooms = Array.from(this.activeRooms.values()).filter(room => room.status === 'waiting');
        
        if (rooms.length === 0) {
            return '<p class="no-rooms">Keine aktiven Räume verfügbar. Erstellen Sie einen neuen Raum!</p>';
        }

        return rooms.map(room => `
            <div class="room-card">
                <div class="room-header">
                    <h4>${room.name}</h4>
                    <span class="room-status">${room.status === 'waiting' ? '⏳ Wartet auf Teilnehmer' : '🔄 Läuft'}</span>
                </div>
                
                <div class="room-info">
                    <span class="challenge-name">${room.challenge.title}</span>
                    <span class="participants-count">👥 ${room.participants.length}/${room.maxParticipants}</span>
                </div>
                
                <div class="room-actions">
                    <button onclick="teamChallenges.joinRoom('${room.id}')" class="join-room-btn" 
                            ${room.participants.length >= room.maxParticipants ? 'disabled' : ''}>
                        🚪 Beitreten
                    </button>
                </div>
            </div>
        `).join('');
    }

    createRoom(challengeId) {
        const roomName = prompt('Name für den Raum:');
        if (!roomName) return;

        const room = this.createRoom(challengeId, roomName, 'current_user');
        alert(`Raum "${roomName}" wurde erstellt! Room ID: ${room.id}`);
        
        // Update UI
        document.querySelector('.active-rooms-list').innerHTML = this.renderActiveRooms();
    }

    showChallengeDetails(challengeId) {
        const challenge = this.challenges[challengeId];
        if (!challenge) return;

        // Create modal with detailed challenge information
        const modal = document.createElement('div');
        modal.className = 'challenge-details-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${challenge.title}</h2>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                
                <div class="challenge-full-details">
                    ${this.renderFullChallengeDetails(challenge)}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    renderFullChallengeDetails(challenge) {
        return `
            <div class="challenge-overview">
                <h3>📋 Überblick</h3>
                <p>${challenge.description}</p>
                
                <div class="challenge-stats">
                    <div class="stat">
                        <span class="stat-label">Dauer:</span>
                        <span class="stat-value">${challenge.duration} Minuten</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Teamgröße:</span>
                        <span class="stat-value">${challenge.teamSize.min}-${challenge.teamSize.max} Personen</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Schwierigkeit:</span>
                        <span class="stat-value">${challenge.difficulty}</span>
                    </div>
                </div>
            </div>
            
            <div class="roles-section">
                <h3>👥 Rollen</h3>
                <div class="roles-detailed">
                    ${challenge.roles.map(role => `
                        <div class="role-detailed">
                            <div class="role-header">
                                <span class="role-icon">${role.icon}</span>
                                <h4>${role.name}</h4>
                            </div>
                            <p>${role.description}</p>
                            <div class="role-responsibilities">
                                <h5>Verantwortlichkeiten:</h5>
                                <ul>
                                    ${role.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${challenge.scenario ? `
                <div class="scenario-section">
                    <h3>🎭 Szenario</h3>
                    <h4>${challenge.scenario.title}</h4>
                    <p>${challenge.scenario.initialSituation}</p>
                    
                    <div class="scenario-objectives">
                        <h5>Ziele:</h5>
                        <ul>
                            ${challenge.scenario.objectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : ''}
            
            ${challenge.phases ? `
                <div class="phases-section">
                    <h3>📅 Phasen</h3>
                    <div class="phases-timeline">
                        ${challenge.phases.map((phase, index) => `
                            <div class="phase-item">
                                <div class="phase-header">
                                    <span class="phase-number">${index + 1}</span>
                                    <h4>${phase.name}</h4>
                                    <span class="phase-duration">${phase.duration}min</span>
                                </div>
                                <p>${phase.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }
}

// CSS für Team Challenges
const teamChallengesCSS = `
    .team-challenges-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .challenges-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .challenges-header h1 {
        margin: 0 0 15px 0;
        font-size: 2.5em;
    }
    
    .challenge-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }
    
    .challenge-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid #e9ecef;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .challenge-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        border-color: #007bff;
    }
    
    .challenge-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .challenge-header h3 {
        margin: 0;
        color: #2c3e50;
        font-size: 1.3em;
    }
    
    .challenge-meta {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-end;
    }
    
    .difficulty-badge,
    .duration-badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: bold;
        color: white;
    }
    
    .duration-badge {
        background: #6c757d;
    }
    
    .challenge-description {
        color: #495057;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    
    .team-size-info {
        background: #f8f9fa;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 15px;
        text-align: center;
    }
    
    .team-size {
        font-weight: bold;
        color: #495057;
    }
    
    .challenge-roles {
        margin-bottom: 20px;
    }
    
    .challenge-roles h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 1em;
    }
    
    .roles-preview {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .role-tag {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .more-roles {
        background: #f5f5f5;
        color: #6c757d;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-style: italic;
    }
    
    .challenge-actions {
        display: flex;
        gap: 10px;
    }
    
    .create-room-btn,
    .details-btn {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .create-room-btn {
        background: #28a745;
        color: white;
    }
    
    .create-room-btn:hover {
        background: #218838;
    }
    
    .details-btn {
        background: #6c757d;
        color: white;
    }
    
    .details-btn:hover {
        background: #5a6268;
    }
    
    .active-rooms-section {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .active-rooms-section h2 {
        margin: 0 0 20px 0;
        color: #2c3e50;
    }
    
    .active-rooms-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .no-rooms {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        padding: 40px;
        background: #f8f9fa;
        border-radius: 10px;
    }
    
    .room-card {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 10px;
        padding: 20px;
        transition: all 0.3s ease;
    }
    
    .room-card:hover {
        border-color: #007bff;
        background: white;
    }
    
    .room-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .room-header h4 {
        margin: 0;
        color: #2c3e50;
    }
    
    .room-status {
        font-size: 0.9em;
        color: #6c757d;
    }
    
    .room-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 0.9em;
        color: #495057;
    }
    
    .join-room-btn {
        width: 100%;
        background: #007bff;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .join-room-btn:hover:not(:disabled) {
        background: #0056b3;
    }
    
    .join-room-btn:disabled {
        background: #6c757d;
        cursor: not-allowed;
    }
    
    .challenge-details-modal {
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
    
    .challenge-details-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 900px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 0;
        margin: 20px;
    }
    
    .challenge-details-modal .modal-header {
        background: #f8f9fa;
        padding: 20px;
        border-bottom: 1px solid #dee2e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
    }
    
    .challenge-details-modal .modal-header button {
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: #6c757d;
    }
    
    .challenge-full-details {
        padding: 30px;
    }
    
    .challenge-overview,
    .roles-section,
    .scenario-section,
    .phases-section {
        margin-bottom: 30px;
    }
    
    .challenge-overview h3,
    .roles-section h3,
    .scenario-section h3,
    .phases-section h3 {
        color: #2c3e50;
        border-bottom: 2px solid #e9ecef;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    
    .challenge-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin: 20px 0;
    }
    
    .stat {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
    }
    
    .stat-label {
        display: block;
        font-size: 0.9em;
        color: #6c757d;
        margin-bottom: 5px;
    }
    
    .stat-value {
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        color: #2c3e50;
    }
    
    .roles-detailed {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .role-detailed {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        border-left: 4px solid #007bff;
    }
    
    .role-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }
    
    .role-icon {
        font-size: 1.5em;
    }
    
    .role-header h4 {
        margin: 0;
        color: #2c3e50;
    }
    
    .role-responsibilities h5 {
        margin: 15px 0 10px 0;
        color: #495057;
    }
    
    .role-responsibilities ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .role-responsibilities li {
        margin: 5px 0;
        color: #495057;
    }
    
    .scenario-objectives {
        background: #e3f2fd;
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
    }
    
    .scenario-objectives h5 {
        margin: 0 0 10px 0;
        color: #1976d2;
    }
    
    .scenario-objectives ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .phases-timeline {
        position: relative;
    }
    
    .phase-item {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 15px;
        border-left: 4px solid #28a745;
    }
    
    .phase-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
    }
    
    .phase-number {
        background: #28a745;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    
    .phase-header h4 {
        margin: 0;
        flex: 1;
        color: #2c3e50;
    }
    
    .phase-duration {
        background: #6c757d;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    @media (max-width: 768px) {
        .challenge-grid {
            grid-template-columns: 1fr;
        }
        
        .active-rooms-list {
            grid-template-columns: 1fr;
        }
        
        .roles-detailed {
            grid-template-columns: 1fr;
        }
        
        .challenge-stats {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const teamChallengesStyleSheet = document.createElement('style');
teamChallengesStyleSheet.textContent = teamChallengesCSS;
document.head.appendChild(teamChallengesStyleSheet);

// Global instance
window.teamChallenges = new TeamChallenges();
