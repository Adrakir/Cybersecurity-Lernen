// Cybersecurity Mentorship Program - Expert Guidance & Career Development
class CybersecurityMentorshipProgram {
    constructor() {
        this.mentors = new Map();
        this.mentees = new Map();
        this.mentorshipPairs = new Map();
        this.sessions = new Map();
        this.careerPaths = {};
        this.expertiseAreas = {};
        this.mentorshipPrograms = {};
        this.certifications = {};
        this.industry = {};
        this.initializeProgram();
    }

    initializeProgram() {
        this.setupExpertiseAreas();
        this.setupCareerPaths();
        this.setupMentorshipPrograms();
        this.setupIndustryConnections();
        this.setupCertifications();
        this.initializeMentors();
    }

    setupExpertiseAreas() {
        this.expertiseAreas = {
            penetration_testing: {
                id: "penetration_testing",
                name: "Penetration Testing & Ethical Hacking",
                description: "Offensive security, vulnerability assessment, red team operations",
                skills: ["OSCP", "CEH", "GPEN", "Web App Testing", "Network Penetration", "Wireless Security"],
                careerLevels: ["Junior Pentester", "Senior Pentester", "Lead Security Consultant", "Red Team Lead"],
                avgSalary: { junior: 75000, senior: 110000, lead: 140000, expert: 180000 },
                demandLevel: "Very High",
                icon: "🎯"
            },
            incident_response: {
                id: "incident_response",
                name: "Incident Response & Digital Forensics",
                description: "Cyber incident handling, malware analysis, digital investigations",
                skills: ["GCIH", "GCFA", "GNFA", "Malware Analysis", "Memory Forensics", "Network Forensics"],
                careerLevels: ["SOC Analyst", "Incident Responder", "Senior IR Specialist", "CISO"],
                avgSalary: { junior: 70000, senior: 105000, lead: 135000, expert: 170000 },
                demandLevel: "High",
                icon: "🚨"
            },
            cloud_security: {
                id: "cloud_security",
                name: "Cloud Security Architecture",
                description: "AWS/Azure/GCP security, DevSecOps, container security",
                skills: ["AWS Security", "Azure Security", "GCP Security", "Kubernetes Security", "DevSecOps", "CSPM"],
                careerLevels: ["Cloud Security Analyst", "Cloud Security Engineer", "Cloud Security Architect", "Cloud CISO"],
                avgSalary: { junior: 80000, senior: 120000, lead: 150000, expert: 190000 },
                demandLevel: "Very High",
                icon: "☁️"
            },
            governance_compliance: {
                id: "governance_compliance",
                name: "Governance, Risk & Compliance",
                description: "Risk management, compliance frameworks, security governance",
                skills: ["CISA", "CISM", "CISSP", "ISO 27001", "SOX", "GDPR", "Risk Assessment"],
                careerLevels: ["Compliance Analyst", "Risk Analyst", "GRC Manager", "Chief Risk Officer"],
                avgSalary: { junior: 65000, senior: 95000, lead: 125000, expert: 160000 },
                demandLevel: "High",
                icon: "📋"
            },
            security_architecture: {
                id: "security_architecture",
                name: "Security Architecture & Engineering",
                description: "Security design, enterprise architecture, security engineering",
                skills: ["SABSA", "TOGAF", "Security Design", "Zero Trust", "Network Security", "Application Security"],
                careerLevels: ["Security Engineer", "Security Architect", "Principal Architect", "Chief Architect"],
                avgSalary: { junior: 85000, senior: 125000, lead: 155000, expert: 200000 },
                demandLevel: "High",
                icon: "🏗️"
            },
            threat_intelligence: {
                id: "threat_intelligence",
                name: "Threat Intelligence & Hunting",
                description: "Cyber threat analysis, threat hunting, intelligence operations",
                skills: ["SANS FOR578", "Threat Hunting", "MITRE ATT&CK", "STIX/TAXII", "Threat Modeling"],
                careerLevels: ["Threat Analyst", "Senior Threat Hunter", "Threat Intelligence Lead", "CTI Director"],
                avgSalary: { junior: 75000, senior: 110000, lead: 140000, expert: 175000 },
                demandLevel: "High",
                icon: "🔍"
            }
        };
    }

