import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../providers/game_provider.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<GameProvider>(
      builder: (context, gameProvider, child) {
        final progress = gameProvider.progress;
        final totalQuestions = progress.totalQuestions;
        final correctAnswers = progress.correctAnswers;
        final accuracy = progress.accuracyPercentage;
        
        String getPerformanceLevel() {
          if (accuracy >= 0.9) return 'Hervorragend!';
          if (accuracy >= 0.8) return 'Sehr gut!';
          if (accuracy >= 0.7) return 'Gut!';
          if (accuracy >= 0.6) return 'Befriedigend';
          return 'Noch Übung nötig';
        }
        
        String getPerformanceMessage() {
          if (accuracy >= 0.9) {
            return '🏆 Perfekt! Du hast fast alle Aufgaben gemeistert. Dein Weg zum Fachinformatiker ist geebnet!';
          } else if (accuracy >= 0.7) {
            return '✅ Sehr gut! Du hast die meisten Herausforderungen erfolgreich bewältigt. Du bist auf dem richtigen Weg!';
          } else {
            return '⚠️ Noch nicht ganz! Einige Bereiche brauchen mehr Übung. Versuche es noch einmal!';
          }
        }
        
        Color getPerformanceColor() {
          if (accuracy >= 0.8) return Colors.green;
          if (accuracy >= 0.6) return Colors.orange;
          return Colors.red;
        }

        return Scaffold(
          body: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Color(0xFF1565C0),
                  Color(0xFF0D47A1),
                ],
              ),
            ),
            child: SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(24.0),
                child: Column(
                  children: [
                    Expanded(
                      child: SingleChildScrollView(
                        child: Column(
                          children: [
                            const SizedBox(height: 32),
                            
                            // Trophy Icon
                            Container(
                              width: 120,
                              height: 120,
                              decoration: BoxDecoration(
                                color: getPerformanceColor(),
                                borderRadius: BorderRadius.circular(60),
                                boxShadow: [
                                  BoxShadow(
                                    color: Colors.black.withOpacity(0.2),
                                    blurRadius: 10,
                                    offset: const Offset(0, 5),
                                  ),
                                ],
                              ),
                              child: Icon(
                                accuracy >= 0.8 ? Icons.emoji_events : 
                                accuracy >= 0.6 ? Icons.star : Icons.school,
                                size: 60,
                                color: Colors.white,
                              ),
                            ).animate().scale(duration: 600.ms).fadeIn(),
                            
                            const SizedBox(height: 32),
                            
                            // Project Completed Title
                            Text(
                              'Projekt abgeschlossen!',
                              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 28,
                              ),
                              textAlign: TextAlign.center,
                            ).animate().slideY(duration: 600.ms, delay: 200.ms).fadeIn(),
                            
                            const SizedBox(height: 16),
                            
                            // Performance Level
                            Text(
                              getPerformanceLevel(),
                              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                                color: getPerformanceColor(),
                                fontWeight: FontWeight.bold,
                                fontSize: 24,
                              ),
                              textAlign: TextAlign.center,
                            ).animate().slideY(duration: 600.ms, delay: 300.ms).fadeIn(),
                            
                            const SizedBox(height: 32),
                            
                            // Results Card
                            Card(
                              elevation: 8,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(24.0),
                                child: Column(
                                  children: [
                                    // Score Summary
                                    Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                                      children: [
                                        _StatColumn(
                                          title: 'Richtige\\nAntworten',
                                          value: '$correctAnswers',
                                          subtitle: 'von $totalQuestions',
                                          color: Colors.green,
                                        ),
                                        _StatColumn(
                                          title: 'Genauigkeit',
                                          value: '${(accuracy * 100).round()}%',
                                          subtitle: 'Erfolgsrate',
                                          color: getPerformanceColor(),
                                        ),
                                        _StatColumn(
                                          title: 'Verzögerungen',
                                          value: '${gameProvider.timeDelays}',
                                          subtitle: 'Fehler',
                                          color: Colors.orange,
                                        ),
                                      ],
                                    ),
                                    
                                    const SizedBox(height: 24),
                                    
                                    // Progress Bar
                                    Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          'Gesamtfortschritt',
                                          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        const SizedBox(height: 8),
                                        LinearProgressIndicator(
                                          value: accuracy,
                                          backgroundColor: Colors.grey[300],
                                          valueColor: AlwaysStoppedAnimation<Color>(getPerformanceColor()),
                                          minHeight: 8,
                                        ),
                                      ],
                                    ),
                                    
                                    const SizedBox(height: 24),
                                    
                                    // Performance Message
                                    Container(
                                      padding: const EdgeInsets.all(16),
                                      decoration: BoxDecoration(
                                        color: getPerformanceColor().withOpacity(0.1),
                                        borderRadius: BorderRadius.circular(12),
                                        border: Border.all(
                                          color: getPerformanceColor().withOpacity(0.3),
                                        ),
                                      ),
                                      child: Text(
                                        getPerformanceMessage(),
                                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                          color: getPerformanceColor(),
                                          fontWeight: FontWeight.w500,
                                        ),
                                        textAlign: TextAlign.center,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ).animate().scale(duration: 600.ms, delay: 400.ms).fadeIn(),
                            
                            const SizedBox(height: 32),
                            
                            // Phase Summary
                            Card(
                              elevation: 4,
                              child: Padding(
                                padding: const EdgeInsets.all(16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Durchlaufene Phasen',
                                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    const SizedBox(height: 16),
                                    _PhaseItem(
                                      icon: Icons.computer,
                                      title: 'Phase 1: IT-Infrastruktur',
                                      description: 'Hardware und Netzwerk eingerichtet',
                                      completed: true,
                                    ),
                                    _PhaseItem(
                                      icon: Icons.business,
                                      title: 'Phase 2: Kundenberatung',
                                      description: 'Verträge und Prozesse geklärt',
                                      completed: true,
                                    ),
                                    _PhaseItem(
                                      icon: Icons.security,
                                      title: 'Phase 3: IT-Sicherheit',
                                      description: 'Sicherheitskonzept implementiert',
                                      completed: true,
                                    ),
                                  ],
                                ),
                              ),
                            ).animate().slideY(duration: 600.ms, delay: 500.ms).fadeIn(),
                          ],
                        ),
                      ),
                    ),
                    
                    // Action Buttons
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton.icon(
                            onPressed: () {
                              gameProvider.resetGame();
                            },
                            icon: const Icon(Icons.refresh),
                            label: const Text('Nochmal spielen'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: Colors.white,
                              side: const BorderSide(color: Colors.white),
                              padding: const EdgeInsets.symmetric(vertical: 16),
                            ),
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: ElevatedButton.icon(
                            onPressed: () {
                              Navigator.of(context).popUntil((route) => route.isFirst);
                            },
                            icon: const Icon(Icons.home),
                            label: const Text('Zur Startseite'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              foregroundColor: const Color(0xFF1565C0),
                              padding: const EdgeInsets.symmetric(vertical: 16),
                            ),
                          ),
                        ),
                      ],
                    ).animate().slideY(duration: 600.ms, delay: 600.ms).fadeIn(),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _StatColumn extends StatelessWidget {
  final String title;
  final String value;
  final String subtitle;
  final Color color;

  const _StatColumn({
    required this.title,
    required this.value,
    required this.subtitle,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
            color: Colors.grey[600],
            fontWeight: FontWeight.w500,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        Text(
          value,
          style: Theme.of(context).textTheme.headlineMedium?.copyWith(
            color: color,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          subtitle,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
            color: Colors.grey[600],
          ),
        ),
      ],
    );
  }
}

class _PhaseItem extends StatelessWidget {
  final IconData icon;
  final String title;
  final String description;
  final bool completed;

  const _PhaseItem({
    required this.icon,
    required this.title,
    required this.description,
    required this.completed,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: completed ? Colors.green : Colors.grey[300],
              borderRadius: BorderRadius.circular(20),
            ),
            child: Icon(
              completed ? Icons.check : icon,
              color: Colors.white,
              size: 20,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  description,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.grey[600],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
