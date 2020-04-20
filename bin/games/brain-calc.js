#!/usr/bin/env node
import { greetAndAskName, playGame, showGoodEnding } from '../../src/index.js';

const calculatorGame = () => {
  const operators = ['+', '-', '*'];
  const getRandom = () => Math.floor(Math.random() * (99 - 1) + 1);
  const getOperator = () => operators[Math.floor(Math.random() * operators.length)];
  for (let i = 3; i > 0; i -= 1) {
    const question = `${getRandom()} ${getOperator()} ${getRandom()}`;
    const answer = String(eval(question));
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
calculatorGame();
