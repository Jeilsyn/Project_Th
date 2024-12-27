var piezas3 = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
];
var num_click = 0;
var casillaClick1;
const ordenCorrecto3 = [
20,5,10,15,0,21,1,11,16,6,2,7,12,17,22,3,8,13,18,23,4,9,14,19,24
];

function desordenar3() {
    piezas3.sort(() => Math.random() - 0.5);
}

function refrescarPuzzle3() {
  for (let i = 0; i <= 24; i++) {
    document.getElementById("img3_" + i).src =
      "../images/puzzle3/img_" + piezas3[i] + ".png";
  }
}

function desmarcarTodas3() {
  for (let i = 0; i <= 24; i++) {
    document.getElementById("img3_" + i).style.border = " ";
  }
}

function comprobarPuzzleFinalizado3() {
  console.log("Estado actual:", piezas3);
  console.log("Estado esperado:", ordenCorrecto3);

  for (let i = 0; i < 24; i++) {
    if (piezas3[i] !== ordenCorrecto3[i]) {
      return false; // Retorna false si alguna pieza no coincide
    }
  }
  return true; // Todas las piezas3 coinciden con el orden correcto
}

function seleccionar3(casilla) {
  num_click++;

  if (num_click === 1) {
    casillaClick1 = casilla;
    desmarcarTodas3();
    document.getElementById("img3_" + casilla).style.border = "solid 2px red";
    console.log("Primera casilla seleccionada:", casillaClick1);
  } else if (num_click === 2) {
    num_click = 0;
    const casillaClick2 = casilla;

    // Intercambiar valores
    const aux = piezas3[casillaClick1];
    piezas3[casillaClick1] = piezas3[casillaClick2];
    piezas3[casillaClick2] = aux;

    // Actualizar la vista
    desmarcarTodas3();

    if (comprobarPuzzleFinalizado3()) {
      alert("¡Puzzle completado!");
    }
    refrescarPuzzle3();
  }
}
document.addEventListener("DOMContentLoaded", function () {
    desordenar3();
  });
