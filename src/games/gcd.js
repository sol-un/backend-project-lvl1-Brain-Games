import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Find the greatest common divisor of the numbers provided.';

const evaluateGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return evaluateGcd(num2, num1 % num2);
};

const generateQaPair = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const question = `${num1} ${num2}`;
  const answer = evaluateGcd(num1, num2);
  return [question, answer.toString()];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
