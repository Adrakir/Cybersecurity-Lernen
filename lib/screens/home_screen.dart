import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../providers/game_provider.dart';
import 'game_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
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
          child: Column(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // App Logo/Icon
                      Container(
                        width: 120,
                        height: 120,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(60),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.2),
                              blurRadius: 10,
                              offset: const Offset(0, 5),
                            ),
                          ],
                        ),
                        child: const Icon(
                          Icons.security,
                          size: 60,
                          color: Color(0xFF1565C0),
                        ),
                      ).animate().scale(duration: 600.ms).fadeIn(),
                      
                      const SizedBox(height: 32),
                      
                      // Title
                      Text(
                        'IT-Sicherheit',
                        style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: 32,
                        ),
                        textAlign: TextAlign.center,
                      ).animate().slideY(duration: 600.ms, delay: 200.ms).fadeIn(),
                      
                      Text(
                        'Lernspiel',
                        style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                          color: Colors.white70,
                          fontWeight: FontWeight.w300,
                          fontSize: 24,
                        ),
                        textAlign: TextAlign.center,
                      ).animate().slideY(duration: 600.ms, delay: 300.ms).fadeIn(),
                      
                      const SizedBox(height: 16),
                      
                      // Subtitle
                      Text(
                        'Dein Weg zum Fachinformatiker',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          color: Colors.white70,
                          fontSize: 16,
                        ),
                        textAlign: TextAlign.center,
                      ).animate().slideY(duration: 600.ms, delay: 400.ms).fadeIn(),
                      
                      const SizedBox(height: 48),
                      
                      // Description Card
                      Card(
                        elevation: 8,
                        child: Padding(
                          padding: const EdgeInsets.all(20.0),
                          child: Column(
                            children: [
                              Icon(
                                Icons.school,
                                size: 40,
                                color: Theme.of(context).primaryColor,
                              ),
                              const SizedBox(height: 16),
                              Text(
                                'Übernimm die Leitung eines wichtigen IT-Projekts!',
                                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                  fontWeight: FontWeight.bold,
                                ),
                                textAlign: TextAlign.center,
                              ),
                              const SizedBox(height: 12),
                              Text(
                                'Durchlaufe drei spannende Phasen:\\n'
                                '• IT-Infrastruktur einrichten\\n'
                                '• Kundenberatung führen\\n'
                                '• Sicherheitskonzept implementieren',
                                style: Theme.of(context).textTheme.bodyLarge,
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                        ),
                      ).animate().scale(duration: 600.ms, delay: 500.ms).fadeIn(),
                      
                      const SizedBox(height: 32),
                      
                      // Start Button
                      SizedBox(
                        width: double.infinity,
                        height: 56,
                        child: ElevatedButton.icon(
                          onPressed: () {
                            final gameProvider = Provider.of<GameProvider>(context, listen: false);
                            gameProvider.initializeGame();
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (context) => const GameScreen(),
                              ),
                            );
                          },
                          icon: const Icon(Icons.play_arrow, size: 28),
                          label: Text(
                            'Spiel starten',
                            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(28),
                            ),
                          ),
                        ),
                      ).animate().slideY(duration: 600.ms, delay: 600.ms).fadeIn(),
                      
                      const SizedBox(height: 16),
                      
                      // Info Row
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _InfoChip(
                            icon: Icons.quiz,
                            label: '100+ Fragen',
                          ),
                          const SizedBox(width: 16),
                          _InfoChip(
                            icon: Icons.timeline,
                            label: '3 Phasen',
                          ),
                          const SizedBox(width: 16),
                          _InfoChip(
                            icon: Icons.emoji_events,
                            label: 'Interaktiv',
                          ),
                        ],
                      ).animate().slideY(duration: 600.ms, delay: 700.ms).fadeIn(),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _InfoChip extends StatelessWidget {
  final IconData icon;
  final String label;

  const _InfoChip({
    required this.icon,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.2),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            size: 16,
            color: Colors.white,
          ),
          const SizedBox(width: 4),
          Text(
            label,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 12,
              fontWeight: FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }
}
