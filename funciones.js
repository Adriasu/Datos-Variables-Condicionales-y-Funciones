// EJERCICIO 0

function sayTeacher() {
  alert("Ejercicio 0: Hola Angel !!!");
}

// EJERCICIO 1

function sumNumbers(num1, num2) {
  return num1 + num2;
}

// EJERCICIO 2

function esPar(num) {
  if (typeof num === "number") {
    if (num % 2 === 0) {
      return "true";
    } else if (num % 2 !== 0) {
      return "false";
    }
  } else {
    return "Dato no valido";
  }
}

// EJERCICIO 3

let lado1 = 8;
let lado2 = 8;
let lado3 = 8;

function triangleClassification(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("El tiángulo es EQUILÁTERO");
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es ISÓSELES");
  } else {
    console.log("El triángulo es ESCALENO");
  }
}

// EJERCICIO 4

const firstNumber = parseInt(prompt("Inrese el primer número"));
const symbol = prompt(
  "Ingrese el simbolo (+,-,*,/) de la operacion que quiere realizar"
);
const secondNumer = parseInt(prompt("Ingrese el segundo número"));

function calculator(symbol, number1, number2) {
  if (symbol === "+") {
    console.log(number1 + number2);
  } else if (symbol === "-") {
    console.log(number1 - number2);
  } else if (symbol === "*") {
    console.log(number1 * number2);
  } else if (symbol === "/") {
    console.log(number1 / number2);
  }
}
calculator(symbol, firstNumber, secondNumer);

// EJERCICIO 5

function calculateBMI(weight, height) {
  let resultBMI = weight / height ** 2;

  if (resultBMI < 18.5) {
    return `Su IMC es: ${resultBMI.toFixed(2)}, se encuentra con BAJO PESO.`;
  } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
    return `Su IMC es: ${resultBMI.toFixed(2)}, se encuentra NORMAL.`;
  } else if (resultBMI >= 25 && resultBMI <= 29.9) {
    return `Su IMC es: ${resultBMI.toFixed(2)}, se encuentra con SOBREPESO.`;
  } else {
    `Su IMC es: ${resultBMI.toFixed(2)}, se encuentra con OBESIDAD.`;
  }
}


