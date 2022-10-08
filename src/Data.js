import addition from "./asset/addition.png";
import division from "./asset/division.png";
import multiplication from "./asset/multiplication.png";
import subtraction from "./asset/subtraction.png";

const TestTypes = [
  {
    img: addition,
    heading: "Addition Test",
    id: "test001",
  },

  {
    img: multiplication,
    heading: "Multiplication Test",
    id: "test002",
  },
  {
    img: subtraction,
    heading: "Subtraction Test",
    id: "test003",
  },
  {
    img: division,
    heading: "Division Test",
    id: "test004",
  },
];

export default TestTypes;

const questionBank = [
  {
    question: "What is 2 x 2?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "4", isCorrect: true },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
  },
];
