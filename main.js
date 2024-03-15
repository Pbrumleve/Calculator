let numOne;
let numTwo;
let operator;

function operate(numOne, numTwo, operator) {
  let operatorInput = operator.toString();

  switch (operatorInput) {
    case '+':
      add(numOne, numTwo);
      break;
    case '-':
      subtract(numOne, numTwo);
      break;
    case '*':
      multiply(numOne, numTwo);
      break;
    case '/':
      divide(numOne, numTwo);
      break;
    default:
      'ERROR';
      break;
  };
};

function add(x, y) {
  return x + y;
};

function subract(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
};

function divide(x, y) {
  return x / y;
};