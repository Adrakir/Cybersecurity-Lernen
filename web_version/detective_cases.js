// Cybersecurity Detective Cases - Krimi-Spiel System
class CybersecurityDetective {
    constructor() {
        this.currentCase = null;
        this.playerChoices = [];
        this.score = 0;
        this.cases = this.initializeCases();
    }

    initializeCases() {
        return [
            {
                id: 1,
                title: "Der verschwundene Backup-Administrator",
                category: "Insider Threat",
                difficulty: "Mittel",
                scenario: "Montag, 8:30 Uhr: Der Backup-Administrator Tom ist seit Freitag verschwunden. Alle Backups sind gelöscht. Was ist passiert?",
                evidence: [
                    { type: "log", content: "Letzte Anmeldung: Freitag 23:47 Uhr", suspicious: true },
                    { type: "email", content: "E-Mail an CEO: 'Ich kündige zum 31.12.'", suspicious: true },
                    { type: "system", content: "Backup-Deletion um 00:15 Uhr", suspicious: true },
                    { type: "witness", content: "Kollege: 'Tom war sehr wütend über Gehaltsverhandlung'", suspicious: true }
                ],
                timeline: [
                    { time: "Freitag 17:00", event: "Gehaltsverhandlung gescheitert" },
                    { time: "Freitag 23:47", event: "Letzte Anmeldung Tom" },
                    { time: "Samstag 00:15", event: "Alle Backups gelöscht" },
                    { time: "Montag 08:30", event: "Tom nicht erschienen" }
                ],
                questions: [
                    {
                        question: "Was ist das wahrscheinlichste Motiv?",
                        options: ["Technischer Fehler", "Rache nach Gehaltsverhandlung", "Externes Hacking", "Versehen"],
                        correct: 1,
                        explanation: "Die Kombination aus gescheiterter Gehaltsverhandlung und nächtlicher Löschung deutet auf Rache hin."
                    },
                    {
                        question: "Welche Sicherheitsmaßnahme hätte das verhindert?",
                        options: ["Bessere Passwörter", "Vier-Augen-Prinzip für kritische Aktionen", "Mehr Überwachung", "Firewall"],
                        correct: 1,
                        explanation: "Kritische Aktionen wie Backup-Löschung sollten immer eine zweite Bestätigung erfordern."
                    }
                ],
                solution: {
                    what_happened: "Tom hat aus Rache nach gescheiterter Gehaltsverhandlung alle Backups gelöscht.",
                    mistakes: [
                        "Keine Zugriffsbeschränkungen für kritische Systeme",
                        "Kein Vier-Augen-Prinzip",
                        "Keine sofortige Sperrung nach Kündigung"
                    ],
                    correct_response: [
                        "1. Sofort alle Zugänge von Tom sperren",
                        "2. Forensische Untersuchung der Logs",
                        "3. Notfall-Recovery aus Offsite-Backups",
                        "4. Polizei informieren (Sabotage)",
                        "5. Interne Richtlinien überarbeiten"
                    ],
                    prevention: [
                        "Vier-Augen-Prinzip für kritische Aktionen",
                        "Automatische Zugriffssperrung bei Kündigung",
                        "Offsite-Backups außerhalb der Admin-Kontrolle",
                        "Regelmäßige Backup-Tests"
                    ]
                },
                bsi_communication: {
                    initial_report: "Sehr geehrte Damen und Herren, wir melden hiermit einen schwerwiegenden IT-Sicherheitsvorfall...",
                    response_template: "Das BSI empfiehlt folgende Sofortmaßnahmen..."
                }
            },
            {
                id: 2,
                title: "Das rätselhafte Ransomware-Rätsel",
                category: "Malware Analysis",
                difficulty: "Hoch",
                scenario: "Dienstag, 6:00 Uhr: Alle Dateien verschlüsselt, aber die Ransomware-Note ist auf Klingonisch. Was steckt dahinter?",
                evidence: [
                    { type: "file", content: "Lösegeldforderung in Klingonisch", suspicious: true },
                    { type: "network", content: "Verdächtige Verbindungen zu Star Trek Fanseiten", suspicious: false },
                    { type: "employee", content: "IT-Praktikant ist großer Star Trek Fan", suspicious: true },
                    { type: "timing", content: "Angriff genau am Star Trek Day", suspicious: true }
                ],
                solution: {
                    what_happened: "Praktikant wollte Penetration Test durchführen, ging schief und wurde zu echter Ransomware.",
                    bsi_guidance: "Auch Test-Angriffe müssen autorisiert und dokumentiert sein."
                }
            }
        ];
    }

    startCase(caseId) {
        this.currentCase = this.cases.find(c => c.id === caseId);
        this.playerChoices = [];
        this.renderCase();
    }

