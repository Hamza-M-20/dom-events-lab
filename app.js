
const numbers = document.querySelectorAll('.button.numbers');
const display = document.querySelector('.display');
const equals = document.querySelector('.button.equals');
const operator = document.querySelectorAll('.button.operator');

let firstNumber = null;
let secondNumber = null;

numbers.forEach((number) => {
    number.addEventListener("click", handleNumberclick);
});

equals.addEventListener("click", handleEqualsclick);

operator.forEach((operator) => {
    operator.addEventListener("click", handleOperatorclick);
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
    operator = event.target.textContent;
    console.log("my operator is", event.target.textContent);

};
function handleEqualsclick(event) {
    if (operator === "+") {
        result = firstNumber + secondNumber;
        console.log("i'm going to add");
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
        console.log("i'm going to subtract");
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
        console.log("i'm going to multiply");
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
        console.log("i'm going to divide");
    } else {
        console.log("i'm going to clear");
    }
    display.innerHTML = result;
       console.log("Result", result);
    }
    console.log("time to calculate");
