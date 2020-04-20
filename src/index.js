import readlineSync from 'readline-sync';

let userName;

const greetAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const playGame = (question, answer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (userAnswer) {
    case answer:
      console.log('Correct!');
      return true;
    default:
      console.log(`"${userAnswer}" is a wrong answer :( The correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
  }
};

const showGoodEnding = () => {
  console.log(`Congratulations, ${userName}!`);
};

export { greetAndAskName, playGame, showGoodEnding };
