// Virtual Cybersecurity Escape Room System
class CybersecurityEscapeRoom {
    constructor() {
        this.currentRoom = null;
        this.playerInventory = [];
        this.timeRemaining = 0;
        this.hintsUsed = 0;
        this.maxHints = 3;
        this.initializeRooms();
    }

    initializeRooms() {
        this.rooms = [
            {
                id: "botnet_prison",
                name: "🤖 Gefangen im Botnet",
                difficulty: "intermediate",
                timeLimit: 45, // Minuten
                description: "Sie sind in einem kompromittierten System gefangen. Analysieren Sie die Malware und finden Sie den Ausgang!",
                story: `Ihr Computer wurde Teil eines Botnets. Die einzige Möglichkeit zur Befreiung: 
                       Analysieren Sie die Malware, finden Sie den C&C-Server und entschlüsseln Sie den Kill-Switch.`,
                puzzles: [
                    {
                        id: "malware_analysis",
                        title: "Malware-Analyse",
                        type: "code_analysis",
                        description: "Analysieren Sie den verdächtigen Code und identifizieren Sie die Malware-Familie",
                        code: `
                        function obfuscatedFunction() {
                            var x = "68747470733a2f2f6d616c6963696f75732d632d632e636f6d";
                            var decoded = "";
                            for(var i = 0; i < x.length; i += 2) {
                                decoded += String.fromCharCode(parseInt(x.substr(i, 2), 16));
                            }
                            return decoded;
                        }`,
                        solution: "https://malicious-c-c.com",
                        hint1: "Der String ist hexadezimal kodiert",
                        hint2: "Verwenden Sie parseInt() mit base 16",
                        hint3: "Es ist eine URL zum Command & Control Server"
                    },
                    {
                        id: "network_forensics",
                        title: "Netzwerk-Forensik",
                        type: "packet_analysis",
                        description: "Analysieren Sie den Netzwerkverkehr und finden Sie die Kommunikation zum C&C-Server",
                        packets: [
                            { src: "192.168.1.100", dst: "185.243.115.84", port: 443, payload: "encrypted_command_1" },
                            { src: "192.168.1.100", dst: "8.8.8.8", port: 53, payload: "DNS_query_google.com" },
                            { src: "192.168.1.100", dst: "185.243.115.84", port: 443, payload: "heartbeat_signal" },
                            { src: "185.243.115.84", dst: "192.168.1.100", port: 443, payload: "kill_switch_encrypted" }
                        ],
                        solution: "185.243.115.84",
                        hint1: "Suchen Sie nach wiederkehrenden Verbindungen",
                        hint2: "Achten Sie auf verdächtige IP-Adressen",
                        hint3: "Der C&C-Server sendet regelmäßige Befehle"
                    },
                    {
                        id: "crypto_challenge",
                        title: "Kill-Switch entschlüsseln",
                        type: "cryptography",
                        description: "Entschlüsseln Sie den Kill-Switch-Befehl mit dem gefundenen Schlüssel",
                        encryptedMessage: "U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y96Qsv2Lm+31cmzaAILwyt",
                        key: "malware_analysis_complete",
                        solution: "KILL_SWITCH_ACTIVATED",
                        hint1: "Verwenden Sie AES-Entschlüsselung",
                        hint2: "Der Schlüssel ist die Lösung aus Puzzle 1",
                        hint3: "Base64 dekodieren nach der Entschlüsselung"
                    }
                ],
                rewards: {
                    points: 500,
                    achievements: ["escape_artist", "malware_hunter"],
                    badge: "🔓 Botnet Breaker"
                }
            },
            
            {
                id: "ransomware_recovery",
                name: "💀 Ransomware Recovery Room",
                difficulty: "advanced",
                timeLimit: 60,
                description: "Ihr Unternehmen wurde von Ransomware getroffen. Sie haben 1 Stunde, um die Verschlüsselung zu brechen!",
                story: `CryptoLocker 3.0 hat alle wichtigen Dateien verschlüsselt. Die Angreifer fordern 50 Bitcoin. 
                       Als IT-Security-Experte müssen Sie einen Weg finden, die Daten zu retten, ohne zu zahlen.`,
                puzzles: [
                    {
                        id: "forensic_timeline",
                        title: "Forensische Zeitlinie",
                        type: "timeline_reconstruction",
                        description: "Rekonstruieren Sie die Angriffskette anhand der Log-Einträge",
                        logEntries: [
                            { time: "09:15:32", event: "User opened email attachment document.pdf.exe", severity: "high" },
                            { time: "09:15:45", event: "Process spawned: ransomware.exe", severity: "critical" },
                            { time: "08:45:12", event: "Suspicious email received from external sender", severity: "medium" },
                            { time: "09:16:01", event: "File encryption started", severity: "critical" },
                            { time: "09:14:55", event: "User logged in", severity: "info" },
                            { time: "09:18:30", event: "Ransom note created", severity: "critical" }
                        ],
                        solution: ["08:45:12", "09:14:55", "09:15:32", "09:15:45", "09:16:01", "09:18:30"],
                        hint1: "Sortieren Sie die Ereignisse chronologisch",
                        hint2: "Der Angriff begann mit einer E-Mail",
                        hint3: "Die Ausführung erfolgte nach dem Login"
                    },
                    {
                        id: "backup_recovery",
                        title: "Backup-Wiederherstellung",
                        type: "system_recovery",
                        description: "Finden Sie ein funktionsfähiges Backup und stellen Sie kritische Dateien wieder her",
                        backupSources: [
                            { name: "Daily Backup", status: "encrypted", date: "today" },
                            { name: "Weekly Backup", status: "corrupted", date: "3 days ago" },
                            { name: "Monthly Backup", status: "clean", date: "15 days ago" },
                            { name: "Offsite Backup", status: "clean", date: "7 days ago" }
                        ],
                        solution: "Offsite Backup",
                        hint1: "Suchen Sie nach nicht kompromittierten Backups",
                        hint2: "Offsite-Backups sind meist sicher",
                        hint3: "7 Tage alte Daten sind besser als gar keine"
                    },
                    {
                        id: "decryption_key",
                        title: "Entschlüsselungsschlüssel finden",
                        type: "memory_forensics",
                        description: "Analysieren Sie den Arbeitsspeicher und finden Sie den Verschlüsselungsschlüssel",
                        memoryDump: "Das System hat vor der vollständigen Verschlüsselung einen Memory Dump erstellt...",
                        solution: "AES256_KEY_FOUND_IN_MEMORY",
                        hint1: "Suchen Sie nach AES-Schlüsseln im Speicher",
                        hint2: "Ransomware muss den Schlüssel temporär im RAM speichern",
                        hint3: "Verwenden Sie Volatility für die Speicheranalyse"
                    }
                ],
                rewards: {
                    points: 1000,
                    achievements: ["ransomware_slayer", "backup_hero"],
                    badge: "💪 Ransomware Resistor"
                }
            },

            {
                id: "social_engineering_maze",
                name: "🎭 Social Engineering Labyrinth",
                difficulty: "expert",
                timeLimit: 30,
                description: "Navigieren Sie durch ein Labyrinth aus Social Engineering Fallen!",
                story: `Sie sind ein neuer Mitarbeiter und müssen sich durch das Büro bewegen. 
                       Überall lauern Social Engineers, die versuchen, Informationen aus Ihnen herauszulocken.`,
                puzzles: [
                    {
                        id: "phone_scam",
                        title: "Telefon-Betrug",
                        type: "conversation",
                        description: "Ein angeblicher IT-Support ruft an und fragt nach Ihrem Passwort",
                        scenario: {
                            caller: "IT-Support",
                            message: "Hallo, hier ist der IT-Support. Wir haben ein Problem mit Ihrem Account und brauchen Ihr Passwort zur Überprüfung.",
                            responses: [
                                "Hier ist mein Passwort: password123",
                                "Können Sie mir Ihre Mitarbeiternummer geben?",
                                "Ich rufe Sie über die offizielle IT-Hotline zurück",
                                "Ich bin gerade beschäftigt, rufen Sie später an"
                            ]
                        },
                        correctResponse: 2,
                        hint1: "Echte IT-Support-Mitarbeiter fragen nie nach Passwörtern",
                        hint2: "Verifizieren Sie die Identität über offizielle Kanäle",
                        hint3: "Bei Unsicherheit: auflegen und zurückrufen"
                    },
                    {
                        id: "tailgating",
                        title: "Tailgating-Situation",
                        type: "physical_security",
                        description: "Jemand versucht, Ihnen in einen sicheren Bereich zu folgen",
                        scenario: {
                            situation: "An der Sicherheitstür wartet eine Person mit Kaffeetassen in beiden Händen",
                            person: "Können Sie mir bitte die Tür aufhalten? Ich habe die Hände voll.",
                            responses: [
                                "Klar, kein Problem! Hier bitte.",
                                "Tut mir leid, aber Sie brauchen eine eigene Zugangskarte",
                                "Warten Sie, ich helfe Ihnen beim Kaffee",
                                "Sind Sie hier Mitarbeiter? Ich kenne Sie nicht"
                            ]
                        },
                        correctResponse: 1,
                        hint1: "Physische Sicherheit gilt für alle",
                        hint2: "Höflichkeit darf nicht die Sicherheit gefährden",
                        hint3: "Jeder braucht seine eigene Berechtigung"
                    },
                    {
                        id: "pretexting",
                        title: "Pretexting-Angriff",
                        type: "email_analysis",
                        description: "Analysieren Sie diese E-Mail auf Social Engineering Techniken",
                        email: {
                            from: "ceo@ihrefirma.com",
                            subject: "URGENT: Wire Transfer Required",
                            body: "I'm in a meeting and need you to wire 50,000€ to this account immediately. Please don't mention this to anyone as it's confidential. Account: DE89 3704 0044 0532 0130 00",
                            redFlags: ["urgency", "secrecy", "authority", "wire_transfer"]
                        },
                        solution: ["CEO Fraud", "Business Email Compromise", "Pretexting"],
                        hint1: "Achten Sie auf Dringlichkeit und Geheimhaltung",
                        hint2: "Überprüfen Sie die E-Mail-Adresse genau",
                        hint3: "CEO würde niemals so kommunizieren"
                    }
                ],
                rewards: {
                    points: 750,
                    achievements: ["social_engineer_detector", "human_firewall"],
                    badge: "🛡️ Social Engineering Survivor"
                }
            }
        ];
    }

