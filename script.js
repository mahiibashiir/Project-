// Correct answers for each question
const correctAnswers = ['a', 'd', 'd', 'c', 'b']; // Q1 to Q5

// Get quiz form and result display
const quizForm = document.getElementById('quiz-form');
const resultDisplay = document.getElementById('result');

// Handle form submission
quizForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form reload

  let score = 0;

  // Collect user answers
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value
  ];

  // Compare user answers to correct answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1; // Add 1 point for each correct answer
    }
  });

  // Display score
  resultDisplay.textContent = `You scored ${score} out of ${correctAnswers.length}`;
});
