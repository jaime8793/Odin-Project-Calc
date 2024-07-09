document.addEventListener("DOMContentLoaded", () => {
  let firstNumber = [];
  let secondNumber = [];
  let operand = undefined;
  let answer = undefined;

  function appendNumber(event) {
    let parent = document.querySelector(".equation-container");
    const button = event.target;
    let digit = button.innerText;
    let pTagDigit = document.createElement("p");
    pTagDigit.innerText = digit.toString();
    if (operand === undefined) {
      firstNumber.push(digit);
      console.log("digit", button, firstNumber);
    } else {
      secondNumber.push(digit);
      console.log("digit", button, secondNumber);
    }
    parent.appendChild(pTagDigit);
  }

  function setOperand(event) {
    const button = event.target;
    operand = button.innerText;
    console.log("operand", operand);
  }

  function calculate() {
    let num1 = parseFloat(firstNumber.join(""));
    let num2 = parseFloat(secondNumber.join(""));
    switch (operand) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
      case "/":
        answer = num1 / num2;
        break;
      default:
        return;
    }
    console.log("answer", answer);
    displayAnswer(answer);
  }

  function displayAnswer(answer) {
    let parent = document.querySelector(".equation-container");
    let pTagAnswer = document.createElement("p");
    pTagAnswer.innerText = " = " + answer;
    parent.appendChild(pTagAnswer);
  }

  const calcButtons = document.querySelectorAll(
    ".calc-button:not(.operand-button):not(.equals-button)"
  );
  calcButtons.forEach((button) => {
    button.addEventListener("click", appendNumber);
  });

  const operandButtons = document.querySelectorAll(".operand-button");
  operandButtons.forEach((button) => {
    button.addEventListener("click", setOperand);
  });

  const equalsButton = document.querySelector(".equals-button");
  equalsButton.addEventListener("click", calculate);
});
