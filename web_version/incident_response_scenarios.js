// Incident Response Scenarios - Realistic IR Training Platform
class IncidentResponseScenarios {
    constructor() {
        this.scenarios = {};
        this.activeScenarios = new Map();
        this.userProgress = new Map();
        this.scenarioTemplates = {};
        this.irFrameworks = {};
        this.evidenceDatabase = {};
        this.initializeScenarios();
        this.initializeIRFrameworks();
    }

    initializeScenarios() {
        this.scenarios = {
            // Ransomware Incident
            ransomware_attack: {
                id: "ransomware_attack",
                title: "🦠 Ransomware Incident - CryptoLocker Outbreak",
                description: "Widespread ransomware infection across corporate network",
                difficulty: "intermediate",
                duration: "45-60 minutes",
                industry: "healthcare",
                learningObjectives: [
                    "Rapid containment of ransomware spread",
                    "Evidence preservation and forensics",
                    "Communication with stakeholders",
                    "Recovery strategy implementation"
                ],
                initialSituation: {
                    timestamp: "2024-08-10 08:15:00",
                    reporter: "IT Help Desk",
                    initial_report: "Multiple users reporting encrypted files with .locked extension",
                    affected_systems: 15,
                    business_impact: "High - Patient records systems affected"
                },
                timeline: [
                    {
                        time: "08:15",
                        event: "First user reports encrypted files",
                        evidence: ["encrypted_files.log", "user_report.txt"],
                        automatic: true
                    },
                    {
                        time: "08:18", 
                        event: "Additional infections detected",
                        evidence: ["network_traffic.pcap", "endpoint_logs.json"],
                        trigger: "investigate_initial"
                    },
                    {
                        time: "08:25",
                        event: "Ransom note discovered",
                        evidence: ["ransom_note.txt", "payment_instructions.png"],
                        trigger: "containment_initiated"
                    },
                    {
                        time: "08:30",
                        event: "Command & Control communication detected",
                        evidence: ["c2_traffic.log", "dns_queries.txt"],
                        trigger: "network_analysis"
                    }
                ],
                phases: {
                    preparation: {
                        name: "Preparation",
                        description: "Review incident details and prepare response team",
                        tasks: [
                            {
                                id: "review_situation",
                                title: "Review Initial Situation",
                                description: "Analyze the initial incident report",
                                required: true,
                                timeLimit: 5,
                                points: 10
                            },
                            {
                                id: "assemble_team",
                                title: "Assemble Response Team",
                                description: "Select appropriate team members for the incident",
                                required: true,
                                timeLimit: 3,
                                points: 5
                            }
                        ]
                    },
                    identification: {
                        name: "Identification & Analysis",
                        description: "Identify scope and nature of the incident",
                        tasks: [
                            {
                                id: "scope_assessment",
                                title: "Assess Incident Scope",
                                description: "Determine the extent of the ransomware infection",
                                required: true,
                                timeLimit: 10,
                                points: 20
                            },
                            {
                                id: "malware_analysis",
                                title: "Analyze Malware Sample",
                                description: "Examine the ransomware variant and its capabilities",
                                required: true,
                                timeLimit: 15,
                                points: 25
                            }
                        ]
                    },
                    containment: {
                        name: "Containment",
                        description: "Stop the spread and secure the environment",
                        tasks: [
                            {
                                id: "network_isolation",
                                title: "Isolate Affected Systems",
                                description: "Implement network segmentation to prevent spread",
                                required: true,
                                timeLimit: 8,
                                points: 30
                            },
                            {
                                id: "disable_accounts",
                                title: "Disable Compromised Accounts",
                                description: "Identify and disable affected user accounts",
                                required: true,
                                timeLimit: 5,
                                points: 15
                            }
                        ]
                    },
                    eradication: {
                        name: "Eradication",
                        description: "Remove threats and vulnerabilities",
                        tasks: [
                            {
                                id: "malware_removal",
                                title: "Remove Malware",
                                description: "Clean infected systems and remove persistence",
                                required: true,
                                timeLimit: 20,
                                points: 25
                            },
                            {
                                id: "patch_vulnerabilities",
                                title: "Patch Vulnerabilities",
                                description: "Address the vulnerabilities that enabled the attack",
                                required: true,
                                timeLimit: 10,
                                points: 20
                            }
                        ]
                    },
                    recovery: {
                        name: "Recovery",
                        description: "Restore systems and monitor for threats",
                        tasks: [
                            {
                                id: "data_restoration",
                                title: "Restore Data from Backups",
                                description: "Implement data recovery strategy",
                                required: true,
                                timeLimit: 15,
                                points: 30
                            },
                            {
                                id: "system_monitoring",
                                title: "Enhanced Monitoring",
                                description: "Implement additional monitoring measures",
                                required: false,
                                timeLimit: 10,
                                points: 15
                            }
                        ]
                    },
                    lessons_learned: {
                        name: "Lessons Learned",
                        description: "Document findings and improvements",
                        tasks: [
                            {
                                id: "incident_report",
                                title: "Create Incident Report",
                                description: "Document the incident and response actions",
                                required: true,
                                timeLimit: 15,
                                points: 20
                            },
                            {
                                id: "process_improvements",
                                title: "Identify Process Improvements",
                                description: "Recommend improvements to prevent future incidents",
                                required: true,
                                timeLimit: 10,
                                points: 15
                            }
                        ]
                    }
                },
                evidence: {
                    "encrypted_files.log": {
                        type: "log",
                        content: "2024-08-10 08:15:23 C:\\Users\\jsmith\\Documents\\report.docx.locked\n2024-08-10 08:15:24 C:\\Users\\jsmith\\Documents\\budget.xlsx.locked",
                        analysis_points: ["File extension pattern", "Encryption timestamp", "User directory structure"]
                    },
                    "ransom_note.txt": {
                        type: "text",
                        content: "Your files have been encrypted by CryptoLocker 3.0. Payment of 0.5 BTC required within 72 hours.",
                        analysis_points: ["Ransomware family", "Payment method", "Time pressure tactics"]
                    },
                    "network_traffic.pcap": {
                        type: "network",
                        content: "Encrypted network capture showing C2 communication",
                        analysis_points: ["C2 server IP", "Communication protocol", "Data exfiltration patterns"]
                    }
                },
                scoring: {
                    excellent: { min: 180, description: "Outstanding incident response" },
                    good: { min: 140, description: "Effective incident handling" },
                    satisfactory: { min: 100, description: "Adequate response with room for improvement" },
                    needs_improvement: { min: 0, description: "Significant gaps in response process" }
                }
            },

            // Data Breach Incident
            data_breach: {
                id: "data_breach",
                title: "💾 Data Breach - Customer Database Compromise",
                description: "Unauthorized access to customer database with PII exposure",
                difficulty: "advanced",
                duration: "60-90 minutes",
                industry: "financial_services",
                learningObjectives: [
                    "Regulatory compliance requirements",
                    "Customer notification procedures",
                    "Forensic data collection",
                    "Legal and PR coordination"
                ],
                initialSituation: {
                    timestamp: "2024-08-10 14:30:00",
                    reporter: "Database Administrator",
                    initial_report: "Suspicious database queries detected accessing customer records",
                    affected_systems: 1,
                    business_impact: "Critical - 50,000 customer records potentially compromised"
                },
                phases: {
                    preparation: {
                        name: "Preparation",
                        tasks: [
                            {
                                id: "legal_notification",
                                title: "Notify Legal Team",
                                description: "Immediate notification to legal and compliance teams",
                                required: true,
                                timeLimit: 5,
                                points: 15
                            }
                        ]
                    },
                    identification: {
                        name: "Identification",
                        tasks: [
                            {
                                id: "data_scope",
                                title: "Determine Data Scope",
                                description: "Identify exactly what data was accessed",
                                required: true,
                                timeLimit: 20,
                                points: 30
                            }
                        ]
                    },
                    containment: {
                        name: "Containment",
                        tasks: [
                            {
                                id: "access_revocation",
                                title: "Revoke Database Access",
                                description: "Immediately revoke suspicious database connections",
                                required: true,
                                timeLimit: 5,
                                points: 25
                            }
                        ]
                    }
                }
            },

            // APT Intrusion
            apt_intrusion: {
                id: "apt_intrusion",
                title: "🎯 APT Intrusion - Nation-State Actor",
                description: "Advanced Persistent Threat with lateral movement",
                difficulty: "expert",
                duration: "90-120 minutes",
                industry: "government",
                learningObjectives: [
                    "APT hunting techniques",
                    "Attribution analysis",
                    "Coordinated threat response",
                    "National security implications"
                ],
                initialSituation: {
                    timestamp: "2024-08-10 09:45:00",
                    reporter: "Threat Hunter",
                    initial_report: "Unusual lateral movement patterns and persistence mechanisms detected",
                    affected_systems: 25,
                    business_impact: "Critical - Classified information systems potentially compromised"
                }
            },

            // Insider Threat
            insider_threat: {
                id: "insider_threat",
                title: "👤 Insider Threat - Data Exfiltration",
                description: "Malicious insider stealing intellectual property",
                difficulty: "intermediate",
                duration: "45-75 minutes",
                industry: "technology",
                learningObjectives: [
                    "Behavioral analysis techniques",
                    "Digital forensics investigation",
                    "HR coordination procedures",
                    "Legal evidence handling"
                ],
                initialSituation: {
                    timestamp: "2024-08-10 16:20:00",
                    reporter: "Security Analyst",
                    initial_report: "Employee accessing files outside normal work pattern",
                    affected_systems: 3,
                    business_impact: "High - Source code and customer lists at risk"
                }
            }
        };
    }

