import {
  playGame, getRandom,
} from '../index.js';

const gameRules = 'Find the number missing in the progression.';

const hideElement = (progression) => {
  const modifiedProgression = [...progression];
  const hiddenIndex = getRandom(modifiedProgression.length, 0);
  modifiedProgression[hiddenIndex] = '..';

  return modifiedProgression;
};

const evalHidden = (progression, increment) => {
  const hiddenIndex = progression.indexOf('..');
  if (hiddenIndex === 0) {
    return progression[1] - increment;
  }
  const firstElement = progression[0];
  const hiddenElement = firstElement + increment * hiddenIndex;
  return hiddenElement;
};

const generateQaPair = () => {
  const progression = [getRandom()];
  const increment = getRandom(10);
  const lastIndex = 9;

  for (let i = 0; i < lastIndex; i += 1) {
    const current = progression[i];
    const next = current + increment;
    progression.push(next);
  }

  const question = hideElement(progression);
  const answer = `${evalHidden(question, increment)}`;
  return [question.join(' '), answer];
};

export default () => {
  const qaSet = [];
  for (let i = 3; i > 0; i -= 1) {
    const qaPair = generateQaPair();
    qaSet.push(qaPair);
  }
  playGame(qaSet, gameRules);
};
