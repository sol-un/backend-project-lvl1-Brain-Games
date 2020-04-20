#!/usr/bin/env node
import { greetAndAskName, playGame, showGoodEnding } from '../../src/index.js';

const evenOddGame = () => {
  const isEven = (x) => x % 2 === 0;
  const getRandom = () => Math.floor(Math.random() * (99 - 1) + 1);
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
evenOddGame();
