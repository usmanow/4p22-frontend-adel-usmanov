"use strict"

const button = document.getElementById("submit");
const output = document.getElementById("output");

button.addEventListener ('click', event => {
    const firstNumber = document.getElementById("first-number").value;
    const operation = document.getElementById("operation").value;
    const secondNumber = document.getElementById("second-number").value;
    let result;

    event.preventDefault();

    if (firstNumber.trim() === "") {
        console.log("Первое число не указано");
        return (output.innerText = "Первое число не указано");
    }

    if (secondNumber.trim() === "") {
        console.log("Второе число не указано");
        return (output.innerText = "Второе число не указано");
    }

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Некорректный ввод чисел");
        return (output.innerText = "Некорректный ввод чисел");
    }

    switch (operation) {
        case "": {
            console.log("Не введён знак");
            return (output.innerText = "Не введён знак");
        }
        case "+": {
            result = Number(firstNumber) + Number(secondNumber);
            console.log(result);
            return (output.innerText = `Результат: ${result}`);
        }
        case "-": {
            result = Number(firstNumber) - Number(secondNumber);
            console.log(result);
            return (output.innerText = `Результат: ${result}`);
        }
        case "*": {
            result = Number(firstNumber) * Number(secondNumber);
            console.log(result);
            return (output.innerText = `Результат: ${result}`);
        }
        case "/": {
            if (Number(secondNumber) === 0) {
                console.log("На 0 делить нельзя");
                return (output.innerText = "На 0 делить нельзя");
            }
            result = Number(firstNumber) / Number(secondNumber);
            console.log(result);
            return (output.innerText = `Результат: ${result}`);
        }
        default: {
            console.log("Программа не поддерживает такую операцию");
            return (output.innerText = "Программа не поддерживает такую операцию");
        }
    }
})