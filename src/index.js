import readlineSync from 'readline-sync';

// Assign value to userName.
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

// Generate a random number for all different games.
const getRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min) + min);

// Play games using data from the game modules.
const playGame = (qaSet, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(gameRules);
  for (let i = 0; i < qaSet.length; i += 1) {
    console.log(`Question: ${qaSet[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== qaSet[i][1]) {
      console.log(`The answer "${userAnswer}" is wrong :( The correct answer is "${qaSet[i][1]}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  playGame, getRandom,
};
