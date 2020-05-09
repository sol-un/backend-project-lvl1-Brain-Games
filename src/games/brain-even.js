import {
  playGame, getRandom,
} from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

export default () => {
  const qaSet = [];
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    const qaPair = [question, answer];
    qaSet.push(qaPair);
  }
  playGame(qaSet, gameRules);
};
