// AI-Enhanced Feedback System für Interactive Cases v3.0
// Intelligente Analyse und personalisierte Verbesserungsvorschläge

class AIFeedbackSystem {
    constructor() {
        this.version = '3.0.0';
        this.feedbackEngine = new FeedbackEngine();
        this.learningAnalyzer = new LearningAnalyzer();
        this.recommendationEngine = new RecommendationEngine();
        this.adaptiveMentor = new AdaptiveMentor();
        
        this.userProfiles = new Map();
        this.feedbackHistory = new Map();
        this.learningPatterns = new Map();
        
        this.initializeAISystem();
    }

    initializeAISystem() {
        console.log('🤖 AI Feedback System v3.0 initializing...');
        
        // Initialize AI Models (simulated)
        this.models = {
            performance_analyzer: new PerformanceAnalyzer(),
            weakness_detector: new WeaknessDetector(),
            strength_identifier: new StrengthIdentifier(),
            learning_style_analyzer: new LearningStyleAnalyzer(),
            career_path_advisor: new CareerPathAdvisor()
        };
        
        // Setup real-time feedback triggers
        this.setupRealtimeFeedback();
        
        console.log('✅ AI Feedback System ready');
    }

    // Comprehensive Case Analysis
    async analyzeCasePerformance(userId, caseResults) {
        console.log(`🔍 Analyzing performance for user ${userId}`);
        
        const analysis = {
            overall_assessment: await this.generateOverallAssessment(caseResults),
            skill_breakdown: await this.analyzeSkillAreas(caseResults),
            decision_quality: await this.analyzeDecisionMaking(caseResults),
            stress_management: await this.analyzeStressResponse(caseResults),
            learning_progression: await this.trackLearningProgression(userId, caseResults),
            personalized_feedback: await this.generatePersonalizedFeedback(userId, caseResults),
            improvement_roadmap: await this.createImprovementRoadmap(userId, caseResults),
            next_steps: await this.recommendNextSteps(userId, caseResults)
        };

        // Store analysis for future reference
        this.storeFeedbackData(userId, analysis);
        
        return analysis;
    }

    async generateOverallAssessment(caseResults) {
        const metrics = caseResults.performance_metrics;
        
        // AI-style assessment generation
        const assessmentFactors = {
            technical_accuracy: metrics.technical_score / 100,
            time_efficiency: metrics.completion_time / metrics.expected_time,
            decision_quality: metrics.decision_score / 100,
            stress_handling: 1 - (metrics.stress_level / 10),
            communication: metrics.communication_score / 100
        };

        // Weighted overall score
        const weightedScore = (
            assessmentFactors.technical_accuracy * 0.3 +
            assessmentFactors.time_efficiency * 0.2 +
            assessmentFactors.decision_quality * 0.25 +
            assessmentFactors.stress_handling * 0.15 +
            assessmentFactors.communication * 0.1
        ) * 100;

        let assessment_level, feedback_tone, specific_insights;
        
        if (weightedScore >= 90) {
            assessment_level = 'exceptional';
            feedback_tone = 'congratulatory';
            specific_insights = [
                'Ihre Performance zeigt Merkmale eines Senior-Level Cybersecurity Professionals',
                'Exzellente Balance zwischen Schnelligkeit und Gründlichkeit',
                'Hervorragendes Situationsbewusstsein unter Druck'
            ];
        } else if (weightedScore >= 75) {
            assessment_level = 'proficient';
            feedback_tone = 'encouraging';
            specific_insights = [
                'Solide Grundlagen mit klarem Verbesserungspotential',
                'Gute technische Fähigkeiten, Fokus auf Effizienz möglich',
                'Stress-Management könnte mit Training optimiert werden'
            ];
        } else if (weightedScore >= 60) {
            assessment_level = 'developing';
            feedback_tone = 'constructive';
            specific_insights = [
                'Grundverständnis vorhanden, systematisches Training empfohlen',
                'Entscheidungsfindung braucht mehr Struktur und Praxis',
                'Technische Kenntnisse sollten vertieft werden'
            ];
        } else {
            assessment_level = 'foundational';
            feedback_tone = 'supportive';
            specific_insights = [
                'Solider Ausgangspunkt für intensive Weiterentwicklung',
                'Fokus auf Grundlagen und systematisches Lernen erforderlich',
                'Regelmäßige Übung wird schnelle Fortschritte bringen'
            ];
        }

        return {
            overall_score: Math.round(weightedScore),
            level: assessment_level,
            tone: feedback_tone,
            key_insights: specific_insights,
            percentile: this.calculatePercentile(weightedScore),
            improvement_potential: this.calculateImprovementPotential(assessmentFactors)
        };
    }

