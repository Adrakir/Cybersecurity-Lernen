// Certification Preparation Platform - Comprehensive Cybersecurity Certification Training
class CertificationPreparationPlatform {
    constructor() {
        this.certifications = {};
        this.studyPlans = {};
        this.practiceTests = {};
        this.userProgress = new Map();
        this.studyMaterials = {};
        this.initializeCertifications();
    }

    initializeCertifications() {
        this.certifications = {
            cissp: {
                id: "cissp",
                name: "CISSP - Certified Information Systems Security Professional",
                provider: "ISC²",
                difficulty: "expert",
                duration: "6-12 months",
                domains: [
                    "Security and Risk Management",
                    "Asset Security", 
                    "Security Architecture and Engineering",
                    "Communication and Network Security",
                    "Identity and Access Management",
                    "Security Assessment and Testing",
                    "Security Operations",
                    "Software Development Security"
                ],
                examDetails: {
                    questions: 250,
                    duration: 360, // 6 hours
                    passingScore: 700,
                    cost: "$749",
                    format: "CAT (Computer Adaptive Testing)"
                },
                prerequisites: "5 years experience in 2+ domains",
                studyHours: 300,
                practiceTests: ["cissp_practice_1", "cissp_practice_2", "cissp_practice_3"]
            },

            cism: {
                id: "cism",
                name: "CISM - Certified Information Security Manager",
                provider: "ISACA",
                difficulty: "advanced",
                duration: "4-8 months",
                domains: [
                    "Information Security Governance",
                    "Information Risk Management",
                    "Information Security Program Development",
                    "Incident Management"
                ],
                examDetails: {
                    questions: 150,
                    duration: 240,
                    passingScore: 450,
                    cost: "$760",
                    format: "Multiple Choice"
                },
                prerequisites: "5 years information security experience",
                studyHours: 200,
                practiceTests: ["cism_practice_1", "cism_practice_2"]
            },

            ceh: {
                id: "ceh",
                name: "CEH - Certified Ethical Hacker",
                provider: "EC-Council",
                difficulty: "intermediate",
                duration: "3-6 months",
                domains: [
                    "Introduction to Ethical Hacking",
                    "Footprinting and Reconnaissance",
                    "Scanning Networks",
                    "Enumeration",
                    "Vulnerability Analysis",
                    "System Hacking",
                    "Web Application Hacking",
                    "Wireless Network Hacking"
                ],
                examDetails: {
                    questions: 125,
                    duration: 240,
                    passingScore: 70,
                    cost: "$1199",
                    format: "Multiple Choice"
                },
                prerequisites: "2 years security experience recommended",
                studyHours: 150,
                practiceTests: ["ceh_practice_1", "ceh_practice_2", "ceh_practice_3"]
            },

            gsec: {
                id: "gsec",
                name: "GSEC - GIAC Security Essentials",
                provider: "SANS/GIAC",
                difficulty: "intermediate",
                duration: "3-6 months",
                domains: [
                    "Networking Foundations",
                    "Cryptography",
                    "Windows Security",
                    "Linux Security",
                    "Risk Management",
                    "Incident Handling"
                ],
                examDetails: {
                    questions: 180,
                    duration: 300,
                    passingScore: 73,
                    cost: "$2499",
                    format: "Multiple Choice with index"
                },
                prerequisites: "Basic IT security knowledge",
                studyHours: 120,
                practiceTests: ["gsec_practice_1", "gsec_practice_2"]
            },

            comptia_security: {
                id: "comptia_security",
                name: "CompTIA Security+",
                provider: "CompTIA",
                difficulty: "beginner",
                duration: "2-4 months",
                domains: [
                    "Attacks, Threats, and Vulnerabilities",
                    "Architecture and Design",
                    "Implementation",
                    "Operations and Incident Response",
                    "Governance, Risk, and Compliance"
                ],
                examDetails: {
                    questions: 90,
                    duration: 90,
                    passingScore: 750,
                    cost: "$370",
                    format: "Multiple Choice and Performance-based"
                },
                prerequisites: "2 years IT administration experience recommended",
                studyHours: 80,
                practiceTests: ["security_plus_1", "security_plus_2"]
            }
        };

        this.initializePracticeTests();
        this.initializeStudyPlans();
    }