    initializeIRFrameworks() {
        this.irFrameworks = {
            nist: {
                name: "NIST Cybersecurity Framework",
                phases: ["Preparation", "Detection & Analysis", "Containment, Eradication & Recovery", "Post-Incident Activity"],
                description: "Industry standard incident response methodology"
            },
            sans: {
                name: "SANS Incident Response Process",
                phases: ["Preparation", "Identification", "Containment", "Eradication", "Recovery", "Lessons Learned"],
                description: "Comprehensive six-phase incident response model"
            },
            iso27035: {
                name: "ISO/IEC 27035",
                phases: ["Plan and Prepare", "Detection and Reporting", "Assessment and Decision", "Responses", "Lessons Learned"],
                description: "International standard for incident management"
            }
        };
    }

    startScenario(userId, scenarioId, framework = "sans") {
        const scenario = this.scenarios[scenarioId];
        if (!scenario) return null;

        const session = {
            userId,
            scenarioId,
            framework,
            startTime: new Date(),
            currentPhase: 0,
            completedTasks: [],
            score: 0,
            timeRemaining: this.parseDuration(scenario.duration),
            status: "active",
            decisions: [],
            evidenceReviewed: [],
            teamMembers: [],
            communicationLog: []
        };

        this.activeScenarios.set(`${userId}_${scenarioId}`, session);
        this.initializeUserProgress(userId);
        
        return session;
    }

