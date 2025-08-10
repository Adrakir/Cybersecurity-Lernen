// Intelligenter Modul-Loader für Enhanced Learning Platform
class ModuleLoader {
    constructor() {
        this.loadedModules = new Set();
        this.loadingPromises = new Map();
        this.dependencies = new Map();
        this.moduleCache = new Map();
        this.loadOrder = [];
        this.performanceMetrics = {
            loadTimes: new Map(),
            errorCount: 0,
            totalModules: 0
        };
        
        this.initializeLoader();
    }

    initializeLoader() {
        // Definiere Modul-Abhängigkeiten
        this.dependencies.set('enhanced_platform.js', []);
        this.dependencies.set('ai_learning_service.js', ['enhanced_platform.js']);
        this.dependencies.set('gamification_engine.js', ['enhanced_platform.js']);
        this.dependencies.set('adaptive_quiz_engine.js', ['enhanced_platform.js', 'ai_learning_service.js']);
        this.dependencies.set('quiz_statistics.js', ['enhanced_platform.js']);
        this.dependencies.set('detailed_solutions.js', ['quiz_statistics.js']);
        this.dependencies.set('extended_modules.js', ['enhanced_platform.js']);
        this.dependencies.set('comprehensive_quizzes.js', ['adaptive_quiz_engine.js']);
        this.dependencies.set('interactive_cases.js', ['enhanced_platform.js']);
        
        // Legacy Module (Rückwärtskompatibilität)
        this.dependencies.set('cybersecurity_engine.js', ['enhanced_platform.js']);
        this.dependencies.set('examEngine.js', ['enhanced_platform.js']);
        this.dependencies.set('quest_engine.js', ['gamification_engine.js']);
        
        console.log('🔧 ModuleLoader initialized with', this.dependencies.size, 'modules');
    }

    async loadModule(moduleName, priority = 'normal') {
        const startTime = performance.now();
        
        // Prüfe ob bereits geladen
        if (this.loadedModules.has(moduleName)) {
            console.log(`✅ Module ${moduleName} already loaded`);
            return true;
        }

        // Prüfe ob bereits am Laden
        if (this.loadingPromises.has(moduleName)) {
            console.log(`⏳ Module ${moduleName} already loading...`);
            return await this.loadingPromises.get(moduleName);
        }

        // Erstelle Loading Promise
        const loadingPromise = this.loadModuleWithDependencies(moduleName, priority);
        this.loadingPromises.set(moduleName, loadingPromise);

        try {
            const result = await loadingPromise;
            const loadTime = performance.now() - startTime;
            
            this.performanceMetrics.loadTimes.set(moduleName, loadTime);
            this.performanceMetrics.totalModules++;
            
            console.log(`✅ Module ${moduleName} loaded in ${loadTime.toFixed(2)}ms`);
            
            return result;
        } catch (error) {
            this.performanceMetrics.errorCount++;
            console.error(`❌ Failed to load module ${moduleName}:`, error);
            throw error;
        } finally {
            this.loadingPromises.delete(moduleName);
        }
    }

    async loadModuleWithDependencies(moduleName, priority) {
        // Lade zuerst alle Abhängigkeiten
        const deps = this.dependencies.get(moduleName) || [];
        
        if (deps.length > 0) {
            console.log(`📦 Loading dependencies for ${moduleName}:`, deps);
            
            // Lade Abhängigkeiten parallel wo möglich
            const depPromises = deps.map(dep => this.loadModule(dep, 'dependency'));
            await Promise.all(depPromises);
        }

        // Lade das eigentliche Modul
        return await this.loadScript(moduleName, priority);
    }

