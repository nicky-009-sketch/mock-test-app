export const mockTestData = {
  id: 1,
  testName: "Math",
  duration:500,
  questions: [
    {
      id: 1,
      questionText: "What is 2 + 2?",
      options: [
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "4", isCorrect: true },
        { id: 3, text: "5", isCorrect: false },
        { id: 4, text: "7", isCorrect: false }
      ],
    },
    {
      id: 2,
      questionText: "What is 3 * 3?",
      options: [
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "12", isCorrect: false },
        { id: 3, text: "9", isCorrect: true },
        { id: 4, text: "10", isCorrect: false }
      ]
    },
    {
      id: 3,
      questionText: "What is 15 - 7?",
      options: [
        { id: 1, text: "8", isCorrect: true },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "7", isCorrect: false },
        { id: 4, text: "9", isCorrect: false }
      ]
    },
    {
      id: 4,
      questionText: "What is 12 / 4?",
      options: [
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: true },
        { id: 3, text: "4", isCorrect: false },
        { id: 4, text: "5", isCorrect: false }
      ]
    },
    {
      id: 5,
      questionText: "What is the square root of 16?",
      options: [
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: true },
        { id: 4, text: "5", isCorrect: false }
      ]
    }
  ]
};