    parseDuration(duration) {
        const match = duration.match(/(\d+)-(\d+)\s*minutes/);
        if (match) {
            const min = parseInt(match[1]);
            const max = parseInt(match[2]);
            return (min + max) / 2; // Average duration in minutes
        }
        return 60; // Default fallback
    }

    initializeUserProgress(userId) {
        if (!this.userProgress.has(userId)) {
            this.userProgress.set(userId, {
                completedScenarios: [],
                totalScore: 0,
                averageScore: 0,
                strengths: [],
                improvementAreas: [],
                certificationProgress: {}
            });
        }
    }

    completeTask(userId, scenarioId, taskId, response) {
        const sessionKey = `${userId}_${scenarioId}`;
        const session = this.activeScenarios.get(sessionKey);
        if (!session) return null;

        const scenario = this.scenarios[scenarioId];
        const currentPhase = Object.values(scenario.phases)[session.currentPhase];
        const task = currentPhase.tasks.find(t => t.id === taskId);
        
        if (!task) return null;

        // Evaluate response
        const evaluation = this.evaluateTaskResponse(task, response, scenario);
        
        session.completedTasks.push({
            taskId,
            response,
            evaluation,
            timestamp: new Date(),
            timeSpent: evaluation.timeSpent
        });

        session.score += evaluation.pointsAwarded;

        // Check if phase is complete
        const requiredTasks = currentPhase.tasks.filter(t => t.required);
        const completedRequired = session.completedTasks.filter(ct => 
            requiredTasks.some(rt => rt.id === ct.taskId)
        );

        if (completedRequired.length >= requiredTasks.length) {
            this.advancePhase(session, scenario);
        }

        return evaluation;
    }

