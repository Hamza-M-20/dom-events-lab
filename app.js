
const numberButtons = document.querySelectorAll('.number');
const equalsButton = document.querySelector('.equals');
const operatorButton = document.querySelectorAll('.operator');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const button = document.querySelectorAll('.button');


let firstNumber = null;
let secondNumber = null;
let Operator = null;
let currentValue = '0';
let waitingForSecondNumber = false;




numberButtons.forEach((number) => {
    number.addEventListener("click", handleNumberclick);
});

equalsButton.addEventListener("click", handleEqualsclick);



operatorButton.forEach((operator) => {
operator.addEventListener("click", handleOperatorclick);
});
calculator.addEventListener('click', (event) => {
    // Handle clear button
    if (event.target.textContent === 'C') {
        handleClear();
    }
});
  

function handleNumberclick(event)  {
    const number = event.target.textContent;
    
    if (waitingForSecondNumber) {
        currentValue = number;
        waitingForSecondNumber = false;
    } else {
        currentValue = currentValue === '0' ? number : currentValue + number;
    }
    
    display.innerHTML = currentValue;
    
    if (Operator === null) {
        firstNumber = parseFloat(currentValue);
    } else {
        secondNumber = parseFloat(currentValue);
    }
    
    console.log("i clicked on", number);
};

function handleOperatorclick(event) {
    const inputOperator = event.target.textContent;
    
  
    if (inputOperator === 'C') {
        return;
    }
    
   
    if (firstNumber !== null && Operator !== null && !waitingForSecondNumber) {
        calculate();
    }
    
    Operator = inputOperator;
    waitingForSecondNumber = true;
    if (firstNumber !== null) {
        display.innerHTML = `${firstNumber} ${Operator}`;
    }
    console.log("my operator is", inputOperator);
};
function handleEqualsclick(event) {
    if (Operator === null || secondNumber === null) {
        return;
    }
    
    calculate();
}

function calculate() {
    if (Operator === null || secondNumber === null) {
        return;
    }
    
    let result;
    
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
    }
    
    display.innerHTML = result;
    console.log("Result", result);
    
   
    firstNumber = result;
    secondNumber = null;
    Operator = null;
    currentValue = result.toString();
    waitingForSecondNumber = true;
}

function handleClear() {
    firstNumber = null;
    secondNumber = null;
    Operator = null;
    currentValue = '0';
    waitingForSecondNumber = false;
    display.innerHTML = '0';
    console.log("cleared");
}
