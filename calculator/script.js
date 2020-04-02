let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

const calcScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}

const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currNumber;
    };
    
    calcOperator = operator;
    currNumber = '';
}


const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value); 
        updateScreen(currNumber); 
    }); 
});

const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number
    } else {
        currNumber += number  
    }
}

const clearbtn = document.querySelector(".all-clear");

const clear = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '';
}

clearbtn.addEventListener('click', () => {
    clear();
    updateScreen(currNumber);
});


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currNumber);
});

const calculate = () => {
    let result ='';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break
        case "*":
            result = prevNumber * currNumber;
            break
        case "/":
            result = prevNumber / currNumber;
            break 
        default:
            break
    }
    currNumber = result;
    calcOperator = '';

}

const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    if(currNumber.includes(".")) {
        return
    } 
    currNumber += dot
}

const percent = document.querySelector(".percentage");

percent.addEventListener('click', () => {
    currNumber = (prevNumber *currNumber)/100;
    updateScreen(currNumber);
});