    evaluateTaskResponse(task, response, scenario) {
        // Simulate intelligent response evaluation
        const baseScore = task.points || 10;
        let multiplier = 0.5; // Default moderate score
        
        // Evaluate based on response quality (simplified)
        if (response && response.length > 50) {
            multiplier = 0.8; // Good detailed response
        }
        if (response && response.includes("containment") && task.id.includes("containment")) {
            multiplier = 1.0; // Excellent relevant response
        }
        if (response && response.includes("backup") && task.id.includes("restoration")) {
            multiplier = 1.0; // Excellent backup strategy
        }

        const pointsAwarded = Math.round(baseScore * multiplier);
        const timeSpent = Math.random() * 5 + 2; // 2-7 minutes simulated

        return {
            pointsAwarded,
            maxPoints: baseScore,
            timeSpent,
            feedback: this.generateTaskFeedback(task, response, multiplier),
            recommendations: this.generateRecommendations(task, multiplier)
        };
    }

    generateTaskFeedback(task, response, multiplier) {
        if (multiplier >= 0.9) {
            return "Excellent response! You demonstrated strong understanding of incident response procedures.";
        } else if (multiplier >= 0.7) {
            return "Good approach. Consider including more specific technical details in your response.";
        } else if (multiplier >= 0.5) {
            return "Adequate response with room for improvement. Review the task requirements carefully.";
        } else {
            return "Response needs significant improvement. Consider reviewing incident response best practices.";
        }
    }

    generateRecommendations(task, multiplier) {
        const recommendations = [];
        
        if (multiplier < 0.7) {
            recommendations.push("Review NIST incident response framework");
            recommendations.push("Practice with additional scenarios");
        }
        
        if (task.id.includes("containment")) {
            recommendations.push("Study network segmentation strategies");
        }
        
        if (task.id.includes("communication")) {
            recommendations.push("Review stakeholder communication templates");
        }

        return recommendations;
    }

    advancePhase(session, scenario) {
        const phases = Object.keys(scenario.phases);
        if (session.currentPhase < phases.length - 1) {
            session.currentPhase++;
        } else {
            this.completeScenario(session, scenario);
        }
    }

    completeScenario(session, scenario) {
        session.status = "completed";
        session.endTime = new Date();
        session.totalDuration = (session.endTime - session.startTime) / 1000 / 60; // minutes

        // Calculate final performance metrics
        const maxPossibleScore = this.calculateMaxScore(scenario);
        const performance = {
            score: session.score,
            maxScore: maxPossibleScore,
            percentage: Math.round((session.score / maxPossibleScore) * 100),
            duration: session.totalDuration,
            efficiency: this.calculateEfficiency(session, scenario)
        };

        // Update user progress
        this.updateUserProgress(session.userId, scenario, performance);

        // Award achievements
        this.awardAchievements(session.userId, scenario, performance);

        // Award skill experience
        this.awardSkillExperience(session.userId, scenario, performance);

        return performance;
    }