    renderCase() {
        if (!this.currentCase) return;

        const container = document.getElementById('detective-game-container');
        container.innerHTML = `
            <div class="detective-case">
                <div class="case-header">
                    <h2>🕵️ ${this.currentCase.title}</h2>
                    <div class="case-meta">
                        <span class="badge badge-${this.currentCase.difficulty.toLowerCase()}">${this.currentCase.difficulty}</span>
                        <span class="badge badge-category">${this.currentCase.category}</span>
                    </div>
                </div>

                <div class="scenario-section">
                    <h3>📋 Scenario</h3>
                    <p class="scenario-text">${this.currentCase.scenario}</p>
                </div>

                <div class="evidence-section">
                    <h3>🔍 Beweise</h3>
                    <div class="evidence-grid">
                        ${this.currentCase.evidence.map(evidence => `
                            <div class="evidence-card ${evidence.suspicious ? 'suspicious' : ''}">
                                <div class="evidence-type">${evidence.type.toUpperCase()}</div>
                                <div class="evidence-content">${evidence.content}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="timeline-section">
                    <h3>⏰ Zeitablauf</h3>
                    <div class="timeline">
                        ${this.currentCase.timeline.map(event => `
                            <div class="timeline-event">
                                <div class="timeline-time">${event.time}</div>
                                <div class="timeline-desc">${event.event}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="questions-section">
                    <h3>❓ Ihre Analyse</h3>
                    ${this.currentCase.questions.map((q, index) => `
                        <div class="detective-question">
                            <p><strong>${q.question}</strong></p>
                            <div class="question-options">
                                ${q.options.map((option, optIndex) => `
                                    <button class="option-btn" onclick="detective.selectAnswer(${index}, ${optIndex})">
                                        ${option}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="explanation-${index}" class="explanation hidden"></div>
                        </div>
                    `).join('')}
                </div>

                <div class="solution-section hidden" id="case-solution">
                    <h3>✅ Lösung des Falls</h3>
                    <div class="solution-content">
                        <h4>Was ist passiert?</h4>
                        <p>${this.currentCase.solution.what_happened}</p>
                        
                        <h4>Gemachte Fehler:</h4>
                        <ul>
                            ${this.currentCase.solution.mistakes.map(mistake => `<li>${mistake}</li>`).join('')}
                        </ul>
                        
                        <h4>Korrekte Reaktion:</h4>
                        <ol>
                            ${this.currentCase.solution.correct_response.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                        
                        <h4>Prävention für die Zukunft:</h4>
                        <ul>
                            ${this.currentCase.solution.prevention.map(prev => `<li>${prev}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="bsi-communication">
                    <button class="btn btn-primary" onclick="detective.showBSICommunication()">
                        📞 BSI Kommunikation simulieren
                    </button>
                </div>
            </div>
        `;
    }

    selectAnswer(questionIndex, answerIndex) {
        const question = this.currentCase.questions[questionIndex];
        const explanationDiv = document.getElementById(`explanation-${questionIndex}`);
        
        if (answerIndex === question.correct) {
            explanationDiv.innerHTML = `<div class="correct">✅ Richtig! ${question.explanation}</div>`;
            this.score += 10;
        } else {
            explanationDiv.innerHTML = `<div class="incorrect">❌ Falsch. ${question.explanation}</div>`;
        }
        
        explanationDiv.classList.remove('hidden');
        this.playerChoices[questionIndex] = answerIndex;
        
        // Zeige Lösung wenn alle Fragen beantwortet
        if (this.playerChoices.length === this.currentCase.questions.length) {
            document.getElementById('case-solution').classList.remove('hidden');
        }
    }

    showBSICommunication() {
        // Simuliert BSI-Chat/Telefon/E-Mail
        alert("📞 BSI-Hotline: 'Guten Tag! Sie melden einen Sicherheitsvorfall? Ich verbinde Sie mit unserem Incident Response Team...'");
    }
}

// CSS für Detective Game
const detectiveStyles = `
    .detective-case {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .case-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .evidence-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin: 15px 0;
    }
    
    .evidence-card {
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .evidence-card.suspicious {
        border-left: 4px solid #ff4757;
        background: #fff5f5;
    }
    
    .timeline {
        background: white;
        border-radius: 8px;
        padding: 20px;
    }
    
    .timeline-event {
        display: flex;
        margin: 10px 0;
        padding: 10px;
        border-left: 3px solid #667eea;
    }
    
    .timeline-time {
        font-weight: bold;
        min-width: 120px;
        color: #667eea;
    }
    
    .option-btn {
        display: block;
        width: 100%;
        margin: 5px 0;
        padding: 10px;
        background: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .option-btn:hover {
        background: #e9ecef;
        border-color: #667eea;
    }
    
    .explanation {
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
    }
    
    .explanation.correct {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .explanation.incorrect {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;

// Style hinzufügen
const styleSheet = document.createElement('style');
styleSheet.textContent = detectiveStyles;
document.head.appendChild(styleSheet);

// Global instance
window.detective = new CybersecurityDetective();
