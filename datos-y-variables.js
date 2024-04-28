// EJERCICIO 1

const guests = prompt("Enter the number of guests");
let totalPotatoes = guests * 200;
let PotatoesKg = totalPotatoes / 1000;
let totalEggs = (totalPotatoes * 5) / 1000;
let totalOnion = (totalPotatoes * 300) / 1000;

console.log(
  `"Ejercicio 1": Para ${guests} Comensales se necesitará: ${PotatoesKg} Kg de papas, ${totalEggs} huevos, ${totalOnion} gr de cebolla.`
);

// EJERCICIO 2

const userNumber = prompt("Enter a number");
let numberPair = userNumber % 2 === 0 && true;

console.log(`"Ejercicio 2": ¿El número ${userNumber} es par? ${numberPair}"`);

// EJERCICIO 3

const hourTime = prompt("Horas");
const minutesTime = prompt("Minutos");

let totalhour = hourTime * 60 * 60;
let totalMinutes = minutesTime * 60;

console.log(
  `"Ejercicio 3": Los segundos que hay en ${hourTime} horas y ${minutesTime} minutos, son`,
  totalhour + totalMinutes
);

// EJERCICIO 3

const productPrice = parseInt(prompt("Ingrese el precio del producto"));

let priceIva = (productPrice * 21) / 100;
let productIva = productPrice + priceIva;

alert(`El precio del producto con IVA es: ${productIva}.`);