    async analyzeSkillAreas(caseResults) {
        const skillAreas = {
            'Incident Response': {
                score: caseResults.incident_response_score || 85,
                strengths: ['Schnelle Erkennung', 'Strukturiertes Vorgehen'],
                weaknesses: ['Dokumentation', 'Nachbereitung'],
                improvement_actions: [
                    'Incident Response Playbooks studieren',
                    'NIST Framework vertiefen',
                    'Dokumentation-Templates verwenden'
                ]
            },
            'Technical Analysis': {
                score: caseResults.technical_analysis_score || 78,
                strengths: ['Tool-Verwendung', 'Dateninterpretation'],
                weaknesses: ['Forensik-Details', 'Advanced Malware Analysis'],
                improvement_actions: [
                    'Malware Analysis Kurs absolvieren',
                    'Forensik-Tools vertiefen',
                    'Hands-on Labs durchführen'
                ]
            },
            'Communication': {
                score: caseResults.communication_score || 72,
                strengths: ['Klarheit', 'Strukturierung'],
                weaknesses: ['Stakeholder Management', 'Stresskommunikation'],
                improvement_actions: [
                    'Crisis Communication Training',
                    'Präsentationsfähigkeiten verbessern',
                    'Management Briefings üben'
                ]
            },
            'Risk Assessment': {
                score: caseResults.risk_assessment_score || 80,
                strengths: ['Risiko-Identifikation', 'Prioritätensetzung'],
                weaknesses: ['Quantitative Bewertung', 'Business Impact'],
                improvement_actions: [
                    'Risk Management Frameworks lernen',
                    'Business Impact Analysis üben',
                    'Quantitative Risk Assessment Training'
                ]
            }
        };

        // Add dynamic insights based on performance patterns
        Object.keys(skillAreas).forEach(skill => {
            skillAreas[skill].trend = this.calculateSkillTrend(skill, caseResults);
            skillAreas[skill].next_milestone = this.getNextMilestone(skill, skillAreas[skill].score);
            skillAreas[skill].estimated_improvement_time = this.estimateImprovementTime(skillAreas[skill].score);
        });

        return skillAreas;
    }

    async analyzeDecisionMaking(caseResults) {
        const decisions = caseResults.decisions || [];
        
        const analysis = {
            decision_speed: this.analyzeDecisionSpeed(decisions),
            decision_accuracy: this.analyzeDecisionAccuracy(decisions),
            risk_tolerance: this.analyzeRiskTolerance(decisions),
            information_usage: this.analyzeInformationUsage(decisions),
            pattern_recognition: this.analyzePatternRecognition(decisions)
        };

        // Generate personalized insights
        const insights = this.generateDecisionInsights(analysis);
        
        return {
            ...analysis,
            insights: insights,
            cognitive_style: this.identifyCognitiveStyle(analysis),
            optimization_recommendations: this.recommendDecisionOptimizations(analysis)
        };
    }

    generateDecisionInsights(analysis) {
        const insights = [];
        
        if (analysis.decision_speed < 0.6) {
            insights.push({
                type: 'improvement',
                title: '⚡ Entscheidungsgeschwindigkeit optimieren',
                description: 'Sie nehmen sich viel Zeit für Entscheidungen. In kritischen Situationen kann schnelleres Handeln entscheidend sein.',
                actionable_steps: [
                    'Entscheidungs-Frameworks (OODA Loop) trainieren',
                    'Zeitboxing für Entscheidungen einsetzen',
                    'Intuition und Erfahrung mehr vertrauen'
                ]
            });
        }

        if (analysis.decision_accuracy > 0.85) {
            insights.push({
                type: 'strength',
                title: '🎯 Exzellente Entscheidungsqualität',
                description: 'Ihre Entscheidungen sind konsistent richtig und gut durchdacht.',
                leverage_opportunities: [
                    'Mentoring-Rolle für andere übernehmen',
                    'Decision Review Boards unterstützen',
                    'Best Practice Dokumentation erstellen'
                ]
            });
        }

        if (analysis.risk_tolerance < 0.3) {
            insights.push({
                type: 'balance',
                title: '🛡️ Sehr konservative Risikoeinstellung',
                description: 'Sie bevorzugen sehr sichere Optionen. Manchmal sind kalkulierte Risiken notwendig.',
                balancing_actions: [
                    'Risk/Reward Analyse vertiefen',
                    'Calculated Risk Taking üben',
                    'Worst-Case Szenarien weniger gewichten'
                ]
            });
        }

        return insights;
    }

