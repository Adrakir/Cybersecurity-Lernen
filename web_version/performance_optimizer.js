// Performance Optimization Engine für Enhanced Learning Platform
class PerformanceOptimizer {
    constructor() {
        this.metrics = {
            loadTimes: new Map(),
            renderTimes: new Map(),
            memoryUsage: [],
            networkRequests: [],
            userInteractions: [],
            cacheHits: 0,
            cacheMisses: 0
        };
        
        this.optimizations = {
            lazyLoading: true,
            virtualScrolling: true,
            imageLazyLoading: true,
            codesplitting: true,
            prefetching: true,
            memoryManagement: true,
            domOptimization: true
        };
        
        this.thresholds = {
            criticalRenderTime: 100, // ms
            memoryWarning: 50 * 1024 * 1024, // 50MB
            domNodeLimit: 1000,
            networkTimeout: 5000 // 5s
        };
        
        this.initializeOptimizer();
    }

    initializeOptimizer() {
        console.log('⚡ Performance Optimizer initializing...');
        
        // Setup Performance Monitoring
        this.setupPerformanceMonitoring();
        
        // Initialize Lazy Loading
        this.initializeLazyLoading();
        
        // Setup Memory Management
        this.setupMemoryManagement();
        
        // DOM Optimization
        this.optimizeDOM();
        
        // Network Optimization
        this.optimizeNetworkRequests();
        
        // Setup Resource Prefetching
        this.setupResourcePrefetching();
        
        // Critical Path Optimization
        this.optimizeCriticalPath();
        
        console.log('✅ Performance Optimizer ready');
    }

    setupPerformanceMonitoring() {
        // Performance Observer für verschiedene Metriken
        if ('PerformanceObserver' in window) {
            // Core Web Vitals
            this.observeWebVitals();
            
            // Resource Loading
            this.observeResourceLoading();
            
            // User Interactions
            this.observeUserInteractions();
            
            // Memory Usage
            this.observeMemoryUsage();
        }
        
        // Custom Performance Tracking
        this.setupCustomTracking();
        
        // Performance Budget Monitoring
        this.setupPerformanceBudget();
    }

    observeWebVitals() {
        try {
            // Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                this.metrics.loadTimes.set('LCP', lastEntry.startTime);
                
                if (lastEntry.startTime > 2500) {
                    console.warn('🐌 LCP is slow:', lastEntry.startTime + 'ms');
                    this.optimizeLCP();
                }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            
            // First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    this.metrics.userInteractions.push({
                        type: 'FID',
                        delay: entry.processingStart - entry.startTime,
                        timestamp: entry.startTime
                    });
                    
                    if (entry.processingStart - entry.startTime > 100) {
                        console.warn('🐌 FID is slow:', entry.processingStart - entry.startTime + 'ms');
                        this.optimizeFID();
                    }
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
            
