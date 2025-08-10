// Quest-Engine für echte interaktive Cybersecurity-Abenteuer
// Jede Entscheidung verändert dramatisch den Verlauf

// Zunächst importieren wir echte Cybersecurity-Vorfälle
let allQuests = {};

// Nach dem Laden der echten Quests, kombinieren wir sie
function combineQuests() {
    if (typeof realCyberQuests !== 'undefined') {
        allQuests = {
            easy: [...interactiveQuests.easy, ...realCyberQuests.easy],
            medium: [...(interactiveQuests.medium || []), ...realCyberQuests.medium],
            hard: [...(interactiveQuests.hard || []), ...realCyberQuests.hard]
        };
        console.log('✅ Echte Cybersecurity-Quests integriert!');
        console.log(`📊 Gesamt: ${allQuests.easy.length + allQuests.medium.length + allQuests.hard.length} Quests verfügbar`);
    } else {
        allQuests = interactiveQuests;
    }
}

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
                            text: "USB-Stick sofort mitnehmen und am Computer anschließen",
                            consequence: "usb_plugged",
                            risk: "extreme",
                            points: -15
                        },
                        {
                            text: "USB-Stick liegen lassen und IT-Security informieren",
                            consequence: "security_called",
                            risk: "none", 
                            points: 20
                        },
                        {
                            text: "USB-Stick mitnehmen, aber erstmal sicher analysieren lassen",
                            consequence: "careful_analysis",
                            risk: "low",
                            points: 15
                        }
                    ]
                },
                
                usb_plugged: {
                    situation: "💥 KATASTROPHE! Sie haben den USB-Stick angeschlossen und sofort öffnet sich ein Fenster: 'Ransomware wird installiert... 3... 2... 1...' Ihr Bildschirm wird schwarz, dann erscheint eine rote Nachricht: 'Alle Ihre Dateien wurden verschlüsselt! Zahlen Sie 50 Bitcoin!'",
                    isConsequence: true,
                    immediateEffects: [
                        "💻 Ihr Computer ist vollständig kompromittiert",
                        "🔥 Malware breitet sich rasant im Netzwerk aus", 
                        "🚨 IT-Security Alarm wird ausgelöst",
                        "📞 Der CEO ruft Sie PERSÖNLICH an...",
                        "💰 Geschätzter Schaden: 500.000€"
                    ],
                    choices: [
                        {
                            text: "Computer sofort vom Netzwerk trennen",
                            consequence: "damage_control",
                            risk: "high",
                            points: 8
                        },
                        {
                            text: "IT-Helpdesk anrufen und alles gestehen",
                            consequence: "confession",
                            risk: "medium", 
                            points: 12
                        }
                    ]
                },

                security_called: {
                    situation: "👨‍💼 Sie rufen das IT-Security Team an. Hans Schmidt antwortet begeistert: 'HERVORRAGEND! Das ist bereits der 4. USB-Stick diese Woche - wir vermuten einen koordinierten Angriff auf unser Unternehmen. Sie haben möglicherweise einen APT-Angriff verhindert!'",
                    isConsequence: true,
                    immediateEffects: [
                        "🏆 IT-Security ist begeistert von Ihrer Vorsicht",
                        "🔬 Der USB-Stick wird sofort forensisch analysiert",
                        "⭐ Sie werden als 'Security Champion' ausgezeichnet",
                        "📢 Ihre Kollegen werden vor der Bedrohung gewarnt",
                        "🎓 Sie bekommen ein kostenloses Advanced Security Training"
                    ],
                    choices: [
                        {
                            text: "Mehr über APT-Angriffe lernen wollen",
                            consequence: "security_expert",
                            risk: "none",
                            points: 15
                        },
                        {
                            text: "Bei der forensischen Analyse helfen",
                            consequence: "forensic_hero",
                            risk: "none",
                            points: 20
                        }
                    ]
                },

                careful_analysis: {
                    situation: "🔬 Sie gehen zu Ihrem IT-Kollegen Max: 'Kannst du das mal in der Sandbox testen?' Max startet eine isolierte virtuelle Maschine und lädt den USB-Stick. Sofort schlagen alle Alarme an: 'WARNUNG: Hochentwickelte Malware erkannt!'",
                    isConsequence: true,
                    immediateEffects: [
                        "✅ USB-Stick wird sicher in isolierter Umgebung analysiert",
                        "🦠 Max entdeckt eine neue, unbekannte Malware-Variante", 
                        "🏅 Ihre vorsichtige Herangehensweise wird gelobt",
                        "📊 IT-Security kann die Bedrohung analysieren"
                    ],
                    choices: [
                        {
                            text: "Details über die Malware erfahren",
                            consequence: "malware_expert", 
                            risk: "none",
                            points: 10
                        },
                        {
                            text: "Sofort alle Kollegen warnen",
                            consequence: "company_hero",
                            risk: "none",
                            points: 18
                        }
                    ]
                },

                damage_control: {
                    situation: "💻 Sie reißen das Netzwerkkabel raus, aber es ist bereits zu spät. Das IT-Security Team stürmt herein: 'Die Ransomware hat sich auf 47 Computer ausgebreitet! Das gesamte Produktionsnetz ist down!' Die Geschäftsführung ist in Panik.",
                    isConsequence: true,
                    immediateEffects: [
                        "🔥 47 Computer sind kompromittiert",
                        "🏭 Produktionsstopp - Verlust: 50.000€/Stunde",
                        "📰 Lokale Presse berichtet über den Cyberangriff",
                        "👔 Sie müssen sich vor dem Vorstand verantworten"
                    ],
                    choices: [
                        {
                            text: "Vollständig kooperieren und alle Details preisgeben",
                            consequence: "full_cooperation",
                            risk: "medium",
                            points: 5
                        }
                    ]
                },

                security_expert: {
                    situation: "🎓 Hans erklärt: 'APT steht für Advanced Persistent Threat - das sind professionelle Hackergruppen, oft staatlich gesponsert. Ihr Fund hilft uns, ihre Taktiken zu verstehen!' Sie werden zum internen Security-Experten ausgebildet und bekommen eine Gehaltserhöhung!",
                    isConclusion: true,
                    finalOutcome: "hero",
                    learnings: [
                        "🎯 APTs nutzen Social Engineering und USB-Drops",
                        "🔍 Wachsamkeit kann Millionenschäden verhindern",
                        "🤝 Zusammenarbeit mit IT-Security rettet Unternehmen",
                        "📈 Security Awareness wird finanziell belohnt"
                    ]
                },

                forensic_hero: {
                    situation: "🕵️ Bei der Forensik-Analyse entdecken Sie zusammen mit dem Team: Der USB-Stick enthält eine Zero-Day-Exploit! Ihre Entdeckung wird an das BSI gemeldet und hilft, andere Unternehmen zu schützen. Sie werden zum Chief Security Officer befördert!",
                    isConclusion: true,
                    finalOutcome: "legend",
                    learnings: [
                        "🔬 Forensische Analyse deckt neue Bedrohungen auf",
                        "🌍 Ihr Handeln schützt andere Unternehmen",
                        "🏆 Cybersecurity-Helden werden befördert",
                        "🔐 Zero-Day-Exploits sind extrem wertvoll für Angreifer"
                    ]
                },

                full_cooperation: {
                    situation: "📋 Durch Ihre ehrliche Aufklärung kann das Incident Response Team den Schaden begrenzen. Nach 72 Stunden ist das Netzwerk wieder sauber. Sie müssen ein intensives 6-monatiges Security Training absolvieren, aber behalten Ihren Job. Die Versicherung übernimmt 80% der Kosten.",
                    isConclusion: true,
                    finalOutcome: "learning",
                    learnings: [
                        "💡 Ehrlichkeit nach Fehlern minimiert Schäden",
                        "⏰ Schnelle Reaktion ist bei Incidents kritisch",
                        "💰 Cyberangriffe können Millionen kosten",
                        "🎓 Aus Fehlern entstehen die besten Sicherheitsexperten"
                    ]
                }
            }
        }
    ]
};

