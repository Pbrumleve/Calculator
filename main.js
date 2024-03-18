let numOne = '';
let numTwo = '';
let operator = '';
let answer = '';

const content = document.querySelector('.display');
const solution = document.querySelector('.solution');
const equation = document.querySelector('.equation');
const message = document.querySelector('.message');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', populateDisplay());
});

function populateDisplay(input) {
  if (input === 'clear') {
    clearDisplay();
    console.log(numOne);
  } else if (input === 'backspace') {
    if (operator === '') {
      numOne = numOne.slice(0, -1);
      console.log(numOne);
    } else if (numTwo === '') {
      operator = '';
      console.log(operator);
    } else {
      numTwo = numTwo.slice(0, -1);
      console.log(numTwo);
    };
  } else if (input === '=' && numOne !== '' && numTwo !== '' && operator !== '') {
    operate(numOne, numTwo, operator);
    console.log(answer);
    numOne = answer;
    numTwo = '';
    operator = '';
  } else if (input === '=' && (numOne === '' || numTwo === '')) {
    console.log('Please have a number followed by an operator followed by a number chosen before clicking equals. Try again!')
    clearDisplay()
  } else {
    if (operator === '') {
      if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || (input === '.' && !numOne.includes('.'))) {
        numOne += input;
        console.log(numOne);  
      } else if (input === '+' || input === '-' || input === '*' || input === '/') {
        operator = input;
        console.log(operator);
      } else {console.log('Invalid input!')};
    } else {
      if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || (input === '.' && !numTwo.includes('.'))) {
        numTwo += input;
        console.log(numTwo);
      } else {console.log('Invalid input!')};
    };
  };
};

function clearDisplay() {
  numOne = '';
  numTwo = '';
  operator = '';
  answer = '';
  solution.textContent = 0;
  equation.textcontent = 0;
  content.appendChild(solution);
  content.appendChild(equation);
}

function operate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  switch (operator) {
    case '+':
      answer = add(numOne, numTwo);
      break;
    case '-':
      answer = subtract(numOne, numTwo);
      break;
    case '*':
      answer = multiply(numOne, numTwo);
      break;
    case '/':
      answer = divide(numOne, numTwo);
      break;
    default:
      answer = 'ERROR';
      break;
  };
  return answer
};

function add(x, y) {
  return answer = x + y;
};

function subract(x, y) {
  return answer = x - y;
};

function multiply(x, y) {
  return answer = x * y;
};

function divide(x, y) {
  if (y === 0) {
    return console.log(`Nice try!`)
  } else {
  answer = x / y;
  return round(answer);
  }
};

function round(num) {
  let stepOne = 1000 * num;
  return Math.round(stepOne) / 1000;
};

window.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
})