            // Cumulative Layout Shift (CLS)
            const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                const entries = list.getEntries();
                
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                
                if (clsValue > 0.1) {
                    console.warn('🐌 CLS is high:', clsValue);
                    this.optimizeCLS();
                }
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
            
        } catch (error) {
            console.warn('Performance Observer not fully supported:', error);
        }
    }

    observeResourceLoading() {
        const resourceObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            
            entries.forEach(entry => {
                this.metrics.networkRequests.push({
                    name: entry.name,
                    type: entry.initiatorType,
                    duration: entry.responseEnd - entry.startTime,
                    size: entry.transferSize,
                    cached: entry.transferSize === 0
                });
                
                // Track cache performance
                if (entry.transferSize === 0) {
                    this.metrics.cacheHits++;
                } else {
                    this.metrics.cacheMisses++;
                }
                
                // Warn about slow resources
                if (entry.responseEnd - entry.startTime > 1000) {
                    console.warn('🐌 Slow resource:', entry.name, entry.responseEnd - entry.startTime + 'ms');
                }
            });
        });
        
        resourceObserver.observe({ entryTypes: ['resource'] });
    }

    initializeLazyLoading() {
        if (!this.optimizations.lazyLoading) return;
        
        // Intersection Observer für Lazy Loading
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadLazyElement(entry.target);
                    lazyObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px', // Lade 50px vor Sichtbarkeit
            threshold: 0.01
        });

        // Observe alle lazy elements
        document.querySelectorAll('[data-lazy]').forEach(el => {
            lazyObserver.observe(el);
        });

        // Image Lazy Loading
        if (this.optimizations.imageLazyLoading) {
            this.setupImageLazyLoading();
        }

        // Component Lazy Loading
        this.setupComponentLazyLoading();
    }

    setupImageLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    
                    if (src) {
                        img.src = src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }

    setupComponentLazyLoading() {
        // Lazy Load heavy components
        const componentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const component = entry.target;
                    const componentType = component.dataset.component;
                    
                    this.loadComponent(componentType, component);
                    componentObserver.unobserve(component);
                }
            });
        });

        document.querySelectorAll('[data-component]').forEach(el => {
            componentObserver.observe(el);
        });
    }

    loadComponent(componentType, container) {
        const startTime = performance.now();
        
        switch (componentType) {
            case 'analytics-dashboard':
                this.loadAnalyticsDashboard(container);
                break;
            case 'collaboration-panel':
                this.loadCollaborationPanel(container);
                break;
            case 'advanced-quiz':
                this.loadAdvancedQuiz(container);
                break;
            default:
                console.warn('Unknown component type:', componentType);
        }
        
        const loadTime = performance.now() - startTime;
        this.metrics.renderTimes.set(componentType, loadTime);
        
        if (loadTime > this.thresholds.criticalRenderTime) {
            console.warn(`🐌 Slow component render: ${componentType} (${loadTime.toFixed(2)}ms)`);
        }
    }

    setupMemoryManagement() {
        if (!this.optimizations.memoryManagement) return;
        
        // Memory Monitoring
        setInterval(() => {
            if ('memory' in performance) {
                const memInfo = performance.memory;
                this.metrics.memoryUsage.push({
                    used: memInfo.usedJSHeapSize,
                    total: memInfo.totalJSHeapSize,
                    limit: memInfo.jsHeapSizeLimit,
                    timestamp: Date.now()
                });
                
                // Warn if memory usage is high
                if (memInfo.usedJSHeapSize > this.thresholds.memoryWarning) {
                    console.warn('🧠 High memory usage:', memInfo.usedJSHeapSize / 1024 / 1024 + 'MB');
                    this.triggerMemoryCleanup();
                }
                
                // Keep only last 100 measurements
                if (this.metrics.memoryUsage.length > 100) {
                    this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100);
                }
            }
        }, 10000); // Check every 10 seconds

        // Automatic cleanup
        this.setupAutomaticCleanup();
    }

    triggerMemoryCleanup() {
        console.log('🧹 Triggering memory cleanup...');
        
        // Clear old analytics data
        if (window.advancedAnalytics) {
            window.advancedAnalytics.cleanup();
        }
        
        // Clear notification history
        if (window.smartNotifications) {
            window.smartNotifications.clearOldNotifications();
        }
        
        // Clear unused DOM elements
        this.cleanupUnusedDOMElements();
        
        // Clear old cached data
        this.clearOldCache();
        
        // Force garbage collection (wenn verfügbar)
        if (window.gc) {
            window.gc();
        }
    }

    optimizeDOM() {
        if (!this.optimizations.domOptimization) return;
        
        // Virtual Scrolling für große Listen
        this.setupVirtualScrolling();
        
        // DOM Node Count Monitoring
        this.monitorDOMComplexity();
        
        // Efficient Event Delegation
        this.setupEventDelegation();
        
        // CSS Optimization
        this.optimizeCSS();
    }

    setupVirtualScrolling() {
        if (!this.optimizations.virtualScrolling) return;
        
        const virtualScrollContainers = document.querySelectorAll('[data-virtual-scroll]');
        
        virtualScrollContainers.forEach(container => {
            this.initializeVirtualScroll(container);
        });
    }

    initializeVirtualScroll(container) {
        const itemHeight = parseInt(container.dataset.itemHeight) || 50;
        const items = JSON.parse(container.dataset.items || '[]');
        const visibleCount = Math.ceil(container.clientHeight / itemHeight) + 2;
        
        let scrollTop = 0;
        let startIndex = 0;
        
        const renderItems = () => {
            const endIndex = Math.min(startIndex + visibleCount, items.length);
            const visibleItems = items.slice(startIndex, endIndex);
            
            container.innerHTML = visibleItems.map((item, index) => 
                this.renderVirtualItem(item, startIndex + index)
            ).join('');
            
            // Update container height
            container.style.height = `${items.length * itemHeight}px`;
            container.style.transform = `translateY(${startIndex * itemHeight}px)`;
        };
        
        container.addEventListener('scroll', () => {
            scrollTop = container.scrollTop;
            const newStartIndex = Math.floor(scrollTop / itemHeight);
            
            if (newStartIndex !== startIndex) {
                startIndex = newStartIndex;
                renderItems();
            }
        });
        
        renderItems();
    }

    optimizeNetworkRequests() {
        // Request Batching
        this.setupRequestBatching();
        
        // Connection Pooling
        this.optimizeConnections();
        
        // Cache Strategy
        this.implementCacheStrategy();
        
        // Preloading
        this.setupResourcePreloading();
    }

    setupRequestBatching() {
        const batchedRequests = new Map();
        const batchDelay = 50; // ms
        
        window.batchRequest = (url, options = {}) => {
            if (!batchedRequests.has(url)) {
                batchedRequests.set(url, []);
                
                setTimeout(() => {
                    const requests = batchedRequests.get(url);
                    batchedRequests.delete(url);
                    
                    if (requests.length === 1) {
                        // Single request
                        fetch(url, requests[0].options)
                            .then(requests[0].resolve)
                            .catch(requests[0].reject);
                    } else {
                        // Batch multiple requests
                        this.executeBatchedRequest(url, requests);
                    }
                }, batchDelay);
            }
            
            return new Promise((resolve, reject) => {
                batchedRequests.get(url).push({ options, resolve, reject });
            });
        };
    }

    setupResourcePrefetching() {
        if (!this.optimizations.prefetching) return;
        
        // Prefetch bei Hover
        this.setupHoverPrefetch();
        
        // Predictive Prefetching
        this.setupPredictivePrefetch();
        
        // Critical Resource Prefetching
        this.prefetchCriticalResources();
    }

    setupHoverPrefetch() {
        let hoverTimer;
        
        document.addEventListener('mouseover', (event) => {
            const link = event.target.closest('[data-prefetch]');
            if (link) {
                hoverTimer = setTimeout(() => {
                    this.prefetchResource(link.dataset.prefetch);
                }, 100); // Prefetch nach 100ms hover
            }
        });
        
        document.addEventListener('mouseout', () => {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        });
    }

    prefetchResource(url) {
        if (!url) return;
        
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
        
        console.log('🔄 Prefetching:', url);
    }

    optimizeCriticalPath() {
        // Critical CSS Inlining
        this.inlineCriticalCSS();
        
        // Non-critical CSS Lazy Loading
        this.lazyLoadNonCriticalCSS();
        
        // JavaScript Optimization
        this.optimizeJavaScript();
        
        // Resource Prioritization
        this.prioritizeResources();
    }

    inlineCriticalCSS() {
        // Above-the-fold CSS
        const criticalCSS = `
            /* Critical CSS für sichtbaren Bereich */
            body { margin: 0; font-family: 'Segoe UI', sans-serif; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
            .loading-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; }
            /* ... weitere kritische Styles */
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
    }

    lazyLoadNonCriticalCSS() {
        const nonCriticalCSS = [
            'animations.css',
            'dashboard.css',
            'collaboration.css'
        ];
        
        // Lade nach dem kritischen Rendering
        requestIdleCallback(() => {
            nonCriticalCSS.forEach(cssFile => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssFile;
                link.media = 'print';
                link.onload = () => {
                    link.media = 'all';
                };
                document.head.appendChild(link);
            });
        });
    }

    optimizeJavaScript() {
        // Code Splitting
        if (this.optimizations.codesplitting) {
            this.implementCodeSplitting();
        }
        
        // Tree Shaking Simulation
        this.removeUnusedCode();
        
        // Minification Simulation
        this.minifyInlineCode();
    }

    implementCodeSplitting() {
        // Split non-critical features
        const dynamicImports = {
            analytics: () => import('./advanced_analytics.js'),
            collaboration: () => import('./collaboration_system.js'),
            notifications: () => import('./smart_notifications.js')
        };
        
        window.loadFeature = async (featureName) => {
            if (dynamicImports[featureName]) {
                const startTime = performance.now();
                await dynamicImports[featureName]();
                const loadTime = performance.now() - startTime;
                
                console.log(`📦 Feature loaded: ${featureName} (${loadTime.toFixed(2)}ms)`);
                return true;
            }
            return false;
        };
    }

    generatePerformanceReport() {
        const report = {
            timestamp: new Date(),
            webVitals: this.getWebVitals(),
            resourceMetrics: this.getResourceMetrics(),
            memoryMetrics: this.getMemoryMetrics(),
            cacheMetrics: this.getCacheMetrics(),
            optimizationStatus: this.getOptimizationStatus(),
            recommendations: this.generateRecommendations()
        };
        
        return report;
    }

    getWebVitals() {
        return {
            LCP: this.metrics.loadTimes.get('LCP'),
            FID: this.getAverageFID(),
            CLS: this.getCLS(),
            TTFB: this.getTTFB(),
            FCP: this.metrics.loadTimes.get('FCP')
        };
    }

    getResourceMetrics() {
        const resources = this.metrics.networkRequests;
        
        return {
            totalRequests: resources.length,
            totalSize: resources.reduce((sum, r) => sum + (r.size || 0), 0),
            averageLoadTime: resources.reduce((sum, r) => sum + r.duration, 0) / resources.length,
            slowRequests: resources.filter(r => r.duration > 1000).length,
            cacheHitRate: this.metrics.cacheHits / (this.metrics.cacheHits + this.metrics.cacheMisses)
        };
    }

    generateRecommendations() {
        const recommendations = [];
        const vitals = this.getWebVitals();
        const resources = this.getResourceMetrics();
        
        // LCP Recommendations
        if (vitals.LCP > 2500) {
            recommendations.push({
                type: 'performance',
                priority: 'high',
                title: 'Largest Contentful Paint optimieren',
                description: 'LCP ist zu hoch. Optimieren Sie Bilder und kritische Ressourcen.',
                actions: [
                    'Bilder komprimieren und WebP verwenden',
                    'Kritische CSS inline einbetten',
                    'Preload für wichtige Ressourcen nutzen'
                ]
            });
        }
        
        // Memory Recommendations
        const memoryUsage = this.getCurrentMemoryUsage();
        if (memoryUsage > this.thresholds.memoryWarning) {
            recommendations.push({
                type: 'memory',
                priority: 'medium',
                title: 'Speicherverbrauch reduzieren',
                description: 'Hoher Speicherverbrauch erkannt.',
                actions: [
                    'Unused Event Listeners entfernen',
                    'Große Datenstrukturen bereinigen',
                    'DOM-Elemente lazy laden'
                ]
            });
        }
        
        // Cache Recommendations
        if (resources.cacheHitRate < 0.8) {
            recommendations.push({
                type: 'caching',
                priority: 'medium',
                title: 'Cache-Strategie verbessern',
                description: 'Cache-Hit-Rate ist niedrig.',
                actions: [
                    'Service Worker Cache erweitern',
                    'Browser-Cache Headers optimieren',
                    'CDN für statische Ressourcen nutzen'
                ]
            });
        }
        
        return recommendations;
    }

    renderPerformanceDashboard() {
        const report = this.generatePerformanceReport();
        
        return `
            <div class="performance-dashboard">
                <div class="dashboard-header">
                    <h2>⚡ Performance Dashboard</h2>
                    <div class="performance-score">
                        <span class="score-value">${this.calculatePerformanceScore()}</span>
                        <span class="score-label">Performance Score</span>
                    </div>
                </div>
                
                <div class="metrics-grid">
                    <div class="metric-card web-vitals">
                        <h3>🌐 Core Web Vitals</h3>
                        <div class="vital-metric">
                            <span class="vital-label">LCP:</span>
                            <span class="vital-value ${this.getVitalClass('LCP', report.webVitals.LCP)}">
                                ${report.webVitals.LCP ? report.webVitals.LCP.toFixed(0) + 'ms' : 'N/A'}
                            </span>
                        </div>
                        <div class="vital-metric">
                            <span class="vital-label">FID:</span>
                            <span class="vital-value ${this.getVitalClass('FID', report.webVitals.FID)}">
                                ${report.webVitals.FID ? report.webVitals.FID.toFixed(0) + 'ms' : 'N/A'}
                            </span>
                        </div>
                        <div class="vital-metric">
                            <span class="vital-label">CLS:</span>
                            <span class="vital-value ${this.getVitalClass('CLS', report.webVitals.CLS)}">
                                ${report.webVitals.CLS ? report.webVitals.CLS.toFixed(3) : 'N/A'}
                            </span>
                        </div>
                    </div>
                    
                    <div class="metric-card resource-metrics">
                        <h3>📦 Ressourcen</h3>
                        <div class="resource-stat">
                            <span class="stat-label">Requests:</span>
                            <span class="stat-value">${report.resourceMetrics.totalRequests}</span>
                        </div>
                        <div class="resource-stat">
                            <span class="stat-label">Gesamtgröße:</span>
                            <span class="stat-value">${this.formatBytes(report.resourceMetrics.totalSize)}</span>
                        </div>
                        <div class="resource-stat">
                            <span class="stat-label">Cache Hit Rate:</span>
                            <span class="stat-value">${(report.resourceMetrics.cacheHitRate * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                    
                    <div class="metric-card memory-metrics">
                        <h3>🧠 Speicher</h3>
                        <div class="memory-chart">
                            <canvas id="memory-chart" width="250" height="100"></canvas>
                        </div>
                        <div class="memory-stat">
                            <span class="stat-label">Aktuell:</span>
                            <span class="stat-value">${this.formatBytes(this.getCurrentMemoryUsage())}</span>
                        </div>
                    </div>
                </div>
                
                <div class="recommendations-section">
                    <h3>💡 Optimierungsempfehlungen</h3>
                    <div class="recommendations-list">
                        ${report.recommendations.map(rec => this.renderRecommendation(rec)).join('')}
                    </div>
                </div>
                
                <div class="performance-actions">
                    <button onclick="performanceOptimizer.runOptimization()" class="btn-primary">
                        🚀 Optimierung starten
                    </button>
                    <button onclick="performanceOptimizer.exportReport()" class="btn-secondary">
                        📊 Bericht exportieren
                    </button>
                    <button onclick="performanceOptimizer.resetMetrics()" class="btn-secondary">
                        🔄 Metriken zurücksetzen
                    </button>
                </div>
            </div>
        `;
    }

    runOptimization() {
        console.log('🚀 Running performance optimization...');
        
        // Automatische Optimierungen
        this.triggerMemoryCleanup();
        this.optimizeImages();
        this.compressLocalStorage();
        this.optimizeDOMTree();
        
        // Zeige Erfolgs-Nachricht
        this.showOptimizationComplete();
    }

    // Utility Methods
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    calculatePerformanceScore() {
        const vitals = this.getWebVitals();
        let score = 100;
        
        // LCP Score
        if (vitals.LCP > 4000) score -= 30;
        else if (vitals.LCP > 2500) score -= 15;
        
        // Memory Score
        const memoryUsage = this.getCurrentMemoryUsage();
        if (memoryUsage > this.thresholds.memoryWarning * 2) score -= 25;
        else if (memoryUsage > this.thresholds.memoryWarning) score -= 10;
        
        // Cache Score
        const cacheRate = this.metrics.cacheHits / (this.metrics.cacheHits + this.metrics.cacheMisses);
        if (cacheRate < 0.5) score -= 20;
        else if (cacheRate < 0.8) score -= 10;
        
        return Math.max(0, Math.min(100, score));
    }

    getCurrentMemoryUsage() {
        if ('memory' in performance) {
            return performance.memory.usedJSHeapSize;
        }
        return 0;
    }

    getVitalClass(vital, value) {
        const thresholds = {
            'LCP': { good: 2500, poor: 4000 },
            'FID': { good: 100, poor: 300 },
            'CLS': { good: 0.1, poor: 0.25 }
        };
        
        if (!value || !thresholds[vital]) return 'unknown';
        
        if (value <= thresholds[vital].good) return 'good';
        if (value <= thresholds[vital].poor) return 'needs-improvement';
        return 'poor';
    }

    // Cleanup Methods
    cleanupUnusedDOMElements() {
        // Entferne ausgeblendete Elemente, die nicht mehr benötigt werden
        const hiddenElements = document.querySelectorAll('[style*="display: none"], .hidden');
        hiddenElements.forEach(el => {
            if (el.dataset.keepHidden !== 'true') {
                el.remove();
            }
        });
    }

    clearOldCache() {
        // Entferne alte Cache-Einträge
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith('cache_')) {
                const item = JSON.parse(localStorage.getItem(key) || '{}');
                if (item.timestamp && Date.now() - item.timestamp > 24 * 60 * 60 * 1000) {
                    localStorage.removeItem(key);
                }
            }
        }
    }
}

// Global Performance Optimizer Instance
window.performanceOptimizer = new PerformanceOptimizer();

// CSS für Performance Dashboard
const performanceCSS = `
<style>
.performance-dashboard {
    padding: 24px;
    background: var(--bg-primary);
    border-radius: 12px;
    max-width: 1200px;
    margin: 0 auto;
}

.performance-score {
    text-align: center;
    background: var(--bg-secondary);
    padding: 20px;
    border-radius: 8px;
    border: 2px solid var(--border-color);
}

.score-value {
    display: block;
    font-size: 3em;
    font-weight: bold;
    color: var(--primary-color);
}

.score-label {
    display: block;
    font-size: 0.9em;
    color: var(--text-secondary);
    margin-top: 8px;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 24px 0;
}

.metric-card {
    background: var(--bg-secondary);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.metric-card h3 {
    margin: 0 0 16px 0;
    color: var(--text-primary);
}

.vital-metric, .resource-stat, .memory-stat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.vital-value.good { color: var(--success-color); }
.vital-value.needs-improvement { color: var(--warning-color); }
.vital-value.poor { color: var(--error-color); }

.recommendations-section {
    margin: 24px 0;
}

.recommendation-item {
    background: var(--bg-secondary);
    padding: 16px;
    border-radius: 6px;
    margin-bottom: 12px;
    border-left: 4px solid var(--primary-color);
}

.recommendation-item.high { border-left-color: var(--error-color); }
.recommendation-item.medium { border-left-color: var(--warning-color); }
.recommendation-item.low { border-left-color: var(--info-color); }

.performance-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 24px;
}

#memory-chart {
    background: var(--bg-primary);
    border-radius: 4px;
}
</style>
`;

// Füge CSS zum Document hinzu
if (!document.querySelector('#performance-css')) {
    const style = document.createElement('style');
    style.id = 'performance-css';
    style.textContent = performanceCSS;
    document.head.appendChild(style);
}
