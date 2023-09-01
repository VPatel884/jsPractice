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