    setupCareerPaths() {
        this.careerPaths = {
            technical_specialist: {
                id: "technical_specialist",
                name: "Technical Security Specialist",
                description: "Deep technical expertise in specific security domains",
                progression: [
                    { level: 1, title: "Junior Security Analyst", experience: "0-2 years", focus: "Learning fundamentals, basic analysis" },
                    { level: 2, title: "Security Analyst", experience: "2-4 years", focus: "Specialized skills, incident handling" },
                    { level: 3, title: "Senior Security Specialist", experience: "4-7 years", focus: "Advanced techniques, mentoring" },
                    { level: 4, title: "Principal Security Expert", experience: "7-12 years", focus: "Subject matter expertise, research" },
                    { level: 5, title: "Distinguished Security Engineer", experience: "12+ years", focus: "Industry leadership, innovation" }
                ],
                keySkills: ["Technical Depth", "Problem Solving", "Tool Mastery", "Research Skills"],
                averageTimeline: "8-15 years to senior level"
            },
            management_leadership: {
                id: "management_leadership",
                name: "Security Management & Leadership",
                description: "Leading security teams and strategic initiatives",
                progression: [
                    { level: 1, title: "Team Lead", experience: "3-5 years", focus: "Small team management, tactical decisions" },
                    { level: 2, title: "Security Manager", experience: "5-8 years", focus: "Department management, budget oversight" },
                    { level: 3, title: "Security Director", experience: "8-12 years", focus: "Strategic planning, cross-department coordination" },
                    { level: 4, title: "VP of Security", experience: "12-18 years", focus: "Business alignment, organizational strategy" },
                    { level: 5, title: "Chief Information Security Officer", experience: "15+ years", focus: "Executive leadership, board communication" }
                ],
                keySkills: ["Leadership", "Strategy", "Communication", "Business Acumen"],
                averageTimeline: "10-20 years to executive level"
            },
            consulting_advisory: {
                id: "consulting_advisory",
                name: "Security Consulting & Advisory",
                description: "Independent consulting and advisory services",
                progression: [
                    { level: 1, title: "Associate Consultant", experience: "2-4 years", focus: "Client support, specific expertise" },
                    { level: 2, title: "Senior Consultant", experience: "4-7 years", focus: "Project leadership, client relationships" },
                    { level: 3, title: "Principal Consultant", experience: "7-12 years", focus: "Practice development, thought leadership" },
                    { level: 4, title: "Partner/Director", experience: "12-18 years", focus: "Business development, strategic advisory" },
                    { level: 5, title: "Managing Partner", experience: "18+ years", focus: "Firm leadership, industry influence" }
                ],
                keySkills: ["Client Relations", "Business Development", "Thought Leadership", "Communication"],
                averageTimeline: "12-25 years to partnership"
            }
        };
    }

