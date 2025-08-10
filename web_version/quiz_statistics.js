// Erweiterte Quiz-Datenbank mit detaillierter Statistik
const extendedQuizDatabase = {
    // 🔒 Grundlagen der IT-Sicherheit - Erweitert
    basics_extended: {
        title: "🔒 Grundlagen der IT-Sicherheit",
        difficulty: "Grundlagen",
        questions: [
            {
                question: "Was bedeutet das 'C' in der CIA-Triade?",
                options: ["Control", "Confidentiality", "Compliance", "Certification"],
                correct: 1,
                category: "CIA-Triade",
                explanation: "Confidentiality (Vertraulichkeit) schützt vor unbefugtem Zugriff auf Informationen."
            },
            {
                question: "Welches Prinzip beschreibt 'Need-to-Know'?",
                options: ["Least Privilege", "Defense in Depth", "Zero Trust", "Segregation of Duties"],
                correct: 0,
                category: "Grundprinzipien",
                explanation: "Need-to-Know ist Teil des Least Privilege Prinzips."
            },
            {
                question: "Was ist der Hauptzweck einer Datenschutz-Folgenabschätzung?",
                options: ["Kosten senken", "Risiken bewerten", "Compliance nachweisen", "Performance optimieren"],
                correct: 1,
                category: "DSGVO",
                explanation: "DSFA bewertet Risiken für die Rechte und Freiheiten natürlicher Personen."
            },
            {
                question: "Welcher BSI-Standard behandelt IT-Grundschutz-Kataloge?",
                options: ["BSI-Standard 200-1", "BSI-Standard 200-2", "BSI-Standard 200-3", "BSI-Standard 200-4"],
                correct: 1,
                category: "BSI-Standards",
                explanation: "BSI-Standard 200-2 definiert die IT-Grundschutz-Methodik."
            },
            {
                question: "Was bedeutet 'Defense in Depth'?",
                options: ["Tiefe Verschlüsselung", "Mehrschichtiger Schutz", "Starke Passwörter", "Regelmäßige Backups"],
                correct: 1,
                category: "Grundprinzipien",
                explanation: "Defense in Depth nutzt mehrere Sicherheitsebenen für umfassenden Schutz."
            },
            {
                question: "Welche Norm regelt Informationssicherheits-Managementsysteme?",
                options: ["ISO 9001", "ISO 27001", "ISO 14001", "ISO 45001"],
                correct: 1,
                category: "Standards",
                explanation: "ISO 27001 ist der internationale Standard für ISMS."
            },
            {
                question: "Was ist ein Security Policy?",
                options: ["Technische Konfiguration", "Organisatorische Richtlinie", "Software-Update", "Hardware-Spezifikation"],
                correct: 1,
                category: "Governance",
                explanation: "Security Policies definieren organisatorische Sicherheitsrichtlinien."
            },
            {
                question: "Welches Prinzip verhindert, dass eine Person alle kritischen Schritte durchführt?",
                options: ["Least Privilege", "Segregation of Duties", "Need-to-Know", "Defense in Depth"],
                correct: 1,
                category: "Grundprinzipien",
                explanation: "Segregation of Duties teilt kritische Aufgaben auf mehrere Personen auf."
            },
            {
                question: "Was bedeutet 'Availability' in der CIA-Triade?",
                options: ["Backup-Verfügbarkeit", "System-Verfügbarkeit", "Personal-Verfügbarkeit", "Budget-Verfügbarkeit"],
                correct: 1,
                category: "CIA-Triade",
                explanation: "Availability stellt sicher, dass Systeme und Daten verfügbar sind."
            },
            {
                question: "Welches Dokument beschreibt Sicherheitsanforderungen für ein System?",
                options: ["SLA", "Security Requirements Specification", "User Manual", "Technical Documentation"],
                correct: 1,
                category: "Dokumentation",
                explanation: "Security Requirements Specification definiert Sicherheitsanforderungen."
            }
        ]
    },

    // 🔑 Zugriffskontrolle & IAM - Erweitert
    iam_extended: {
        title: "🔑 Zugriffskontrolle & IAM",
        difficulty: "Mittel",
        questions: [
            {
                question: "Was ist der Unterschied zwischen Authentifizierung und Autorisierung?",
                options: ["Kein Unterschied", "Authentifizierung prüft Identität, Autorisierung prüft Berechtigung", "Beide prüfen Passwörter", "Beide sind optional"],
                correct: 1,
                category: "Grundlagen",
                explanation: "Authentifizierung = Wer bist du? Autorisierung = Was darfst du?"
            },
            {
                question: "Welcher MFA-Faktor ist ein 'Something you have'?",
                options: ["Passwort", "Fingerabdruck", "Hardware-Token", "PIN"],
                correct: 2,
                category: "MFA",
                explanation: "Hardware-Token ist ein Besitzfaktor (Something you have)."
            },
            {
                question: "Was macht ein Identity Provider (IdP)?",
                options: ["Passwörter speichern", "Identitäten verwalten und authentifizieren", "Backups erstellen", "Logs analysieren"],
                correct: 1,
                category: "SSO",
                explanation: "IdP verwaltet Identitäten und führt Authentifizierung durch."
            },
            {
                question: "Welches Protokoll nutzt SAML primär?",
                options: ["JSON", "XML", "YAML", "CSV"],
                correct: 1,
                category: "Protokolle",
                explanation: "SAML (Security Assertion Markup Language) basiert auf XML."
            },
            {
                question: "Was bedeutet 'Privilege Escalation'?",
                options: ["Rechte reduzieren", "Rechte erweitern", "Passwort ändern", "Account löschen"],
                correct: 1,
                category: "Bedrohungen",
                explanation: "Privilege Escalation = unbefugte Ausweitung von Zugriffsrechten."
            },
            {
                question: "Welcher OAuth 2.0 Flow ist für mobile Apps empfohlen?",
                options: ["Authorization Code", "PKCE", "Client Credentials", "Password Grant"],
                correct: 1,
                category: "OAuth",
                explanation: "PKCE (Proof Key for Code Exchange) ist sicher für mobile Apps."
            },
            {
                question: "Was ist Just-in-Time (JIT) Access?",
                options: ["Sofortige Anmeldung", "Temporäre Rechtevergabe", "Automatische Backups", "Echtzeitüberwachung"],
                correct: 1,
                category: "Access Management",
                explanation: "JIT gewährt Zugriff nur für benötigte Zeiträume."
            },
            {
                question: "Welches Verfahren prüft kontinuierlich die Vertrauenswürdigkeit?",
                options: ["Static Analysis", "Continuous Authentication", "Batch Processing", "Scheduled Scans"],
                correct: 1,
                category: "Adaptive Authentication",
                explanation: "Continuous Authentication überwacht ständig Vertrauensindikatoren."
            },
            {
                question: "Was ist ein Service Account?",
                options: ["User Account", "System-zu-System Account", "Admin Account", "Guest Account"],
                correct: 1,
                category: "Account-Typen",
                explanation: "Service Accounts ermöglichen System-zu-System-Kommunikation."
            },
            {
                question: "Welches Prinzip sollte bei Rollenvergabe gelten?",
                options: ["Maximum Rights", "Least Privilege", "Full Access", "No Restrictions"],
                correct: 1,
                category: "RBAC",
                explanation: "Least Privilege gewährt nur minimal notwendige Rechte."
            }
        ]
    },

    // 🌐 Netzwerksicherheit - Erweitert
    network_extended: {
        title: "🌐 Netzwerksicherheit",
        difficulty: "Mittel",
        questions: [
            {
                question: "Was ist der Unterschied zwischen IDS und IPS?",
                options: ["Kein Unterschied", "IDS erkennt, IPS verhindert", "IPS ist langsamer", "IDS ist teurer"],
                correct: 1,
                category: "IDS/IPS",
                explanation: "IDS = Intrusion Detection (passiv), IPS = Intrusion Prevention (aktiv)."
            },
            {
                question: "Welcher Port wird standardmäßig für HTTPS verwendet?",
                options: ["80", "443", "8080", "8443"],
                correct: 1,
                category: "Protokolle",
                explanation: "HTTPS nutzt standardmäßig Port 443."
            },
            {
                question: "Was ist Network Segmentation?",
                options: ["Netzwerk-Backup", "Netzwerk-Aufteilung", "Netzwerk-Verschlüsselung", "Netzwerk-Monitoring"],
                correct: 1,
                category: "Segmentierung",
                explanation: "Network Segmentation teilt Netzwerke in separate Sicherheitszonen auf."
            },
            {
                question: "Welches Protokoll wird für VPN-Verbindungen häufig verwendet?",
                options: ["HTTP", "FTP", "IPSec", "SMTP"],
                correct: 2,
                category: "VPN",
                explanation: "IPSec ist ein weit verbreitetes VPN-Protokoll."
            },
            {
                question: "Was bedeutet 'DMZ' in der Netzwerksicherheit?",
                options: ["Data Management Zone", "Demilitarized Zone", "Dynamic Memory Zone", "Direct Mail Zone"],
                correct: 1,
                category: "Netzwerk-Architektur",
                explanation: "DMZ ist eine neutrale Zone zwischen internem und externem Netzwerk."
            },
            {
                question: "Welche Firewall-Regel sollte am Ende stehen?",
                options: ["Allow All", "Deny All", "Log All", "Monitor All"],
                correct: 1,
                category: "Firewall",
                explanation: "Deny All als Default-Regel verhindert unerlaubten Verkehr."
            },
            {
                question: "Was ist ein Honeypot?",
                options: ["Backup-System", "Monitoring-Tool", "Köder-System", "Patch-Management"],
                correct: 2,
                category: "Deception Technology",
                explanation: "Honeypots locken Angreifer an und sammeln Informationen über sie."
            },
            {
                question: "Welches Protokoll nutzt WPA3 für die Verschlüsselung?",
                options: ["WEP", "TKIP", "AES", "DES"],
                correct: 2,
                category: "WLAN-Sicherheit",
                explanation: "WPA3 nutzt AES-Verschlüsselung für maximale Sicherheit."
            },
            {
                question: "Was ist SASE (Secure Access Service Edge)?",
                options: ["Firewall-Typ", "Cloud-Sicherheitsmodell", "VPN-Protokoll", "Monitoring-Tool"],
                correct: 1,
                category: "Cloud-Networking",
                explanation: "SASE kombiniert Netzwerk- und Sicherheitsfunktionen in der Cloud."
            },
            {
                question: "Welche Methode erkennt DDoS-Angriffe am besten?",
                options: ["Antivirus", "Traffic-Analyse", "Passwort-Check", "File-Scan"],
                correct: 1,
                category: "DDoS-Schutz",
                explanation: "Traffic-Analyse erkennt ungewöhnliche Datenmengen bei DDoS."
            }
        ]
    }
};

