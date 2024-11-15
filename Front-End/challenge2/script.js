'use strict';

const display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let lastButtonPressed = null;

function updateDisplay() {
    display.innerText = currentInput;
}

function handleNumber(num) {
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    lastButtonPressed = 'number';
    updateDisplay();
}

function handleOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    currentInput = '0';
    lastButtonPressed = 'operator';
    updateDisplay();
    console.log(`Saved value: ${previousInput}, Operator: ${operator}`);
}

function calculate() {
    if (lastButtonPressed === 'equals') {
        clearDisplay();
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'X':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    lastButtonPressed = 'equals';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    lastButtonPressed = null;
    updateDisplay();
}

document.getElementById('zero').addEventListener('click', () => handleNumber('0'));
document.getElementById('one').addEventListener('click', () => handleNumber('1'));
document.getElementById('two').addEventListener('click', () => handleNumber('2'));
document.getElementById('three').addEventListener('click', () => handleNumber('3'));
document.getElementById('four').addEventListener('click', () => handleNumber('4'));
document.getElementById('five').addEventListener('click', () => handleNumber('5'));
document.getElementById('six').addEventListener('click', () => handleNumber('6'));
document.getElementById('seven').addEventListener('click', () => handleNumber('7'));
document.getElementById('eight').addEventListener('click', () => handleNumber('8'));
document.getElementById('nine').addEventListener('click', () => handleNumber('9'));

document.getElementById('add').addEventListener('click', () => handleOperator('+'));
document.getElementById('subtrack').addEventListener('click', () => handleOperator('-'));
document.getElementById('multiplication').addEventListener('click', () => handleOperator('X'));
document.getElementById('division').addEventListener('click', () => handleOperator('/'));
document.getElementById('equals').addEventListener('click', () => {
    calculate();
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key)) {
        handleNumber(key);
    } else if (key === '+') {
        handleOperator('+');
    } else if (key === '-') {
        handleOperator('-');
    } else if (key === '*') {
        handleOperator('*');
    } else if (key === '/') {
        handleOperator('/');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
