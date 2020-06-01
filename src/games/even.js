import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQaPair = () => {
  const question = getRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
