// // EJERCICIO 1

// let distance = 100;
// let time = 5;
// let speed = distance / time;

// if (speed >= 40 && speed <= 60) {
//   console.log("Ejercicio 1: El conductor pasa la prueba");
// } else {
//   console.log("Ejercicio 1: El conductor esta descalificado :(");
// }

// // EJERCICIO 2

// const grade1 = parseInt(prompt("Ingrese nota del primer trimestre"));
// const grade2 = parseInt(prompt("Ingrese nota del segundo trimestre"));
// const grade3 = parseInt(prompt("Ingrese nota del tercer trimestre"));

// let averageGrade = (grade1 + grade2 + grade3) / 3;

// if (averageGrade < 5) {
//   console.log("Ejercicio 2: SUSPENDIDO!! :(");
// } else if (averageGrade >= 5 && averageGrade >= 7) {
//   console.log("Ejercicio 2: APROBADO");
// } else {
//   console.log("Ejercicio 2: NOTABLE!! :)");
// }

// EJERCICIO 3

const chooseDrink = prompt("Elige entre vino, cerveza, refresco o agua").toLocaleLowerCase();

switch (chooseDrink) {
  case "vino":
  case "cerveza":
    console.log("Ejercicio 3: Por favor dirijase a la barra.");
    break;
  default:
    console.log("Ejercicio 3: Por favor dirijase a la barra de comidas.");
    break;
}

// // EJERCICIO 4

// const number1 = parseInt(prompt("ingrese un número"));
// const number2 = parseInt(prompt("ingrese otro número"));

// let result =
//   number1 >= number2
//     ? console.log("Ejercicio 4:", number1 - number2)
//     : console.log("Ejercicio 4:", number2 - number1);

// // EJERCICIO 5

// const numberOne = parseInt(prompt("ingrese un número"));
// const squareNumber = parseInt(
//   prompt("ingrese el cuadrado del número anterior")
// );

// let confirmation =
//   numberOne ** 2 === squareNumber
//     ? console.log("Ejercicio 5: CORRECTO!!!")
//     : console.log("Ejercicio 5: ERROR");
