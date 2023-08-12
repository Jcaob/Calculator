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

function operate(operator, a, b) {
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

function backSpace(){
    let current = parseFloat(document.getElementById("display").value)
    let newNumber = current.toString().slice(0,-1);
    document.getElementById("display").value = newNumber
}