    async generatePersonalizedFeedback(userId, caseResults) {
        const userProfile = this.getUserProfile(userId);
        const learningStyle = userProfile.learning_style || 'visual';
        const experienceLevel = userProfile.experience_level || 'intermediate';
        
        // Personalized feedback based on learning style and experience
        const feedbackTemplates = {
            visual: {
                format: 'infographic',
                emphasis: 'charts_and_diagrams',
                language_style: 'descriptive_visual'
            },
            auditory: {
                format: 'narrative',
                emphasis: 'explanations_and_stories',
                language_style: 'conversational'
            },
            kinesthetic: {
                format: 'action_oriented',
                emphasis: 'hands_on_recommendations',
                language_style: 'direct_actionable'
            },
            analytical: {
                format: 'detailed_breakdown',
                emphasis: 'data_and_metrics',
                language_style: 'technical_precise'
            }
        };

        const template = feedbackTemplates[learningStyle];
        
        const personalizedFeedback = {
            greeting: this.generatePersonalizedGreeting(userId, caseResults),
            main_message: this.generateMainFeedbackMessage(caseResults, template),
            strengths_highlight: this.highlightStrengths(caseResults, template),
            improvement_focus: this.focusImprovementAreas(caseResults, template),
            motivational_element: this.addMotivationalElement(userProfile, caseResults),
            learning_path_adjustment: this.adjustLearningPath(userId, caseResults)
        };

        return personalizedFeedback;
    }

    generatePersonalizedGreeting(userId, caseResults) {
        const performance = caseResults.overall_score || 75;
        const timeOfDay = new Date().getHours();
        
        let greeting = timeOfDay < 12 ? 'Guten Morgen' : timeOfDay < 18 ? 'Guten Tag' : 'Guten Abend';
        
        if (performance >= 90) {
            return `${greeting}! 🌟 Wow, das war eine beeindruckende Performance!`;
        } else if (performance >= 75) {
            return `${greeting}! 👍 Solide Arbeit in dieser Simulation!`;
        } else if (performance >= 60) {
            return `${greeting}! 📚 Guter Fortschritt, es gibt noch einiges zu optimieren.`;
        } else {
            return `${greeting}! 💪 Jeder Experte hat mal angefangen - Sie sind auf dem richtigen Weg!`;
        }
    }

    async createImprovementRoadmap(userId, caseResults) {
        const weakAreas = this.identifyWeakestAreas(caseResults);
        const userGoals = this.getUserGoals(userId);
        const timeAvailable = this.getAvailableStudyTime(userId);
        
        const roadmap = {
            immediate_actions: this.generateImmediateActions(weakAreas),
            short_term_goals: this.generateShortTermGoals(weakAreas, timeAvailable),
            long_term_objectives: this.generateLongTermObjectives(userGoals),
            learning_resources: this.recommendLearningResources(weakAreas),
            practice_scenarios: this.recommendPracticeScenarios(weakAreas),
            milestone_tracking: this.createMilestoneTracking(weakAreas)
        };

        return roadmap;
    }

    generateImmediateActions(weakAreas) {
        const actionTemplates = {
            'incident_response': [
                '📖 NIST Cybersecurity Framework Incident Response Sektion studieren (30 Min)',
                '🎥 "Incident Response Best Practices" Video ansehen',
                '📝 Incident Response Checkliste erstellen und auswendig lernen'
            ],
            'technical_analysis': [
                '🔧 Malware Analysis Sandbox (Any.run) ausprobieren (45 Min)',
                '📊 SIEM Query Tutorial durcharbeiten',
                '🔍 Wireshark Grundlagen-Tutorial absolvieren'
            ],
            'communication': [
                '🎯 Elevator Pitch für Cybersecurity Incidents entwickeln',
                '📞 Krisenkommunikation Leitfaden erstellen',
                '👥 Stakeholder Mapping für IT-Sicherheit durchführen'
            ],
            'risk_assessment': [
                '📐 CVSS Scoring System verstehen und üben',
                '💼 Business Impact Analysis Template studieren',
                '⚖️ Risk Matrix für typische Cyber-Threats erstellen'
            ]
        };

        const immediateActions = [];
        weakAreas.forEach(area => {
            if (actionTemplates[area.id]) {
                immediateActions.push({
                    area: area.name,
                    priority: area.priority,
                    actions: actionTemplates[area.id],
                    estimated_time: '2-3 Stunden',
                    expected_improvement: '+15-25 Punkte'
                });
            }
        });

        return immediateActions;
    }

