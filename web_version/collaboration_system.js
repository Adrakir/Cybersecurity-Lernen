// Real-Time Collaboration System für Enhanced Learning Platform
class CollaborationSystem {
    constructor() {
        this.collaborationId = this.generateCollaborationId();
        this.participants = new Map();
        this.studyGroups = new Map();
        this.sharedSessions = new Map();
        this.realTimeEvents = [];
        this.connectionStatus = 'disconnected';
        
        this.collaborationTypes = {
            STUDY_GROUP: 'study_group',
            QUIZ_BATTLE: 'quiz_battle',
            PEER_REVIEW: 'peer_review',
            MENTORING: 'mentoring',
            TEAM_CHALLENGE: 'team_challenge'
        };
        
        this.eventTypes = {
            USER_JOINED: 'user_joined',
            USER_LEFT: 'user_left',
            QUESTION_ANSWERED: 'question_answered',
            HINT_SHARED: 'hint_shared',
            EXPLANATION_SHARED: 'explanation_shared',
            ACHIEVEMENT_SHARED: 'achievement_shared',
            MESSAGE_SENT: 'message_sent',
            SESSION_STARTED: 'session_started',
            SESSION_ENDED: 'session_ended'
        };
        
        this.initializeCollaboration();
    }

    initializeCollaboration() {
        console.log('🤝 Real-Time Collaboration System initializing...');
        
        // Setup WebSocket connection simulation (würde in Produktion echte WebSockets verwenden)
        this.setupConnection();
        
        // Setup event handlers
        this.setupEventHandlers();
        
        // Setup UI components
        this.setupCollaborationUI();
        
        // Load existing study groups
        this.loadStudyGroups();
        
        console.log('✅ Collaboration System ready');
    }

    setupConnection() {
        // Simuliert WebSocket-Verbindung (in Produktion würde echte WebSocket-API verwendet)
        this.connection = {
            send: (data) => this.simulateNetworkMessage(data),
            onmessage: null,
            readyState: 1 // OPEN
        };
        
        this.connectionStatus = 'connected';
        console.log('🔗 Collaboration connection established');
        
        // Periodische Synchronisation mit anderen Teilnehmern
        setInterval(() => {
            this.syncWithPeers();
        }, 5000);
    }

    simulateNetworkMessage(data) {
        // Simuliert Netzwerk-Latenz und Verarbeitung
        setTimeout(() => {
            this.processIncomingMessage(data);
        }, Math.random() * 100 + 50); // 50-150ms Latenz
    }

    createStudyGroup(options) {
        const studyGroup = {
            id: this.generateGroupId(),
            name: options.name,
            description: options.description,
            category: options.category,
            maxParticipants: options.maxParticipants || 6,
            isPrivate: options.isPrivate || false,
            inviteCode: options.isPrivate ? this.generateInviteCode() : null,
            createdBy: this.getCurrentUser().id,
            createdAt: new Date(),
            participants: new Map(),
            currentSession: null,
            settings: {
                allowHints: options.allowHints || true,
                showRealTimeProgress: options.showRealTimeProgress || true,
                enableVoiceChat: options.enableVoiceChat || false,
                moderationLevel: options.moderationLevel || 'medium'
            },
            statistics: {
                totalSessions: 0,
                totalQuestions: 0,
                averageAccuracy: 0,
                participantProgress: new Map()
            }
        };
        
        // Ersteller als ersten Teilnehmer hinzufügen
        this.joinStudyGroup(studyGroup.id, this.getCurrentUser());
        
        this.studyGroups.set(studyGroup.id, studyGroup);
        this.saveStudyGroups();
        
        console.log(`📚 Study group created: ${studyGroup.name}`);
        
        return studyGroup;
    }

    joinStudyGroup(groupId, user = null) {
        const group = this.studyGroups.get(groupId);
        if (!group) {
            throw new Error('Study group not found');
        }
        
        if (group.participants.size >= group.maxParticipants) {
            throw new Error('Study group is full');
        }
        
        const participant = user || this.getCurrentUser();
        const participantData = {
            ...participant,
            joinedAt: new Date(),
            role: group.participants.size === 0 ? 'leader' : 'member',
            status: 'active',
            currentProgress: {
                questionsAnswered: 0,
                correctAnswers: 0,
                streak: 0,
                lastActivity: new Date()
            }
        };
        
        group.participants.set(participant.id, participantData);
        this.participants.set(participant.id, participantData);
        
        // Benachrichtige andere Teilnehmer
        this.broadcastEvent({
            type: this.eventTypes.USER_JOINED,
            groupId: groupId,
            user: participantData,
            timestamp: new Date()
        });
        
        console.log(`👥 ${participant.name} joined study group: ${group.name}`);
        
        return participantData;
    }

