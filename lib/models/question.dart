class Question {
  final String id;
  final String question;
  final List<String> options;
  final String correctAnswer;
  final String category;
  final String? imagePath;
  final String? explanation;

  Question({
    required this.id,
    required this.question,
    required this.options,
    required this.correctAnswer,
    required this.category,
    this.imagePath,
    this.explanation,
  });

  factory Question.fromMap(Map<String, dynamic> map) {
    return Question(
      id: map['id'] ?? '',
      question: map['frage'] ?? '',
      options: List<String>.from(map['optionen'] ?? []),
      correctAnswer: map['antwort'] ?? '',
      category: map['category'] ?? '',
      imagePath: map['imagePath'],
      explanation: map['explanation'],
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'frage': question,
      'optionen': options,
      'antwort': correctAnswer,
      'category': category,
      'imagePath': imagePath,
      'explanation': explanation,
    };
  }
}

class GameProgress {
  final int totalQuestions;
  final int answeredQuestions;
  final int correctAnswers;
  final int timeDelays;
  final String currentPhase;

  GameProgress({
    required this.totalQuestions,
    required this.answeredQuestions,
    required this.correctAnswers,
    required this.timeDelays,
    required this.currentPhase,
  });

  double get progressPercentage =>
      totalQuestions > 0 ? answeredQuestions / totalQuestions : 0.0;

  double get accuracyPercentage =>
      answeredQuestions > 0 ? correctAnswers / answeredQuestions : 0.0;
}

class StoryElement {
  final String message;
  final bool isCorrect;
  final String category;

  StoryElement({
    required this.message,
    required this.isCorrect,
    required this.category,
  });
}
