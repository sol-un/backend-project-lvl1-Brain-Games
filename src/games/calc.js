import playGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Solve the expressions provided.';

const pickOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  return randomOperator;
};

const evalExpression = (operand1, operand2, operator) => {
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
  const operand1 = getRandom();
  const operand2 = getRandom();
  const operator = pickOperator();
  const answer = evalExpression(operand1, operand2, operator);
  return [`${operand1} ${operator} ${operand2}`, answer.toString()];
};

export default () => {
  playGame(gameDescription, generateQaPair);
};
