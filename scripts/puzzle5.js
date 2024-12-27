var piezas5 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
var num_click = 0;
var casillaClick1;
const ordenCorrecto5 = [
  0, 5, 10, 15, 20, 25, 30, 1, 6, 11, 16, 21, 26, 31, 2, 7, 12, 17, 22, 27, 32,
  3, 8, 13, 18, 23, 28, 33, 4, 9, 14, 19, 24, 29, 34,
];
function desordenar5() {
  piezas5.sort(() => Math.random() - 0.5);
}

function refrescarPuzzle5() {
  for (let i = 0; i <= 34; i++) {
   document.getElementById("img5_" + i).src = "../images/puzzle5/img_" + piezas5[i] + ".png";
  }
}

function desmarcarTodas5() {
  for (let i = 0; i <= 34; i++) {
    document.getElementById("img5_" + i).style.border = "";
  }
}

function comprobarPuzzleFinalizado5() {
  console.log("Estado actual:", piezas5);
  console.log("Estado esperado:", ordenCorrecto5);

  for (let i = 0; i < piezas5.length; i++) {
    if (piezas5[i] !== ordenCorrecto5[i]) {
      return false; // Retorna false si alguna pieza no coincide
    }
  }
  return true; // Todas las piezas5 coinciden con el orden correcto
}

function seleccionar5(casilla) {
  num_click++;

  if (num_click === 1) {
    casillaClick1 = casilla;
    desmarcarTodas5();
    document.getElementById("img5_" + casilla).style.border = "solid 2px red";
    console.log("Primera casilla seleccionada:", casillaClick1);
  } else if (num_click === 2) {
    num_click = 0;
    const casillaClick2 = casilla;

    // Intercambiar valores
    const aux = piezas5[casillaClick1];
    piezas5[casillaClick1] = piezas5[casillaClick2];
    piezas5[casillaClick2] = aux;

    // Actualizar la vista inmediatamente
    refrescarPuzzle5();

    desmarcarTodas5();

    // Comprobar si el puzzle está completo
    if (comprobarPuzzleFinalizado5()) {
      alert("¡Puzzle completado!");
    }
  }
}

  // Desordenar el puzzle y reflejar el estado inicial una sola vez
  desordenar5();

