// Mega-Collection: Noch mehr echte Cybersecurity-Vorfälle
// Die wildesten und spektakulärsten Hacks der Geschichte

const megaCyberQuests = {
    easy: [
        {
            id: "pokemon_go_security",
            title: "🎮 Pokémon GO Security Chaos (2016)",
            difficulty: "Einfach",
            description: "Pokémon GO wird zum Sicherheitsalptraum: Spieler laufen in Militärbasen, Hacker nutzen AR für Spionage...",
            realEvent: "Pokémon GO schuf neue Kategorien von Sicherheitsproblemen",
            startingScenario: {
                title: "Niantic Labs - San Francisco, Juli 2016",
                text: "Sie sind Security-Chef bei Niantic. Pokémon GO explodiert: 100 Millionen Downloads in einem Monat! Aber dann: Spieler brechen in Pentagon ein, iranische Nuklearanlagen werden zu Pokéstops, Russland verbietet das Spiel als 'CIA-Spionage-Tool'!",
                image: "📱",
                setting: "Niantic HQ, Pokémon GO-Server überlastet, Sicherheitswarnungen überall"
            },
            questPaths: {
                start: {
                    situation: "Millionen Spieler ignorieren Sicherheit für virtuelle Monster! Militärbasen sind überfüllt!",
                    choices: [
                        {
                            text: "Geo-Fencing um Militärbasen implementieren",
                            consequence: "military_protection",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "Spieler-Warnsystem für gefährliche Gebiete",
                            consequence: "warning_system",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Problem ignorieren - Wachstum wichtiger",
                            consequence: "ignore_security",
                            risk: "extreme",
                            points: -15
                        }
                    ]
                },

                warning_system: {
                    situation: "⚠️ SMART! Ihr System warnt vor Minenfeldern, Klippen, Privatgrundstücken. Pokémon GO wird sicherer. Regierungen weltweit loben Niantic. AR-Gaming bekommt Sicherheitsstandards!",
                    isConsequence: true,
                    realOutcome: "Niantic fügte Sicherheitswarnungen hinzu, entfernte Pokéstops von sensitiven Orten",
                    choices: [
                        {
                            text: "AR-Gaming-Sicherheit revolutioniert",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "zoom_china_surveillance",
            title: "🇨🇳 Zoom China Überwachungs-Skandal (2020)",
            difficulty: "Einfach",
            description: "Zoom terminiert Aktivisten-Accounts auf Chinas Befehl, Aufschrei über Zensur...",
            realEvent: "Zoom schloss Tiananmen-Gedenkveranstaltungen auf chinesische Anweisung",
            startingScenario: {
                title: "Zoom Headquarters - San Jose, Juni 2020",
                text: "Sie sind Zoom's Global Policy Director. Problem: China droht mit kompletter Zoom-Sperrung, wenn Sie Tiananmen-Gedenkveranstaltungen nicht beenden. Zoom hat Entwickler in China, ist auf den Markt angewiesen. Aber Menschenrechts-Aktivisten sind empört!",
                image: "🕯️",
                setting: "Zoom HQ, Tiananmen-Jahrestag, China vs. Menschenrechte"
            },
            questPaths: {
                start: {
                    situation: "China verlangt Zensur von Tiananmen-Gedenkveranstaltungen. Menschenrechte vs. Geschäft?",
                    choices: [
                        {
                            text: "Menschenrechte verteidigen - China ignorieren",
                            consequence: "human_rights_stand",
                            risk: "extreme",
                            points: 30
                        },
                        {
                            text: "Chinas Forderungen befolgen",
                            consequence: "china_compliance",
                            risk: "high",
                            points: -20
                        },
                        {
                            text: "Kompromiss - regionsspezifische Regeln",
                            consequence: "regional_solution",
                            risk: "medium",
                            points: 15
                        }
                    ]
                },

                human_rights_stand: {
                    situation: "🏆 HELDENHAFT! Sie weigern sich zu zensieren. China blockiert Zoom, aber weltweit wird Zoom als Verteidiger der Meinungsfreiheit gefeiert! Andere Tech-Firmen folgen Ihrem Beispiel. Sie haben einen Präzedenzfall geschaffen!",
                    isConsequence: true,
                    realOutcome: "Zoom entschuldigte sich, implementierte regionale Compliance-Richtlinien",
                    choices: [
                        {
                            text: "Meinungsfreiheit im Internet gestärkt",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "instagram_teen_depression",
            title: "📸 Instagram Teen Depression Whistleblower (2021)",
            difficulty: "Einfach",
            description: "Facebook-Whistleblowerin Frances Haugen enthüllt: Instagram schadet bewusst Teenager-Psyche...",
            realEvent: "Interne Studien zeigten, dass Instagram Depressionen bei Teenagern verstärkt",
            startingScenario: {
                title: "Facebook Headquarters - Menlo Park, September 2021",
                text: "Sie sind Facebook Data Scientist Frances Haugen. Ihre internen Studien zeigen Schockierendes: Instagram verstärkt Depressionen bei Teenagern um 32%! Aber Facebook verheimlicht die Daten und macht weiter. Sie haben 10.000 interne Dokumente kopiert...",
                image: "📊",
                setting: "Facebook HQ, explosive Daten auf Ihrem Laptop, ethisches Dilemma"
            },
            questPaths: {
                start: {
                    situation: "Sie haben Beweise, dass Facebook bewusst Teenagern schadet. Was tun?",
                    choices: [
                        {
                            text: "Whistleblowing - alles an Wall Street Journal geben",
                            consequence: "whistleblowing",
                            risk: "extreme",
                            points: 35
                        },
                        {
                            text: "Intern versuchen Änderungen zu bewirken",
                            consequence: "internal_reform",
                            risk: "high",
                            points: 10
                        },
                        {
                            text: "Schweigen und Job behalten",
                            consequence: "silence",
                            risk: "extreme",
                            points: -25
                        }
                    ]
                },

                whistleblowing: {
                    situation: "📰 BOMBEN-STORY! Wall Street Journal veröffentlicht die 'Facebook Files'! Weltweiter Aufschrei! Sie sagen vor dem US-Kongress aus, EU startet Ermittlungen. Mark Zuckerberg muss sich rechtfertigen!",
                    choices: [
                        {
                            text: "Für globale Social Media Regulierung kämpfen",
                            consequence: "global_regulation",
                            risk: "medium",
                            points: 40
                        }
                    ]
                },

                global_regulation: {
                    situation: "🌍 WORLD-CHANGER! Ihr Whistleblowing führt zu weltweiten Social Media Gesetzen! EU's Digital Services Act, UK's Online Safety Bill, Meta muss Algorithmen ändern. Sie haben Millionen Teenager vor Depression geschützt!",
                    isConsequence: true,
                    realOutcome: "Frances Haugen's Whistleblowing führte zu globalen Social Media Regulierungs-Gesetzen",
                    choices: [
                        {
                            text: "Teenager-Schutz im Internet durchgesetzt",
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
            id: "russian_election_interference",
            title: "🇷🇺 Russische Wahlbeeinflussung USA 2016",
            difficulty: "Mittel",
            description: "Internet Research Agency startet massive Social Media Manipulation der US-Präsidentschaftswahl...",
            realEvent: "Russlands umfassende Social Media Kampagne beeinflusste US-Wahl 2016",
            startingScenario: {
                title: "Internet Research Agency - St. Petersburg, Russland, 2016",
                text: "Sie sind US-Intelligence-Analyst und überwachen russische Cyber-Aktivitäten. Sie entdecken 'Internet Research Agency' - eine Troll-Fabrik mit 400 Mitarbeitern, die 24/7 gefälschte amerikanische Identitäten betreibt. Millionen fake Facebook/Twitter-Posts sollen die US-Wahl beeinflussen!",
                image: "🗳️",
                setting: "NSA-Überwachungszentrale, russische Troll-Farm wird live beobachtet"
            },
            questPaths: {
                start: {
                    situation: "Russische Trolle manipulieren Millionen amerikanischer Wähler in Echtzeit!",
                    choices: [
                        {
                            text: "Sofort Social Media Plattformen warnen",
                            consequence: "platform_warning",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Öffentlich über russische Manipulation informieren",
                            consequence: "public_warning",
                            risk: "extreme",
                            points: 30
                        },
                        {
                            text: "Geheimdienst-Operation - Trolle zurückhacken",
                            consequence: "cyber_retaliation",
                            risk: "extreme",
                            points: 20
                        }
                    ]
                },

                public_warning: {
                    situation: "📢 Sie gehen an die Öffentlichkeit! 'Russland manipuliert unsere Wahl!' Medien explodieren, Trump dementiert, Putin lacht. Aber: Amerikaner werden sensibilisiert, Fact-Checking boomt, Social Media muss handeln!",
                    choices: [
                        {
                            text: "Internationale Anti-Desinformation-Allianz gründen",
                            consequence: "disinfo_alliance",
                            risk: "low",
                            points: 35
                        }
                    ]
                },

                disinfo_alliance: {
                    situation: "🌍 GAME-CHANGER! Ihr Alarm führt zur 'Global Partnership on AI' - USA, EU, Kanada, Japan kämpfen gemeinsam gegen Desinformation. Neue Gesetze, bessere Detection, Millionen werden vor Fake News geschützt!",
                    isConsequence: true,
                    realOutcome: "Mueller-Ermittlungen deckten russische Interferenz auf, führte zu neuen Social Media Regulations",
                    choices: [
                        {
                            text: "Demokratie vor Desinformation geschützt",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "silk_road_bitcoin_empire",
            title: "🌐 Silk Road: Bitcoin Drug Empire (2011-2013)",
            difficulty: "Mittel",
            description: "Ross Ulbricht erschafft den ersten Dark Web Marktplatz - FBI jagt 'Dread Pirate Roberts'...",
            realEvent: "Silk Road war der erste große Bitcoin-Marktplatz für illegale Waren",
            startingScenario: {
                title: "FBI Cyber Division - New York, 2013",
                text: "Sie sind FBI Special Agent Carl Force. Ziel: 'Dread Pirate Roberts', Betreiber von Silk Road - einem Dark Web Marktplatz für Drogen, Waffen, Killer. 1 Million Bitcoin Umsatz! Ross Ulbricht, 29, lebt unauffällig in San Francisco, aber ist er der Mastermind?",
                image: "💊",
                setting: "FBI Cyber Crime Unit, Silk Road läuft auf Tor, Bitcoin-Transaktionen werden verfolgt"
            },
            questPaths: {
                start: {
                    situation: "Silk Road macht 1.2 Milliarden Dollar Umsatz mit Drogen. Wie stoppen Sie das Bitcoin-Imperium?",
                    choices: [
                        {
                            text: "Bitcoin-Blockchain analysieren für Spuren",
                            consequence: "blockchain_analysis",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Undercover in Silk Road einschleusen",
                            consequence: "undercover_operation",
                            risk: "high",
                            points: 30
                        },
                        {
                            text: "Tor-Netzwerk kompromittieren",
                            consequence: "tor_attack",
                            risk: "extreme",
                            points: 15
                        }
                    ]
                },

                blockchain_analysis: {
                    situation: "🔍 GENIAL! Sie entwickeln die ersten Blockchain-Forensik-Tools! Bitcoin ist NICHT anonym - jede Transaktion ist verfolgbar! Sie entschlüsseln Ulbrichts Identität durch seine ersten Bitcoin-Käufe.",
                    choices: [
                        {
                            text: "Öffentliche Festnahme in Bibliothek",
                            consequence: "public_arrest",
                            risk: "medium",
                            points: 35
                        },
                        {
                            text: "Geheime Verhaftung - Silk Road weiterlaufen lassen",
                            consequence: "honey_pot",
                            risk: "high",
                            points: 20
                        }
                    ]
                },

                public_arrest: {
                    situation: "📚 LEGENDÄR! Sie verhaften Ulbricht in der Glen Park Library, während er Silk Road administriert! Laptop offen, eingeloggt als 'Dread Pirate Roberts'! Silk Road kollabiert, 174.000 Bitcoin (144 Millionen $) beschlagnahmt!",
                    choices: [
                        {
                            text: "Bitcoin-Forensik als Standard für alle Behörden etablieren",
                            consequence: "crypto_forensics",
                            risk: "none",
                            points: 40
                        }
                    ]
                },

                crypto_forensics: {
                    situation: "🏆 REVOLUTION! Ihre Silk Road-Ermittlung begründet Crypto-Forensik! Chainalysis, Elliptic - Milliarden-Industrie entsteht. Sie haben Kryptowährungen für Strafverfolgung entschlüsselt und Dark Web-Crime bekämpfbar gemacht!",
                    isConsequence: true,
                    realOutcome: "Ross Ulbricht bekam lebenslang, Silk Road-Fall etablierte Blockchain-Forensik als Standard",
                    choices: [
                        {
                            text: "Crypto-Crime-Fighting revolutioniert",
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
            id: "zero_day_market_greyhat",
            title: "🕳️ Zero-Day Vulnerability Market Chaos (2010-heute)",
            difficulty: "Schwer",
            description: "Sie entdecken einen kritischen Zero-Day in Windows - verkaufen für 1 Million oder ethisch melden?",
            realEvent: "Zerodium zahlt bis zu 2.5 Millionen Dollar für iOS Zero-Days",
            startingScenario: {
                title: "Ihr Home-Office - Cybersecurity Researcher, 2023",
                text: "Sie sind unabhängiger Security-Forscher und haben das Unmögliche geschafft: Ein Zero-Day-Exploit, der JEDES Windows-System remote kompromittiert! Zerodium bietet 2.5 Millionen Dollar. NSA würde 5 Millionen zahlen. Microsoft Bug Bounty: nur 100.000 Dollar. Was ist ethisch richtig?",
                image: "💰",
                setting: "Ihr Laptop zeigt den Zero-Day-Code, drei Angebote liegen vor"
            },
            questPaths: {
                start: {
                    situation: "Ihr Zero-Day könnte Millionen Computer hacken. NSA, Kriminelle oder Microsoft - wer bekommt ihn?",
                    choices: [
                        {
                            text: "Ethisch an Microsoft melden - Patch für alle",
                            consequence: "ethical_disclosure",
                            risk: "none",
                            points: 40
                        },
                        {
                            text: "An Zerodium verkaufen - 2.5 Millionen Dollar",
                            consequence: "commercial_sale",
                            risk: "extreme",
                            points: -20
                        },
                        {
                            text: "NSA kontaktieren - nationale Sicherheit",
                            consequence: "government_sale",
                            risk: "high",
                            points: 10
                        }
                    ]
                },

                ethical_disclosure: {
                    situation: "🏆 HELD! Sie melden es kostenlos an Microsoft. Patch wird global verteilt, Millionen Computer geschützt! Microsoft erkennt Ihre Ethik und bietet Ihnen 1 Million Dollar Bonus plus Job als Chief Security Officer!",
                    choices: [
                        {
                            text: "Zero-Day Ethik-Standards für Industrie entwickeln",
                            consequence: "industry_standards",
                            risk: "none",
                            points: 50
                        }
                    ]
                },

                industry_standards: {
                    situation: "🌍 WELTVERÄNDERND! Ihr ethisches Beispiel führt zu globalen Zero-Day-Disclosure-Standards! Bug Bounties werden dramatisch erhöht, graue Märkte schrumpfen, Internet wird sicherer. Sie haben Cybersecurity für immer verändert!",
                    isConsequence: true,
                    realOutcome: "Zero-Day-Märkte existieren weiter, aber ethische Disclosure wird zunehmend belohnt",
                    choices: [
                        {
                            text: "Cybersecurity-Ethik etabliert",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "deepfake_political_chaos",
            title: "🎭 Deepfake Political Chaos (2020-heute)",
            difficulty: "Schwer",
            description: "KI-generierte Videos von Politikern verbreiten sich viral - Realität vs. Fake nicht mehr unterscheidbar...",
            realEvent: "Deepfakes bedrohen Demokratie und Wahrheit weltweit",
            startingScenario: {
                title: "Facebook AI Research Lab - Menlo Park, 2022",
                text: "Sie sind Facebook's AI Ethics Director. Alptraum-Szenario: Ein viral gegangenes Video zeigt Joe Biden beim Gestehen von Wahlbetrug - aber es ist eine perfekte Deepfake! Millionen glauben es, Demokratie wankt. Ihre Detection-AI erkennt nur 60% der Deepfakes!",
                image: "🤖",
                setting: "Meta AI Lab, Deepfake-Videos überfluten Social Media"
            },
            questPaths: {
                start: {
                    situation: "Perfekte Deepfakes zerstören das Konzept von Wahrheit! Wie retten Sie die Realität?",
                    choices: [
                        {
                            text: "Globale Anti-Deepfake-Allianz mit allen Tech-Firmen",
                            consequence: "tech_alliance",
                            risk: "medium",
                            points: 35
                        },
                        {
                            text: "Blockchain-basierte Content-Authentifizierung entwickeln",
                            consequence: "blockchain_truth",
                            risk: "low",
                            points: 40
                        },
                        {
                            text: "Alle synthetischen Medien verbieten",
                            consequence: "total_ban",
                            risk: "extreme",
                            points: 15
                        }
                    ]
                },

                blockchain_truth: {
                    situation: "🔗 GENIAL! Sie entwickeln 'ProvenanceChain' - jedes echte Video/Foto bekommt kryptographischen Beweis der Echtheit! Kameras integrieren Blockchain, Deepfakes werden automatisch markiert!",
                    choices: [
                        {
                            text: "Globaler Standard für alle Medien",
                            consequence: "universal_standard",
                            risk: "none",
                            points: 50
                        }
                    ]
                },

                universal_standard: {
                    situation: "🌍 REALITY SAVED! Ihr System wird UN-Standard! Jedes Smartphone, jede Kamera verwendet ProvenanceChain. Deepfakes sind sofort erkennbar. Sie haben die Wahrheit im digitalen Zeitalter gerettet!",
                    isConsequence: true,
                    realOutcome: "Deepfake-Detection wird besser, aber perfekte Lösung existiert noch nicht",
                    choices: [
                        {
                            text: "Digitale Wahrheit wiederhergestellt",
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
    // Merge mega quests into existing real quests
    Object.keys(megaCyberQuests).forEach(difficulty => {
        megaCyberQuests[difficulty].forEach(quest => {
            realCyberQuests[difficulty].push(quest);
        });
    });
    console.log('🚀 MEGA Cybersecurity-Quest-Collection geladen!');
    console.log(`🎮 FINALE Anzahl: ${realCyberQuests.easy.length + realCyberQuests.medium.length + realCyberQuests.hard.length} echte Quests verfügbar!`);
}
