import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class StoryFeedback extends StatelessWidget {
  final String message;
  final bool isCorrect;

  const StoryFeedback({
    super.key,
    required this.message,
    required this.isCorrect,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isCorrect ? Colors.green[50] : Colors.red[50],
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: isCorrect ? Colors.green[300]! : Colors.red[300]!,
          width: 2,
        ),
        boxShadow: [
          BoxShadow(
            color: (isCorrect ? Colors.green : Colors.red).withOpacity(0.1),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          // Icon
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              color: isCorrect ? Colors.green : Colors.red,
              borderRadius: BorderRadius.circular(30),
            ),
            child: Icon(
              isCorrect ? Icons.check : Icons.close,
              size: 32,
              color: Colors.white,
            ),
          ).animate().scale(duration: 300.ms),
          
          const SizedBox(height: 16),
          
          // Feedback Title
          Text(
            isCorrect ? '✅ Richtige Entscheidung!' : '❌ Falsche Entscheidung',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              color: isCorrect ? Colors.green[700] : Colors.red[700],
              fontWeight: FontWeight.bold,
            ),
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 12),
          
          // Story Message
          Text(
            message,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: isCorrect ? Colors.green[600] : Colors.red[600],
              height: 1.4,
            ),
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 16),
          
          // Impact indicator
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              color: isCorrect ? Colors.green[100] : Colors.red[100],
              borderRadius: BorderRadius.circular(20),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(
                  isCorrect ? Icons.trending_up : Icons.trending_down,
                  size: 16,
                  color: isCorrect ? Colors.green[700] : Colors.red[700],
                ),
                const SizedBox(width: 8),
                Text(
                  isCorrect ? 'Projekt beschleunigt' : 'Projekt verzögert',
                  style: TextStyle(
                    color: isCorrect ? Colors.green[700] : Colors.red[700],
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
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
