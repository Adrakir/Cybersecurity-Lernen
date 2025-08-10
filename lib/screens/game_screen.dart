import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../providers/game_provider.dart';
import '../models/question.dart';
import '../widgets/question_card.dart';
import '../widgets/progress_indicator.dart';
import '../widgets/story_feedback.dart';
import 'results_screen.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  String? selectedAnswer;
  bool showFeedback = false;
  
  @override
  Widget build(BuildContext context) {
    return Consumer<GameProvider>(
      builder: (context, gameProvider, child) {
        if (gameProvider.gameCompleted) {
          return const ResultsScreen();
        }

        final question = gameProvider.currentQuestion;
        
        if (question == null) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('Spiel wird geladen...'),
            ),
            body: const Center(
              child: CircularProgressIndicator(),
            ),
          );
        }

        return Scaffold(
          appBar: AppBar(
            title: Text(gameProvider.getPhaseTitle(gameProvider.currentPhase)),
            backgroundColor: _getPhaseColor(gameProvider.currentPhase),
            elevation: 0,
            actions: [
              IconButton(
                icon: const Icon(Icons.home),
                onPressed: () => Navigator.of(context).popUntil((route) => route.isFirst),
              ),
            ],
          ),
          body: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  _getPhaseColor(gameProvider.currentPhase),
                  _getPhaseColor(gameProvider.currentPhase).withOpacity(0.1),
                ],
              ),
            ),
            child: SafeArea(
              child: Column(
                children: [
                  // Progress Indicator
                  GameProgressIndicator(
                    progress: gameProvider.progress,
                    currentPhase: gameProvider.currentPhase,
                    questionIndex: gameProvider.currentQuestionIndex,
                    totalQuestions: gameProvider.totalQuestionsInPhase,
                  ),
                  
                  // Phase Description
                  Container(
                    width: double.infinity,
                    margin: const EdgeInsets.all(16),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 4,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Text(
                      gameProvider.getPhaseDescription(gameProvider.currentPhase),
                      style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: Colors.grey[700],
                        fontStyle: FontStyle.italic,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ).animate().slideX(duration: 500.ms).fadeIn(),
                  
                  // Question Card
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          QuestionCard(
                            question: question,
                            selectedAnswer: selectedAnswer,
                            onAnswerSelected: showFeedback ? null : (answer) {
                              setState(() {
                                selectedAnswer = answer;
                              });
                            },
                            showCorrectAnswer: showFeedback,
                          ),
                          
                          const SizedBox(height: 20),
                          
                          // Story Feedback
                          if (showFeedback && gameProvider.lastStoryMessage != null)
                            StoryFeedback(
                              message: gameProvider.lastStoryMessage!,
                              isCorrect: selectedAnswer == question.correctAnswer,
                            ).animate().scale(duration: 400.ms).fadeIn(),
                          
                          const SizedBox(height: 20),
                          
                          // Action Button
                          SizedBox(
                            width: double.infinity,
                            height: 52,
                            child: ElevatedButton(
                              onPressed: selectedAnswer == null ? null : () {
                                if (!showFeedback) {
                                  // Show feedback first
                                  setState(() {
                                    showFeedback = true;
                                  });
                                  gameProvider.answerQuestion(selectedAnswer!);
                                } else {
                                  // Move to next question
                                  setState(() {
                                    selectedAnswer = null;
                                    showFeedback = false;
                                  });
                                }
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: selectedAnswer == null 
                                    ? Colors.grey 
                                    : (showFeedback ? Colors.green : _getPhaseColor(gameProvider.currentPhase)),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(26),
                                ),
                              ),
                              child: Text(
                                showFeedback ? 'Weiter' : 'Antwort bestätigen',
                                style: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
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
        return const Color(0xFF1565C0);
    }
  }
}
