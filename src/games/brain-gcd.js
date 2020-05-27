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
  const question = [getRandom(), getRandom()];
  const answer = evaluateGcd(...question);
  return [question.join(' '), `${answer}`];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
