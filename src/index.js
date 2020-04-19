import readlineSync from 'readline-sync';

const playEvenOdd = (userName) => {
  const isEven = (x) => x % 2 === 0;
  const getRandom = () => Math.floor(Math.random() * (99 - 1) + 1);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const random = getRandom();
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');

    switch (userAnswer) {
      case 'yes':
        if (isEven(random)) {
          console.log('Correct!');
          continue;
        }
        console.log('"Yes" is the wrong answer :( The correct answer was "no".');
        console.log(`Let's try again, ${userName}!`);
        return;
      case 'no':
        if (!isEven(random)) {
          console.log('Correct!');
          continue;
        }
        console.log('"No" is the wrong answer :( The correct answer was "yes".');
        console.log(`Let's try again, ${userName}!`);
        return;
      default:
        console.log(`"${userAnswer}" is not a correct input :(`);
        console.log(`Let's try again, ${userName}!`);
        return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playEvenOdd;
