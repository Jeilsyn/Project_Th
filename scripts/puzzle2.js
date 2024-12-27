var piezas2 = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
];
var num_click = 0;
var casillaClick1;
const ordenCorrecto2 = [
  0, 5, 10, 15, 20, 25, 1, 6, 11, 16, 21, 26, 2, 7, 12, 17, 22, 27, 3, 8, 13,
  18, 23, 28, 4, 9, 14, 19, 24, 29,
];

function desordenar2() {
    piezas2.sort(() => Math.random() - 0.5);
}

function refrescarPuzzle2() {
  for (let i = 0; i <= 29; i++) {
    document.getElementById("img2_" + i).src =
      "../images/puzzle2/img_" + piezas2[i] + ".png";
  }
}

function desmarcarTodas2() {
  for (let i = 0; i <= 29; i++) {
    document.getElementById("img2_" + i).style.border = null;
  }
}

function comprobarPuzzleFinalizado2() {
  console.log("Estado actual:", piezas2);
  console.log("Estado esperado:", ordenCorrecto2);

  for (let i = 0; i < piezas2.length; i++) {
    if (piezas2[i] !== ordenCorrecto2[i]) {
      return false; // Retorna false si alguna pieza no coincide
    }
  }
  return true; // Todas las piezas2 coinciden con el orden correcto
}

function seleccionar2(casilla) {
  num_click++;

  if (num_click === 1) {
    casillaClick1 = casilla;
    desmarcarTodas2();
    document.getElementById("img2_" + casilla).style.border = "solid 2px red";
    console.log("Primera casilla seleccionada:", casillaClick1);
  } else if (num_click === 2) {
    num_click = 0;
    const casillaClick2 = casilla;

    const aux = piezas2[casillaClick1];
    piezas2[casillaClick1] = piezas2[casillaClick2];
    piezas2[casillaClick2] = aux;

    desmarcarTodas2();

    // Comprobar si el puzzle está completo
    if (comprobarPuzzleFinalizado2()) {
      alert("¡Puzzle completado!");
    }
    refrescarPuzzle2();
  }
}
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el puzzle después de que el DOM esté completamente cargado
    desordenar2();
  });
