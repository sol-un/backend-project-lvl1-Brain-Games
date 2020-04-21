#!/usr/bin/env node
import {
  greetAndAskName, playGame, getRandom, showGoodEnding,
} from '../../src/index.js';

const runGame = () => {
  const operators = ['+', '-', '*'];
  const getOperator = () => operators[Math.floor(Math.random() * operators.length)];
  console.log('Solve the expressions provided.');
  for (let i = 3; i > 0; i -= 1) {
    const question = `${getRandom()} ${getOperator()} ${getRandom()}`;
    const answer = `${eval(question)}`;
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
runGame();
