// Cyber-Security Training Engine
// Professionelle Lernplattform mit adaptivem Lernen und Fortschrittsverfolgung

class CyberSecurityEngine {
    constructor() {
        this.currentModule = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.questionStartTime = null;
        this.userStats = this.loadUserStats();
        this.learningPath = [];
        this.adaptiveDifficulty = 'mittel';
        
        // Neue Features
        this.participantName = '';
        this.ihkNumber = '';
        this.markedQuestions = [];
        this.timerInterval = null;
        this.timeRemaining = 0; // Sekunden
        this.examMode = false;
        
        // Stories und Case Studies
        this.currentStoryIndex = 0;
        this.currentCaseStudy = null;
        
        // Statistik-Engine Integration
        this.statisticsEngine = new QuizStatisticsEngine();
        
        this.initializeEngine();
        this.loadStoriesAndCases();
    }

    initializeEngine() {
        console.log('🛡️ Cyber-Security Lernplattform initialisiert');
        this.updateStatsDisplay();
        this.setupInputValidation();
    }

    setupInputValidation() {
        // Event Listener für Name und IHK Input
        document.addEventListener('input', (e) => {
            if (e.target.id === 'participant-name' || e.target.id === 'ihk-number') {
                this.validateUserInput();
            }
        });
    }

    validateUserInput() {
        const nameInput = document.getElementById('participant-name');
        const ihkInput = document.getElementById('ihk-number');
        const startBtn = document.getElementById('start-exam-btn');
        
        if (nameInput && ihkInput && startBtn) {
            const isValid = nameInput.value.trim().length >= 3 && ihkInput.value.trim().length >= 3;
            startBtn.disabled = !isValid;
            
            if (isValid) {
                startBtn.style.background = '#28a745';
                startBtn.style.cursor = 'pointer';
            } else {
                startBtn.style.background = '#6c757d';
                startBtn.style.cursor = 'not-allowed';
            }
        }
    }

