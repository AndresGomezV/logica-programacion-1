const prompt = require("prompt-sync")();

function askForNumbers() {
  let num1, num2, num3;
  do {
    num1 = Number(prompt("Ingresa el primer número: "));
    num2 = Number(prompt("Ingresa el segundo número: "));
    num3 = Number(prompt("Ingresa el tercer número: "));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      console.log("Uno de los valores ingresados no es válido, intentalo de nuevo");
    }
  } while (isNaN(num1) || isNaN(num2) || isNaN(num3));
  return [num1, num2, num3];
}

const numbers = askForNumbers();

//método 1:
// let numeroMayor = Math.max(...numbers);
// let numeroMenor = Math.min(...numbers);

//método 2:
//let numeroMayor, numeroMenor;
// //Encontrar el número mayor
// if (num1 > num2 && num1 > num3) {
//     numeroMayor = num1;
// } else if (num2 > num1 && num2 > num3) {
//     numeroMayor = num2;
// } else {
//     numeroMayor = num3;
// };

// // Encontrar el numero menor
// if (num1 < num2 && num1 < num3) {
//     numeroMenor = num1;
// } else if (num2 < num1 && num2 < num3) {
//     numeroMenor = num2;
// } else {
//     numeroMenor = num3
// }

//método 3:
function analyzeNumbers(numbers) {
  let numeroMayor = numbers.reduce(
    (max, current) => (current > max ? current : max),
    numbers[0]
  );

  let numeroMenor = numbers.reduce(
    (minor, current) => (current < minor ? current : minor),
    numbers[0]
  ); 

  let numeroMedio =
    numbers[0] + numbers[1] + numbers[2] - numeroMayor - numeroMenor;

  return [numeroMayor, numeroMedio, numeroMenor];
}

const arr = analyzeNumbers(numbers);

const numerosOrdenadosDeMayorAMenor = [...arr].sort((a, b) => b - a); //se usa [...arr] para crear una copia del array en lugar de usar el original (arr.sort) para que pueda ordenarse tambien de menor a mayor
const numerosOrdenadosDeMenorAMayor = [...arr].sort((a, b) => a - b);

console.log("Orden de mayor a menor:", numerosOrdenadosDeMayorAMenor)
console.log("Ordern de menor a mayor:", numerosOrdenadosDeMenorAMayor);

function hasDuplicates(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                console.log("El valor que se repite es el:", numbers[i]);
                return;
            }
        }
    }
    console.log("Los valores son únicos");
}

hasDuplicates(numbers);