// function askForNumber(message) {
//   const num = Number(prompt(message));
//   if (!isNaN(num)) {
//     console.log(`El número ingresado es ${num}`);
//     return num;
//   } else {
//     console.log(`El valor ingresado no es un número`);
//     return null;
//   }
// }

// const num1 = askForNumber("Ingrese el primer número: ");
// const num2 = askForNumber("Ingrese el segundo número: ");
// const num3 = askForNumber("Ingrese el tercer número: ");

//do while : si es true, repite el ciclo
//isNan(num) : está preguntando si numero es Null ? si no es valido devuelve true.

/*
arr.sort((a,b) => a - b) (ordenar de menor a mayor)
Si el resultado de a - b es positivo, b va antes que a.
Si el resultado de a - b es negativo, a va antes que b.
Si el resultado de a - b es 0, el orden de a y b se mantiene.
*/

const prompt = require("prompt-sync")();

function askForNumber(message) {
  let num;
  do {
    num = Number(prompt(message));
    if (isNaN(num)) {
      console.log("El valor ingresado no es válido, intentalo de nuevo");
    }
  } while (isNaN(num));
  console.log(`El número ingresado es ${num}`)
  return num;
}

const num1 = askForNumber("Ingrese el primer número: ");
const num2 = askForNumber("Ingrese el segundo número: ");
const num3 = askForNumber("Ingrese el tercer número: ");

let arr1 = [num1, num2, num3];

function analyzeNumbers(arr1) {
    let maxNum = Math.max(...arr1);
    let minNum = Math.min(...arr1);
    let midNum = num1 + num2 + num3 - maxNum - minNum;
    

    arr1.sort((a, b) => b - a);
    console.log(arr1)
    arr1.reverse();
    console.log(arr1);
};

analyzeNumbers(arr1);
