// IT-Sicherheit Prüfungssimulation - Engine
class ExamEngine {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.timeRemaining = 45 * 60; // 45 Minuten in Sekunden
        this.timer = null;
        this.participantName = '';
        this.startTime = null;
    }

    // Prüfung initialisieren
    initializeExam(name) {
        this.participantName = name;
        this.currentQuestions = this.selectRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = new Array(this.currentQuestions.length).fill(null);
        this.timeRemaining = 45 * 60;
        this.startTime = new Date();
        
        this.showExamInterface();
        this.startTimer();
        this.displayQuestion();
    }

    // 12 zufällige Fragen aus allen Kategorien auswählen
    selectRandomQuestions() {
        const allQuestions = [];
        const categories = Object.keys(examData.categories);
        
        // Pro Kategorie 6 Fragen zufällig auswählen (6 x 2 = 12 Fragen)
        categories.forEach(categoryKey => {
            const categoryQuestions = examData.categories[categoryKey].questions;
            const shuffled = this.shuffleArray([...categoryQuestions]);
            const selected = shuffled.slice(0, 6);
            allQuestions.push(...selected);
        });
        
        return this.shuffleArray(allQuestions);
    }

    // Array mischen (Fisher-Yates Algorithmus)
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Timer starten
    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.finishExam();
            }
        }, 1000);
    }

    // Timer-Anzeige aktualisieren
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timerElement = document.getElementById('timer');
        
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Warnung bei weniger als 5 Minuten
            if (this.timeRemaining < 300) {
                timerElement.style.color = '#e74c3c';
            }
        }
    }

    // Aktuelle Frage anzeigen
    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        document.getElementById('question-number').textContent = 
            `Frage ${this.currentQuestionIndex + 1} von ${this.currentQuestions.length}`;
        document.getElementById('question-text').textContent = question.question;
        
        // Kategorie und Grafik anzeigen
        const categoryBadge = document.getElementById('category-badge');
        const questionImage = document.getElementById('question-image');
        
        if (question.id.startsWith('net_')) {
            categoryBadge.textContent = '🌐 Netzwerktechnik';
            questionImage.innerHTML = '🌐<br><div style="font-size:0.3em; margin-top:10px;">Router & Switches</div>';
        } else if (question.id.startsWith('sec_')) {
            categoryBadge.textContent = '🔒 IT-Sicherheit';
            questionImage.innerHTML = '🔒<br><div style="font-size:0.3em; margin-top:10px;">Schutz & Verschlüsselung</div>';
        }
        
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.innerHTML = `
                <input type="radio" id="answer-${index}" name="answer" value="${index}" 
                       ${this.answers[this.currentQuestionIndex] === index ? 'checked' : ''}>
                <label for="answer-${index}" style="cursor: pointer; padding: 10px; display: block;">${answer}</label>
            `;
            
            const radioInput = answerDiv.querySelector('input[type="radio"]');
            radioInput.addEventListener('change', () => {
                this.answers[this.currentQuestionIndex] = index;
                this.updateProgress();
            });
            
            answersContainer.appendChild(answerDiv);
        });
        
        this.updateProgress();
        this.updateNavigationButtons();
    }

    // Fortschritt aktualisieren
    updateProgress() {
        const answered = this.answers.filter(a => a !== null).length;
        const progress = (answered / this.currentQuestions.length) * 100;
        
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = 
            `${answered} von ${this.currentQuestions.length} Fragen beantwortet`;
    }

    // Navigation zur nächsten Frage
    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    // Navigation zur vorherigen Frage
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    // Navigationsbuttons aktualisieren
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        nextBtn.disabled = this.currentQuestionIndex === this.currentQuestions.length - 1;
        
        if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
        }
    }

    // Prüfung beenden
    finishExam() {
        clearInterval(this.timer);
        
        const score = this.calculateScore();
        const endTime = new Date();
        const duration = Math.round((endTime - this.startTime) / 1000 / 60);
        
        this.showResults(score, duration);
    }

    // Ergebnis berechnen
    calculateScore() {
        let correct = 0;
        
        this.currentQuestions.forEach((question, index) => {
            if (this.answers[index] === question.correct) {
                correct++;
            }
        });
        
        return {
            correct: correct,
            total: this.currentQuestions.length,
            percentage: Math.round((correct / this.currentQuestions.length) * 100)
        };
    }

    // Ergebnisse anzeigen
    showResults(score, duration) {
        document.getElementById('exam-screen').style.display = 'none';
        document.getElementById('results-screen').style.display = 'block';
        
        document.getElementById('final-score').textContent = 
            `${score.correct} von ${score.total} Fragen richtig (${score.percentage}%)`;
        document.getElementById('exam-duration').textContent = `${duration} Minuten`;
        
        const resultMessage = document.getElementById('result-message');
        if (score.percentage >= 95) {
            resultMessage.innerHTML = '🎉 Ausgezeichnet! Sie haben die Prüfung mit Bravour bestanden!';
            resultMessage.className = 'result-excellent';
            this.showCertificate(score, duration);
        } else if (score.percentage >= 80) {
            resultMessage.innerHTML = '✅ Gut gemacht! Sie haben die Prüfung bestanden.';
            resultMessage.className = 'result-good';
        } else {
            resultMessage.innerHTML = '❌ Leider nicht bestanden. Versuchen Sie es erneut.';
            resultMessage.className = 'result-failed';
        }
    }

    // Zertifikat anzeigen (bei 95%+ Punkten)
    showCertificate(score, duration) {
        const certificateDiv = document.getElementById('certificate');
        certificateDiv.style.display = 'block';
        certificateDiv.innerHTML = `
            <h3>🏆 Zertifikat</h3>
            <p>Hiermit wird bestätigt, dass</p>
            <h4>${this.participantName}</h4>
            <p>die IT-Sicherheit Prüfung erfolgreich absolviert hat</p>
            <p>Ergebnis: ${score.percentage}% (${score.correct}/${score.total})</p>
            <p>Datum: ${new Date().toLocaleDateString('de-DE')}</p>
        `;
    }

    // Prüfungsinterface anzeigen
    showExamInterface() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('exam-screen').style.display = 'block';
        
        // Namen in der Prüfung anzeigen
        const displayNameElement = document.getElementById('display-name');
        if (displayNameElement) {
            displayNameElement.textContent = this.participantName;
        }
    }

    // Neue Prüfung starten
    restartExam() {
        location.reload();
    }
}

// Globale Instanz erstellen
const examEngine = new ExamEngine();
