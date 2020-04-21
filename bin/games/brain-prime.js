#!/usr/bin/env node
import {
  greetAndAskName, playGame, getRandom, showGoodEnding,
} from '../../src/index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const runGame = () => {
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isPrime(question) ? 'yes' : 'no';
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
runGame();