// Statistik-Engine für detaillierte Auswertung
class QuizStatisticsEngine {
    constructor() {
        this.results = JSON.parse(localStorage.getItem('quizResults') || '{}');
        this.currentSession = {
            startTime: new Date(),
            answers: [],
            moduleId: null
        };
    }

    startQuiz(moduleId, moduleName) {
        this.currentSession = {
            startTime: new Date(),
            answers: [],
            moduleId: moduleId,
            moduleName: moduleName
        };
    }

    recordAnswer(questionIndex, question, userAnswer, isCorrect, timeSpent) {
        this.currentSession.answers.push({
            questionIndex,
            question: question.question,
            category: question.category || 'Allgemein',
            userAnswer,
            correctAnswer: question.correct,
            isCorrect,
            timeSpent,
            difficulty: question.difficulty || 'Mittel',
            explanation: question.explanation
        });
    }

    finishQuiz() {
        const endTime = new Date();
        const totalTime = endTime - this.currentSession.startTime;
        
        const result = {
            ...this.currentSession,
            endTime,
            totalTime,
            score: this.calculateScore(),
            categoryStats: this.calculateCategoryStats(),
            completedAt: new Date().toISOString()
        };

        // Speichere Ergebnis
        if (!this.results[this.currentSession.moduleId]) {
            this.results[this.currentSession.moduleId] = [];
        }
        this.results[this.currentSession.moduleId].push(result);
        
        localStorage.setItem('quizResults', JSON.stringify(this.results));
        
        return result;
    }

