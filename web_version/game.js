// IT-Sicherheit Lernspiel - JavaScript Version
class ITSecurityGame {
    constructor() {
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.currentPhase = 0;
        this.selectedAnswer = null;
        this.showingFeedback = false;
        
        this.phases = [
            {
                name: "IT-Systeme und Netzwerktechnik",
                title: "Phase 1: IT-Infrastruktur",
                icon: "🖥️",
                color: "#1565C0"
            },
            {
                name: "Wirtschafts- und Geschäftsprozesse", 
                title: "Phase 2: Kundenberatung",
                icon: "💼",
                color: "#558B2F"
            },
            {
                name: "IT-Sicherheit und Datenschutz",
                title: "Phase 3: IT-Sicherheit", 
                icon: "🔒",
                color: "#D32F2F"
            }
        ];

        this.questions = [
            // Phase 1: IT-Systeme und Netzwerktechnik
            {
                phase: 0,
                question: "Dein Chef fragt dich nach der wichtigsten Komponente, die temporäre Daten speichert, während der PC läuft. Welche nennst du?",
                options: ["SSD", "HDD", "RAM", "CPU"],
                correct: 2,
                feedback: {
                    correct: "✅ Perfekt! RAM ist der Arbeitsspeicher für temporäre Daten. Dein Chef nickt anerkennend.",
                    wrong: "❌ Das ist leider falsch. RAM ist der Arbeitsspeicher. Das System wird langsamer laufen."
                }
            },
            {
                phase: 0,
                question: "Die Rechner der neuen Abteilung müssen ins Netzwerk. Welches Protokoll hilft, ihnen automatisch IP-Adressen zuzuweisen?",
                options: ["HTTP", "FTP", "DHCP", "DNS"],
                correct: 2,
                feedback: {
                    correct: "✅ Richtig! DHCP weist automatisch IP-Adressen zu. Alle PCs sind blitzschnell online.",
                    wrong: "❌ Falsch! Die Rechner bekommen keine IP-Adressen. Das kostet wertvolle Zeit."
                }
            },
            {
                phase: 0,
                question: "Ein Kollege beschwert sich, dass er einen Server nicht erreichen kann. Welchen Kommandozeilenbefehl nutzt du, um die Verbindung zu testen?",
                options: ["ipconfig", "traceroute", "ping", "netstat"],
                correct: 2,
                feedback: {
                    correct: "✅ Exzellent! Ping testet die Verbindung. Der Server antwortet wie erwartet.",
                    wrong: "❌ Das ist nicht richtig. Ping wäre der korrekte Befehl gewesen. Das Problem bleibt ungelöst."
                }
            },

            // Phase 2: Wirtschafts- und Geschäftsprozesse
            {
                phase: 1,
                question: "Der Kunde wünscht eine maßgeschneiderte Software. Welche Vertragsart schlägst du vor, um die Lieferung des fertigen Produkts zu garantieren?",
                options: ["Kaufvertrag", "Dienstvertrag", "Werkvertrag", "Mietvertrag"],
                correct: 2,
                feedback: {
                    correct: "✅ Hervorragend! Der Werkvertrag garantiert die Fertigstellung. Der Kunde ist einverstanden.",
                    wrong: "❌ Der Kunde ist verunsichert. Ein Werkvertrag wäre verbindlicher gewesen. Das verzögert den Start."
                }
            },
            {
                phase: 1,
                question: "Du triffst den Kunden, um seine genauen Wünsche zu verstehen. Wie nennst du diese Phase des Projekts?",
                options: ["Angebotserstellung", "Bedarfsanalyse", "Marktanalyse", "Teambesprechung"],
                correct: 1,
                feedback: {
                    correct: "✅ Perfekt! Die Bedarfsanalyse war erfolgreich. Alle Anforderungen sind dokumentiert.",
                    wrong: "❌ Das ist nicht korrekt. Ohne klare Bedarfsanalyse sind die Wünsche unklar. Der Projektstart wird verschoben."
                }
            },
            {
                phase: 1,
                question: "Ein Kunde möchte agile Entwicklung. Welche Methodik ist dafür am besten geeignet?",
                options: ["Wasserfall", "V-Modell", "Scrum", "Spiralmodell"],
                correct: 2,
                feedback: {
                    correct: "✅ Ausgezeichnet! Scrum ist perfekt für agile Entwicklung. Der Kunde ist begeistert.",
                    wrong: "❌ Das ist nicht die beste Wahl für agile Entwicklung. Scrum wäre besser gewesen."
                }
            },

            // Phase 3: IT-Sicherheit und Datenschutz
            {
                phase: 2,
                question: "Der Kunde fragt, wie die Daten vor unbefugtem Zugriff geschützt werden. Welche der drei Schutzziele der Informationssicherheit ist hier am wichtigsten?",
                options: ["Verfügbarkeit", "Vertraulichkeit", "Integrität", "Authentizität"],
                correct: 1,
                feedback: {
                    correct: "🛡️ Exzellent! Vertraulichkeit schützt vor unbefugtem Zugriff. Der Kunde fühlt sich sicherer.",
                    wrong: "⚠️ Das ist nicht optimal. Vertraulichkeit wäre das richtige Schutzziel gewesen."
                }
            },
            {
                phase: 2,
                question: "Um das Netzwerk des Kunden vor externen Angriffen zu schützen, empfiehlst du ein spezielles Tool. Welches ist das?",
                options: ["Virenschutz", "Firewall", "Festplattenverschlüsselung", "VPN"],
                correct: 1,
                feedback: {
                    correct: "🛡️ Perfekt! Die Firewall ist konfiguriert. Die erste große Sicherheitshürde ist genommen.",
                    wrong: "⚠️ Das Netzwerk bleibt anfällig. Eine Firewall wäre der bessere Schutz gewesen."
                }
            },
            {
                phase: 2,
                question: "Ein Mitarbeiter erhält eine verdächtige E-Mail mit einem Anhang. Welche Malware-Art versteckt sich häufig in Office-Dokumenten?",
                options: ["Trojaner", "Wurm", "Makro-Virus", "Rootkit"],
                correct: 2,
                feedback: {
                    correct: "🛡️ Richtig! Makro-Viren in Office-Dokumenten sind eine häufige Bedrohung. Gut erkannt!",
                    wrong: "⚠️ Das ist nicht die häufigste Bedrohung in Office-Dokumenten. Makro-Viren wären korrekt gewesen."
                }
            }
        ];

        this.init();
    }

