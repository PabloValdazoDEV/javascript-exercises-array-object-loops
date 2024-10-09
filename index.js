// PARA ESTE EJERCICIO SE PUEDE UTILIZAR SOLO PUBLIQUE FOR O WHILE

// Crea un array vacío llamado `stack`
const stack = [];

// Crea un array `numbers` con los números del 1 al 5 in orden ascendente

const numbers = [1,2,3,4,5]
// La función multiplyByTwo tiene que devolver un array con los números multiplicados por 2 de cada elemento del array `numbers`
const newArray = []
function multiplyByTwo(numbers) {
  for (i = 0; i < numbers.length; i++ ){
    newArray[i] = numbers[i] * 2;
  }
  return newArray
}

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  const newArray = []
  let a = 0;
  for (i = 0; i < numbers.length; i++ ){
    if(i % 2 == true){
      newArray[a] = numbers[i];
      a++
    }
  }
  return newArray
}

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  let i = 0; 
  let a = 4;
  const newArray = [];
  while( i < numbers.length ) {
    newArray[i] = numbers[a];
    i++;
    a--;
  }
  return newArray
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
  let suma = 0;
  let i = 0;
  while( i < numbers.length){
    suma = suma + numbers[i]
    i++
  }
  return suma
}

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average(numbers) {
  let sumados = 0;
  for (i = 0 ; i < numbers.length ; i++){
    sumados = sumados + numbers[i]
  }
const promedio = sumados / numbers.length
  return promedio
}


// No fui capaz de sacarlo por mi propio pie, lo busque por google y lo adapte ami código :(

function biggestPrime(numbers) {

  function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (i = numbers; i > 0; i--){
    if(esPrimo(i)){
      return i
    }
  }
}


// Crea una variable person y asígnale un objeto vacío
const person = {}
// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor
person.name = "Jorge"
// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor
person.lastName = "Gonzalez"
// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor
person.birthYear = 1995
// Agrega una función `getFullName` al objeto que devuelva el nombre completo
person.getFullName = () => person.name + " " + person.lastName
// Agrega una función `getBirthYear` al objeto que devuelva la edad (asumiendo que es el año 2023)
person.getBirthYear = () => 2023 - person.birthYear