    startCollaborativeSession(groupId, sessionType, options = {}) {
        const group = this.studyGroups.get(groupId);
        if (!group) {
            throw new Error('Study group not found');
        }
        
        const session = {
            id: this.generateSessionId(),
            groupId: groupId,
            type: sessionType,
            startedBy: this.getCurrentUser().id,
            startTime: new Date(),
            endTime: null,
            status: 'active',
            settings: {
                duration: options.duration || 30, // Minuten
                questionCount: options.questionCount || 20,
                category: options.category || 'mixed',
                difficulty: options.difficulty || 'adaptive',
                showOthersAnswers: options.showOthersAnswers || false,
                allowDiscussion: options.allowDiscussion || true
            },
            participants: new Map(),
            currentQuestion: null,
            questions: [],
            results: new Map(),
            chat: [],
            realTimeData: {
                participantPositions: new Map(),
                sharedHints: [],
                collaborativeNotes: ''
            }
        };
        
        // Alle Gruppenmitglieder zur Session hinzufügen
        group.participants.forEach((participant, id) => {
            session.participants.set(id, {
                ...participant,
                sessionJoined: new Date(),
                questionsAnswered: 0,
                correctAnswers: 0,
                currentStreak: 0,
                isReady: false
            });
        });
        
        group.currentSession = session.id;
        this.sharedSessions.set(session.id, session);
        
        // Benachrichtige alle Teilnehmer
        this.broadcastEvent({
            type: this.eventTypes.SESSION_STARTED,
            groupId: groupId,
            session: session,
            timestamp: new Date()
        });
        
        console.log(`🚀 Collaborative session started: ${sessionType}`);
        
        return session;
    }

    answerQuestionCollaboratively(sessionId, questionId, answer, responseTime) {
        const session = this.sharedSessions.get(sessionId);
        if (!session) return;
        
        const userId = this.getCurrentUser().id;
        const participant = session.participants.get(userId);
        if (!participant) return;
        
        const answerData = {
            userId: userId,
            questionId: questionId,
            answer: answer,
            responseTime: responseTime,
            timestamp: new Date(),
            isCorrect: this.checkAnswer(questionId, answer)
        };
        
        // Update Teilnehmer-Statistiken
        participant.questionsAnswered++;
        if (answerData.isCorrect) {
            participant.correctAnswers++;
            participant.currentStreak++;
        } else {
            participant.currentStreak = 0;
        }
        
        // Store Antwort
        if (!session.results.has(questionId)) {
            session.results.set(questionId, new Map());
        }
        session.results.get(questionId).set(userId, answerData);
        
        // Broadcast an andere Teilnehmer
        this.broadcastEvent({
            type: this.eventTypes.QUESTION_ANSWERED,
            sessionId: sessionId,
            questionId: questionId,
            userId: userId,
            answerData: answerData,
            timestamp: new Date()
        });
        
        // Check if alle Teilnehmer geantwortet haben
        this.checkForNextQuestion(sessionId, questionId);
    }

    shareHint(sessionId, questionId, hint) {
        const session = this.sharedSessions.get(sessionId);
        if (!session || !session.settings.allowDiscussion) return;
        
        const hintData = {
            id: this.generateHintId(),
            userId: this.getCurrentUser().id,
            questionId: questionId,
            content: hint,
            timestamp: new Date(),
            helpful: new Set(), // User IDs die den Hint als hilfreich markiert haben
            type: 'hint'
        };
        
        session.realTimeData.sharedHints.push(hintData);
        
        this.broadcastEvent({
            type: this.eventTypes.HINT_SHARED,
            sessionId: sessionId,
            hint: hintData,
            timestamp: new Date()
        });
        
        console.log(`💡 Hint shared in session ${sessionId}`);
    }

    shareExplanation(sessionId, questionId, explanation) {
        const session = this.sharedSessions.get(sessionId);
        if (!session) return;
        
        const explanationData = {
            id: this.generateExplanationId(),
            userId: this.getCurrentUser().id,
            questionId: questionId,
            content: explanation,
            timestamp: new Date(),
            upvotes: new Set(),
            type: 'explanation'
        };
        
        this.broadcastEvent({
            type: this.eventTypes.EXPLANATION_SHARED,
            sessionId: sessionId,
            explanation: explanationData,
            timestamp: new Date()
        });
        
        console.log(`📝 Explanation shared in session ${sessionId}`);
    }