    initializePracticeTests() {
        this.practiceTests = {
            cissp_practice_1: {
                id: "cissp_practice_1",
                title: "CISSP Practice Test 1 - Security and Risk Management",
                domain: "Security and Risk Management",
                questions: 50,
                timeLimit: 60,
                questions_data: [
                    {
                        question: "Which governance model is most appropriate for a multinational corporation?",
                        options: [
                            "Centralized governance with local compliance",
                            "Decentralized governance per region",
                            "Hybrid governance with regional autonomy",
                            "Federal governance structure"
                        ],
                        correct: 0,
                        explanation: "Centralized governance ensures consistent policies while allowing local compliance adaptations."
                    },
                    {
                        question: "What is the primary purpose of a risk register?",
                        options: [
                            "Document all potential risks",
                            "Track risk treatment decisions",
                            "Calculate risk impact values",
                            "Monitor and maintain identified risks"
                        ],
                        correct: 3,
                        explanation: "Risk registers are living documents used to monitor and maintain identified risks throughout their lifecycle."
                    }
                ]
            },

            ceh_practice_1: {
                id: "ceh_practice_1",
                title: "CEH Practice Test 1 - Reconnaissance & Scanning",
                domain: "Footprinting and Reconnaissance",
                questions: 25,
                timeLimit: 30,
                questions_data: [
                    {
                        question: "Which tool is most effective for passive DNS reconnaissance?",
                        options: [
                            "Nmap",
                            "DNSrecon",
                            "Shodan",
                            "Maltego"
                        ],
                        correct: 3,
                        explanation: "Maltego excels at passive reconnaissance by aggregating and visualizing OSINT data."
                    }
                ]
            },

            security_plus_1: {
                id: "security_plus_1",
                title: "Security+ Practice Test 1 - Threats and Vulnerabilities",
                domain: "Attacks, Threats, and Vulnerabilities",
                questions: 30,
                timeLimit: 45,
                questions_data: [
                    {
                        question: "What type of attack involves overwhelming a service with traffic?",
                        options: [
                            "SQL Injection",
                            "Cross-site Scripting",
                            "Denial of Service",
                            "Man-in-the-Middle"
                        ],
                        correct: 2,
                        explanation: "Denial of Service (DoS) attacks overwhelm services with excessive traffic to make them unavailable."
                    }
                ]
            }
        };
    }

    initializeStudyPlans() {
        this.studyPlans = {
            cissp_comprehensive: {
                id: "cissp_comprehensive",
                certificationId: "cissp",
                name: "CISSP Comprehensive Study Plan",
                duration: 24, // weeks
                totalHours: 300,
                phases: [
                    {
                        phase: 1,
                        name: "Foundation Phase",
                        weeks: 8,
                        domains: ["Security and Risk Management", "Asset Security"],
                        activities: ["Read official study guide", "Video lectures", "Practice questions"],
                        milestones: ["Complete Domain 1 assessment", "Score 70%+ on practice tests"]
                    },
                    {
                        phase: 2,
                        name: "Technical Phase",
                        weeks: 10,
                        domains: ["Security Architecture", "Network Security", "IAM", "Security Assessment"],
                        activities: ["Hands-on labs", "Case studies", "Mock exams"],
                        milestones: ["Technical skills validated", "Score 75%+ consistently"]
                    },
                    {
                        phase: 3,
                        name: "Operations Phase",
                        weeks: 4,
                        domains: ["Security Operations", "Software Development Security"],
                        activities: ["Final review", "Full practice exams", "Weak area focus"],
                        milestones: ["Ready for exam", "Score 80%+ on final mock"]
                    },
                    {
                        phase: 4,
                        name: "Exam Preparation",
                        weeks: 2,
                        domains: ["All domains review"],
                        activities: ["Final practice tests", "Review notes", "Relaxation techniques"],
                        milestones: ["Exam scheduled", "Confidence level high"]
                    }
                ]
            }
        };
    }

