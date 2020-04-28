import math from 'mathjs';
import {
  greetAndAskName, playGame, getRandom, showGoodEnding, showBadEnding,
} from '../index.js';

export default () => {
  greetAndAskName();
  const operators = ['+', '-', '*'];
  const getOperator = () => operators[Math.floor(Math.random() * operators.length)];
  console.log('Solve the expressions provided.');
  for (let i = 3; i > 0; i -= 1) {
    const question = `${getRandom()} ${getOperator()} ${getRandom()}`;
    const answer = `${math.evaluate(question)}`;
    if (!playGame(question, answer)) {
      showBadEnding();
      return;
    }
  }
  showGoodEnding();
};
