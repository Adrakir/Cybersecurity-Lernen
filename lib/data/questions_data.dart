import '../models/question.dart';

class QuestionsData {
  // Story-Elemente für Feedback
  static Map<String, Map<String, List<String>>> getStoryElements() {
    return {
      "IT-Systeme und Netzwerktechnik": {
        "richtig": [
          "✅ Perfekt! Dein Chef nickt anerkennend. Das System läuft optimal.",
          "✅ Ausgezeichnet! Die Netzwerkkomponenten sind korrekt konfiguriert.",
          "✅ Sehr gut! Die Hardware-Auswahl war genau richtig für diese Anforderung.",
          "✅ Hervorragend! Der Server antwortet wie erwartet.",
          "✅ Klasse! Die Virtualisierung funktioniert einwandfrei.",
          "✅ Super! Alle Systeme sind online und laufen stabil."
        ],
        "falsch": [
          "❌ Das System läuft langsamer als erwartet. Eine Korrektur wird nötig.",
          "❌ Die Netzwerkkonfiguration muss überarbeitet werden. Das kostet Zeit.",
          "❌ Ein Hardware-Problem tritt auf. Nachbesserungen sind erforderlich.",
          "❌ Der Server antwortet nicht korrekt. Fehlersuche ist notwendig.",
          "❌ Die Konfiguration muss angepasst werden. Das Projekt verzögert sich.",
          "❌ Ein kritischer Fehler wurde entdeckt. Sofortige Behebung erforderlich."
        ]
      },
      "Wirtschafts- und Geschäftsprozesse": {
        "richtig": [
          "✅ Der Kunde ist begeistert von deinem professionellen Auftreten!",
          "✅ Hervorragend! Der Vertrag wird ohne Verzögerung unterzeichnet.",
          "✅ Perfekte Bedarfsanalyse! Alle Anforderungen sind dokumentiert.",
          "✅ Exzellent! Das Projekt liegt im Zeit- und Budgetrahmen.",
          "✅ Großartig! Der Kunde empfiehlt dich bereits weiter.",
          "✅ Sehr professionell! Die Geschäftsbeziehung ist gestärkt."
        ],
        "falsch": [
          "❌ Der Kunde ist verunsichert. Nachverhandlungen werden nötig.",
          "❌ Das Budget wird überschritten. Eine Neuplanung ist erforderlich.",
          "❌ Missverständnisse bei den Anforderungen verzögern das Projekt.",
          "❌ Der Projektstart verschiebt sich um mehrere Wochen.",
          "❌ Zusätzliche Beratungsrunden werden notwendig.",
          "❌ Die Kundenzufriedenheit sinkt. Schadensbegrenzung ist nötig."
        ]
      },
      "IT-Sicherheit und Datenschutz": {
        "richtig": [
          "🛡️ Exzellent! Das Sicherheitskonzept überzeugt vollständig.",
          "🛡️ Hervorragend! Alle Compliance-Anforderungen sind erfüllt.",
          "🛡️ Perfekt! Die Sicherheitslücken sind geschlossen.",
          "🛡️ Ausgezeichnet! Der Penetrationstest zeigt keine Schwachstellen.",
          "🛡️ Brilliant! Das Unternehmen ist optimal geschützt.",
          "🛡️ Sehr gut! Die Sicherheitsrichtlinien sind implementiert."
        ],
        "falsch": [
          "⚠️ Sicherheitslücken entdeckt! Sofortige Nachbesserung erforderlich.",
          "⚠️ Ein Cyberangriff war erfolgreich. Das System muss gehärtet werden.",
          "⚠️ Compliance-Verstöße festgestellt. Rechtliche Probleme drohen.",
          "⚠️ Das Backup ist kompromittiert. Datenwiederherstellung fraglich.",
          "⚠️ Insider-Bedrohung erkannt. Zusätzliche Kontrollen sind nötig.",
          "⚠️ Schwerwiegende Datenschutzverletzung! Behörden werden informiert."
        ]
      }
    };
  }