    async loadScript(moduleName, priority = 'normal') {
        return new Promise((resolve, reject) => {
            // Prüfe ob Script bereits im DOM vorhanden
            const existingScript = document.querySelector(`script[src*="${moduleName}"]`);
            if (existingScript) {
                this.loadedModules.add(moduleName);
                resolve(true);
                return;
            }

            const script = document.createElement('script');
            script.src = moduleName;
            script.async = true;
            
            // Priorität setzen
            if (priority === 'high') {
                script.setAttribute('importance', 'high');
            } else if (priority === 'low') {
                script.setAttribute('importance', 'low');
            }

            script.onload = () => {
                this.loadedModules.add(moduleName);
                this.loadOrder.push(moduleName);
                console.log(`📜 Script ${moduleName} loaded successfully`);
                resolve(true);
            };

            script.onerror = (error) => {
                console.error(`💥 Script ${moduleName} failed to load:`, error);
                reject(new Error(`Failed to load script: ${moduleName}`));
            };

            script.onabort = () => {
                console.warn(`⚠️ Script ${moduleName} loading aborted`);
                reject(new Error(`Script loading aborted: ${moduleName}`));
            };

            document.head.appendChild(script);
        });
    }

    async loadModulesInOrder(moduleList, options = {}) {
        const { 
            parallel = false, 
            priority = 'normal',
            onProgress = null,
            onError = null 
        } = options;

        console.log(`🚀 Loading ${moduleList.length} modules...`);
        
        if (parallel) {
            // Parallel loading für bessere Performance
            const promises = moduleList.map(module => 
                this.loadModule(module, priority).catch(error => {
                    if (onError) onError(module, error);
                    return false; // Continue with other modules
                })
            );
            
            const results = await Promise.allSettled(promises);
            const successCount = results.filter(r => r.status === 'fulfilled' && r.value).length;
            
            console.log(`✅ ${successCount}/${moduleList.length} modules loaded successfully`);
            return results;
        } else {
            // Sequential loading für Abhängigkeiten
            const results = [];
            for (let i = 0; i < moduleList.length; i++) {
                const module = moduleList[i];
                try {
                    const result = await this.loadModule(module, priority);
                    results.push(result);
                    
                    if (onProgress) {
                        onProgress(i + 1, moduleList.length, module);
                    }
                } catch (error) {
                    if (onError) onError(module, error);
                    results.push(false);
                }
            }
            return results;
        }
    }

    async loadCoreModules() {
        const coreModules = [
            'enhanced_platform.js',
            'ai_learning_service.js',
            'gamification_engine.js',
            'adaptive_quiz_engine.js'
        ];

        console.log('🎯 Loading core modules...');
        
        return await this.loadModulesInOrder(coreModules, {
            parallel: false, // Sequential für Core-Module
            priority: 'high',
            onProgress: (loaded, total, currentModule) => {
                const percentage = Math.round((loaded / total) * 100);
                console.log(`📊 Progress: ${percentage}% - Loaded ${currentModule}`);
                
                // Fortschrittsanzeige aktualisieren
                this.updateProgressIndicator(percentage, currentModule);
            },
            onError: (module, error) => {
                console.error(`🚨 Core module ${module} failed to load:`, error);
                this.showErrorNotification(`Fehler beim Laden von ${module}`);
            }
        });
    }

    async loadOptionalModules() {
        const optionalModules = [
            'quiz_statistics.js',
            'detailed_solutions.js',
            'extended_modules.js',
            'comprehensive_quizzes.js',
            'interactive_cases.js'
        ];

        console.log('🔧 Loading optional modules...');
        
        return await this.loadModulesInOrder(optionalModules, {
            parallel: true, // Parallel für optionale Module
            priority: 'normal',
            onError: (module, error) => {
                console.warn(`⚠️ Optional module ${module} failed to load:`, error);
                // Kein kritischer Fehler für optionale Module
            }
        });
    }

    async loadLegacyModules() {
        const legacyModules = [
            'cybersecurity_engine.js',
            'examEngine.js',
            'quest_engine.js'
        ];

        console.log('📚 Loading legacy modules for backward compatibility...');
        
        return await this.loadModulesInOrder(legacyModules, {
            parallel: true,
            priority: 'low',
            onError: (module, error) => {
                console.warn(`⚠️ Legacy module ${module} not available:`, error);
                // Legacy Module sind optional
            }
        });
    }