    startCertificationPrep(userId, certificationId) {
        const cert = this.certifications[certificationId];
        if (!cert) return null;

        this.initializeUserProgress(userId);
        const userProgress = this.userProgress.get(userId);

        if (!userProgress.certifications[certificationId]) {
            userProgress.certifications[certificationId] = {
                status: "in_progress",
                startDate: new Date(),
                targetExamDate: null,
                currentPhase: 0,
                hoursStudied: 0,
                practiceTestScores: [],
                completedDomains: [],
                weakAreas: [],
                studyStreak: 0,
                lastStudyDate: null
            };
        }

        return {
            certification: cert,
            studyPlan: this.getRecommendedStudyPlan(certificationId),
            initialAssessment: this.generateInitialAssessment(certificationId),
            nextSteps: this.getNextSteps(userId, certificationId)
        };
    }

    takePracticeTest(userId, testId) {
        const test = this.practiceTests[testId];
        if (!test) return null;

        const session = {
            testId,
            userId,
            startTime: new Date(),
            timeLimit: test.timeLimit,
            questions: this.shuffleQuestions(test.questions_data),
            currentQuestion: 0,
            answers: [],
            status: "active"
        };

        return session;
    }

    submitPracticeTest(userId, session, answers) {
        const test = this.practiceTests[session.testId];
        let score = 0;
        const results = [];

        answers.forEach((answer, index) => {
            const question = session.questions[index];
            const isCorrect = answer === question.correct;
            if (isCorrect) score++;

            results.push({
                question: question.question,
                userAnswer: answer,
                correctAnswer: question.correct,
                correct: isCorrect,
                explanation: question.explanation
            });
        });

        const percentage = Math.round((score / session.questions.length) * 100);
        
        // Update user progress
        this.updatePracticeTestResults(userId, session.testId, percentage, results);

        return {
            score: percentage,
            passed: percentage >= 70,
            totalQuestions: session.questions.length,
            correctAnswers: score,
            results: results,
            recommendations: this.generateTestRecommendations(percentage, results)
        };
    }

    updatePracticeTestResults(userId, testId, score, results) {
        this.initializeUserProgress(userId);
        const userProgress = this.userProgress.get(userId);

        // Find which certification this test belongs to
        let certificationId = null;
        Object.entries(this.certifications).forEach(([id, cert]) => {
            if (cert.practiceTests.includes(testId)) {
                certificationId = id;
            }
        });

        if (certificationId) {
            const certProgress = userProgress.certifications[certificationId];
            if (certProgress) {
                certProgress.practiceTestScores.push({
                    testId,
                    score,
                    date: new Date(),
                    weakTopics: this.identifyWeakTopics(results)
                });

                // Update weak areas
                const weakTopics = this.identifyWeakTopics(results);
                certProgress.weakAreas = [...new Set([...certProgress.weakAreas, ...weakTopics])];
            }
        }

        // Award skill experience
        this.awardCertificationExperience(userId, certificationId, score);
    }

    generateStudySchedule(userId, certificationId, targetDate) {
        const cert = this.certifications[certificationId];
        const studyPlan = this.studyPlans[`${certificationId}_comprehensive`];
        
        if (!cert || !targetDate) return null;

        const today = new Date();
        const examDate = new Date(targetDate);
        const weeksAvailable = Math.floor((examDate - today) / (7 * 24 * 60 * 60 * 1000));
        
        if (weeksAvailable < 8) {
            return {
                warning: "Insufficient time for comprehensive preparation",
                recommendation: "Consider postponing exam or using intensive study plan"
            };
        }

        const schedule = {
            totalWeeks: weeksAvailable,
            hoursPerWeek: Math.ceil(cert.studyHours / weeksAvailable),
            phases: [],
            milestones: []
        };

        // Distribute study plan phases across available time
        if (studyPlan) {
            const phaseWeeks = Math.floor(weeksAvailable / studyPlan.phases.length);
            
            studyPlan.phases.forEach((phase, index) => {
                schedule.phases.push({
                    ...phase,
                    startWeek: index * phaseWeeks + 1,
                    endWeek: (index + 1) * phaseWeeks,
                    adjustedHours: Math.ceil(phase.weeks * schedule.hoursPerWeek)
                });
            });
        }

        return schedule;
    }