    sendChatMessage(sessionId, message) {
        const session = this.sharedSessions.get(sessionId);
        if (!session) return;
        
        const chatMessage = {
            id: this.generateMessageId(),
            userId: this.getCurrentUser().id,
            content: message,
            timestamp: new Date(),
            type: 'text'
        };
        
        session.chat.push(chatMessage);
        
        this.broadcastEvent({
            type: this.eventTypes.MESSAGE_SENT,
            sessionId: sessionId,
            message: chatMessage,
            timestamp: new Date()
        });
    }

    createQuizBattle(opponentId, options = {}) {
        const battle = {
            id: this.generateBattleId(),
            type: this.collaborationTypes.QUIZ_BATTLE,
            participants: [
                {
                    id: this.getCurrentUser().id,
                    name: this.getCurrentUser().name,
                    score: 0,
                    answers: [],
                    status: 'ready'
                },
                {
                    id: opponentId,
                    name: this.getParticipantName(opponentId),
                    score: 0,
                    answers: [],
                    status: 'invited'
                }
            ],
            settings: {
                questionCount: options.questionCount || 10,
                timeLimit: options.timeLimit || 30, // Sekunden pro Frage
                category: options.category || 'mixed',
                difficulty: options.difficulty || 'mixed'
            },
            currentQuestionIndex: 0,
            questions: [],
            status: 'waiting_for_acceptance',
            createdAt: new Date(),
            startedAt: null,
            endedAt: null
        };
        
        // Generiere Fragen für den Battle
        battle.questions = this.generateBattleQuestions(battle.settings);
        
        this.sharedSessions.set(battle.id, battle);
        
        // Einladung senden
        this.sendBattleInvitation(opponentId, battle);
        
        return battle;
    }

    renderCollaborationDashboard() {
        return `
            <div class="collaboration-dashboard">
                <div class="dashboard-header">
                    <h2>🤝 Zusammenlernen</h2>
                    <div class="connection-status ${this.connectionStatus}">
                        <span class="status-indicator"></span>
                        <span class="status-text">${this.getConnectionStatusText()}</span>
                    </div>
                </div>
                
                <div class="collaboration-tabs">
                    <button class="tab-btn active" onclick="collaboration.showTab('groups')">
                        📚 Lerngruppen
                    </button>
                    <button class="tab-btn" onclick="collaboration.showTab('battles')">
                        ⚔️ Quiz-Battles
                    </button>
                    <button class="tab-btn" onclick="collaboration.showTab('mentoring')">
                        👨‍🏫 Mentoring
                    </button>
                    <button class="tab-btn" onclick="collaboration.showTab('team-challenges')">
                        🎯 Team-Challenges
                    </button>
                </div>
                
                <div class="tab-content">
                    <div id="groups-tab" class="tab-pane active">
                        ${this.renderStudyGroupsTab()}
                    </div>
                    
                    <div id="battles-tab" class="tab-pane">
                        ${this.renderQuizBattlesTab()}
                    </div>
                    
                    <div id="mentoring-tab" class="tab-pane">
                        ${this.renderMentoringTab()}
                    </div>
                    
                    <div id="team-challenges-tab" class="tab-pane">
                        ${this.renderTeamChallengesTab()}
                    </div>
                </div>
            </div>
        `;
    }

