import readlineSync from 'readline-sync';

// Assign value to userName.
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

// Play games using data from the game modules.
const playGame = (gameDescription, generateQaPair) => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(gameDescription);
  const roundsCount = 3;
  for (let i = roundsCount; i > 0; i -= 1) {
    const [currentQuestion, currentAnswer] = generateQaPair();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== currentAnswer) {
      console.log(`The answer "${userAnswer}" is wrong :( The correct answer is "${currentAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { playGame as default };
