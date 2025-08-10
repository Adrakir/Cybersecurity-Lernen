# IT-Sicherheit Lernspiel - Flutter Mobile App

Eine interaktive mobile Anwendung für angehende Fachinformatiker zum Lernen von IT-Sicherheit, Netzwerktechnik und Geschäftsprozessen.

## 🚀 Features

- **3 Lernphasen**: IT-Infrastruktur, Kundenberatung, IT-Sicherheit
- **100+ Fragen** zu allen relevanten Themen
- **Interaktive Story**: Jede Antwort beeinflusst das Projektergebnis
- **Grafische Oberfläche** mit Animationen und visuellen Elementen
- **Fortschritts-Tracking** mit detaillierter Statistik
- **Cross-Platform**: Läuft auf iOS und Android
- **Web-Version**: HTML/CSS/JavaScript-basierte Browser-Version verfügbar
- **Detaillierte Statistiken**: Umfassende Lernanalyse und Schwachstellenerkennung
- **Lösungsanzeige**: Ausführliche Erklärungen zu allen Fragen

## 🛠️ Installation

### Voraussetzungen

1. **Flutter SDK installieren**:
   ```bash
   # Windows (mit PowerShell als Administrator)
   git clone https://github.com/flutter/flutter.git -b stable
   # Flutter zum PATH hinzufügen
   
   # Überprüfung
   flutter doctor
   ```

2. **Android Studio oder VS Code** mit Flutter-Extension

3. **Gerät/Emulator** für Tests

### App installieren

1. **Projekt klonen**:
   ```bash
   git clone <repository-url>
   cd Flutter
   ```

2. **Dependencies installieren**:
   ```bash
   flutter pub get
   ```

3. **Mobile App starten**:
   ```bash
   flutter run
   ```

4. **Web-Version starten**:
   ```bash
   cd web_version
   # Öffnen Sie cybersecurity_training.html in einem Browser
   start cybersecurity_training.html    # Windows
   open cybersecurity_training.html     # macOS
   xdg-open cybersecurity_training.html # Linux
   ```

## 📱 Projekt-Struktur

```
Flutter/
├── .github/
│   └── copilot-instructions.md    # Projekt-Dokumentation
├── lib/                           # Flutter Mobile App
│   ├── main.dart                  # App-Einstiegspunkt
│   ├── models/
│   │   └── question.dart          # Datenmodelle
│   ├── providers/
│   │   └── game_provider.dart     # State Management
│   ├── screens/
│   │   ├── home_screen.dart       # Startbildschirm
│   │   ├── game_screen.dart       # Spielbildschirm
│   │   └── results_screen.dart    # Ergebnisbildschirm
│   ├── widgets/
│   │   ├── question_card.dart     # Fragen-Widget
│   │   ├── progress_indicator.dart # Fortschrittsanzeige
│   │   └── story_feedback.dart    # Story-Feedback
│   └── data/
│       └── questions_data.dart    # Fragen-Datenbank
├── web_version/                   # Browser-Version
│   ├── cybersecurity_training.html # Haupt-HTML-Datei
│   ├── game.js                    # Spiel-Logik
│   ├── quiz_statistics.js         # Statistik-Engine
│   ├── detailed_solutions.js      # Lösungsanzeige
│   ├── extended_modules.js        # Erweiterte Module
│   ├── comprehensive_quizzes.js   # Umfangreiche Quiz-Datenbank
│   └── styles.css                 # Styling
├── assets/                        # Bilder und Medien
├── pubspec.yaml                   # Flutter-Abhängigkeiten
└── README.md                      # Projekt-Dokumentation
```

## 🎮 Spielablauf

1. **Willkommensbildschirm**: Übersicht und Spielstart
2. **Phase 1 - IT-Infrastruktur**: Hardware und Netzwerk
3. **Phase 2 - Kundenberatung**: Geschäftsprozesse und Verträge
4. **Phase 3 - IT-Sicherheit**: Sicherheitskonzepte und -maßnahmen
5. **Ergebnisbildschirm**: Auswertung und Bewertung

## 🎨 Design-Elemente

- **Material Design** mit benutzerdefinierten Farben
- **Animationen** für bessere User Experience
- **Phasen-spezifische Farben**:
  - Blau: IT-Systeme
  - Grün: Geschäftsprozesse  
  - Rot: IT-Sicherheit
- **Responsive Layout** für verschiedene Bildschirmgrößen

## 📊 Bewertungssystem

- **Richtige Antworten**: Projekt beschleunigt sich
- **Falsche Antworten**: Zeitverzögerungen
- **Finale Bewertung**:
  - 90%+: Hervorragend 🏆
  - 80%+: Sehr gut ✅
  - 70%+: Gut 👍
  - <70%: Übung nötig ⚠️

## 🔧 Technologien

### Mobile App (Flutter)
- **Flutter/Dart**: Cross-Platform Framework
- **Provider**: State Management
- **Google Fonts**: Typography
- **Flutter Animate**: Animationen
- **Material Design**: UI Components

### Web-Version
- **HTML5/CSS3**: Moderne Web-Standards
- **JavaScript ES6+**: Interaktive Logik
- **Local Storage**: Browser-basierte Datenspeicherung
- **Responsive Design**: Mobile-First Ansatz
- **QuizStatisticsEngine**: Erweiterte Lernanalyse
- **DetailedSolutionsEngine**: Umfassende Lösungsanzeige

## 📈 Erweiterungsmöglichkeiten

- **Datenbank-Integration**: SQLite für Fortschritt
- **Online-Modus**: Cloud-Synchronisation
- **Multimedia**: Videos und Audioinhalte
- **Gamification**: Achievements und Leaderboards
- **Adaptive Learning**: Personalisierte Schwierigkeit

## 🚧 Development

### Commands

```bash
# Git Repository verwalten
git add .
git commit -m "Commit-Nachricht"
git push origin main

# Flutter Mobile App
flutter pub get                    # Dependencies installieren
flutter run                        # App für Debug starten
flutter build apk                  # Android Release Build
flutter build ios                  # iOS Release Build
flutter test                       # Tests ausführen
flutter analyze                    # Code analysieren

# Web-Version
cd web_version
start cybersecurity_training.html  # Windows - Browser öffnen
python -m http.server 8000         # Lokaler Server (optional)
```

### Struktur erweitern

Neue Fragen hinzufügen in `lib/data/questions_data.dart`:

```dart
Question(
  id: 'unique_id',
  question: 'Ihre Frage hier...',
  options: ['A) Option 1', 'B) Option 2', 'C) Option 3', 'D) Option 4'],
  correctAnswer: 'A',
  category: 'IT-Sicherheit und Datenschutz',
  imagePath: 'assets/images/bild.png',
  explanation: 'Erklärung der richtigen Antwort...',
),
```

## 📄 Lizenz

Dieses Projekt ist für Bildungszwecke erstellt.
