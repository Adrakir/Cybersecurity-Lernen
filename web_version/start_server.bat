@echo off
echo 🚀 Enhanced Learning Platform - Local Development Server
echo ================================================
echo.

REM Prüfe ob Python verfügbar ist
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python gefunden - Starte Server auf Port 8000...
    echo.
    echo 🌐 Öffnen Sie: http://localhost:8000/cybersecurity_training.html
    echo 🛑 Stoppen mit Ctrl+C
    echo.
    python -m http.server 8000
    goto :end
)

REM Prüfe ob Node.js verfügbar ist
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js gefunden - Installiere serve wenn nötig...
    npm list -g serve >nul 2>&1
    if %errorlevel% neq 0 (
        echo 📦 Installiere 'serve' global...
        npm install -g serve
    )
    echo 🌐 Starte Server auf Port 3000...
    echo.
    echo 🌐 Öffnen Sie: http://localhost:3000/cybersecurity_training.html
    echo 🛑 Stoppen mit Ctrl+C
    echo.
    serve -p 3000
    goto :end
)

REM Fallback Information
echo ❌ Weder Python noch Node.js gefunden!
echo.
echo 📋 Bitte installieren Sie eine der folgenden Optionen:
echo.
echo 1. Python (empfohlen):
echo    - Download: https://python.org/downloads/
echo    - Nach Installation: python -m http.server 8000
echo.
echo 2. Node.js:
echo    - Download: https://nodejs.org/
echo    - Nach Installation: npx serve -p 3000
echo.
echo 3. Alternative HTTP-Server:
echo    - Live Server (VS Code Extension)
echo    - XAMPP, WAMP, MAMP
echo    - Browser Extensions für lokale Dateien
echo.
echo 💡 Für PWA-Features wird HTTPS benötigt (nur in Produktion)
echo.

:end
pause
