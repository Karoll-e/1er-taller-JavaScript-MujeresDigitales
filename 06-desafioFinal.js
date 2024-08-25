/* Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con
solo los números pares utilizando funciones. */
function numerosPares(array) {
  const nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

console.log(numerosPares([3, 8, 1, 6, 2, 7, 10, 5, 4, 9]));