    calculateMaxScore(scenario) {
        return Object.values(scenario.phases).reduce((total, phase) => {
            return total + phase.tasks.reduce((phaseTotal, task) => phaseTotal + (task.points || 10), 0);
        }, 0);
    }

    calculateEfficiency(session, scenario) {
        const expectedDuration = this.parseDuration(scenario.duration);
        const actualDuration = session.totalDuration;
        
        if (actualDuration <= expectedDuration) {
            return Math.min(100, Math.round((expectedDuration / actualDuration) * 100));
        } else {
            return Math.round((expectedDuration / actualDuration) * 100);
        }
    }

    updateUserProgress(userId, scenario, performance) {
        const progress = this.userProgress.get(userId);
        
        progress.completedScenarios.push({
            scenarioId: scenario.id,
            performance,
            completedAt: new Date()
        });

        progress.totalScore += performance.score;
        progress.averageScore = Math.round(progress.totalScore / progress.completedScenarios.length);

        // Analyze strengths and improvement areas
        this.analyzePerformance(userId, scenario, performance);
    }

    analyzePerformance(userId, scenario, performance) {
        const progress = this.userProgress.get(userId);
        
        // Simple performance analysis
        if (performance.percentage >= 85) {
            progress.strengths.push(`Excellent ${scenario.industry} incident response`);
        }
        
        if (performance.efficiency < 70) {
            progress.improvementAreas.push("Time management during incidents");
        }
        
        if (performance.percentage < 60) {
            progress.improvementAreas.push(`${scenario.difficulty} scenario handling`);
        }

        // Remove duplicates
        progress.strengths = [...new Set(progress.strengths)];
        progress.improvementAreas = [...new Set(progress.improvementAreas)];
    }

    awardAchievements(userId, scenario, performance) {
        if (window.achievementSystem) {
            window.achievementSystem.updateProgress(userId, 'incident_responder', 1);
            
            if (performance.percentage >= 90) {
                window.achievementSystem.updateProgress(userId, 'ir_expert', 1);
            }
            
            if (scenario.difficulty === "expert" && performance.percentage >= 80) {
                window.achievementSystem.updateProgress(userId, 'threat_hunter', 1);
            }
        }
    }

    awardSkillExperience(userId, scenario, performance) {
        if (window.skillTree) {
            const baseExperience = 150;
            const bonusMultiplier = performance.percentage / 100;
            const finalExperience = Math.round(baseExperience * bonusMultiplier);

            // Award to relevant skills based on scenario type
            const relevantSkills = this.getRelevantSkills(scenario);
            relevantSkills.forEach(skillId => {
                window.skillTree.addExperience(userId, skillId, finalExperience, 'incident_response_scenario');
            });
        }
    }

    getRelevantSkills(scenario) {
        const skillMap = {
            "ransomware_attack": ["incident_response_basics", "malware_analysis", "network_security"],
            "data_breach": ["digital_forensics", "compliance_fundamentals", "risk_management"],
            "apt_intrusion": ["advanced_incident_response", "threat_intelligence", "advanced_monitoring"],
            "insider_threat": ["digital_forensics", "risk_management", "incident_response_basics"]
        };

        return skillMap[scenario.id] || ["incident_response_basics"];
    }

