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
    if (y === '0') {
        stacking = false
        working = ''
        operator = ''
        return ("You just created a black hole and destroyed the earth!")
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
        case "=":
            document.getElementById("working").value = working;
        default:
            return NaN; // Handle invalid operator
    }
}

function enterNumber(number) {
    if (!stacking) {
        document.getElementById("working").value = ""
    }
    stacking = true
    let current = document.getElementById("working").value
    let newNumber = current + number
    document.getElementById("working").value = newNumber
}

function cancel() {
    stacking = false
    working = ''
    operator = ''
    document.getElementById("working").value = ""
}

function invertSign() {
    let current = parseFloat(document.getElementById("working").value)
    let newNumber = current * -1
    document.getElementById("working").value = newNumber
}

function addDecimalPoint() {
    if (!stacking) {
        document.getElementById("working").value = "0"
    }
    let current = document.getElementById("working").value
    if (!current.includes('.')) {
        stacking = true
        let newNumber = current + "."
        document.getElementById("working").value = newNumber
    }
}

function operate(op) {


    let currentWorking = document.getElementById("working").value
    if (currentWorking === "You just created a black hole and destroyed the earth!") {
        currentWorking = '0'
    }

    if (currentWorking && operator && working) {
        const answer = calculate(operator, working, currentWorking)
        document.getElementById("working").value = answer;
        working = answer;
    } else if (currentWorking) {
        document.getElementById("working").value = currentWorking;
        working = currentWorking;
    }

    stacking = false
    operator = op
    if (op === '=') {
        operator = ''
    }

}

function handleKeyPress(event) {
    const key = event.key;

    if (key.match(/[0-9]/)) {
        enterNumber(key)
    } else if (key === '=') {
        operate('=')
    } else if (key === 'Enter') {
        operate('=')
    } else if (key === 'Escape') {
        cancel();
    } else if (key === '+') {
        operate('+');
    } else if (key === '-') {
        operate('-');
    } else if (key === '/') {
        operate('/');
    } else if (key === '*') {
        operate('*');
    }
}

document.addEventListener('keydown', handleKeyPress);