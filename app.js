
const numberButton = document.querySelector('.numbers');
const equalsButton = document.querySelector('.equals');
const operatorButton = document.querySelectorAll('.operator');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const button = document.querySelectorAll('.button');


let firstNumber = null;
let secondNumber = null;
let Operator = null;
let result = null;




numberButton.forEach((number) => {
    number.addEventListener("click", handleNumberclick);
});

//equals.addEventListener("click", function() {});



operatorButton.forEach((operator) => {
operator.addEventListener("click", handleOperatorclick);
});
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  
  });
  

function handleNumberclick(event)  {
    if (firstNumber) {
        display.innerHTML = `${firstNumber} ${operator} ${event.target.textContent}`
        secondNumber = parseInt(event.target.textContent);
    } else {
        display.innerHTML = event.target.textContent
        firstNumber = parseInt(event.target.textContent);
    }
    console.log("i clicked on", event.target.textContent);
};

function handleOperatorclick(event) {
    Operator = event.target.textContent;
    display.innerHTML = `${firstNumber} ${operator}`;
    console.log("my operator is", event.target.textContent);

};
function handleEqualsclick(event) {
    if (Operator === "+") {
        result = firstNumber + secondNumber;
        console.log("i'm going to add");
    } else if (Operator === "-") {
        result = firstNumber - secondNumber;
        console.log("i'm going to subtract");
    } else if (Operator === "*") {
        result = firstNumber * secondNumber;
        console.log("i'm going to multiply");
    } else if (Operator === "/") {
        result = firstNumber / secondNumber;
        console.log("i'm going to divide");
    } else {
        console.log("i'm going to clear");
    }
    display.innerHTML = result;
       console.log("Result", result);
    }
    console.log("time to calculate");
