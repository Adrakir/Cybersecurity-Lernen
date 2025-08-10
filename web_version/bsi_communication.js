// BSI Communication Simulator - Chat, Telefon, E-Mail
class BSICommunicationSimulator {
    constructor() {
        this.currentMode = null; // 'chat', 'phone', 'email'
        this.conversationStep = 0;
        this.incidentType = null;
        this.userResponses = [];
    }

    startCommunication(mode, incidentType) {
        this.currentMode = mode;
        this.incidentType = incidentType;
        this.conversationStep = 0;
        this.userResponses = [];
        
        this.renderInterface();
    }

    renderInterface() {
        const container = document.getElementById('bsi-communication-container');
        
        switch(this.currentMode) {
            case 'chat':
                this.renderChat();
                break;
            case 'phone':
                this.renderPhone();
                break;
            case 'email':
                this.renderEmail();
                break;
        }
    }

    renderChat() {
        const container = document.getElementById('bsi-communication-container');
        container.innerHTML = `
            <div class="bsi-chat-interface">
                <div class="chat-header">
                    <div class="bsi-logo">🛡️ BSI</div>
                    <div class="chat-status">
                        <span class="status-indicator online"></span>
                        BSI Cyber-Sicherheit Hotline - Online
                    </div>
                    <div class="chat-time">${new Date().toLocaleTimeString()}</div>
                </div>
                
                <div class="chat-messages" id="chat-messages">
                    <div class="message bsi-message">
                        <div class="message-time">${new Date().toLocaleTimeString()}</div>
                        <div class="message-content">
                            Guten Tag! Hier ist das BSI Incident Response Team. 
                            Sie melden einen Sicherheitsvorfall? Können Sie mir kurz beschreiben, was passiert ist?
                        </div>
                    </div>
                </div>
                
                <div class="chat-input-area">
                    <div class="quick-responses">
                        <button class="quick-btn" onclick="bsiChat.sendQuickResponse('ransomware')">
                            🔒 Ransomware-Angriff
                        </button>
                        <button class="quick-btn" onclick="bsiChat.sendQuickResponse('phishing')">
                            🎣 Phishing-E-Mail
                        </button>
                        <button class="quick-btn" onclick="bsiChat.sendQuickResponse('data_breach')">
                            📊 Datenleck
                        </button>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="chat-input" placeholder="Ihre Nachricht..." 
                               onkeypress="if(event.key==='Enter') bsiChat.sendMessage()">
                        <button onclick="bsiChat.sendMessage()">Senden</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderPhone() {
        const container = document.getElementById('bsi-communication-container');
        container.innerHTML = `
            <div class="bsi-phone-interface">
                <div class="phone-screen">
                    <div class="phone-header">
                        <div class="signal-bars">📶</div>
                        <div class="phone-time">${new Date().toLocaleTimeString()}</div>
                        <div class="battery">🔋 89%</div>
                    </div>
                    
                    <div class="call-info">
                        <div class="caller-name">BSI Cyber-Abwehrzentrum</div>
                        <div class="phone-number">+49 228 99 9582-222</div>
                        <div class="call-duration" id="call-duration">00:00</div>
                    </div>
                    
                    <div class="phone-conversation" id="phone-conversation">
                        <div class="phone-message bsi-voice">
                            <span class="speaker">👨‍💼 BSI-Agent:</span>
                            "Guten Tag, hier ist das BSI Cyber-Abwehrzentrum. 
                            Mein Name ist Müller vom Incident Response Team. 
                            Sie haben einen Sicherheitsvorfall gemeldet?"
                        </div>
                    </div>
                    
                    <div class="phone-responses">
                        <button class="response-btn" onclick="bsiPhone.respond('yes_incident')">
                            "Ja, wir haben einen schweren Vorfall"
                        </button>
                        <button class="response-btn" onclick="bsiPhone.respond('need_help')">
                            "Wir brauchen dringend Hilfe"
                        </button>
                        <button class="response-btn" onclick="bsiPhone.respond('not_sure')">
                            "Ich bin mir nicht sicher was passiert ist"
                        </button>
                    </div>
                    
                    <div class="phone-controls">
                        <button class="phone-btn mute">🔇</button>
                        <button class="phone-btn speaker">📢</button>
                        <button class="phone-btn end-call" onclick="bsiPhone.endCall()">📞</button>
                    </div>
                </div>
            </div>
        `;
        
        this.startCallTimer();
    }

    renderEmail() {
        const container = document.getElementById('bsi-communication-container');
        container.innerHTML = `
            <div class="bsi-email-interface">
                <div class="email-header">
                    <div class="email-toolbar">
                        <button>📧 Neue E-Mail</button>
                        <button>↩️ Antworten</button>
                        <button>⏭️ Weiterleiten</button>
                        <button>🗑️ Löschen</button>
                    </div>
                </div>
                
                <div class="email-content">
                    <div class="email-fields">
                        <div class="field">
                            <strong>Von:</strong> incident-response@bsi.bund.de
                        </div>
                        <div class="field">
                            <strong>An:</strong> ${this.generateUserEmail()}
                        </div>
                        <div class="field">
                            <strong>Betreff:</strong> Re: Meldung Sicherheitsvorfall - Ihr Zeichen: INC-${Date.now()}
                        </div>
                        <div class="field">
                            <strong>Datum:</strong> ${new Date().toLocaleString()}
                        </div>
                    </div>
                    
                    <div class="email-body">
                        <p><strong>Sehr geehrte Damen und Herren,</strong></p>
                        
                        <p>vielen Dank für Ihre Meldung an das BSI-Lagezentrum. 
                        Wir haben Ihren Sicherheitsvorfall unter der Nummer <strong>INC-${Date.now()}</strong> registriert.</p>
                        
                        <p><strong>Erste Einschätzung:</strong><br>
                        Basierend auf Ihrer Schilderung handelt es sich um einen ${this.getIncidentTypeDescription()}. 
                        Dies erfordert folgende Sofortmaßnahmen:</p>
                        
                        <ul>
                            <li>☑️ Betroffene Systeme isolieren</li>
                            <li>☑️ Keine Lösegeldzahlung</li>
                            <li>☑️ Beweise sicherstellen</li>
                            <li>☑️ Kommunikation dokumentieren</li>
                        </ul>
                        
                        <p><strong>Nächste Schritte:</strong></p>
                        <ol>
                            <li>Füllen Sie das beigefügte Incident-Formular aus</li>
                            <li>Sichern Sie relevante Log-Dateien</li>
                            <li>Dokumentieren Sie den Zeitablauf</li>
                            <li>Informieren Sie uns über Entwicklungen</li>
                        </ol>
                        
                        <p>Unser Expertenteam steht Ihnen bei weiteren Fragen zur Verfügung.</p>
                        
                        <div class="email-signature">
                            <hr>
                            <p><strong>BSI - Bundesamt für Sicherheit in der Informationstechnik</strong><br>
                            Cyber-Abwehrzentrum<br>
                            incident-response@bsi.bund.de<br>
                            Hotline: +49 228 99 9582-222</p>
                            
                            <p><em>Diese E-Mail wurde automatisch generiert und ist rechtsverbindlich.</em></p>
                        </div>
                    </div>
                    
                    <div class="email-attachments">
                        <h4>📎 Anhänge:</h4>
                        <div class="attachment">📄 BSI_Incident_Response_Formular.pdf</div>
                        <div class="attachment">📄 Forensik_Checkliste.pdf</div>
                        <div class="attachment">📄 Kommunikationsvorlage_Management.docx</div>
                    </div>
                </div>
                
                <div class="email-actions">
                    <button class="email-btn primary" onclick="bsiEmail.reply()">
                        ↩️ Antworten
                    </button>
                    <button class="email-btn" onclick="bsiEmail.downloadAttachments()">
                        📥 Anhänge herunterladen
                    </button>
                    <button class="email-btn" onclick="bsiEmail.markImportant()">
                        ⭐ Als wichtig markieren
                    </button>
                </div>
            </div>
        `;
    }

    // Chat-Funktionen
    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message) return;
        
        this.addChatMessage('user', message);
        input.value = '';
        
        setTimeout(() => {
            this.generateBSIResponse(message);
        }, 1000);
    }

    sendQuickResponse(type) {
        const responses = {
            'ransomware': 'Wir wurden von Ransomware befallen. Alle Dateien sind verschlüsselt.',
            'phishing': 'Unsere Mitarbeiter haben verdächtige E-Mails erhalten.',
            'data_breach': 'Wir vermuten einen Datendiebstahl in unserem System.'
        };
        
        this.addChatMessage('user', responses[type]);
        setTimeout(() => {
            this.generateBSIResponse(responses[type]);
        }, 1000);
    }

    addChatMessage(sender, content) {
        const messagesDiv = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
            <div class="message-content">${content}</div>
        `;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    generateBSIResponse(userMessage) {
        let response = "";
        
        if (userMessage.toLowerCase().includes('ransomware')) {
            response = `Das ist ein ernsthafter Vorfall. Bitte befolgen Sie sofort folgende Schritte:
            
            1. 🔌 NICHT die betroffenen Systeme herunterfahren
            2. 🌐 Internetverbindung trennen
            3. 📱 Weitere Systeme isolieren
            4. 💰 KEINE Lösegeldzahlung leisten
            
            Haben Sie bereits Backups überprüft?`;
        } else if (userMessage.toLowerCase().includes('phishing')) {
            response = `Phishing-Angriffe nehmen zu. Wichtige Fragen:
            
            1. 📧 Haben Mitarbeiter auf Links geklickt?
            2. 🔑 Wurden Zugangsdaten eingegeben?
            3. 💾 Wurden Anhänge geöffnet?
            
            Bitte leiten Sie uns eine Beispiel-E-Mail weiter.`;
        } else {
            response = `Verstehe. Können Sie mir mehr Details geben? 
            
            - Wann wurde der Vorfall entdeckt?
            - Welche Systeme sind betroffen?
            - Gibt es bereits Schäden?`;
        }
        
        this.addChatMessage('bsi', response);
    }

    // Telefon-Funktionen
    startCallTimer() {
        let seconds = 0;
        setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const durationElement = document.getElementById('call-duration');
            if (durationElement) {
                durationElement.textContent = 
                    `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    // Hilfsfunktionen
    generateUserEmail() {
        return "sicherheit@" + (Math.random() > 0.5 ? "musterfirma.de" : "beispiel-gmbh.com");
    }

    getIncidentTypeDescription() {
        const types = {
            'ransomware': 'Ransomware-Angriff mit hoher Priorität',
            'phishing': 'Social Engineering Angriff',
            'data_breach': 'Potentiellen Datenabfluss',
            'default': 'IT-Sicherheitsvorfall'
        };
        return types[this.incidentType] || types.default;
    }
}

// CSS für BSI Communication
const bsiCommStyles = `
    .bsi-chat-interface {
        max-width: 600px;
        height: 500px;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: column;
    }
    
    .chat-header {
        background: linear-gradient(135deg, #000080, #4169E1);
        color: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .bsi-logo {
        font-weight: bold;
        font-size: 1.2em;
    }
    
    .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
    }
    
    .status-indicator.online {
        background: #28a745;
    }
    
    .chat-messages {
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        background: #f8f9fa;
    }
    
    .message {
        margin: 10px 0;
        max-width: 80%;
    }
    
    .bsi-message {
        background: #e3f2fd;
        border-radius: 10px 10px 10px 2px;
        padding: 10px;
        margin-left: 0;
    }
    
    .user-message {
        background: #007bff;
        color: white;
        border-radius: 10px 10px 2px 10px;
        padding: 10px;
        margin-left: auto;
        text-align: right;
    }
    
    .quick-responses {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        background: #f1f3f4;
    }
    
    .quick-btn {
        background: #007bff;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 0.8em;
    }
    
    .bsi-phone-interface {
        max-width: 350px;
        margin: 0 auto;
    }
    
    .phone-screen {
        background: black;
        color: white;
        border-radius: 25px;
        padding: 20px;
        height: 600px;
        position: relative;
    }
    
    .bsi-email-interface {
        max-width: 800px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
    .email-signature {
        background: #f8f9fa;
        padding: 15px;
        margin-top: 20px;
        border-left: 3px solid #007bff;
    }
`;

// Style hinzufügen
const bsiStyleSheet = document.createElement('style');
bsiStyleSheet.textContent = bsiCommStyles;
document.head.appendChild(bsiStyleSheet);

// Global instances
window.bsiChat = new BSICommunicationSimulator();
window.bsiPhone = new BSICommunicationSimulator();
window.bsiEmail = new BSICommunicationSimulator();