    getWeakAreaRecommendations(userId, certificationId) {
        this.initializeUserProgress(userId);
        const userProgress = this.userProgress.get(userId);
        const certProgress = userProgress.certifications[certificationId];
        
        if (!certProgress || certProgress.weakAreas.length === 0) {
            return { message: "No weak areas identified yet. Take practice tests to get personalized recommendations." };
        }

        const recommendations = [];
        
        certProgress.weakAreas.forEach(area => {
            const resources = this.getStudyResources(area);
            recommendations.push({
                topic: area,
                priority: this.calculateTopicPriority(certProgress.practiceTestScores, area),
                resources: resources,
                estimatedStudyTime: this.estimateStudyTime(area)
            });
        });

        return recommendations.sort((a, b) => b.priority - a.priority);
    }

    getStudyResources(topic) {
        const resourceDatabase = {
            "Risk Management": [
                { type: "video", title: "Risk Assessment Fundamentals", duration: "45 min" },
                { type: "reading", title: "NIST Risk Management Framework", pages: 50 },
                { type: "practice", title: "Risk Scenarios Workshop", questions: 25 }
            ],
            "Cryptography": [
                { type: "video", title: "Symmetric vs Asymmetric Encryption", duration: "60 min" },
                { type: "lab", title: "Hash Function Analysis", duration: "90 min" },
                { type: "reading", title: "Modern Cryptography Principles", pages: 40 }
            ],
            "Network Security": [
                { type: "lab", title: "Firewall Configuration", duration: "120 min" },
                { type: "video", title: "Network Protocols Security", duration: "75 min" },
                { type: "practice", title: "Network Attack Scenarios", questions: 30 }
            ]
        };

        return resourceDatabase[topic] || [
            { type: "reading", title: `${topic} Study Guide`, pages: 30 },
            { type: "practice", title: `${topic} Practice Questions`, questions: 20 }
        ];
    }

    trackStudySession(userId, certificationId, duration, topics) {
        this.initializeUserProgress(userId);
        const userProgress = this.userProgress.get(userId);
        const certProgress = userProgress.certifications[certificationId];

        if (certProgress) {
            certProgress.hoursStudied += duration / 60; // Convert minutes to hours
            certProgress.lastStudyDate = new Date();
            
            // Update study streak
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (certProgress.lastStudyDate && certProgress.lastStudyDate >= yesterday) {
                certProgress.studyStreak++;
            } else {
                certProgress.studyStreak = 1;
            }

            // Mark topics as studied
            topics.forEach(topic => {
                if (!certProgress.completedDomains.includes(topic)) {
                    // Check if enough study time for this domain
                    const domainHours = this.calculateDomainHours(certificationId, topic);
                    if (certProgress.hoursStudied >= domainHours) {
                        certProgress.completedDomains.push(topic);
                    }
                }
            });
        }

        // Award achievements for study streaks
        if (certProgress.studyStreak >= 7) {
            this.awardStudyAchievement(userId, "study_streak_week");
        }
        if (certProgress.studyStreak >= 30) {
            this.awardStudyAchievement(userId, "study_streak_month");
        }

        return {
            totalHours: Math.round(certProgress.hoursStudied * 10) / 10,
            streak: certProgress.studyStreak,
            progress: this.calculateOverallProgress(userId, certificationId)
        };
    }

    calculateOverallProgress(userId, certificationId) {
        const userProgress = this.userProgress.get(userId);
        const certProgress = userProgress.certifications[certificationId];
        const cert = this.certifications[certificationId];

        if (!certProgress) return 0;

        const factors = {
            studyHours: Math.min(certProgress.hoursStudied / cert.studyHours, 1) * 0.4,
            practiceTests: Math.min(certProgress.practiceTestScores.length / 5, 1) * 0.3,
            domainCompletion: (certProgress.completedDomains.length / cert.domains.length) * 0.2,
            avgTestScore: this.calculateAverageTestScore(certProgress.practiceTestScores) / 100 * 0.1
        };

        return Math.round((factors.studyHours + factors.practiceTests + factors.domainCompletion + factors.avgTestScore) * 100);
    }

