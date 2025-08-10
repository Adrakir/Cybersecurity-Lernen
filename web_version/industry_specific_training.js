// Industry-Specific Cybersecurity Training Modules
class IndustrySpecificTraining {
    constructor() {
        this.industries = {};
        this.currentIndustry = null;
        this.userProfile = null;
        this.initializeIndustries();
    }

    initializeIndustries() {
        // Healthcare Industry Module
        this.industries.healthcare = {
            name: "Gesundheitswesen",
            icon: "🏥",
            description: "Cybersicherheit für Kliniken, Arztpraxen und Gesundheitsdienstleister",
            regulations: ["DSGVO", "Medizinprodukte-Durchführungsverordnung", "IT-Sicherheitsgesetz"],
            threatLandscape: {
                primary: ["Ransomware auf medizinische Geräte", "Diebstahl von Patientendaten", "Manipulation von Behandlungsdaten"],
                specific: ["Medical IoT Angriffe", "PACS-System Infiltration", "HIS/KIS Ransomware"]
            },
            scenarios: [
                {
                    id: "healthcare_001",
                    title: "Ransomware-Angriff auf Klinik-Netzwerk",
                    description: "Ein Krankenhaus wird von Ransomware befallen. Kritische Systeme sind betroffen.",
                    difficulty: "expert",
                    duration: 45,
                    situation: "Es ist 14:30 Uhr, die Notaufnahme meldet, dass ihre Computer nicht mehr funktionieren. Gleichzeitig fallen CT- und MRT-Geräte aus.",
                    objectives: [
                        "Sofortmaßnahmen zur Patientensicherheit",
                        "Incident Response koordinieren",
                        "Kritische Systeme isolieren",
                        "Kommunikation mit Behörden"
                    ],
                    decisions: [
                        {
                            situation: "Der Notaufnahme-Arzt fragt, ob er Patienten in andere Kliniken verlegen soll.",
                            options: [
                                { text: "Ja, sofort alle nicht-kritischen Patienten verlegen", points: 8, feedback: "Richtig - Patientensicherheit hat Priorität" },
                                { text: "Nein, erstmal abwarten", points: 2, feedback: "Falsch - Bei IT-Ausfall ist Verlegung oft notwendig" },
                                { text: "Nur kritische Fälle verlegen", points: 6, feedback: "Teilweise richtig, aber auch andere Patienten könnten gefährdet sein" }
                            ]
                        },
                        {
                            situation: "Die Ransomware verlangt 2 Bitcoin (~50.000€). Die Geschäftsführung will zahlen.",
                            options: [
                                { text: "Zahlung autorisieren für schnelle Wiederherstellung", points: 1, feedback: "Falsch - Zahlungen ermutigen weitere Angriffe" },
                                { text: "Nicht zahlen, Backup-Wiederherstellung priorisieren", points: 10, feedback: "Richtig - Backups sind die sichere Lösung" },
                                { text: "Verhandeln für niedrigere Summe", points: 3, feedback: "Falsch - Jede Zahlung ist problematisch" }
                            ]
                        }
                    ],
                    compliance: [
                        "DSGVO-Meldung innerhalb 72h",
                        "Information der Aufsichtsbehörde",
                        "Patientenbenachrichtigung bei Datenverlust"
                    ]
                },
                {
                    id: "healthcare_002", 
                    title: "Phishing-Angriff auf Praxissoftware",
                    description: "Eine Arztpraxis erhält gefälschte E-Mails von Software-Anbietern",
                    difficulty: "intermediate",
                    duration: 30,
                    situation: "Dr. Schmidt erhält eine E-Mail vom Praxissoftware-Anbieter mit der Bitte, seine Zugangsdaten zu aktualisieren.",
                    learning_points: [
                        "Erkennung von Phishing-E-Mails im Gesundheitswesen",
                        "Sichere Authentifizierung für medizinische Software",
                        "DSGVO-konforme Incident Response"
                    ]
                }
            ],
            compliance_framework: {
                "DSGVO": {
                    requirements: ["Art. 32 - Sicherheit der Verarbeitung", "Art. 33 - Meldung von Verletzungen", "Art. 34 - Benachrichtigung betroffener Personen"],
                    implementations: ["Verschlüsselung von Patientendaten", "Zugriffskontrollen", "Audit-Logs"]
                },
                "Medizinprodukte-VO": {
                    requirements: ["Cybersicherheit für Medizinprodukte", "Software-Validierung", "Post-Market Surveillance"],
                    implementations: ["Penetration Tests", "Vulnerability Management", "Update-Prozesse"]
                }
            },
            best_practices: [
                "Segmentierung von medizinischen Geräten",
                "Regelmäßige Security Awareness für medizinisches Personal",
                "Incident Response Pläne für Patientensicherheit",
                "Backup-Strategien für kritische Systeme"
            ]
        };

        // Banking & Finance Industry Module
        this.industries.finance = {
            name: "Finanzwesen",
            icon: "🏦",
            description: "Cybersicherheit für Banken, Versicherungen und Fintech-Unternehmen",
            regulations: ["BAIT", "DSGVO", "PCI DSS", "MaRisk"],
            threatLandscape: {
                primary: ["Online Banking Trojaner", "Card Skimming", "Insider Trading", "DDoS-Angriffe"],
                specific: ["SWIFT-Angriffe", "ATM-Malware", "Mobile Banking Trojaner", "Cryptocurrency Theft"]
            },
            scenarios: [
                {
                    id: "finance_001",
                    title: "Verdächtige SWIFT-Transaktionen",
                    description: "Ungewöhnliche internationale Überweisungen werden erkannt",
                    difficulty: "expert", 
                    duration: 60,
                    situation: "Das Fraud Detection System schlägt Alarm: Mehrere SWIFT-Nachrichten mit ungewöhnlichen Mustern wurden erkannt.",
                    objectives: [
                        "Transaktionen analysieren",
                        "Betroffene Konten sperren", 
                        "Behörden informieren",
                        "Schadensbegrenzung"
                    ]
                },
                {
                    id: "finance_002",
                    title: "Mobile Banking App Kompromittierung",
                    description: "Kunden melden unbekannte Transaktionen über die Mobile App",
                    difficulty: "intermediate",
                    duration: 40,
                    situation: "Mehrere Kunden berichten über nicht autorisierte Transaktionen in der Mobile Banking App."
                }
            ],
            compliance_framework: {
                "BAIT": {
                    requirements: ["AT 7.2 - Informationssicherheitsmanagement", "AT 3.2 - Notfallmanagement"],
                    implementations: ["ISMS nach ISO 27001", "Business Continuity Planning"]
                },
                "PCI DSS": {
                    requirements: ["Sichere Netzwerke", "Verschlüsselung von Kartendaten", "Zugriffskontrollen"],
                    implementations: ["Tokenisierung", "End-to-End Verschlüsselung", "Multi-Factor Authentication"]
                }
            }
        };

        // Manufacturing Industry Module
        this.industries.manufacturing = {
            name: "Produktion & Industrie 4.0",
            icon: "🏭",
            description: "Cybersicherheit für Produktionsanlagen und industrielle Systeme",
            regulations: ["IT-Sicherheitsgesetz", "NIS-Richtlinie", "IEC 62443"],
            threatLandscape: {
                primary: ["Industrial Espionage", "Production Sabotage", "Supply Chain Attacks"],
                specific: ["SCADA/HMI Angriffe", "Firmware-Manipulation", "Industrial IoT Malware"]
            },
            scenarios: [
                {
                    id: "manufacturing_001",
                    title: "Produktionslinie Störung durch Malware",
                    description: "Eine kritische Produktionslinie fällt durch Malware aus",
                    difficulty: "expert",
                    duration: 50,
                    situation: "Die Hauptproduktionslinie für Automobilteile stoppt unerwartet. HMI-Systeme zeigen Fehlermeldungen."
                }
            ]
        };

        // Government & Public Sector Module
        this.industries.government = {
            name: "Öffentliche Verwaltung",
            icon: "🏛️",
            description: "Cybersicherheit für Behörden und öffentliche Einrichtungen",
            regulations: ["IT-Sicherheitsgesetz", "BSI-Standards", "DSGVO"],
            threatLandscape: {
                primary: ["APT-Angriffe", "Data Breaches", "Website Defacements"],
                specific: ["E-Government Angriffe", "Wahlsystem-Manipulation", "Bürgerdaten-Diebstahl"]
            }
        };

        // Education Sector Module
        this.industries.education = {
            name: "Bildungswesen",
            icon: "🎓",
            description: "Cybersicherheit für Schulen, Universitäten und Bildungseinrichtungen",
            regulations: ["DSGVO", "Schulgesetze der Länder", "IT-Sicherheitsgesetz"],
            threatLandscape: {
                primary: ["Student Data Breaches", "Ransomware", "Online Learning Platform Attacks"],
                specific: ["LMS-Hacking", "Prüfungssystem-Manipulation", "Cyber-Mobbing"]
            }
        };

        // Energy & Utilities Module
        this.industries.energy = {
            name: "Energie & Versorgung",
            icon: "⚡",
            description: "Cybersicherheit für Energieversorger und kritische Infrastrukturen",
            regulations: ["IT-Sicherheitsgesetz", "NIS-Richtlinie", "EnWG"],
            threatLandscape: {
                primary: ["Power Grid Attacks", "Smart Grid Manipulation", "Industrial Espionage"],
                specific: ["SCADA Infiltration", "Smart Meter Hacking", "Renewable Energy Sabotage"]
            }
        };
    }

