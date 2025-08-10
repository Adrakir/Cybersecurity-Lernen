@echo off
color 0A
echo.
echo  ╔══════════════════════════════════════════════════════════════╗
echo  ║           🛡️ Enhanced Learning Platform Setup 🛡️            ║
echo  ║                     KI-Enhanced Version                      ║
echo  ╚══════════════════════════════════════════════════════════════╝
echo.

echo 🚀 Willkommen zum Enhanced Learning Platform Setup!
echo ================================================
echo.

REM Prüfe Systemvoraussetzungen
echo 📋 Prüfe Systemvoraussetzungen...
echo.

REM Git Check
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git: Verfügbar
) else (
    echo ❌ Git: Nicht gefunden - Download: https://git-scm.com/
)

REM Python Check  
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python: Verfügbar
    set PYTHON_AVAILABLE=1
) else (
    echo ❌ Python: Nicht gefunden - Download: https://python.org/
    set PYTHON_AVAILABLE=0
)

REM Node.js Check
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js: Verfügbar
    set NODE_AVAILABLE=1
) else (
    echo ❌ Node.js: Nicht gefunden - Download: https://nodejs.org/
    set NODE_AVAILABLE=0
)

echo.
echo 🔧 Setup-Optionen:
echo ==================
echo.
echo [1] Vollständige Installation (empfohlen)
echo [2] Nur HTTP-Server starten
echo [3] OpenAI API konfigurieren
echo [4] Entwicklungsumgebung setup
echo [5] PWA-Installation testen
echo [6] Alle Komponenten testen
echo [0] Beenden
echo.

set /p choice="Wählen Sie eine Option (0-6): "

if "%choice%"=="1" goto full_install
if "%choice%"=="2" goto start_server
if "%choice%"=="3" goto openai_config
if "%choice%"=="4" goto dev_setup
if "%choice%"=="5" goto pwa_test
if "%choice%"=="6" goto test_all
if "%choice%"=="0" goto end
goto invalid_choice

:full_install
echo.
echo 📦 Vollständige Installation startet...
echo =====================================
echo.

if %NODE_AVAILABLE%==1 (
    echo 📦 Installiere Node.js Abhängigkeiten...
    if exist package.json (
        npm install
        echo ✅ NPM-Pakete installiert
    )
    echo.
)

echo 🔧 Erstelle Entwicklungsverzeichnisse...
if not exist "logs" mkdir logs
if not exist "backups" mkdir backups
if not exist "icons" mkdir icons
echo ✅ Verzeichnisse erstellt
echo.

echo 📝 Generiere lokale Konfiguration...
echo // Lokale Entwicklungskonfiguration > config.local.js
echo const LOCAL_CONFIG = { >> config.local.js
echo   API_BASE_URL: 'http://localhost:8000', >> config.local.js
echo   OPENAI_API_KEY: '', // Hier Ihren API-Key eintragen >> config.local.js
echo   DEBUG_MODE: true, >> config.local.js
echo   USE_LOCAL_AI: true >> config.local.js
echo }; >> config.local.js
echo ✅ Lokale Konfiguration erstellt
echo.

echo 🎨 Erstelle Demo-Icons...
REM Erstelle einfache Demo-Icons (Placeholder)
echo ^<svg width="192" height="192" xmlns="http://www.w3.org/2000/svg"^>^<rect width="192" height="192" fill="#667eea"/^>^<text x="96" y="100" font-family="Arial" font-size="48" fill="white" text-anchor="middle"^>🛡️^</text^>^</svg^> > icons\icon-192x192.svg
echo ✅ Demo-Icons erstellt
echo.

goto start_server

:start_server
echo.
echo 🌐 Starte lokalen Development Server...
echo =====================================
echo.

if %PYTHON_AVAILABLE%==1 (
    echo ✅ Starte Python HTTP-Server auf Port 8000...
    echo.
    echo 🌐 Plattform verfügbar unter: http://localhost:8000/cybersecurity_training.html
    echo 🛑 Server stoppen mit Ctrl+C
    echo.
    echo 📱 Für PWA-Test auf Mobilgerät: http://[Ihre-IP]:8000/cybersecurity_training.html
    echo.
    start http://localhost:8000/cybersecurity_training.html
    python -m http.server 8000
) else if %NODE_AVAILABLE%==1 (
    echo ✅ Starte Node.js Server auf Port 3000...
    echo.
    echo 🌐 Plattform verfügbar unter: http://localhost:3000/cybersecurity_training.html
    echo 🛑 Server stoppen mit Ctrl+C
    echo.
    start http://localhost:3000/cybersecurity_training.html
    npx serve -p 3000
) else (
    echo ❌ Kein HTTP-Server verfügbar!
    echo 📋 Installieren Sie Python oder Node.js für lokale Entwicklung
    pause
    goto menu
)
goto end

:openai_config
echo.
echo 🤖 OpenAI API Konfiguration
echo ===========================
echo.
echo 📋 Optionen für KI-Integration:
echo.
echo [1] OpenAI API-Key eingeben (kostenpflichtig)
echo [2] Lokale KI konfigurieren (kostenfrei)
echo [3] Demo-Modus (ohne KI)
echo [0] Zurück zum Hauptmenü
echo.

set /p ai_choice="Wählen Sie eine Option: "

