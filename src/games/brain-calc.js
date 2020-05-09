import math from 'mathjs';
import {
  playGame, getRandom,
} from '../index.js';

const gameRules = 'Solve the expressions provided.';

const pickOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(operators.length, 0)];
  return randomOperator;
};

export default () => {
  const qaSet = [];
  for (let i = 3; i > 0; i -= 1) {
    const question = `${getRandom()} ${pickOperator()} ${getRandom()}`;
    const answer = `${math.evaluate(question)}`;
    const qaPair = [question, answer];
    qaSet.push(qaPair);
  }
  playGame(qaSet, gameRules);
};
