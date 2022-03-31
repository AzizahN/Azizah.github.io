// the screen shows number
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

// number onclick
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // show number
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// saved numbers and operator for calculations
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// operator onclick
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// calculate
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// calculate function
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

// AC button
const allClearBtn = document.querySelector(".all-clear");

allClearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// AC function
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// clear button
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  clear();
  updateScreen(currentNumber);
});

// clear function
const clear = () => {
  prevNumber = prevNumber;
  calculationOperator = calculationOperator;
  currentNumber = currentNumber.substring(0, currentNumber.length - 1);
};

// calculate decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// input decimal function
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
