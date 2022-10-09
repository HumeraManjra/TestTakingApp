const questions = [
  {
    category: "multiplication",
    question: "What is 2 x 2?",
    options: [
      { id: 0, text: "4", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 2 x 4?",
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "8", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 2 x 5?",
    options: [
      { id: 0, text: "10", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 2 x 8?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "25", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "16", isCorrect: true },
    ],
  },
  {
    category: "multiplication",
    question: "What is 2 x 10?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "20", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 5 x 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 6 x 3?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "18", isCorrect: true },
    ],
  },
  {
    category: "multiplication",
    question: "What is 10 x 3?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: true },
    ],
  },
  {
    category: "multiplication",
    question: "What is 25 x 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "100", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
  {
    category: "multiplication",
    question: "What is 4 x 4?",
    options: [
      { id: 0, text: "16", isCorrect: true },
      { id: 1, text: "100", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 2 + 2?",
    options: [
      { id: 0, text: "4", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 2 + 4?",
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "6", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 2 + 5?",
    options: [
      { id: 0, text: "7", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 2 + 8?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "25", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "10", isCorrect: true },
    ],
  },
  {
    category: "addition",
    question: "What is 2 + 10?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "12", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 9 + 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "11", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 6 + 5?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "11", isCorrect: true },
    ],
  },
  {
    category: "addition",
    question: "What is 10 + 3?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "13", isCorrect: true },
    ],
  },
  {
    category: "addition",
    question: "What is 25 + 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "29", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
  {
    category: "addition",
    question: "What is 7 + 4?",
    options: [
      { id: 0, text: "11", isCorrect: true },
      { id: 1, text: "100", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },

  {
    category: "subtraction",
    question: "What is 10 - 2?",
    options: [
      { id: 0, text: "8", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 2 - 4?",
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "2", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 12 - 5?",
    options: [
      { id: 0, text: "7", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 20 - 8?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "25", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "12", isCorrect: true },
    ],
  },
  {
    category: "subtraction",
    question: "What is 2 - 10?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "8", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 9 - 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "7", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 6 - 5?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "1", isCorrect: true },
    ],
  },
  {
    category: "subtraction",
    question: "What is 10 - 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "6", isCorrect: true },
    ],
  },
  {
    category: "subtraction",
    question: "What is 25 - 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "21", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
  {
    category: "subtraction",
    question: "What is 7 - 4?",
    options: [
      { id: 0, text: "3", isCorrect: true },
      { id: 1, text: "100", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },

  {
    category: "division",
    question: "What is 10 / 2?",
    options: [
      { id: 0, text: "5", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "50", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 20 / 4?",
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: true },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 12 / 4?",
    options: [
      { id: 0, text: "3", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "8", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 20 / 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "25", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "10", isCorrect: true },
    ],
  },
  {
    category: "division",
    question: "What is 6 / 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "3", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "13", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 8 / 4?",
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "2", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 25 / 5?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "15", isCorrect: false },
      { id: 3, text: "5", isCorrect: true },
    ],
  },
  {
    category: "division",
    question: "What is 16 / 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "4", isCorrect: true },
    ],
  },
  {
    category: "division",
    question: "What is 24 / 4?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "6", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
  {
    category: "division",
    question: "What is 21 / 3?",
    options: [
      { id: 0, text: "7", isCorrect: true },
      { id: 1, text: "100", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "30", isCorrect: false },
    ],
  },
];
export default questions;
