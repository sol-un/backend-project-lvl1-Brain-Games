import {
  playGame, getRandom,
} from '../index.js';

const gameRules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const qaSet = [];
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isPrime(question) ? 'yes' : 'no';
    const qaPair = [question, answer];
    qaSet.push(qaPair);
  }
  playGame(qaSet, gameRules);
};
