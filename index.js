function calcularPerimetroDelCuadrado(lado) {
  return lado * 4;
}

function onClickButtonCalcularPerimetroDelCuadrado() {
  const inputLado = document.getElementById("InputLado");
  const ladoValue = inputLado.value;

  const perimetro = calcularPerimetroDelCuadrado(ladoValue);
  
  const result = document.getElementById("Result");
  result.innerText = "El perímetro del cuadrado es " + perimetro;
}

