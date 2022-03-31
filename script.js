// the screen shows number
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number, operator) => {
  if (number) {
    calculatorScreen.value = number;
  } else {
    calculatorScreen.value = operator;
  }
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
  updateScreen(operator);
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
  if (currentNumber === "0") {
    currentNumber === "0";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  prevNumber = prevNumber;
  calculationOperator = calculationOperator;
};

// calculate decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// input decimal function
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// calculate percentage
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
  inputPercent(event.target.value);
  updateScreen(currentNumber);
});

// input percentage function
inputPercent = () => {
  if (currentNumber.includes("%")) {
    return;
  }
  if (currentNumber === "0") {
    return 0;
  }
  currentNumber = currentNumber/100 ;
}