    renderScenarioLibrary() {
        return `
            <div class="incident-scenarios-container">
                <div class="scenarios-header">
                    <h1>🔥 Incident Response Scenarios</h1>
                    <p>Realistic incident response training with hands-on exercises</p>
                </div>
                
                <div class="frameworks-info">
                    <h2>📋 IR Frameworks</h2>
                    <div class="frameworks-grid">
                        ${Object.values(this.irFrameworks).map(framework => 
                            this.renderFrameworkCard(framework)
                        ).join('')}
                    </div>
                </div>
                
                <div class="scenarios-grid">
                    ${Object.values(this.scenarios).map(scenario => 
                        this.renderScenarioCard(scenario)
                    ).join('')}
                </div>
            </div>
        `;
    }

    renderFrameworkCard(framework) {
        return `
            <div class="framework-card">
                <h3>${framework.name}</h3>
                <p>${framework.description}</p>
                <div class="phases-list">
                    ${framework.phases.map(phase => `<span class="phase-tag">${phase}</span>`).join('')}
                </div>
            </div>
        `;
    }

    renderScenarioCard(scenario) {
        const difficultyClass = `difficulty-${scenario.difficulty}`;
        
        return `
            <div class="scenario-card ${difficultyClass}" onclick="incidentScenarios.startScenarioFlow('${scenario.id}')">
                <div class="scenario-header">
                    <h3>${scenario.title}</h3>
                    <span class="difficulty-badge">${scenario.difficulty.toUpperCase()}</span>
                </div>
                
                <div class="scenario-description">
                    <p>${scenario.description}</p>
                </div>
                
                <div class="scenario-meta">
                    <div class="meta-item">
                        <span class="meta-label">Duration:</span>
                        <span class="meta-value">${scenario.duration}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Industry:</span>
                        <span class="meta-value">${scenario.industry.replace('_', ' ')}</span>
                    </div>
                </div>
                
                <div class="learning-objectives">
                    <h4>Learning Objectives:</h4>
                    <ul>
                        ${scenario.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="scenario-phases">
                    <h4>IR Phases (${Object.keys(scenario.phases || {}).length}):</h4>
                    <div class="phases-preview">
                        ${Object.values(scenario.phases || {}).map(phase => 
                            `<span class="phase-preview">${phase.name}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    startScenarioFlow(scenarioId) {
        const scenario = this.scenarios[scenarioId];
        if (!scenario) return;

        // Show scenario briefing modal
        const modal = document.createElement('div');
        modal.className = 'scenario-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🔥 ${scenario.title}</h2>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                
                <div class="scenario-briefing">
                    <h3>📋 Incident Briefing</h3>
                    <div class="briefing-details">
                        <p><strong>Time:</strong> ${scenario.initialSituation.timestamp}</p>
                        <p><strong>Reporter:</strong> ${scenario.initialSituation.reporter}</p>
                        <p><strong>Initial Report:</strong> ${scenario.initialSituation.initial_report}</p>
                        <p><strong>Business Impact:</strong> ${scenario.initialSituation.business_impact}</p>
                    </div>
                    
                    <h3>🎯 Learning Objectives</h3>
                    <ul>
                        ${scenario.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                    
                    <div class="scenario-controls">
                        <select id="framework-select">
                            ${Object.entries(this.irFrameworks).map(([key, framework]) => 
                                `<option value="${key}">${framework.name}</option>`
                            ).join('')}
                        </select>
                        
                        <button onclick="incidentScenarios.launchScenario('${scenarioId}')" class="launch-btn">
                            🚀 Start Scenario
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    launchScenario(scenarioId) {
        const userId = 'current_user';
        const framework = document.getElementById('framework-select')?.value || 'sans';
        
        const session = this.startScenario(userId, scenarioId, framework);
        
        // Close modal
        document.querySelector('.scenario-modal')?.remove();
        
        // Show success message
        alert(`Incident Response Scenario "${this.scenarios[scenarioId].title}" started!\n\nFramework: ${this.irFrameworks[framework].name}\nEstimated Duration: ${this.scenarios[scenarioId].duration}`);
        
        console.log('Scenario session started:', session);
    }
}

// CSS for Incident Response Scenarios
const incidentScenariosCSS = `
    .incident-scenarios-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .scenarios-header {
        text-align: center;
        background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
        color: white;
        padding: 40px 20px;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    
    .frameworks-info {
        margin-bottom: 40px;
    }
    
    .frameworks-info h2 {
        color: #2c3e50;
        margin-bottom: 20px;
    }
    
    .frameworks-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .framework-card {
        background: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .framework-card h3 {
        margin: 0 0 10px 0;
        color: #2c3e50;
    }
    
    .framework-card p {
        color: #6c757d;
        margin-bottom: 15px;
    }
    
    .phases-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .phase-tag {
        background: #e9ecef;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        color: #495057;
    }
    
    .scenarios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 25px;
    }
    
    .scenario-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 5px solid #dee2e6;
    }
    
    .scenario-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .scenario-card.difficulty-intermediate {
        border-left-color: #ffc107;
    }
    
    .scenario-card.difficulty-advanced {
        border-left-color: #fd7e14;
    }
    
    .scenario-card.difficulty-expert {
        border-left-color: #dc3545;
    }
    
    .scenario-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .scenario-header h3 {
        margin: 0;
        color: #2c3e50;
    }
    
    .difficulty-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: bold;
        color: white;
    }
    
    .difficulty-intermediate .difficulty-badge {
        background: #ffc107;
    }
    
    .difficulty-advanced .difficulty-badge {
        background: #fd7e14;
    }
    
    .difficulty-expert .difficulty-badge {
        background: #dc3545;
    }
    
    .scenario-description {
        margin-bottom: 20px;
    }
    
    .scenario-description p {
        color: #495057;
        line-height: 1.5;
    }
    
    .scenario-meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 10px;
    }
    
    .meta-item {
        display: flex;
        flex-direction: column;
    }
    
    .meta-label {
        font-size: 0.8em;
        color: #6c757d;
        margin-bottom: 5px;
    }
    
    .meta-value {
        font-weight: 500;
        color: #2c3e50;
        text-transform: capitalize;
    }
    
    .learning-objectives {
        margin-bottom: 20px;
    }
    
    .learning-objectives h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .learning-objectives ul {
        margin: 0;
        padding-left: 20px;
    }
    
    .learning-objectives li {
        color: #495057;
        font-size: 0.9em;
        margin-bottom: 5px;
    }
    
    .scenario-phases h4 {
        margin: 0 0 10px 0;
        color: #2c3e50;
        font-size: 0.9em;
    }
    
    .phases-preview {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    
    .phase-preview {
        background: #e3f2fd;
        color: #1976d2;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 0.7em;
        font-weight: 500;
    }
    
    .scenario-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    
    .scenario-modal .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 0;
    }
    
    .scenario-modal .modal-header {
        background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
    }
    
    .scenario-modal .modal-header button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }
    
    .scenario-briefing {
        padding: 30px;
    }
    
    .briefing-details {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    
    .briefing-details p {
        margin: 8px 0;
        color: #495057;
    }
    
    .briefing-details strong {
        color: #2c3e50;
    }
    
    .scenario-controls {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-top: 25px;
    }
    
    .scenario-controls select {
        flex: 1;
        padding: 10px;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        font-size: 0.9em;
    }
    
    .launch-btn {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .launch-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
    }
    
    @media (max-width: 768px) {
        .scenarios-grid {
            grid-template-columns: 1fr;
        }
        
        .frameworks-grid {
            grid-template-columns: 1fr;
        }
        
        .scenario-meta {
            grid-template-columns: 1fr;
        }
    }
`;

// Style hinzufügen
const incidentScenariosStyleSheet = document.createElement('style');
incidentScenariosStyleSheet.textContent = incidentScenariosCSS;
document.head.appendChild(incidentScenariosStyleSheet);

// Global instance
window.incidentScenarios = new IncidentResponseScenarios();
