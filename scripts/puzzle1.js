var piezas = [0, 3, 6, 1, 4, 7, 2, 5, 8];
var num_click = 0;
var casillaClick1;
const ordenCorrecto = [0, 3, 6, 1, 4, 7, 2, 5, 8];

function desordenar() {
  piezas = piezas.sort(() => Math.random() - 0.5);
}

function refrescarPuzzle() {
  for (let i = 0; i <= 8; i++) {
    document.getElementById("img_" + i).src =
      "../images/puzzle1/img_" + piezas[i] + ".png";
  }
}

function desmarcarTodas() {
  for (let i = 0; i <= 8; i++) {
    document.getElementById("img_" + i).style.border = null;
  }
}

function comprobarPuzzleFinalizado() {
  console.log("Estado actual:", piezas);
  console.log("Estado esperado:", ordenCorrecto);

  for (let i = 0; i < piezas.length; i++) {
    if (piezas[i] !== ordenCorrecto[i]) {
      return false; // Retorna false si alguna pieza no coincide
    }
  }
  return true; // Todas las piezas coinciden con el orden correcto
}

function seleccionar(casilla) {
  num_click++;

  if (num_click === 1) {
    casillaClick1 = casilla;
    desmarcarTodas();
    document.getElementById("img_" + casilla).style.border = "solid 2px red";
    console.log("Primera casilla seleccionada:", casillaClick1);
  } else if (num_click === 2) {
    num_click = 0;
    const casillaClick2 = casilla;

    // Intercambiar valores
    const aux = piezas[casillaClick1];
    piezas[casillaClick1] = piezas[casillaClick2];
    piezas[casillaClick2] = aux;

    // Actualizar la vista
    desmarcarTodas();
  

    // Comprobar si el puzzle está completo
    if (comprobarPuzzleFinalizado()) {
      alert("¡Puzzle completado!");
      
    }  refrescarPuzzle();
  }
}

// Inicializar el puzzle
desordenar();
