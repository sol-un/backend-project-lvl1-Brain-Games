#!/usr/bin/env node
import {
  greetAndAskName, playGame, getRandom, showGoodEnding,
} from '../../src/index.js';

const getGCD = (str) => {
  let [x, y] = [...str.split(' ')];
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const runGame = () => {
  console.log('Find the greatest common divisor of the numbers provided.');
  for (let i = 3; i > 0; i -= 1) {
    const question = `${getRandom()} ${getRandom()}`;
    const answer = `${getGCD(question)}`;
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
runGame();
