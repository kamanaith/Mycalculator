// let currentInput = document.querySelector(".currentInput");
// let currentInput = 0;

// let previousInput = document.querySelector(".previousInput");
// let previousInput = 0;

let display = document.querySelector(".display");

let result = "";

// console.log(previousInput);
let number = "";
let operator;
let entries = [];

function reset() {
  number = "";
  operator = "";
  entries = [];
}

function appendNumber(num) { 

 if (number.length > 0) {
  number +=num;
 } else {
  number = num;
 }
  console.log("number entered");
 
  display.textContent += number;

}

function appendOperator(op) { 

  console.log("operator entered");
  operator = op;
  display.textContent += operator;
  number = Number(number);

  entries.push(number);
 number = "";
}

function clearButton() {
  console.log("clear all");
  display.textContent = reset();
  return;
}

function deleteButton() {
  console.log("back");
display.textContent = display.textContent.substring(0,display.textContent.length-1);
if (display.textContent.length = 0) {
  display.textContent = reset();
}

  return;
}
function calculate() {

  console.log(number);
  
  number = Number(number);
  
  entries.push(number);
  console.log(entries);
  number = "";
  switch (operator) {
    case "+":
      result = entries[0] + entries[1];
      break;
    case "-":
      result = entries[0] - entries[1];
      break;
    case "/":
      if (entries[1] === 0) {
        alert(console.log("cannot be divisible by zero"));
      } else {
        result = entries[0] / entries[1];
      }
      break;
    case "*":
      result = entries[0] * entries[1];
      break;
    case "%":
      result = entries[0] % entries[1];
      break;
    default:
      result = "invalid";
      break;
  }
  display.textContent = result;
  entries = [];
  number = "";
  console.log(entries);
  // console.log(typeof( number));
  number += result;
  // result.textContent += number;
  console.log(number);
  // entries.push(number);
  // result = String(result)
  // result.textContent = number;
  // entries.push(number);
  // console.log(typeof(number));
  
  // entries.push(number);
}
