#!/usr/bin/env node
import {
  greetAndAskName, playGame, getRandom, showGoodEnding,
} from '../../src/index.js';


const getQuestionAnswerPair = () => {
  // Choose the first number in the progression between 1-100 (default behavior) and an
  // increment between 1-10.
  const progression = [getRandom()];
  const increment = getRandom(10);

  // Add nine more numbers to the progression.
  for (let i = 0; i < 9; i += 1) {
    const current = progression[i];
    const next = current + increment;
    progression.push(next);
  }

  // Choose a number in the progression, aka the answer, an replace with '..'
  const answer = progression[Math.floor(Math.random() * progression.length)];
  const answerIndex = progression.indexOf(answer);
  progression[answerIndex] = '..';

  // Set up an array with the progression as the 0th element and the answer as the 1st.
  const questionAnswerPair = [];
  questionAnswerPair.push(progression);
  questionAnswerPair.push(answer);

  return questionAnswerPair;
};

const runGame = () => {
  console.log('Find the number missing in the progression.');
  for (let i = 3; i > 0; i -= 1) {
    const questionAnswerPair = getQuestionAnswerPair();
    const question = questionAnswerPair[0].join(' ');
    const answer = `${questionAnswerPair[1]}`;
    if (!playGame(question, answer)) {
      return;
    }
  }
  showGoodEnding();
};

greetAndAskName();
runGame();