    setupMentorshipPrograms() {
        this.mentorshipPrograms = {
            career_starter: {
                id: "career_starter",
                name: "🌱 Cybersecurity Career Starter",
                description: "For individuals new to cybersecurity or considering career transition",
                duration: "3-6 months",
                sessions: 12,
                objectives: [
                    "Understand cybersecurity landscape and career options",
                    "Develop fundamental technical skills",
                    "Build professional network",
                    "Create career development plan",
                    "Prepare for entry-level certifications"
                ],
                deliverables: ["Career roadmap", "Skills assessment", "Certification plan", "Portfolio projects"],
                mentorRequirements: "3+ years experience, passion for teaching"
            },
            skill_advancement: {
                id: "skill_advancement",
                name: "⚡ Technical Skill Advancement",
                description: "For professionals looking to advance their technical expertise",
                duration: "6-12 months",
                sessions: 20,
                objectives: [
                    "Master advanced technical skills in chosen specialization",
                    "Complete hands-on projects and challenges",
                    "Prepare for advanced certifications",
                    "Develop thought leadership capabilities",
                    "Build reputation in security community"
                ],
                deliverables: ["Advanced certification", "Technical blog posts", "Conference presentation", "Open source contributions"],
                mentorRequirements: "7+ years experience, recognized expertise"
            },
            leadership_development: {
                id: "leadership_development",
                name: "👑 Security Leadership Development",
                description: "For senior professionals transitioning to leadership roles",
                duration: "9-18 months",
                sessions: 30,
                objectives: [
                    "Develop leadership and management skills",
                    "Learn strategic thinking and business alignment",
                    "Build executive communication skills",
                    "Understand organizational dynamics",
                    "Create succession planning strategies"
                ],
                deliverables: ["Leadership assessment", "Management training", "Executive presentation", "Team development plan"],
                mentorRequirements: "12+ years experience, current leadership role"
            },
            entrepreneur_track: {
                id: "entrepreneur_track",
                name: "🚀 Cybersecurity Entrepreneur Track",
                description: "For professionals interested in starting security businesses",
                duration: "12-24 months",
                sessions: 40,
                objectives: [
                    "Validate business ideas and market opportunities",
                    "Develop business plans and funding strategies",
                    "Build products and services",
                    "Establish market presence and customer base",
                    "Scale operations and team"
                ],
                deliverables: ["Business plan", "MVP product", "Customer validation", "Funding pitch", "Growth strategy"],
                mentorRequirements: "Successful security entrepreneur or executive"
            }
        };
    }

    setupIndustryConnections() {
        this.industry = {
            companies: [
                { name: "CrowdStrike", type: "Cybersecurity Vendor", specialties: ["Endpoint Security", "Threat Intelligence"] },
                { name: "Palo Alto Networks", type: "Cybersecurity Vendor", specialties: ["Network Security", "Cloud Security"] },
                { name: "Microsoft", type: "Technology Giant", specialties: ["Cloud Security", "Enterprise Security"] },
                { name: "Amazon", type: "Cloud Provider", specialties: ["Cloud Security", "DevSecOps"] },
                { name: "Deloitte", type: "Consulting", specialties: ["Risk Management", "Compliance"] },
                { name: "KPMG", type: "Consulting", specialties: ["Cyber Risk", "Incident Response"] }
            ],
            events: [
                { name: "BSides", type: "Community Conference", focus: "Technical Skills", frequency: "Multiple locations/year" },
                { name: "DEF CON", type: "Hacker Conference", focus: "Cutting-edge Research", frequency: "Annual" },
                { name: "RSA Conference", type: "Industry Conference", focus: "Business & Technology", frequency: "Annual" },
                { name: "Black Hat", type: "Security Conference", focus: "Advanced Techniques", frequency: "Multiple events/year" }
            ],
            organizations: [
                { name: "ISACA", type: "Professional Association", focus: "Governance & Risk" },
                { name: "(ISC)²", type: "Certification Body", focus: "CISSP & Security Education" },
                { name: "SANS", type: "Training Organization", focus: "Technical Training" },
                { name: "EC-Council", type: "Certification Body", focus: "Ethical Hacking" }
            ]
        };
    }