// Quest-Engine Klasse
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
        // Sicherstellen, dass alle Quests geladen sind
        combineQuests();
        
        this.currentQuest = allQuests[difficulty].find(q => q.id === questId);
        this.currentPath = 'start';
        this.score = 0;
        this.decisions = [];
        this.startTime = new Date();
        this.riskLevel = 'low';
        this.renderQuestStart();
    }

    renderQuestStart() {
        const content = document.getElementById('case-content');
        const quest = this.currentQuest;
        
        content.innerHTML = `
            <div class="quest-container">
                <div class="quest-header">
                    <h1>${quest.title}</h1>
                    <div class="quest-meta">
                        <span class="difficulty ${quest.difficulty.toLowerCase()}">${quest.difficulty}</span>
                        <span class="score">Score: ${this.score}</span>
                    </div>
                </div>

                <div class="scenario-intro">
                    <div class="scenario-image">${quest.startingScenario.image}</div>
                    <h2>${quest.startingScenario.title}</h2>
                    <div class="scenario-text">${quest.startingScenario.text}</div>
                    <div class="setting-context">
                        <strong>🎬 Szenario:</strong> ${quest.startingScenario.setting}
                    </div>
                </div>

                <div class="quest-actions">
                    <button onclick="questEngine.beginQuest()" class="btn btn-primary btn-large">
                        🎮 Ihr Abenteuer beginnt jetzt!
                    </button>
                    <button onclick="showCaseSelection()" class="btn btn-secondary">
                        🔙 Andere Quest wählen
                    </button>
                </div>
            </div>
        `;
    }

    beginQuest() {
        this.renderQuestStep();
    }

    renderQuestStep() {
        const currentStep = this.currentQuest.questPaths[this.currentPath];
        
        if (currentStep.isConclusion) {
            this.renderConclusion(currentStep);
            return;
        }

        const content = document.getElementById('case-content');
        
        content.innerHTML = `
            <div class="quest-step">
                <div class="step-header">
                    <h2>${this.currentQuest.title}</h2>
                    <div class="step-info">
                        <span class="score">💎 Score: ${this.score}</span>
                        <span class="risk risk-${this.riskLevel}">⚠️ Risiko: ${this.getRiskText()}</span>
                    </div>
                </div>

                ${currentStep.isConsequence ? `
                    <div class="consequence-alert">
                        <h3>⚡ KONSEQUENZ IHRER ENTSCHEIDUNG:</h3>
                        <div class="consequence-text">${currentStep.situation}</div>
                        
                        ${currentStep.immediateEffects ? `
                            <div class="immediate-effects">
                                <h4>🔥 Sofortige Auswirkungen:</h4>
                                <ul>
                                    ${currentStep.immediateEffects.map(effect => `<li>${effect}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="situation-description">
                        <h3>🤔 Aktuelle Situation:</h3>
                        <p>${currentStep.situation}</p>
                    </div>
                `}

                <div class="choices-container">
                    <h3>⚡ Was tun Sie JETZT?</h3>
                    <div class="choices">
                        ${currentStep.choices.map((choice, index) => `
                            <div class="choice-option risk-${choice.risk}" onclick="questEngine.makeChoice(${index})">
                                <div class="choice-text">${choice.text}</div>
                                <div class="choice-footer">
                                    <span class="choice-risk">${this.getRiskIcon(choice.risk)} ${choice.risk} Risiko</span>
                                    <span class="potential-points">${choice.points >= 0 ? '+' : ''}${choice.points} Punkte</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${this.decisions.length > 0 ? `
                    <div class="decision-trail">
                        <h4>🛤️ Ihr bisheriger Pfad:</h4>
                        ${this.decisions.map((decision, index) => `
                            <div class="trail-item">
                                <span class="step-num">${index + 1}.</span>
                                <span class="decision-text">${decision.text}</span>
                                <span class="points ${decision.points >= 0 ? 'positive' : 'negative'}">
                                    ${decision.points >= 0 ? '+' : ''}${decision.points}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    makeChoice(choiceIndex) {
        const currentStep = this.currentQuest.questPaths[this.currentPath];
        const choice = currentStep.choices[choiceIndex];
        
        // Entscheidung speichern
        this.decisions.push({
            text: choice.text,
            points: choice.points,
            risk: choice.risk,
            consequence: choice.consequence
        });

        // Score und Risiko aktualisieren
        this.score += choice.points;
        this.riskLevel = choice.risk;

        // Dramatic feedback zeigen
        this.showChoiceFeedback(choice, () => {
            this.currentPath = choice.consequence;
            this.renderQuestStep();
        });
    }

    showChoiceFeedback(choice, callback) {
        const overlay = document.createElement('div');
        overlay.className = 'feedback-overlay';
        
        const riskColor = {
            'none': '#27ae60',
            'low': '#f39c12', 
            'medium': '#e67e22',
            'high': '#e74c3c',
            'extreme': '#8e44ad'
        };

        overlay.innerHTML = `
            <div class="choice-feedback">
                <div class="feedback-header" style="background: ${riskColor[choice.risk]}">
                    <h3>⚡ IHRE ENTSCHEIDUNG</h3>
                </div>
                <div class="feedback-content">
                    <div class="choice-recap">"${choice.text}"</div>
                    <div class="impact-preview">
                        <div class="points-awarded">
                            <span class="points ${choice.points >= 0 ? 'positive' : 'negative'}">
                                ${choice.points >= 0 ? '+' : ''}${choice.points} Punkte
                            </span>
                        </div>
                        <div class="risk-level">
                            Risiko: <span class="risk-${choice.risk}">${this.getRiskIcon(choice.risk)} ${choice.risk}</span>
                        </div>
                    </div>
                    <div class="consequence-hint">
                        ${choice.risk === 'extreme' ? '💀 Das könnte sehr schlimm enden...' : 
                          choice.risk === 'high' ? '🔥 Das ist riskant!' :
                          choice.risk === 'medium' ? '⚠️ Vorsicht ist geboten' :
                          choice.risk === 'low' ? '✅ Vernünftige Wahl' :
                          '🎯 Perfekt!'}
                    </div>
                </div>
                <button onclick="this.parentElement.remove(); (${callback})()" class="btn btn-primary">
                    🎬 Geschichte fortsetzen →
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }

    renderConclusion(finalStep) {
        const duration = Math.round((new Date() - this.startTime) / 1000 / 60);
        
        const content = document.getElementById('case-content');
        content.innerHTML = `
            <div class="quest-conclusion">
                <div class="conclusion-header">
                    <h1>🎭 DAS ENDE IHRER GESCHICHTE</h1>
                    <div class="outcome outcome-${finalStep.finalOutcome}">
                        ${this.getOutcomeText(finalStep.finalOutcome)}
                    </div>
                </div>

                <div class="final-story">
                    <h3>📖 Ihr Schicksal:</h3>
                    <div class="ending-text">${finalStep.situation}</div>
                </div>

                <div class="quest-results">
                    <div class="score-summary">
                        <div class="final-score">${this.score}</div>
                        <div class="score-label">Gesamtpunkte</div>
                        <div class="time-taken">⏱️ ${duration} Min.</div>
                        <div class="grade">${this.getGrade()}</div>
                    </div>

                    <div class="learnings-gained">
                        <h3>🧠 Was Sie gelernt haben:</h3>
                        <ul>
                            ${finalStep.learnings.map(learning => `<li>${learning}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="decision-path">
                        <h3>🗺️ Ihr kompletter Entscheidungsweg:</h3>
                        ${this.decisions.map((decision, index) => `
                            <div class="path-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-details">
                                    <div class="step-text">${decision.text}</div>
                                    <div class="step-meta">
                                        <span class="risk-badge risk-${decision.risk}">${this.getRiskIcon(decision.risk)} ${decision.risk}</span>
                                        <span class="points-badge ${decision.points >= 0 ? 'positive' : 'negative'}">
                                            ${decision.points >= 0 ? '+' : ''}${decision.points}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="conclusion-actions">
                    <button onclick="questEngine.startQuest('${this.currentQuest.difficulty.toLowerCase()}', '${this.currentQuest.id}')" class="btn btn-secondary">
                        🔄 Andere Entscheidungen treffen
                    </button>
                    <button onclick="showCaseSelection()" class="btn btn-primary">
                        🎮 Neue Quest wählen
                    </button>
                    <button onclick="showAnalyticsDashboard()" class="btn btn-secondary">
                        📊 Analytics Dashboard
                    </button>
                </div>
            </div>
        `;
    }

    getRiskIcon(risk) {
        const icons = {
            'none': '✅',
            'low': '🟡',
            'medium': '🟠', 
            'high': '🔴',
            'extreme': '💀'
        };
        return icons[risk] || '❓';
    }

    getRiskText() {
        const texts = {
            'none': 'Kein Risiko',
            'low': 'Niedrig',
            'medium': 'Mittel',
            'high': 'Hoch', 
            'extreme': 'EXTREM'
        };
        return texts[this.riskLevel] || 'Unbekannt';
    }

    getOutcomeText(outcome) {
        const outcomes = {
            'hero': '🦸‍♂️ SIE SIND EIN CYBERSECURITY-HELD!',
            'legend': '👑 SIE SIND EINE LEGENDE!',
            'learning': '📚 Eine teure, aber wertvolle Lektion',
            'disaster': '💥 Das war ein Desaster...'
        };
        return outcomes[outcome] || '🤔 Ein interessanter Ausgang...';
    }

    getGrade() {
        if (this.score >= 30) return '🏆 A+';
        if (this.score >= 20) return '🥇 A';
        if (this.score >= 10) return '🥈 B';
        if (this.score >= 0) return '🥉 C';
        return '💀 F';
    }
}

// Global Quest Engine
const questEngine = new QuestEngine();