  // Alle Fragen aus der Python-Version
  static List<Question> getAllQuestions() {
    return [
      // IT-Systeme und Netzwerktechnik
      Question(
        id: 'it_001',
        question: 'Dein Chef fragt dich nach der wichtigsten Komponente, die temporäre Daten speichert, während der PC läuft. Welche nennst du?',
        options: ['A) SSD', 'B) HDD', 'C) RAM', 'D) CPU'],
        correctAnswer: 'C',
        category: 'IT-Systeme und Netzwerktechnik',
        imagePath: 'assets/images/ram_memory.png',
        explanation: 'RAM (Random Access Memory) ist der Arbeitsspeicher, der temporäre Daten für laufende Programme speichert.',
      ),
      Question(
        id: 'it_002',
        question: 'Die Rechner der neuen Abteilung müssen ins Netzwerk. Welches Protokoll hilft, ihnen automatisch IP-Adressen zuzuweisen?',
        options: ['A) HTTP', 'B) FTP', 'C) DHCP', 'D) DNS'],
        correctAnswer: 'C',
        category: 'IT-Systeme und Netzwerktechnik',
        imagePath: 'assets/images/dhcp_network.png',
        explanation: 'DHCP (Dynamic Host Configuration Protocol) weist automatisch IP-Adressen zu.',
      ),
      Question(
        id: 'it_003',
        question: 'Ein Kollege beschwert sich, dass er einen Server nicht erreichen kann. Welchen Kommandozeilenbefehl nutzt du, um die Verbindung zu testen?',
        options: ['A) ipconfig', 'B) traceroute', 'C) ping', 'D) netstat'],
        correctAnswer: 'C',
        category: 'IT-Systeme und Netzwerktechnik',
        imagePath: 'assets/images/ping_command.png',
        explanation: 'Ping sendet ICMP-Pakete an einen Host und misst die Antwortzeit.',
      ),

      // Wirtschafts- und Geschäftsprozesse  
      Question(
        id: 'wp_001',
        question: 'Der Kunde wünscht eine maßgeschneiderte Software. Welche Vertragsart schlägst du vor, um die Lieferung des fertigen Produkts zu garantieren?',
        options: ['A) Kaufvertrag', 'B) Dienstvertrag', 'C) Werkvertrag', 'D) Mietvertrag'],
        correctAnswer: 'C',
        category: 'Wirtschafts- und Geschäftsprozesse',
        imagePath: 'assets/images/contract_signing.png',
        explanation: 'Ein Werkvertrag garantiert die Lieferung eines fertigen Werks (Software).',
      ),
      Question(
        id: 'wp_002',
        question: 'Du triffst den Kunden, um seine genauen Wünsche zu verstehen. Wie nennst du diese Phase des Projekts?',
        options: ['A) Angebotserstellung', 'B) Bedarfsanalyse', 'C) Marktanalyse', 'D) Teambesprechung'],
        correctAnswer: 'B',
        category: 'Wirtschafts- und Geschäftsprozesse',
        imagePath: 'assets/images/requirements_analysis.png',
        explanation: 'Bei der Bedarfsanalyse werden die genauen Anforderungen des Kunden ermittelt.',
      ),

      // IT-Sicherheit und Datenschutz
      Question(
        id: 'sec_001',
        question: 'Der Kunde fragt, wie die Daten vor unbefugtem Zugriff geschützt werden. Welche der drei Schutzziele der Informationssicherheit ist hier am wichtigsten?',
        options: ['A) Verfügbarkeit', 'B) Vertraulichkeit', 'C) Integrität', 'D) Authentizität'],
        correctAnswer: 'B',
        category: 'IT-Sicherheit und Datenschutz',
        imagePath: 'assets/images/data_protection.png',
        explanation: 'Vertraulichkeit schützt Daten vor unbefugtem Zugriff.',
      ),
      Question(
        id: 'sec_002',
        question: 'Um das Netzwerk des Kunden vor externen Angriffen zu schützen, empfiehlst du ein spezielles Tool. Welches ist das?',
        options: ['A) Virenschutz', 'B) Firewall', 'C) Festplattenverschlüsselung', 'D) VPN'],
        correctAnswer: 'B',
        category: 'IT-Sicherheit und Datenschutz',
        imagePath: 'assets/images/firewall_protection.png',
        explanation: 'Eine Firewall kontrolliert den Netzwerkverkehr und blockiert unerwünschte Verbindungen.',
      ),
      Question(
        id: 'sec_003',
        question: 'Ein Mitarbeiter erhält eine verdächtige E-Mail mit einem Anhang. Welche Malware-Art versteckt sich häufig in Office-Dokumenten?',
        options: ['A) Trojaner', 'B) Wurm', 'C) Makro-Virus', 'D) Rootkit'],
        correctAnswer: 'C',
        category: 'IT-Sicherheit und Datenschutz',
        imagePath: 'assets/images/macro_virus.png',
        explanation: 'Makro-Viren nutzen VBA-Makros in Office-Dokumenten zur Ausführung von Schadcode.',
      ),
    ];
  }
}
