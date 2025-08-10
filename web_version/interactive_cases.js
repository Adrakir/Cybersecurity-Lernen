// Interaktive Fallstudien für IT-Sicherheit
const interactiveQuests = {
    easy: [
        {
            id: "office_usb",
            title: "🔌 Der mysteriöse USB-Stick",
            difficulty: "Einfach",
            description: "Ein USB-Stick liegt auf dem Parkplatz - was tun?",
            startingScenario: {
                title: "Montagmorgen - 8:30 Uhr",
                text: "Sie kommen zur Arbeit und bemerken einen glänzenden USB-Stick direkt vor dem Haupteingang Ihres Unternehmens. Ein Zettel klebt dran: 'Vertrauliche Gehaltsabrechnungen - Bitte an HR weiterleiten'. Niemand ist in der Nähe.",
                image: "🏢",
                setting: "Sie stehen vor dem Firmengebäude, der USB-Stick liegt zu Ihren Füßen. Andere Kollegen kommen auch gerade zur Arbeit."
            },
            questPaths: {
                start: {
                    situation: "Was ist Ihre erste Reaktion?",
                    choices: [
                        {
                            text: "USB-Stick ignorieren und an der IT-Abteilung vorbei informieren",
                            consequence: "it_informed",
                            risk: "low", 
                            points: 15
                        },
                        {
                            text: "USB-Stick mitnehmen, aber erstmal sicher analysieren lassen",
                            consequence: "careful_analysis",
                            risk: "medium",
                            points: 10
                        },
                        {
                            text: "Kollegen fragen, wem der USB-Stick gehört",
                            consequence: "ask_colleagues",
                            risk: "medium",
                            points: 5
                        }
                    ]
                }
            },
            finalScore: function(totalScore) {
                if (totalScore >= 15) return { grade: "A", text: "🏆 Perfekt! Sicherheit geht vor!" };
                if (totalScore >= 10) return { grade: "B", text: "👍 Gut gemacht!" };
                if (totalScore >= 5) return { grade: "C", text: "📚 Verbesserung möglich." };
                return { grade: "D", text: "⚠️ Mehr Training nötig." };
            }
        }
    ],
    medium: [
        {
            id: "ransomware_attack",
            title: "🔒 Ransomware-Angriff",
            difficulty: "Mittel",
            description: "Ein Ransomware-Angriff legt Ihr Unternehmensnetzwerk lahm",
            startingScenario: {
                title: "Dienstag - 14:45 Uhr",
                text: "Plötzlich werden alle Computer im Büro gesperrt. Ein rotes Fenster erscheint: 'Ihre Dateien wurden verschlüsselt. Zahlen Sie 5000€ in Bitcoin...'",
                image: "🚨",
                setting: "Chaos im Büro. Kollegen schreien, Telefone klingeln, der Server ist nicht erreichbar."
            },
            questPaths: {
                start: {
                    situation: "Sofortige Reaktion - was ist am wichtigsten?",
                    choices: [
                        {
                            text: "Alle Systeme sofort vom Netzwerk trennen",
                            consequence: "isolation_success",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "IT-Leiter und Geschäftsführung informieren",
                            consequence: "escalation_good",
                            risk: "medium",
                            points: 15
                        },
                        {
                            text: "Versuchen, die Verschlüsselung zu knacken",
                            consequence: "analysis_attempt",
                            risk: "high",
                            points: 5
                        }
                    ]
                }
            },
            finalScore: function(totalScore) {
                if (totalScore >= 20) return { grade: "A", text: "🏆 Krisenmanagement perfekt!" };
                if (totalScore >= 15) return { grade: "B", text: "👍 Gute Reaktion unter Stress!" };
                if (totalScore >= 10) return { grade: "C", text: "📚 Solide Grundlagen." };
                return { grade: "D", text: "⚠️ Incident Response Training empfohlen." };
            }
        }
    ],
    hard: [
        {
            id: "apt_attack",
            title: "🎭 Advanced Persistent Threat",
            difficulty: "Schwer",
            description: "Ein komplexer, mehrmonatiger Cyberangriff wird entdeckt",
            startingScenario: {
                title: "Mittwoch - 09:15 Uhr",
                text: "Die SIEM-Systeme zeigen verdächtige Aktivitäten. Unbekannte Datenübertragungen nach China, modifizierte Systemdateien, und Accounts mit erhöhten Rechten, die niemand erstellt hat.",
                image: "🕵️",
                setting: "Security Operations Center. Mehrere Monitore zeigen rote Alarme. Das Forensik-Team ist bereits alarmiert."
            },
            questPaths: {
                start: {
                    situation: "Komplexe Bedrohung entdeckt - strategisches Vorgehen?",
                    choices: [
                        {
                            text: "Sofortige Vollanalyse aller kompromittierten Systeme",
                            consequence: "forensic_analysis",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Externe Spezialisten hinzuziehen",
                            consequence: "expert_consultation",
                            risk: "low",
                            points: 30
                        },
                        {
                            text: "Alle Systeme sofort herunterfahren",
                            consequence: "emergency_shutdown",
                            risk: "high",
                            points: 10
                        }
                    ]
                }
            },
            finalScore: function(totalScore) {
                if (totalScore >= 25) return { grade: "A", text: "🏆 Elite Cyber Security Expert!" };
                if (totalScore >= 20) return { grade: "B", text: "👍 Professionelle APT-Abwehr!" };
                if (totalScore >= 15) return { grade: "C", text: "📚 Gute Grundlagen für komplexe Threats." };
                return { grade: "D", text: "⚠️ Advanced Threat Training erforderlich." };
            }
        }
    ]
};

