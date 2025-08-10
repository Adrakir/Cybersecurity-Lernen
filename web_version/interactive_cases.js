// Echte interaktive Quest-Fallstudien
// Jede Entscheidung verändert den Spielverlauf dramatisch

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
                            risk: "high",
                            points: -10
                        },
                        {
                            text: "USB-Stick liegen lassen und IT-Security informieren",
                            consequence: "security_called",
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
                },
                
                usb_plugged: {
                    situation: "💥 Sie haben den USB-Stick angeschlossen! Sofort öffnet sich ein Fenster: 'Ransomware wird installiert... 3... 2... 1...' Ihr Bildschirm wird schwarz, dann erscheint: 'Alle Ihre Dateien wurden verschlüsselt!'",
                    isConsequence: true,
                    immediateEffects: [
                        "Ihr Computer ist kompromittiert",
                        "Malware breitet sich im Netzwerk aus", 
                        "IT-Security Alarm wird ausgelöst",
                        "Der CEO ruft Sie persönlich an..."
                    ],
                    choices: [
                        {
                            text: "Computer sofort vom Netzwerk trennen",
                            consequence: "damage_control",
                            risk: "high",
                            points: 5
                        },
                        {
                            text: "Versuchen die Ransomware zu stoppen",
                            consequence: "panic_mode",
                            risk: "extreme",
                            points: -5
                        },
                        {
                            text: "IT-Helpdesk anrufen und alles gestehen",
                            consequence: "confession",
                            risk: "high", 
                            points: 8
                        }
                    ]
                },

                security_called: {
                    situation: "👨‍💼 Sie rufen das IT-Security Team an. Hans Schmidt antwortet: 'Gut gemacht! Das ist bereits der 3. USB-Stick diese Woche. Wir vermuten einen gezielten Angriff.' Er kommt sofort mit einem Forensik-Kit.",
                    isConsequence: true,
                    immediateEffects: [
                        "IT-Security ist sehr zufrieden mit Ihnen",
                        "Der USB-Stick wird sicher analysiert",
                        "Sie werden für Ihre Vorsicht gelobt",
                        "Andere Mitarbeiter werden gewarnt"
                    ],
                    choices: [
                        {
                            text: "Fragen, wie man solche Angriffe erkennt",
                            consequence: "security_training",
                            risk: "none",
                            points: 10
                        },
                        {
                            text: "Anbieten, bei der Untersuchung zu helfen",
                            consequence: "investigation_help",
                            risk: "low",
                            points: 12
                        },
                        {
                            text: "Einfach zur Arbeit gehen, ist ja erledigt",
                            consequence: "work_continues",
                            risk: "none",
                            points: 5
                        }
                    ]
                },

                careful_analysis: {
                    situation: "🔬 Sie nehmen den USB-Stick mit ins Büro und gehen zum IT-Kollegen Max: 'Kannst du das mal in der Sandbox analysieren?' Max startet eine isolierte virtuelle Maschine...",
                    isConsequence: true,
                    immediateEffects: [
                        "USB-Stick wird sicher in Sandbox getestet",
                        "Max findet tatsächlich Malware darauf",
                        "Sie haben richtig gehandelt",
                        "IT-Security wird informiert"
                    ],
                    choices: [
                        {
                            text: "Details über die Malware erfahren wollen",
                            consequence: "malware_analysis",
                            risk: "none",
                            points: 8
                        },
                        {
                            text: "Sofort alle Kollegen warnen",
                            consequence: "warning_broadcast",
                            risk: "low",
                            points: 12
                        },
                        {
                            text: "Fragen, wie man Forensik-Tools benutzt",
                            consequence: "forensic_learning",
                            risk: "none",
                            points: 10
                        }
                    ]
                },

                damage_control: {
                    situation: "💻 Sie trennen den Computer vom Netzwerk, aber es ist zu spät. Das IT-Security Team stürmt herein: 'Der Angriff hat sich bereits auf 12 Computer ausgebreitet!' Die Geschäftsführung ist alarmiert.",
                    isConsequence: true,
                    immediateEffects: [
                        "Netzwerk ist teilweise kompromittiert",
                        "Incident Response Team wird aktiviert",
                        "Sie müssen sich verantworten",
                        "Große Kosten für die Firma"
                    ],
                    choices: [
                        {
                            text: "Vollständig kooperieren und alle Details preisgeben",
                            consequence: "full_cooperation",
                            risk: "medium",
                            points: 8
                        },
                        {
                            text: "Anbieten, bei der Schadensbegrenzung zu helfen",
                            consequence: "help_cleanup",
                            risk: "medium",
                            points: 10
                        }
                    ]
                },

                security_training: {
                    situation: "🎓 Hans erklärt Ihnen: 'Das nennt man USB-Drop-Attack. Hacker lassen absichtlich infizierte USB-Sticks rum, weil sie wissen, dass Menschen neugierig sind.' Er zeigt Ihnen echte Beispiele.",
                    isConclusion: true,
                    finalOutcome: "success",
                    score: 25,
                    learnings: [
                        "USB-Drop-Attacks sind eine reale Bedrohung",
                        "Immer IT-Security bei verdächtigen Funden informieren",
                        "Neugier kann teuer werden",
                        "Security Awareness ist der beste Schutz"
                    ]
                },

                investigation_help: {
                    situation: "🕵️ Sie helfen bei der Forensik. Der USB-Stick enthält tatsächlich eine neue Ransomware-Variante! Ihr Fund hilft, einen größeren Angriff zu verhindern. Die Geschäftsführung bedankt sich persönlich.",
                    isConclusion: true,
                    finalOutcome: "hero",
                    score: 35,
                    learnings: [
                        "Aufmerksamkeit kann Unternehmen retten",
                        "Zusammenarbeit mit IT-Security ist wichtig",
                        "Forensische Analyse deckt Angriffsmuster auf",
                        "Prävention ist besser als Reaktion"
                    ]
                },

                full_cooperation: {
                    situation: "📋 Durch Ihre ehrliche Zusammenarbeit kann das Incident Response Team den Schaden begrenzen. Sie müssen ein umfangreiches Security Training absolvieren, behalten aber Ihren Job.",
                    isConclusion: true,
                    finalOutcome: "learning",
                    score: 5,
                    learnings: [
                        "Ehrlichkeit nach Fehlern ist wichtig",
                        "Incident Response braucht alle Informationen",
                        "Ein Fehler kann teuer werden",
                        "Security Training ist Pflicht"
                    ]
                }
            }
        }
    ],

    medium: [
        {
            id: "social_engineering",
            title: "📞 Der falsche CEO-Anruf",
            difficulty: "Mittel", 
            description: "Ein Anrufer gibt sich als CEO aus und fordert eine Notfall-Überweisung",
            startingScenario: {
                title: "Freitag, 16:45 Uhr",
                text: "Das Telefon klingelt. Eine autoritative Stimme: 'Hier ist Herr Müller, Ihr CEO. Ich bin auf einer wichtigen Konferenz in Dubai und brauche sofort eine Überweisung von 50.000€ für einen kritischen Deal. Die Buchhaltung ist schon weg, Sie müssen das machen!'",
                image: "📱",
                setting: "Sie sind allein im Büro, alle anderen sind bereits im Wochenende. Der Anrufer klingt gestresst und autoritär."
            },
            questPaths: {
                start: {
                    situation: "Der Anrufer drängt auf sofortige Überweisung. Wie reagieren Sie?",
                    choices: [
                        {
                            text: "Sofort die Überweisung durchführen - der CEO wartet!",
                            consequence: "immediate_transfer",
                            risk: "extreme",
                            points: -20
                        },
                        {
                            text: "Nach der Handynummer des CEOs fragen zur Rückbestätigung",
                            consequence: "callback_request",
                            risk: "low",
                            points: 15
                        },
                        {
                            text: "Erklären, dass solche Überweisungen zwei Unterschriften brauchen",
                            consequence: "policy_reference",
                            risk: "low",
                            points: 12
                        },
                        {
                            text: "Misstrauisch werden und nach Details der Konferenz fragen",
                            consequence: "detailed_questions",
                            risk: "medium",
                            points: 18
                        }
                    ]
                }
                // Weitere Pfade würden hier folgen...
            }
        }
    ],

    hard: [
        {
            id: "insider_threat",
            title: "🕵️ Der verdächtige Kollege", 
            difficulty: "Schwer",
            description: "Ein Kollege verhält sich merkwürdig und Sie vermuten Datendiebstahl",
            startingScenario: {
                title: "Donnerstagabend, 19:30 Uhr",
                text: "Sie arbeiten länger und bemerken, dass Ihr Kollege Michael, der normalerweise pünktlich geht, noch da ist. Er kopiert Dateien auf einen externen USB-Stick und schaut nervös umher. Morgen ist sein letzter Arbeitstag - er wechselt zur Konkurrenz.",
                image: "👤",
                setting: "Nur Sie beide sind noch im Büro. Die Sicherheitskameras laufen, aber Michael hat Sie noch nicht bemerkt."
            }
        }
    ]
};
    easy: [
        {
            id: "phishing_email",
            title: "🎣 Verdächtige E-Mail",
            difficulty: "Einfach",
            description: "Sie erhalten eine E-Mail mit verdächtigem Anhang",
            scenario: {
                intro: "Es ist Montagmorgen, 9:15 Uhr. Sie kommen ins Büro und öffnen Ihren E-Mail-Client. In Ihrem Posteingang finden Sie eine E-Mail mit dem Betreff: 'URGENT: Rechnung überfällig - Sofortige Zahlung erforderlich'. Der Absender scheint Ihr Energieversorger zu sein.",
                details: [
                    "Die E-Mail enthält einen ZIP-Anhang namens 'Rechnung_Januar_2025.zip'",
                    "Der Absender ist 'noreply@energie-stadtwerke.com' (Ihr echter Versorger ist 'stadtwerke-energie.de')",
                    "Die E-Mail droht mit Stromabschaltung in 24 Stunden",
                    "Der Text enthält mehrere Rechtschreibfehler",
                    "Sie erwarten eigentlich keine Rechnung, da Sie per Lastschrift zahlen"
                ],
                image: "📧",
                currentStep: "initial"
            },
            steps: {
                initial: {
                    question: "Was ist Ihr erster Verdacht bei dieser E-Mail?",
                    options: [
                        {
                            text: "Das sieht nach Phishing aus - ich bin vorsichtig",
                            score: 10,
                            feedback: "✅ Richtig! Ihre Vorsicht ist berechtigt.",
                            next: "analysis"
                        },
                        {
                            text: "Könnte echt sein - ich sollte den Anhang öffnen",
                            score: -5,
                            feedback: "⚠️ Vorsicht! Das sind klassische Phishing-Anzeichen.",
                            next: "dangerous_path"
                        },
                        {
                            text: "Ich ignoriere die E-Mail einfach",
                            score: 5,
                            feedback: "🔶 Besser als öffnen, aber eine Analyse wäre sinnvoll.",
                            next: "analysis"
                        }
                    ]
                },
                analysis: {
                    question: "Sie analysieren die E-Mail genauer. Welche Phishing-Indikatoren erkennen Sie?",
                    options: [
                        {
                            text: "Falsche Domain, Rechtschreibfehler, unerwartete Rechnung",
                            score: 15,
                            feedback: "🎯 Perfekt! Sie haben alle wichtigen Indizien erkannt.",
                            next: "response"
                        },
                        {
                            text: "Nur die Rechtschreibfehler sind verdächtig",
                            score: 5,
                            feedback: "📚 Das ist ein Indiz, aber es gibt mehr zu entdecken.",
                            next: "response"
                        },
                        {
                            text: "Die Dringlichkeit macht mich stutzig",
                            score: 8,
                            feedback: "👍 Richtig! Urgency ist ein typisches Phishing-Merkmal.",
                            next: "response"
                        }
                    ]
                },
                response: {
                    question: "Wie reagieren Sie jetzt richtig?",
                    options: [
                        {
                            text: "IT-Security Team informieren und E-Mail weiterleiten",
                            score: 20,
                            feedback: "🏆 Excellent! Das ist die professionellste Reaktion.",
                            next: "conclusion"
                        },
                        {
                            text: "E-Mail löschen und Kollegen warnen",
                            score: 15,
                            feedback: "✅ Gut! Warnung der Kollegen ist wichtig.",
                            next: "conclusion"
                        },
                        {
                            text: "Beim echten Energieversorger nachfragen",
                            score: 12,
                            feedback: "👌 Sinnvoll, aber IT-Security sollte auch informiert werden.",
                            next: "conclusion"
                        }
                    ]
                },
                dangerous_path: {
                    question: "Sie haben den Anhang geöffnet und Ihr Antivirus schlägt Alarm! Was jetzt?",
                    options: [
                        {
                            text: "Computer sofort vom Netzwerk trennen",
                            score: 5,
                            feedback: "🚨 Richtig! Damage Control ist jetzt wichtig.",
                            next: "incident_response"
                        },
                        {
                            text: "Antivirus-Scan durchführen lassen",
                            score: 2,
                            feedback: "⚠️ Besser als nichts, aber Isolation wäre besser.",
                            next: "incident_response"
                        },
                        {
                            text: "Weiterarbeiten und hoffen",
                            score: -10,
                            feedback: "❌ Gefährlich! Sie riskieren eine Ausbreitung.",
                            next: "incident_response"
                        }
                    ]
                },
                incident_response: {
                    question: "Der Incident ist eingetreten. Welche Schritte sind jetzt wichtig?",
                    options: [
                        {
                            text: "IT-Team informieren, Computer isolieren, Logs sichern",
                            score: 10,
                            feedback: "✅ Richtige Incident Response Schritte!",
                            next: "conclusion"
                        },
                        {
                            text: "Passwörter ändern und Malware entfernen",
                            score: 5,
                            feedback: "📋 Wichtig, aber erst nach professioneller Analyse.",
                            next: "conclusion"
                        },
                        {
                            text: "Computer neu aufsetzen",
                            score: 3,
                            feedback: "🔄 Sicher, aber Forensik geht dabei verloren.",
                            next: "conclusion"
                        }
                    ]
                },
                conclusion: {
                    question: "Reflexion: Was haben Sie aus diesem Fall gelernt?",
                    isConclusion: true
                }
            },
            learningObjectives: [
                "Phishing-E-Mails erkennen",
                "Verdächtige Anhänge nicht öffnen", 
                "Incident Response Prozesse",
                "Kommunikation bei Sicherheitsvorfällen"
            ],
            finalScore: function(totalScore) {
                if (totalScore >= 40) return { grade: "A", text: "🏆 Exzellent! Sie sind ein Phishing-Profi!" };
                if (totalScore >= 25) return { grade: "B", text: "👍 Gut! Noch etwas Übung und Sie sind Experte." };
                if (totalScore >= 15) return { grade: "C", text: "📚 Solide Grundlagen, aber Verbesserung möglich." };
                return { grade: "D", text: "⚠️ Mehr Security Awareness Training empfohlen." };
            }
        }
    ],

    medium: [
        {
            id: "ransomware_attack",
            title: "🔒 Ransomware-Angriff",
            difficulty: "Mittel",
            description: "Ein Ransomware-Angriff legt Ihr Unternehmensnetzwerk lahm",
            scenario: {
                intro: "Dienstag, 14:30 Uhr. Plötzlich erscheinen auf allen Bildschirmen rote Warnmeldungen: 'Your files have been encrypted. Pay 50 Bitcoin to decrypt.' Das gesamte Netzwerk ist betroffen. Als IT-Security Verantwortlicher müssen Sie schnell handeln.",
                details: [
                    "Alle Fileserver sind verschlüsselt",
                    "E-Mail-System ist ausgefallen", 
                    "Produktionssysteme stehen still",
                    "Backup-System zeigt letzte Sicherung vor 3 Tagen",
                    "Geschäftsführung fragt nach sofortigen Lösungen",
                    "Kunden beschweren sich über Ausfälle"
                ],
                image: "🚨",
                currentStep: "initial"
            },
            steps: {
                initial: {
                    question: "Was ist Ihre allererste Maßnahme in den ersten 5 Minuten?",
                    options: [
                        {
                            text: "Alle Systeme vom Netzwerk trennen",
                            score: 15,
                            feedback: "🎯 Richtig! Eindämmung hat höchste Priorität.",
                            next: "assessment"
                        },
                        {
                            text: "Backup sofort wiederherstellen",
                            score: 5,
                            feedback: "⚠️ Zu früh! Erst Eindämmung, dann Recovery.",
                            next: "containment"
                        },
                        {
                            text: "Polizei und Versicherung anrufen",
                            score: 8,
                            feedback: "📞 Wichtig, aber erst nach Eindämmung.",
                            next: "assessment"
                        }
                    ]
                },
                assessment: {
                    question: "Sie haben die Systeme isoliert. Wie bewerten Sie jetzt das Ausmaß?",
                    options: [
                        {
                            text: "Forensische Analyse starten, betroffene Systeme dokumentieren",
                            score: 20,
                            feedback: "🔍 Professionell! Dokumentation ist entscheidend.",
                            next: "decision"
                        },
                        {
                            text: "Schnell prüfen welche Backups verfügbar sind",
                            score: 12,
                            feedback: "💾 Pragmatisch, aber Forensik sollte parallel laufen.",
                            next: "decision"
                        },
                        {
                            text: "Mitarbeiter über Situation informieren",
                            score: 10,
                            feedback: "📢 Kommunikation ist wichtig, aber zuerst Analyse.",
                            next: "decision"
                        }
                    ]
                }
            }
        }
    ],

    hard: [
        {
            id: "apt_attack",
            title: "🎭 Advanced Persistent Threat",
            difficulty: "Schwer",
            description: "Ein komplexer, mehrmonatiger Cyberangriff wird entdeckt",
            scenario: {
                intro: "Ihr SIEM-System zeigt anomale Aktivitäten. Nach detaillierter Analyse wird klar: Ihr Unternehmen ist seit Monaten Ziel eines Advanced Persistent Threat (APT). Die Angreifer haben bereits mehrere Systeme kompromittiert und Daten exfiltriert.",
                details: [
                    "Lateral Movement zwischen mehreren Systemen erkannt",
                    "Unbekannte Zertifikate im Active Directory",
                    "Verdächtige DNS-Anfragen an Command & Control Server",
                    "Exfiltration sensibler Kundendaten vermutet",
                    "Sleeping Agents in kritischen Systemen möglich",
                    "Angriff nutzt Zero-Day-Exploit"
                ],
                image: "🕵️",
                currentStep: "initial"
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
                        <strong>Situation:</strong> ${quest.startingScenario.setting}
                    </div>
                </div>

                <div class="quest-actions">
                    <button onclick="questEngine.beginQuest()" class="btn btn-primary btn-large">
                        🎮 Abenteuer beginnen
                    </button>
                    <button onclick="showCaseSelection()" class="btn btn-secondary">
                        🔙 Zurück zur Auswahl
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
                        <span class="score">Score: ${this.score}</span>
                        <span class="risk risk-${this.riskLevel}">Risiko: ${this.getRiskText()}</span>
                    </div>
                </div>

                ${currentStep.isConsequence ? `
                    <div class="consequence-alert">
                        <h3>⚡ Konsequenz Ihrer Entscheidung:</h3>
                        <div class="consequence-text">${currentStep.situation}</div>
                        
                        ${currentStep.immediateEffects ? `
                            <div class="immediate-effects">
                                <h4>Sofortige Auswirkungen:</h4>
                                <ul>
                                    ${currentStep.immediateEffects.map(effect => `<li>${effect}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="situation-description">
                        <p>${currentStep.situation}</p>
                    </div>
                `}

                <div class="choices-container">
                    <h3>Was tun Sie als Nächstes?</h3>
                    <div class="choices">
                        ${currentStep.choices.map((choice, index) => `
                            <div class="choice-option" onclick="questEngine.makeChoice(${index})">
                                <div class="choice-text">${choice.text}</div>
                                <div class="choice-risk risk-${choice.risk}">
                                    ${this.getRiskIcon(choice.risk)} ${choice.risk}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${this.decisions.length > 0 ? `
                    <div class="decision-trail">
                        <h4>🛤️ Ihr bisheriger Weg:</h4>
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

        // Feedback zeigen, dann weiter
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
                    <h3>Ihre Entscheidung</h3>
                </div>
                <div class="feedback-content">
                    <div class="choice-recap">"${choice.text}"</div>
                    <div class="points-awarded">
                        <span class="points ${choice.points >= 0 ? 'positive' : 'negative'}">
                            ${choice.points >= 0 ? '+' : ''}${choice.points} Punkte
                        </span>
                    </div>
                    <div class="risk-level">
                        Risiko: <span class="risk-${choice.risk}">${this.getRiskIcon(choice.risk)} ${choice.risk}</span>
                    </div>
                </div>
                <button onclick="this.parentElement.remove(); (${callback})()" class="btn btn-primary">
                    Weiter →
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Automatisch nach 3 Sekunden weiter (optional)
        setTimeout(() => {
            if (overlay.parentElement) {
                overlay.remove();
                callback();
            }
        }, 3000);
    }

    renderConclusion(finalStep) {
        const duration = Math.round((new Date() - this.startTime) / 1000 / 60);
        
        const content = document.getElementById('case-content');
        content.innerHTML = `
            <div class="quest-conclusion">
                <div class="conclusion-header">
                    <h1>🎯 Quest abgeschlossen!</h1>
                    <div class="outcome outcome-${finalStep.finalOutcome}">
                        ${this.getOutcomeText(finalStep.finalOutcome)}
                    </div>
                </div>

                <div class="final-story">
                    <h3>📖 Das Ende Ihrer Geschichte:</h3>
                    <div class="ending-text">${finalStep.situation}</div>
                </div>

                <div class="quest-results">
                    <div class="score-summary">
                        <div class="final-score">${this.score}</div>
                        <div class="score-label">Gesamtpunkte</div>
                        <div class="time-taken">${duration} Minuten</div>
                    </div>

                    <div class="learnings-gained">
                        <h3>🧠 Was Sie gelernt haben:</h3>
                        <ul>
                            ${finalStep.learnings.map(learning => `<li>${learning}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="decision-path">
                        <h3>🛤️ Ihr Entscheidungsweg:</h3>
                        ${this.decisions.map((decision, index) => `
                            <div class="path-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-details">
                                    <div class="step-text">${decision.text}</div>
                                    <div class="step-meta">
                                        <span class="risk-badge risk-${decision.risk}">${decision.risk}</span>
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
                        🔄 Nochmal spielen
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
            'extreme': 'Extrem'
        };
        return texts[this.riskLevel] || 'Unbekannt';
    }

    getOutcomeText(outcome) {
        const outcomes = {
            'success': '🎉 Perfekt gehandelt!',
            'hero': '🦸‍♂️ Sie sind ein Cybersecurity-Held!',
            'learning': '📚 Aus Fehlern wird man klug',
            'disaster': '💥 Das war eine teure Lektion...'
        };
        return outcomes[outcome] || '🤔 Interessanter Ausgang...';
    }
}

// Global Quest Engine
const questEngine = new QuestEngine();
    constructor() {
        this.currentCase = null;
        this.currentStep = null;
        this.score = 0;
        this.decisions = [];
        this.startTime = null;
    }

    startCase(difficulty, caseId) {
        this.currentCase = interactiveCaseStudies[difficulty].find(c => c.id === caseId);
        this.currentStep = this.currentCase.steps.initial;
        this.score = 0;
        this.decisions = [];
        this.startTime = new Date();
        this.renderCase();
    }

    makeDecision(optionIndex) {
        const option = this.currentStep.options[optionIndex];
        this.score += option.score;
        
        this.decisions.push({
            step: this.currentStep.question,
            choice: option.text,
            score: option.score,
            feedback: option.feedback,
            timestamp: new Date()
        });

        // Show feedback
        this.showFeedback(option.feedback, () => {
            if (option.next && this.currentCase.steps[option.next]) {
                this.currentStep = this.currentCase.steps[option.next];
                this.renderCase();
            } else {
                this.showConclusion();
            }
        });
    }

    renderCase() {
        const content = document.getElementById('case-content');
        
        if (this.currentStep.isConclusion) {
            this.showConclusion();
            return;
        }

        content.innerHTML = `
            <div class="case-scenario">
                <div class="scenario-header">
                    <h2>${this.currentCase.title}</h2>
                    <div class="case-meta">
                        <span class="difficulty ${this.currentCase.difficulty.toLowerCase()}">${this.currentCase.difficulty}</span>
                        <span class="score">Score: ${this.score}</span>
                    </div>
                </div>

                <div class="scenario-story">
                    <div class="story-icon">${this.currentCase.scenario.image}</div>
                    <p>${this.currentCase.scenario.intro}</p>
                    
                    <div class="details">
                        <h4>Aktuelle Situation:</h4>
                        <ul>
                            ${this.currentCase.scenario.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="decision-point">
                    <h3>${this.currentStep.question}</h3>
                    <div class="options">
                        ${this.currentStep.options.map((option, index) => `
                            <button class="option-btn" onclick="caseEngine.makeDecision(${index})">
                                ${option.text}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="progress">
                    <div class="decisions-made">
                        <h4>Bisherige Entscheidungen:</h4>
                        ${this.decisions.map(decision => `
                            <div class="decision-item">
                                <strong>${decision.choice}</strong>
                                <span class="score-indicator ${decision.score > 0 ? 'positive' : 'negative'}">
                                    ${decision.score > 0 ? '+' : ''}${decision.score}
                                </span>
                            </div>
                        `).join('')}
                    </div>
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
                        <div class="score-text">${finalGrade.text}</div>
                        <div class="score-details">
                            Gesamtpunkte: ${this.score} | Zeit: ${duration} Min.
                        </div>
                    </div>

                    <div class="learning-summary">
                        <h3>🎓 Lernziele erreicht:</h3>
                        <ul>
                            ${this.currentCase.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="decision-recap">
                        <h3>📋 Ihre Entscheidungen:</h3>
                        ${this.decisions.map((decision, index) => `
                            <div class="recap-item">
                                <div class="step-number">${index + 1}</div>
                                <div class="decision-details">
                                    <strong>${decision.choice}</strong>
                                    <div class="feedback">${decision.feedback}</div>
                                </div>
                                <div class="score-badge ${decision.score > 0 ? 'positive' : 'negative'}">
                                    ${decision.score > 0 ? '+' : ''}${decision.score}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="conclusion-actions">
                    <button onclick="showCaseSelection()" class="btn btn-primary">
                        🔙 Zur Fallauswahl
                    </button>
                    <button onclick="restartCase()" class="btn btn-secondary">
                        🔄 Nochmal versuchen
                    </button>
                    <button onclick="showAnalyticsDashboard()" class="btn btn-secondary">
                        📊 Analytics Dashboard
                    </button>
                </div>
            </div>
        `;
    }
}

// Global instance
const caseEngine = new InteractiveCaseEngine();
