let currentInput = '';

let priviousInput = '';

let operator = '';

function appendNumber(number){
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator){
    if(currentInput === '') return;
    if(previousInput !== '') calculate();
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    priviousInput = '';
    
}