    awardCertificationExperience(userId, certificationId, score) {
        if (!window.skillTree) return;

        const cert = this.certifications[certificationId];
        const baseXP = Math.round(score * 1.5);
        
        const skillMapping = {
            "cissp": ["risk_management", "compliance_fundamentals", "advanced_incident_response"],
            "ceh": ["penetration_testing", "vulnerability_assessment", "threat_intelligence"],
            "comptia_security": ["security_fundamentals", "network_security", "incident_response_basics"],
            "cism": ["risk_management", "compliance_fundamentals", "security_governance"],
            "gsec": ["security_fundamentals", "network_security", "digital_forensics"]
        };

        const relevantSkills = skillMapping[certificationId] || ["security_fundamentals"];
        
        relevantSkills.forEach(skillId => {
            window.skillTree.addExperience(userId, skillId, baseXP, 'certification_prep');
        });
    }

    awardStudyAchievement(userId, achievementId) {
        if (!window.achievementSystem) return;
        window.achievementSystem.updateProgress(userId, achievementId, 1);
    }

    generateInitialAssessment(certificationId) {
        const cert = this.certifications[certificationId];
        
        return {
            title: `${cert.name} Readiness Assessment`,
            description: "Evaluate your current knowledge and get personalized study recommendations",
            domains: cert.domains.map(domain => ({
                name: domain,
                questions: 5,
                timeLimit: 10
            })),
            totalQuestions: cert.domains.length * 5,
            timeLimit: cert.domains.length * 10
        };
    }

    getRecommendedStudyPlan(certificationId) {
        return this.studyPlans[`${certificationId}_comprehensive`] || {
            message: "Custom study plan not available. Please create a personalized plan based on your schedule."
        };
    }

    getNextSteps(userId, certificationId) {
        const cert = this.certifications[certificationId];
        
        return [
            {
                step: 1,
                title: "Take Initial Assessment",
                description: `Evaluate your current knowledge across all ${cert.domains.length} domains`,
                estimated_time: "30-45 minutes"
            },
            {
                step: 2,
                title: "Create Study Schedule",
                description: "Set your target exam date and generate a personalized study plan",
                estimated_time: "10 minutes"
            },
            {
                step: 3,
                title: "Begin Foundation Studies",
                description: "Start with fundamental concepts and build your knowledge base",
                estimated_time: "Ongoing"
            }
        ];
    }

    shuffleQuestions(questions) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    identifyWeakTopics(results) {
        const weakTopics = [];
        const topicScores = {};

        results.forEach(result => {
            // Simple topic extraction from question text (would be more sophisticated in real implementation)
            const question = result.question.toLowerCase();
            if (question.includes('risk')) topicScores['Risk Management'] = (topicScores['Risk Management'] || []).concat(result.correct);
            if (question.includes('crypto') || question.includes('encryption')) topicScores['Cryptography'] = (topicScores['Cryptography'] || []).concat(result.correct);
            if (question.includes('network')) topicScores['Network Security'] = (topicScores['Network Security'] || []).concat(result.correct);
        });

        Object.entries(topicScores).forEach(([topic, scores]) => {
            const accuracy = scores.filter(s => s).length / scores.length;
            if (accuracy < 0.7) weakTopics.push(topic);
        });

        return weakTopics;
    }

    calculateTopicPriority(testScores, topic) {
        // Calculate priority based on frequency of mistakes and recency
        let priority = 0;
        testScores.forEach(test => {
            if (test.weakTopics.includes(topic)) {
                const daysSince = (new Date() - new Date(test.date)) / (1000 * 60 * 60 * 24);
                priority += Math.max(10 - daysSince, 1); // More recent = higher priority
            }
        });
        return priority;
    }

    estimateStudyTime(topic) {
        const timeEstimates = {
            "Risk Management": 15,
            "Cryptography": 20,
            "Network Security": 18,
            "Identity Management": 12,
            "Security Operations": 16
        };
        return timeEstimates[topic] || 10;
    }

    calculateDomainHours(certificationId, domain) {
        const cert = this.certifications[certificationId];
        return Math.ceil(cert.studyHours / cert.domains.length);
    }

    calculateAverageTestScore(testScores) {
        if (testScores.length === 0) return 0;
        return testScores.reduce((sum, test) => sum + test.score, 0) / testScores.length;
    }

