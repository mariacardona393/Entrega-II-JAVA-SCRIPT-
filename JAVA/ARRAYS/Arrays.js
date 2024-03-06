// Array 1: Números pares
const numerosPares = [];

// Función flecha para llenar el array con números pares del 2 al 20
const llenarNumerosPares = () => {
  for (let i = 2; i <= 20; i += 2) { // Itera de 2 en 2
    numerosPares.push(i); // Agrega el número par al array
  }
};
llenarNumerosPares(); // Llama a la función para llenar el array

// Array 2: Números impares
const numerosImpares = [];

// Función flecha para llenar el array con números impares del 1 al 19
const llenarNumerosImpares = () => {
  for (let i = 1; i <= 19; i += 2) { // Itera de 1 en 2
    numerosImpares.push(i); // Agrega el número impar al array
  }
};
llenarNumerosImpares(); // Llama a la función para llenar el array

// Array 3: Números primos
const numerosPrimos = [];

// Función flecha para verificar si un número es primo
const esPrimo = num => {
  for (let i = 2; i < num; i++) { // Itera desde 2 hasta un número antes de num
    if (num % i === 0) return false; // Si es divisible, no es primo
  }
  return num > 1; // Si no es divisible por ningún número, es primo
};

// Función flecha para llenar el array con números primos del 2 al 20
const llenarNumerosPrimos = () => {
  for (let i = 2; i <= 20; i++) { // Itera desde 2 hasta 20
    if (esPrimo(i)) { // Si es primo
      numerosPrimos.push(i); // Agrega el número primo al array
    }
  }
};
llenarNumerosPrimos(); // Llama a la función para llenar el array

// Array 4: Números al cuadrado
const numeros = [1, 2, 3, 4, 5];
const cuadrados = [];

// Función flecha para calcular el cuadrado de un número
const calcularCuadrado = num => num * num;

// Función flecha que toma un array y una función de callback para calcular los cuadrados
const calcularCuadrados = (numeros, callbackfn) => {
  for (let num of numeros) { // Itera sobre cada número en el array
    cuadrados.push(callbackfn(num)); // Calcula el cuadrado del número y lo agrega al array de cuadrados
  }
};
calcularCuadrados(numeros, calcularCuadrado); // Llama a la función para calcular los cuadrados

// Muestra los resultados
console.log("Números Pares:", numerosPares);
console.log("Números Impares:", numerosImpares);
console.log("Números Primos:", numerosPrimos);
console.log("Números al Cuadrado:", cuadrados);