    async recommendNextSteps(userId, caseResults) {
        const userLevel = this.assessUserLevel(caseResults);
        const preferences = this.getUserPreferences(userId);
        
        const recommendations = {
            next_case_suggestions: this.suggestNextCases(userLevel, caseResults),
            skill_building_priorities: this.prioritizeSkillBuilding(caseResults),
            certification_paths: this.suggestCertificationPaths(userLevel),
            real_world_applications: this.suggestRealWorldApplications(caseResults),
            community_engagement: this.suggestCommunityEngagement(userLevel)
        };

        return recommendations;
    }

    suggestNextCases(userLevel, caseResults) {
        const baseCases = [
            {
                id: 'advanced_apt_defense',
                title: 'Advanced APT Defense Simulation',
                difficulty: 'expert',
                focus_areas: ['Advanced Threat Detection', 'Attribution Analysis', 'Threat Intelligence'],
                estimated_time: '60-90 minutes',
                prerequisites: ['Strong incident response skills', 'Advanced technical knowledge']
            },
            {
                id: 'cloud_security_breach',
                title: 'Cloud Security Breach Response',
                difficulty: 'advanced',
                focus_areas: ['Cloud Architecture', 'Container Security', 'DevSecOps'],
                estimated_time: '45-60 minutes',
                prerequisites: ['Basic cloud knowledge', 'Infrastructure understanding']
            },
            {
                id: 'supply_chain_attack',
                title: 'Supply Chain Attack Investigation',
                difficulty: 'expert',
                focus_areas: ['Third-party Risk', 'Vendor Management', 'Complex Attribution'],
                estimated_time: '75-100 minutes',
                prerequisites: ['Advanced investigation skills', 'Business process understanding']
            }
        ];

        // Filter based on user performance and level
        const suitableCases = baseCases.filter(case_item => {
            if (userLevel === 'beginner') return case_item.difficulty === 'intermediate';
            if (userLevel === 'intermediate') return ['intermediate', 'advanced'].includes(case_item.difficulty);
            if (userLevel === 'advanced') return ['advanced', 'expert'].includes(case_item.difficulty);
            return true;
        });

        return suitableCases.map(case_item => ({
            ...case_item,
            relevance_score: this.calculateRelevanceScore(case_item, caseResults),
            skill_gap_coverage: this.calculateSkillGapCoverage(case_item, caseResults)
        }));
    }

    // Real-time Feedback während der Simulation
    setupRealtimeFeedback() {
        setInterval(() => {
            this.analyzeCurrentPerformance();
        }, 30000); // Alle 30 Sekunden
    }

    analyzeCurrentPerformance() {
        // Analyse der aktuellen Performance während einer laufenden Simulation
        if (window.enhancedCases && window.enhancedCases.getCurrentSimulation) {
            const currentState = window.enhancedCases.getCurrentSimulation();
            if (currentState) {
                this.provideRealtimeInsights(currentState);
            }
        }
    }

    provideRealtimeInsights(simulationState) {
        const insights = this.generateRealtimeInsights(simulationState);
        
        if (insights.urgent_advice) {
            this.showUrgentAdvice(insights.urgent_advice);
        }
        
        if (insights.performance_warning) {
            this.showPerformanceWarning(insights.performance_warning);
        }
        
        if (insights.opportunity_highlight) {
            this.highlightOpportunity(insights.opportunity_highlight);
        }
    }