    renderStudyGroupsTab() {
        const myGroups = Array.from(this.studyGroups.values())
            .filter(group => group.participants.has(this.getCurrentUser().id));
        
        const availableGroups = Array.from(this.studyGroups.values())
            .filter(group => !group.participants.has(this.getCurrentUser().id) && !group.isPrivate)
            .slice(0, 10); // Zeige nur 10 verfügbare Gruppen
        
        return `
            <div class="study-groups-section">
                <div class="section-header">
                    <h3>📚 Meine Lerngruppen</h3>
                    <button onclick="collaboration.showCreateGroupModal()" class="btn-primary">
                        ➕ Neue Gruppe erstellen
                    </button>
                </div>
                
                <div class="groups-grid">
                    ${myGroups.map(group => this.renderStudyGroupCard(group, true)).join('')}
                </div>
                
                <div class="section-header">
                    <h3>🌐 Verfügbare Gruppen</h3>
                    <div class="group-filters">
                        <select onchange="collaboration.filterGroups(this.value)">
                            <option value="all">Alle Kategorien</option>
                            <option value="network">Netzwerksicherheit</option>
                            <option value="crypto">Kryptographie</option>
                            <option value="incident">Incident Response</option>
                            <option value="social">Social Engineering</option>
                        </select>
                    </div>
                </div>
                
                <div class="available-groups">
                    ${availableGroups.map(group => this.renderStudyGroupCard(group, false)).join('')}
                </div>
                
                <div class="join-private-group">
                    <h4>🔐 Private Gruppe beitreten</h4>
                    <div class="invite-code-form">
                        <input type="text" id="invite-code" placeholder="Einladungscode eingeben" maxlength="8">
                        <button onclick="collaboration.joinWithInviteCode()" class="btn-secondary">
                            Beitreten
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderStudyGroupCard(group, isMember) {
        const participantCount = group.participants.size;
        const isActive = group.currentSession !== null;
        
        return `
            <div class="study-group-card ${isActive ? 'active-session' : ''}" data-group-id="${group.id}">
                <div class="group-header">
                    <h4>${group.name}</h4>
                    <div class="group-status">
                        ${isActive ? '🟢 Aktive Session' : '⚪ Bereit'}
                    </div>
                </div>
                
                <div class="group-info">
                    <p class="group-description">${group.description}</p>
                    <div class="group-meta">
                        <span class="category-tag">${group.category}</span>
                        <span class="participant-count">👥 ${participantCount}/${group.maxParticipants}</span>
                    </div>
                </div>
                
                <div class="group-stats">
                    <div class="stat">
                        <span class="stat-label">Sessions:</span>
                        <span class="stat-value">${group.statistics.totalSessions}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Genauigkeit:</span>
                        <span class="stat-value">${(group.statistics.averageAccuracy * 100).toFixed(1)}%</span>
                    </div>
                </div>
                
                <div class="group-actions">
                    ${isMember ? `
                        <button onclick="collaboration.enterGroup('${group.id}')" class="btn-primary">
                            ${isActive ? '🎯 Session beitreten' : '📚 Gruppe öffnen'}
                        </button>
                        <button onclick="collaboration.leaveGroup('${group.id}')" class="btn-secondary">
                            🚪 Verlassen
                        </button>
                    ` : `
                        <button onclick="collaboration.joinGroup('${group.id}')" class="btn-primary">
                            ➕ Beitreten
                        </button>
                        <button onclick="collaboration.previewGroup('${group.id}')" class="btn-secondary">
                            👁️ Vorschau
                        </button>
                    `}
                </div>
                
                ${isActive ? `
                    <div class="active-session-info">
                        <p>🎯 Aktuelle Session: ${this.getSessionTypeName(group.currentSession)}</p>
                        <div class="participant-avatars">
                            ${this.renderParticipantAvatars(group.participants)}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderCollaborativeQuiz(sessionId) {
        const session = this.sharedSessions.get(sessionId);
        if (!session) return '';
        
        return `
            <div class="collaborative-quiz" data-session-id="${sessionId}">
                <div class="quiz-header">
                    <h3>🤝 Gemeinsames Quiz</h3>
                    <div class="session-info">
                        <span class="session-timer" id="session-timer">--:--</span>
                        <span class="participant-count">👥 ${session.participants.size}</span>
                    </div>
                </div>
                
                <div class="participants-status">
                    ${this.renderParticipantsStatus(session)}
                </div>
                
                <div class="quiz-content">
                    <div class="question-area">
                        ${this.renderCurrentQuestion(session)}
                    </div>
                    
                    <div class="collaboration-sidebar">
                        <div class="real-time-chat">
                            <h4>💬 Chat</h4>
                            <div class="chat-messages" id="chat-messages-${sessionId}">
                                ${session.chat.map(msg => this.renderChatMessage(msg)).join('')}
                            </div>
                            <div class="chat-input">
                                <input type="text" id="chat-input-${sessionId}" 
                                       placeholder="Nachricht eingeben..." 
                                       onkeypress="if(event.key==='Enter') collaboration.sendChatMessage('${sessionId}', this.value); this.value='';">
                                <button onclick="collaboration.sendChatMessage('${sessionId}', document.getElementById('chat-input-${sessionId}').value); document.getElementById('chat-input-${sessionId}').value='';">
                                    📤
                                </button>
                            </div>
                        </div>
                        
                        <div class="shared-hints">
                            <h4>💡 Geteilte Hinweise</h4>
                            <div class="hints-list">
                                ${session.realTimeData.sharedHints
                                    .filter(hint => hint.questionId === session.currentQuestion?.id)
                                    .map(hint => this.renderSharedHint(hint)).join('')}
                            </div>
                            <button onclick="collaboration.showShareHintModal('${sessionId}')" class="btn-secondary btn-small">
                                💡 Hinweis teilen
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="quiz-controls">
                    <button onclick="collaboration.pauseSession('${sessionId}')" class="btn-secondary">
                        ⏸️ Pausieren
                    </button>
                    <button onclick="collaboration.endSession('${sessionId}')" class="btn-danger">
                        🛑 Session beenden
                    </button>
                </div>
            </div>
        `;
    }

    // Event Handling
    broadcastEvent(event) {
        // Simuliert Broadcasting an alle Teilnehmer
        this.realTimeEvents.push(event);
        
        // In Produktion würde hier WebSocket/Server-Sent Events verwendet
        setTimeout(() => {
            this.handleRealTimeEvent(event);
        }, 50);
    }

    handleRealTimeEvent(event) {
        switch (event.type) {
            case this.eventTypes.USER_JOINED:
                this.onUserJoined(event);
                break;
            case this.eventTypes.QUESTION_ANSWERED:
                this.onQuestionAnswered(event);
                break;
            case this.eventTypes.HINT_SHARED:
                this.onHintShared(event);
                break;
            case this.eventTypes.MESSAGE_SENT:
                this.onMessageSent(event);
                break;
            // ... weitere Event-Handler
        }
    }

    onUserJoined(event) {
        // Update UI to show new participant
        this.updateParticipantsList(event.groupId);
        
        // Show notification
        this.showCollaborationNotification(`${event.user.name} ist der Gruppe beigetreten`);
    }

    onQuestionAnswered(event) {
        // Update real-time progress display
        this.updateParticipantProgress(event.sessionId, event.userId, event.answerData);
        
        // Check if all participants have answered
        this.checkForNextQuestion(event.sessionId, event.questionId);
    }

    onHintShared(event) {
        // Add hint to shared hints display
        this.addSharedHint(event.sessionId, event.hint);
        
        // Show notification
        this.showCollaborationNotification('💡 Neuer Hinweis geteilt');
    }

    // Utility Methods
    getCurrentUser() {
        // In Produktion würde dies aus authentifiziertem Session-State kommen
        return JSON.parse(localStorage.getItem('currentUser') || JSON.stringify({
            id: 'user_' + Math.random().toString(36).substr(2, 9),
            name: 'Anonymous User',
            avatar: '/icons/default-avatar.png',
            level: 1,
            joinedAt: new Date()
        }));
    }

    generateGroupId() {
        return 'group_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateInviteCode() {
        return Math.random().toString(36).substr(2, 8).toUpperCase();
    }

    saveStudyGroups() {
        // Konvertiere Maps zu Objects für localStorage
        const groupsData = Array.from(this.studyGroups.entries()).map(([id, group]) => ({
            id,
            ...group,
            participants: Array.from(group.participants.entries())
        }));
        
        localStorage.setItem('studyGroups', JSON.stringify(groupsData));
    }

    loadStudyGroups() {
        const saved = localStorage.getItem('studyGroups');
        if (saved) {
            const groupsData = JSON.parse(saved);
            groupsData.forEach(groupData => {
                const { id, participants, ...group } = groupData;
                group.participants = new Map(participants);
                this.studyGroups.set(id, group);
            });
        }
    }

    setupEventHandlers() {
        // Setup Event Listeners für Platform-Events
        window.addEventListener('questionAnswered', (event) => {
            const activeSession = this.getActiveSession();
            if (activeSession) {
                this.answerQuestionCollaboratively(
                    activeSession.id,
                    event.detail.questionId,
                    event.detail.answer,
                    event.detail.responseTime
                );
            }
        });

        window.addEventListener('achievementUnlocked', (event) => {
            const activeSession = this.getActiveSession();
            if (activeSession) {
                this.shareAchievement(activeSession.id, event.detail);
            }
        });
    }

    getActiveSession() {
        const userId = this.getCurrentUser().id;
        for (const [sessionId, session] of this.sharedSessions.entries()) {
            if (session.participants.has(userId) && session.status === 'active') {
                return session;
            }
        }
        return null;
    }

    syncWithPeers() {
        // Simuliert Synchronisation mit anderen Clients
        // In Produktion würde hier Conflict Resolution und State Synchronization stattfinden
        console.log('🔄 Syncing with peers...');
    }

    showCollaborationNotification(message) {
        // Zeige Collaboration-spezifische Benachrichtigung
        const notification = document.createElement('div');
        notification.className = 'collaboration-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--info-color);
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Global Collaboration Instance
window.collaboration = new CollaborationSystem();
