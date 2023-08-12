function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function divide(x, y) {
    if (y === 0) {
        displayError("Cannot divide by zero");
    }
    return parseFloat(x) / parseFloat(y);
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return NaN; // Handle invalid operator
    }
}

function enterNumber(number) {
    let current = document.getElementById("display").value
    let newNumber = current + number
    document.getElementById("display").value = newNumber
}

function cancel() {
    document.getElementById("display").value = ""
}

function invertSign() {
    let current = parseFloat(document.getElementById("display").value)
    let newNumber = current * -1
    document.getElementById("display").value = newNumber
}
// //////////////////////////////////////////////////////////
// function appendToInput(display) {
//     current += display;
//     updateDisplay(current);
//   }
// ///////////////////////////////////////////////////////////
// let firstNumber = null;
// let selectedOperator = null;

// document.querySelectorAll(".enterNumber").forEach(button => {
//   button.addEventListener("click", () => {
//     appendToInput(button.textContent);
//   });
// });

// document.querySelectorAll(".operator").forEach(button => {
//     button.addEventListener("click", () => {
//       if (firstNumber === null) {
//         firstNumber = parseFloat(current);
//         selectedOperator = button.textContent;
//         current = ""; // Clear input for next number
//       } else {
//         const secondNumber = parseFloat(current);
//         const result = operate(selectedOperator, firstNumber, secondNumber);
//         updateDisplay(result);
//         firstNumber = result;
//         selectedOperator = button.textContent;
//         current = ""; // Clear input for next number
//       }
//     });
//   });
  
//   document.getElementById("equals").addEventListener("click", () => {
//     if (firstNumber !== null && selectedOperator !== null) {
//       const secondNumber = parseFloat(current);
//       const result = operate(selectedOperator, firstNumber, secondNumber);
//       updateDisplay(result);
//       firstNumber = result;
//       selectedOperator = null;
//       current = ""; // Clear input for next number
//     }
//   });
  
//   document.getElementById("clear").addEventListener("click", () => {
//     current = "";
//     firstNumber = null;
//     selectedOperator = null;
//     updateDisplay("0");
//   });
  
//   // Implement the other buttons similarly
  
//   // Handle backspace
//   document.getElementById("backspace").addEventListener("click", () => {
//     current = current.slice(0, -1);
//     updateDisplay(current);
//   });