    init() {
        this.updateDisplay();
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    getCurrentPhase() {
        const question = this.getCurrentQuestion();
        return this.phases[question.phase];
    }

    updateDisplay() {
        const question = this.getCurrentQuestion();
        const phase = this.getCurrentPhase();

        // Phase-Indikator aktualisieren
        document.getElementById('phaseIndicator').textContent = phase.title;
        document.getElementById('phaseIndicator').style.background = phase.color;

        // Frage-Icon aktualisieren
        document.getElementById('questionImage').textContent = phase.icon;
        document.getElementById('questionImage').style.background = `linear-gradient(45deg, ${phase.color}, ${this.lightenColor(phase.color, 30)})`;

        // Frage-Text
        document.getElementById('questionText').textContent = question.question;

        // Optionen erstellen
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.onclick = () => this.selectOption(index);
            
            optionDiv.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div>${option}</div>
            `;
            
            optionsContainer.appendChild(optionDiv);
        });

        // Statistiken aktualisieren
        document.getElementById('correctCount').textContent = this.correctAnswers;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;

        // Fortschrittsbalken
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';

        // Button zurücksetzen
        this.resetButton();
    }

    selectOption(index) {
        if (this.showingFeedback) return;

        // Alle Optionen zurücksetzen
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Gewählte Option markieren
        document.querySelectorAll('.option')[index].classList.add('selected');
        this.selectedAnswer = index;

        // Button aktivieren
        document.getElementById('actionButton').disabled = false;
        document.getElementById('actionButton').textContent = 'Antwort bestätigen';
    }

    handleAnswer() {
        if (this.showingFeedback) {
            this.nextQuestion();
        } else {
            this.showFeedback();
        }
    }

    showFeedback() {
        if (this.selectedAnswer === null) return;

        this.showingFeedback = true;
        const question = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === question.correct;

        // Optionen färben
        document.querySelectorAll('.option').forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('wrong');
            }
        });

        // Feedback anzeigen
        const feedbackDiv = document.getElementById('feedback');
        feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 10px;">
                ${isCorrect ? '✅ Richtige Entscheidung!' : '❌ Falsche Entscheidung'}
            </div>
            <div>${isCorrect ? question.feedback.correct : question.feedback.wrong}</div>
        `;
        feedbackDiv.classList.remove('hidden');

        if (isCorrect) {
            this.correctAnswers++;
            document.getElementById('correctCount').textContent = this.correctAnswers;
        }

        // Button anpassen
        document.getElementById('actionButton').textContent = 'Weiter';
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.resetQuestion();
            this.updateDisplay();
        }
    }

    resetQuestion() {
        this.selectedAnswer = null;
        this.showingFeedback = false;
        document.getElementById('feedback').classList.add('hidden');
    }

    resetButton() {
        const button = document.getElementById('actionButton');
        button.disabled = true;
        button.textContent = 'Antwort wählen';
    }

    showResults() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('resultsScreen').classList.remove('hidden');

        const accuracy = (this.correctAnswers / this.questions.length) * 100;
        const errors = this.questions.length - this.correctAnswers;

        // Ergebnisse anzeigen
        document.getElementById('finalCorrect').textContent = this.correctAnswers;
        document.getElementById('finalAccuracy').textContent = Math.round(accuracy) + '%';
        document.getElementById('finalErrors').textContent = errors;

        // Bewertung
        let performance, message, trophy;
        if (accuracy >= 90) {
            performance = 'Hervorragend!';
            message = '🏆 Perfekt! Du hast fast alle Aufgaben gemeistert. Dein Weg zum Fachinformatiker ist geebnet!';
            trophy = '🏆';
        } else if (accuracy >= 80) {
            performance = 'Sehr gut!';
            message = '✅ Sehr gut! Du hast die meisten Herausforderungen erfolgreich bewältigt. Du bist auf dem richtigen Weg!';
            trophy = '🥇';
        } else if (accuracy >= 70) {
            performance = 'Gut!';
            message = '👍 Gut gemacht! Es gibt noch Raum für Verbesserungen, aber du bist auf einem guten Weg.';
            trophy = '🥉';
        } else {
            performance = 'Übung macht den Meister!';
            message = '⚠️ Noch nicht ganz! Einige Bereiche brauchen mehr Übung. Versuche es noch einmal!';
            trophy = '📚';
        }

        document.getElementById('finalScore').textContent = performance;
        document.getElementById('performanceMessage').textContent = message;
        document.getElementById('trophyIcon').textContent = trophy;
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
}

// Globale Funktionen
let game;

function startGame() {
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    game = new ITSecurityGame();
}

function handleAnswer() {
    game.handleAnswer();
}

function restartGame() {
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('homeScreen').classList.remove('hidden');
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    console.log('IT-Sicherheit Lernspiel geladen!');
});
