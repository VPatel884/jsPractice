const readlineSync = require('readline-sync');

function toAdd(num1,num2) {
    return num1 + num2;
}

function toSubstract(num1,num2) {
    return num1-num2;
}

function toMultiply(num1,num2) {
    return num1*num2;
}

function toDivide(num1,num2) {
    if(num2 === 0) {
        console.log('Division by \"0\" is not allowed')
    }
    return num1/num2;
}

function main() {
    let num1 = readlineSync.question("Enter the first number: ")
    let operation = readlineSync.question("Choose an operator (+, -, *, /): ")
    let num2 = readlineSync.question("Enter the second number: ")
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Entered an invalid number. Please enter valid number.")
    } 

    let result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log('Invalid operation. Please choose +, -, *, or /.');
    }

}

main()