    generateRealtimeInsights(state) {
        const insights = {};
        
        // Zeitmanagement-Insights
        if (state.time_remaining < state.total_time * 0.2 && state.completion_progress < 0.7) {
            insights.urgent_advice = {
                type: 'time_management',
                message: '⏰ Zeit wird knapp! Fokussieren Sie sich auf die kritischsten Entscheidungen.',
                action: 'Priorisierung überdenken'
            };
        }

        // Stress-Level Monitoring
        if (state.stress_level > 8 && state.decision_accuracy < 0.7) {
            insights.performance_warning = {
                type: 'stress_impact',
                message: '🧘‍♂️ Hoher Stress beeinträchtigt Ihre Entscheidungsqualität. Kurze Pause empfohlen.',
                action: 'Stress-Management aktivieren'
            };
        }

        // Opportunity Detection
        if (state.tool_usage_efficiency < 0.6) {
            insights.opportunity_highlight = {
                type: 'tool_optimization',
                message: '🔧 Sie nutzen die verfügbaren Tools nicht optimal. Tool-Tutorials verfügbar.',
                action: 'Tool-Effizienz verbessern'
            };
        }

        return insights;
    }

    // Integration mit Master Suite
    integrateWithMasterSuite() {
        if (window.masterSuite) {
            window.masterSuite.systems.set('aiFeedback', this);
            
            // Event Listeners
            window.masterSuite.eventBus.on('case:completed', (data) => {
                this.handleCaseCompletion(data);
            });

            window.masterSuite.eventBus.on('user:struggling', (data) => {
                this.provideSupportiveFeedback(data);
            });

            console.log('✅ AI Feedback System integrated with Master Suite');
        }
    }

    // Utility Methods
    getUserProfile(userId) {
        return this.userProfiles.get(userId) || {
            learning_style: 'visual',
            experience_level: 'intermediate',
            goals: ['certification', 'career_advancement'],
            time_available: 'moderate'
        };
    }

    calculatePercentile(score) {
        // Simplified percentile calculation
        if (score >= 95) return 95;
        if (score >= 90) return 85;
        if (score >= 80) return 70;
        if (score >= 70) return 55;
        if (score >= 60) return 40;
        return 25;
    }

    calculateRelevanceScore(case_item, results) {
        // Calculate how relevant a case is based on user's weak areas
        const weakAreas = this.identifyWeakestAreas(results);
        const caseAreas = case_item.focus_areas;
        
        const overlap = weakAreas.filter(weak => 
            caseAreas.some(area => area.toLowerCase().includes(weak.id.toLowerCase()))
        ).length;
        
        return (overlap / weakAreas.length) * 100;
    }

    identifyWeakestAreas(results) {
        const areas = [
            { id: 'incident_response', score: results.incident_response_score || 75, name: 'Incident Response' },
            { id: 'technical_analysis', score: results.technical_analysis_score || 78, name: 'Technical Analysis' },
            { id: 'communication', score: results.communication_score || 72, name: 'Communication' },
            { id: 'risk_assessment', score: results.risk_assessment_score || 80, name: 'Risk Assessment' }
        ];
        
        return areas
            .filter(area => area.score < 80)
            .sort((a, b) => a.score - b.score)
            .slice(0, 2); // Top 2 weakest areas
    }
}

// Supporting Classes
class PerformanceAnalyzer {
    analyze(data) {
        return {
            efficiency_score: this.calculateEfficiency(data),
            accuracy_score: this.calculateAccuracy(data),
            consistency_score: this.calculateConsistency(data)
        };
    }

    calculateEfficiency(data) {
        return (data.tasks_completed / data.time_spent) * 100;
    }

    calculateAccuracy(data) {
        return (data.correct_decisions / data.total_decisions) * 100;
    }

    calculateConsistency(data) {
        // Calculate performance consistency across different phases
        const phaseScores = data.phase_scores || [];
        if (phaseScores.length < 2) return 100;
        
        const variance = this.calculateVariance(phaseScores);
        return Math.max(0, 100 - variance);
    }

    calculateVariance(scores) {
        const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        const squaredDiffs = scores.map(score => Math.pow(score - mean, 2));
        return squaredDiffs.reduce((sum, diff) => sum + diff, 0) / scores.length;
    }
}

class WeaknessDetector {
    detectWeaknesses(performanceData) {
        const weaknesses = [];
        
        if (performanceData.decision_speed < 0.6) {
            weaknesses.push({
                area: 'Decision Speed',
                severity: 'medium',
                description: 'Langsame Entscheidungsfindung unter Zeitdruck',
                improvement_suggestions: [
                    'Entscheidungs-Frameworks trainieren',
                    'Zeitboxing-Techniken anwenden',
                    'Pattern Recognition verbessern'
                ]
            });
        }

        if (performanceData.technical_accuracy < 0.7) {
            weaknesses.push({
                area: 'Technical Knowledge',
                severity: 'high',
                description: 'Lücken in technischen Cybersecurity-Kenntnissen',
                improvement_suggestions: [
                    'Fundamentale Konzepte wiederholen',
                    'Hands-on Labs durchführen',
                    'Zertifizierung anstreben'
                ]
            });
        }

        return weaknesses;
    }
}

