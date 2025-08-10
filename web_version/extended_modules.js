// Erweiterte Cybersecurity Module - Kompakt und fokussiert
const extendedCyberModules = {
    // 🔒 IT-Sicherheit Grundlagen
    basics: {
        title: "🔒 Grundlagen der IT-Sicherheit",
        modules: [
            {
                id: "cia_triad",
                title: "CIA-Triade",
                content: `
                <h3>🔺 CIA-Triade</h3>
                <div class="cia-grid">
                    <div class="cia-item">
                        <h4>🔐 Confidentiality</h4>
                        <p>Schutz vor unbefugtem Zugriff</p>
                        <ul><li>Verschlüsselung</li><li>Zugriffskontrolle</li><li>Klassifizierung</li></ul>
                    </div>
                    <div class="cia-item">
                        <h4>✅ Integrity</h4>
                        <p>Schutz vor Manipulation</p>
                        <ul><li>Digitale Signaturen</li><li>Hash-Funktionen</li><li>Versionskontrolle</li></ul>
                    </div>
                    <div class="cia-item">
                        <h4>🔄 Availability</h4>
                        <p>Sicherstellung der Verfügbarkeit</p>
                        <ul><li>Redundanz</li><li>DDoS-Schutz</li><li>Disaster Recovery</li></ul>
                    </div>
                </div>`,
                quiz: [{
                    question: "Welcher Aspekt wird durch Verschlüsselung primär geschützt?",
                    options: ["Vertraulichkeit", "Integrität", "Verfügbarkeit", "Alle drei"],
                    correct: 0
                }]
            },
            {
                id: "gdpr",
                title: "DSGVO Compliance",
                content: `
                <h3>🇪🇺 DSGVO Grundlagen</h3>
                <div class="gdpr-rights">
                    <h4>Betroffenenrechte:</h4>
                    <ul>
                        <li>📋 Auskunftsrecht (Art. 15)</li>
                        <li>✏️ Berichtigungsrecht (Art. 16)</li>
                        <li>🗑️ Löschungsrecht (Art. 17)</li>
                        <li>📦 Datenübertragbarkeit (Art. 20)</li>
                    </ul>
                </div>
                <div class="gdpr-penalties">
                    <h4>💰 Bußgelder:</h4>
                    <p>Bis zu <strong>20 Mio €</strong> oder <strong>4% Jahresumsatz</strong></p>
                </div>`,
                quiz: [{
                    question: "Maximales DSGVO-Bußgeld bei schweren Verstößen?",
                    options: ["10 Mio € oder 2%", "20 Mio € oder 4%", "50 Mio € oder 5%", "Unbegrenzt"],
                    correct: 1
                }]
            }
        ]
    },

    // 🔑 Zugriffskontrolle & IAM
    iam: {
        title: "🔑 Zugriffskontrolle & IAM",
        modules: [
            {
                id: "rbac",
                title: "RBAC - Role-Based Access Control",
                content: `
                <h3>👥 RBAC Konzept</h3>
                <div class="rbac-hierarchy">
                    <div class="rbac-level">👤 <strong>User</strong> → 🎭 <strong>Role</strong> → 🔐 <strong>Permission</strong></div>
                </div>
                <h4>Vorteile:</h4>
                <ul>
                    <li>Zentrale Rechteverwaltung</li>
                    <li>Principle of Least Privilege</li>
                    <li>Einfache Compliance-Nachweise</li>
                    <li>Skalierbare Administration</li>
                </ul>`,
                quiz: [{
                    question: "Was ist der Hauptvorteil von RBAC?",
                    options: ["Schnellere Logins", "Zentrale Rechteverwaltung", "Bessere Performance", "Günstigere Kosten"],
                    correct: 1
                }]
            },
            {
                id: "mfa",
                title: "Multi-Factor Authentication",
                content: `
                <h3>🔒 MFA Faktoren</h3>
                <div class="mfa-factors">
                    <div class="factor">🧠 <strong>Wissen</strong><br>Passwort, PIN</div>
                    <div class="factor">📱 <strong>Besitz</strong><br>Token, Smartphone</div>
                    <div class="factor">👤 <strong>Biometrie</strong><br>Fingerprint, Face-ID</div>
                </div>
                <h4>🎯 Implementierung:</h4>
                <ul>
                    <li>TOTP (Google Authenticator)</li>
                    <li>SMS/Push-Nachrichten</li>
                    <li>Hardware-Token (YubiKey)</li>
                    <li>Biometrische Verfahren</li>
                </ul>`,
                quiz: [{
                    question: "Wie viele Faktoren hat eine sichere MFA mindestens?",
                    options: ["1", "2", "3", "4"],
                    correct: 1
                }]
            },
            {
                id: "sso",
                title: "Single Sign-On",
                content: `
                <h3>🎫 SSO Protokolle</h3>
                <div class="sso-protocols">
                    <div class="protocol">
                        <h4>SAML 2.0</h4>
                        <p>XML-basiert, Enterprise-Standard</p>
                    </div>
                    <div class="protocol">
                        <h4>OAuth 2.0</h4>
                        <p>API-Autorisierung, moderne Apps</p>
                    </div>
                    <div class="protocol">
                        <h4>OpenID Connect</h4>
                        <p>OAuth 2.0 + Identitätsschicht</p>
                    </div>
                </div>
                <h4>✅ Vorteile:</h4>
                <p>Einmaliges Login, bessere UX, zentrale Verwaltung</p>`,
                quiz: [{
                    question: "Welches Protokoll erweitert OAuth 2.0 um Identitätsfunktionen?",
                    options: ["SAML", "OpenID Connect", "Kerberos", "LDAP"],
                    correct: 1
                }]
            }
        ]
    },

    // 🌐 Netzwerksicherheit
    network: {
        title: "🌐 Netzwerksicherheit",
        modules: [
            {
                id: "firewalls",
                title: "Firewalls & Filtering",
                content: `
                <h3>🔥 Firewall-Typen</h3>
                <div class="firewall-types">
                    <div class="fw-type">
                        <h4>📦 Packet Filter</h4>
                        <p>Layer 3/4, IP/Port-basiert</p>
                    </div>
                    <div class="fw-type">
                        <h4>🔍 Stateful</h4>
                        <p>Connection-Tracking</p>
                    </div>
                    <div class="fw-type">
                        <h4>🚀 Next-Gen (NGFW)</h4>
                        <p>Application-Aware, IPS</p>
                    </div>
                </div>
                <h4>🎯 Regelaufbau:</h4>
                <code>ALLOW/DENY [Source] [Destination] [Service] [Action]</code>`,
                quiz: [{
                    question: "Was unterscheidet eine Stateful von einer Stateless Firewall?",
                    options: ["Performance", "Connection-Tracking", "Preis", "Hersteller"],
                    correct: 1
                }]
            },
            {
                id: "ids_ips",
                title: "IDS/IPS Systeme",
                content: `
                <h3>🚨 Intrusion Detection/Prevention</h3>
                <div class="ids-comparison">
                    <div class="ids-type">
                        <h4>🔍 IDS</h4>
                        <p><strong>Detection:</strong> Passives Monitoring</p>
                        <ul><li>Alerting</li><li>Forensik</li><li>Compliance</li></ul>
                    </div>
                    <div class="ids-type">
                        <h4>🛡️ IPS</h4>
                        <p><strong>Prevention:</strong> Aktive Blockierung</p>
                        <ul><li>Real-time Blocking</li><li>Inline-Deployment</li><li>Automatische Response</li></ul>
                    </div>
                </div>
                <h4>📊 Detection-Methoden:</h4>
                <ul>
                    <li>Signature-based (bekannte Angriffe)</li>
                    <li>Anomaly-based (ML/KI)</li>
                    <li>Behavioral Analysis</li>
                </ul>`,
                quiz: [{
                    question: "Was ist der Hauptunterschied zwischen IDS und IPS?",
                    options: ["Preis", "IPS blockiert aktiv", "IDS ist schneller", "Kein Unterschied"],
                    correct: 1
                }]
            },
            {
                id: "zero_trust",
                title: "Zero Trust Architecture",
                content: `
                <h3>🚫 Zero Trust Prinzipien</h3>
                <div class="zt-principles">
                    <div class="principle">🚫 <strong>Never Trust</strong><br>Niemals vertrauen</div>
                    <div class="principle">✅ <strong>Always Verify</strong><br>Immer verifizieren</div>
                    <div class="principle">🔒 <strong>Least Privilege</strong><br>Minimale Rechte</div>
                </div>
                <h4>🏗️ Implementierung:</h4>
                <ul>
                    <li>Micro-Segmentierung</li>
                    <li>Identity-basierte Policies</li>
                    <li>Continuous Monitoring</li>
                    <li>Conditional Access</li>
                </ul>
                <p><strong>Motto:</strong> "Don't trust, always verify"</p>`,
                quiz: [{
                    question: "Was ist das Grundprinzip von Zero Trust?",
                    options: ["Alles blockieren", "Never trust, always verify", "Nur VPN nutzen", "Starke Passwörter"],
                    correct: 1
                }]
            }
        ]
    },

    // 🔐 Verschlüsselung & PKI
    crypto: {
        title: "🔐 Verschlüsselung & PKI",
        modules: [
            {
                id: "symmetric_crypto",
                title: "Symmetrische Verschlüsselung",
                content: `
                <h3>🔑 Symmetrische Verfahren</h3>
                <div class="crypto-algorithms">
                    <div class="algo">
                        <h4>AES (Advanced Encryption Standard)</h4>
                        <p>128/192/256 Bit, Industrie-Standard</p>
                    </div>
                    <div class="algo">
                        <h4>ChaCha20</h4>
                        <p>Modern, schnell, mobile-optimiert</p>
                    </div>
                </div>
                <h4>⚡ Eigenschaften:</h4>
                <ul>
                    <li>Gleicher Schlüssel für Ver-/Entschlüsselung</li>
                    <li>Schnell für große Datenmengen</li>
                    <li>Schlüsselaustausch-Problem</li>
                </ul>`,
                quiz: [{
                    question: "Was ist der Standard-Algorithmus für symmetrische Verschlüsselung?",
                    options: ["DES", "AES", "RSA", "SHA-256"],
                    correct: 1
                }]
            },
            {
                id: "asymmetric_crypto",
                title: "Asymmetrische Verschlüsselung",
                content: `
                <h3>🔐 Public-Key Cryptography</h3>
                <div class="pki-concept">
                    <div class="key-pair">
                        <div class="public-key">🔓 <strong>Public Key</strong><br>Öffentlich verfügbar</div>
                        <div class="private-key">🔒 <strong>Private Key</strong><br>Geheim halten</div>
                    </div>
                </div>
                <h4>🎯 Anwendungen:</h4>
                <ul>
                    <li><strong>Verschlüsselung:</strong> Public Key verschlüsselt</li>
                    <li><strong>Digitale Signatur:</strong> Private Key signiert</li>
                    <li><strong>Schlüsselaustausch:</strong> Sichere Übertragung</li>
                </ul>
                <h4>📊 Algorithmen:</h4>
                <p>RSA, ECC (Elliptic Curve), Ed25519</p>`,
                quiz: [{
                    question: "Womit wird bei asymmetrischer Verschlüsselung eine digitale Signatur erstellt?",
                    options: ["Public Key", "Private Key", "Session Key", "Hash"],
                    correct: 1
                }]
            },
            {
                id: "pki",
                title: "Public Key Infrastructure",
                content: `
                <h3>🏛️ PKI Komponenten</h3>
                <div class="pki-components">
                    <div class="component">
                        <h4>CA (Certificate Authority)</h4>
                        <p>Zertifikate ausstellen</p>
                    </div>
                    <div class="component">
                        <h4>RA (Registration Authority)</h4>
                        <p>Identitätsprüfung</p>
                    </div>
                    <div class="component">
                        <h4>CRL/OCSP</h4>
                        <p>Widerrufslisten</p>
                    </div>
                </div>
                <h4>📜 X.509 Zertifikat:</h4>
                <ul>
                    <li>Subject (Inhaber)</li>
                    <li>Public Key</li>
                    <li>Issuer (Aussteller)</li>
                    <li>Gültigkeitsdauer</li>
                    <li>Digitale Signatur der CA</li>
                </ul>`,
                quiz: [{
                    question: "Was macht eine Certificate Authority (CA)?",
                    options: ["Verschlüsselt Daten", "Stellt Zertifikate aus", "Erstellt Private Keys", "Überwacht Netzwerke"],
                    correct: 1
                }]
            }
        ]
    },

    // 💻 Endpunktsicherheit
    endpoint: {
        title: "💻 Endpunktsicherheit",
        modules: [
            {
                id: "edr_xdr",
                title: "EDR/XDR Lösungen",
                content: `
                <h3>🔍 Endpoint Detection & Response</h3>
                <div class="edr-evolution">
                    <div class="evolution-step">
                        <h4>AV → EPP → EDR → XDR</h4>
                    </div>
                </div>
                <div class="detection-types">
                    <div class="detection">
                        <h4>EDR</h4>
                        <p>Endpoint-fokussiert, Behavioral Analysis</p>
                    </div>
                    <div class="detection">
                        <h4>XDR</h4>
                        <p>Extended Detection, Netzwerk + Cloud</p>
                    </div>
                </div>
                <h4>🎯 Funktionen:</h4>
                <ul>
                    <li>Real-time Monitoring</li>
                    <li>Threat Hunting</li>
                    <li>Automated Response</li>
                    <li>Forensic Analysis</li>
                </ul>`,
                quiz: [{
                    question: "Was erweitert XDR gegenüber EDR?",
                    options: ["Nichts", "Netzwerk und Cloud", "Nur Performance", "Günstigere Kosten"],
                    correct: 1
                }]
            },
            {
                id: "patch_management",
                title: "Patch Management",
                content: `
                <h3>🔄 Patch-Prozess</h3>
                <div class="patch-cycle">
                    <div class="cycle-step">1️⃣ <strong>Inventarisierung</strong></div>
                    <div class="cycle-step">2️⃣ <strong>Vulnerability Scanning</strong></div>
                    <div class="cycle-step">3️⃣ <strong>Risk Assessment</strong></div>
                    <div class="cycle-step">4️⃣ <strong>Testing</strong></div>
                    <div class="cycle-step">5️⃣ <strong>Deployment</strong></div>
                    <div class="cycle-step">6️⃣ <strong>Verification</strong></div>
                </div>
                <h4>⚡ Kritische Patches:</h4>
                <p>Sofortige Installation bei aktiv ausgenutzen Schwachstellen</p>`,
                quiz: [{
                    question: "Was sollte vor Patch-Deployment immer erfolgen?",
                    options: ["Testing", "Backup", "Risk Assessment", "Alle drei"],
                    correct: 3
                }]
            }
        ]
    },

    // ⚠️ Bedrohungslandschaft
    threats: {
        title: "⚠️ Bedrohungslandschaft",
        modules: [
            {
                id: "malware_types",
                title: "Malware-Kategorien",
                content: `
                <h3>🦠 Malware-Typen</h3>
                <div class="malware-grid">
                    <div class="malware-type">
                        <h4>🔒 Ransomware</h4>
                        <p>Verschlüsselung + Lösegeld</p>
                    </div>
                    <div class="malware-type">
                        <h4>🕵️ Spyware</h4>
                        <p>Datendiebstahl, Keylogger</p>
                    </div>
                    <div class="malware-type">
                        <h4>🧟 Botnet</h4>
                        <p>Fernsteuerung, DDoS</p>
                    </div>
                    <div class="malware-type">
                        <h4>🐴 Trojan</h4>
                        <p>Getarnt als legitime Software</p>
                    </div>
                </div>`,
                quiz: [{
                    question: "Welche Malware verschlüsselt Dateien für Lösegeld?",
                    options: ["Spyware", "Ransomware", "Rootkit", "Adware"],
                    correct: 1
                }]
            },
            {
                id: "apt_attacks",
                title: "Advanced Persistent Threats",
                content: `
                <h3>🎭 APT Charakteristika</h3>
                <div class="apt-phases">
                    <div class="phase">1️⃣ <strong>Reconnaissance</strong></div>
                    <div class="phase">2️⃣ <strong>Initial Access</strong></div>
                    <div class="phase">3️⃣ <strong>Persistence</strong></div>
                    <div class="phase">4️⃣ <strong>Lateral Movement</strong></div>
                    <div class="phase">5️⃣ <strong>Data Exfiltration</strong></div>
                </div>
                <h4>🎯 Merkmale:</h4>
                <ul>
                    <li>Staatlich gesponsert</li>
                    <li>Langfristige Präsenz</li>
                    <li>Stealth-Techniken</li>
                    <li>Spezifische Ziele</li>
                </ul>`,
                quiz: [{
                    question: "Was ist typisch für APT-Angriffe?",
                    options: ["Schnell und laut", "Langfristig und stealth", "Nur Geld-motiviert", "Automatisiert"],
                    correct: 1
                }]
            }
        ]
    },

    // 📊 Monitoring & SIEM  
    monitoring_siem: {
        title: "📊 Monitoring & SIEM",
        modules: [
            {
                id: "siem_basics",
                title: "SIEM Grundlagen",
                content: `
                <h3>📊 SIEM Komponenten</h3>
                <div class="siem-components">
                    <div class="component">
                        <h4>📥 Log Collection</h4>
                        <p>Sammlung von Security Events</p>
                    </div>
                    <div class="component">
                        <h4>🔗 Correlation Engine</h4>
                        <p>Event-Korrelation und Mustererkennung</p>
                    </div>
                    <div class="component">
                        <h4>📊 Dashboard</h4>
                        <p>Visualisierung und Alerting</p>
                    </div>
                </div>
                <h4>🎯 SIEM Vorteile:</h4>
                <ul>
                    <li>Zentrale Log-Analyse</li>
                    <li>Real-time Monitoring</li>
                    <li>Compliance Reporting</li>
                    <li>Threat Detection</li>
                </ul>`,
                quiz: [{
                    question: "Was macht die Correlation Engine im SIEM?",
                    options: ["Logs sammeln", "Events verknüpfen", "Backups erstellen", "User verwalten"],
                    correct: 1
                }]
            },
            {
                id: "incident_response",
                title: "Incident Response",
                content: `
                <h3>🚨 IR-Prozess (NIST)</h3>
                <div class="ir-phases">
                    <div class="phase">1️⃣ <strong>Preparation</strong></div>
                    <div class="phase">2️⃣ <strong>Detection & Analysis</strong></div>
                    <div class="phase">3️⃣ <strong>Containment</strong></div>
                    <div class="phase">4️⃣ <strong>Eradication & Recovery</strong></div>
                    <div class="phase">5️⃣ <strong>Post-Incident</strong></div>
                </div>
                <h4>⏱️ Key Metrics:</h4>
                <ul>
                    <li><strong>MTTD:</strong> Mean Time to Detect</li>
                    <li><strong>MTTR:</strong> Mean Time to Response</li>
                    <li><strong>MTBC:</strong> Mean Time between Compromises</li>
                </ul>`,
                quiz: [{
                    question: "Was misst MTTR im Incident Response?",
                    options: ["Detection Time", "Response Time", "Recovery Time", "Total Time"],
                    correct: 1
                }]
            }
        ]
    },

    // ☁️ Cloud Security
    cloud_security: {
        title: "☁️ Cloud Security",
        modules: [
            {
                id: "shared_responsibility",
                title: "Shared Responsibility Model",
                content: `
                <h3>☁️ Verantwortungsmodell</h3>
                <div class="responsibility-matrix">
                    <div class="resp-model">
                        <h4>IaaS</h4>
                        <p><strong>Provider:</strong> Hardware, Hypervisor</p>
                        <p><strong>Kunde:</strong> OS, Apps, Daten</p>
                    </div>
                    <div class="resp-model">
                        <h4>PaaS</h4>
                        <p><strong>Provider:</strong> Runtime, OS</p>
                        <p><strong>Kunde:</strong> Apps, Daten</p>
                    </div>
                    <div class="resp-model">
                        <h4>SaaS</h4>
                        <p><strong>Provider:</strong> Alles außer...</p>
                        <p><strong>Kunde:</strong> Daten, User, Access</p>
                    </div>
                </div>`,
                quiz: [{
                    question: "Bei welchem Service-Modell hat der Kunde die wenigste Verantwortung?",
                    options: ["IaaS", "PaaS", "SaaS", "Alle gleich"],
                    correct: 2
                }]
            },
            {
                id: "container_security",
                title: "Container Security",
                content: `
                <h3>🐳 Container-Sicherheit</h3>
                <div class="container-security">
                    <h4>🔍 Image Security:</h4>
                    <ul>
                        <li>Vulnerability Scanning</li>
                        <li>Base Image Hardening</li>
                        <li>Signed Images</li>
                        <li>Registry Security</li>
                    </ul>
                    <h4>🏃 Runtime Security:</h4>
                    <ul>
                        <li>Least Privilege</li>
                        <li>Network Policies</li>
                        <li>Resource Limits</li>
                        <li>Runtime Monitoring</li>
                    </ul>
                </div>`,
                quiz: [{
                    question: "Was verhindert Container Escape am besten?",
                    options: ["Firewalls", "Least Privilege", "Encryption", "Backups"],
                    correct: 1
                }]
            }
        ]
    },

    // ⚖️ Compliance & Recht
    compliance_legal: {
        title: "⚖️ Compliance & Recht",
        modules: [
            {
                id: "gdpr_detailed",
                title: "DSGVO Details",
                content: `
                <h3>🇪🇺 DSGVO Schlüsselbestimmungen</h3>
                <div class="gdpr-articles">
                    <div class="article">
                        <h4>Art. 6 - Rechtsgrundlagen</h4>
                        <p>Einwilligung, Vertrag, rechtliche Verpflichtung</p>
                    </div>
                    <div class="article">
                        <h4>Art. 32 - Technische Maßnahmen</h4>
                        <p>Verschlüsselung, Pseudonymisierung</p>
                    </div>
                    <div class="article">
                        <h4>Art. 33/34 - Meldepflichten</h4>
                        <p>72h Behörde, unverzüglich Betroffene</p>
                    </div>
                </div>`,
                quiz: [{
                    question: "Welcher Artikel regelt Datenschutz-Folgenabschätzungen?",
                    options: ["Art. 33", "Art. 35", "Art. 37", "Art. 39"],
                    correct: 1
                }]
            },
            {
                id: "kritis_bsi",
                title: "KRITIS & BSI-Standards",
                content: `
                <h3>🏛️ Kritische Infrastrukturen</h3>
                <div class="kritis-sectors">
                    <div class="sector">⚡ Energie</div>
                    <div class="sector">💧 Wasser</div>
                    <div class="sector">🏥 Gesundheit</div>
                    <div class="sector">🚇 Transport</div>
                    <div class="sector">💰 Finanz</div>
                    <div class="sector">📡 IT/Telekom</div>
                </div>
                <h4>📋 BSI-Standards:</h4>
                <ul>
                    <li><strong>200-1:</strong> Management-Systeme</li>
                    <li><strong>200-2:</strong> IT-Grundschutz</li>
                    <li><strong>200-3:</strong> Risikoanalyse</li>
                    <li><strong>200-4:</strong> BCM</li>
                </ul>`,
                quiz: [{
                    question: "Welcher BSI-Standard behandelt Business Continuity?",
                    options: ["200-1", "200-2", "200-3", "200-4"],
                    correct: 3
                }]
            }
        ]
    },

    // 🏢 Organisatorische Sicherheit
    organizational_security: {
        title: "🏢 Organisatorische Sicherheit",
        modules: [
            {
                id: "security_awareness",
                title: "Security Awareness",
                content: `
                <h3>🧠 Awareness-Programm</h3>
                <div class="awareness-cycle">
                    <div class="cycle-step">📊 <strong>Assessment</strong></div>
                    <div class="cycle-step">📚 <strong>Training</strong></div>
                    <div class="cycle-step">🎯 <strong>Testing</strong></div>
                    <div class="cycle-step">📈 <strong>Measurement</strong></div>
                </div>
                <h4>🎯 Training-Methoden:</h4>
                <ul>
                    <li>E-Learning Module</li>
                    <li>Phishing-Simulationen</li>
                    <li>Gamification</li>
                    <li>Security Champions</li>
                </ul>`,
                quiz: [{
                    question: "Was ist das Hauptziel von Phishing-Simulationen?",
                    options: ["Bestrafung", "Schulung", "Compliance", "Überwachung"],
                    correct: 1
                }]
            },
            {
                id: "bcm_processes",
                title: "Business Continuity Management",
                content: `
                <h3>🔄 BCM-Zyklus</h3>
                <div class="bcm-phases">
                    <div class="phase">🎯 <strong>BIA</strong><br>Business Impact Analysis</div>
                    <div class="phase">⚠️ <strong>Risk Assessment</strong><br>Risikoanalyse</div>
                    <div class="phase">📋 <strong>Strategy</strong><br>Kontinuitätsstrategie</div>
                    <div class="phase">🧪 <strong>Testing</strong><br>Plan-Tests</div>
                </div>
                <h4>📊 Key Metrics:</h4>
                <ul>
                    <li><strong>RTO:</strong> Recovery Time Objective</li>
                    <li><strong>RPO:</strong> Recovery Point Objective</li>
                    <li><strong>MTPD:</strong> Maximum Tolerable Period</li>
                </ul>`,
                quiz: [{
                    question: "Was definiert RPO?",
                    options: ["Recovery Time", "Recovery Point", "Risk Priority", "Response Plan"],
                    correct: 1
                }]
            }
        ]
    }
};

// CSS für bessere Darstellung
const moduleStyles = `
<style>
.cia-grid, .rbac-hierarchy, .mfa-factors, .firewall-types, .malware-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 15px 0;
}

.cia-item, .fw-type, .malware-type, .component, .detection {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
}

.gdpr-rights, .gdpr-penalties, .patch-cycle, .apt-phases {
    background: #e3f2fd;
    border-left: 4px solid #2196f3;
    padding: 15px;
    margin: 10px 0;
}

.cycle-step, .phase {
    display: inline-block;
    background: #fff;
    padding: 8px 12px;
    margin: 4px;
    border-radius: 20px;
    border: 1px solid #ddd;
}

code {
    background: #f1f3f4;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
}
</style>`;

// Integration in bestehendes System
if (typeof cybersecurityData !== 'undefined') {
    Object.assign(cybersecurityData, extendedCyberModules);
    console.log('✅ Erweiterte Cybersecurity-Module geladen!');
}