    startRoom(roomId) {
        this.currentRoom = this.rooms.find(room => room.id === roomId);
        if (!this.currentRoom) {
            throw new Error("Raum nicht gefunden");
        }

        this.timeRemaining = this.currentRoom.timeLimit * 60; // Convert to seconds
        this.hintsUsed = 0;
        this.playerInventory = [];
        this.startTimer();
        
        return this.renderRoom();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endGame(false);
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timerElement = document.getElementById('escape-room-timer');
        
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (this.timeRemaining <= 300) { // Last 5 minutes
                timerElement.classList.add('warning');
            }
        }
    }

    useHint(puzzleId) {
        if (this.hintsUsed >= this.maxHints) {
            alert("Sie haben alle Hinweise aufgebraucht!");
            return;
        }

        const puzzle = this.currentRoom.puzzles.find(p => p.id === puzzleId);
        if (!puzzle) return;

        this.hintsUsed++;
        const hintNumber = this.hintsUsed;
        const hint = puzzle[`hint${hintNumber}`];
        
        if (hint) {
            this.showHint(hint);
        }
    }

    showHint(hint) {
        const hintElement = document.createElement('div');
        hintElement.className = 'escape-room-hint';
        hintElement.innerHTML = `
            <h4>💡 Hinweis ${this.hintsUsed}/${this.maxHints}</h4>
            <p>${hint}</p>
        `;
        
        document.getElementById('escape-room-hints').appendChild(hintElement);
    }

    solvePuzzle(puzzleId, solution) {
        const puzzle = this.currentRoom.puzzles.find(p => p.id === puzzleId);
        if (!puzzle) return false;

        const isCorrect = this.checkSolution(puzzle, solution);
        
        if (isCorrect) {
            puzzle.solved = true;
            this.addToInventory(`Gelöst: ${puzzle.title}`);
            
            if (this.currentRoom.puzzles.every(p => p.solved)) {
                this.endGame(true);
            }
            
            return true;
        }
        
        return false;
    }

    checkSolution(puzzle, solution) {
        switch (puzzle.type) {
            case 'code_analysis':
            case 'packet_analysis':
            case 'cryptography':
                return solution.toLowerCase().trim() === puzzle.solution.toLowerCase().trim();
            
            case 'timeline_reconstruction':
                return JSON.stringify(solution) === JSON.stringify(puzzle.solution);
            
            case 'conversation':
            case 'physical_security':
                return solution === puzzle.correctResponse;
            
            case 'email_analysis':
                return puzzle.solution.some(s => solution.toLowerCase().includes(s.toLowerCase()));
            
            default:
                return false;
        }
    }

    addToInventory(item) {
        this.playerInventory.push(item);
        this.updateInventoryDisplay();
    }

    updateInventoryDisplay() {
        const inventoryElement = document.getElementById('escape-room-inventory');
        if (inventoryElement) {
            inventoryElement.innerHTML = this.playerInventory
                .map(item => `<div class="inventory-item">${item}</div>`)
                .join('');
        }
    }

    endGame(success) {
        clearInterval(this.timerInterval);
        
        if (success) {
            this.showSuccessModal();
            this.awardRewards();
        } else {
            this.showFailureModal();
        }
    }

    awardRewards() {
        if (window.achievementSystem) {
            window.achievementSystem.updateProgress('escapeRoomsCompleted', 1);
            window.achievementSystem.updateProgress('points', this.currentRoom.rewards.points);
            
            this.currentRoom.rewards.achievements.forEach(achievement => {
                window.achievementSystem.unlockAchievement(achievement);
            });
        }
    }

    renderRoom() {
        return `
            <div class="escape-room-container">
                <div class="escape-room-header">
                    <h2>${this.currentRoom.name}</h2>
                    <div class="escape-room-stats">
                        <div class="timer">
                            ⏱️ <span id="escape-room-timer">${this.currentRoom.timeLimit}:00</span>
                        </div>
                        <div class="hints">
                            💡 Hinweise: ${this.hintsUsed}/${this.maxHints}
                        </div>
                        <div class="difficulty">
                            🎯 ${this.currentRoom.difficulty}
                        </div>
                    </div>
                </div>
                
                <div class="escape-room-story">
                    <h3>📖 Hintergrundgeschichte</h3>
                    <p>${this.currentRoom.story}</p>
                </div>
                
                <div class="escape-room-content">
                    <div class="puzzles-area">
                        <h3>🧩 Rätsel</h3>
                        ${this.renderPuzzles()}
                    </div>
                    
                    <div class="escape-room-sidebar">
                        <div class="inventory-panel">
                            <h4>🎒 Inventar</h4>
                            <div id="escape-room-inventory"></div>
                        </div>
                        
                        <div class="hints-panel">
                            <h4>💡 Hinweise</h4>
                            <div id="escape-room-hints"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderPuzzles() {
        return this.currentRoom.puzzles.map(puzzle => `
            <div class="puzzle-card ${puzzle.solved ? 'solved' : ''}" id="puzzle-${puzzle.id}">
                <div class="puzzle-header">
                    <h4>${puzzle.title}</h4>
                    <button class="hint-btn" onclick="escapeRoom.useHint('${puzzle.id}')">
                        💡 Hinweis
                    </button>
                </div>
                <p>${puzzle.description}</p>
                
                ${this.renderPuzzleContent(puzzle)}
                
                <div class="puzzle-solution">
                    <input type="text" id="solution-${puzzle.id}" placeholder="Ihre Lösung...">
                    <button onclick="escapeRoom.solvePuzzle('${puzzle.id}', document.getElementById('solution-${puzzle.id}').value)">
                        Lösung prüfen
                    </button>
                </div>
                
                ${puzzle.solved ? '<div class="solved-badge">✅ Gelöst</div>' : ''}
            </div>
        `).join('');
    }

    renderPuzzleContent(puzzle) {
        switch (puzzle.type) {
            case 'code_analysis':
                return `<pre class="code-block">${puzzle.code}</pre>`;
            
            case 'packet_analysis':
                return `
                    <div class="packet-list">
                        ${puzzle.packets.map(packet => `
                            <div class="packet">
                                ${packet.src} → ${packet.dst}:${packet.port} | ${packet.payload}
                            </div>
                        `).join('')}
                    </div>
                `;
            
            case 'timeline_reconstruction':
                return `
                    <div class="timeline-events">
                        ${puzzle.logEntries.map(entry => `
                            <div class="timeline-event ${entry.severity}">
                                <span class="time">${entry.time}</span>
                                <span class="event">${entry.event}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            
            default:
                return '';
        }
    }

    showSuccessModal() {
        const timeBonus = Math.max(0, this.timeRemaining * 2);
        const hintPenalty = this.hintsUsed * 50;
        const finalScore = this.currentRoom.rewards.points + timeBonus - hintPenalty;

        const modal = document.createElement('div');
        modal.className = 'escape-room-modal success';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>🎉 Escape Room erfolgreich abgeschlossen!</h2>
                <div class="success-stats">
                    <div class="stat">
                        <span class="label">Grundpunkte:</span>
                        <span class="value">${this.currentRoom.rewards.points}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Zeit-Bonus:</span>
                        <span class="value">+${timeBonus}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Hinweis-Abzug:</span>
                        <span class="value">-${hintPenalty}</span>
                    </div>
                    <hr>
                    <div class="stat total">
                        <span class="label">Gesamtpunkte:</span>
                        <span class="value">${finalScore}</span>
                    </div>
                </div>
                
                <div class="rewards">
                    <h3>🏆 Belohnungen</h3>
                    <div class="badge">${this.currentRoom.rewards.badge}</div>
                </div>
                
                <button onclick="this.parentElement.parentElement.remove()">Weiter</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    showFailureModal() {
        const modal = document.createElement('div');
        modal.className = 'escape-room-modal failure';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>⏰ Zeit abgelaufen!</h2>
                <p>Sie haben es nicht geschafft, rechtzeitig zu entkommen.</p>
                <p>Versuchen Sie es erneut oder wählen Sie einen anderen Raum.</p>
                <button onclick="this.parentElement.parentElement.remove()">Nochmal versuchen</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// CSS für Escape Room
const escapeRoomCSS = `
    .escape-room-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .escape-room-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .escape-room-stats {
        display: flex;
        gap: 20px;
    }
    
    .timer {
        font-size: 1.2em;
        font-weight: bold;
    }
    
    .timer.warning {
        color: #ff6b6b;
        animation: pulse 1s infinite;
    }
    
    .escape-room-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }
    
    .puzzle-card {
        background: white;
        border-radius: 10px;
        padding: 20px;
        margin: 15px 0;
        border-left: 5px solid #007bff;
        position: relative;
    }
    
    .puzzle-card.solved {
        border-left-color: #28a745;
        background: #f8fff9;
    }
    
    .puzzle-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .hint-btn {
        background: #ffc107;
        color: black;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .code-block {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 5px;
        padding: 15px;
        overflow-x: auto;
        font-family: 'Courier New', monospace;
    }
    
    .packet-list {
        background: #f8f9fa;
        border-radius: 5px;
        padding: 10px;
    }
    
    .packet {
        font-family: monospace;
        padding: 5px;
        border-bottom: 1px solid #dee2e6;
    }
    
    .timeline-events {
        background: #f8f9fa;
        border-radius: 5px;
        padding: 15px;
    }
    
    .timeline-event {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        margin: 5px 0;
        border-radius: 3px;
    }
    
    .timeline-event.high { background: #fff3cd; }
    .timeline-event.critical { background: #f8d7da; }
    .timeline-event.medium { background: #d1ecf1; }
    .timeline-event.info { background: #d4edda; }
    
    .puzzle-solution {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }
    
    .puzzle-solution input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .puzzle-solution button {
        background: #007bff;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .solved-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #28a745;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8em;
    }
    
    .escape-room-sidebar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .inventory-panel, .hints-panel {
        background: white;
        border-radius: 10px;
        padding: 15px;
    }
    
    .inventory-item {
        background: #e9ecef;
        padding: 8px;
        margin: 5px 0;
        border-radius: 4px;
        font-size: 0.9em;
    }
    
    .escape-room-hint {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }
    
    .escape-room-modal {
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
    
    .escape-room-modal .modal-content {
        background: white;
        border-radius: 15px;
        padding: 30px;
        max-width: 500px;
        text-align: center;
    }
    
    .success-stats {
        text-align: left;
        margin: 20px 0;
    }
    
    .success-stats .stat {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
    }
    
    .success-stats .total {
        font-weight: bold;
        font-size: 1.1em;
        color: #28a745;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;

// Style hinzufügen
const escapeRoomStyleSheet = document.createElement('style');
escapeRoomStyleSheet.textContent = escapeRoomCSS;
document.head.appendChild(escapeRoomStyleSheet);

// Global instance
window.escapeRoom = new CybersecurityEscapeRoom();
