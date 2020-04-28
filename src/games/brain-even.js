import {
  greetAndAskName, playGame, getRandom, showGoodEnding, showBadEnding,
} from '../index.js';

export default () => {
  greetAndAskName();
  const isEven = (x) => x % 2 === 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    if (!playGame(question, answer)) {
      showBadEnding();
      return;
    }
  }
  showGoodEnding();
};