    updateProgressIndicator(percentage, currentModule) {
        // Erstelle oder aktualisiere Fortschrittsanzeige
        let indicator = document.getElementById('module-loading-indicator');
        
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'module-loading-indicator';
            indicator.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: rgba(0,0,0,0.1);
                z-index: 9999;
                transition: all 0.3s ease;
            `;
            
            const progressBar = document.createElement('div');
            progressBar.id = 'module-progress-bar';
            progressBar.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, #667eea, #764ba2);
                width: 0%;
                transition: width 0.3s ease;
            `;
            
            indicator.appendChild(progressBar);
            document.body.appendChild(indicator);
            
            // Status-Text
            const statusText = document.createElement('div');
            statusText.id = 'module-status-text';
            statusText.style.cssText = `
                position: fixed;
                top: 10px;
                right: 20px;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                z-index: 10000;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(statusText);
        }

        // Aktualisiere Fortschritt
        const progressBar = document.getElementById('module-progress-bar');
        const statusText = document.getElementById('module-status-text');
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        
        if (statusText) {
            statusText.textContent = `Loading ${currentModule}... ${percentage}%`;
        }

        // Entferne Indikator bei 100%
        if (percentage >= 100) {
            setTimeout(() => {
                if (indicator) indicator.remove();
                if (statusText) statusText.remove();
            }, 1000);
        }
    }

    showErrorNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50px;
            right: 20px;
            background: #ff4757;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10001;
            font-size: 14px;
            max-width: 300px;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>⚠️</span>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: auto;">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove nach 5 Sekunden
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 5000);
    }

    getLoadingReport() {
        const totalTime = Array.from(this.performanceMetrics.loadTimes.values())
            .reduce((sum, time) => sum + time, 0);
        
        return {
            totalModules: this.performanceMetrics.totalModules,
            loadedModules: this.loadedModules.size,
            errorCount: this.performanceMetrics.errorCount,
            totalLoadTime: totalTime,
            averageLoadTime: totalTime / this.performanceMetrics.totalModules || 0,
            loadOrder: [...this.loadOrder],
            performanceMetrics: Object.fromEntries(this.performanceMetrics.loadTimes)
        };
    }

    async preloadModules(moduleList) {
        console.log('🔄 Preloading modules for better performance...');
        
        // Preload als niedrige Priorität
        const preloadPromises = moduleList.map(module => {
            const link = document.createElement('link');
            link.rel = 'modulepreload';
            link.href = module;
            document.head.appendChild(link);
            
            return new Promise(resolve => {
                link.onload = () => resolve(true);
                link.onerror = () => resolve(false);
                setTimeout(() => resolve(false), 5000); // Timeout
            });
        });
        
        const results = await Promise.allSettled(preloadPromises);
        const successCount = results.filter(r => r.status === 'fulfilled' && r.value).length;
        
        console.log(`🚀 Preloaded ${successCount}/${moduleList.length} modules`);
        return results;
    }

    enableLazyLoading() {
        console.log('🔍 Enabling lazy loading for non-critical modules...');
        
        // Intersection Observer für lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const moduleName = entry.target.dataset.lazyModule;
                    if (moduleName && !this.loadedModules.has(moduleName)) {
                        console.log(`👁️ Lazy loading module: ${moduleName}`);
                        this.loadModule(moduleName, 'low');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            rootMargin: '100px' // Lade 100px vor Sichtbarkeit
        });

        // Markiere Elemente für lazy loading
        document.querySelectorAll('[data-lazy-module]').forEach(el => {
            observer.observe(el);
        });

        return observer;
    }

    async initializeAllModules() {
        console.log('🚀 Starting comprehensive module initialization...');
        
        try {
            // 1. Preload critical modules
            await this.preloadModules([
                'enhanced_platform.js',
                'ai_learning_service.js'
            ]);

            // 2. Load core modules sequentially
            await this.loadCoreModules();

            // 3. Load optional modules in parallel
            await this.loadOptionalModules();

            // 4. Enable lazy loading for non-critical features
            this.enableLazyLoading();

            // 5. Load legacy modules in background
            setTimeout(() => {
                this.loadLegacyModules();
            }, 2000);

            // 6. Generate loading report
            const report = this.getLoadingReport();
            console.log('📊 Module Loading Report:', report);

            console.log('✅ All modules initialized successfully!');
            
            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('modulesLoaded', {
                detail: { report }
            }));

            return true;
        } catch (error) {
            console.error('💥 Module initialization failed:', error);
            this.showErrorNotification('Fehler beim Laden der Module');
            return false;
        }
    }

    // Utility Methods
    isModuleLoaded(moduleName) {
        return this.loadedModules.has(moduleName);
    }

    waitForModule(moduleName, timeout = 10000) {
        return new Promise((resolve, reject) => {
            if (this.isModuleLoaded(moduleName)) {
                resolve(true);
                return;
            }

            const checkInterval = setInterval(() => {
                if (this.isModuleLoaded(moduleName)) {
                    clearInterval(checkInterval);
                    clearTimeout(timeoutHandle);
                    resolve(true);
                }
            }, 100);

            const timeoutHandle = setTimeout(() => {
                clearInterval(checkInterval);
                reject(new Error(`Timeout waiting for module: ${moduleName}`));
            }, timeout);
        });
    }

    unloadModule(moduleName) {
        // Entferne Script-Tag
        const script = document.querySelector(`script[src*="${moduleName}"]`);
        if (script) {
            script.remove();
        }

        // Entferne aus geladenen Modulen
        this.loadedModules.delete(moduleName);
        
        console.log(`🗑️ Module ${moduleName} unloaded`);
    }

    reloadModule(moduleName) {
        console.log(`🔄 Reloading module: ${moduleName}`);
        this.unloadModule(moduleName);
        return this.loadModule(moduleName);
    }
}

// Global Module Loader Instance
window.moduleLoader = new ModuleLoader();

// Verbesserte Startup-Sequenz
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🎬 Starting Enhanced Learning Platform with Module Loader...');
    
    try {
        // Zeige Startup-Screen
        showStartupScreen();
        
        // Initialisiere alle Module
        const success = await window.moduleLoader.initializeAllModules();
        
        if (success) {
            // Verstecke Startup-Screen
            hideStartupScreen();
            
            // Starte Platform
            if (window.platform) {
                console.log('🎯 Platform ready!');
            } else {
                console.log('⏳ Waiting for platform...');
                await window.moduleLoader.waitForModule('enhanced_platform.js');
            }
        } else {
            showStartupError();
        }
    } catch (error) {
        console.error('💥 Startup failed:', error);
        showStartupError();
    }
});

function showStartupScreen() {
    const startupScreen = document.createElement('div');
    startupScreen.id = 'startup-screen';
    startupScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    
    startupScreen.innerHTML = `
        <div style="text-align: center; max-width: 500px; padding: 40px;">
            <div style="font-size: 4em; margin-bottom: 20px;">🛡️</div>
            <h1 style="font-size: 2.5em; margin-bottom: 10px; font-weight: 300;">Enhanced Learning Platform</h1>
            <p style="font-size: 1.2em; opacity: 0.9; margin-bottom: 40px;">KI-gestützte Cybersecurity-Ausbildung</p>
            
            <div style="width: 300px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; margin: 20px auto;">
                <div id="startup-progress" style="height: 100%; background: white; border-radius: 2px; width: 0%; transition: width 0.3s ease;"></div>
            </div>
            
            <p id="startup-status" style="font-size: 14px; opacity: 0.8; margin-top: 20px;">Module werden geladen...</p>
            
            <div style="margin-top: 40px; opacity: 0.6; font-size: 12px;">
                <p>🤖 KI-Integration • 🎮 Gamification • 📱 Progressive Web App</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(startupScreen);
}

function hideStartupScreen() {
    const startupScreen = document.getElementById('startup-screen');
    if (startupScreen) {
        startupScreen.style.opacity = '0';
        startupScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            if (document.body.contains(startupScreen)) {
                startupScreen.remove();
            }
        }, 500);
    }
}

function showStartupError() {
    const statusElement = document.getElementById('startup-status');
    if (statusElement) {
        statusElement.innerHTML = `
            <div style="color: #ff6b6b;">
                ⚠️ Fehler beim Laden der Module<br>
                <small style="opacity: 0.8;">Bitte aktualisieren Sie die Seite</small>
            </div>
        `;
    }
}
