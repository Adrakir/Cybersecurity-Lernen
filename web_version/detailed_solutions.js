// Erweiterte Lösungsanzeige für detaillierte Quiz-Auswertung
class DetailedSolutionsEngine {
    constructor(statisticsEngine) {
        this.statisticsEngine = statisticsEngine;
    }

    showComprehensiveSolutions(containerId) {
        const container = document.getElementById(containerId);
        const result = this.statisticsEngine.finishQuiz();
        
        container.innerHTML = `
            <div class="detailed-solutions">
                <div class="solutions-header">
                    <h2>📚 Detaillierte Lösungen & Erklärungen</h2>
                    <div class="solutions-nav">
                        <button class="solution-tab active" onclick="showSolutionTab('all')">Alle Fragen</button>
                        <button class="solution-tab" onclick="showSolutionTab('wrong')">Falsche Antworten</button>
                        <button class="solution-tab" onclick="showSolutionTab('correct')">Richtige Antworten</button>
                        <button class="solution-tab" onclick="showSolutionTab('category')">Nach Kategorie</button>
                    </div>
                </div>

                <div id="solution-all" class="solution-content active">
                    <h3>📋 Alle Fragen mit Lösungen</h3>
                    ${this.renderAllQuestions(result.answers)}
                </div>

                <div id="solution-wrong" class="solution-content">
                    <h3>❌ Falsche Antworten - Zum Lernen</h3>
                    ${this.renderWrongAnswers(result.answers)}
                </div>

                <div id="solution-correct" class="solution-content">
                    <h3>✅ Richtige Antworten - Gut gemacht!</h3>
                    ${this.renderCorrectAnswers(result.answers)}
                </div>

                <div id="solution-category" class="solution-content">
                    <h3>📊 Lösungen nach Kategorien</h3>
                    ${this.renderByCategory(result.answers)}
                </div>

                <div class="solutions-actions">
                    <button class="btn btn-primary" onclick="printSolutions()">
                        🖨️ Lösungen drucken
                    </button>
                    <button class="btn btn-secondary" onclick="exportSolutionsPDF()">
                        📄 Als PDF exportieren
                    </button>
                    <button class="btn btn-info" onclick="createStudyPlan()">
                        📚 Lernplan erstellen
                    </button>
                </div>
            </div>
        `;
    }