    generateTestRecommendations(score, results) {
        const recommendations = [];
        
        if (score < 60) {
            recommendations.push("Focus on fundamental concepts before attempting more practice tests");
        } else if (score < 75) {
            recommendations.push("Review weak areas and take additional practice tests");
        } else if (score < 85) {
            recommendations.push("Fine-tune knowledge in specific domains, you're almost ready!");
        } else {
            recommendations.push("Excellent! Consider scheduling your exam soon");
        }

        const weakTopics = this.identifyWeakTopics(results);
        if (weakTopics.length > 0) {
            recommendations.push(`Focus additional study on: ${weakTopics.join(', ')}`);
        }

        return recommendations;
    }

    initializeUserProgress(userId) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                certifications: {},
                completedCertifications: [],
                totalStudyHours: 0,
                averageTestScore: 0,
                studyStreak: 0,
                achievements: []
            });
        }
    }

    renderCertificationDashboard() {
        return `
            <div class="certification-platform">
                <div class="platform-header">
                    <h1>📜 Certification Preparation Platform</h1>
                    <p>Comprehensive training for cybersecurity certifications</p>
                </div>
                
                <div class="certifications-grid">
                    ${Object.values(this.certifications).map(cert => 
                        this.renderCertificationCard(cert)
                    ).join('')}
                </div>
            </div>
        `;
    }

    renderCertificationCard(cert) {
        return `
            <div class="cert-card difficulty-${cert.difficulty}">
                <div class="cert-header">
                    <h3>${cert.name}</h3>
                    <span class="cert-provider">${cert.provider}</span>
                </div>
                <div class="cert-details">
                    <div class="cert-meta">
                        <span>⏱️ ${cert.duration}</span>
                        <span>📚 ${cert.studyHours}h study</span>
                        <span>💰 ${cert.examDetails.cost}</span>
                    </div>
                    <div class="cert-domains">
                        <h4>📋 Domains (${cert.domains.length}):</h4>
                        <ul>
                            ${cert.domains.slice(0, 4).map(domain => `<li>${domain}</li>`).join('')}
                            ${cert.domains.length > 4 ? `<li>+${cert.domains.length - 4} more...</li>` : ''}
                        </ul>
                    </div>
                </div>
                <button onclick="certPlatform.startCertificationPrep('user', '${cert.id}')" class="start-prep-btn">
                    Start Preparation
                </button>
            </div>
        `;
    }
}

// CSS for Certification Platform
const certificationCSS = `
    .certification-platform {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .platform-header {
        text-align: center;
        background: linear-gradient(135deg, #6f42c1 0%, #007bff 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .certifications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
    }
    
    .cert-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        border-left: 5px solid #e9ecef;
    }
    
    .cert-card:hover {
        transform: translateY(-5px);
    }
    
    .cert-card.difficulty-expert { border-left-color: #dc3545; }
    .cert-card.difficulty-advanced { border-left-color: #fd7e14; }
    .cert-card.difficulty-intermediate { border-left-color: #ffc107; }
    .cert-card.difficulty-beginner { border-left-color: #28a745; }
    
    .cert-header h3 {
        margin: 0 0 5px 0;
        color: #2c3e50;
        font-size: 1.1em;
    }
    
    .cert-provider {
        color: #6c757d;
        font-size: 0.9em;
        font-weight: 500;
    }
    
    .cert-meta {
        display: flex;
        gap: 15px;
        margin: 15px 0;
        font-size: 0.85em;
        color: #495057;
    }
    
    .cert-domains h4 {
        margin: 15px 0 8px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .cert-domains ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .cert-domains li {
        font-size: 0.8em;
        color: #495057;
        margin-bottom: 3px;
    }
    
    .start-prep-btn {
        width: 100%;
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        border: none;
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        margin-top: 20px;
        transition: all 0.3s ease;
    }
    
    .start-prep-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
    }
`;

// Style hinzufügen
const certificationStyleSheet = document.createElement('style');
certificationStyleSheet.textContent = certificationCSS;
document.head.appendChild(certificationStyleSheet);

// Global instance
window.certPlatform = new CertificationPreparationPlatform();
