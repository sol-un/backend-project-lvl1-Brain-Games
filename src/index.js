import readlineSync from 'readline-sync';

// Use hoisting for the 'userName' variable to pass around all functions.
let userName;

// Actually assign the 'userName' value.
const greetAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// Generate a random number for all different games.
const getRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min) + min);

// Receive and verify a question/answer pair from a game module.
const playGame = (question, answer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (userAnswer) {
    case answer:
      console.log('Correct!');
      return true;
    default:
      console.log(`The answer "${userAnswer}" is wrong :( The correct answer is "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
  }
};

// Congratulate on finishing a game.
const showGoodEnding = () => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  greetAndAskName, playGame, getRandom, showGoodEnding,
};