    setupCertifications() {
        this.certifications = {
            entry_level: [
                { name: "CompTIA Security+", difficulty: "Beginner", time: "2-3 months", cost: 370, description: "Foundation security concepts" },
                { name: "CompTIA CySA+", difficulty: "Intermediate", time: "3-4 months", cost: 392, description: "Cybersecurity analyst skills" },
                { name: "GSEC", difficulty: "Intermediate", time: "4-6 months", cost: 7000, description: "Hands-on security skills" }
            ],
            advanced: [
                { name: "CISSP", difficulty: "Advanced", time: "6-12 months", cost: 749, description: "Security leadership and architecture" },
                { name: "OSCP", difficulty: "Advanced", time: "6-18 months", cost: 1499, description: "Penetration testing mastery" },
                { name: "CISM", difficulty: "Advanced", time: "6-9 months", cost: 760, description: "Information security management" }
            ],
            expert: [
                { name: "CISSP", difficulty: "Expert", time: "12+ months", cost: 749, description: "Security architecture and engineering" },
                { name: "SABSA", difficulty: "Expert", time: "12-18 months", cost: 5000, description: "Security architecture methodology" },
                { name: "CCIE Security", difficulty: "Expert", time: "18-24 months", cost: 1600, description: "Network security expertise" }
            ]
        };
    }

    initializeMentors() {
        const sampleMentors = [
            {
                id: "mentor_001",
                name: "Sarah Chen",
                title: "Senior Security Architect",
                company: "Microsoft",
                experience: 12,
                expertise: ["cloud_security", "security_architecture"],
                specializations: ["Azure Security", "Zero Trust", "DevSecOps"],
                certifications: ["CISSP", "SABSA", "Azure Security Engineer"],
                mentoringExperience: 5,
                availableSlots: 3,
                rating: 4.9,
                bio: "Passionate about helping others transition into cloud security roles",
                hourlyRate: null, // Volunteer
                timezone: "PST"
            },
            {
                id: "mentor_002",
                name: "Marcus Rodriguez",
                title: "Principal Security Consultant",
                company: "Independent",
                experience: 15,
                expertise: ["penetration_testing", "incident_response"],
                specializations: ["Advanced Persistent Threats", "Red Team Operations", "Malware Analysis"],
                certifications: ["OSCP", "GPEN", "GCFA"],
                mentoringExperience: 8,
                availableSlots: 2,
                rating: 4.8,
                bio: "Former NSA analyst, now helping next generation of ethical hackers",
                hourlyRate: 200,
                timezone: "EST"
            }
        ];

        sampleMentors.forEach(mentor => {
            this.mentors.set(mentor.id, mentor);
        });
    }

    registerMentor(mentorData) {
        const mentorId = `mentor_${Date.now()}`;
        const mentor = {
            id: mentorId,
            ...mentorData,
            registrationDate: new Date(),
            totalMentees: 0,
            completedSessions: 0,
            rating: 5.0,
            reviews: []
        };

        this.mentors.set(mentorId, mentor);
        return { success: true, mentorId: mentorId, message: "Mentor registered successfully" };
    }

    registerMentee(menteeData) {
        const menteeId = `mentee_${Date.now()}`;
        const mentee = {
            id: menteeId,
            ...menteeData,
            registrationDate: new Date(),
            currentMentor: null,
            completedPrograms: [],
            skillAssessments: [],
            careerGoals: []
        };

        this.mentees.set(menteeId, mentee);
        return { success: true, menteeId: menteeId, message: "Mentee registered successfully" };
    }

    matchMentorMentee(menteeId, preferences = {}) {
        const mentee = this.mentees.get(menteeId);
        if (!mentee) return null;

        const availableMentors = Array.from(this.mentors.values()).filter(mentor => 
            mentor.availableSlots > 0 &&
            (!preferences.expertise || mentor.expertise.includes(preferences.expertise)) &&
            (!preferences.experience || mentor.experience >= preferences.experience) &&
            (!preferences.timezone || mentor.timezone === preferences.timezone)
        );

        // Score and rank mentors
        const rankedMentors = availableMentors.map(mentor => {
            let score = mentor.rating * 20; // Base score from rating
            
            // Expertise match bonus
            if (mentee.targetExpertise && mentor.expertise.includes(mentee.targetExpertise)) {
                score += 30;
            }
            
            // Experience level match
            const experienceGap = Math.abs(mentor.experience - (mentee.currentLevel * 3));
            score -= experienceGap; // Penalize large experience gaps
            
            // Mentoring experience bonus
            score += mentor.mentoringExperience * 2;
            
            return { mentor, score };
        }).sort((a, b) => b.score - a.score);

        return rankedMentors.slice(0, 5).map(item => ({
            mentor: item.mentor,
            matchScore: Math.round(item.score),
            reasons: this.generateMatchReasons(mentee, item.mentor)
        }));
    }