    calculateScore() {
        const correct = this.currentSession.answers.filter(a => a.isCorrect).length;
        const total = this.currentSession.answers.length;
        return {
            correct,
            total,
            percentage: Math.round((correct / total) * 100)
        };
    }

    calculateCategoryStats() {
        const categories = {};
        
        this.currentSession.answers.forEach(answer => {
            const cat = answer.category;
            if (!categories[cat]) {
                categories[cat] = { correct: 0, total: 0, questions: [] };
            }
            categories[cat].total++;
            if (answer.isCorrect) {
                categories[cat].correct++;
            }
            categories[cat].questions.push(answer);
        });

        // Berechne Prozentsätze
        Object.keys(categories).forEach(cat => {
            categories[cat].percentage = Math.round(
                (categories[cat].correct / categories[cat].total) * 100
            );
        });

        return categories;
    }

    getWeakAreas() {
        const categoryStats = this.calculateCategoryStats();
        return Object.entries(categoryStats)
            .filter(([cat, stats]) => stats.percentage < 70)
            .sort((a, b) => a[1].percentage - b[1].percentage)
            .map(([category, stats]) => ({
                category,
                percentage: stats.percentage,
                correct: stats.correct,
                total: stats.total,
                wrongQuestions: stats.questions.filter(q => !q.isCorrect)
            }));
    }

