import math from 'mathjs';
import {
  playGame, getRandom,
} from '../index.js';

const gameRules = 'Find the greatest common divisor of the numbers provided.';

export default () => {
  const qaSet = [];
  for (let i = 3; i > 0; i -= 1) {
    const num1 = getRandom();
    const num2 = getRandom();

    const question = `${num1} ${num2}`;
    const answer = `${math.gcd(num1, num2)}`;
    const qaPair = [question, answer];
    qaSet.push(qaPair);
  }
  playGame(qaSet, gameRules);
};
