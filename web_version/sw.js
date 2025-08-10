// Service Worker für Enhanced Learning Platform - Offline Funktionalität
const CACHE_NAME = 'enhanced-learning-platform-v1.0';
const urlsToCache = [
    '/',
    '/cybersecurity_training.html',
    '/enhanced_styles.css',
    '/enhanced_platform.js',
    '/ai_learning_service.js',
    '/gamification_engine.js',
    '/adaptive_quiz_engine.js',
    '/quiz_statistics.js',
    '/detailed_solutions.js',
    '/extended_modules.js',
    '/comprehensive_quizzes.js',
    '/interactive_cases.js'
];

// Installation des Service Workers
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
});

// Aktivierung des Service Workers
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch-Ereignisse abfangen
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
    );
});

// Background Sync für Offline-Daten
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    console.log('🔄 Background sync started');
    
    // Offline gespeicherte Daten synchronisieren
    try {
        const offlineData = await getStoredOfflineData();
        if (offlineData.length > 0) {
            await syncDataToServer(offlineData);
            await clearOfflineData();
        }
    } catch (error) {
        console.error('❌ Background sync failed:', error);
    }
}

async function getStoredOfflineData() {
    // Implementierung für Offline-Daten abrufen
    return [];
}

async function syncDataToServer(data) {
    // Implementierung für Server-Synchronisation
    console.log('📤 Syncing data to server:', data);
}

async function clearOfflineData() {
    // Implementierung für Offline-Daten löschen
    console.log('🧹 Clearing offline data');
}

// Push Notifications
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'Neue Lerneinheit verfügbar!',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        tag: 'learning-notification',
        data: {
            url: '/cybersecurity_training.html'
        },
        actions: [
            {
                action: 'open',
                title: 'Öffnen',
                icon: '/action-open.png'
            },
            {
                action: 'close',
                title: 'Schließen',
                icon: '/action-close.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Enhanced Learning Platform', options)
    );
});

// Notification Click Handler
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow(event.notification.data.url)
        );
    }
});

// Error Handling
self.addEventListener('error', event => {
    console.error('💥 Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
    console.error('💥 Unhandled promise rejection:', event.reason);
});