    getOverallProgress() {
        const allResults = Object.values(this.results).flat();
        
        if (allResults.length === 0) return null;

        const totalQuestions = allResults.reduce((sum, result) => sum + result.score.total, 0);
        const totalCorrect = allResults.reduce((sum, result) => sum + result.score.correct, 0);
        
        const moduleProgress = {};
        Object.keys(this.results).forEach(moduleId => {
            const moduleResults = this.results[moduleId];
            const latestResult = moduleResults[moduleResults.length - 1];
            moduleProgress[moduleId] = {
                attempts: moduleResults.length,
                bestScore: Math.max(...moduleResults.map(r => r.score.percentage)),
                latestScore: latestResult.score.percentage,
                improvement: moduleResults.length > 1 ? 
                    latestResult.score.percentage - moduleResults[0].score.percentage : 0
            };
        });

        return {
            overallPercentage: Math.round((totalCorrect / totalQuestions) * 100),
            totalQuestions,
            totalCorrect,
            moduleProgress,
            lastActivity: new Date(Math.max(...allResults.map(r => new Date(r.completedAt)))),
            strengthAreas: this.getStrengthAreas(),
            improvementAreas: this.getImprovementAreas()
        };
    }

    getStrengthAreas() {
        const allCategories = {};
        Object.values(this.results).flat().forEach(result => {
            Object.entries(result.categoryStats).forEach(([cat, stats]) => {
                if (!allCategories[cat]) {
                    allCategories[cat] = { correct: 0, total: 0 };
                }
                allCategories[cat].correct += stats.correct;
                allCategories[cat].total += stats.total;
            });
        });

        return Object.entries(allCategories)
            .map(([cat, stats]) => ({
                category: cat,
                percentage: Math.round((stats.correct / stats.total) * 100),
                total: stats.total
            }))
            .filter(area => area.percentage >= 80)
            .sort((a, b) => b.percentage - a.percentage);
    }

    getImprovementAreas() {
        const allCategories = {};
        Object.values(this.results).flat().forEach(result => {
            Object.entries(result.categoryStats).forEach(([cat, stats]) => {
                if (!allCategories[cat]) {
                    allCategories[cat] = { correct: 0, total: 0 };
                }
                allCategories[cat].correct += stats.correct;
                allCategories[cat].total += stats.total;
            });
        });

        return Object.entries(allCategories)
            .map(([cat, stats]) => ({
                category: cat,
                percentage: Math.round((stats.correct / stats.total) * 100),
                total: stats.total
            }))
            .filter(area => area.percentage < 70)
            .sort((a, b) => a.percentage - b.percentage);
    }

    showDetailedResults(containerId) {
        const container = document.getElementById(containerId);
        const result = this.finishQuiz();
        const overallProgress = this.getOverallProgress();
        
        container.innerHTML = `
            <div class="quiz-results-detailed">
                <div class="results-header">
                    <h2>📊 Detaillierte Quiz-Auswertung</h2>
                    <div class="score-summary">
                        <div class="score-circle ${this.getScoreClass(result.score.percentage)}">
                            <span class="score-number">${result.score.percentage}%</span>
                            <span class="score-label">${result.score.correct}/${result.score.total} Richtig</span>
                        </div>
                    </div>
                    
                    <div class="results-navigation">
                        <button class="nav-btn active" onclick="showResultsTab('overview')">📊 Übersicht</button>
                        <button class="nav-btn" onclick="showResultsTab('solutions')">📚 Detaillierte Lösungen</button>
                        <button class="nav-btn" onclick="showResultsTab('categories')">📈 Kategorien</button>
                        <button class="nav-btn" onclick="showResultsTab('progress')">🏆 Fortschritt</button>
                    </div>
                </div>

                <div id="results-overview" class="results-tab-content active">
                    ${this.renderOverviewTab(result, overallProgress)}
                </div>

                <div id="results-solutions" class="results-tab-content">
                    <div id="detailed-solutions-container"></div>
                </div>

                <div id="results-categories" class="results-tab-content">
                    ${this.renderCategoriesTab(result)}
                </div>

                <div id="results-progress" class="results-tab-content">
                    ${this.renderProgressTab(overallProgress)}
                </div>

                <div class="results-actions">
                    <button class="btn btn-primary" onclick="location.reload()">
                        🔄 Neues Quiz starten
                    </button>
                    <button class="btn btn-secondary" onclick="showMainMenu()">
                        🏠 Hauptmenü
                    </button>
                    <button class="btn btn-info" onclick="downloadResults()">
                        📥 Ergebnisse herunterladen
                    </button>
                </div>
            </div>
        `;

        // Detaillierte Lösungen initialisieren
        const solutionsEngine = new DetailedSolutionsEngine(this);
        setTimeout(() => {
            solutionsEngine.showComprehensiveSolutions('detailed-solutions-container');
        }, 100);
    }

