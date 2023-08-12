function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function divide(x, y) {
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