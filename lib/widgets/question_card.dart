import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../models/question.dart';

class QuestionCard extends StatelessWidget {
  final Question question;
  final String? selectedAnswer;
  final Function(String)? onAnswerSelected;
  final bool showCorrectAnswer;

  const QuestionCard({
    super.key,
    required this.question,
    this.selectedAnswer,
    this.onAnswerSelected,
    this.showCorrectAnswer = false,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Question Image (if available)
          if (question.imagePath != null)
            Container(
              width: double.infinity,
              height: 200,
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
                color: Colors.grey[200],
              ),
              child: ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
                child: _buildQuestionImage(),
              ),
            ),
          
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Category Badge
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    color: _getCategoryColor(question.category).withOpacity(0.1),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(
                      color: _getCategoryColor(question.category),
                      width: 1,
                    ),
                  ),
                  child: Text(
                    _getCategoryShortName(question.category),
                    style: TextStyle(
                      color: _getCategoryColor(question.category),
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                
                const SizedBox(height: 16),
                
                // Question Text
                Text(
                  question.question,
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                    height: 1.3,
                  ),
                ),
                
                const SizedBox(height: 24),
                
                // Answer Options
                ...question.options.asMap().entries.map((entry) {
                  final index = entry.key;
                  final option = entry.value;
                  final optionLetter = option.substring(0, 1); // A, B, C, D
                  
                  Color? backgroundColor;
                  Color? borderColor;
                  Color? textColor;
                  
                  if (showCorrectAnswer) {
                    if (optionLetter == question.correctAnswer) {
                      backgroundColor = Colors.green.withOpacity(0.1);
                      borderColor = Colors.green;
                      textColor = Colors.green[700];
                    } else if (optionLetter == selectedAnswer && optionLetter != question.correctAnswer) {
                      backgroundColor = Colors.red.withOpacity(0.1);
                      borderColor = Colors.red;
                      textColor = Colors.red[700];
                    }
                  } else if (selectedAnswer == optionLetter) {
                    backgroundColor = Theme.of(context).primaryColor.withOpacity(0.1);
                    borderColor = Theme.of(context).primaryColor;
                    textColor = Theme.of(context).primaryColor;
                  }
                  
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12.0),
                    child: InkWell(
                      onTap: () => onAnswerSelected?.call(optionLetter),
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: backgroundColor ?? Colors.grey[50],
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: borderColor ?? Colors.grey[300]!,
                            width: 2,
                          ),
                        ),
                        child: Row(
                          children: [
                            // Option Letter Circle
                            Container(
                              width: 32,
                              height: 32,
                              decoration: BoxDecoration(
                                color: borderColor ?? Colors.grey[400],
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: Center(
                                child: Text(
                                  optionLetter,
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16,
                                  ),
                                ),
                              ),
                            ),
                            
                            const SizedBox(width: 16),
                            
                            // Option Text
                            Expanded(
                              child: Text(
                                option.substring(3), // Remove "A) ", "B) ", etc.
                                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                  color: textColor,
                                  fontWeight: selectedAnswer == optionLetter ? FontWeight.bold : FontWeight.normal,
                                ),
                              ),
                            ),
                            
                            // Checkmark or X for feedback
                            if (showCorrectAnswer && optionLetter == question.correctAnswer)
                              const Icon(
                                Icons.check_circle,
                                color: Colors.green,
                                size: 24,
                              )
                            else if (showCorrectAnswer && optionLetter == selectedAnswer && optionLetter != question.correctAnswer)
                              const Icon(
                                Icons.cancel,
                                color: Colors.red,
                                size: 24,
                              ),
                          ],
                        ),
                      ),
                    ).animate().slideX(duration: 300.ms, delay: (index * 100).ms).fadeIn(),
                  );
                }).toList(),
                
                // Explanation (if available and showing correct answer)
                if (showCorrectAnswer && question.explanation != null)
                  Container(
                    margin: const EdgeInsets.only(top: 16),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.blue[50],
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.blue[200]!),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(
                          Icons.lightbulb,
                          color: Colors.blue[600],
                          size: 20,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            question.explanation!,
                            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                              color: Colors.blue[700],
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ).animate().slideY(duration: 400.ms).fadeIn(),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuestionImage() {
    // Since we can't load actual images in this demo, we'll create a placeholder
    // with an icon representing the question category
    IconData iconData;
    switch (question.category) {
      case 'IT-Systeme und Netzwerktechnik':
        iconData = Icons.computer;
        break;
      case 'Wirtschafts- und Geschäftsprozesse':
        iconData = Icons.business;
        break;
      case 'IT-Sicherheit und Datenschutz':
        iconData = Icons.security;
        break;
      default:
        iconData = Icons.help;
    }

    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            _getCategoryColor(question.category).withOpacity(0.8),
            _getCategoryColor(question.category),
          ],
        ),
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              iconData,
              size: 64,
              color: Colors.white,
            ),
            const SizedBox(height: 8),
            Text(
              _getCategoryShortName(question.category),
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Color _getCategoryColor(String category) {
    switch (category) {
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

  String _getCategoryShortName(String category) {
    switch (category) {
      case 'IT-Systeme und Netzwerktechnik':
        return 'IT-Systeme';
      case 'Wirtschafts- und Geschäftsprozesse':
        return 'Geschäftsprozesse';
      case 'IT-Sicherheit und Datenschutz':
        return 'IT-Sicherheit';
      default:
        return 'Kategorie';
    }
  }
}