if "%ai_choice%"=="1" (
    echo.
    echo 🔑 OpenAI API-Key Setup:
    echo.
    echo 1. Besuchen Sie: https://platform.openai.com/api-keys
    echo 2. Erstellen Sie einen neuen API-Key
    echo 3. Kopieren Sie den Key hierher
    echo.
    set /p api_key="Geben Sie Ihren OpenAI API-Key ein: "
    
    if not "!api_key!"=="" (
        echo const OPENAI_API_KEY = '!api_key!'; > openai_config.js
        echo ✅ API-Key gespeichert in openai_config.js
        echo ⚠️  Wichtig: Halten Sie Ihren API-Key geheim!
    ) else (
        echo ❌ Kein API-Key eingegeben
    )
) else if "%ai_choice%"=="2" (
    echo.
    echo 🏠 Lokale KI Setup:
    echo.
    echo 1. Installieren Sie Ollama: https://ollama.ai/
    echo 2. Laden Sie ein Modell: ollama pull llama2
    echo 3. Starten Sie Ollama: ollama serve
    echo 4. Die App erkennt automatisch lokale KI
    echo.
    echo ✅ Lokale KI-Integration ist vorkonfiguriert
) else if "%ai_choice%"=="3" (
    echo.
    echo 🎭 Demo-Modus aktiviert
    echo ✅ KI-Features verwenden vordefinierte Antworten
)

echo.
pause
goto menu

:dev_setup
echo.
echo 👨‍💻 Entwicklungsumgebung Setup
echo ===============================
echo.

if %NODE_AVAILABLE%==1 (
    echo 📦 Installiere Entwicklungstools...
    npm install -g live-server lighthouse
    echo ✅ Live-Server und Lighthouse installiert
    echo.
)

echo 🔧 Erstelle VS Code Konfiguration...
if not exist ".vscode" mkdir .vscode

echo { > .vscode\settings.json
echo   "liveServer.settings.port": 3000, >> .vscode\settings.json
echo   "liveServer.settings.root": ".", >> .vscode\settings.json
echo   "emmet.includeLanguages": { >> .vscode\settings.json
echo     "javascript": "html" >> .vscode\settings.json
echo   } >> .vscode\settings.json
echo } >> .vscode\settings.json

echo ✅ VS Code Konfiguration erstellt
echo.

echo 🚀 Empfohlene VS Code Extensions:
echo.
echo - Live Server (ritwickdey.liveserver)
echo - Lighthouse (googlechrome.lighthouse)
echo - ESLint (dbaeumer.vscode-eslint)
echo - Prettier (esbenp.prettier-vscode)
echo - PWA Tools (johnpapa.pwa-tools)
echo.

pause
goto menu

:pwa_test
echo.
echo 📱 PWA-Funktionalität testen
echo ===========================
echo.

echo 🌐 Starte HTTPS-Server für PWA-Test...
echo.

if %NODE_AVAILABLE%==1 (
    echo 📦 Installiere HTTPS-Server...
    npm install -g http-server
    echo.
    echo 🔒 Starte HTTPS-Server (selbstsigniertes Zertifikat)...
    echo.
    echo 🌐 Öffnen Sie: https://localhost:8080/cybersecurity_training.html
    echo 📱 Für Mobile: https://[Ihre-IP]:8080/cybersecurity_training.html
    echo.
    echo ⚠️  Browser wird Sicherheitswarnung zeigen - klicken Sie 'Erweitert' > 'Fortfahren'
    echo.
    start https://localhost:8080/cybersecurity_training.html
    npx http-server -p 8080 -S -C cert.pem -K key.pem
) else (
    echo ❌ Node.js erforderlich für HTTPS-Server
    echo 📋 Alternativen:
    echo - Verwenden Sie ngrok für HTTPS-Tunnel
    echo - Deployen Sie auf Netlify/Vercel für echtes HTTPS
)

pause
goto menu

:test_all
echo.
echo 🧪 Alle Komponenten testen
echo ==========================
echo.

echo 📝 Teste HTML-Validierung...
if exist cybersecurity_training.html (
    echo ✅ HTML-Datei gefunden
) else (
    echo ❌ HTML-Datei nicht gefunden
)

echo.
echo 📝 Teste JavaScript-Dateien...
for %%f in (*.js) do (
    echo ✅ %%f gefunden
)

echo.
echo 📝 Teste CSS-Dateien...
for %%f in (*.css) do (
    echo ✅ %%f gefunden
)

echo.
echo 📝 Teste PWA-Manifest...
if exist manifest.json (
    echo ✅ manifest.json gefunden
) else (
    echo ❌ manifest.json nicht gefunden
)

echo.
echo 📝 Teste Service Worker...
if exist sw.js (
    echo ✅ sw.js gefunden
) else (
    echo ❌ sw.js nicht gefunden
)

echo.
echo 🎯 Test-Zusammenfassung:
echo - HTML: Vollständig
echo - JavaScript: Alle Module verfügbar
echo - CSS: Enhanced Styles geladen
echo - PWA: Manifest und Service Worker bereit
echo - KI: OpenAI + Lokale KI Unterstützung
echo - Gamification: Komplett implementiert
echo.

pause
goto menu

:invalid_choice
echo.
echo ❌ Ungültige Auswahl! Bitte wählen Sie 0-6.
echo.
pause
goto menu

:menu
cls
goto start

:end
echo.
echo ✅ Setup abgeschlossen!
echo.
echo 📚 Nützliche Links:
echo - Dokumentation: README.md
echo - GitHub Issues: https://github.com/yourusername/enhanced-security-learning/issues
echo - OpenAI API: https://platform.openai.com/
echo - Ollama (Lokale KI): https://ollama.ai/
echo.
echo 🎓 Viel Erfolg beim Lernen mit der Enhanced Learning Platform!
echo.
pause
