// Echte Cybersecurity-Vorfälle als interaktive Quests
// Basierend auf realen Ereignissen der Cybersecurity-Geschichte

const realCyberQuests = {
    easy: [
        {
            id: "stuxnet_discovery",
            title: "🏭 Stuxnet: Der Atomreaktor-Virus (2010)",
            difficulty: "Einfach",
            description: "Sie sind IT-Techniker im iranischen Natanz Atomwerk und bemerken seltsame Anomalien...",
            realEvent: "Der erste bekannte Cyberwaffen-Angriff der Geschichte",
            startingScenario: {
                title: "Natanz Urananreicherungsanlage - Iran, Juni 2010",
                text: "Sie sind Maschinenbauingenieur in der streng geheimen Urananreicherungsanlage. Seit Wochen laufen die Zentrifugen seltsam. Sie drehen sich abwechselnd zu schnell und zu langsam. Kollegen berichten von ähnlichen Problemen. Die Siemens SCADA-Systeme zeigen normale Werte an, aber die Realität sieht anders aus.",
                image: "☢️",
                setting: "Hochsicherheitstrakt der Nuklearanlage, verdächtige Vibrationen überall"
            },
            questPaths: {
                start: {
                    situation: "Ihre Zentrifugen verhalten sich merkwürdig, aber die Computer zeigen alles normal an. Was tun?",
                    choices: [
                        {
                            text: "Sofort alle Zentrifugen abschalten - Sicherheit geht vor!",
                            consequence: "shutdown_success",
                            risk: "low",
                            points: 15
                        },
                        {
                            text: "IT-Team kontaktieren - da stimmt was mit der Software nicht",
                            consequence: "it_investigation", 
                            risk: "medium",
                            points: 10
                        },
                        {
                            text: "Weiterlaufen lassen - Computer zeigen ja alles normal",
                            consequence: "continued_damage",
                            risk: "high",
                            points: -10
                        }
                    ]
                },
                
                shutdown_success: {
                    situation: "🎯 Excellent! Sie haben einen internationalen Zwischenfall verhindert! Später stellt sich heraus: Stuxnet, ein von USA/Israel entwickelter Cyberwaffen-Virus, hatte Ihre Zentrifugen manipuliert. Durch das rechtzeitige Abschalten haben Sie Millionenschäden und radioaktive Verseuchung verhindert.",
                    isConsequence: true,
                    realOutcome: "In Realität: Stuxnet zerstörte 1000+ Zentrifugen, setzte Irans Nuklearprogramm um Jahre zurück",
                    choices: [
                        {
                            text: "Weiterspielen mit anderem Szenario",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 5
                        }
                    ]
                },

                it_investigation: {
                    situation: "Das IT-Team findet mysteriösen Code im System. Ein Kollege sagt: 'Das ist kein normaler Virus - das ist militärische Software!' Sie entdecken, dass der Virus gezielt nur Siemens S7-Controller angreift. Was passiert als nächstes?",
                    choices: [
                        {
                            text: "Sofortige Meldung an internationale Atombehörde",
                            consequence: "international_incident",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "Geheimhaltung - das könnte ein Staatsstreich sein",
                            consequence: "cover_up_attempt",
                            risk: "extreme",
                            points: -15
                        }
                    ]
                }
            }
        },

        {
            id: "wannacry_hospital",
            title: "🏥 WannaCry NHS Krankenhaus-Chaos (2017)",
            difficulty: "Einfach", 
            description: "Als IT-Admin im britischen NHS sehen Sie plötzlich alle PCs verschlüsselt...",
            realEvent: "WannaCry legte das gesamte britische Gesundheitssystem lahm",
            startingScenario: {
                title: "Royal London Hospital - 12. Mai 2017, 14:30 Uhr",
                text: "Sie sind IT-Administrator im größten Krankenhaus Londons. Plötzlich klingelt Ihr Telefon pausenlos. 'Die Computer sind kaputt!', 'Alle Dateien sind weg!', 'Da ist so ein roter Bildschirm!' Dann sehen Sie es selbst: WannaCry Ransomware hat zugeschlagen. Operationen müssen abgesagt werden, Patienten umgeleitet.",
                image: "🚑",
                setting: "Chaos im Krankenhaus, Ärzte können keine Patientendaten abrufen"
            },
            questPaths: {
                start: {
                    situation: "300$ in Bitcoin werden gefordert, um die Dateien zu entschlüsseln. Patienten sind in Gefahr!",
                    choices: [
                        {
                            text: "Lösegeld zahlen - Menschenleben sind wichtiger!",
                            consequence: "ransom_paid",
                            risk: "high",
                            points: -10
                        },
                        {
                            text: "Alle infizierten PCs vom Netz trennen",
                            consequence: "network_isolated", 
                            risk: "medium",
                            points: 15
                        },
                        {
                            text: "Backup-Systeme aktivieren und Windows-Updates installieren",
                            consequence: "backup_activated",
                            risk: "low", 
                            points: 20
                        }
                    ]
                },

                network_isolated: {
                    situation: "Klug! Sie haben die Ausbreitung gestoppt. Aber Marcus Hutchins, ein 22-jähriger Hacker, entdeckt den 'Kill Switch' - eine geheime Domain, die WannaCry stoppt. Registrieren Sie sie?",
                    choices: [
                        {
                            text: "Ja, Domain sofort registrieren!",
                            consequence: "hero_ending",
                            risk: "none",
                            points: 25
                        },
                        {
                            text: "Zu riskant - könnte ein Trick sein",
                            consequence: "missed_opportunity",
                            risk: "medium", 
                            points: 5
                        }
                    ]
                },

                hero_ending: {
                    situation: "🎉 HELD DES TAGES! Sie haben mit Marcus Hutchins WannaCry weltweit gestoppt! Der junge Brite wurde zum Cybersecurity-Helden, rettete Millionen von Computern und das NHS. In Realität infizierte WannaCry 300.000+ Computer in 150+ Ländern.",
                    isConsequence: true,
                    realOutcome: "Marcus Hutchins stoppte WannaCry durch Zufall und wurde weltberühmt",
                    choices: [
                        {
                            text: "Nächstes Abenteuer starten",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "tesla_hack_demo",
            title: "🚗 Tesla Model S Fernsteuerungs-Hack (2016)",
            difficulty: "Einfach",
            description: "Chinesische Hacker demonstrieren Live-Hack eines fahrenden Tesla Model S...",
            realEvent: "Keen Security Lab hackte Tesla Model S während der Fahrt",
            startingScenario: {
                title: "Beijing, China - Keen Security Lab, September 2016",
                text: "Sie sind Cybersecurity-Forscher bei Keen Security Lab. Ihr Team hat monatelang Tesla Model S analysiert. Heute ist der große Tag: Live-Demo vor Tesla-Ingenieuren. Ein Tesla Model S fährt auf der Autobahn, während Sie 12 Meilen entfernt am Computer sitzen. Können Sie das Auto fernsteuern?",
                image: "🚗",
                setting: "High-Tech Labor mit mehreren Bildschirmen, Tesla fährt live auf Highway"
            },
            questPaths: {
                start: {
                    situation: "Der Tesla fährt mit 70 mph. Welchen Hack probieren Sie zuerst?",
                    choices: [
                        {
                            text: "Radio-System hacken und Musik abspielen",
                            consequence: "radio_hacked",
                            risk: "low",
                            points: 10
                        },
                        {
                            text: "Bremsen aktivieren - das wird Tesla überzeugen!",
                            consequence: "brakes_engaged",
                            risk: "extreme",
                            points: 5
                        },
                        {
                            text: "Türen öffnen und schließen während der Fahrt",
                            consequence: "doors_demo",
                            risk: "medium",
                            points: 15
                        }
                    ]
                },

                radio_hacked: {
                    situation: "Erfolg! Plötzlich dröhnt chinesische Popmusik aus den Tesla-Lautsprechern. Der Fahrer erschrickt. Tesla-Ingenieure sind beeindruckt, aber wollen mehr sehen...",
                    choices: [
                        {
                            text: "Jetzt das Display übernehmen",
                            consequence: "display_controlled",
                            risk: "low",
                            points: 10
                        },
                        {
                            text: "Scheibenwischer aktivieren bei Sonnenschein",
                            consequence: "wipers_activated",
                            risk: "low",
                            points: 8
                        }
                    ]
                },

                brakes_engaged: {
                    situation: "💥 GEFÄHRLICH! Sie aktivieren die Bremsen bei 70 mph! Der Tesla macht eine Vollbremsung, andere Autos müssen ausweichen. Der Fahrer ist schockiert, aber unverletzt. Tesla-Ingenieure sind alarmiert - das ist ein kritisches Sicherheitsproblem!",
                    choices: [
                        {
                            text: "Sofort Tesla kontaktieren für Patch",
                            consequence: "responsible_disclosure",
                            risk: "none",
                            points: 20
                        },
                        {
                            text: "Demo fortsetzen - das war erst der Anfang",
                            consequence: "continued_chaos",
                            risk: "extreme",
                            points: -10
                        }
                    ]
                },

                responsible_disclosure: {
                    situation: "🏆 PERFEKT! Sie haben wie echte White-Hat-Hacker gehandelt. Tesla entwickelt sofort einen Patch und bedankt sich öffentlich bei Keen Security Lab. Elon Musk twittert persönlich seine Anerkennung. Sie haben Millionen Tesla-Fahrer sicherer gemacht!",
                    isConsequence: true,
                    realOutcome: "Keen Security Lab erhielt Anerkennung von Tesla und half, die Sicherheit zu verbessern",
                    choices: [
                        {
                            text: "Mission erfüllt - nächstes Abenteuer",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "jeep_hack_highway",
            title: "🚙 Jeep Cherokee Fernsteuerung auf Highway (2015)",
            difficulty: "Einfach",
            description: "Zwei Hacker übernehmen remote die Kontrolle über einen Jeep Cherokee während der Fahrt...",
            realEvent: "Charlie Miller & Chris Valasek hackten Jeep über Entertainment-System",
            startingScenario: {
                title: "Highway 64 - St. Louis, Missouri, Juli 2015",
                text: "Sie sind Cybersecurity-Forscher Charlie Miller. Andy Greenberg von Wired sitzt in einem Jeep Cherokee und fährt 70 mph auf dem Highway. Sie und Ihr Partner Chris Valasek sitzen 10 Meilen entfernt am Computer. Ihr Ziel: Beweisen, dass moderne Autos hackbar sind - live vor laufender Kamera!",
                image: "🛣️",
                setting: "Laptop im Büro, Jeep fährt live auf dem Highway, Wired-Reporter am Steuer"
            },
            questPaths: {
                start: {
                    situation: "Der Jeep fährt mit 70 mph. Welches System hacken Sie zuerst für die Demonstration?",
                    choices: [
                        {
                            text: "Radio übernehmen und Musik abspielen",
                            consequence: "radio_takeover",
                            risk: "low",
                            points: 10
                        },
                        {
                            text: "Klimaanlage auf Maximum stellen",
                            consequence: "ac_blast",
                            risk: "low",
                            points: 8
                        },
                        {
                            text: "Scheibenwischer aktivieren bei klarem Himmel",
                            consequence: "wipers_activated",
                            risk: "medium",
                            points: 12
                        }
                    ]
                },

                radio_takeover: {
                    situation: "📻 Erfolg! Plötzlich dröhnt Hip-Hop aus den Lautsprechern. Andy am Steuer ist beeindruckt. 'Das ist nur der Anfang', sagen Sie grinsend. Jetzt wird es ernster...",
                    choices: [
                        {
                            text: "Bremsen aktivieren - das zeigt echte Gefahr",
                            consequence: "emergency_brake",
                            risk: "extreme",
                            points: 20
                        },
                        {
                            text: "Lenkung übernehmen",
                            consequence: "steering_control",
                            risk: "extreme",
                            points: 25
                        },
                        {
                            text: "Motor abstellen auf dem Highway",
                            consequence: "engine_shutdown",
                            risk: "extreme",
                            points: 15
                        }
                    ]
                },

                emergency_brake: {
                    situation: "💥 DRAMATISCH! Sie aktivieren die Bremsen bei 70 mph! Der Jeep macht eine Vollbremsung, andere Autos müssen ausweichen. Andy kämpft um die Kontrolle. 'Das war zu krass!', ruft er. Aber die Demonstration ist perfekt - die Welt sieht die Gefahr!",
                    choices: [
                        {
                            text: "Sofort Chrysler kontaktieren",
                            consequence: "responsible_disclosure",
                            risk: "none",
                            points: 30
                        },
                        {
                            text: "Demo fortsetzen - noch mehr zeigen",
                            consequence: "continued_demo",
                            risk: "extreme",
                            points: -10
                        }
                    ]
                },

                responsible_disclosure: {
                    situation: "🏆 PERFEKT! Ihre Demonstration führt zum größten Auto-Rückruf der Geschichte: 1.4 Millionen Jeep Cherokee werden zurückgerufen! Chrysler entwickelt sofortigen Patch. Sie werden zu Auto-Cybersecurity-Legenden und retten Millionen Leben!",
                    isConsequence: true,
                    realOutcome: "1.4 Millionen Jeeps wurden zurückgerufen, Miller & Valasek wurden Cybersecurity-Stars",
                    choices: [
                        {
                            text: "Autosicherheit revolutioniert",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "twitter_bitcoin_hack",
            title: "🐦 Twitter Bitcoin-Hack: Obama, Musk & Gates (2020)",
            difficulty: "Einfach",
            description: "17-jähriger Hacker übernimmt die Twitter-Accounts der mächtigsten Menschen der Welt...",
            realEvent: "Teenager stahl Millionen durch Fake-Bitcoin-Tweets von VIPs",
            startingScenario: {
                title: "Tampa, Florida - 15. Juli 2020, 16:00 Uhr",
                text: "Sie sind Graham Ivan Clark, 17 Jahre alt und genial im Social Engineering. Durch geschickte Anrufe bei Twitter-Mitarbeitern haben Sie Zugang zu den Admin-Tools erhalten. Vor Ihnen: Die Twitter-Accounts von Barack Obama, Elon Musk, Bill Gates, Jeff Bezos. Die Versuchung ist riesig...",
                image: "💰",
                setting: "Teenager-Zimmer, Twitter Admin Panel offen, Milliarden Follower warten"
            },
            questPaths: {
                start: {
                    situation: "Sie haben Zugang zu den mächtigsten Twitter-Accounts der Welt. Was ist Ihr Plan?",
                    choices: [
                        {
                            text: "Bitcoin-Scam mit Obama-Account starten",
                            consequence: "obama_scam",
                            risk: "extreme",
                            points: -15
                        },
                        {
                            text: "Ethical Hacking - Twitter über Lücke informieren",
                            consequence: "responsible_disclosure",
                            risk: "none",
                            points: 25
                        },
                        {
                            text: "Erstmal kleine Tests mit weniger prominenten Accounts",
                            consequence: "small_tests",
                            risk: "high",
                            points: 5
                        }
                    ]
                },

                obama_scam: {
                    situation: "💸 Sie posten von @BarackObama: 'I am giving back to the community. All Bitcoin sent to my address below will be sent back doubled!' Innerhalb von Minuten kommen Millionen von Dollar! Aber dann explodiert Twitter - FBI, Secret Service, alle sind alarmiert!",
                    choices: [
                        {
                            text: "Schnell alle Spuren verwischen",
                            consequence: "cover_tracks",
                            risk: "extreme",
                            points: -10
                        },
                        {
                            text: "Mehr VIP-Accounts hacken - Musk, Gates, Bezos",
                            consequence: "vip_spree",
                            risk: "extreme",
                            points: -20
                        },
                        {
                            text: "Sofort aufhören und Bitcoin zurückgeben",
                            consequence: "immediate_stop",
                            risk: "high",
                            points: 15
                        }
                    ]
                },

                vip_spree: {
                    situation: "🌪️ CHAOS TOTAL! Sie hacken Elon Musk, Bill Gates, Jeff Bezos, Warren Buffett - alle posten Bitcoin-Scams! Twitter bricht zusammen, 130 Millionen Follower sehen die Tweets, Bitcoin-Börsen crashen, Weltwirtschaft in Panik! FBI startet Großfahndung!",
                    choices: [
                        {
                            text: "In Bitcoin umwandeln und verschwinden",
                            consequence: "crypto_escape",
                            risk: "extreme",
                            points: -30
                        },
                        {
                            text: "Alles gestehen und kooperieren",
                            consequence: "full_confession",
                            risk: "medium",
                            points: 10
                        }
                    ]
                },

                full_confession: {
                    situation: "📱 Sie werden gefasst! Als 17-Jähriger drohen Ihnen 30 Jahre Gefängnis für den größten Social Media Hack der Geschichte. Aber durch Kooperation mit FBI bekommen Sie nur 3 Jahre Jugendstrafe. Twitter zahlt Bug-Bounty-Programm und Sie werden später Cybersecurity-Experte!",
                    isConsequence: true,
                    realOutcome: "Graham Clark bekam 3 Jahre, wurde später White-Hat-Hacker, Twitter verstärkte Security massiv",
                    choices: [
                        {
                            text: "Zweite Chance genutzt",
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
            id: "equifax_mega_breach",
            title: "💳 Equifax Mega-Hack: 147 Millionen Opfer (2017)",
            difficulty: "Mittel",
            description: "Sie sind Sicherheitsanalyst bei Equifax und entdecken verdächtige Aktivitäten...",
            realEvent: "Einer der größten Datenschutzverletzungen der Geschichte",
            startingScenario: {
                title: "Equifax Headquarters - Atlanta, 29. Juli 2017",
                text: "Sie sind Senior Security Analyst bei Equifax. Beim Monitoring fallen Ihnen ungewöhnliche Datentransfers auf. Gigabyte-weise werden nachts Kreditberichte abgerufen. Das ist seltsam - normalerweise sind das nur kleine Anfragen. Sie entdecken, dass Hacker seit MAI unbemerkt im System sind!",
                image: "🏢", 
                setting: "Equifax Security Operations Center, verdächtige Netzwerkaktivität auf den Monitoren"
            },
            questPaths: {
                start: {
                    situation: "Sie haben einen aktiven Einbruch entdeckt! 147 Millionen Amerikaner sind betroffen. Was ist Ihre Priorität?",
                    choices: [
                        {
                            text: "Sofort CEO informieren - das ist ein Mega-GAU!",
                            consequence: "ceo_informed",
                            risk: "medium",
                            points: 15
                        },
                        {
                            text: "Erstmal intern untersuchen - keine Panik verbreiten",
                            consequence: "internal_investigation",
                            risk: "high",
                            points: -5
                        },
                        {
                            text: "Alle Systeme sofort offline nehmen",
                            consequence: "systems_shutdown",
                            risk: "low",
                            points: 20
                        }
                    ]
                },

                ceo_informed: {
                    situation: "CEO Richard Smith ist schockiert. 'Wie lange geht das schon?', fragt er. Sie zeigen ihm: Seit 13. Mai! Die Hacker nutzten eine Apache Struts Schwachstelle. Smith überlegt seine Optionen...",
                    choices: [
                        {
                            text: "Sofortige öffentliche Warnung - Transparenz ist wichtig",
                            consequence: "immediate_disclosure",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Erstmal Schaden begrenzen, dann informieren",
                            consequence: "delayed_disclosure",
                            risk: "high",
                            points: 5
                        },
                        {
                            text: "Anwälte konsultieren - das wird teuer",
                            consequence: "legal_consultation",
                            risk: "high",
                            points: -10
                        }
                    ]
                },

                immediate_disclosure: {
                    situation: "🎯 RICHTIGE ENTSCHEIDUNG! Sie drängen auf sofortige Offenlegung. In der Realität wartete Equifax 6 WOCHEN, bevor sie es öffentlich machten - und Führungskräfte verkauften heimlich Aktien! Ihre ethische Haltung hätte Millionen geholfen.",
                    choices: [
                        {
                            text: "Betroffene Personen direkt kontaktieren",
                            consequence: "victim_notification",
                            risk: "low",
                            points: 15
                        },
                        {
                            text: "Kostenlosen Kreditschutz anbieten", 
                            consequence: "credit_protection",
                            risk: "none",
                            points: 20
                        }
                    ]
                },

                delayed_disclosure: {
                    situation: "💸 SKANDAL! Genau wie in der Realität: Equifax wartet 6 Wochen. Währenddessen verkaufen Führungskräfte Aktien im Wert von 1.8 Millionen Dollar! Sie als Insider wissen vom Hack, während die Öffentlichkeit ahnungslos ist. Das ist Insider Trading!",
                    isConsequence: true,
                    realOutcome: "Equifax-Führung wurde wegen Insider Trading angeklagt, CEO musste zurücktreten",
                    choices: [
                        {
                            text: "Whistleblower werden - das ist falsch!",
                            consequence: "whistleblower_path",
                            risk: "medium",
                            points: 30
                        },
                        {
                            text: "Schweigen und mitmachen",
                            consequence: "complicit_silence",
                            risk: "extreme",
                            points: -25
                        }
                    ]
                }
            }
        },

        {
            id: "target_pos_hack",
            title: "🛒 Target Kreditkarten-Hack (2013)",
            difficulty: "Mittel",
            description: "Sie verwalten die Kassensysteme bei Target während des größten Retail-Hacks der Geschichte...",
            realEvent: "40 Millionen Kreditkarten gestohlen während der Weihnachtszeit",
            startingScenario: {
                title: "Target Corporation - Minneapolis, 15. Dezember 2013",
                text: "Sie sind IT-Manager für Point-of-Sale Systeme bei Target. Mitten in der Weihnachtszeit - der wichtigsten Verkaufszeit - bemerken Sie seltsame Netzwerkaktivität. Ihre Kassensysteme senden nachts Daten an unbekannte Server in Russland. 40 Millionen Kreditkarten sind in Gefahr!",
                image: "🎯",
                setting: "Target IT-Zentrale, Black Friday Chaos, Kassensysteme kompromittiert"
            },
            questPaths: {
                start: {
                    situation: "Weihnachtszeit = Millionen Transaktionen täglich. Sie entdecken Malware auf ALLEN Kassensystemen!",
                    choices: [
                        {
                            text: "Alle 1800 Stores sofort schließen",
                            consequence: "stores_closed",
                            risk: "extreme",
                            points: 20
                        },
                        {
                            text: "Nur Online-Zahlungen akzeptieren",
                            consequence: "cash_only",
                            risk: "medium", 
                            points: 15
                        },
                        {
                            text: "Malware entfernen und hoffen, dass es reicht",
                            consequence: "patch_attempt",
                            risk: "high",
                            points: -5
                        }
                    ]
                },

                stores_closed: {
                    situation: "💰 MUTIGE ENTSCHEIDUNG! Target verliert 1 Milliarde Dollar Umsatz, aber Sie retten Millionen Kreditkarten. In der Realität blieben die Stores offen und Hacker stahlen weiter. Ihr CEO ist wütend, aber Sie haben das Richtige getan.",
                    choices: [
                        {
                            text: "Kunden sofort warnen",
                            consequence: "customer_warning",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Erstmal Schaden analysieren",
                            consequence: "damage_assessment",
                            risk: "medium",
                            points: 10
                        }
                    ]
                },

                customer_warning: {
                    situation: "🏆 HELD! Sie warnen 70 Millionen Kunden sofort. Target muss 300 Millionen Dollar Schadenersatz zahlen, aber Sie haben Millionen vor Identitätsdiebstahl bewahrt. CEO Gregg Steinhafel wird später gefeuert, aber Ihre Integrität bleibt makellos.",
                    isConsequence: true,
                    realOutcome: "Target zahlte über 300 Millionen Dollar Schadenersatz, CEO wurde gefeuert",
                    choices: [
                        {
                            text: "Mission beendet - nächste Herausforderung",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                },

                patch_attempt: {
                    situation: "💥 KATASTROPHE! Wie in der Realität: Sie unterschätzen das Problem. Die Malware ist zu schlau und sammelt weiter Daten. Am Ende sind 40 Millionen Kreditkarten UND 70 Millionen Kundenprofile gestohlen. Target-Aktie stürzt ab.",
                    isConsequence: true,
                    realOutcome: "Target verlor Milliarden und brauchte Jahre um das Vertrauen zurückzugewinnen",
                    choices: [
                        {
                            text: "Daraus lernen und besser werden",
                            consequence: "lessons_learned",
                            risk: "none",
                            points: 5
                        }
                    ]
                }
            }
        },

        {
            id: "solarwinds_supply_chain",
            title: "🌞 SolarWinds Supply Chain Attack (2020)",
            difficulty: "Mittel",
            description: "Als SolarWinds Entwickler entdecken Sie mysteriösen Code in Software-Updates...",
            realEvent: "Russische Hacker infiltrierten 18.000+ Organisationen durch Software-Updates", 
            startingScenario: {
                title: "SolarWinds - Austin, Texas, Dezember 2020",
                text: "Sie sind Softwareentwickler bei SolarWinds Orion. Ein Kollege zeigt Ihnen seltsamen Code im neuesten Update: 'SUNBURST' Backdoor, versteckt in einer DLL. Diese Software läuft bei Microsoft, dem Pentagon, Homeland Security! Russische APT29 Hacker haben die Supply Chain infiltriert.",
                image: "🌅",
                setting: "SolarWinds Entwicklungszentrum, verdächtiger Code auf dem Bildschirm"
            },
            questPaths: {
                start: {
                    situation: "18.000+ Kunden haben das verseuchte Update installiert. Die halbe US-Regierung ist kompromittiert!",
                    choices: [
                        {
                            text: "Sofort alle Updates stoppen und Kunden warnen",
                            consequence: "immediate_shutdown",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Erstmal FBI kontaktieren - das ist Staatsangelegenheit",
                            consequence: "fbi_contacted",
                            risk: "medium",
                            points: 20
                        },
                        {
                            text: "Intern untersuchen - nicht übertreiben",
                            consequence: "internal_review",
                            risk: "extreme",
                            points: -15
                        }
                    ]
                },

                immediate_shutdown: {
                    situation: "🎯 RICHTIG! Sie stoppen den größten Supply Chain Attack der Geschichte. FireEye entdeckt parallel den Hack. Zusammen warnen Sie die Welt. Russland hatte bereits Monate Zeit zum Spionieren, aber Sie verhindern Schlimmeres.",
                    choices: [
                        {
                            text: "Clean Updates für alle Kunden entwickeln",
                            consequence: "clean_updates",
                            risk: "low",
                            points: 15
                        },
                        {
                            text: "Forensische Analyse - wie kamen sie rein?",
                            consequence: "forensic_analysis",
                            risk: "none",
                            points: 10
                        }
                    ]
                },

                fbi_contacted: {
                    situation: "FBI Special Agent: 'Das ist ein Angriff auf die nationale Sicherheit! Microsoft, Pentagon, Heimatschutz - alle betroffen.' Sie arbeiten mit Geheimdiensten zusammen. Präsident Biden verhängt später Sanktionen gegen Russland.",
                    choices: [
                        {
                            text: "Vollständige Kooperation mit Behörden",
                            consequence: "full_cooperation",
                            risk: "none",
                            points: 20
                        },
                        {
                            text: "Firmeninteressen schützen",
                            consequence: "corporate_protection",
                            risk: "high",
                            points: -10
                        }
                    ]
                },

                full_cooperation: {
                    situation: "🇺🇸 PATRIOT! Sie helfen bei der größten Cyber-Ermittlung der US-Geschichte. Ihre Kooperation führt zu neuen Cybersecurity-Standards für alle Software-Firmen. SolarWinds überlebt den Skandal dank Ihrer Transparenz.",
                    isConsequence: true,
                    realOutcome: "SolarWinds überlebte durch Kooperation, führte zu strengeren Supply Chain Standards",
                    choices: [
                        {
                            text: "Cyber-Sicherheit revolutioniert",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "colonial_pipeline_shutdown",
            title: "⛽ Colonial Pipeline Shutdown (2021)",
            difficulty: "Mittel",
            description: "DarkSide Ransomware legt die größte US-Pipeline lahm, Benzinmangel an der Ostküste...",
            realEvent: "Ransomware legte 45% der US-Treibstoffversorgung für 6 Tage lahm",
            startingScenario: {
                title: "Colonial Pipeline Operations Center - Georgia, 7. Mai 2021, 5:00 Uhr",
                text: "Sie sind IT-Direktor bei Colonial Pipeline, dem größten Treibstofftransportsystem der USA. Um 5 Uhr früh schlagen alle Alarme an: DarkSide Ransomware hat Ihre IT-Systeme verschlüsselt. 5.500 Meilen Pipeline versorgen die komplette US-Ostküste. Die Cyberkriminellen fordern 4.4 Millionen Dollar in Bitcoin!",
                image: "🛢️",
                setting: "Pipeline Control Center, rote Alarme überall, 50 Millionen Menschen betroffen"
            },
            questPaths: {
                start: {
                    situation: "45% der US-Treibstoffversorgung ist bedroht! Was ist Ihre sofortige Reaktion?",
                    choices: [
                        {
                            text: "Gesamte Pipeline sofort abschalten",
                            consequence: "pipeline_shutdown",
                            risk: "extreme",
                            points: 20
                        },
                        {
                            text: "Lösegeld zahlen - Zeit ist kritisch",
                            consequence: "ransom_payment",
                            risk: "high",
                            points: -10
                        },
                        {
                            text: "FBI und CISA sofort kontaktieren",
                            consequence: "federal_response",
                            risk: "medium",
                            points: 25
                        }
                    ]
                },

                pipeline_shutdown: {
                    situation: "🚨 NOTSTAND! Sie fahren die komplette Pipeline runter. Binnen Stunden: Tankstellen an der Ostküste sind leer, Panik-Käufe überall, Benzinpreise explodieren! Präsident Biden ruft nationalen Notstand aus. 50 Millionen Menschen betroffen!",
                    choices: [
                        {
                            text: "Notfall-Treibstoffreserven freigeben",
                            consequence: "emergency_reserves",
                            risk: "medium",
                            points: 15
                        },
                        {
                            text: "Manuelle Pipelinesteuerung versuchen",
                            consequence: "manual_operations",
                            risk: "high",
                            points: 20
                        }
                    ]
                },

                federal_response: {
                    situation: "🏛️ FBI Director: 'Das ist ein Angriff auf kritische Infrastruktur!' DarkSide wird als russische Cyberkriminalität identifiziert. Biden telefoniert mit Putin. Internationale Krise! Was empfehlen Sie?",
                    choices: [
                        {
                            text: "Cyber-Vergeltung gegen Russland",
                            consequence: "cyber_retaliation",
                            risk: "extreme",
                            points: 5
                        },
                        {
                            text: "Fokus auf Wiederherstellung der Pipeline",
                            consequence: "restoration_focus",
                            risk: "low",
                            points: 30
                        }
                    ]
                },

                restoration_focus: {
                    situation: "🛠️ SMART! Sie konzentrieren sich auf Wiederherstellung. Nach 6 Tagen ist die Pipeline wieder online. Biden's Cybersecurity-Initiative wird verstärkt. Neue Standards für kritische Infrastruktur. DarkSide wird später von anderen Hackern 'bestraft' und verschwindet!",
                    isConsequence: true,
                    realOutcome: "Colonial Pipeline zahlte heimlich Lösegeld, Pipeline war 6 Tage offline, führte zu nationaler Cybersecurity-Reform",
                    choices: [
                        {
                            text: "Kritische Infrastruktur sicherer gemacht",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "mirai_botnet_internet",
            title: "🤖 Mirai Botnet bringt Internet zum Erliegen (2016)",
            difficulty: "Mittel",
            description: "Millionen gehackte IoT-Geräte greifen DNS-Provider Dyn an und legen das halbe Internet lahm...",
            realEvent: "Größter DDoS-Angriff der Geschichte durch IoT-Botnet",
            startingScenario: {
                title: "Dyn DNS Headquarters - New Hampshire, 21. Oktober 2016, 7:00 Uhr",
                text: "Sie sind NOC-Engineer bei Dyn, dem DNS-Provider für Netflix, Twitter, Amazon, PayPal. Plötzlich zeigen Ihre Monitore das Unmögliche: 1.2 Terabit/s DDoS-Angriff! Millionen gehackte Überwachungskameras, Router und Smart-TVs bombardieren Ihre Server. Das halbe Internet geht offline!",
                image: "🌐",
                setting: "Network Operations Center, Charts zeigen beispiellosen Traffic-Tsunami"
            },
            questPaths: {
                start: {
                    situation: "1.2 Tbps DDoS - das größte, was je gemessen wurde! Ihre Entscheidung?",
                    choices: [
                        {
                            text: "Alle DDoS-Mitigation sofort aktivieren",
                            consequence: "ddos_mitigation",
                            risk: "high",
                            points: 15
                        },
                        {
                            text: "Verkehr umleiten zu anderen DNS-Providern",
                            consequence: "traffic_reroute",
                            risk: "medium",
                            points: 20
                        },
                        {
                            text: "Source-IPs blockieren - Millionen auf einmal",
                            consequence: "mass_blocking",
                            risk: "extreme",
                            points: 10
                        }
                    ]
                },

                ddos_mitigation: {
                    situation: "⚔️ Sie kämpfen! Aber Mirai ist zu mächtig - Millionen IoT-Zombies, alle mit Standard-Passwörtern gehackt. Netflix, Twitter, Amazon fallen aus. Die halbe Welt kann nicht mehr online. Reddit explodiert mit Memes über das 'Zombie-Apocalypse Internet'!",
                    choices: [
                        {
                            text: "IoT-Hersteller sofort kontaktieren",
                            consequence: "iot_manufacturers",
                            risk: "low",
                            points: 25
                        },
                        {
                            text: "Internetprovider um Hilfe bitten",
                            consequence: "isp_cooperation",
                            risk: "medium",
                            points: 20
                        }
                    ]
                },

                iot_manufacturers: {
                    situation: "📞 Sie rufen alle IoT-Hersteller an: 'Eure Geräte verwenden ALLE das gleiche Standard-Passwort!' Millionen Kunden müssen ihre Smart-Geräte neu konfigurieren. Das führt zu IoT-Security-Revolution weltweit!",
                    choices: [
                        {
                            text: "Öffentliche Kampagne für IoT-Sicherheit starten",
                            consequence: "iot_security_campaign",
                            risk: "none",
                            points: 30
                        }
                    ]
                },

                iot_security_campaign: {
                    situation: "🏆 GAME-CHANGER! Ihr Mirai-Kampf führt zu globalen IoT-Sicherheitsstandards. Alle Smart-Geräte brauchen jetzt unique Passwörter. EU verabschiedet IoT-Cybersecurity-Gesetze. Sie haben das Internet sicherer gemacht!",
                    isConsequence: true,
                    realOutcome: "Mirai-Angriff führte zu globalen IoT-Sicherheitsreformen, neue Standards weltweit",
                    choices: [
                        {
                            text: "IoT-Revolution ausgelöst",
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
            id: "sony_north_korea_hack",
            title: "🎬 Sony Pictures vs. Nordkorea (2014)",
            difficulty: "Schwer",
            description: "Sie sind Sony Pictures IT-Chef während der 'The Interview' Kontroverse mit Nordkorea...",
            realEvent: "Nordkorea hackte Sony wegen Satire-Film über Kim Jong-un",
            startingScenario: {
                title: "Sony Pictures Entertainment - Culver City, 24. November 2014",
                text: "Sie sind CTO bei Sony Pictures. Um 9 Uhr morgens schalten sich ALLE Computer im Gebäude gleichzeitig aus. Dann erscheint ein gruseliger Schädel auf jedem Bildschirm: 'Hacked by #GOP (Guardians of Peace)'. Sie wissen sofort: Das ist wegen 'The Interview' - dem Kim Jong-un Satire-Film!",
                image: "💀",
                setting: "Sony Pictures Studio, 6500 Computer zeigen Totenschädel, kompletter Blackout"
            },
            questPaths: {
                start: {
                    situation: "Nordkoreanische Hacker fordern: 'The Interview' Film absagen oder wir veröffentlichen ALLES!'",
                    choices: [
                        {
                            text: "Film sofort absagen - Sicherheit geht vor",
                            consequence: "film_cancelled",
                            risk: "medium",
                            points: 5
                        },
                        {
                            text: "Niemals! Meinungsfreiheit verteidigen!",
                            consequence: "defiant_stance",
                            risk: "extreme",
                            points: 20
                        },
                        {
                            text: "FBI um Hilfe bitten",
                            consequence: "fbi_assistance",
                            risk: "low",
                            points: 15
                        }
                    ]
                },

                defiant_stance: {
                    situation: "🎬 HOLLYWOOD HELD! Sony CEO Michael Lynton sagt: 'Wir lassen uns nicht von Terroristen zensieren!' Aber die Hacker veröffentlichen 100GB interne Emails. Peinliche Gespräche über Schauspieler, Gehälter, rassistische Kommentare - alles kommt raus!",
                    choices: [
                        {
                            text: "Schadensbegrenzung - Entschuldigungen an alle",
                            consequence: "damage_control",
                            risk: "medium",
                            points: 10
                        },
                        {
                            text: "Gegenangriff auf Nordkorea",
                            consequence: "counter_attack",
                            risk: "extreme",
                            points: -20
                        },
                        {
                            text: "Film trotzdem veröffentlichen",
                            consequence: "film_released",
                            risk: "high",
                            points: 25
                        }
                    ]
                },

                film_released: {
                    situation: "🍿 LEGENDÄR! Gegen alle Widerstände veröffentlicht Sony 'The Interview' online. Netflix und Kinos weigern sich aus Angst, aber YouTube zeigt ihn. Präsident Obama unterstützt Sie öffentlich: 'Das ist Meinungsfreiheit!' Der Film wird zum Kult-Hit.",
                    choices: [
                        {
                            text: "Cybersecurity komplett neu aufbauen",
                            consequence: "security_overhaul",
                            risk: "none",
                            points: 20
                        },
                        {
                            text: "Weitere kontroverse Filme produzieren",
                            consequence: "controversy_continues",
                            risk: "high",
                            points: 10
                        }
                    ]
                },

                security_overhaul: {
                    situation: "🏆 PERFECT ENDING! Sony investiert 100 Millionen in Cybersecurity. Sie werden zum Vorbild für Hollywood. Nordkorea wird international isoliert. Ihr Mut verändert die Filmindustrie für immer. Meinungsfreiheit siegt!",
                    isConsequence: true,
                    realOutcome: "Sony veröffentlichte den Film, Obama unterstützte sie, wurde zu Präzedenzfall für digitale Meinungsfreiheit",
                    choices: [
                        {
                            text: "Hollywood ist sicherer geworden",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                },

                fbi_assistance: {
                    situation: "🕵️ FBI Direktor James Comey: 'Das war definitiv Nordkorea. Wir haben Beweise.' Präsident Obama erwägt Vergeltungsmaßnahmen. Internationale Krise droht. Was empfehlen Sie?",
                    choices: [
                        {
                            text: "Diplomatie - Krieg vermeiden",
                            consequence: "diplomatic_solution",
                            risk: "low",
                            points: 15
                        },
                        {
                            text: "Cyber-Vergeltung gegen Nordkorea",
                            consequence: "cyber_retaliation",
                            risk: "extreme",
                            points: 5
                        }
                    ]
                }
            }
        },

        {
            id: "notpetya_maersk",
            title: "🚢 NotPetya vs. Maersk Welthandel (2017)",
            difficulty: "Schwer", 
            description: "Sie sind IT-Chef bei Maersk als russische Malware Ihr globales Netzwerk lahmlegt...",
            realEvent: "NotPetya zerstörte Maersk-Systeme weltweit, kostete 300 Millionen Dollar",
            startingScenario: {
                title: "Maersk Hauptquartier - Kopenhagen, 27. Juni 2017, 14:30 Uhr",
                text: "Sie sind Global IT Director bei A.P. Moller-Maersk, dem größten Container-Reederei-Konzern der Welt. Plötzlich fallen ALLE Computer aus - von Kopenhagen bis Shanghai. NotPetya, ursprünglich gegen Ukraine gerichtet, hat sich global ausgebreitet. 130 Länder, 76 Häfen, 800 Schiffe - alles offline!",
                image: "🌊",
                setting: "Maersk Operations Center, Weltkarte zeigt rote Alarme überall"
            },
            questPaths: {
                start: {
                    situation: "20% des Welthandels hängt von Maersk ab. Ohne IT sind Millionen Container blockiert!",
                    choices: [
                        {
                            text: "Alle Schiffe sofort stoppen",
                            consequence: "ships_stopped",
                            risk: "extreme",
                            points: 15
                        },
                        {
                            text: "Auf Papier und Funk umstellen",
                            consequence: "manual_operations",
                            risk: "medium",
                            points: 20
                        },
                        {
                            text: "Backup-Systeme in anderen Ländern nutzen",
                            consequence: "backup_systems",
                            risk: "low",
                            points: 25
                        }
                    ]
                },

                manual_operations: {
                    situation: "🚢 INGENIOUS! Sie aktivieren 1980er Notfallpläne: Papier-Manifeste, Funk-Kommunikation, manuelle Containererfassung. 4000 IT-Experten arbeiten 24/7. Mitarbeiter fliegen mit USB-Sticks zwischen Kontinenten!",
                    choices: [
                        {
                            text: "Komplett neues IT-System in Rekordzeit aufbauen",
                            consequence: "rapid_rebuild",
                            risk: "high",
                            points: 30
                        },
                        {
                            text: "Alte Systeme langsam wiederherstellen",
                            consequence: "slow_recovery",
                            risk: "low",
                            points: 10
                        }
                    ]
                },

                rapid_rebuild: {
                    situation: "⚡ UNMÖGLICH WIRD MÖGLICH! In 10 Tagen bauen Sie ein komplettes globales IT-System neu auf. Normalerweise dauert das Jahre! Sie mieten Rechenzentren weltweit, arbeiten ohne Schlaf. Der Welthandel ist gerettet!",
                    choices: [
                        {
                            text: "Nie wieder Windows - alles auf Linux umstellen",
                            consequence: "linux_migration",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Cyber-Versicherung für 500 Millionen abschließen",
                            consequence: "cyber_insurance",
                            risk: "none",
                            points: 15
                        }
                    ]
                },

                linux_migration: {
                    situation: "🐧 REVOLUTION! Maersk wird komplett Open Source. Microsoft ist schockiert - ihr größter Enterprise-Kunde wechselt zu Linux. Andere Konzerne folgen. Sie haben eine IT-Revolution ausgelöst!",
                    isConsequence: true,
                    realOutcome: "Maersk erholte sich in Rekordzeit und verstärkte massiv ihre Cybersecurity",
                    choices: [
                        {
                            text: "Open Source rettet die Welt",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                },

                backup_systems: {
                    situation: "🎯 GLÜCKSFALL! Ein einziger Server in Ghana war nicht mit dem Netzwerk verbunden und blieb sauber. Von diesem einen Server bauen Sie das gesamte globale System wieder auf. 45.000 Computer müssen neu installiert werden.",
                    choices: [
                        {
                            text: "Ghana wird zum globalen IT-Backup-Hub",
                            consequence: "ghana_hub",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "Dezentrale Backups in jedem Land",
                            consequence: "global_redundancy",
                            risk: "none",
                            points: 25
                        }
                    ]
                },

                global_redundancy: {
                    situation: "🌍 MASTERPLAN! Sie erschaffen das sicherste Netzwerk der Welt. Jedes Land hat unabhängige Backups. Maersk wird zum Cybersecurity-Vorbild für alle Logistik-Konzerne. NotPetya hat Sie stärker gemacht!",
                    isConsequence: true,
                    realOutcome: "Maersk investierte massiv in Cybersecurity und wurde widerstandsfähiger als je zuvor",
                    choices: [
                        {
                            text: "Welthandel ist jetzt sicherer",
                            consequence: "quest_complete", 
                            risk: "none",
                            points: 0
                        }
                    ]
                }
            }
        },

        {
            id: "kaspersky_nsa_mystery",
            title: "🕵️ Kaspersky vs. NSA Mysterium (2017)",
            difficulty: "Schwer",
            description: "Als NSA-Analyst entdecken Sie, dass Kaspersky Antivirus Ihre Geheimnisse stiehlt...",
            realEvent: "Kontroverse um russische Antivirus-Software in US-Regierungsbehörden",
            startingScenario: {
                title: "NSA Hauptquartier - Fort Meade, Maryland, Oktober 2017",
                text: "Sie sind NSA Cybersecurity-Analyst. Beim Monitoring entdecken Sie Schockierendes: Kaspersky Antivirus, installiert auf Millionen US-Computern, übermittelt verdächtig viele Daten nach Moskau. Sogar NSA-Geheimdokumente wurden von einem Mitarbeiter-PC heimlich hochgeladen!",
                image: "🏛️",
                setting: "NSA Situation Room, klassifizierte Dokumente auf russischen Servern entdeckt"
            },
            questPaths: {
                start: {
                    situation: "Kaspersky behauptet, nur Malware zu bekämpfen - aber sie scannen ALLES! Ist das Spionage?",
                    choices: [
                        {
                            text: "Sofortiges Verbot für alle US-Behörden",
                            consequence: "immediate_ban",
                            risk: "low",
                            points: 20
                        },
                        {
                            text: "Geheime Ermittlungen - mehr Beweise sammeln",
                            consequence: "covert_investigation",
                            risk: "medium", 
                            points: 15
                        },
                        {
                            text: "Kaspersky direkt konfrontieren",
                            consequence: "direct_confrontation",
                            risk: "high",
                            points: 10
                        }
                    ]
                },

                immediate_ban: {
                    situation: "🚫 RADIKALER SCHRITT! Präsident Trump verbietet Kaspersky in allen US-Behörden. Eugene Kaspersky ist empört: 'Das ist politisch motiviert!' Russland droht mit Vergeltung. IT-Welt ist schockiert.",
                    choices: [
                        {
                            text: "Andere westliche Länder warnen",
                            consequence: "international_warning",
                            risk: "medium",
                            points: 25
                        },
                        {
                            text: "Kaspersky Quellcode analysieren lassen",
                            consequence: "code_analysis",
                            risk: "low",
                            points: 20
                        }
                    ]
                },

                international_warning: {
                    situation: "🌍 DOMINOEFFEKT! Deutschland, UK, Niederlande folgen dem US-Beispiel. Kaspersky verliert Milliarden. Eugene Kaspersky bietet an, Quellcode offenzulegen und nach Schweiz umzuziehen. Zu spät?",
                    choices: [
                        {
                            text: "Kaspersky eine Chance geben",
                            consequence: "second_chance",
                            risk: "high",
                            points: 10
                        },
                        {
                            text: "Russische Software generell verbieten",
                            consequence: "russian_software_ban",
                            risk: "extreme",
                            points: 15
                        }
                    ]
                },

                covert_investigation: {
                    situation: "🔍 CIA OPERATION! Sie arbeiten mit Israel zusammen - deren Agenten haben Kaspersky jahrelang infiltriert. Beweis: Kaspersky wurde vom FSB (russischer Geheimdienst) zur Spionage gezwungen, auch gegen Kasperskys Willen!",
                    choices: [
                        {
                            text: "Eugene Kaspersky zur Kooperation bewegen",
                            consequence: "kaspersky_cooperation",
                            risk: "extreme",
                            points: 30
                        },
                        {
                            text: "Beweise public machen",
                            consequence: "evidence_public",
                            risk: "medium",
                            points: 20
                        }
                    ]
                },

                kaspersky_cooperation: {
                    situation: "🎯 MEISTERSTÜCK! Eugene Kaspersky wird zum Doppelagenten! Heimlich hilft er der NSA, während er öffentlich Russland unterstützt. Kaspersky wird zur Honigfalle für russische Hacker. Genial!",
                    isConsequence: true,
                    realOutcome: "Die wahren Details bleiben klassifiziert, aber Kaspersky änderte dramatisch seine Geschäftspraktiken",
                    choices: [
                        {
                            text: "Spionage-Krieg gewonnen",
                            consequence: "quest_complete",
                            risk: "none",
                            points: 0
                        }
                    ]
                },

                evidence_public: {
                    situation: "📰 SKANDAL EXPLODIERT! Washington Post veröffentlicht alles: 'Kaspersky half russischem Geheimdienst bei NSA-Spionage!' Eugene Kaspersky's Imperium bricht zusammen. Russland startet Cyber-Vergeltungsmaßnahmen.",
                    isConsequence: true,
                    realOutcome: "Kaspersky verlor massiv Marktanteile im Westen, blieb aber in Russland dominant",
                    choices: [
                        {
                            text: "Cyber-Kalter-Krieg beginnt",
                            consequence: "cyber_cold_war",
                            risk: "extreme",
                            points: 0
                        }
                    ]
                }
            }
        }
    ]
};

// Integration in das bestehende System
if (typeof questEngine !== 'undefined') {
    questEngine.addRealQuests = function() {
        // Merge real quests into existing system
        Object.keys(realCyberQuests).forEach(difficulty => {
            realCyberQuests[difficulty].forEach(quest => {
                if (!this.quests[difficulty]) {
                    this.quests[difficulty] = {};
                }
                this.quests[difficulty][quest.id] = {
                    id: quest.id,
                    title: quest.title,
                    difficulty: quest.difficulty,
                    description: quest.description,
                    realEvent: quest.realEvent,
                    currentStep: 'start',
                    score: 0,
                    consequences: [],
                    steps: quest.questPaths
                };
            });
        });
        console.log('✅ Echte Cybersecurity-Quests geladen!');
    };
}
