//calculator

let firstNumber = 0;
let secondNumber = 0;
let operand = "+";
let displayedValue = 0;

function displayValues() {
  let equationContainer = document.querySelector(".equation-contanier");
  let div = document.createElement("div");
  div.textContent = `${firstNumber}${operand}${secondNumber}`;
  equationContainer.appendChild(div);
  console.log("after");
}
displayValues();

let calcButton = document.querySelector(".calc-button");

function appendNumber() {
  const parent = document.querySelector(".equation-container");
  parent.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.addEventListener("mouseover", hoverGrid);
  parent.appendChild(newDiv);
}

appendNumber();
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (sum) {
  let sum1 = sum.reduce((partialSum, a) => partialSum + a, 0);
  //onsole.log(sum1);
  return sum1;
};
//sum([7,11,10])

const multiply = function (arrayMultiple) {
  // console.log(num1 * num2)
  let multiple1 = arrayMultiple.reduce(
    (partialMultiple, a) => partialMultiple * a,
    1
  );
  //console.log(multiple1)
  return multiple1;
};

const factorial = function (num1) {
  let factorialArray = [];
  for (i = 1; i <= num1; i++) {
    //console.log(factorialArray.push(i))
    factorialArray.push(i);
  }
  //console.log(factorialArray)

  let factorial1 = factorialArray.reduce(
    (partialMultiple, a) => partialMultiple * a,
    1
  );
  console.log(factorial1);
  return factorial1;
};

function appendNumber() {
  let numberToBeApended = document.getElementsByClassName("calcs-button");
  let formedEquation = document.createElement("div");
  let newEquation = formedEquation.innerText();
  formedEquation.append(document.createElement("div"));
  console.log(numberToBeApended, formedEquation, "logged");
  //numberToBeApended.innerHTML
}
