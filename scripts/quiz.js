let datos = {};
let currentQuestionIndex = 0;
let userAnswers = [];
const questionContainer = document.getElementById("question-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const finalScoreElement = document.getElementById("final-score");


fetch("../resource/quiz.json")
  .then(response => response.json())
  .then(data => {
    datos = data;
    userAnswers = new Array(datos.preguntas.length).fill(null);
    renderQuestion(currentQuestionIndex);
  })
  .catch(error => console.error("Error al cargar las preguntas:", error));

// Renderizar 
function renderQuestion(index) {
  const questionObj = datos.preguntas[index];
  questionContainer.innerHTML = `
    <h3 align=center>${questionObj.pregunta}</h3>
    <form>
      ${questionObj.opciones
        .map(
          (opcion, i) => `
          <div style='margin-left:30%;'>
            <input type="radio" id="option${i}" name="respuesta" value="${opcion}" ${
            userAnswers[index] === opcion ? "checked" : ""
          }>
            <label for="option${i}">${opcion}</label>
          </div>`
        )
        .join("")}
    </form>
  `;
}

//  la nota final
function calculateScore() {
  let correctAnswers = 0;
  datos.preguntas.forEach((question, index) => {
    if (userAnswers[index] === question.respuesta_correcta) {
      correctAnswers++;
    }
  });
  return (correctAnswers / datos.preguntas.length) * 100;
}

//  resultado
function showResult() {
  const score = calculateScore();
  finalScoreElement.textContent = score.toFixed(2);
  questionContainer.classList.add("hidden");
  prevButton.classList.add("hidden");
  nextButton.classList.add("hidden");
  resultContainer.classList.remove("hidden");
}

//  botones
nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector(
    'input[name="respuesta"]:checked'
  );
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption.value;

    if (currentQuestionIndex < datos.preguntas.length - 1) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      showResult();
    }

    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent =
      currentQuestionIndex === datos.preguntas.length - 1
        ? "Finalizar"
        : "Siguiente";
  } else {
    alert("Por favor selecciona una respuesta.");
  }
});

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = "Siguiente";
  }
});
