import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Find the number missing in the progression.';

const generateProgression = (firstElement, increment, cardinality = 10) => {
  const progression = [];
  for (let i = 0; i < cardinality; i += 1) {
    const element = firstElement + increment * i;
    progression.push(element);
  }
  return progression;
};

const hideElement = (progression, index) => {
  const newProgression = [...progression];
  newProgression[index] = '..';
  return newProgression;
};

const evalHidden = (progression, increment) => {
  const hiddenIndex = progression.indexOf('..');
  if (hiddenIndex === 0) {
    return progression[1] - increment;
  }
  const firstElement = progression[0];
  return firstElement + increment * hiddenIndex;
};

const generateQaPair = () => {
  const increment = getRandom(10);
  const progression = generateProgression(getRandom(), increment);
  const hiddenIndex = getRandom(progression.length);
  const question = hideElement(progression, hiddenIndex);
  const answer = evalHidden(question, increment);
  return [question.join(' '), `${answer}`];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
