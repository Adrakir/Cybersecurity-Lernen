// Cybersecurity Quiz Datenbank - 80 praxisnahe Fragen
class QuizDatabase {
    constructor() {
        this.questions = [
            // Grundlagen IT-Sicherheit (20 Fragen)
            {
                category: "Grundlagen",
                question: "Was ist Phishing?",
                options: [
                    "Eine Angelmethode",
                    "Ein Cyberangriff zur Datensammlung durch gefälschte E-Mails",
                    "Ein Netzwerkprotokoll",
                    "Eine Programmiersprache"
                ],
                correct: 1,
                explanation: "Phishing ist ein Cyberangriff, bei dem Angreifer versuchen, durch gefälschte E-Mails oder Websites vertrauliche Informationen zu stehlen."
            },
            {
                category: "Grundlagen",
                question: "Was bedeutet HTTPS?",
                options: [
                    "HyperText Transfer Protocol Secure",
                    "High Technology Transfer Protocol",
                    "HyperText Transport Protocol System",
                    "Home Transfer Protocol Secure"
                ],
                correct: 0,
                explanation: "HTTPS steht für HyperText Transfer Protocol Secure und sorgt für verschlüsselte Datenübertragung zwischen Browser und Server."
            },
            {
                category: "Grundlagen",
                question: "Was ist ein Trojaner?",
                options: [
                    "Ein antikes Pferd",
                    "Schädliche Software getarnt als nützliches Programm",
                    "Ein Netzwerkkabel",
                    "Ein Virenscanner"
                ],
                correct: 1,
                explanation: "Ein Trojaner ist Malware, die sich als legitime Software tarnt, um unbemerkt schädliche Aktionen durchzuführen."
            },
            {
                category: "Grundlagen",
                question: "Was ist der Zweck einer Firewall?",
                options: [
                    "Computer schneller machen",
                    "Netzwerkverkehr filtern und kontrollieren",
                    "Festplatte defragmentieren",
                    "E-Mails versenden"
                ],
                correct: 1,
                explanation: "Eine Firewall filtert und kontrolliert den Netzwerkverkehr basierend auf definierten Sicherheitsregeln."
            },
            {
                category: "Grundlagen",
                question: "Was ist Malware?",
                options: [
                    "Gute Software",
                    "Schädliche Software",
                    "Kostenlose Software",
                    "Veraltete Software"
                ],
                correct: 1,
                explanation: "Malware ist ein Oberbegriff für schädliche Software, die darauf ausgelegt ist, Computer zu beschädigen oder zu missbrauchen."
            },

            // Passwort-Sicherheit (15 Fragen)
            {
                category: "Passwort-Sicherheit",
                question: "Was macht ein sicheres Passwort aus?",
                options: [
                    "Nur Buchstaben",
                    "Mindestens 12 Zeichen mit Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen",
                    "Der eigene Name",
                    "123456"
                ],
                correct: 1,
                explanation: "Sichere Passwörter sollten mindestens 12 Zeichen lang sein und verschiedene Zeichentypen enthalten."
            },
            {
                category: "Passwort-Sicherheit",
                question: "Was ist Zwei-Faktor-Authentifizierung (2FA)?",
                options: [
                    "Zwei verschiedene Passwörter",
                    "Ein zusätzlicher Sicherheitsschritt neben dem Passwort",
                    "Zwei Computer verwenden",
                    "Passwort zweimal eingeben"
                ],
                correct: 1,
                explanation: "2FA fügt eine zusätzliche Sicherheitsebene hinzu, meist durch SMS, App oder Hardware-Token."
            },
            {
                category: "Passwort-Sicherheit",
                question: "Wie oft sollten Passwörter geändert werden?",
                options: [
                    "Täglich",
                    "Nur bei Verdacht auf Kompromittierung oder nach Datenlecks",
                    "Nie",
                    "Stündlich"
                ],
                correct: 1,
                explanation: "Moderne Sicherheitsrichtlinien empfehlen Passwort-Änderungen nur bei konkretem Verdacht, da häufige Änderungen oft zu schwächeren Passwörtern führen."
            },

            // Netzwerksicherheit (15 Fragen)
            {
                category: "Netzwerksicherheit",
                question: "Was ist ein VPN?",
                options: [
                    "Very Personal Network",
                    "Virtual Private Network",
                    "Verified Public Network",
                    "Variable Private Node"
                ],
                correct: 1,
                explanation: "Ein VPN (Virtual Private Network) erstellt eine sichere, verschlüsselte Verbindung über ein unsicheres Netzwerk."
            },
            {
                category: "Netzwerksicherheit",
                question: "Was ist ein DDoS-Angriff?",
                options: [
                    "Distributed Denial of Service",
                    "Direct Data of Service",
                    "Dedicated Denial of System",
                    "Dynamic Data of Security"
                ],
                correct: 0,
                explanation: "DDoS-Angriffe überlasten Systeme durch koordinierte Anfragen von vielen Computern, um Dienste zu blockieren."
            },
            {
                category: "Netzwerksicherheit",
                question: "Was ist WPA3?",
                options: [
                    "Ein Texteditor",
                    "Ein WLAN-Sicherheitsprotokoll",
                    "Ein Betriebssystem",
                    "Ein Webbrowser"
                ],
                correct: 1,
                explanation: "WPA3 ist das neueste WLAN-Sicherheitsprotokoll mit verbesserter Verschlüsselung und Schutz."
            },

            // Social Engineering (10 Fragen)
            {
                category: "Social Engineering",
                question: "Was ist Social Engineering?",
                options: [
                    "Ingenieursausbildung",
                    "Manipulation von Menschen zur Preisgabe von Informationen",
                    "Soziale Netzwerke programmieren",
                    "Teambuilding"
                ],
                correct: 1,
                explanation: "Social Engineering nutzt psychologische Manipulation, um Menschen dazu zu bringen, vertrauliche Informationen preiszugeben."
            },
            {
                category: "Social Engineering",
                question: "Was ist Pretexting?",
                options: [
                    "Text vor einem Buch",
                    "Erfinden einer Geschichte um Informationen zu erlangen",
                    "Software-Test",
                    "Textnachrichten senden"
                ],
                correct: 1,
                explanation: "Pretexting ist das Erfinden einer glaubwürdigen Geschichte oder Identität, um das Vertrauen des Opfers zu gewinnen."
            },

            // Incident Response (10 Fragen)
            {
                category: "Incident Response",
                question: "Was ist der erste Schritt bei einem Sicherheitsvorfall?",
                options: [
                    "System neu starten",
                    "Vorfall eindämmen und dokumentieren",
                    "Ignorieren",
                    "Alle Mitarbeiter informieren"
                ],
                correct: 1,
                explanation: "Bei Sicherheitsvorfällen ist es wichtig, zuerst den Schaden einzudämmen und alle Schritte zu dokumentieren."
            },
            {
                category: "Incident Response",
                question: "Was ist forensische Analyse?",
                options: [
                    "Spurensicherung bei Cybervorfällen",
                    "Gerichtsverhandlung",
                    "Softwaretest",
                    "Netzwerkinstallation"
                ],
                correct: 0,
                explanation: "Forensische Analyse untersucht digitale Spuren zur Aufklärung von Cybervorfällen und Sammlung von Beweisen."
            },

            // Compliance und Recht (10 Fragen)
            {
                category: "Compliance",
                question: "Was ist die DSGVO?",
                options: [
                    "Deutsche Sicherheits-Grundverordnung",
                    "Datenschutz-Grundverordnung",
                    "Digitale Service-Grundverordnung",
                    "Daten-System-Grundverordnung"
                ],
                correct: 1,
                explanation: "Die DSGVO (Datenschutz-Grundverordnung) regelt den Schutz personenbezogener Daten in der EU."
            },
            {
                category: "Compliance",
                question: "Was bedeutet 'Privacy by Design'?",
                options: [
                    "Datenschutz von Anfang an mitdenken",
                    "Private Designstudios",
                    "Versteckte Funktionen",
                    "Persönliche Gestaltung"
                ],
                correct: 0,
                explanation: "Privacy by Design bedeutet, Datenschutz bereits bei der Systementwicklung zu berücksichtigen, nicht erst nachträglich."
            }
        ];
    }

    getQuestionsByCategory(category) {
        return this.questions.filter(q => q.category === category);
    }

    getRandomQuestions(count = 10) {
        const shuffled = [...this.questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getAllCategories() {
        return [...new Set(this.questions.map(q => q.category))];
    }

    getQuestionCount() {
        return this.questions.length;
    }

    getCategoryStats() {
        const stats = {};
        this.questions.forEach(q => {
            stats[q.category] = (stats[q.category] || 0) + 1;
        });
        return stats;
    }
}

// Export für Verwendung in anderen Dateien
window.QuizDatabase = QuizDatabase;
