// Create a simple calculator that has two inputs and returns the result of +,-,/,* somewhere in the DOM
// Wait until page loads
// Get buttons
document.querySelector('#one').addEventListener('click', add)
document.querySelector('#tenThree').addEventListener('click', subtract)
document.querySelector('#nothing').addEventListener('click', multiply)
document.querySelector('#hopeIGetIt').addEventListener('click', divide)
document.querySelector('#clear').addEventListener('click', clearResult)

function getInputValues() {
  const input1 = Number(document.querySelector('#input1').value)
  const input2 = Number(document.querySelector('#input2').value)
  return [input1, input2]
}

function displayResult(value) {
  document.querySelector('#placeToPutResult').innerText = value
}

// Functions themed 
function add() {
  const [num1, num2] = getInputValues()
  const result = num1 + num2
  displayResult(result)
}

function subtract() {
  const [num1, num2] = getInputValues()
  const result = num1 - num2
  displayResult(result)
}

function multiply() {
  const [num1, num2] = getInputValues()
  const result = num1 * num2
  displayResult(result)
}

function divide() {
  const [num1, num2] = getInputValues()
  if (num2 === 0) {
    displayResult("🚫 Can't divide by zero!")
  } else {
    const result = num1 / num2
    displayResult(result)
  }
}

function clearResult() {
  document.querySelector('#input1').value = ''
  document.querySelector('#input2').value = ''
  displayResult(0)
}





// floating point math: Computers can only natively store integers, so they need some way of representing decimal numbers.
// This representation is not perfectly accurate. This is why, more often than not, 0.1 + 0.2 != 0.3.
// JavaScript treats decimals as floating point numbers, which means operations like addition might be subject to rounding error.

// create a function for the input values
// function inputValues() {
//   const input1 = Num(document.querySelector("#input1").value);
//   const input2 = Num(document.querySelector("#input2").value);
//   return [input1, input2];
// }

// function displayResult(value) {
//   document.querySelector("#placeToPutResult").innerText = value;
// }
// function add() {
//   total = total + 3;
//   document.querySelector("#placeToPutResult").innerText = total;
// }
// function wild() {
//   total = total + 9;
//   document.querySelector("#placeToPutResult").innerText = total;
// }
// function something() {
//   total = total - 2;
//   document.querySelector("#placeToPutResult").innerText = total;
// }