    generateMatchReasons(mentee, mentor) {
        const reasons = [];
        
        if (mentee.targetExpertise && mentor.expertise.includes(mentee.targetExpertise)) {
            reasons.push(`Expert in your target area: ${mentee.targetExpertise}`);
        }
        
        if (mentor.rating >= 4.5) {
            reasons.push(`Highly rated mentor (${mentor.rating}/5.0)`);
        }
        
        if (mentor.mentoringExperience >= 5) {
            reasons.push(`Experienced mentor (${mentor.mentoringExperience} years)`);
        }
        
        if (mentor.company && mentor.company !== "Independent") {
            reasons.push(`Works at ${mentor.company}`);
        }
        
        return reasons;
    }

    createMentorshipPair(menteeId, mentorId, programId) {
        const mentee = this.mentees.get(menteeId);
        const mentor = this.mentors.get(mentorId);
        const program = this.mentorshipPrograms[programId];

        if (!mentee || !mentor || !program) {
            return { success: false, message: "Invalid mentee, mentor, or program" };
        }

        if (mentor.availableSlots <= 0) {
            return { success: false, message: "Mentor has no available slots" };
        }

        const pairId = `pair_${Date.now()}`;
        const mentorshipPair = {
            id: pairId,
            menteeId: menteeId,
            mentorId: mentorId,
            programId: programId,
            startDate: new Date(),
            status: "active",
            sessionsCompleted: 0,
            totalSessions: program.sessions,
            nextSessionDate: this.calculateNextSession(),
            goals: [],
            milestones: [],
            feedback: []
        };

        this.mentorshipPairs.set(pairId, mentorshipPair);
        
        // Update mentor and mentee records
        mentor.availableSlots--;
        mentor.totalMentees++;
        mentee.currentMentor = mentorId;

        return {
            success: true,
            pairId: pairId,
            message: "Mentorship pair created successfully",
            nextSteps: [
                "Schedule initial session",
                "Complete goal-setting exercise",
                "Review program curriculum",
                "Establish communication preferences"
            ]
        };
    }

    calculateNextSession(lastSession = null) {
        const now = new Date();
        const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        return nextWeek;
    }

    scheduleSession(pairId, sessionDate, agenda, duration = 60) {
        const pair = this.mentorshipPairs.get(pairId);
        if (!pair) return null;

        const sessionId = `session_${Date.now()}`;
        const session = {
            id: sessionId,
            pairId: pairId,
            date: sessionDate,
            agenda: agenda,
            duration: duration,
            status: "scheduled",
            notes: "",
            actionItems: [],
            feedback: { mentor: null, mentee: null }
        };

        this.sessions.set(sessionId, session);
        return {
            sessionId: sessionId,
            session: session,
            reminderSet: true,
            calendarLink: this.generateCalendarLink(session)
        };
    }