    setUserProfile(profile) {
        this.userProfile = profile;
        this.recommendIndustry();
    }

    recommendIndustry() {
        if (!this.userProfile) return;

        // Intelligente Empfehlung basierend auf Benutzerprofil
        const recommendations = [];
        
        if (this.userProfile.sector) {
            const sectorMapping = {
                'healthcare': 'healthcare',
                'medical': 'healthcare',
                'hospital': 'healthcare',
                'finance': 'finance',
                'banking': 'finance',
                'insurance': 'finance',
                'manufacturing': 'manufacturing',
                'industry': 'manufacturing',
                'production': 'manufacturing',
                'government': 'government',
                'public': 'government',
                'education': 'education',
                'school': 'education',
                'university': 'education',
                'energy': 'energy',
                'utility': 'energy',
                'power': 'energy'
            };

            const recommendedIndustry = sectorMapping[this.userProfile.sector.toLowerCase()];
            if (recommendedIndustry) {
                recommendations.push(recommendedIndustry);
            }
        }

        // Fallback: Alle Industrien anzeigen
        if (recommendations.length === 0) {
            recommendations.push(...Object.keys(this.industries));
        }

        return recommendations;
    }

    renderIndustrySelection() {
        const recommendations = this.recommendIndustry();
        
        return `
            <div class="industry-selection-container">
                <div class="industry-header">
                    <h2>🏢 Branchenspezifische Cybersicherheit</h2>
                    <p>Wählen Sie Ihre Branche für maßgeschneiderte Sicherheitsschulungen</p>
                </div>
                
                ${this.userProfile ? `
                    <div class="profile-info">
                        <h3>👤 Ihr Profil</h3>
                        <div class="profile-details">
                            <span><strong>Rolle:</strong> ${this.userProfile.role || 'Nicht angegeben'}</span>
                            <span><strong>Sektor:</strong> ${this.userProfile.sector || 'Nicht angegeben'}</span>
                            <span><strong>Erfahrung:</strong> ${this.userProfile.experience || 'Nicht angegeben'}</span>
                        </div>
                    </div>
                ` : ''}
                
                <div class="recommended-industries">
                    <h3>📋 Empfohlene Branchen</h3>
                    <div class="industry-grid">
                        ${recommendations.map(industryKey => this.renderIndustryCard(industryKey, true)).join('')}
                    </div>
                </div>
                
                <div class="all-industries">
                    <h3>🌐 Alle verfügbaren Branchen</h3>
                    <div class="industry-grid">
                        ${Object.keys(this.industries).map(industryKey => this.renderIndustryCard(industryKey, false)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderIndustryCard(industryKey, isRecommended) {
        const industry = this.industries[industryKey];
        
        return `
            <div class="industry-card ${isRecommended ? 'recommended' : ''}" onclick="industryTraining.selectIndustry('${industryKey}')">
                <div class="industry-icon">${industry.icon}</div>
                <h3>${industry.name}</h3>
                <p>${industry.description}</p>
                
                <div class="industry-stats">
                    <div class="stat">
                        <span class="stat-number">${industry.scenarios.length}</span>
                        <span class="stat-label">Szenarien</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${industry.regulations.length}</span>
                        <span class="stat-label">Vorschriften</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${industry.threatLandscape.primary.length + industry.threatLandscape.specific.length}</span>
                        <span class="stat-label">Bedrohungen</span>
                    </div>
                </div>
                
                <div class="industry-threats">
                    <strong>Hauptbedrohungen:</strong>
                    <ul>
                        ${industry.threatLandscape.primary.slice(0, 3).map(threat => `<li>${threat}</li>`).join('')}
                    </ul>
                </div>
                
                ${isRecommended ? '<div class="recommended-badge">⭐ Empfohlen</div>' : ''}
            </div>
        `;
    }

    selectIndustry(industryKey) {
        this.currentIndustry = industryKey;
        const industry = this.industries[industryKey];
        
        document.body.innerHTML = this.renderIndustryDashboard(industry);
    }

    renderIndustryDashboard(industry) {
        return `
            <div class="industry-dashboard">
                <div class="dashboard-header">
                    <button onclick="industryTraining.goBack()" class="back-btn">← Zurück</button>
                    <div class="industry-title">
                        <span class="industry-icon-large">${industry.icon}</span>
                        <h1>${industry.name}</h1>
                    </div>
                </div>
                
                <div class="dashboard-content">
                    <div class="main-content">
                        <div class="threat-landscape-section">
                            <h2>🎯 Bedrohungslandschaft</h2>
                            <div class="threat-categories">
                                <div class="threat-category">
                                    <h3>Primäre Bedrohungen</h3>
                                    <ul>
                                        ${industry.threatLandscape.primary.map(threat => `<li>${threat}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="threat-category">
                                    <h3>Branchenspezifische Bedrohungen</h3>
                                    <ul>
                                        ${industry.threatLandscape.specific.map(threat => `<li>${threat}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="scenarios-section">
                            <h2>🎭 Praxisszenarien</h2>
                            <div class="scenarios-grid">
                                ${industry.scenarios.map(scenario => this.renderScenarioCard(scenario)).join('')}
                            </div>
                        </div>
                        
                        <div class="compliance-section">
                            <h2>📋 Compliance & Vorschriften</h2>
                            <div class="compliance-frameworks">
                                ${Object.entries(industry.compliance_framework || {}).map(([framework, details]) => 
                                    this.renderComplianceFramework(framework, details)
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="sidebar">
                        <div class="quick-stats">
                            <h3>📊 Überblick</h3>
                            <div class="stats-list">
                                <div class="stat-item">
                                    <span class="stat-icon">🎯</span>
                                    <span>Primäre Bedrohungen: ${industry.threatLandscape.primary.length}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-icon">🔒</span>
                                    <span>Spezifische Risiken: ${industry.threatLandscape.specific.length}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-icon">🎭</span>
                                    <span>Verfügbare Szenarien: ${industry.scenarios.length}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-icon">📋</span>
                                    <span>Relevante Vorschriften: ${industry.regulations.length}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="regulations-list">
                            <h3>⚖️ Relevante Vorschriften</h3>
                            <ul>
                                ${industry.regulations.map(regulation => `<li>${regulation}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="best-practices">
                            <h3>✅ Best Practices</h3>
                            <ul>
                                ${(industry.best_practices || []).map(practice => `<li>${practice}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderScenarioCard(scenario) {
        const difficultyColors = {
            'beginner': '#28a745',
            'intermediate': '#ffc107', 
            'advanced': '#fd7e14',
            'expert': '#dc3545'
        };

        return `
            <div class="scenario-card" onclick="industryTraining.startScenario('${scenario.id}')">
                <div class="scenario-header">
                    <h3>${scenario.title}</h3>
                    <div class="scenario-meta">
                        <span class="difficulty-badge" style="background-color: ${difficultyColors[scenario.difficulty]}">
                            ${scenario.difficulty.toUpperCase()}
                        </span>
                        <span class="duration-badge">⏱️ ${scenario.duration}min</span>
                    </div>
                </div>
                
                <p class="scenario-description">${scenario.description}</p>
                
                <div class="scenario-objectives">
                    <strong>Lernziele:</strong>
                    <ul>
                        ${scenario.objectives.map(objective => `<li>${objective}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="scenario-situation">
                    <strong>Ausgangssituation:</strong>
                    <p>${scenario.situation}</p>
                </div>
                
                <button class="start-scenario-btn">🚀 Szenario starten</button>
            </div>
        `;
    }

    renderComplianceFramework(frameworkName, details) {
        return `
            <div class="compliance-framework">
                <h3>${frameworkName}</h3>
                <div class="framework-content">
                    <div class="requirements">
                        <h4>Anforderungen:</h4>
                        <ul>
                            ${details.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="implementations">
                        <h4>Umsetzungsmaßnahmen:</h4>
                        <ul>
                            ${details.implementations.map(impl => `<li>${impl}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    startScenario(scenarioId) {
        // Find scenario across all industries
        let targetScenario = null;
        let targetIndustry = null;
        
        for (const [industryKey, industry] of Object.entries(this.industries)) {
            const scenario = industry.scenarios.find(s => s.id === scenarioId);
            if (scenario) {
                targetScenario = scenario;
                targetIndustry = industry;
                break;
            }
        }
        
        if (!targetScenario) {
            alert('Szenario nicht gefunden!');
            return;
        }
        
        // Launch interactive scenario
        this.launchInteractiveScenario(targetScenario, targetIndustry);
    }

    launchInteractiveScenario(scenario, industry) {
        document.body.innerHTML = `
            <div class="scenario-player">
                <div class="scenario-header">
                    <div class="scenario-info">
                        <h1>${scenario.title}</h1>
                        <div class="scenario-meta">
                            <span>🏢 ${industry.name}</span>
                            <span>⏱️ ${scenario.duration} Minuten</span>
                            <span class="difficulty-${scenario.difficulty}">🎯 ${scenario.difficulty.toUpperCase()}</span>
                        </div>
                    </div>
                    <div class="scenario-timer">
                        <span id="timer">00:00</span>
                    </div>
                </div>
                
                <div class="scenario-content">
                    <div class="situation-briefing">
                        <h2>📋 Ausgangssituation</h2>
                        <p>${scenario.situation}</p>
                    </div>
                    
                    <div class="scenario-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                        <span class="progress-text">Schritt 1 von ${scenario.decisions.length}</span>
                    </div>
                    
                    <div id="scenario-stage">
                        ${this.renderScenarioDecision(scenario.decisions[0], 0, scenario)}
                    </div>
                </div>
            </div>
        `;
        
        this.startScenarioTimer();
    }

    renderScenarioDecision(decision, stepIndex, scenario) {
        return `
            <div class="decision-stage">
                <h3>Entscheidung ${stepIndex + 1}</h3>
                <div class="decision-situation">
                    <p>${decision.situation}</p>
                </div>
                
                <div class="decision-options">
                    ${decision.options.map((option, index) => `
                        <button class="decision-option" onclick="industryTraining.makeDecision(${index}, ${stepIndex}, '${scenario.id}')">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    makeDecision(optionIndex, stepIndex, scenarioId) {
        // Find the scenario and decision
        let targetScenario = null;
        for (const industry of Object.values(this.industries)) {
            const scenario = industry.scenarios.find(s => s.id === scenarioId);
            if (scenario) {
                targetScenario = scenario;
                break;
            }
        }
        
        if (!targetScenario) return;
        
        const decision = targetScenario.decisions[stepIndex];
        const selectedOption = decision.options[optionIndex];
        
        // Show feedback
        this.showDecisionFeedback(selectedOption, stepIndex, targetScenario);
    }

    showDecisionFeedback(option, stepIndex, scenario) {
        const feedbackHtml = `
            <div class="decision-feedback">
                <div class="feedback-header ${option.points >= 7 ? 'success' : option.points >= 4 ? 'warning' : 'danger'}">
                    <h3>${option.points >= 7 ? '✅ Gute Entscheidung!' : option.points >= 4 ? '⚠️ Teilweise richtig' : '❌ Nicht optimal'}</h3>
                    <div class="points-earned">+${option.points} Punkte</div>
                </div>
                
                <div class="feedback-content">
                    <p>${option.feedback}</p>
                </div>
                
                <div class="feedback-actions">
                    ${stepIndex < scenario.decisions.length - 1 ? 
                        `<button onclick="industryTraining.nextDecision(${stepIndex + 1}, '${scenario.id}')" class="continue-btn">Weiter</button>` :
                        `<button onclick="industryTraining.completeScenario('${scenario.id}')" class="complete-btn">Szenario abschließen</button>`
                    }
                </div>
            </div>
        `;
        
        document.getElementById('scenario-stage').innerHTML = feedbackHtml;
        
        // Update progress
        const progress = ((stepIndex + 1) / scenario.decisions.length) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.querySelector('.progress-text').textContent = `Schritt ${stepIndex + 1} von ${scenario.decisions.length}`;
    }

    nextDecision(stepIndex, scenarioId) {
        // Find scenario and render next decision
        let targetScenario = null;
        for (const industry of Object.values(this.industries)) {
            const scenario = industry.scenarios.find(s => s.id === scenarioId);
            if (scenario) {
                targetScenario = scenario;
                break;
            }
        }
        
        if (targetScenario && stepIndex < targetScenario.decisions.length) {
            document.getElementById('scenario-stage').innerHTML = 
                this.renderScenarioDecision(targetScenario.decisions[stepIndex], stepIndex, targetScenario);
        }
    }

    completeScenario(scenarioId) {
        // Calculate final score and show completion screen
        alert(`Szenario "${scenarioId}" erfolgreich abgeschlossen! 
        
🎉 Glückwunsch! Sie haben wichtige Erfahrungen in der branchenspezifischen Cybersicherheit gesammelt.

📊 Ihre Leistung wird in Ihrem Profil gespeichert.`);
        
        // Return to industry dashboard
        this.selectIndustry(this.currentIndustry);
    }

    startScenarioTimer() {
        let seconds = 0;
        const timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }, 1000);
        
        // Store timer reference for cleanup
        this.currentTimer = timer;
    }

    goBack() {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }
        document.body.innerHTML = this.renderIndustrySelection();
    }
}

// CSS für Industry-Specific Training
const industryTrainingCSS = `
    .industry-selection-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .industry-header {
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .industry-header h2 {
        margin: 0 0 15px 0;
        font-size: 2.5em;
    }
    
    .profile-info {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 30px;
    }
    
    .profile-details {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    
    .profile-details span {
        background: white;
        padding: 8px 15px;
        border-radius: 5px;
        font-size: 0.9em;
    }
    
    .industry-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }
    
    .industry-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid #e9ecef;
        position: relative;
        overflow: hidden;
    }
    
    .industry-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        border-color: #007bff;
    }
    
    .industry-card.recommended {
        border-color: #28a745;
        background: linear-gradient(135deg, #f8fff9 0%, #ffffff 100%);
    }
    
    .recommended-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: #28a745;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8em;
        font-weight: bold;
    }
    
    .industry-icon {
        font-size: 3em;
        text-align: center;
        margin-bottom: 15px;
    }
    
    .industry-card h3 {
        text-align: center;
        color: #2c3e50;
        margin: 15px 0;
    }
    
    .industry-card p {
        color: #6c757d;
        text-align: center;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    
    .industry-stats {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        padding: 15px 0;
        border-top: 1px solid #e9ecef;
        border-bottom: 1px solid #e9ecef;
    }
    
    .stat {
        text-align: center;
    }
    
    .stat-number {
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        color: #007bff;
    }
    
    .stat-label {
        display: block;
        font-size: 0.8em;
        color: #6c757d;
        margin-top: 5px;
    }
    
    .industry-threats {
        margin-top: 15px;
    }
    
    .industry-threats ul {
        margin: 10px 0;
        padding-left: 20px;
    }
    
    .industry-threats li {
        color: #495057;
        margin: 5px 0;
        font-size: 0.9em;
    }
    
    .industry-dashboard {
        max-width: 1600px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .dashboard-header {
        display: flex;
        align-items: center;
        background: white;
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .back-btn {
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        margin-right: 20px;
        transition: background-color 0.3s ease;
    }
    
    .back-btn:hover {
        background: #5a6268;
    }
    
    .industry-title {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .industry-icon-large {
        font-size: 3em;
    }
    
    .dashboard-content {
        display: grid;
        grid-template-columns: 1fr 350px;
        gap: 30px;
    }
    
    .main-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
    }
    
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .sidebar > div {
        background: white;
        padding: 20px;
        border-radius: 15px;
    }
    
    .threat-categories {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin: 20px 0;
    }
    
    .threat-category {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
    }
    
    .threat-category h3 {
        color: #dc3545;
        margin-bottom: 15px;
    }
    
    .scenarios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }
    
    .scenario-card {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }
    
    .scenario-card:hover {
        background: white;
        border-color: #007bff;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
    
    .scenario-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .scenario-meta {
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
    
    .scenario-objectives ul,
    .scenario-situation {
        margin: 15px 0;
    }
    
    .start-scenario-btn {
        width: 100%;
        background: #28a745;
        color: white;
        border: none;
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 15px;
        transition: background-color 0.3s ease;
    }
    
    .start-scenario-btn:hover {
        background: #218838;
    }
    
    .compliance-frameworks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }
    
    .compliance-framework {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        border-left: 4px solid #007bff;
    }
    
    .framework-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 15px;
    }
    
    .stats-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .stat-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: #f8f9fa;
        border-radius: 8px;
    }
    
    .stat-icon {
        font-size: 1.2em;
    }
    
    .scenario-player {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .scenario-player .scenario-header {
        background: white;
        padding: 25px;
        border-radius: 15px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .scenario-timer {
        font-size: 1.5em;
        font-weight: bold;
        color: #007bff;
    }
    
    .scenario-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
    }
    
    .situation-briefing {
        background: #e3f2fd;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
        border-left: 4px solid #007bff;
    }
    
    .scenario-progress {
        margin: 20px 0;
    }
    
    .progress-bar {
        background: #e9ecef;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .progress-fill {
        background: #007bff;
        height: 100%;
        transition: width 0.5s ease;
    }
    
    .decision-stage {
        margin: 30px 0;
    }
    
    .decision-situation {
        background: #fff3cd;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
        border-left: 4px solid #ffc107;
    }
    
    .decision-options {
        display: grid;
        gap: 15px;
        margin: 25px 0;
    }
    
    .decision-option {
        background: white;
        border: 2px solid #e9ecef;
        padding: 20px;
        border-radius: 10px;
        cursor: pointer;
        text-align: left;
        transition: all 0.3s ease;
    }
    
    .decision-option:hover {
        border-color: #007bff;
        background: #f8f9fa;
    }
    
    .decision-feedback {
        margin: 30px 0;
    }
    
    .feedback-header {
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .feedback-header.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .feedback-header.warning {
        background: #fff3cd;
        color: #856404;
        border: 1px solid #ffeaa7;
    }
    
    .feedback-header.danger {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .points-earned {
        font-size: 1.2em;
        font-weight: bold;
    }
    
    .feedback-content {
        padding: 20px;
        background: #f8f9fa;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .continue-btn,
    .complete-btn {
        background: #007bff;
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .continue-btn:hover,
    .complete-btn:hover {
        background: #0056b3;
    }
    
    .complete-btn {
        background: #28a745;
    }
    
    .complete-btn:hover {
        background: #218838;
    }
    
    @media (max-width: 768px) {
        .dashboard-content {
            grid-template-columns: 1fr;
        }
        
        .threat-categories {
            grid-template-columns: 1fr;
        }
        
        .framework-content {
            grid-template-columns: 1fr;
        }
        
        .industry-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const industryTrainingStyleSheet = document.createElement('style');
industryTrainingStyleSheet.textContent = industryTrainingCSS;
document.head.appendChild(industryTrainingStyleSheet);

// Global instance
window.industryTraining = new IndustrySpecificTraining();