// Quest-Engine für interaktive Abenteuer
class QuestEngine {
    constructor() {
        this.currentQuest = null;
        this.currentPath = 'start';
        this.score = 0;
        this.decisions = [];
        this.startTime = null;
        this.riskLevel = 'low';
    }

    startQuest(difficulty, questId) {
        this.currentQuest = interactiveQuests[difficulty].find(q => q.id === questId);
        this.currentPath = 'start';
        this.score = 0;
        this.decisions = [];
        this.startTime = new Date();
        this.riskLevel = 'low';
        this.renderQuest();
    }

    renderQuest() {
        if (!this.currentQuest) return;

        const questContainer = document.getElementById('quest-content') || document.getElementById('case-content');
        const currentStep = this.currentQuest.questPaths[this.currentPath];

        questContainer.innerHTML = `
            <div class="quest-header">
                <h2>${this.currentQuest.title}</h2>
                <div class="quest-info">
                    <span class="difficulty ${this.currentQuest.difficulty.toLowerCase()}">${this.currentQuest.difficulty}</span>
                    <span class="score">Score: ${this.score}</span>
                    <span class="risk risk-${this.riskLevel}">Risk: ${this.riskLevel.toUpperCase()}</span>
                </div>
            </div>

            <div class="scenario-box">
                <div class="scenario-title">${this.currentQuest.startingScenario.title}</div>
                <div class="scenario-text">${this.currentQuest.startingScenario.text}</div>
                <div class="scenario-image">${this.currentQuest.startingScenario.image}</div>
            </div>

            <div class="quest-step">
                <h3>${currentStep.situation}</h3>
                <div class="choices">
                    ${currentStep.choices.map((choice, index) => `
                        <button class="choice-btn risk-${choice.risk}" onclick="questEngine.makeChoice(${index})">
                            ${choice.text}
                            <span class="choice-info">
                                <span class="points">+${choice.points} Punkte</span>
                                <span class="risk">Risk: ${choice.risk}</span>
                            </span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    makeChoice(choiceIndex) {
        const currentStep = this.currentQuest.questPaths[this.currentPath];
        const choice = currentStep.choices[choiceIndex];
        
        this.score += choice.points;
        this.updateRiskLevel(choice.risk);
        
        this.decisions.push({
            step: this.currentPath,
            choice: choice.text,
            points: choice.points,
            risk: choice.risk,
            timestamp: new Date()
        });

        // Show result and conclude
        this.showQuestResult();
    }

    updateRiskLevel(newRisk) {
        const riskLevels = { 'low': 1, 'medium': 2, 'high': 3 };
        const current = riskLevels[this.riskLevel] || 1;
        const incoming = riskLevels[newRisk] || 1;
        
        if (incoming > current) {
            this.riskLevel = newRisk;
        }
    }

    showQuestResult() {
        const duration = Math.round((new Date() - this.startTime) / 1000);
        const finalGrade = this.currentQuest.finalScore(this.score);
        
        const questContainer = document.getElementById('quest-content') || document.getElementById('case-content');
        
        questContainer.innerHTML = `
            <div class="quest-conclusion">
                <h2>🎯 Quest abgeschlossen!</h2>
                
                <div class="final-results">
                    <div class="grade-display grade-${finalGrade.grade.toLowerCase()}">
                        <div class="grade-letter">${finalGrade.grade}</div>
                        <div class="grade-text">${finalGrade.text}</div>
                    </div>
                    
                    <div class="stats-grid">
                        <div class="stat">
                            <span class="stat-label">Punkte</span>
                            <span class="stat-value">${this.score}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Dauer</span>
                            <span class="stat-value">${duration}s</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Risiko</span>
                            <span class="stat-value risk-${this.riskLevel}">${this.riskLevel.toUpperCase()}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Entscheidungen</span>
                            <span class="stat-value">${this.decisions.length}</span>
                        </div>
                    </div>

                    <div class="decision-summary">
                        <h3>📋 Ihre Entscheidungen:</h3>
                        ${this.decisions.map(decision => `
                            <div class="decision-item">
                                <span class="decision-text">${decision.choice}</span>
                                <span class="decision-points">+${decision.points} Punkte</span>
                            </div>
                        `).join('')}
                    </div>

                    <div class="quest-actions">
                        <button onclick="location.reload()" class="btn-primary">
                            🔄 Neues Quest starten
                        </button>
                        <button onclick="window.history.back()" class="btn-secondary">
                            ← Zurück zur Auswahl
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    generateRiskIcon(risk) {
        const icons = {
            'low': '🟢',
            'medium': '🟡', 
            'high': '🔴'
        };
        return icons[risk] || '⚪';
    }

    generateRiskText(risk) {
        const texts = {
            'low': 'Sicher',
            'medium': 'Bedacht',
            'high': 'Riskant'
        };
        return texts[risk] || 'Unbekannt';
    }

    generateOutcomeIcon(outcome) {
        const outcomes = {
            'success': '🏆 Hervorragend gelöst!',
            'good': '👍 Gute Entscheidung!',
            'okay': '📚 Solide Lösung.',
            'risky': '⚠️ Das war riskant...',
            'disaster': '💥 Das war eine teure Lektion...'
        };
        return outcomes[outcome] || '🤔 Interessanter Ausgang...';
    }
}

// Interactive Case Engine
class InteractiveCaseEngine {
    constructor() {
        this.currentCase = null;
        this.currentStep = null;
        this.score = 0;
        this.decisions = [];
        this.startTime = null;
    }

    startCase(difficulty, caseId) {
        this.currentCase = interactiveQuests[difficulty].find(c => c.id === caseId);
        if (this.currentCase && this.currentCase.questPaths) {
            this.currentStep = this.currentCase.questPaths.start;
        }
        this.score = 0;
        this.decisions = [];
        this.startTime = new Date();
        this.renderCase();
    }

    makeDecision(optionIndex) {
        const option = this.currentStep.choices[optionIndex];
        this.score += option.points;
        
        this.decisions.push({
            step: this.currentStep.situation,
            choice: option.text,
            score: option.points,
            feedback: option.feedback,
            timestamp: new Date()
        });

        // Show feedback and conclude
        this.showConclusion();
    }

    renderCase() {
        if (!this.currentCase) return;

        const caseContainer = document.getElementById('case-content');
        if (!caseContainer) return;

        caseContainer.innerHTML = `
            <div class="case-header">
                <h2>${this.currentCase.title}</h2>
                <div class="case-info">
                    <span class="difficulty ${this.currentCase.difficulty.toLowerCase()}">${this.currentCase.difficulty}</span>
                    <span class="score">Score: ${this.score}</span>
                </div>
            </div>

            <div class="scenario-section">
                <h3>${this.currentCase.startingScenario.title}</h3>
                <p>${this.currentCase.startingScenario.text}</p>
                <div class="scenario-image">${this.currentCase.startingScenario.image}</div>
            </div>

            <div class="decision-section">
                <h3>${this.currentStep.situation}</h3>
                <div class="options">
                    ${this.currentStep.choices.map((choice, index) => `
                        <button class="option-btn" onclick="caseEngine.makeDecision(${index})">
                            ${choice.text}
                            <span class="points">+${choice.points} Punkte</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    showFeedback(message, callback) {
        const overlay = document.createElement('div');
        overlay.className = 'feedback-overlay';
        overlay.innerHTML = `
            <div class="feedback-modal">
                <div class="feedback-message">${message}</div>
                <button onclick="this.parentElement.parentElement.remove(); (${callback})()">
                    Weiter →
                </button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    showConclusion() {
        const duration = Math.round((new Date() - this.startTime) / 1000 / 60);
        const finalGrade = this.currentCase.finalScore(this.score);
        
        document.getElementById('case-content').innerHTML = `
            <div class="case-conclusion">
                <h2>🎯 Fallstudie abgeschlossen</h2>
                
                <div class="results">
                    <div class="final-score">
                        <div class="grade grade-${finalGrade.grade.toLowerCase()}">${finalGrade.grade}</div>
                        <div class="grade-text">${finalGrade.text}</div>
                    </div>
                    
                    <div class="summary-stats">
                        <div class="stat">
                            <label>Gesamtpunkte:</label>
                            <span>${this.score}</span>
                        </div>
                        <div class="stat">
                            <label>Bearbeitungszeit:</label>
                            <span>${duration} Min</span>
                        </div>
                        <div class="stat">
                            <label>Entscheidungen:</label>
                            <span>${this.decisions.length}</span>
                        </div>
                    </div>

                    <div class="restart-section">
                        <button onclick="location.reload()" class="btn-restart">
                            🔄 Neue Fallstudie starten
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global instances
const questEngine = new QuestEngine();
const caseEngine = new InteractiveCaseEngine();
