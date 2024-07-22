const sum = (numFirst, numSecond) => {
  return numFirst + numSecond;
};

const diff = (numFirst, numSecond) => {
  return numFirst - numSecond;
};

const mult = (numFirst, numSecond) => {
  return numFirst * numSecond;
};

const div = (numFirst, numSecond) => {
  return numFirst / numSecond;
};

const mod = (numFirst, numSecond) => {
  return numFirst % numSecond;
};

const operate = (numFirst, numSecond, operator) => {
  switch (operator) {
    case "+":
      return sum(numFirst, numSecond);
    case "-":
      return diff(numFirst, numSecond);
    case "*":
      return mult(numFirst, numSecond);
    case "/":
      return div(numFirst, numSecond);
    case "%":
      return mod(numFirst, numSecond);
  }
};

let numFirst;
let numSecond;
let operator;

const input = document.querySelector(".display-input");
const clearButton = document.querySelector(".btn-clear");
const absButton = document.querySelector(".btn-abs");

const upgradeDisplay = (num) => {
  input.value += num;
};

const digitHandler = (num) => {
  upgradeDisplay(num);
};

clearButton.addEventListener("click", () => {
  input.value = "";
  input.setAttribute("placeholder", "0");
});

absButton.addEventListener("click", () => {
  let absNum = parseFloat(input.value);
  input.value = absNum * -1;
});

const determineOperator = (_operator) => {
  if (input.value != "") {
    numFirst = parseFloat(input.value);
    input.setAttribute("placeholder", input.value);
    input.value = "";
    operator = _operator;
    return;
  }
  return;
};

const calculateResult = () => {
  if (typeof numFirst !== "undefined") {
    numSecond = parseFloat(input.value);
    input.value = operate(numFirst, numSecond, operator);
    return;
  }
};

window.onload = () => {
  input.value = "";
  input.setAttribute("placeholder", "0");
};