    renderOverviewTab(result, overallProgress) {
        return `
            <div class="results-grid">
                <!-- Kategorien-Analyse -->
                <div class="results-section">
                    <h3>📈 Leistung nach Kategorien</h3>
                    <div class="category-stats">
                        ${Object.entries(result.categoryStats).map(([category, stats]) => `
                            <div class="category-item ${stats.percentage < 70 ? 'needs-improvement' : stats.percentage >= 90 ? 'excellent' : 'good'}">
                                <div class="category-header">
                                    <span class="category-name">${category}</span>
                                    <span class="category-score">${stats.percentage}%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${stats.percentage}%"></div>
                                </div>
                                <div class="category-details">
                                    ${stats.correct}/${stats.total} Fragen richtig
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Schwachstellen -->
                <div class="results-section">
                    <h3>⚠️ Verbesserungsbereiche</h3>
                    <div class="weak-areas">
                        ${this.getWeakAreas().length > 0 ? 
                            this.getWeakAreas().map(area => `
                                <div class="weak-area">
                                    <div class="area-header">
                                        <span class="area-name">${area.category}</span>
                                        <span class="area-score">${area.percentage}%</span>
                                    </div>
                                    <div class="improvement-suggestions">
                                        <p>📚 Empfohlene Maßnahmen:</p>
                                        <ul>
                                            <li>Nochmaliges Studieren der Grundlagen zu ${area.category}</li>
                                            <li>Praktische Übungen in diesem Bereich</li>
                                            <li>Vertiefung durch zusätzliche Quellen</li>
                                        </ul>
                                    </div>
                                </div>
                            `).join('') : 
                            '<p class="no-weak-areas">🎉 Keine Schwachstellen identifiziert! Ausgezeichnete Leistung.</p>'
                        }
                    </div>
                </div>
            </div>
        `;
    }

    renderCategoriesTab(result) {
        return `
            <div class="categories-detailed">
                <h3>� Detaillierte Kategorien-Analyse</h3>
                ${Object.entries(result.categoryStats).map(([category, stats]) => `
                    <div class="category-detail-card">
                        <div class="category-detail-header">
                            <h4>${category}</h4>
                            <div class="category-score-large">${stats.percentage}%</div>
                        </div>
                        <div class="category-detail-body">
                            <div class="stats-row">
                                <span>Richtige Antworten:</span>
                                <span>${stats.correct} von ${stats.total}</span>
                            </div>
                            <div class="progress-bar-large">
                                <div class="progress-fill" style="width: ${stats.percentage}%"></div>
                            </div>
                            <div class="category-questions">
                                <h5>Fragen in dieser Kategorie:</h5>
                                <ul>
                                    ${stats.questions.map((q, index) => `
                                        <li class="${q.isCorrect ? 'correct' : 'incorrect'}">
                                            ${q.isCorrect ? '✅' : '❌'} ${q.question.substring(0, 80)}...
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderProgressTab(overallProgress) {
        if (!overallProgress) {
            return '<p>Noch keine Verlaufsdaten verfügbar.</p>';
        }

        return `
            <div class="progress-detailed">
                <div class="overall-stats">
                    <h3>🏆 Gesamtfortschritt</h3>
                    <div class="progress-summary">
                        <div class="stat-item">
                            <div class="stat-value">${overallProgress.overallPercentage}%</div>
                            <div class="stat-label">Gesamtleistung</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${overallProgress.totalCorrect}</div>
                            <div class="stat-label">Richtige Antworten</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${Object.keys(overallProgress.moduleProgress).length}</div>
                            <div class="stat-label">Module absolviert</div>
                        </div>
                    </div>
                </div>
                
                ${overallProgress.strengthAreas.length > 0 ? `
                    <div class="strength-areas">
                        <h4>💪 Ihre Stärken:</h4>
                        <div class="strength-list">
                            ${overallProgress.strengthAreas.slice(0, 5).map(area => 
                                `<span class="strength-tag">${area.category} (${area.percentage}%)</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}

                ${overallProgress.improvementAreas.length > 0 ? `
                    <div class="improvement-areas">
                        <h4>📚 Verbesserungsbereiche:</h4>
                        <div class="improvement-list">
                            ${overallProgress.improvementAreas.slice(0, 5).map(area => 
                                `<span class="improvement-tag">${area.category} (${area.percentage}%)</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="module-progress">
                    <h4>📈 Fortschritt pro Modul:</h4>
                    ${Object.entries(overallProgress.moduleProgress).map(([moduleId, progress]) => `
                        <div class="module-progress-item">
                            <div class="module-name">${moduleId}</div>
                            <div class="module-stats">
                                <span>Beste Note: ${progress.bestScore}%</span>
                                <span>Letzte Note: ${progress.latestScore}%</span>
                                <span>Versuche: ${progress.attempts}</span>
                                ${progress.improvement > 0 ? 
                                    `<span class="improvement">+${progress.improvement}% 📈</span>` : 
                                    progress.improvement < 0 ? 
                                    `<span class="decline">${progress.improvement}% 📉</span>` : 
                                    '<span class="stable">Stabil</span>'
                                }
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getScoreClass(percentage) {
        if (percentage >= 90) return 'excellent';
        if (percentage >= 80) return 'good';
        if (percentage >= 70) return 'average';
        return 'needs-improvement';
    }

    downloadResults() {
        const results = this.getOverallProgress();
        const data = JSON.stringify(results, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cybersecurity-quiz-results-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// CSS für Statistik-Anzeige
const statisticsStyles = `
<style>
.quiz-results-detailed {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.results-header {
    text-align: center;
    margin-bottom: 30px;
}

.score-circle {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    color: white;
    font-weight: bold;
}

.score-circle.excellent { background: linear-gradient(135deg, #4CAF50, #8BC34A); }
.score-circle.good { background: linear-gradient(135deg, #2196F3, #03DAC6); }
.score-circle.average { background: linear-gradient(135deg, #FF9800, #FFC107); }
.score-circle.needs-improvement { background: linear-gradient(135deg, #F44336, #E91E63); }

.score-number { font-size: 28px; }
.score-label { font-size: 12px; margin-top: 5px; }

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.results-section {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e9ecef;
}

.results-section h3 {
    margin-top: 0;
    color: #495057;
    border-bottom: 2px solid #dee2e6;
    padding-bottom: 10px;
}

.category-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #dee2e6;
}

.category-item.excellent { border-left: 4px solid #4CAF50; }
.category-item.good { border-left: 4px solid #2196F3; }
.category-item.needs-improvement { border-left: 4px solid #F44336; }

.category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.category-name { font-weight: bold; }
.category-score { font-size: 18px; font-weight: bold; }

.progress-bar {
    width: 100%;
    height: 8px;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 5px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #8BC34A);
    transition: width 0.3s ease;
}

.category-details {
    font-size: 12px;
    color: #6c757d;
}

.weak-area {
    background: #fff5f5;
    border: 1px solid #fed7d7;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
}

.area-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.improvement-suggestions {
    font-size: 14px;
    color: #4a5568;
}

.improvement-suggestions ul {
    margin: 10px 0;
    padding-left: 20px;
}

.answer-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #dee2e6;
}

.answer-item.correct { border-left: 4px solid #4CAF50; }
.answer-item.incorrect { border-left: 4px solid #F44336; }

.question-number {
    font-size: 12px;
    color: #6c757d;
    font-weight: bold;
}

.question-text {
    margin: 8px 0;
    font-weight: 500;
}

.answer-info {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
}

.category-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
}

.result-icon { font-size: 16px; }
.time-spent { font-size: 12px; color: #6c757d; }

.explanation {
    background: #f8f9fa;
    border-radius: 6px;
    padding: 10px;
    margin-top: 8px;
    font-size: 14px;
}

.progress-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

.stat-item {
    text-align: center;
    background: white;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #2196F3;
}

.stat-label {
    font-size: 12px;
    color: #6c757d;
    margin-top: 5px;
}

.strength-areas {
    background: #f0f9ff;
    border-radius: 8px;
    padding: 15px;
}

.strength-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}

.strength-tag {
    background: #4CAF50;
    color: white;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
}

.results-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: #2196F3;
    color: white;
}

.btn-primary:hover {
    background: #1976D2;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
}

.btn-info {
    background: #17a2b8;
    color: white;
}

.btn-info:hover {
    background: #138496;
}

.no-weak-areas {
    text-align: center;
    padding: 20px;
    color: #4CAF50;
    font-weight: 500;
}

@media (max-width: 768px) {
    .results-grid {
        grid-template-columns: 1fr;
    }
    
    .progress-summary {
        grid-template-columns: 1fr;
    }
    
    .results-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
    }
}
</style>`;

// Integration in bestehendes System
if (typeof window !== 'undefined') {
    // Füge erweiterte Fragen zu bestehenden Modulen hinzu
    if (window.extendedCyberModules) {
        window.extendedCyberModules.basics.modules[0].quiz = extendedQuizDatabase.basics_extended.questions;
        window.extendedCyberModules.iam.modules[0].quiz = extendedQuizDatabase.iam_extended.questions;
        window.extendedCyberModules.network.modules[0].quiz = extendedQuizDatabase.network_extended.questions;
    }
    
    // Globale Statistik-Engine verfügbar machen
    window.QuizStatisticsEngine = QuizStatisticsEngine;
    console.log('✅ Erweiterte Quiz-Datenbank und Statistik-Engine geladen!');
}

// Statistik-Styles in Head einfügen
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', statisticsStyles);
    
    // Zusätzliche Tab-Navigation Styles
    document.head.insertAdjacentHTML('beforeend', `
        <style>
        .results-navigation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .nav-btn {
            padding: 10px 20px;
            border: 2px solid #dee2e6;
            background: #f8f9fa;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .nav-btn:hover {
            background: #e9ecef;
            transform: translateY(-2px);
        }

        .nav-btn.active {
            background: #007bff;
            color: white;
            border-color: #007bff;
        }

        .results-tab-content {
            display: none;
            margin-top: 20px;
        }

        .results-tab-content.active {
            display: block;
        }

        .categories-detailed {
            max-width: 100%;
        }

        .category-detail-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #dee2e6;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .category-detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e9ecef;
        }

        .category-score-large {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
        }

        .stats-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .progress-bar-large {
            height: 12px;
            background-color: #e9ecef;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 15px;
        }

        .category-questions ul {
            list-style: none;
            padding: 0;
        }

        .category-questions li {
            padding: 8px 12px;
            margin: 5px 0;
            border-radius: 6px;
            background: #f8f9fa;
        }

        .category-questions li.correct {
            background: #d4edda;
            color: #155724;
        }

        .category-questions li.incorrect {
            background: #f8d7da;
            color: #721c24;
        }

        .progress-detailed {
            max-width: 100%;
        }

        .overall-stats {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .improvement-areas {
            background: #fff3cd;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
        }

        .improvement-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }

        .improvement-tag {
            background: #ffc107;
            color: #212529;
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 12px;
        }

        .module-progress {
            background: white;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #dee2e6;
        }

        .module-progress-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            background: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #dee2e6;
        }

        .module-name {
            font-weight: bold;
            color: #495057;
        }

        .module-stats {
            display: flex;
            gap: 15px;
            font-size: 14px;
        }

        .module-stats span {
            padding: 4px 8px;
            border-radius: 12px;
            background: #e9ecef;
        }

        .improvement {
            background: #d4edda !important;
            color: #155724 !important;
        }

        .decline {
            background: #f8d7da !important;
            color: #721c24 !important;
        }

        .stable {
            background: #d1ecf1 !important;
            color: #0c5460 !important;
        }

        @media (max-width: 768px) {
            .results-navigation {
                flex-direction: column;
                align-items: center;
            }
            
            .nav-btn {
                width: 100%;
                max-width: 250px;
            }
            
            .module-progress-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .module-stats {
                flex-wrap: wrap;
            }
        }
        </style>
    `);
}
