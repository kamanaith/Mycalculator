let currentInput = '';

let previousInput = '';

let operator = '';

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    if(currentInput === '') return;
    if(previousInput !== '') calculate();
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}
function updateDisplay() {
    const display = document.getElementsByClassName('display');
    display.innerText = currentInput || previousInput || '0';   
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
}
function deleteDigit() {
    currentInput = currentInput.slice(0,-1);
    updateDisplay();
}
function calculate() {
    if(currentInput === '' || previousInput === '') return;
    const prev = parseFloat(previousInput);
    const cur = parseFloat(currentInput);

    switch(operator)
    {
        case '+':
            currentInput = prev + cur ;
            break;
        case '-':
            currentInput = prev - cur ;
            break;
        case '*':
            currentInput = prev * cur ;
            break;
        case '/':
            currentInput = cur === 0 ? 'error' : prev/cur;           
            break;
        case '%':
            currentInput = prev % cur;    
            break;
        default:
            return;    
    }

}