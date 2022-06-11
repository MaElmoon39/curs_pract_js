const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]; //esto es un array

const lista1Count = {}; //esto es un objeto vacío

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

//convertir un objeto en array: esto me resulta en un array de arrays 😫
const lista1Array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);

const moda = lista1Array[lista1Array.length - 1];
