import 'package:flutter/foundation.dart';
import '../models/question.dart';
import '../data/questions_data.dart';

class GameProvider extends ChangeNotifier {
  List<Question> _allQuestions = [];
  List<Question> _currentPhaseQuestions = [];
  int _currentQuestionIndex = 0;
  int _correctAnswers = 0;
  int _timeDelays = 0;
  String _currentPhase = 'IT-Systeme und Netzwerktechnik';
  bool _gameCompleted = false;
  String? _lastStoryMessage;

  // Getters
  List<Question> get allQuestions => _allQuestions;
  Question? get currentQuestion => _currentPhaseQuestions.isNotEmpty &&
          _currentQuestionIndex < _currentPhaseQuestions.length
      ? _currentPhaseQuestions[_currentQuestionIndex]
      : null;
  int get correctAnswers => _correctAnswers;
  int get timeDelays => _timeDelays;
  String get currentPhase => _currentPhase;
  bool get gameCompleted => _gameCompleted;
  String? get lastStoryMessage => _lastStoryMessage;
  int get currentQuestionIndex => _currentQuestionIndex;
  int get totalQuestionsInPhase => _currentPhaseQuestions.length;

  GameProgress get progress => GameProgress(
        totalQuestions: _allQuestions.length,
        answeredQuestions: _getAnsweredQuestionsCount(),
        correctAnswers: _correctAnswers,
        timeDelays: _timeDelays,
        currentPhase: _currentPhase,
      );

  void initializeGame() {
    _allQuestions = QuestionsData.getAllQuestions();
    _startPhase('IT-Systeme und Netzwerktechnik');
    notifyListeners();
  }

  void _startPhase(String phase) {
    _currentPhase = phase;
    _currentPhaseQuestions = _allQuestions
        .where((question) => question.category == phase)
        .toList();
    _currentQuestionIndex = 0;
    
    // Shuffle questions in current phase
    _currentPhaseQuestions.shuffle();
    notifyListeners();
  }

  void answerQuestion(String selectedAnswer) {
    final question = currentQuestion;
    if (question == null) return;

    final isCorrect = selectedAnswer == question.correctAnswer;
    
    if (isCorrect) {
      _correctAnswers++;
      _lastStoryMessage = _getStoryMessage(true, _currentPhase);
    } else {
      _timeDelays++;
      _lastStoryMessage = _getStoryMessage(false, _currentPhase);
    }

    _currentQuestionIndex++;

    // Check if phase is completed
    if (_currentQuestionIndex >= _currentPhaseQuestions.length) {
      _moveToNextPhase();
    }

    notifyListeners();
  }

  void _moveToNextPhase() {
    switch (_currentPhase) {
      case 'IT-Systeme und Netzwerktechnik':
        _startPhase('Wirtschafts- und Geschäftsprozesse');
        break;
      case 'Wirtschafts- und Geschäftsprozesse':
        _startPhase('IT-Sicherheit und Datenschutz');
        break;
      case 'IT-Sicherheit und Datenschutz':
        _gameCompleted = true;
        break;
    }
  }

  void resetGame() {
    _currentQuestionIndex = 0;
    _correctAnswers = 0;
    _timeDelays = 0;
    _currentPhase = 'IT-Systeme und Netzwerktechnik';
    _gameCompleted = false;
    _lastStoryMessage = null;
    _startPhase('IT-Systeme und Netzwerktechnik');
    notifyListeners();
  }

  int _getAnsweredQuestionsCount() {
    int answered = 0;
    
    // Count completed phases
    final phases = [
      'IT-Systeme und Netzwerktechnik',
      'Wirtschafts- und Geschäftsprozesse',
      'IT-Sicherheit und Datenschutz'
    ];
    
    final currentPhaseIndex = phases.indexOf(_currentPhase);
    
    // Add questions from completed phases
    for (int i = 0; i < currentPhaseIndex; i++) {
      answered += _allQuestions
          .where((q) => q.category == phases[i])
          .length;
    }
    
    // Add answered questions from current phase
    answered += _currentQuestionIndex;
    
    return answered;
  }

  String _getStoryMessage(bool isCorrect, String category) {
    final storyElements = QuestionsData.getStoryElements();
    final categoryStories = storyElements[category];
    
    if (categoryStories == null) return '';
    
    final messages = isCorrect ? categoryStories['richtig'] : categoryStories['falsch'];
    if (messages == null || messages.isEmpty) return '';
    
    return messages[(messages.length * 0.5).round() % messages.length];
  }

  String getPhaseTitle(String phase) {
    switch (phase) {
      case 'IT-Systeme und Netzwerktechnik':
        return 'Phase 1: IT-Infrastruktur';
      case 'Wirtschafts- und Geschäftsprozesse':
        return 'Phase 2: Kundenberatung';
      case 'IT-Sicherheit und Datenschutz':
        return 'Phase 3: IT-Sicherheit';
      default:
        return 'Unbekannte Phase';
    }
  }

  String getPhaseDescription(String phase) {
    switch (phase) {
      case 'IT-Systeme und Netzwerktechnik':
        return 'Bereite die Hardware- und Netzwerkkomponenten für das neue Büro vor.';
      case 'Wirtschafts- und Geschäftsprozesse':
        return 'Führe Kundenberatung durch und kläre Vertragsdetails.';
      case 'IT-Sicherheit und Datenschutz':
        return 'Erstelle und implementiere ein umfassendes Sicherheitskonzept.';
      default:
        return '';
    }
  }
}