    loadStoriesAndCases() {
        this.stories = [
            {
                title: "🏥 Krankenhaus-Hack: 'Haben Sie unsere Daten verschlüsselt?'",
                content: `Ein Krankenhaus rief bei Cyberkriminellen an und fragte höflich: 'Entschuldigung, haben Sie unsere Patientendaten verschlüsselt? Wir können nicht mehr darauf zugreifen.' Die Hacker waren so perplex über die Höflichkeit, dass sie den Entschlüsselungskey kostenlos herausgaben.

**Lernpunkt:** Auch im Krisenfall kann Professionalität überraschende Ergebnisse erzielen.`
            },
            {
                title: "💰 Der 81-Millionen-Euro-Tippfehler",
                content: `Ein Bankangestellter wollte 64 Euro überweisen, vertippte sich aber und überwies 64 Millionen Euro. Das System erkannte den Fehler nicht, weil es Sonntag war und die Überweisung erst am Montag verarbeitet wurde. Glücklicherweise konnte der Fehler rechtzeitig korrigiert werden.

**Lernpunkt:** Vier-Augen-Prinzip und Plausibilitätsprüfungen bei kritischen Transaktionen sind essentiell.`
            },
            {
                title: "🔐 Das Passwort war... 'password123'",
                content: `Ein globaler Technologiekonzern wurde gehackt, weil der Administrator das Passwort 'password123' für den Hauptserver verwendete. Der Hack wurde erst entdeckt, als Bitcoin-Mining-Software den Server so verlangsamte, dass Mitarbeiter sich beschwerten.

**Lernpunkt:** Starke Passwort-Richtlinien und regelmäßige Security-Audits sind unverzichtbar.`
            },
            {
                title: "📧 Phishing-Mail an Cybersecurity-Experten",
                content: `Hacker versendeten eine Phishing-Mail an IT-Sicherheitsexperten mit dem Betreff 'Ihr System wurde gehackt'. Die Ironie: Die Mail enthielt so viele Rechtschreibfehler, dass die Experten sie sofort als Beispiel für schlechtes Phishing in ihre Schulungen aufnahmen.

**Lernpunkt:** Auch Experten sind Ziele - Awareness Training muss regelmäßig aufgefrischt werden.`
            },
            {
                title: "🏢 Der USB-Stick-Trick im Büro",
                content: `Ein Penetration-Tester lies USB-Sticks mit der Aufschrift 'Gehaltsabrechnung 2024' auf dem Firmenparkplatz liegen. 90% der Mitarbeiter steckten die Sticks in ihre Arbeitscomputer. Der Stick installierte eine harmlose Software, die nur eine Nachricht anzeigte: 'Sie sind gehackt worden - bitte zur IT-Schulung melden.'

**Lernpunkt:** USB-Port-Sicherheit und Mitarbeiter-Awareness sind kritische Schwachstellen.`
            },
            {
                title: "🍕 Pizza-Bestellung führt zu Millionen-Schaden",
                content: `Ein Hacker bestellte Pizza an die Adresse eines Unternehmens und gab sich als Lieferant aus. Der Sicherheitsdienst ließ ihn ins Gebäude, wo er einen USB-Stick an einen Computer anschloss. Das Unternehmen verlor dadurch Kundendaten im Wert von 50 Millionen Euro.

**Lernpunkt:** Physical Security und Besuchermanagement sind genauso wichtig wie IT-Sicherheit.`
            },
            {
                title: "🎮 Gamer hackt Pentagon mit Nintendo DS",
                content: `Ein 15-jähriger Gamer schaffte es, mit seinem Nintendo DS in das Pentagon-Netzwerk einzudringen. Er nutzte eine Sicherheitslücke im WiFi-System und lud Videospiel-Cheats herunter. Das Pentagon musste daraufhin seine gesamte WiFi-Infrastruktur überarbeiten.

**Lernpunkt:** Auch unscheinbare Geräte können Sicherheitsrisiken darstellen.`
            },
            {
                title: "🚗 Auto-Hack: Hacker übernimmt Fahrzeugsteuerung",
                content: `Sicherheitsexperten hackten ein Auto während der Fahrt und übernahmen Lenkung, Bremsen und Radio. Der Fahrer hörte plötzlich Heavy Metal auf voller Lautstärke, während das Auto eigenständig in Richtung Autobahnausfahrt lenkte. Der Test führte zum Rückruf von 1,4 Millionen Fahrzeugen.

**Lernpunkt:** Connected Cars bringen neue Cyber-Sicherheitsrisiken mit sich.`
            },
            {
                title: "🤖 Chatbot wird zum Rassisten",
                content: `Microsoft startete einen AI-Chatbot namens 'Tay' auf Twitter, der von Nutzern lernen sollte. Innerhalb von 24 Stunden verwandelten Trolle den Bot in einen rassistischen Extremisten. Microsoft musste den Bot offline nehmen und entschuldigte sich öffentlich.

**Lernpunkt:** AI-Systeme können manipuliert werden und benötigen ethische Schutzmechanismen.`
            },
            {
                title: "💡 Smart-Glühbirne spioniert Nachbarn aus",
                content: `Ein IT-Experte entdeckte, dass seine smarte LED-Glühbirne heimlich WLAN-Passwörter seiner Nachbarn sammelte und an chinesische Server sendete. Die Glühbirne kostete nur 8 Euro, enthielt aber einen vollwertigen Computer mit Spionage-Software.

**Lernpunkt:** IoT-Geräte sind oft unzureichend gesichert und können als Spionage-Tools missbraucht werden.`
            },
            {
                title: "🏦 Bank-Räuber nutzen SWIFT-Netzwerk",
                content: `Hacker stahlen 951 Millionen Dollar von der Bangladesh Bank, indem sie gefälschte SWIFT-Nachrichten sendeten. Ein Tippfehler ('fandation' statt 'foundation') machte eine Überweisung verdächtig und verhinderte den Diebstahl weiterer 850 Millionen Dollar.

**Lernpunkt:** Auch ein kleiner Fehler kann Millionen-Schäden verhindern oder verursachen.`
            },
            {
                title: "📱 Handy-Kamera filmt heimlich PIN-Eingaben",
                content: `Eine scheinbar harmlose Taschenlampen-App nutzte die Handy-Kamera, um PIN-Eingaben an Geldautomaten zu filmen. Die App erkannte anhand der Handbewegungen die eingegebenen Zahlen und sendete sie an Kriminelle. 50.000 Bankkonten wurden kompromittiert.

**Lernpunkt:** App-Berechtigungen sollten kritisch geprüft werden.`
            },
            {
                title: "🎭 Deepfake-CEO führt zu 220.000€ Betrug",
                content: `Kriminelle erstellten mit KI eine täuschend echte Stimme des CEOs und riefen den Finanzchef an. Sie überzeugten ihn, 220.000 Euro 'dringend' zu überweisen. Erst später stellte sich heraus, dass der echte CEO im Urlaub war und nie angerufen hatte.

**Lernpunkt:** Deepfake-Technologie macht Voice-basierte Verifikation unsicher.`
            },
            {
                title: "🖥️ Hacker nutzt Smart-Kühlschrank für Angriff",
                content: `Ein Hacker verwandelte 100.000 Smart-Kühlschränke in ein Botnetz und startete einen DDoS-Angriff. Die Kühlschränke sendeten gleichzeitig Millionen von Anfragen an einen Server und legten das Internet in mehreren Städten lahm. Die Besitzer merkten nichts - ihr Eis blieb gefroren.

**Lernpunkt:** IoT-Botnets können massive Ausfälle verursachen.`
            },
            {
                title: "🔥 Kernkraftwerk durch USB-Stick infiziert",
                content: `Das iranische Kernkraftwerk Natanz wurde durch den Stuxnet-Virus angegriffen, der über einen USB-Stick eingeschleust wurde. Der Virus zerstörte 1.000 Zentrifugen zur Urananreicherung und setzte das Atomprogramm um Jahre zurück.

**Lernpunkt:** Air-Gap-Systeme sind nicht automatisch sicher vor Cyber-Angriffen.`
            },
            {
                title: "🎯 Hacker verkauft eigene Identität",
                content: `Ein Hacker bot seine eigenen persönlichen Daten im Darkweb zum Verkauf an - inklusive Sozialversicherungsnummer und Bankdaten. Als die Polizei ihn verhaftete, stellte sich heraus, dass er das gemacht hatte, um zu beweisen, wie unsicher Identitätsdatenbanken sind.

**Lernpunkt:** Manchmal sind unkonventionelle Methoden nötig, um auf Sicherheitslücken aufmerksam zu machen.`
            },
            {
                title: "🚁 Drohne hackt sich selbst",
                content: `Eine Sicherheitsdrohne einer Firma wurde so programmiert, dass sie Eindringlinge erkennt. Durch einen Programmierfehler identifizierte sie sich selbst als Bedrohung und versuchte sich stundenlang selbst zu verfolgen, bis der Akku leer war.

**Lernpunkt:** Autonome Sicherheitssysteme benötigen sorgfältige Programmierung und Tests.`
            },
            {
                title: "🎰 Casino durch Smartwatch gehackt",
                content: `Ein Hacker nutzte seine Smartwatch, um die Kameras eines Casinos zu manipulieren. Er sendete Infrarot-Signale, die die Überwachungskameras vorübergehend blendeten, und gewann 500.000 Euro am Roulette-Tisch, bevor der Betrug auffiel.

**Lernpunkt:** Wearable Technology kann für Angriffe missbraucht werden.`
            },
            {
                title: "📻 Radio-Hack löst Massenpanik aus",
                content: `Hacker übernahmen ein Radiosender-System und sendeten eine gefälschte Katastrophenwarnung über einen Meteoriteneinschlag. 50.000 Menschen verließen panisch die Stadt, bevor klar wurde, dass es sich um einen Hoax handelte. Der Schaden betrug 10 Millionen Euro.

**Lernpunkt:** Manipulation von Notfallsystemen kann gesellschaftliche Auswirkungen haben.`
            },
            {
                title: "🛸 NASA-Hack mit 15 Jahren",
                content: `Ein 15-jähriger Schüler hackte sich in NASA-Computer und lud 1,7 GB streng geheimer Daten herunter, darunter Pläne für eine Raumstation im Wert von 1,7 Milliarden Dollar. Er wollte nur beweisen, dass er es kann. NASA musste 21 Tage lang alle Computer abschalten.

**Lernpunkt:** Motivation für Hacking ist nicht immer finanziell - oft geht es um Prestige.`
            },
            {
                title: "🏧 Geldautomat spuckt endlos Geld aus",
                content: `Hacker manipulierten einen Geldautomaten so, dass er kontinuierlich 20-Euro-Scheine ausspuckte - insgesamt 400.000 Euro in 2 Stunden. Passanten bildeten eine Schlange und füllten Taschen und Rucksäcke. Die Bank bemerkte den Fehler erst am nächsten Tag.

**Lernpunkt:** ATM-Sicherheit und Monitoring sind kritisch für Banken.`
            },
            {
                title: "🎪 Hacker übernimmt Zirkus-Lichtshow",
                content: `Cyberkriminelle hackten die LED-Lichtshow eines Zirkus und programmierten sie so um, dass sie Werbung für Bitcoin anzeigten. 5.000 Zuschauer sahen verwirrt zu, wie Elefanten von blinkenden 'KAUFT BITCOIN!'-Schriftzügen umgeben waren.

**Lernpunkt:** Auch Entertainment-Systeme können Ziel von Cyber-Angriffen werden.`
            },
            {
                title: "🚿 Smart-Dusche wird zur Abhöranlage",
                content: `Ein Smart-Home-System wurde gehackt, und die Kriminellen nutzten die Mikrofone in smarten Duschen als Abhöranlage. Sie belauschten Geschäftsgespräche, die unter der Dusche geführt wurden, und verkauften Insider-Informationen an der Börse.

**Lernpunkt:** Smart-Home-Geräte können zur Wirtschaftsspionage missbraucht werden.`
            },
            {
                title: "🎬 Filmstudio erpresst sich selbst",
                content: `Hacker drohten damit, einen unreleased Film ins Internet zu stellen, falls das Studio nicht 100 Millionen Dollar zahlt. Später stellte sich heraus, dass der 'Hack' vom Marketing-Team inszeniert wurde, um Aufmerksamkeit für den Film zu generieren.

**Lernpunkt:** Nicht alle 'Cyber-Angriffe' sind echt - manchmal steckt Marketing dahinter.`
            },
            {
                title: "🐕 Hunde-Chip führt zu Datenleck",
                content: `Ein Veterinär-System wurde gehackt, und Kriminelle erhielten Zugang zu den Mikrochip-Daten von 2 Millionen Haustieren. Sie nutzten die Adressdaten, um zu erfahren, welche Häuser teure Hunde besitzen, und planten entsprechende Einbrüche.

**Lernpunkt:** Auch scheinbar harmlose Datenbanken können für kriminelle Zwecke missbraucht werden.`
            },
            {
                title: "🚀 SpaceX-Hack durch Praktikant",
                content: `Ein Praktikant bei SpaceX vergaß, sein Laptop zu sperren und ging zum Mittagessen. Kollegen 'hackten' sich ein und änderten die Raketen-Koordinaten so, dass die nächste Mission zum Mond statt zur ISS führen sollte. Elon Musk fand es so lustig, dass er dem Praktikanten einen Job anbot.

**Lernpunkt:** Screen-Lock und Workspace-Security sind auch intern wichtig.`
            },
            {
                title: "🍔 McDonald's-App bestellt für ganze Stadt",
                content: `Ein Fehler in der McDonald's-App führte dazu, dass automatisch für jeden Nutzer in Berlin 1.000 Big Macs bestellt wurden. 3,7 Millionen Burger wurden in 2 Stunden geordert. McDonald's musste alle Restaurants in der Stadt schließen und bot kostenloses Essen für eine Woche an.

**Lernpunkt:** Software-Bugs können massive wirtschaftliche Auswirkungen haben.`
            },
            {
                title: "🎵 Spotify wird zu Geheimdienst-Tool",
                content: `Hacker nutzten Spotify-Playlists, um verschlüsselte Nachrichten zu übertragen. Die Reihenfolge der Lieder enthielt Codes für Bankdaten. 'Dancing Queen' bedeutete 'Überweisung bestätigt'. Der Hack wurde nur entdeckt, weil ein Ermittler die merkwürdigen Playlists bemerkte.

**Lernpunkt:** Steganographie kann in alltäglichen Anwendungen versteckt werden.`
            },
            {
                title: "🏠 Smart-Türklingel spioniert Nachbarschaft aus",
                content: `Eine Ring-Doorbell wurde so gehackt, dass sie nicht nur das eigene Haus überwachte, sondern auch alle anderen Klingeln in der Straße. Der Hacker erstellte eine Live-Reality-Show namens 'Desperate Housewives Real' und streamte das Leben der Nachbarn 3 Monate lang.

**Lernpunkt:** Vernetzte Sicherheitssysteme können die Privatsphäre ganzer Nachbarschaften gefährden.`
            },
            {
                title: "🎮 Fortnite-Cheat entpuppt sich als Spyware",
                content: `Ein beliebter Fortnite-Cheat wurde 2 Millionen Mal heruntergeladen. In Wahrheit war es Spyware, die Hausaufgaben von Schülern stahl und sie an Konkurrenten verkaufte. 500.000 Kinder bekamen schlechtere Noten, weil ihre Mitschüler die gleichen Antworten hatten.

**Lernpunkt:** Gaming-Software ist ein beliebter Vektor für Malware-Verbreitung.`
            },
            {
                title: "📱 Teenager hackt Schulnoten mit Magneten",
                content: `Ein 16-Jähriger brachte starke Neodym-Magneten zur Schule und löschte damit alle Festplatten im Lehrerzimmer. Da keine Backups existierten, musste die gesamte Schule das Schuljahr wiederholen. Der Schüler wurde zur Legende, bekam aber 200 Stunden Sozialdienst.

**Lernpunkt:** Backup-Strategien sind essentiell - auch gegen unkonventionelle Angriffe.`
            },
            {
                title: "🚁 Polizei-Drohne wird zum Drogen-Taxi",
                content: `Hacker übernahmen eine Polizei-Drohne und nutzten sie 6 Monate lang als Drogen-Lieferservice. Die Polizei wunderte sich, warum die Drohne immer wieder 'Routinepatrouillen' zu den gleichen Adressen flog. Der Hack wurde entdeckt, als die Drohne bei einer Live-Pressekonferenz Marihuana abwarf.

**Lernpunkt:** Autonome Systeme benötigen ständige Überwachung und Anomalieerkennung.`
            },
            {
                title: "🏥 Herzschrittmacher-Hack rettet Leben",
                content: `Ein ethischer Hacker entdeckte, dass Herzschrittmacher remote gehackt werden können. Statt sie zu manipulieren, korrigierte er heimlich fehlerhafte Einstellungen bei 300 Patienten und rettete vermutlich 50 Leben. Die Krankenhäuser erfuhren davon erst durch eine anonyme E-Mail.

**Lernpunkt:** White Hat Hacking kann Leben retten - aber wirft ethische Fragen auf.`
            },
            {
                title: "🎪 Hacker verwandelt Werbetafeln in Videospiel",
                content: `Ein Hacker programmierte alle digitalen Werbetafeln in Tokyo so um, dass sie zusammen ein riesiges Tetris-Spiel bildeten. Passanten konnten mit ihren Handys mitspielen. Die Stadt ließ das Spiel 3 Tage laufen, weil es so beliebt war - bis ein Rekord-Score alle Bildschirme zum Absturz brachte.

**Lernpunkt:** Nicht alle Hacks sind böswillig - manche sind einfach kreativ.`
            },
            {
                title: "🚗 Tesla fährt autonom zur Werkstatt",
                content: `Ein Tesla-Besitzer wachte auf und stellte fest, dass sein Auto über Nacht 200 km zur nächsten Tesla-Werkstatt gefahren war - ohne ihn. Hacker hatten das Auto gehackt und einen 'Wellness-Check' programmiert. Das Auto hatte tatsächlich einen Defekt, der so frühzeitig entdeckt wurde.

**Lernpunkt:** Manchmal können 'Angriffe' unbeabsichtigt nützlich sein.`
            },
            {
                title: "📺 Smart-TV wird zur Wahlurne",
                content: `Während einer TV-Debatte hackten Aktivisten 50.000 Smart-TVs und ließen die Zuschauer live über die Antworten der Politiker abstimmen. Die Ergebnisse wurden in Echtzeit über die TV-Bilder eingeblendet. Die Politiker wussten nicht, warum das Publikum bei manchen Antworten lachte.

**Lernpunkt:** Smart-TVs können für politische Manipulation missbraucht werden.`
            },
            {
                title: "🎯 Dating-App wird zur Spionage-Plattform",
                content: `Eine beliebte Dating-App namens 'LoveLink' war in Wahrheit ein Spionage-Tool eines fremden Geheimdienstes. Sie sammelte intime Details von 2 Millionen Nutzern, darunter Politiker und Militärangehörige. Das Schlimmste: Die App hatte eine 95% Erfolgsquote bei Dates - niemand wollte sie löschen.

**Lernpunkt:** Honeypot-Apps können sehr effektive Spionage-Tools sein.`
            },
            {
                title: "🏪 Supermarkt-Scanner übernehmen Weltherrschaft",
                content: `Hacker programmierten Supermarkt-Scanner so um, dass sie nur noch vegane Produkte akzeptierten. Fleisch und Milchprodukte wurden mit 'UMWELTSÜNDE' gescannt. 500 Supermärkte waren betroffen. Der Umsatz veganer Produkte stieg um 2000%, bevor der Hack behoben wurde.

**Lernpunkt:** Hack-Aktivismus kann Verbraucherverhalten beeinflussen.`
            },
            {
                title: "🌡️ Wetterstation prophezeit Zombie-Apokalypse",
                content: `Hacker übernahmen das Wetterwarnsystem und sendeten Warnungen vor 'starkem Zombiefall mit Windgeschwindigkeiten bis 80 km/h'. 100.000 Menschen bekamen Push-Nachrichten. Supermärkte verkauften aus Sicherheitsgründen 3 Tage lang keine Baseballschläger und Konserven.

**Lernpunkt:** Notfallsysteme sind kritische Infrastruktur und müssen besonders geschützt werden.`
            }
        ];

        this.caseStudies = [
            {
                id: 'case1',
                title: 'WannaCry Krankenhaus-Angriff',
                description: 'Ransomware-Angriff auf ein Universitätsklinikum mit lebensbedrohlichen Folgen',
                difficulty: 'hard',
                scenario: 'Sie sind IT-Sicherheitsbeauftragte/r eines Universitätsklinikums. Am 12. Mai 2017 um 14:30 Uhr zeigen plötzlich alle Computer eine rote Warnmeldung. Patientendaten sind nicht mehr zugänglich, OP-Säle müssen geschlossen werden.',
                category: 'Ransomware / Incident Response'
            },
            {
                id: 'case2', 
                title: 'Target Corporation Data Breach',
                description: 'Millionen von Kreditkartendaten gestohlen über kompromittierte POS-Systeme',
                difficulty: 'medium',
                scenario: 'Als Security Analyst bei Target entdecken Sie verdächtige Netzwerkaktivitäten in den Point-of-Sale Systemen. 40 Millionen Kreditkartendaten sind potentiell betroffen.',
                category: 'Retail Security / Data Breach'
            },
            {
                id: 'case3',
                title: 'Stuxnet Industrial Sabotage', 
                description: 'Hochentwickelter Wurm zielt auf Industrieanlagen ab',
                difficulty: 'hard',
                scenario: 'Sie arbeiten für eine kritische Infrastruktur. Ihre SCADA-Systeme zeigen merkwürdige Anomalien. USB-Sticks werden automatisch ausgeführt.',
                category: 'Critical Infrastructure / APT'
            },
            {
                id: 'case4',
                title: 'SolarWinds Supply Chain Attack',
                description: 'Kompromittierung einer vertrauenswürdigen Software-Update-Kette',
                difficulty: 'hard',
                scenario: 'Als Enterprise Security Architect entdecken Sie, dass Ihre SolarWinds Orion Software kompromittiert wurde und als Backdoor für Angreifer dient.',
                category: 'Supply Chain / APT'
            },
            {
                id: 'case5',
                title: 'Equifax Data Breach',
                description: 'Persönliche Daten von 147 Millionen Menschen gestohlen',
                difficulty: 'medium',
                scenario: 'Sie sind CISO bei Equifax. Eine unbekannte Apache Struts Schwachstelle wurde ausgenutzt. Massive Datenexfiltration ist im Gange.',
                category: 'Web Security / Data Breach'
            },
            {
                id: 'case6',
                title: 'Sony PlayStation Network Hack',
                description: '77 Millionen Nutzerkonten kompromittiert',
                difficulty: 'medium',
                scenario: 'Als Head of Security bei Sony PSN bemerken Sie ungewöhnliche Datenbankzugriffe und Anzeichen einer massiven Datenkompromittierung.',
                category: 'Gaming / Network Security'
            },
            {
                id: 'case7',
                title: 'Maersk NotPetya Incident',
                description: 'Globaler Shipping-Riese durch Malware lahmgelegt',
                difficulty: 'hard',
                scenario: 'Sie sind Global IT Security Manager bei Maersk. Eine Malware breitet sich explosionsartig durch Ihr weltweites Netzwerk aus und verschlüsselt kritische Systeme.',
                category: 'Global Enterprise / Malware'
            },
            {
                id: 'case8',
                title: 'COVID-19 Pharma Ransomware',
                description: 'Angriff auf Pharmaunternehmen während Pandemie',
                difficulty: 'medium',
                scenario: 'Als CISO eines Pharmaunternehmens werden Sie während der COVID-19 Forschung Opfer einer gezielten Ransomware-Attacke.',
                category: 'Healthcare / Ransomware'
            },
            {
                id: 'case9',
                title: 'OPM Background Check Hack',
                description: '21 Millionen Regierungsmitarbeiter-Daten gestohlen',
                difficulty: 'hard',
                scenario: 'Sie arbeiten für das US Office of Personnel Management. Angreifer haben Zugang zu hochsensiblen Hintergrundprüfungsdaten von Regierungsmitarbeitern.',
                category: 'Government / Espionage'
            },
            {
                id: 'case10',
                title: 'McDonald\'s App Data Exposure',
                description: '2.2 Millionen Kundendaten über ungesicherte APIs zugänglich',
                difficulty: 'easy',
                scenario: 'Als Mobile Security Engineer bei McDonald\'s entdecken Sie, dass die mobile App versehentlich Kundendaten über ungeschützte API-Endpoints preisgibt.',
                category: 'Mobile Security / API'
            },
            {
                id: 'case11',
                title: 'University Ransomware Attack',
                description: 'Campus-weite Verschlüsselung bedroht Studiendaten',
                difficulty: 'medium',
                scenario: 'Als IT-Director einer Universität wird Ihr Campus von Ransomware befallen. Studentendaten, Forschungsergebnisse und E-Learning-Systeme sind betroffen.',
                category: 'Education / Ransomware'
            },
            {
                id: 'case12',
                title: 'Capital One Cloud Breach',
                description: 'Cloud-Fehlkonfiguration führt zu Datenleck von 100 Millionen Kunden',
                difficulty: 'medium',
                scenario: 'Als Cloud Security Architect bei Capital One entdecken Sie, dass ein Angreifer über SSRF-Schwachstellen Zugang zu S3-Buckets mit Kundendaten erhalten hat.',
                category: 'Cloud Security / Data Breach'
            },
            {
                id: 'case13',
                title: 'Düsseldorf Hospital Ransomware',
                description: 'Lebensbedrohlicher Ransomware-Angriff auf deutsche Klinik',
                difficulty: 'hard',
                scenario: 'Sie sind IT-Leiter am Universitätsklinikum Düsseldorf. Ein Ransomware-Angriff hat kritische medizinische Systeme lahmgelegt. Eine Patientin muss in ein anderes Krankenhaus verlegt werden.',
                category: 'Healthcare / Life-Critical'
            },
            {
                id: 'case14',
                title: 'Smart City IoT Botnet',
                description: 'Vernetzte Stadtinfrastruktur wird zum Botnetz',
                difficulty: 'hard',
                scenario: 'Als Chief Technology Officer einer Smart City entdecken Sie, dass Tausende von IoT-Geräten (Ampeln, Sensoren, Kameras) kompromittiert und zu einem Botnetz zusammengeschlossen wurden.',
                category: 'IoT / Smart City'
            },
            {
                id: 'case15',
                title: 'Social Media Deepfake Campaign',
                description: 'Koordinierte Desinformationskampagne mit KI-generierten Inhalten',
                difficulty: 'medium',
                scenario: 'Als Trust & Safety Lead einer Social Media Plattform entdecken Sie eine massive Kampagne mit Deepfake-Videos und AI-generierten Fake-Accounts.',
                category: 'Disinformation / AI Security'
            },
            {
                id: 'case16',
                title: 'Cryptocurrency Exchange Hack',
                description: 'Multi-Millionen Dollar Diebstahl von Kryptowährung',
                difficulty: 'hard',
                scenario: 'Als Security Engineer einer Kryptowährungsbörse entdecken Sie verdächtige Transaktionen. Hot Wallets werden geleert, 50 Millionen Dollar in Bitcoin sind verschwunden.',
                category: 'Cryptocurrency / Financial'
            }
        ];
    }

