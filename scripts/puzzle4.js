var piezas4 = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
];
var num_click = 0;
var casillaClick1;
const ordenCorrecto4 =  [0, 15, 5, 16, 21, 1, 6, 11, 10, 20, 2, 7, 12, 17, 22, 3, 8, 13, 18, 23, 4, 9, 14, 19, 24];

function desordenar4() {
    piezas4.sort(() => Math.random() - 0.5);
}

function refrescarPuzzle4() {
  for (let i = 0; i <= 24; i++) {
    document.getElementById("img4_" + i).src =
      "../images/puzzle4/img_" + piezas4[i] + ".png";
  }
}

function desmarcarTodas4() {
  for (let i = 0; i <= 24; i++) {
    document.getElementById("img4_" + i).style.border =null;
  }
}

function comprobarPuzzleFinalizado4() {
  console.log("Estado actual:", piezas4);
  console.log("Estado esperado:", ordenCorrecto4);

  for (let i = 0; i < 24; i++) {
    if (piezas4[i] !== ordenCorrecto4[i]) {
      return false; // Retorna false si alguna pieza no coincide
    }
  }
  return true; // Todas las piezas4 coinciden con el orden correcto
}

function seleccionar4(casilla) {
  num_click++;

  if (num_click === 1) {
    casillaClick1 = casilla;
    desmarcarTodas4();
    document.getElementById("img4_" + casilla).style.border = "solid 2px red";
    console.log("Primera casilla seleccionada:", casillaClick1);
  } else if (num_click === 2) {
    num_click = 0;
    const casillaClick2 = casilla;

    // Intercambiar valores
    const aux = piezas4[casillaClick1];
    piezas4[casillaClick1] = piezas4[casillaClick2];
    piezas4[casillaClick2] = aux;

    // Actualizar la vista
    desmarcarTodas4();

    // Comprobar si el puzzle está completo
    if (comprobarPuzzleFinalizado4()) {
      alert("¡Puzzle completado!");
    }
    refrescarPuzzle4();
  }
}
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el puzzle después de que el DOM esté completamente cargado
    desordenar4();
  });
