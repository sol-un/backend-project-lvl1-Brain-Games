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

const generateQaPair = () => {
  const increment = getRandom(1, 10);
  const progression = generateProgression(getRandom(), increment);
  const hiddenIndex = getRandom(0, progression.length - 1);
  const question = hideElement(progression, hiddenIndex);
  const answer = hiddenIndex === 0
    ? question[1] - increment
    : question[0] + increment * hiddenIndex;
  return [question.join(' '), answer.toString()];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
