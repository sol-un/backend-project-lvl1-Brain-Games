import {
  greetAndAskName, playGame, getRandom, showGoodEnding, showBadEnding,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

export default () => {
  greetAndAskName();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isPrime(question) ? 'yes' : 'no';
    if (!playGame(question, answer)) {
      showBadEnding();
      return;
    }
  }
  showGoodEnding();
};
