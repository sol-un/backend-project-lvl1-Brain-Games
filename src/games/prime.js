import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQaPair = () => {
  const question = getRandom();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