    renderAllQuestions(answers) {
        return answers.map((answer, index) => `
            <div class="solution-question ${answer.isCorrect ? 'question-correct' : 'question-wrong'}">
                <div class="question-header">
                    <span class="question-number">Frage ${index + 1}</span>
                    <span class="question-result ${answer.isCorrect ? 'correct' : 'wrong'}">
                        ${answer.isCorrect ? '✅ Richtig' : '❌ Falsch'}
                    </span>
                    <span class="question-category">${answer.category}</span>
                    <span class="question-time">${Math.round(answer.timeSpent / 1000)}s</span>
                </div>
                
                <div class="question-text">
                    <h4>${answer.question}</h4>
                </div>
                
                <div class="answer-options">
                    ${this.renderAnswerOptions(answer)}
                </div>
                
                <div class="solution-explanation">
                    <h5>💡 Erklärung:</h5>
                    <p>${answer.explanation || 'Keine Erklärung verfügbar.'}</p>
                    ${this.renderAdditionalResources(answer.category)}
                </div>
                
                ${!answer.isCorrect ? `
                    <div class="improvement-tips">
                        <h5>📈 Verbesserungstipps:</h5>
                        ${this.getImprovementTips(answer.category)}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    renderWrongAnswers(answers) {
        const wrongAnswers = answers.filter(a => !a.isCorrect);
        
        if (wrongAnswers.length === 0) {
            return `
                <div class="no-wrong-answers">
                    <div class="celebration">🎉</div>
                    <h3>Perfekt! Alle Antworten waren richtig!</h3>
                    <p>Sie haben eine ausgezeichnete Leistung erbracht. Keine Nacharbeit nötig.</p>
                </div>
            `;
        }

        return `
            <div class="wrong-answers-summary">
                <div class="summary-box error">
                    <h4>📊 Zusammenfassung</h4>
                    <p>${wrongAnswers.length} von ${answers.length} Fragen waren falsch (${Math.round((wrongAnswers.length/answers.length)*100)}%)</p>
                    <p><strong>Empfehlung:</strong> Konzentrieren Sie sich auf diese Bereiche für die Nachbereitung.</p>
                </div>
            </div>
            ${wrongAnswers.map((answer, index) => `
                <div class="solution-question question-wrong priority-review">
                    <div class="question-header">
                        <span class="question-number">❌ Frage ${answers.indexOf(answer) + 1}</span>
                        <span class="question-category">${answer.category}</span>
                        <span class="priority-label">Nachlernen</span>
                    </div>
                    
                    <div class="question-text">
                        <h4>${answer.question}</h4>
                    </div>
                    
                    <div class="answer-analysis">
                        <div class="your-answer wrong">
                            <strong>Ihre Antwort:</strong> ${this.getAnswerText(answer, answer.userAnswer)} ❌
                        </div>
                        <div class="correct-answer">
                            <strong>Richtige Antwort:</strong> ${this.getAnswerText(answer, answer.correctAnswer)} ✅
                        </div>
                    </div>
                    
                    <div class="solution-explanation priority">
                        <h5>💡 Warum ist das so?</h5>
                        <p>${answer.explanation || 'Keine Erklärung verfügbar.'}</p>
                        
                        <div class="learning-resources">
                            <h6>📚 Zum Vertiefen:</h6>
                            ${this.renderLearningResources(answer.category)}
                        </div>
                    </div>
                    
                    <div class="memory-aids">
                        <h5>🧠 Merkhilfen:</h5>
                        ${this.getMemoryAids(answer.category, answer.question)}
                    </div>
                </div>
            `).join('')}
        `;
    }

    renderCorrectAnswers(answers) {
        const correctAnswers = answers.filter(a => a.isCorrect);
        
        return `
            <div class="correct-answers-summary">
                <div class="summary-box success">
                    <h4>🎯 Gut gemacht!</h4>
                    <p>${correctAnswers.length} von ${answers.length} Fragen richtig beantwortet!</p>
                </div>
            </div>
            ${correctAnswers.map((answer, index) => `
                <div class="solution-question question-correct">
                    <div class="question-header">
                        <span class="question-number">✅ Frage ${answers.indexOf(answer) + 1}</span>
                        <span class="question-category">${answer.category}</span>
                        <span class="time-badge fast-${answer.timeSpent < 10000 ? 'yes' : 'no'}">${Math.round(answer.timeSpent / 1000)}s</span>
                    </div>
                    
                    <div class="question-text">
                        <h4>${answer.question}</h4>
                    </div>
                    
                    <div class="correct-solution">
                        <strong>Ihre richtige Antwort:</strong> ${this.getAnswerText(answer, answer.correctAnswer)} ✅
                    </div>
                    
                    <div class="reinforcement">
                        <h5>🎯 Verstärkung:</h5>
                        <p>${answer.explanation || 'Gut erkannt!'}</p>
                        ${this.getReinforcementTips(answer.category)}
                    </div>
                </div>
            `).join('')}
        `;
    }

    renderByCategory(answers) {
        const categories = {};
        answers.forEach(answer => {
            const cat = answer.category;
            if (!categories[cat]) {
                categories[cat] = { correct: [], wrong: [], total: 0 };
            }
            categories[cat].total++;
            if (answer.isCorrect) {
                categories[cat].correct.push(answer);
            } else {
                categories[cat].wrong.push(answer);
            }
        });

        return Object.entries(categories).map(([category, data]) => {
            const percentage = Math.round((data.correct.length / data.total) * 100);
            const status = percentage >= 80 ? 'excellent' : percentage >= 70 ? 'good' : 'needs-work';
            
            return `
                <div class="category-solutions ${status}">
                    <div class="category-header-detailed">
                        <h4>📁 ${category}</h4>
                        <div class="category-performance">
                            <span class="performance-badge ${status}">
                                ${percentage}% (${data.correct.length}/${data.total})
                            </span>
                        </div>
                    </div>
                    
                    ${data.wrong.length > 0 ? `
                        <div class="category-wrong-answers">
                            <h5 class="wrong-header">❌ Zu wiederholen (${data.wrong.length})</h5>
                            ${data.wrong.map(answer => `
                                <div class="mini-solution wrong">
                                    <div class="mini-question">${answer.question}</div>
                                    <div class="mini-answer">
                                        <span class="wrong-choice">Ihre Wahl: ${this.getAnswerText(answer, answer.userAnswer)}</span>
                                        <span class="correct-choice">Richtig: ${this.getAnswerText(answer, answer.correctAnswer)}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${data.correct.length > 0 ? `
                        <div class="category-correct-answers">
                            <h5 class="correct-header">✅ Korrekt beantwortet (${data.correct.length})</h5>
                            <div class="correct-summary">
                                ${data.correct.map(answer => `
                                    <span class="correct-topic">${this.getShortQuestion(answer.question)}</span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="category-recommendations">
                        <h5>💡 Empfehlungen für ${category}:</h5>
                        ${this.getCategoryRecommendations(category, percentage)}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAnswerOptions(answer) {
        // Annahme: answer.options existiert (muss von der Quiz-Engine übertragen werden)
        const options = ['A', 'B', 'C', 'D']; // Fallback
        return options.map((letter, index) => `
            <div class="answer-option-review ${index === answer.correctAnswer ? 'correct-option' : ''} ${index === answer.userAnswer && !answer.isCorrect ? 'wrong-option' : ''}">
                <span class="option-letter">${letter})</span>
                <span class="option-text">Option ${index + 1}</span>
                ${index === answer.correctAnswer ? '<span class="correct-indicator">✅ Richtig</span>' : ''}
                ${index === answer.userAnswer && !answer.isCorrect ? '<span class="wrong-indicator">❌ Ihre Wahl</span>' : ''}
            </div>
        `).join('');
    }

    getAnswerText(answer, answerIndex) {
        const letters = ['A', 'B', 'C', 'D'];
        return `${letters[answerIndex]}) Option ${answerIndex + 1}`;
    }

    getShortQuestion(question) {
        return question.length > 50 ? question.substring(0, 50) + '...' : question;
    }

    renderAdditionalResources(category) {
        const resources = {
            'CIA-Triade': [
                '📖 BSI IT-Grundschutz-Kompendium',
                '🌐 NIST Cybersecurity Framework',
                '📚 ISO 27001 Standard'
            ],
            'RBAC': [
                '📖 NIST RBAC Dokumentation',
                '🌐 Microsoft Identity Plattform',
                '📚 OAuth 2.0 Spezifikation'
            ],
            'Firewall': [
                '📖 NIST Firewall Richtlinien',
                '🌐 Cisco Security Dokumentation',
                '📚 pfSense Handbuch'
            ],
            'default': [
                '📖 IT-Sicherheit Grundlagen',
                '🌐 BSI für Bürger',
                '📚 Cybersecurity Handbuch'
            ]
        };

        const categoryResources = resources[category] || resources.default;
        return `
            <div class="additional-resources">
                <h6>📚 Weiterführende Quellen:</h6>
                <ul>
                    ${categoryResources.map(resource => `<li>${resource}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    renderLearningResources(category) {
        return `
            <ul class="learning-list">
                <li>📖 Fachbuch zu ${category} lesen</li>
                <li>🎥 Online-Video-Tutorial ansehen</li>
                <li>💻 Praktische Übungen durchführen</li>
                <li>👥 Mit Kollegen diskutieren</li>
            </ul>
        `;
    }

    getImprovementTips(category) {
        const tips = {
            'CIA-Triade': `
                <ul>
                    <li>🔐 Merkhilfe: <strong>C</strong>onfidentiality = Vertraulichkeit</li>
                    <li>🔍 <strong>I</strong>ntegrity = Integrität (Unverändertheit)</li>
                    <li>🔄 <strong>A</strong>vailability = Verfügbarkeit</li>
                    <li>💡 Tipp: Jeder Aspekt ist gleich wichtig!</li>
                </ul>
            `,
            'RBAC': `
                <ul>
                    <li>👤 User → 🎭 Role → 🔐 Permission (Hierarchie merken)</li>
                    <li>📊 Principle of Least Privilege anwenden</li>
                    <li>🔄 Regelmäßige Access Reviews durchführen</li>
                </ul>
            `,
            'default': `
                <ul>
                    <li>📚 Grundlagen nochmals studieren</li>
                    <li>🎯 Praktische Beispiele suchen</li>
                    <li>🧠 Eselsbrücken entwickeln</li>
                </ul>
            `
        };
        return tips[category] || tips.default;
    }

    getMemoryAids(category, question) {
        const aids = {
            'CIA-Triade': '🔐🔍🔄 = Confidentiality, Integrity, Availability',
            'RBAC': '👤→🎭→🔐 = User-Role-Permission Kette',
            'Firewall': '🚪🔒 = Digitaler Türsteher',
            'default': '🧠 Erstellen Sie eigene Eselsbrücken!'
        };
        return `<p>${aids[category] || aids.default}</p>`;
    }

    getReinforcementTips(category) {
        return `
            <div class="reinforcement-tips">
                <p>🎯 Weiter so! Ihr Wissen in <strong>${category}</strong> ist solide.</p>
                <p>💡 Tipp: Helfen Sie anderen bei diesem Thema - Lehren festigt das Wissen!</p>
            </div>
        `;
    }

    getCategoryRecommendations(category, percentage) {
        if (percentage >= 90) {
            return `
                <div class="recommendation excellent">
                    🏆 <strong>Exzellent!</strong> Sie beherrschen ${category} sehr gut.
                    <br>💡 Empfehlung: Werden Sie Mentor für andere in diesem Bereich.
                </div>
            `;
        } else if (percentage >= 70) {
            return `
                <div class="recommendation good">
                    👍 <strong>Gut!</strong> Solide Kenntnisse in ${category}.
                    <br>💡 Empfehlung: Vertiefen Sie die Details durch praktische Anwendung.
                </div>
            `;
        } else {
            return `
                <div class="recommendation needs-work">
                    📚 <strong>Nachholbedarf</strong> in ${category}.
                    <br>💡 Empfehlung: Grundlagen wiederholen und mehr Zeit für diesen Bereich einplanen.
                </div>
            `;
        }
    }
}

// Globale Funktionen für Navigation
window.showSolutionTab = function(tabName) {
    // Alle Tabs deaktivieren
    document.querySelectorAll('.solution-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.solution-content').forEach(content => content.classList.remove('active'));
    
    // Ausgewählten Tab aktivieren
    document.querySelector(`[onclick="showSolutionTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`solution-${tabName}`).classList.add('active');
};

window.printSolutions = function() {
    window.print();
};

window.exportSolutionsPDF = function() {
    // Vereinfachte PDF-Export Simulation
    alert('PDF-Export würde hier implementiert werden. Nutzen Sie vorerst "Drucken > Als PDF speichern".');
};

window.createStudyPlan = function() {
    const weakAreas = engine.statisticsEngine.getWeakAreas();
    if (weakAreas.length === 0) {
        alert('🎉 Glückwunsch! Keine Schwachstellen gefunden. Kein Lernplan nötig.');
        return;
    }
    
    const studyPlan = `
📚 PERSONALISIERTER LERNPLAN

${weakAreas.map((area, index) => `
${index + 1}. 📍 PRIORITÄT ${index === 0 ? 'HOCH' : 'MITTEL'}: ${area.category}
   Aktuell: ${area.percentage}% | Ziel: 80%+
   
   📖 Lernschritte:
   - Grundlagen zu ${area.category} wiederholen (2-3h)
   - Praktische Übungen durchführen (1-2h)
   - Quiz wiederholen bis 80%+ erreicht
   
   🎯 Falsche Fragen nochmals anschauen:
   ${area.wrongQuestions.map(q => `   • ${q.question.substring(0, 60)}...`).join('\n')}
`).join('\n')}

⏰ Geschätzter Zeitaufwand: ${weakAreas.length * 3}-${weakAreas.length * 5} Stunden
🎯 Ziel: Alle Bereiche auf 80%+ bringen
    `;
    
    // In neuem Fenster anzeigen
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <pre style="font-family: monospace; padding: 20px; line-height: 1.5;">
        ${studyPlan}
        </pre>
    `);
};

// CSS Styles für detaillierte Lösungen
const detailedSolutionsStyles = `
<style>
.detailed-solutions {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.solutions-nav {
    display: flex;
    gap: 10px;
    margin: 20px 0;
    border-bottom: 2px solid #dee2e6;
}

.solution-tab {
    padding: 10px 20px;
    border: none;
    background: #f8f9fa;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.solution-tab.active {
    background: #007bff;
    color: white;
}

.solution-content {
    display: none;
}

.solution-content.active {
    display: block;
}

.solution-question {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.question-correct {
    border-left: 5px solid #28a745;
}

.question-wrong {
    border-left: 5px solid #dc3545;
}

.priority-review {
    background: #fff5f5;
    border: 2px solid #fed7d7;
}

.question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
}

.question-result.correct {
    color: #28a745;
    font-weight: bold;
}

.question-result.wrong {
    color: #dc3545;
    font-weight: bold;
}

.question-category {
    background: #e3f2fd;
    color: #1976d2;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
}

.question-time {
    background: #f0f0f0;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
}

.answer-options {
    margin: 15px 0;
}

.answer-option-review {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 6px;
    background: #f8f9fa;
}

.correct-option {
    background: #d4edda;
    border: 1px solid #c3e6cb;
}

.wrong-option {
    background: #f8d7da;
    border: 1px solid #f1aeb5;
}

.option-letter {
    font-weight: bold;
    margin-right: 10px;
}

.correct-indicator, .wrong-indicator {
    margin-left: auto;
    font-size: 12px;
    font-weight: bold;
}

.solution-explanation {
    background: #e8f4fd;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
}

.improvement-tips {
    background: #fff3cd;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
}

.memory-aids {
    background: #d1ecf1;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
}

.no-wrong-answers {
    text-align: center;
    padding: 40px;
    background: #d4edda;
    border-radius: 12px;
    color: #155724;
}

.celebration {
    font-size: 48px;
    margin-bottom: 20px;
}

.wrong-answers-summary, .correct-answers-summary {
    margin-bottom: 30px;
}

.summary-box {
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
}

.summary-box.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f1aeb5;
}

.summary-box.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.answer-analysis {
    margin: 15px 0;
}

.your-answer.wrong {
    color: #dc3545;
    background: #f8d7da;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 8px;
}

.correct-answer {
    color: #28a745;
    background: #d4edda;
    padding: 8px 12px;
    border-radius: 6px;
}

.learning-resources {
    background: #e8f4fd;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
}

.learning-list {
    list-style: none;
    padding: 0;
}

.learning-list li {
    padding: 5px 0;
}

.category-solutions {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #dee2e6;
}

.category-solutions.excellent {
    border-left: 5px solid #28a745;
}

.category-solutions.good {
    border-left: 5px solid #ffc107;
}

.category-solutions.needs-work {
    border-left: 5px solid #dc3545;
}

.category-header-detailed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e9ecef;
}

.performance-badge {
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
}

.performance-badge.excellent {
    background: #28a745;
    color: white;
}

.performance-badge.good {
    background: #ffc107;
    color: #212529;
}

.performance-badge.needs-work {
    background: #dc3545;
    color: white;
}

.mini-solution {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 6px;
    margin: 8px 0;
}

.mini-solution.wrong {
    border-left: 3px solid #dc3545;
}

.mini-question {
    font-weight: 500;
    margin-bottom: 5px;
}

.mini-answer {
    font-size: 14px;
}

.wrong-choice {
    color: #dc3545;
    display: block;
}

.correct-choice {
    color: #28a745;
    display: block;
}

.correct-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.correct-topic {
    background: #d4edda;
    color: #155724;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
}

.recommendation {
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
}

.recommendation.excellent {
    background: #d4edda;
    color: #155724;
}

.recommendation.good {
    background: #fff3cd;
    color: #856404;
}

.recommendation.needs-work {
    background: #f8d7da;
    color: #721c24;
}

.solutions-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px solid #dee2e6;
}

.reinforcement-tips {
    background: #d1ecf1;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
}

.time-badge.fast-yes {
    background: #28a745;
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 11px;
}

.time-badge.fast-no {
    background: #6c757d;
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 11px;
}

.priority-label {
    background: #dc3545;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: bold;
}

@media (max-width: 768px) {
    .solutions-nav {
        flex-wrap: wrap;
    }
    
    .question-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    
    .solutions-actions {
        flex-direction: column;
        align-items: center;
    }
}

@media print {
    .solutions-nav, .solutions-actions {
        display: none;
    }
    
    .solution-question {
        break-inside: avoid;
        margin-bottom: 30px;
    }
}
</style>
`;

// Styles hinzufügen
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', detailedSolutionsStyles);
}

// Export für globale Nutzung
window.DetailedSolutionsEngine = DetailedSolutionsEngine;