class StrengthIdentifier {
    identifyStrengths(performanceData) {
        const strengths = [];
        
        if (performanceData.stress_management > 0.8) {
            strengths.push({
                area: 'Stress Management',
                level: 'high',
                description: 'Exzellente Performance unter Druck',
                leverage_opportunities: [
                    'Incident Response Team Leader',
                    'Crisis Management Rolle',
                    'Training und Mentoring'
                ]
            });
        }

        if (performanceData.communication_clarity > 0.85) {
            strengths.push({
                area: 'Communication',
                level: 'high',
                description: 'Klare und effektive Kommunikation',
                leverage_opportunities: [
                    'Stakeholder Relations',
                    'Team Coordination',
                    'Executive Reporting'
                ]
            });
        }

        return strengths;
    }
}

class LearningStyleAnalyzer {
    analyzeLearningStyle(behaviorData) {
        const patterns = {
            visual_score: this.calculateVisualPreference(behaviorData),
            auditory_score: this.calculateAuditoryPreference(behaviorData),
            kinesthetic_score: this.calculateKinestheticPreference(behaviorData),
            analytical_score: this.calculateAnalyticalPreference(behaviorData)
        };

        const dominantStyle = Object.keys(patterns).reduce((a, b) => 
            patterns[a] > patterns[b] ? a : b
        ).replace('_score', '');

        return {
            dominant_style: dominantStyle,
            style_scores: patterns,
            learning_recommendations: this.generateLearningRecommendations(dominantStyle)
        };
    }

    generateLearningRecommendations(style) {
        const recommendations = {
            visual: [
                'Infografiken und Diagramme nutzen',
                'Mind Maps für Konzepte erstellen',
                'Video-Tutorials bevorzugen'
            ],
            auditory: [
                'Podcasts und Audio-Inhalte nutzen',
                'Diskussionen und Gruppenlernen',
                'Verbale Erklärungen bevorzugen'
            ],
            kinesthetic: [
                'Hands-on Labs und Simulationen',
                'Praktische Übungen bevorzugen',
                'Learning by Doing Ansatz'
            ],
            analytical: [
                'Detaillierte technische Dokumentation',
                'Strukturierte Lernpfade',
                'Daten-getriebene Ansätze'
            ]
        };

        return recommendations[style] || recommendations.visual;
    }
}

class CareerPathAdvisor {
    generateCareerAdvice(skillProfile, performance) {
        const careerPaths = [
            {
                title: 'Security Analyst',
                match_score: this.calculateMatchScore(skillProfile, ['technical_analysis', 'incident_response']),
                growth_potential: 'high',
                next_steps: ['GCIH Certification', 'SIEM Mastery', 'Threat Hunting Skills']
            },
            {
                title: 'Incident Response Specialist',
                match_score: this.calculateMatchScore(skillProfile, ['incident_response', 'stress_management']),
                growth_potential: 'very_high',
                next_steps: ['GCFA Certification', 'Digital Forensics', 'Crisis Leadership']
            },
            {
                title: 'Security Consultant',
                match_score: this.calculateMatchScore(skillProfile, ['communication', 'risk_assessment']),
                growth_potential: 'high',
                next_steps: ['Business Acumen', 'CISSP Certification', 'Client Management']
            }
        ];

        return careerPaths
            .sort((a, b) => b.match_score - a.match_score)
            .slice(0, 3);
    }

    calculateMatchScore(skillProfile, requiredSkills) {
        const relevantScores = requiredSkills.map(skill => skillProfile[skill] || 50);
        return relevantScores.reduce((sum, score) => sum + score, 0) / relevantScores.length;
    }
}

// Global Instance
window.aiFeedbackSystem = new AIFeedbackSystem();

// Integration with Enhanced Cases
document.addEventListener('DOMContentLoaded', () => {
    if (window.aiFeedbackSystem) {
        window.aiFeedbackSystem.integrateWithMasterSuite();
        console.log('🤖 AI Feedback System v3.0 initialized');
    }
});
