#!/bin/bash

echo "🚀 Enhanced Learning Platform - Local Development Server"
echo "================================================"
echo ""

# Prüfe ob Python verfügbar ist
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 gefunden - Starte Server auf Port 8000..."
    echo ""
    echo "🌐 Öffnen Sie: http://localhost:8000/cybersecurity_training.html"
    echo "🛑 Stoppen mit Ctrl+C"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python gefunden - Starte Server auf Port 8000..."
    echo ""
    echo "🌐 Öffnen Sie: http://localhost:8000/cybersecurity_training.html"
    echo "🛑 Stoppen mit Ctrl+C"
    echo ""
    python -m http.server 8000
# Prüfe ob Node.js verfügbar ist
elif command -v node &> /dev/null; then
    echo "✅ Node.js gefunden - Installiere serve wenn nötig..."
    if ! command -v serve &> /dev/null; then
        echo "📦 Installiere 'serve' global..."
        npm install -g serve
    fi
    echo "🌐 Starte Server auf Port 3000..."
    echo ""
    echo "🌐 Öffnen Sie: http://localhost:3000/cybersecurity_training.html"
    echo "🛑 Stoppen mit Ctrl+C"
    echo ""
    serve -p 3000
else
    echo "❌ Weder Python noch Node.js gefunden!"
    echo ""
    echo "📋 Bitte installieren Sie eine der folgenden Optionen:"
    echo ""
    echo "1. Python (empfohlen):"
    echo "   - Ubuntu/Debian: sudo apt install python3"
    echo "   - macOS: brew install python3"
    echo "   - Nach Installation: python3 -m http.server 8000"
    echo ""
    echo "2. Node.js:"
    echo "   - Ubuntu/Debian: sudo apt install nodejs npm"
    echo "   - macOS: brew install node"
    echo "   - Nach Installation: npx serve -p 3000"
    echo ""
    echo "3. Alternative HTTP-Server:"
    echo "   - Live Server (VS Code Extension)"
    echo "   - nginx, apache"
    echo "   - Browser Extensions für lokale Dateien"
    echo ""
    echo "💡 Für PWA-Features wird HTTPS benötigt (nur in Produktion)"
    echo ""
fi
