import 'package:flutter/material.dart';
import '../models/question.dart';

class GameProgressIndicator extends StatelessWidget {
  final GameProgress progress;
  final String currentPhase;
  final int questionIndex;
  final int totalQuestions;

  const GameProgressIndicator({
    super.key,
    required this.progress,
    required this.currentPhase,
    required this.questionIndex,
    required this.totalQuestions,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          // Phase Progress
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Frage ${questionIndex + 1} von $totalQuestions',
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                decoration: BoxDecoration(
                  color: _getPhaseColor(currentPhase).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: _getPhaseColor(currentPhase)),
                ),
                child: Text(
                  _getPhaseShortName(currentPhase),
                  style: TextStyle(
                    color: _getPhaseColor(currentPhase),
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
          
          const SizedBox(height: 12),
          
          // Progress Bar
          LinearProgressIndicator(
            value: (questionIndex + 1) / totalQuestions,
            backgroundColor: Colors.grey[300],
            valueColor: AlwaysStoppedAnimation<Color>(_getPhaseColor(currentPhase)),
            minHeight: 6,
          ),
          
          const SizedBox(height: 16),
          
          // Statistics Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _StatItem(
                icon: Icons.check_circle,
                label: 'Richtig',
                value: '${progress.correctAnswers}',
                color: Colors.green,
              ),
              _StatItem(
                icon: Icons.schedule,
                label: 'Verzögerungen',
                value: '${progress.timeDelays}',
                color: Colors.orange,
              ),
              _StatItem(
                icon: Icons.percent,
                label: 'Genauigkeit',
                value: '${(progress.accuracyPercentage * 100).round()}%',
                color: progress.accuracyPercentage >= 0.8 ? Colors.green : 
                       progress.accuracyPercentage >= 0.6 ? Colors.orange : Colors.red,
              ),
            ],
          ),
        ],
      ),
    );
  }

  Color _getPhaseColor(String phase) {
    switch (phase) {
      case 'IT-Systeme und Netzwerktechnik':
        return const Color(0xFF1565C0); // Blue
      case 'Wirtschafts- und Geschäftsprozesse':
        return const Color(0xFF558B2F); // Green
      case 'IT-Sicherheit und Datenschutz':
        return const Color(0xFFD32F2F); // Red
      default:
        return Colors.grey;
    }
  }

  String _getPhaseShortName(String phase) {
    switch (phase) {
      case 'IT-Systeme und Netzwerktechnik':
        return 'Phase 1';
      case 'Wirtschafts- und Geschäftsprozesse':
        return 'Phase 2';
      case 'IT-Sicherheit und Datenschutz':
        return 'Phase 3';
      default:
        return 'Phase';
    }
  }
}

class _StatItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final Color color;

  const _StatItem({
    required this.icon,
    required this.label,
    required this.value,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Icon(
          icon,
          size: 20,
          color: color,
        ),
        const SizedBox(height: 4),
        Text(
          value,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
            color: color,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          label,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
            color: Colors.grey[600],
            fontSize: 10,
          ),
        ),
      ],
    );
  }
}
