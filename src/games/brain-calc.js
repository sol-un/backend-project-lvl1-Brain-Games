import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Solve the expressions provided.';

const pickOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(operators.length, 0)];
  return randomOperator;
};

const evalExpression = (operand1, operator, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error('Invalid data!');
  }
  return result;
};

const generateQaPair = () => {
  const question = [getRandom(), pickOperator(), getRandom()];
  const answer = evalExpression(...question);
  return [question.join(' '), `${answer}`];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