    generateCalendarLink(session) {
        const startTime = session.date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const endTime = new Date(session.date.getTime() + session.duration * 60000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mentorship%20Session&dates=${startTime}/${endTime}&details=${encodeURIComponent(session.agenda)}`;
    }

    completeSession(sessionId, notes, actionItems, mentorFeedback, menteeFeedback) {
        const session = this.sessions.get(sessionId);
        if (!session) return null;

        session.status = "completed";
        session.notes = notes;
        session.actionItems = actionItems;
        session.feedback = { mentor: mentorFeedback, mentee: menteeFeedback };
        session.completedDate = new Date();

        // Update pair progress
        const pair = this.mentorshipPairs.get(session.pairId);
        if (pair) {
            pair.sessionsCompleted++;
            pair.nextSessionDate = this.calculateNextSession(session.date);
            
            // Check if program is complete
            if (pair.sessionsCompleted >= pair.totalSessions) {
                this.completeMentorshipProgram(pair.id);
            }
        }

        return {
            sessionCompleted: true,
            programProgress: `${pair.sessionsCompleted}/${pair.totalSessions}`,
            nextSession: pair.nextSessionDate,
            actionItems: actionItems
        };
    }

    completeMentorshipProgram(pairId) {
        const pair = this.mentorshipPairs.get(pairId);
        if (!pair) return null;

        pair.status = "completed";
        pair.completionDate = new Date();

        const mentee = this.mentees.get(pair.menteeId);
        const mentor = this.mentors.get(pair.mentorId);
        const program = this.mentorshipPrograms[pair.programId];

        // Update records
        if (mentee) {
            mentee.completedPrograms.push(pair.programId);
            mentee.currentMentor = null;
        }

        if (mentor) {
            mentor.availableSlots++;
            mentor.completedSessions += pair.sessionsCompleted;
        }

        // Generate completion certificate
        const certificate = this.generateCompletionCertificate(pair, program);

        return {
            programCompleted: true,
            certificate: certificate,
            achievements: this.calculateAchievements(pair),
            recommendations: this.generateNextSteps(mentee, program)
        };
    }

    generateCompletionCertificate(pair, program) {
        return {
            certificateId: `cert_${Date.now()}`,
            programName: program.name,
            mentee: this.mentees.get(pair.menteeId)?.name,
            mentor: this.mentors.get(pair.mentorId)?.name,
            completionDate: pair.completionDate,
            duration: program.duration,
            sessionsCompleted: pair.sessionsCompleted,
            verificationUrl: `https://mentorship.cybersec.edu/verify/${pair.id}`
        };
    }

    calculateAchievements(pair) {
        const achievements = [];
        
        if (pair.sessionsCompleted >= pair.totalSessions) {
            achievements.push("Program Completion");
        }
        
        if (pair.feedback.filter(f => f.rating >= 4.5).length >= pair.sessionsCompleted * 0.8) {
            achievements.push("Excellence in Mentorship");
        }
        
        return achievements;
    }

    generateNextSteps(mentee, completedProgram) {
        const recommendations = [];
        
        switch (completedProgram.id) {
            case "career_starter":
                recommendations.push("Consider Technical Skill Advancement program");
                recommendations.push("Apply for entry-level security positions");
                recommendations.push("Pursue Security+ certification");
                break;
            case "skill_advancement":
                recommendations.push("Join Leadership Development program");
                recommendations.push("Seek senior-level positions");
                recommendations.push("Consider advanced certifications (CISSP, OSCP)");
                break;
            case "leadership_development":
                recommendations.push("Explore management opportunities");
                recommendations.push("Consider Entrepreneur Track if interested in starting business");
                recommendations.push("Pursue executive education programs");
                break;
        }
        
        return recommendations;
    }

