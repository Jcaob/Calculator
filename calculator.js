let stacking = false
let working = ''
let operator = ''

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function divide(x, y) {
    if (y === 0) {
        stacking = false
        return ("You are trying to divide by zero! Are you trying to create a black hole?")
    } else {
        return parseFloat(x) / parseFloat(y);
    }
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function calculate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return NaN; // Handle invalid operator
    }
}

function enterNumber(number) {
    let current = document.getElementById("working").innerHTML
    let newNumber = current + number
    document.getElementById("working").innerHTML = newNumber
}

function cancel() {
    document.getElementById("display").value = ""
}

function invertSign() {
    let current = parseFloat(document.getElementById("display").value)
    let newNumber = current * -1
    document.getElementById("display").value = newNumber
}

function operate(op) {
    let currentDisplay = document.getElementById("display").value
    let currentWorking = document.getElementById("working").innerHTML
    let currentOperator = document.getElementById("operator").getAttribute("data-operator")

    if (currentWorking && currentOperator && currentDisplay && stacking) {
        const answer = calculate(currentOperator, currentWorking, currentDisplay)
        document.getElementById("working").innerHTML = answer;
    } else if (currentDisplay) {
        document.getElementById("working").innerHTML = currentDisplay;
    }

    if (op != '=') {
        stacking = true
        document.getElementById("operator").setAttribute("data-operator", op)
        document.getElementById("operator").innerHTML = op;
    } else {
        stacking = false
        document.getElementById("operator").innerHTML = '';
    }

    document.getElementById("display").value = ""
}