    // Modul-Management
    showModule(moduleKey) {
        if (!cybersecurityData[moduleKey]) {
            console.error('Modul nicht gefunden:', moduleKey);
            return;
        }

        this.currentModule = cybersecurityData[moduleKey];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        
        document.getElementById('main-screen').classList.remove('active');
        document.getElementById('module-screen').classList.add('active');
        
        this.renderModuleOverview(moduleKey);
    }

    renderModuleOverview(moduleKey) {
        const module = cybersecurityData[moduleKey];
        const moduleContent = document.getElementById('module-content');
        
        const completedQuestions = this.userStats.moduleProgress[moduleKey]?.completed || 0;
        const totalQuestions = module.questions.length;
        const progressPercent = Math.round((completedQuestions / totalQuestions) * 100);
        
        // Zeitlimit basierend auf Fragenzahl (3 Minuten pro Frage)
        const timeLimit = Math.max(30, totalQuestions * 3);
        
        moduleContent.innerHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <h2>${module.title}</h2>
                <p style="font-size: 1.1em; color: #7f8c8d; margin: 15px 0;">${module.description}</p>
                <div style="display: inline-block; background: #f8f9fa; padding: 15px 25px; border-radius: 10px; margin: 10px;">
                    <strong>Schwierigkeit:</strong> ${module.difficulty} | 
                    <strong>Fragen:</strong> ${totalQuestions} | 
                    <strong>Zeitlimit:</strong> ${timeLimit} Min | 
                    <strong>Fortschritt:</strong> ${progressPercent}%
                </div>
            </div>

            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div class="progress-text">${completedQuestions} von ${totalQuestions} Fragen bearbeitet</div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 30px 0;">
                <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #27ae60; margin-bottom: 10px;">📚 Lernziele</h4>
                    <p style="font-size: 0.9em;">Vertiefen Sie Ihr Wissen in ${module.title.toLowerCase()}</p>
                </div>
                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #856404; margin-bottom: 10px;">🎯 Kompetenzen</h4>
                    <p style="font-size: 0.9em;">Praktische Anwendung von Sicherheitskonzepten</p>
                </div>
                <div style="background: #f8d7da; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #721c24; margin-bottom: 10px;">⚡ Prüfungsmodus</h4>
                    <p style="font-size: 0.9em;">Mit Timer und IHK-Dokumentation</p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <button class="btn" onclick="engine.startModule()" style="font-size: 1.2em; padding: 15px 30px; margin: 10px;">
                    📚 Übungsmodus
                </button>
                <button class="btn btn-primary" onclick="engine.startExamMode()" style="font-size: 1.2em; padding: 15px 30px; margin: 10px;">
                    � Prüfungsmodus
                </button>
                ${completedQuestions > 0 ? `
                    <button class="btn" onclick="engine.reviewModule()" style="margin: 10px;">
                        📋 Ergebnisse anzeigen
                    </button>
                ` : ''}
            </div>
        `;
        
        // Store module data for exam mode
        this.currentModuleKey = moduleKey;
        this.examTimeLimit = timeLimit;
    }

    startExamMode() {
        if (!this.currentModule) return;
        
        // Set exam details
        document.getElementById('exam-module-name').textContent = this.currentModule.title;
        document.getElementById('exam-question-count').textContent = this.currentModule.questions.length;
        document.getElementById('exam-time-limit').textContent = `${this.examTimeLimit} Minuten`;
        
        // Show name input screen
        document.getElementById('module-screen').classList.remove('active');
        document.getElementById('name-input-screen').classList.add('active');
        
        this.examMode = true;
    }

    startExamWithUserData() {
        const nameInput = document.getElementById('participant-name');
        const ihkInput = document.getElementById('ihk-number');
        
        if (!nameInput.value.trim() || !ihkInput.value.trim()) {
            alert('Bitte füllen Sie alle Felder aus.');
            return;
        }
        
        this.participantName = nameInput.value.trim();
        this.ihkNumber = ihkInput.value.trim();
        
        // Start exam
        this.startTime = new Date();
        this.timeRemaining = this.examTimeLimit * 60; // Convert to seconds
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];
        
        document.getElementById('name-input-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
        
        this.startTimer();
        this.showCurrentQuestion();
    }

    startModule() {
        if (!this.currentModule) return;
        
        this.examMode = false;
        this.startTime = new Date();
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];
        
        // Statistik-Engine initialisieren
        const moduleKey = Object.keys(cybersecurityData).find(key => 
            cybersecurityData[key] === this.currentModule
        );
        this.statisticsEngine.startQuiz(moduleKey, this.currentModule.title);
        
        document.getElementById('module-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
        
        // Hide timer and marking in practice mode
        const timerDisplay = document.querySelector('[id*="timer"]');
        const markingControls = document.querySelector('[id*="mark"]');
        if (timerDisplay) timerDisplay.parentElement.style.display = 'none';
        
        this.showCurrentQuestion();
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById('timer-display');
        if (timerElement) {
            timerElement.textContent = display;
            
            // Warning when less than 5 minutes
            if (this.timeRemaining <= 300) {
                timerElement.classList.add('timer-warning');
            }
        }
    }

    timeUp() {
        clearInterval(this.timerInterval);
        alert('⏰ Zeit abgelaufen! Die Prüfung wird automatisch beendet.');
        this.showResults();
    }

    toggleQuestionMark() {
        const currentQuestionId = this.currentModule.questions[this.currentQuestionIndex].id;
        const questionContainer = document.getElementById('question-container');
        const markBtn = document.getElementById('mark-question-btn');
        
        if (this.markedQuestions.includes(currentQuestionId)) {
            // Unmark
            this.markedQuestions = this.markedQuestions.filter(id => id !== currentQuestionId);
            questionContainer.classList.remove('question-marked');
            markBtn.textContent = '🔖 Markieren';
            markBtn.style.background = '#f39c12';
        } else {
            // Mark
            this.markedQuestions.push(currentQuestionId);
            questionContainer.classList.add('question-marked');
            markBtn.textContent = '📌 Markiert';
            markBtn.style.background = '#e74c3c';
        }
        
        this.updateMarkedCount();
    }

    updateMarkedCount() {
        const countElement = document.getElementById('marked-count');
        if (countElement) {
            countElement.textContent = this.markedQuestions.length;
        }
    }

    showMarkedQuestions() {
        if (this.markedQuestions.length === 0) {
            alert('Sie haben noch keine Fragen markiert.');
            return;
        }
        
        document.getElementById('question-screen').classList.remove('active');
        document.getElementById('marked-questions-screen').classList.add('active');
        
        this.renderMarkedQuestions();
    }

    renderMarkedQuestions() {
        const container = document.getElementById('marked-questions-list');
        
        container.innerHTML = this.markedQuestions.map(questionId => {
            const question = this.currentModule.questions.find(q => q.id === questionId);
            const questionIndex = this.currentModule.questions.findIndex(q => q.id === questionId);
            
            return `
                <div class="marked-question-item" onclick="engine.jumpToQuestion(${questionIndex})">
                    <div style="font-weight: bold; margin-bottom: 8px;">
                        🔖 Frage ${questionIndex + 1}
                    </div>
                    <div style="color: #7f8c8d;">
                        ${question.question.substring(0, 100)}${question.question.length > 100 ? '...' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    jumpToQuestion(questionIndex) {
        this.currentQuestionIndex = questionIndex;
        document.getElementById('marked-questions-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
        this.showCurrentQuestion();
    }

    backToQuestion() {
        document.getElementById('marked-questions-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
    }

    // Stories System
    showStories() {
        document.getElementById('main-screen').classList.remove('active');
        document.getElementById('stories-screen').classList.add('active');
        this.currentStoryIndex = 0;
        this.displayCurrentStory();
    }

    displayCurrentStory() {
        const story = this.stories[this.currentStoryIndex];
        document.getElementById('current-story').innerHTML = `
            <h3 style="color: #2c3e50; margin-bottom: 20px;">${story.title}</h3>
            <div style="white-space: pre-line; line-height: 1.6; font-size: 1.1em;">
                ${story.content}
            </div>
        `;
        
        document.getElementById('story-navigation').textContent = 
            `${this.currentStoryIndex + 1} / ${this.stories.length}`;
    }

    previousStory() {
        if (this.currentStoryIndex > 0) {
            this.currentStoryIndex--;
            this.displayCurrentStory();
        }
    }

    nextStory() {
        if (this.currentStoryIndex < this.stories.length - 1) {
            this.currentStoryIndex++;
            this.displayCurrentStory();
        }
    }

    // Case Studies System
    showCaseStudies() {
        document.getElementById('main-screen').classList.remove('active');
        document.getElementById('case-studies-screen').classList.add('active');
        this.renderCaseStudies();
    }

    renderCaseStudies() {
        const container = document.getElementById('case-study-list');
        
        container.innerHTML = this.caseStudies.map(caseStudy => `
            <div class="case-study-card" onclick="engine.startCaseStudy('${caseStudy.id}')">
                <div class="difficulty ${caseStudy.difficulty}">${caseStudy.difficulty.toUpperCase()}</div>
                <h4 style="margin-bottom: 10px; color: #2c3e50;">${caseStudy.title}</h4>
                <p style="color: #7f8c8d; margin-bottom: 15px;">${caseStudy.description}</p>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px;">
                    <strong>Kategorie:</strong> ${caseStudy.category}
                </div>
            </div>
        `).join('');
    }

    startCaseStudy(caseId) {
        this.currentCaseStudy = this.caseStudies.find(c => c.id === caseId);
        document.getElementById('case-studies-screen').classList.remove('active');
        document.getElementById('individual-case-screen').classList.add('active');
        
        document.getElementById('case-study-content').innerHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <h2>${this.currentCaseStudy.title}</h2>
                <div class="difficulty ${this.currentCaseStudy.difficulty}" style="display: inline-block; margin: 10px 0;">
                    ${this.currentCaseStudy.difficulty.toUpperCase()}
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3>📋 Szenario</h3>
                <p style="line-height: 1.6; margin-top: 15px;">${this.currentCaseStudy.scenario}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn btn-primary" onclick="alert('Interaktive Fallstudie in Entwicklung!')">
                    🎮 Fallstudie starten
                </button>
            </div>
        `;
    }

    showCurrentQuestion() {
        if (!this.currentModule || this.currentQuestionIndex >= this.currentModule.questions.length) {
            this.showResults();
            return;
        }

        this.questionStartTime = new Date();
        const question = this.currentModule.questions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.currentModule.questions.length) * 100;
        
        // Progress aktualisieren
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = 
            `Frage ${this.currentQuestionIndex + 1} von ${this.currentModule.questions.length}`;
        
        // Timer and marking controls visibility
        const timerControls = document.querySelector('[style*="justify-content: space-between"]');
        if (timerControls) {
            timerControls.style.display = this.examMode ? 'flex' : 'none';
        }
        
        // Update mark button state
        const markBtn = document.getElementById('mark-question-btn');
        if (markBtn) {
            if (this.markedQuestions.includes(question.id)) {
                markBtn.textContent = '📌 Markiert';
                markBtn.style.background = '#e74c3c';
            } else {
                markBtn.textContent = '🔖 Markieren';
                markBtn.style.background = '#f39c12';
            }
        }
        
        // Frage rendern
        const questionContainer = document.getElementById('question-container');
        questionContainer.className = 'question-container' + 
            (this.markedQuestions.includes(question.id) ? ' question-marked' : '');
            
        questionContainer.innerHTML = `
            <div class="question-text">
                <strong>Frage ${this.currentQuestionIndex + 1}:</strong><br>
                ${question.question}
            </div>
            
            <div class="answer-options">
                ${question.options.map((option, index) => `
                    <div class="answer-option" onclick="engine.selectAnswer(${index})" data-index="${index}">
                        <strong>${String.fromCharCode(65 + index)})</strong> ${option}
                    </div>
                `).join('')}
            </div>
        `;

        // Buttons zurücksetzen
        document.getElementById('check-btn').style.display = 'inline-block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('finish-btn').style.display = 'none';
        document.getElementById('check-btn').disabled = true;
        
        // Update marked count
        this.updateMarkedCount();
    }

    selectAnswer(answerIndex) {
        // Vorherige Auswahl entfernen
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Neue Auswahl markieren
        const selectedOption = document.querySelector(`[data-index="${answerIndex}"]`);
        selectedOption.classList.add('selected');
        
        // Check-Button aktivieren
        document.getElementById('check-btn').disabled = false;
        
        // Antwort speichern
        this.selectedAnswer = answerIndex;
    }

    checkAnswer() {
        if (this.selectedAnswer === undefined) return;
        
        const question = this.currentModule.questions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correct;
        const timeSpent = new Date() - this.questionStartTime;
        
        // Antwort zur Statistik-Engine hinzufügen
        this.statisticsEngine.recordAnswer(
            this.currentQuestionIndex,
            question,
            this.selectedAnswer,
            isCorrect,
            timeSpent
        );
        
        // Antwort zur Historie hinzufügen
        this.userAnswers.push({
            questionId: question.id,
            selectedAnswer: this.selectedAnswer,
            correctAnswer: question.correct,
            isCorrect: isCorrect,
            timeSpent: timeSpent / 1000,
            timestamp: new Date()
        });
        
        // Visuelles Feedback
        document.querySelectorAll('.answer-option').forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
            opt.onclick = null; // Weitere Klicks deaktivieren
        });
        
        // Erklärung anzeigen
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML += `
            <div class="explanation">
                <h4>${isCorrect ? '✅ Richtig!' : '❌ Leider falsch'}</h4>
                <div style="white-space: pre-line; line-height: 1.6;">${question.explanation}</div>
                ${isCorrect ? 
                    `<div style="margin-top: 15px; color: #27ae60; font-weight: bold;">
                        Sehr gut! Sie haben die Frage in ${timeSpent.toFixed(1)} Sekunden beantwortet.
                    </div>` : 
                    `<div style="margin-top: 15px; color: #e74c3c;">
                        Die richtige Antwort war: <strong>${String.fromCharCode(65 + question.correct)})</strong>
                    </div>`
                }
            </div>
        `;
        
        // Buttons anpassen
        document.getElementById('check-btn').style.display = 'none';
        
        if (this.currentQuestionIndex < this.currentModule.questions.length - 1) {
            document.getElementById('next-btn').style.display = 'inline-block';
        } else {
            document.getElementById('finish-btn').style.display = 'inline-block';
        }
        
        // Adaptives Lernen
        this.updateAdaptiveDifficulty(isCorrect, timeSpent);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.selectedAnswer = undefined;
        this.showCurrentQuestion();
    }

    showResults() {
        // Timer stoppen
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const totalQuestions = this.userAnswers.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const totalTime = (new Date() - this.startTime) / 1000 / 60; // Minuten
        
        // Performance-Bewertung
        let performance = '';
        let performanceColor = '';
        let passed = false;
        
        if (percentage >= 90) {
            performance = 'Exzellent 🏆';
            performanceColor = '#27ae60';
            passed = true;
        } else if (percentage >= 80) {
            performance = 'Sehr gut 🥈';
            performanceColor = '#2980b9';
            passed = true;
        } else if (percentage >= 70) {
            performance = 'Gut - Bestanden 🥉';
            performanceColor = '#f39c12';
            passed = true;
        } else if (percentage >= 60) {
            performance = 'Befriedigend 📚';
            performanceColor = '#e67e22';
            passed = false;
        } else {
            performance = 'Nicht bestanden 📖';
            performanceColor = '#e74c3c';
            passed = false;
        }
        
        // Detaillierte Statistik anzeigen
        this.statisticsEngine.showDetailedResults('performance-details');
        
        // Statistiken aktualisieren
        this.updateUserStats(correctAnswers, totalQuestions, percentage);
        
        document.getElementById('question-screen').classList.remove('active');
        document.getElementById('results-screen').classList.add('active');
        
        document.getElementById('score-circle').textContent = `${percentage}%`;
        document.getElementById('score-circle').style.background = 
            `linear-gradient(135deg, ${performanceColor}, ${performanceColor}dd)`;
        
        const avgTime = this.userAnswers.reduce((sum, a) => sum + a.timeSpent, 0) / totalQuestions;
        
        // Prüfungsergebnis Header
        const examHeader = this.examMode ? `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="color: #2c3e50; margin-bottom: 15px;">📋 Prüfungsergebnis</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 0.9em;">
                    <div><strong>Name:</strong> ${this.participantName}</div>
                    <div><strong>IHK-Nummer:</strong> ${this.ihkNumber}</div>
                    <div><strong>Modul:</strong> ${this.currentModule.title}</div>
                    <div><strong>Datum:</strong> ${new Date().toLocaleDateString('de-DE')}</div>
                </div>
                <div style="text-align: center; margin-top: 15px; padding: 10px; border-radius: 5px; background: ${passed ? '#d4edda' : '#f8d7da'}; color: ${passed ? '#155724' : '#721c24'}; font-weight: bold;">
                    ${passed ? '✅ BESTANDEN' : '❌ NICHT BESTANDEN'} (Mindestens 70% erforderlich)
                </div>
            </div>
        ` : '';
        
        document.getElementById('performance-details').innerHTML = `
            ${examHeader}
            
            <h3 style="color: ${performanceColor}; text-align: center; margin-bottom: 20px;">
                ${performance}
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h4>📊 Ergebnis</h4>
                    <p><strong>${correctAnswers} von ${totalQuestions}</strong> Fragen richtig</p>
                    <p><strong>${percentage}%</strong> Erfolgsquote</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h4>⏱️ Zeitanalyse</h4>
                    <p><strong>${totalTime.toFixed(1)} Min</strong> Gesamtzeit</p>
                    <p><strong>${avgTime.toFixed(1)} Sek</strong> pro Frage</p>
                    ${this.examMode ? `<p><strong>${this.markedQuestions.length}</strong> Fragen markiert</p>` : ''}
                </div>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h4>🎯 Empfehlung</h4>
                    <p>${this.getRecommendation(percentage)}</p>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <h4>📋 Detailanalyse</h4>
                <div style="max-height: 200px; overflow-y: auto; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    ${this.generateDetailedAnalysis()}
                </div>
            </div>
            
            ${this.examMode ? `
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn" onclick="engine.generateCertificate()" style="background: #17a2b8; color: white;">
                        📜 Zertifikat erstellen
                    </button>
                </div>
            ` : ''}
        `;
    }

    generateCertificate() {
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const totalQuestions = this.userAnswers.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const passed = percentage >= 70;
        
        const certificate = `
=== PRÜFUNGSZEUGNIS ===

Cyber-Security & Datenschutz Lernplattform

Name: ${this.participantName}
IHK-Teilnehmernummer: ${this.ihkNumber}
Modul: ${this.currentModule.title}
Datum: ${new Date().toLocaleDateString('de-DE')}
Uhrzeit: ${new Date().toLocaleTimeString('de-DE')}

PRÜFUNGSERGEBNIS:
Erreichte Punktzahl: ${correctAnswers}/${totalQuestions} (${percentage}%)
Status: ${passed ? 'BESTANDEN' : 'NICHT BESTANDEN'}
Mindestpunktzahl: 70%

Prüfungsdauer: ${((new Date() - this.startTime) / 1000 / 60).toFixed(1)} Minuten
Markierte Fragen: ${this.markedQuestions.length}

Diese Bescheinigung wurde elektronisch erstellt.
        `.trim();
        
        // Download als Textdatei
        const blob = new Blob([certificate], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Zertifikat_${this.participantName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('📜 Zertifikat wurde heruntergeladen!');
    }

    getRecommendation(percentage) {
        if (percentage >= 90) {
            return "Ausgezeichnet! Sie können mit fortgeschrittenen Themen fortfahren.";
        } else if (percentage >= 80) {
            return "Sehr gut! Kleine Wissenslücken können durch gezielte Wiederholung geschlossen werden.";
        } else if (percentage >= 70) {
            return "Solide Basis! Vertiefen Sie die Themen, bei denen Sie Unsicherheiten haben.";
        } else if (percentage >= 60) {
            return "Grundlagen sind vorhanden. Intensive Wiederholung der Kernthemen empfohlen.";
        } else {
            return "Wiederholung des gesamten Moduls dringend empfohlen. Nutzen Sie zusätzliche Lernmaterialien.";
        }
    }

    generateDetailedAnalysis() {
        return this.userAnswers.map((answer, index) => {
            const question = this.currentModule.questions[index];
            const icon = answer.isCorrect ? '✅' : '❌';
            const timeColor = answer.timeSpent < 30 ? '#27ae60' : answer.timeSpent < 60 ? '#f39c12' : '#e74c3c';
            
            return `
                <div style="margin: 8px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid ${answer.isCorrect ? '#27ae60' : '#e74c3c'};">
                    <strong>${icon} Frage ${index + 1}</strong>
                    <span style="float: right; color: ${timeColor};">${answer.timeSpent.toFixed(1)}s</span>
                    <br>
                    <small>${question.question.substring(0, 80)}${question.question.length > 80 ? '...' : ''}</small>
                </div>
            `;
        }).join('');
    }

    updateAdaptiveDifficulty(isCorrect, timeSpent) {
        // Einfaches adaptives System
        if (isCorrect && timeSpent < 30) {
            // Schnell und richtig -> erhöhe Schwierigkeit
            this.adaptiveDifficulty = 'schwer';
        } else if (!isCorrect || timeSpent > 60) {
            // Falsch oder langsam -> reduziere Schwierigkeit
            this.adaptiveDifficulty = 'einfach';
        }
    }

    updateUserStats(correct, total, percentage) {
        if (!this.userStats.moduleProgress[this.getModuleKey()]) {
            this.userStats.moduleProgress[this.getModuleKey()] = {
                completed: 0,
                bestScore: 0,
                attempts: 0,
                totalTime: 0
            };
        }
        
        const moduleStats = this.userStats.moduleProgress[this.getModuleKey()];
        moduleStats.completed = total;
        moduleStats.bestScore = Math.max(moduleStats.bestScore, percentage);
        moduleStats.attempts++;
        moduleStats.totalTime += (new Date() - this.startTime) / 1000 / 60;
        
        this.userStats.totalQuestions += total;
        this.userStats.correctAnswers += correct;
        this.userStats.lastActivity = new Date().toISOString();
        
        this.saveUserStats();
    }

    getModuleKey() {
        // Finde den Schlüssel des aktuellen Moduls
        for (const [key, module] of Object.entries(cybersecurityData)) {
            if (module === this.currentModule) {
                return key;
            }
        }
        return 'unknown';
    }

    loadUserStats() {
        const defaultStats = {
            totalQuestions: 0,
            correctAnswers: 0,
            moduleProgress: {},
            achievements: [],
            lastActivity: null,
            learningStreak: 0
        };
        
        try {
            const stored = localStorage.getItem('cybersecurity_stats');
            return stored ? { ...defaultStats, ...JSON.parse(stored) } : defaultStats;
        } catch (e) {
            console.warn('Fehler beim Laden der Benutzerstatistiken:', e);
            return defaultStats;
        }
    }

    saveUserStats() {
        try {
            localStorage.setItem('cybersecurity_stats', JSON.stringify(this.userStats));
        } catch (e) {
            console.warn('Fehler beim Speichern der Benutzerstatistiken:', e);
        }
    }

    updateStatsDisplay() {
        const overall = this.userStats.totalQuestions > 0 ? 
            Math.round((this.userStats.correctAnswers / this.userStats.totalQuestions) * 100) : 0;
        
        console.log(`📊 Gesamtstatistik: ${overall}% (${this.userStats.correctAnswers}/${this.userStats.totalQuestions})`);
    }

    // Navigation
    showMainMenu() {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById('main-screen').classList.add('active');
    }

    showModuleOverview() {
        document.getElementById('question-screen').classList.remove('active');
        document.getElementById('module-screen').classList.add('active');
    }

    restartModule() {
        this.startModule();
    }

    reviewModule() {
        if (!this.userStats.moduleProgress[this.getModuleKey()]) {
            alert('Sie haben dieses Modul noch nicht abgeschlossen.');
            return;
        }
        
        const stats = this.userStats.moduleProgress[this.getModuleKey()];
        alert(`📊 Modul-Statistiken:\n\nBeste Punktzahl: ${stats.bestScore}%\nVersuche: ${stats.attempts}\nGesamtzeit: ${stats.totalTime.toFixed(1)} Minuten`);
    }
}

// Engine initialisieren
let engine;

// Warten bis DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    engine = new CyberSecurityEngine();
    
    // Globale Funktionen für HTML onclick
    window.showModule = (moduleKey) => engine.showModule(moduleKey);
    window.engine = engine;
});

// Hilfsfunktionen für HTML
function showMainMenu() {
    engine.showMainMenu();
}

function showModuleOverview() {
    engine.showModuleOverview();
}

function checkAnswer() {
    engine.checkAnswer();
}

function nextQuestion() {
    engine.nextQuestion();
}

function showResults() {
    engine.showResults();
}

function restartModule() {
    engine.restartModule();
}

// Neue Funktionen
function toggleQuestionMark() {
    engine.toggleQuestionMark();
}

function showMarkedQuestions() {
    engine.showMarkedQuestions();
}

function backToQuestion() {
    engine.backToQuestion();
}

function showStories() {
    engine.showStories();
}

function showCaseStudies() {
    engine.showCaseStudies();
}

function previousStory() {
    engine.previousStory();
}

function nextStory() {
    engine.nextStory();
}

// =====================================
// ANALYTICS & ERWEITERTE FUNKTIONEN
// =====================================

class LearningAnalytics {
    constructor() {
        this.loadData();
        this.initializeTracking();
    }

    loadData() {
        try {
            this.data = JSON.parse(localStorage.getItem('cybersec_analytics')) || {
                sessions: [],
                userStats: {},
                teamStats: {},
                certificates: [],
                overallProgress: {}
            };
        } catch (e) {
            this.data = { sessions: [], userStats: {}, teamStats: {}, certificates: [], overallProgress: {} };
        }
    }

    saveData() {
        localStorage.setItem('cybersec_analytics', JSON.stringify(this.data));
    }

    trackQuestionAttempt(userId, moduleId, questionId, correct, timeSpent) {
        const session = {
            userId: userId || 'anonymous',
            moduleId,
            questionId,
            correct,
            timeSpent,
            timestamp: new Date().toISOString(),
            sessionId: this.getCurrentSessionId()
        };

        this.data.sessions.push(session);
        this.updateUserStats(userId || 'anonymous', moduleId, correct, timeSpent);
        this.saveData();
    }

    updateUserStats(userId, moduleId, correct, timeSpent) {
        if (!this.data.userStats[userId]) {
            this.data.userStats[userId] = {
                totalQuestions: 0,
                correctAnswers: 0,
                totalTime: 0,
                moduleProgress: {},
                weakAreas: [],
                strengths: [],
                learningPath: []
            };
        }

        const userStats = this.data.userStats[userId];
        userStats.totalQuestions++;
        if (correct) userStats.correctAnswers++;
        userStats.totalTime += timeSpent;

        if (!userStats.moduleProgress[moduleId]) {
            userStats.moduleProgress[moduleId] = {
                attempted: 0,
                correct: 0,
                avgTime: 0,
                lastAccessed: null
            };
        }

        const moduleStats = userStats.moduleProgress[moduleId];
        moduleStats.attempted++;
        if (correct) moduleStats.correct++;
        moduleStats.avgTime = (moduleStats.avgTime + timeSpent) / 2;
        moduleStats.lastAccessed = new Date().toISOString();

        this.analyzeWeaknesses(userId);
    }

    analyzeWeaknesses(userId) {
        const userStats = this.data.userStats[userId];
        const weakAreas = [];
        const strengths = [];

        Object.entries(userStats.moduleProgress).forEach(([moduleId, stats]) => {
            const accuracy = stats.correct / stats.attempted;
            if (accuracy < 0.6) {
                weakAreas.push({
                    module: moduleId,
                    accuracy: accuracy,
                    recommendation: this.getRecommendation(moduleId, accuracy)
                });
            } else if (accuracy > 0.8) {
                strengths.push({
                    module: moduleId,
                    accuracy: accuracy
                });
            }
        });

        userStats.weakAreas = weakAreas;
        userStats.strengths = strengths;
    }

    getRecommendation(moduleId, accuracy) {
        const recommendations = {
            'lernfeld4': 'Wiederholung der OSI-Schichten und Netzwerk-Grundlagen empfohlen',
            'grundlagen': 'Fokus auf CIA-Triade und IT-Grundschutz-Katalog',
            'cloud': 'Shared Responsibility Model und CASB-Konzepte vertiefen',
            'compliance': 'DSGVO-Artikel und KRITIS-Verordnung studieren',
            'monitoring': 'SIEM-Funktionen und Incident Response Prozesse üben',
            'devsecops': 'Shift-Left-Prinzipien und Security Testing Tools',
            'mobile': 'MDM/MAM-Unterschiede und Mobile Security Frameworks',
            'industrial': 'OT/IT-Unterschiede und Industrial Control Systems'
        };
        return recommendations[moduleId] || 'Weitere Übung in diesem Bereich empfohlen';
    }

    getCurrentSessionId() {
        if (!this.currentSessionId) {
            this.currentSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
        return this.currentSessionId;
    }

    generateAnalyticsReport(userId) {
        const userStats = this.data.userStats[userId] || {};
        const sessions = this.data.sessions.filter(s => s.userId === userId);

        return {
            overview: {
                totalQuestions: userStats.totalQuestions || 0,
                accuracy: userStats.totalQuestions ? (userStats.correctAnswers / userStats.totalQuestions * 100).toFixed(1) : 0,
                totalTimeMinutes: Math.round((userStats.totalTime || 0) / 60),
                modulesStarted: Object.keys(userStats.moduleProgress || {}).length,
                lastActivity: sessions.length ? sessions[sessions.length - 1].timestamp : null
            },
            moduleBreakdown: userStats.moduleProgress || {},
            weakAreas: userStats.weakAreas || [],
            strengths: userStats.strengths || [],
            learningPath: this.generateLearningPath(userId),
            certificates: this.data.certificates.filter(c => c.userId === userId) || []
        };
    }

    generateLearningPath(userId) {
        const userStats = this.data.userStats[userId];
        if (!userStats) return [];

        const path = [];
        
        // Schwachstellen priorisieren
        userStats.weakAreas?.forEach(area => {
            path.push({
                type: 'remediation',
                module: area.module,
                priority: 'high',
                reason: `Verbesserung erforderlich (${(area.accuracy * 100).toFixed(1)}% Genauigkeit)`
            });
        });

        // Aufbauende Module empfehlen
        const completedModules = Object.keys(userStats.moduleProgress || {})
            .filter(moduleId => {
                const stats = userStats.moduleProgress[moduleId];
                return stats.correct / stats.attempted > 0.7;
            });

        if (completedModules.includes('grundlagen') && !completedModules.includes('cloud')) {
            path.push({
                type: 'progression',
                module: 'cloud',
                priority: 'medium',
                reason: 'Aufbauend auf IT-Sicherheits-Grundlagen'
            });
        }

        return path;
    }
}

class TeamManager {
    constructor() {
        this.loadTeams();
    }

    loadTeams() {
        try {
            this.teams = JSON.parse(localStorage.getItem('cybersec_teams')) || {};
        } catch (e) {
            this.teams = {};
        }
    }

    saveTeams() {
        localStorage.setItem('cybersec_teams', JSON.stringify(this.teams));
    }

    createTeam(name, description, creatorId) {
        const teamId = 'team_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        this.teams[teamId] = {
            id: teamId,
            name,
            description,
            createdBy: creatorId,
            members: [creatorId],
            created: new Date().toISOString(),
            competitions: [],
            achievements: []
        };

        this.saveTeams();
        return teamId;
    }

    joinTeam(teamId, userId) {
        if (this.teams[teamId] && !this.teams[teamId].members.includes(userId)) {
            this.teams[teamId].members.push(userId);
            this.saveTeams();
            return true;
        }
        return false;
    }

    getTeamLeaderboard(teamId, moduleId = null) {
        const team = this.teams[teamId];
        if (!team) return [];

        const analytics = new LearningAnalytics();
        const leaderboard = team.members.map(userId => {
            const userStats = analytics.data.userStats[userId] || {};
            let score = 0;
            let questionsAnswered = 0;

            if (moduleId) {
                const moduleStats = userStats.moduleProgress?.[moduleId];
                if (moduleStats) {
                    score = moduleStats.correct / moduleStats.attempted * 100;
                    questionsAnswered = moduleStats.attempted;
                }
            } else {
                score = userStats.totalQuestions ? (userStats.correctAnswers / userStats.totalQuestions * 100) : 0;
                questionsAnswered = userStats.totalQuestions || 0;
            }

            return {
                userId,
                score: score.toFixed(1),
                questionsAnswered,
                userName: this.getUserName(userId)
            };
        });

        return leaderboard.sort((a, b) => b.score - a.score);
    }

    getUserName(userId) {
        try {
            const userData = JSON.parse(localStorage.getItem('cybersec_user')) || {};
            return userData[userId]?.name || `User ${userId.slice(-4)}`;
        } catch (e) {
            return `User ${userId.slice(-4)}`;
        }
    }
}

class CertificationManager {
    constructor() {
        this.analytics = new LearningAnalytics();
        this.certificationCriteria = {
            'cybersec_basic': {
                name: 'Cybersecurity Grundlagen',
                description: 'Basis-Zertifikat für IT-Sicherheits-Grundlagen',
                requirements: {
                    modules: ['grundlagen', 'lernfeld4'],
                    minAccuracy: 80,
                    minQuestions: 20
                }
            },
            'cybersec_advanced': {
                name: 'Cybersecurity Professional',
                description: 'Fortgeschrittenen-Zertifikat für IT-Sicherheits-Experten',
                requirements: {
                    modules: ['grundlagen', 'cloud', 'compliance', 'monitoring'],
                    minAccuracy: 85,
                    minQuestions: 40
                }
            },
            'cybersec_specialist': {
                name: 'Cybersecurity Specialist',
                description: 'Spezialist-Zertifikat für alle Bereiche',
                requirements: {
                    modules: ['grundlagen', 'cloud', 'compliance', 'monitoring', 'devsecops', 'mobile', 'industrial'],
                    minAccuracy: 90,
                    minQuestions: 60
                }
            }
        };
    }

    checkEligibility(userId, certificationId) {
        const criteria = this.certificationCriteria[certificationId];
        if (!criteria) return { eligible: false, reason: 'Zertifizierung nicht gefunden' };

        const userStats = this.analytics.data.userStats[userId];
        if (!userStats) return { eligible: false, reason: 'Keine Benutzerstatistiken gefunden' };

        const issues = [];

        // Prüfe Module
        for (const moduleId of criteria.requirements.modules) {
            const moduleStats = userStats.moduleProgress[moduleId];
            if (!moduleStats) {
                issues.push(`Modul ${moduleId} noch nicht gestartet`);
                continue;
            }

            const accuracy = (moduleStats.correct / moduleStats.attempted) * 100;
            if (accuracy < criteria.requirements.minAccuracy) {
                issues.push(`Modul ${moduleId}: ${accuracy.toFixed(1)}% (mindestens ${criteria.requirements.minAccuracy}% erforderlich)`);
            }
        }

        // Prüfe Gesamtfragen
        if (userStats.totalQuestions < criteria.requirements.minQuestions) {
            issues.push(`Nur ${userStats.totalQuestions} Fragen beantwortet (mindestens ${criteria.requirements.minQuestions} erforderlich)`);
        }

        return {
            eligible: issues.length === 0,
            issues,
            progress: this.calculateProgress(userId, certificationId)
        };
    }

    calculateProgress(userId, certificationId) {
        const criteria = this.certificationCriteria[certificationId];
        const userStats = this.analytics.data.userStats[userId] || {};

        let totalModules = criteria.requirements.modules.length;
        let completedModules = 0;

        criteria.requirements.modules.forEach(moduleId => {
            const moduleStats = userStats.moduleProgress?.[moduleId];
            if (moduleStats) {
                const accuracy = (moduleStats.correct / moduleStats.attempted) * 100;
                if (accuracy >= criteria.requirements.minAccuracy) {
                    completedModules++;
                }
            }
        });

        const questionProgress = Math.min(
            (userStats.totalQuestions || 0) / criteria.requirements.minQuestions * 100,
            100
        );

        return {
            moduleProgress: (completedModules / totalModules) * 100,
            questionProgress,
            overallProgress: ((completedModules / totalModules * 0.7) + (questionProgress / 100 * 0.3)) * 100
        };
    }

    awardCertificate(userId, certificationId) {
        const eligibility = this.checkEligibility(userId, certificationId);
        if (!eligibility.eligible) {
            return { success: false, reason: 'Voraussetzungen nicht erfüllt', issues: eligibility.issues };
        }

        const certificate = {
            id: 'cert_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            userId,
            certificationId,
            name: this.certificationCriteria[certificationId].name,
            issueDate: new Date().toISOString(),
            validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 Jahr gültig
            verification: this.generateVerificationCode()
        };

        this.analytics.data.certificates.push(certificate);
        this.analytics.saveData();

        return { success: true, certificate };
    }

    generateVerificationCode() {
        return 'VERIFY-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
}

// Neue Funktionen für erweiterte Fallstudien
function showInteractiveCases() {
    // Echte Quests laden
    if (typeof combineQuests === 'function') {
        combineQuests();
    }
    
    let availableQuests = allQuests || interactiveQuests;
    
    const easyQuests = availableQuests.easy || [];
    const mediumQuests = availableQuests.medium || [];
    const hardQuests = availableQuests.hard || [];
    
    document.getElementById('content').innerHTML = `
        <div class="case-selection">
            <div class="hero-section">
                <h1>� Echte Cybersecurity-Abenteuer</h1>
                <p class="hero-text">Basierend auf REALEN Cyberangriffen der Geschichte! Jede Quest zeigt wahre Ereignisse, die die Welt verändert haben.</p>
                <div class="stats-bar">
                    <div class="stat-item">
                        <span class="stat-number">${easyQuests.length + mediumQuests.length + hardQuests.length}</span>
                        <span class="stat-label">Echte Vorfälle</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">2010-2020</span>
                        <span class="stat-label">Zeitraum</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">Milliarden $</span>
                        <span class="stat-label">Echter Schaden</span>
                    </div>
                </div>
            </div>
            
            <div class="difficulty-section">
                <div class="difficulty-header easy">
                    <h3>🟢 Leicht - Berühmte Cyberangriffe</h3>
                    <p>Erleben Sie die bekanntesten Hacks der Cybersecurity-Geschichte</p>
                </div>
                <div class="cases-grid">
                    ${easyQuests.map(quest => `
                        <div class="case-card easy real-event" onclick="startCase('easy', '${quest.id}')">
                            <div class="real-badge">🌟 ECHTER VORFALL</div>
                            <h4>${quest.title}</h4>
                            <p>${quest.description}</p>
                            ${quest.realEvent ? `<div class="real-event-note">📰 ${quest.realEvent}</div>` : ''}
                            <div class="case-meta">
                                <span>⏱️ 15-20 Min</span>
                                <span>🎯 ${quest.difficulty}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="difficulty-section">
                <div class="difficulty-header medium">
                    <h3>🟡 Mittel - Mega-Datenlecks</h3>
                    <p>Die größten Datendiebstähle der Geschichte nachspielen</p>
                </div>
                <div class="cases-grid">
                    ${mediumQuests.map(quest => `
                        <div class="case-card medium real-event" onclick="startCase('medium', '${quest.id}')">
                            <div class="real-badge">🌟 ECHTER VORFALL</div>
                            <h4>${quest.title}</h4>
                            <p>${quest.description}</p>
                            ${quest.realEvent ? `<div class="real-event-note">📰 ${quest.realEvent}</div>` : ''}
                            <div class="case-meta">
                                <span>⏱️ 25-35 Min</span>
                                <span>🎯 ${quest.difficulty}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="difficulty-section">
                <div class="difficulty-header hard">
                    <h3>🔴 Schwer - Cyberkrieg & Spionage</h3>
                    <p>Staatliche Cyberangriffe und internationale Cyber-Konflikte</p>
                </div>
                <div class="cases-grid">
                    ${hardQuests.map(quest => `
                        <div class="case-card hard real-event" onclick="startCase('hard', '${quest.id}')">
                            <div class="real-badge">� ECHTER VORFALL</div>
                            <h4>${quest.title}</h4>
                            <p>${quest.description}</p>
                            ${quest.realEvent ? `<div class="real-event-note">📰 ${quest.realEvent}</div>` : ''}
                            <div class="case-meta">
                                <span>⏱️ 35-50 Min</span>
                                <span>🎯 ${quest.difficulty}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="info-banner">
                <h3>💡 Warum echte Vorfälle?</h3>
                <p>Diese Quests basieren auf dokumentierten Cyberattacken. Sie lernen aus echten Fehlern und Erfolgen der Cybersecurity-Geschichte. Jede Entscheidung zeigt Ihnen, was in der Realität passiert ist!</p>
            </div>

            <div class="navigation">
                <button onclick="showMainMenu()" class="btn btn-secondary">🔙 Zurück zum Hauptmenü</button>
                <button onclick="showStoryLanding()" class="btn btn-tertiary">📚 Lustige Geschichten</button>
            </div>
        </div>
        
        <style>
        .hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            border-radius: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .hero-text {
            font-size: 1.2em;
            margin: 20px 0;
            opacity: 0.9;
        }
        
        .stats-bar {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 30px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            display: block;
            font-size: 2em;
            font-weight: bold;
            color: #ffd700;
        }
        
        .stat-label {
            font-size: 0.9em;
            opacity: 0.8;
        }
        
        .real-badge {
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.8em;
            font-weight: bold;
            margin-bottom: 10px;
            display: inline-block;
        }
        
        .real-event-note {
            background: rgba(255, 193, 7, 0.1);
            color: #856404;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.85em;
            margin: 10px 0;
            border-left: 3px solid #ffc107;
        }
        
        .case-card.real-event {
            border: 2px solid #ffd700;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }
        
        .case-card.real-event:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }
        
        .info-banner {
            background: linear-gradient(135deg, #00b4db, #0083b0);
            color: white;
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0;
            text-align: center;
        }
        
        .info-banner h3 {
            margin-bottom: 15px;
            color: #ffd700;
        }
        </style>
    `;
}

function showFunnyStories() {
    // Öffne die Landing-Page mit lustigen Geschichten
    window.open('landing_stories.html', '_blank');
}

function startCase(difficulty, caseId) {
    // Load the quest engine for real interactive adventures
    if (typeof questEngine === 'undefined') {
        const script = document.createElement('script');
        script.src = 'quest_engine.js';
        script.onload = () => {
            document.getElementById('content').innerHTML = '<div id="case-content"></div>';
            questEngine.startQuest(difficulty, caseId);
        };
        document.head.appendChild(script);
    } else {
        document.getElementById('content').innerHTML = '<div id="case-content"></div>';
        questEngine.startQuest(difficulty, caseId);
    }
}

function showCaseSelection() {
    showInteractiveCases();
}

function restartCase() {
    if (questEngine && questEngine.currentQuest) {
        questEngine.startQuest(
            questEngine.currentQuest.difficulty.toLowerCase(),
            questEngine.currentQuest.id
        );
    }
}

// Globale Analytics-Instanzen
const globalAnalytics = new LearningAnalytics();
const globalTeamManager = new TeamManager();
const globalCertificationManager = new CertificationManager();

// Analytics Dashboard Funktionen
function showAnalyticsDashboard() {
    const userId = engine.participantName || 'anonymous';
    const report = globalAnalytics.generateAnalyticsReport(userId);
    
    document.getElementById('content').innerHTML = `
        <div class="analytics-dashboard">
            <div class="dashboard-header">
                <h2>📊 Analytics Dashboard</h2>
                <div class="user-info">
                    <strong>${engine.participantName || 'Anonymer Benutzer'}</strong>
                    ${engine.ihkNumber ? `<br>IHK: ${engine.ihkNumber}` : ''}
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Gesamtüberblick</h3>
                    <div class="stat-number">${report.overview.totalQuestions}</div>
                    <div class="stat-label">Fragen beantwortet</div>
                </div>
                <div class="stat-card">
                    <h3>Genauigkeit</h3>
                    <div class="stat-number">${report.overview.accuracy}%</div>
                    <div class="stat-label">Richtige Antworten</div>
                </div>
                <div class="stat-card">
                    <h3>Lernzeit</h3>
                    <div class="stat-number">${report.overview.totalTimeMinutes}</div>
                    <div class="stat-label">Minuten</div>
                </div>
                <div class="stat-card">
                    <h3>Module</h3>
                    <div class="stat-number">${report.overview.modulesStarted}</div>
                    <div class="stat-label">Begonnen</div>
                </div>
            </div>

            <div class="analytics-sections">
                <div class="section">
                    <h3>📚 Modulfortschritt</h3>
                    <div class="module-progress">
                        ${Object.entries(report.moduleBreakdown).map(([moduleId, stats]) => `
                            <div class="module-item">
                                <div class="module-name">${getModuleName(moduleId)}</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${(stats.correct / stats.attempted * 100).toFixed(1)}%"></div>
                                </div>
                                <div class="module-stats">
                                    ${stats.correct}/${stats.attempted} (${(stats.correct / stats.attempted * 100).toFixed(1)}%)
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h3>⚠️ Verbesserungsbereiche</h3>
                    <div class="weak-areas">
                        ${report.weakAreas.length ? report.weakAreas.map(area => `
                            <div class="weakness-item">
                                <strong>${getModuleName(area.module)}</strong>
                                <p>${area.recommendation}</p>
                                <div class="accuracy">Aktuelle Genauigkeit: ${(area.accuracy * 100).toFixed(1)}%</div>
                            </div>
                        `).join('') : '<p>Keine Verbesserungsbereiche identifiziert! 🎉</p>'}
                    </div>
                </div>

                <div class="section">
                    <h3>💪 Stärken</h3>
                    <div class="strengths">
                        ${report.strengths.length ? report.strengths.map(strength => `
                            <div class="strength-item">
                                <strong>${getModuleName(strength.module)}</strong>
                                <div class="accuracy">Genauigkeit: ${(strength.accuracy * 100).toFixed(1)}%</div>
                            </div>
                        `).join('') : '<p>Absolvieren Sie mehr Module, um Ihre Stärken zu identifizieren.</p>'}
                    </div>
                </div>

                <div class="section">
                    <h3>🎯 Empfohlener Lernpfad</h3>
                    <div class="learning-path">
                        ${report.learningPath.length ? report.learningPath.map((item, index) => `
                            <div class="path-item priority-${item.priority}">
                                <div class="step-number">${index + 1}</div>
                                <div class="path-content">
                                    <strong>${getModuleName(item.module)}</strong>
                                    <p>${item.reason}</p>
                                    <button onclick="startModule('${item.module}')" class="btn btn-small">
                                        ${item.type === 'remediation' ? 'Wiederholen' : 'Starten'}
                                    </button>
                                </div>
                            </div>
                        `).join('') : '<p>Großartig! Kein spezifischer Lernpfad erforderlich.</p>'}
                    </div>
                </div>
            </div>

            <div class="dashboard-actions">
                <button onclick="showTeamDashboard()" class="btn btn-secondary">👥 Team-Ansicht</button>
                <button onclick="showCertifications()" class="btn btn-secondary">🏆 Zertifizierungen</button>
                <button onclick="exportReport()" class="btn btn-secondary">📄 Report exportieren</button>
                <button onclick="showModuleSelection()" class="btn btn-primary">🔙 Zurück zu Modulen</button>
            </div>
        </div>
    `;
}

function getModuleName(moduleId) {
    const moduleNames = {
        'lernfeld4': '📚 Lernfeld 4: IT-Systeme',
        'grundlagen': '🔒 IT-Sicherheit Grundlagen',
        'cloud': '☁️ Cloud Security',
        'compliance': '⚖️ Compliance & Recht',
        'monitoring': '📊 Monitoring & SIEM',
        'devsecops': '🛠️ DevSecOps',
        'mobile': '📱 Mobile Security',
        'industrial': '🏭 Industrial Security'
    };
    return moduleNames[moduleId] || moduleId;
}

function showTeamDashboard() {
    document.getElementById('content').innerHTML = `
        <div class="team-dashboard">
            <h2>👥 Team-Dashboard</h2>
            
            <div class="team-actions">
                <div class="create-team">
                    <h3>Neues Team erstellen</h3>
                    <input type="text" id="teamName" placeholder="Team-Name">
                    <input type="text" id="teamDescription" placeholder="Beschreibung">
                    <button onclick="createTeam()" class="btn btn-primary">Team erstellen</button>
                </div>
                
                <div class="join-team">
                    <h3>Team beitreten</h3>
                    <input type="text" id="joinTeamId" placeholder="Team-ID">
                    <button onclick="joinTeam()" class="btn btn-secondary">Beitreten</button>
                </div>
            </div>

            <div class="team-list">
                <h3>Meine Teams</h3>
                <div id="userTeams">
                    ${getUserTeams()}
                </div>
            </div>

            <button onclick="showAnalyticsDashboard()" class="btn btn-secondary">🔙 Zurück zu Analytics</button>
        </div>
    `;
}

function createTeam() {
    const name = document.getElementById('teamName').value;
    const description = document.getElementById('teamDescription').value;
    const userId = engine.participantName || 'anonymous';
    
    if (name) {
        const teamId = globalTeamManager.createTeam(name, description, userId);
        alert(`Team erstellt! Team-ID: ${teamId}`);
        showTeamDashboard();
    }
}

function joinTeam() {
    const teamId = document.getElementById('joinTeamId').value;
    const userId = engine.participantName || 'anonymous';
    
    if (globalTeamManager.joinTeam(teamId, userId)) {
        alert('Erfolgreich dem Team beigetreten!');
        showTeamDashboard();
    } else {
        alert('Team nicht gefunden oder bereits Mitglied.');
    }
}

function getUserTeams() {
    const userId = engine.participantName || 'anonymous';
    const userTeams = Object.values(globalTeamManager.teams).filter(team => 
        team.members.includes(userId)
    );
    
    if (userTeams.length === 0) {
        return '<p>Noch keine Teams. Erstellen Sie ein Team oder treten Sie einem bei!</p>';
    }
    
    return userTeams.map(team => `
        <div class="team-item">
            <h4>${team.name}</h4>
            <p>${team.description}</p>
            <p><strong>Team-ID:</strong> ${team.id}</p>
            <p><strong>Mitglieder:</strong> ${team.members.length}</p>
            <button onclick="showTeamLeaderboard('${team.id}')" class="btn btn-small">Rangliste anzeigen</button>
        </div>
    `).join('');
}

function showTeamLeaderboard(teamId) {
    const leaderboard = globalTeamManager.getTeamLeaderboard(teamId);
    const team = globalTeamManager.teams[teamId];
    
    document.getElementById('content').innerHTML = `
        <div class="team-leaderboard">
            <h2>🏆 ${team.name} - Rangliste</h2>
            
            <div class="leaderboard">
                ${leaderboard.map((member, index) => `
                    <div class="leaderboard-item rank-${index + 1}">
                        <div class="rank">#${index + 1}</div>
                        <div class="member-info">
                            <strong>${member.userName}</strong>
                            <small>${member.questionsAnswered} Fragen</small>
                        </div>
                        <div class="score">${member.score}%</div>
                    </div>
                `).join('')}
            </div>

            <button onclick="showTeamDashboard()" class="btn btn-secondary">🔙 Zurück zu Teams</button>
        </div>
    `;
}

function showCertifications() {
    const userId = engine.participantName || 'anonymous';
    
    document.getElementById('content').innerHTML = `
        <div class="certifications">
            <h2>🏆 Zertifizierungen</h2>
            
            <div class="certification-options">
                ${Object.entries(globalCertificationManager.certificationCriteria).map(([certId, cert]) => {
                    const eligibility = globalCertificationManager.checkEligibility(userId, certId);
                    const progress = eligibility.progress;
                    
                    return `
                        <div class="certification-card ${eligibility.eligible ? 'eligible' : 'not-eligible'}">
                            <h3>${cert.name}</h3>
                            <p>${cert.description}</p>
                            
                            <div class="requirements">
                                <h4>Anforderungen:</h4>
                                <ul>
                                    <li>Module: ${cert.requirements.modules.map(m => getModuleName(m)).join(', ')}</li>
                                    <li>Mindestgenauigkeit: ${cert.requirements.minAccuracy}%</li>
                                    <li>Mindestfragen: ${cert.requirements.minQuestions}</li>
                                </ul>
                            </div>
                            
                            <div class="progress-section">
                                <div class="progress-item">
                                    <label>Modulfortschritt:</label>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${progress?.moduleProgress || 0}%"></div>
                                    </div>
                                    <span>${(progress?.moduleProgress || 0).toFixed(1)}%</span>
                                </div>
                                <div class="progress-item">
                                    <label>Fragenfortschritt:</label>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${progress?.questionProgress || 0}%"></div>
                                    </div>
                                    <span>${(progress?.questionProgress || 0).toFixed(1)}%</span>
                                </div>
                            </div>
                            
                            ${eligibility.eligible ? 
                                `<button onclick="awardCertificate('${certId}')" class="btn btn-primary">Zertifikat erhalten</button>` :
                                `<div class="issues">
                                    <h4>Noch zu erfüllen:</h4>
                                    <ul>${eligibility.issues.map(issue => `<li>${issue}</li>`).join('')}</ul>
                                </div>`
                            }
                        </div>
                    `;
                }).join('')}
            </div>

            <button onclick="showAnalyticsDashboard()" class="btn btn-secondary">🔙 Zurück zu Analytics</button>
        </div>
    `;
}

function awardCertificate(certificationId) {
    const userId = engine.participantName || 'anonymous';
    const result = globalCertificationManager.awardCertificate(userId, certificationId);
    
    if (result.success) {
        alert(`Herzlichen Glückwunsch! Sie haben das Zertifikat "${result.certificate.name}" erhalten!\n\nVerifizierungscode: ${result.certificate.verification}`);
        showCertifications();
    } else {
        alert(`Zertifizierung fehlgeschlagen: ${result.reason}`);
    }
}

function exportReport() {
    const userId = engine.participantName || 'anonymous';
    const report = globalAnalytics.generateAnalyticsReport(userId);
    
    const exportData = {
        user: {
            name: engine.participantName,
            ihkNumber: engine.ihkNumber,
            exportDate: new Date().toISOString()
        },
        analytics: report
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cybersecurity_report_${userId}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

// Modulauswahl-Funktionen erweitern
function showModuleSelection() {
    document.getElementById('content').innerHTML = `
        <div class="main-content">
            <h2>🎯 Lernmodule auswählen</h2>
            <p>Wählen Sie ein Modul zum Lernen oder nutzen Sie die erweiterten Features:</p>
            
            <div class="feature-grid">
                <div class="feature-card" onclick="startModule('lernfeld4')">
                    <div class="feature-icon">📚</div>
                    <h3>Lernfeld 4: IT-Systeme</h3>
                    <p>OSI-Modell, Netzwerkgeräte, IP-Adressierung, DHCP</p>
                </div>

                <div class="feature-card" onclick="startModule('grundlagen')">
                    <div class="feature-icon">🔒</div>
                    <h3>IT-Sicherheit Grundlagen</h3>
                    <p>CIA-Triade, BSI IT-Grundschutz, Sicherheitsprinzipien</p>
                </div>

                <div class="feature-card" onclick="startModule('cloud')">
                    <div class="feature-icon">☁️</div>
                    <h3>Cloud Security</h3>
                    <p>Shared Responsibility, CASB, Cloud-Governance</p>
                </div>

                <div class="feature-card" onclick="startModule('compliance')">
                    <div class="feature-icon">⚖️</div>
                    <h3>Compliance & Recht</h3>
                    <p>DSGVO, KRITIS, Datenschutz-Meldepflichten</p>
                </div>

                <div class="feature-card" onclick="startModule('monitoring')">
                    <div class="feature-icon">📊</div>
                    <h3>Monitoring & SIEM</h3>
                    <p>Security Information Event Management, SOC</p>
                </div>

                <div class="feature-card" onclick="startModule('devsecops')">
                    <div class="feature-icon">🛠️</div>
                    <h3>DevSecOps</h3>
                    <p>Shift Left Security, Secure Development, CI/CD</p>
                </div>

                <div class="feature-card" onclick="startModule('mobile')">
                    <div class="feature-icon">📱</div>
                    <h3>Mobile Security</h3>
                    <p>MDM/MAM, App Security, Mobile Threat Defense</p>
                </div>

                <div class="feature-card" onclick="startModule('industrial')">
                    <div class="feature-icon">🏭</div>
                    <h3>Industrial Security</h3>
                    <p>OT vs IT Security, SCADA, Industrial IoT</p>
                </div>
            </div>

            <div class="advanced-features">
                <h3>🚀 Erweiterte Features</h3>
                <div class="feature-grid">
                    <div class="feature-card" onclick="showAnalyticsDashboard()">
                        <div class="feature-icon">📈</div>
                        <h3>Analytics Dashboard</h3>
                        <p>Lernfortschritt und Empfehlungen</p>
                    </div>

                    <div class="feature-card" onclick="showTeamDashboard()">
                        <div class="feature-icon">👥</div>
                        <h3>Team-Modus</h3>
                        <p>Gemeinsam lernen und konkurrieren</p>
                    </div>

                    <div class="feature-card" onclick="showCertifications()">
                        <div class="feature-icon">🏆</div>
                        <h3>Zertifizierungen</h3>
                        <p>Offizielle Kompetenznachweise</p>
                    </div>
                </div>
            </div>

            <button onclick="showMainMenu()" class="btn btn-secondary">🔙 Zurück zum Hauptmenü</button>
        </div>
    `;
}

function showMainMenu() {
    // Zurück zur Hauptansicht
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById('main-screen').classList.add('active');
}

// Integration in bestehende Engine
const originalAnswerQuestion = engine.answerQuestion;
engine.answerQuestion = function(selectedAnswer) {
    const startTime = this.questionStartTime || Date.now();
    const timeSpent = (Date.now() - startTime) / 1000; // in Sekunden
    
    const result = originalAnswerQuestion.call(this, selectedAnswer);
    
    // Analytics tracking
    const userId = this.participantName || 'anonymous';
    const moduleId = this.currentModule;
    const questionId = this.currentModule + '_' + this.currentQuestionIndex;
    const correct = selectedAnswer === this.currentQuestions[this.currentQuestionIndex].correct;
    
    globalAnalytics.trackQuestionAttempt(userId, moduleId, questionId, correct, timeSpent);
    
    return result;
};