    renderMentorshipDashboard() {
        return `
            <div class="mentorship-program">
                <div class="program-header">
                    <h1>🎯 Cybersecurity Mentorship Program</h1>
                    <p>Connect with industry experts and accelerate your cybersecurity career</p>
                </div>
                
                <div class="program-overview">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h3>👨‍🏫 ${this.mentors.size}</h3>
                            <p>Expert Mentors</p>
                        </div>
                        <div class="stat-card">
                            <h3>🎓 ${this.mentees.size}</h3>
                            <p>Active Mentees</p>
                        </div>
                        <div class="stat-card">
                            <h3>🤝 ${this.mentorshipPairs.size}</h3>
                            <p>Active Pairs</p>
                        </div>
                        <div class="stat-card">
                            <h3>✅ ${Array.from(this.mentorshipPairs.values()).filter(p => p.status === 'completed').length}</h3>
                            <p>Completed Programs</p>
                        </div>
                    </div>
                </div>

                <div class="programs-section">
                    <h2>📚 Mentorship Programs</h2>
                    <div class="programs-grid">
                        ${Object.values(this.mentorshipPrograms).map(program => 
                            this.renderProgramCard(program)
                        ).join('')}
                    </div>
                </div>

                <div class="expertise-areas">
                    <h2>🎯 Expertise Areas</h2>
                    <div class="expertise-grid">
                        ${Object.values(this.expertiseAreas).map(area => 
                            this.renderExpertiseCard(area)
                        ).join('')}
                    </div>
                </div>

                <div class="career-paths">
                    <h2>🚀 Career Development Paths</h2>
                    <div class="paths-grid">
                        ${Object.values(this.careerPaths).map(path => 
                            this.renderCareerPathCard(path)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderProgramCard(program) {
        return `
            <div class="program-card">
                <div class="program-header">
                    <h3>${program.name}</h3>
                    <div class="program-meta">
                        <span class="duration">${program.duration}</span>
                        <span class="sessions">${program.sessions} sessions</span>
                    </div>
                </div>
                
                <div class="program-content">
                    <p class="description">${program.description}</p>
                    
                    <div class="objectives">
                        <h4>📋 Key Objectives:</h4>
                        <ul>
                            ${program.objectives.slice(0, 3).map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="deliverables">
                        <h4>🎁 Deliverables:</h4>
                        <div class="deliverables-tags">
                            ${program.deliverables.map(item => 
                                `<span class="deliverable-tag">${item}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="requirements">
                        <p><strong>Mentor Requirements:</strong> ${program.mentorRequirements}</p>
                    </div>
                </div>
                
                <button onclick="mentorshipProgram.enrollInProgram('${program.id}')" class="enroll-btn">
                    Apply for Program
                </button>
            </div>
        `;
    }

    renderExpertiseCard(area) {
        return `
            <div class="expertise-card">
                <div class="expertise-header">
                    <h3>${area.icon} ${area.name}</h3>
                    <span class="demand-level ${area.demandLevel.toLowerCase().replace(' ', '-')}">${area.demandLevel} Demand</span>
                </div>
                
                <div class="expertise-content">
                    <p class="description">${area.description}</p>
                    
                    <div class="skills">
                        <h4>🛠️ Key Skills:</h4>
                        <div class="skills-tags">
                            ${area.skills.slice(0, 4).map(skill => 
                                `<span class="skill-tag">${skill}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="career-levels">
                        <h4>📈 Career Progression:</h4>
                        <ul>
                            ${area.careerLevels.slice(0, 3).map(level => `<li>${level}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="salary-info">
                        <h4>💰 Salary Range:</h4>
                        <div class="salary-range">
                            <span>Junior: $${area.avgSalary.junior.toLocaleString()}</span>
                            <span>Senior: $${area.avgSalary.senior.toLocaleString()}</span>
                            <span>Expert: $${area.avgSalary.expert.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                
                <button onclick="mentorshipProgram.findMentors('${area.id}')" class="find-mentors-btn">
                    Find Mentors
                </button>
            </div>
        `;
    }

    renderCareerPathCard(path) {
        return `
            <div class="career-path-card">
                <div class="path-header">
                    <h3>${path.name}</h3>
                    <p class="timeline">${path.averageTimeline}</p>
                </div>
                
                <div class="path-content">
                    <p class="description">${path.description}</p>
                    
                    <div class="progression">
                        <h4>📊 Career Progression:</h4>
                        <div class="progression-steps">
                            ${path.progression.slice(0, 3).map((step, index) => `
                                <div class="progression-step">
                                    <div class="step-number">${step.level}</div>
                                    <div class="step-content">
                                        <h5>${step.title}</h5>
                                        <p class="experience">${step.experience}</p>
                                        <p class="focus">${step.focus}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="key-skills">
                        <h4>🎯 Key Skills:</h4>
                        <div class="skills-list">
                            ${path.keySkills.map(skill => 
                                `<span class="skill-item">${skill}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                
                <button onclick="mentorshipProgram.planCareerPath('${path.id}')" class="plan-career-btn">
                    Plan My Career
                </button>
            </div>
        `;
    }

    enrollInProgram(programId) {
        // Simulate enrollment process
        alert(`Enrolling in ${this.mentorshipPrograms[programId].name}. A mentor match will be found for you!`);
    }

    findMentors(expertiseId) {
        const area = this.expertiseAreas[expertiseId];
        alert(`Finding mentors specializing in ${area.name}. ${this.mentors.size} expert mentors available!`);
    }

    planCareerPath(pathId) {
        const path = this.careerPaths[pathId];
        alert(`Creating personalized career plan for ${path.name}. Let's map your journey to success!`);
    }
}

// CSS (simplified)
const mentorshipCSS = `
    .mentorship-program { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .program-header { text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 15px; margin-bottom: 30px; }
    .stats-grid, .programs-grid, .expertise-grid, .paths-grid { display: grid; gap: 20px; margin-bottom: 30px; }
    .stats-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
    .programs-grid { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); }
    .expertise-grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
    .paths-grid { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
    .stat-card { background: white; padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    .stat-card h3 { margin: 0 0 10px 0; font-size: 2.2em; color: #667eea; }
    .stat-card p { margin: 0; color: #6c757d; font-weight: 500; }
    .program-card, .expertise-card, .career-path-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    .program-header, .expertise-header, .path-header { padding: 20px; background: #f8f9fa; border-bottom: 1px solid #e9ecef; }
    .program-header h3, .expertise-header h3, .path-header h3 { margin: 0 0 10px 0; color: #2c3e50; }
    .program-meta, .timeline { display: flex; gap: 10px; margin-top: 10px; }
    .duration, .sessions { background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 12px; font-size: 0.8em; }
    .demand-level { padding: 4px 8px; border-radius: 12px; font-size: 0.8em; font-weight: 500; }
    .demand-level.high { background: #fff3cd; color: #856404; }
    .demand-level.very-high { background: #f8d7da; color: #721c24; }
    .program-content, .expertise-content, .path-content { padding: 20px; }
    .description { color: #495057; margin-bottom: 15px; line-height: 1.5; }
    .objectives h4, .deliverables h4, .skills h4, .career-levels h4, .salary-info h4, .progression h4, .key-skills h4 { margin: 15px 0 8px 0; color: #2c3e50; font-size: 0.9em; }
    .objectives ul, .career-levels ul { margin: 0 0 15px 0; padding-left: 20px; }
    .objectives li, .career-levels li { font-size: 0.85em; color: #495057; margin-bottom: 4px; }
    .deliverables-tags, .skills-tags, .skills-list { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 15px; }
    .deliverable-tag, .skill-tag, .skill-item { background: #e9ecef; color: #495057; padding: 4px 8px; border-radius: 8px; font-size: 0.8em; }
    .requirements { margin: 15px 0; font-size: 0.85em; color: #6c757d; }
    .salary-range { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .salary-range span { background: #f8f9fa; padding: 8px; border-radius: 6px; text-align: center; font-size: 0.8em; color: #495057; }
    .progression-steps { display: flex; flex-direction: column; gap: 10px; }
    .progression-step { display: flex; align-items: center; gap: 15px; }
    .step-number { background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9em; }
    .step-content h5 { margin: 0 0 4px 0; color: #2c3e50; font-size: 0.9em; }
    .experience, .focus { margin: 0; font-size: 0.8em; color: #6c757d; }
    .enroll-btn, .find-mentors-btn, .plan-career-btn { width: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
    .enroll-btn:hover, .find-mentors-btn:hover, .plan-career-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); }
`;

const mentorshipStyleSheet = document.createElement('style');
mentorshipStyleSheet.textContent = mentorshipCSS;
document.head.appendChild(mentorshipStyleSheet);

window.mentorshipProgram = new CybersecurityMentorshipProgram();
