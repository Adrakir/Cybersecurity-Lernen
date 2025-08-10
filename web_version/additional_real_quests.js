// Zusätzliche echte Cybersecurity-Quests - Teil 2
// Noch mehr spektakuläre echte Cyberangriffe der Geschichte

const additionalRealQuests = {
    easy: [
        {
            id: "ashley_madison_hack",
            title: "💔 Ashley Madison Hack - 37 Millionen Seitensprünge (2015)",
            difficulty: "Einfach",
            description: "Impact Team hackt die Seitensprung-Website und droht mit Veröffentlichung aller Nutzerdaten...",
            realEvent: "37 Millionen Nutzer der Untreue-Website wurden bloßgestellt",
            startingScenario: {
                title: "Ashley Madison Headquarters - Toronto, 15. Juli 2015",
                text: "Sie sind IT-Sicherheitschef bei Ashley Madison, der Website für Seitensprünge. Plötzlich erscheint eine Nachricht auf allen Servern: 'Impact Team war hier. Schließt die Website oder wir veröffentlichen ALLE Nutzerdaten - inklusive Kreditkarten und sexuelle Fantasien von 37 Millionen Menschen!'",
                image: "💻",
                setting: "Ashley Madison IT-Zentrale, Erpressung läuft, 37 Millionen Nutzer in Gefahr"
            },
            questPaths: {
                start: {
                    situation: "Impact Team droht mit Veröffentlichung intimster Details von Millionen verheirateter Menschen!",
                    choices: [
                        {
                            text: "Website sofort schließen - Nutzerschutz geht vor",
                            consequence: "site_shutdown",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Nie den Erpressern nachgeben - weitermachen",
                            consequence: "defiance",
                            risk: "extreme",
                            points: -15
                        },
                        {
                            text: "FBI kontaktieren und Hacker verfolgen",
                            consequence: "fbi_hunt",
                            risk: "medium",
                            points: 20
                        }
                    ]
                },

                defiance: {
                    situation: "💥 KATASTROPHE! Impact Team macht Ernst: 60 GB Nutzerdaten werden veröffentlicht! Namen, Adressen, sexuelle Vorlieben, Kreditkarten - alles online! Ehen zerbrechen weltweit, Suizide werden gemeldet, Erpressung explodiert!",
                    choices: [
                        {
                            text: "Massive Entschädigungen zahlen",
                            consequence: "damage_control",
                            risk: "extreme",
                            points: -10
                        },
                        {
                            text: "Verantwortung übernehmen und zurücktreten",
                            consequence: "resignation",
                            risk: "medium",
                            points: 10
                        }
                    ]
                },

                resignation: {
                    situation: "📰 Sie treten zurück und übernehmen Verantwortung. Ashley Madison zahlt 11.2 Millionen Dollar Schadenersatz. Ihr ethisches Verhalten wird respektiert. Impact Team bleibt unentdeckt, aber ihr Leak verändert Online-Dating für immer!",
                    isConsequence: true,
                    realOutcome: "Ashley Madison zahlte Millionen Schadenersatz, CEO trat zurück, Impact Team wurde nie gefasst",
                    choices: [
                        {
                            text: "Online-Privacy-Bewusstsein geschärft",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "zoom_zoombombing_pandemic",
            title: "📹 Zoombombing Pandemie (2020)",
            difficulty: "Einfach", 
            description: "Während COVID-19 werden Millionen Zoom-Meetings von Trollen gehackt...",
            realEvent: "Zoombombing wurde zum Massen-Phänomen während der Pandemie",
            startingScenario: {
                title: "Zoom Headquarters - San Jose, März 2020, COVID-19 Lockdown",
                text: "Sie sind Zoom Security-Chef. Ihr Nutzerwachstum explodiert: Von 10 Millionen auf 300 Millionen User in 3 Monaten! Aber dann: 'Zoombombing' - Hacker stürmen Meetings, zeigen pornographische Inhalte bei Schulstunden, Nazi-Symbole bei Firmenmeetings!",
                image: "💻",
                setting: "Zoom HQ, Pandemie-bedingt fast leer, aber Millionen Online-Meetings laufen"
            },
            questPaths: {
                start: {
                    situation: "Täglich werden tausende Meetings gehackt! Schulen verbieten Zoom, Unternehmen sind in Panik!",
                    choices: [
                        {
                            text: "Waiting Rooms für alle Meetings standardmäßig aktivieren",
                            consequence: "waiting_rooms",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "Passwort-Schutz für alle Meetings erzwingen",
                            consequence: "password_protection",
                            risk: "low", 
                            points: 25
                        },
                        {
                            text: "Erstmal Problem herunterspielen - Wachstum wichtiger",
                            consequence: "denial_mode",
                            risk: "extreme",
                            points: -20
                        }
                    ]
                },

                password_protection: {
                    situation: "🔐 SMART! Sie führen standardmäßige Passwörter ein. Zoombombing-Fälle sinken um 90%! Zoom wird wieder vertrauenswürdig. Schulen kehren zurück, Remote-Work wird gerettet!",
                    choices: [
                        {
                            text: "End-to-End-Verschlüsselung für alle einführen",
                            consequence: "e2e_encryption",
                            risk: "none",
                            points: 30
                        }
                    ]
                },

                e2e_encryption: {
                    situation: "🏆 REVOLUTIONÄR! Zoom führt kostenlose End-to-End-Verschlüsselung ein - als erste große Video-Plattform! Während der Pandemie retten Sie Remote-Work und Online-Education. Zoom wird zum sichersten Video-Tool der Welt!",
                    isConsequence: true,
                    realOutcome: "Zoom implementierte massive Sicherheits-Updates, wurde zum Standard für sicheres Video-Conferencing",
                    choices: [
                        {
                            text: "Remote-Work-Revolution ermöglicht",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "twitter_blue_checkmark_chaos",
            title: "🐦 Twitter Blue Checkmark Chaos (2022)",
            difficulty: "Einfach",
            description: "Elon Musks $8 Twitter Blue führt zu Identitätschaos und Börsen-Manipulation...",
            realEvent: "Fake-verifizierte Accounts verursachten Milliarden-Verluste an der Börse",
            startingScenario: {
                title: "Twitter Headquarters - San Francisco, November 2022",
                text: "Sie sind Twitter Trust & Safety Manager unter dem neuen Besitzer Elon Musk. Er hat entschieden: Jeder kann für $8/Monat einen blauen Haken kaufen! Sofort exploitieren Betrüger das System: Fake-Accounts von Insulin-Herstellern, Pharma-Firmen, sogar der NASA posten gefälschte Nachrichten!",
                image: "✅",
                setting: "Twitter HQ, Chaos überall, Börsenkurse crashen durch Fake-Tweets"
            },
            questPaths: {
                start: {
                    situation: "Fake-verifizierte Accounts crashen Aktienkurse! Eli Lilly verliert 15 Milliarden Dollar durch fake 'kostenloses Insulin' Tweet!",
                    choices: [
                        {
                            text: "Sofort alle gekauften Checkmarks pausieren",
                            consequence: "emergency_pause",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Musk überzeugen das System zu überdenken",
                            consequence: "convince_musk",
                            risk: "high",
                            points: 20
                        },
                        {
                            text: "Bessere Verifikation mit ID-Check einführen",
                            consequence: "id_verification",
                            risk: "low",
                            points: 30
                        }
                    ]
                },

                emergency_pause: {
                    situation: "⏸️ Sie stoppen das Chaos! Aber Musk ist wütend: '$8 Blue muss funktionieren!' Sie entwickeln ein neues System: Graue Checkmarks für Organisationen, blaue für Personen, goldene für Unternehmen.",
                    choices: [
                        {
                            text: "Drei-Farben-System implementieren",
                            consequence: "color_system",
                            risk: "none",
                            points: 35
                        }
                    ]
                },

                color_system: {
                    situation: "🌈 GENIAL! Ihr Drei-Farben-Checkmark-System wird zum neuen Standard! Andere Social Media Plattformen kopieren es. Sie haben die Online-Identitäts-Verifikation revolutioniert und Milliarden-Verluste verhindert!",
                    isConsequence: true,
                    realOutcome: "Twitter pausierte und überarbeitete das Blue-System mehrmals, führte schließlich verschiedene Checkmark-Arten ein",
                    choices: [
                        {
                            text: "Social Media Verifikation neu erfunden",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        }
    ],

    medium: [
        {
            id: "uber_waymo_trade_secrets",
            title: "🚗 Uber vs. Waymo: Selbstfahrende Auto-Spionage (2017)",
            difficulty: "Mittel",
            description: "Uber-Ingenieur klaut Googles autonome Fahrzeug-Geheimnisse im Wert von Milliarden...",
            realEvent: "Größter Technologie-Diebstahl im Silicon Valley, 245 Millionen Dollar Vergleich",
            startingScenario: {
                title: "Uber ATG (Advanced Technologies Group) - San Francisco, Februar 2017",
                text: "Sie sind Uber's Anwalt. Waymo (Google) verklagt Uber auf 1.85 Milliarden Dollar! Ihr Ex-Ingenieur Anthony Levandowski hat angeblich 14.000 geheime Dateien über selbstfahrende Autos gestohlen, bevor er zu Uber wechselte. FBI ermittelt wegen Industriespionage!",
                image: "🔍",
                setting: "Uber Hauptquartier, FBI-Durchsuchung läuft, Milliarden-Klage droht"
            },
            questPaths: {
                start: {
                    situation: "Google behauptet, Uber habe ihre LiDAR-Technologie im Wert von Milliarden gestohlen!",
                    choices: [
                        {
                            text: "Levandowski sofort feuern und kooperieren",
                            consequence: "cooperate_google",
                            risk: "medium",
                            points: 20
                        },
                        {
                            text: "Vor Gericht kämpfen - Uber hat nichts gestohlen",
                            consequence: "court_battle",
                            risk: "extreme",
                            points: 10
                        },
                        {
                            text: "Außergerichtlichen Vergleich vorschlagen",
                            consequence: "settlement_offer",
                            risk: "low",
                            points: 25
                        }
                    ]
                },

                settlement_offer: {
                    situation: "💰 KLUG! Sie bieten 245 Millionen Dollar Vergleich plus 0.34% Uber-Aktien (Wert: ~1 Milliarde). Google akzeptiert! Levandowski wird später zu 18 Monaten Gefängnis verurteilt, aber Uber überlebt den Skandal.",
                    choices: [
                        {
                            text: "Strenge Compliance-Regeln für alle Neueinstellungen",
                            consequence: "compliance_overhaul",
                            risk: "none",
                            points: 30
                        }
                    ]
                },

                compliance_overhaul: {
                    situation: "🏆 Sie revolutionieren Silicon Valley! Uber führt die strengsten Anti-Spionage-Regeln der Tech-Branche ein. Andere Firmen folgen. Trade Secret Theft wird massiv reduziert. Sie haben die Tech-Industrie ethischer gemacht!",
                    isConsequence: true,
                    realOutcome: "Uber zahlte 245 Millionen, Levandowski kam ins Gefängnis, führte zu strengeren Trade-Secret-Schutz im Silicon Valley",
                    choices: [
                        {
                            text: "Silicon Valley ethischer gemacht",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "cambridge_analytica_election",
            title: "🗳️ Cambridge Analytica: 87 Millionen Facebook-Profile (2018)",
            difficulty: "Mittel",
            description: "Facebook-Daten werden zur Wahlmanipulation missbraucht, Demokratie in Gefahr...",
            realEvent: "Größter Datenmissbrauch-Skandal der Geschichte, beeinflusste US-Wahl 2016",
            startingScenario: {
                title: "Facebook Headquarters - Menlo Park, März 2018",
                text: "Sie sind Facebook's Chief Privacy Officer. The Guardian und New York Times veröffentlichen explosives: Cambridge Analytica hat 87 Millionen Facebook-Profile illegal gesammelt und für Trump-Wahlkampf 2016 genutzt! Mark Zuckerberg muss vor dem US-Kongress aussagen!",
                image: "📊",
                setting: "Facebook HQ, Medien-Sturm, Kongress-Anhörung steht bevor"
            },
            questPaths: {
                start: {
                    situation: "87 Millionen Nutzer wurden ohne Wissen für politische Manipulation ausgenutzt!",
                    choices: [
                        {
                            text: "Sofortige Transparenz - alle Details veröffentlichen",
                            consequence: "full_transparency",
                            risk: "extreme",
                            points: 25
                        },
                        {
                            text: "Schadensbegrenzung - nur Minimum zugeben",
                            consequence: "damage_control",
                            risk: "high",
                            points: -10
                        },
                        {
                            text: "Massive Privacy-Reformen sofort ankündigen",
                            consequence: "privacy_revolution",
                            risk: "medium",
                            points: 30
                        }
                    ]
                },

                privacy_revolution: {
                    situation: "🔄 GAME-CHANGER! Sie überzeugen Zuckerberg zu radikalen Reformen: GDPR-ähnliche Standards global, App-Permissions revolutioniert, Daten-Portabilität für alle! Facebook zahlt 5 Milliarden Dollar Strafe, aber gewinnt Vertrauen zurück.",
                    choices: [
                        {
                            text: "Globalen Digital Privacy Standard vorschlagen",
                            consequence: "global_standard",
                            risk: "none",
                            points: 35
                        }
                    ]
                },

                global_standard: {
                    situation: "🌍 HISTORISCH! Ihr Facebook-Skandal führt zu globalen Privacy-Gesetzen! EU's GDPR wird weltweiter Standard, Kaliforniens CCPA folgt, Brasilien's LGPD entsteht. Sie haben aus einer Krise die größte Privacy-Revolution der Geschichte gemacht!",
                    isConsequence: true,
                    realOutcome: "Facebook zahlte 5 Milliarden Dollar, führte zu GDPR-Verschärfung weltweit, Cambridge Analytica wurde aufgelöst",
                    choices: [
                        {
                            text: "Globale Privacy-Revolution ausgelöst",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        }
    ],

    hard: [
        {
            id: "operation_aurora_china",
            title: "🌅 Operation Aurora: China vs. Google (2009)",
            difficulty: "Schwer",
            description: "Chinesische Militär-Hacker infiltrieren Google und 30+ Konzerne für Dissidenten-Jagd...",
            realEvent: "Chinesische APT griff Google an, um Gmail-Accounts von Menschenrechtlern zu hacken",
            startingScenario: {
                title: "Google Headquarters - Mountain View, Dezember 2009",
                text: "Sie sind Google's Security-Chef. Ihre Intrusion Detection schlägt Alarm: Hochentwickelter APT-Angriff! Chinesische Hacker haben Zugang zu Gmail-Accounts chinesischer Menschenrechtler. Adobe, Juniper, 30+ andere Firmen sind auch betroffen. Das ist staatlich gesponserte Cyber-Spionage!",
                image: "🇨🇳",
                setting: "Google Security Operations Center, APT-Angriff läuft, Menschenrechtler in Gefahr"
            },
            questPaths: {
                start: {
                    situation: "Chinesische Militär-Hacker jagen Dissidenten über Gmail! Internationale Krise droht!",
                    choices: [
                        {
                            text: "Öffentlich China als Cyber-Angreifer benennen",
                            consequence: "public_accusation",
                            risk: "extreme",
                            points: 30
                        },
                        {
                            text: "Geheimdiplomatie - US-Regierung einschalten",
                            consequence: "secret_diplomacy",
                            risk: "medium",
                            points: 20
                        },
                        {
                            text: "Aus China zurückziehen - Google.cn schließen",
                            consequence: "china_exit",
                            risk: "extreme",
                            points: 35
                        }
                    ]
                },

                china_exit: {
                    situation: "🚪 HISTORISCH! Google verlässt China komplett - verliert damit Milliarden, aber rettet Menschenrechtler! Ihr Mut inspiriert andere Tech-Konzerne. China blockiert daraufhin alle Google-Services. Cyber-Kalter-Krieg beginnt!",
                    choices: [
                        {
                            text: "Internationale Anti-Zensur-Allianz gründen",
                            consequence: "anti_censorship_alliance",
                            risk: "high",
                            points: 40
                        }
                    ]
                },

                anti_censorship_alliance: {
                    situation: "🌍 WELTVERÄNDERND! Googles China-Exit führt zur 'Freedom Online Coalition' - USA, EU, Kanada, Japan kämpfen gemeinsam gegen Internet-Zensur. Ihr Mut rettet Millionen Dissidenten weltweit vor Überwachung!",
                    isConsequence: true,
                    realOutcome: "Google verließ China 2010, führte zu neuen internationalen Cyber-Normen, Operation Aurora blieb ungestraft",
                    choices: [
                        {
                            text: "Internet-Freiheit verteidigt",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        }
    ]
};

// Integration in das bestehende System
if (typeof realCyberQuests !== 'undefined') {
    // Merge additional quests into existing real quests
    Object.keys(additionalRealQuests).forEach(difficulty => {
        additionalRealQuests[difficulty].forEach(quest => {
            realCyberQuests[difficulty].push(quest);
        });
    });
    console.log('✅ Zusätzliche echte Cybersecurity-Quests geladen!');
    console.log(`📊 Neue Gesamt-Anzahl: ${realCyberQuests.easy.length + realCyberQuests.medium.length + realCyberQuests.hard.length} echte Quests!`);
}
