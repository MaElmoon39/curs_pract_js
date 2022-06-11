//console.log("Hello world");

//Código del cuadrado
console.group("Cuadrado"); //esto es para agrupar mensajes de consola por grupos. Este abre...
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd(); //...Y este cierra

//Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   `Los lados del triángulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm y ${baseTriangulo}cm`
// );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perimetro del triángulo es: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm`);

//Diametro
// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

//Pi
const PI = Math.PI;
// console.log(`Pi es ${PI}`);

//Circunferencia
// const perimetroCircunferencia = diametroCirculo * PI;
function perimetroCircunferencia(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log(`El perímetro del círculo es: ${perimetroCircunferencia}cm`);

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log(`El área del círculo es: ${areaCirculo}cm^2`);

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
