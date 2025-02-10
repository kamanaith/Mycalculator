let display = document.querySelector(".display");

let num = [0,1,2,3,4,5,6,7,8,9];
let oper = ["%","/","*","-","+","."];
let result;
let entries = [];
let number;
let operator;

function reset(){
  entries = [];
  a = " ";
  number;
  operator;
  display.textContent = "";
}

function clearButton() {
  
  console.log("clear all");
  display.textContent = reset();
  console.log("cleared");
  return;
}

function deleteButton() {
  console.log("back");
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
  if ((display.textContent.length = 0)) {
    display.textContent = reset();
  }
  return;
}
let a =" ";

  function clicked(e) { 
  if ( num.includes(e)) {
    console.log("number clicked");
     number = String(e);
     a += number;
  console.log(typeof(a));
  console.log("number=",a);
  
    display.textContent += number;
    // entries.push(number);
    console.log(entries);
    
    
  } else if (oper.includes(e)) {
    number = Number(a);
    console.log(typeof(number));
    entries.push(number);
    a = " ";
    let op;
    console.log("operator clicked");
    operator = op;
    op = String(e);
    console.log(typeof(op));
    
    display.textContent += op;
    entries.push(op);
    console.log(entries);
    
  }
  }
function calculate() {
  number = Number(a);
  console.log(typeof(number));
  entries.push(number);
  a = " ";
  switch (entries[1]) {
    case "+":
      result = entries[0] + entries[2] ;
      console.log("result",result);
      
      break;
    case "-":
      result = entries[0] - entries[2];
      break;
    case "/":
      if (entries[2] === 0) {
        alert(console.log("cannot be divisible by zero"));
      } else {
        result = entries[0] / entries[2];
      }
      break;
    case "*":
      result = entries[0] * entries[2];
      break;
    case "%":
      result = entries[0] % entries[2];
      break;
    default:
      result = "invalid";
      break;
  }

  entries.push(result);
  display.textContent = result;
  
  // display.textContent = result;

  // number = "";
  console.log(entries);
  entries = [];
  // console.log(typeof( number));
  // number += result;
  // result.textContent += number;
  // console.log(number);
  // entries.push(number);
  // result = String(result)
  // result.textContent = number;
  // entries.push(number);
  // console.log(typeof(number));
  
  // entries.push(number);
}
