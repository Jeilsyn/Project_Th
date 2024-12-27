function loadHTML(file, elementId) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch((error) => {
        console.error(error);
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = `<p style="color: red;">Error loading content. Please try again later.</p>`;
        }
      });
  }
  
  function loadPuzzle() {
    loadHTML("../sections/puzzle1H.html", "puzzle1H");
    loadHTML("../sections/puzzle2H.html", "puzzle2H");
    loadHTML("../sections/puzzle3H.html", "puzzle3H");
    loadHTML("../sections/puzzle4H.html", "puzzle4H");
    loadHTML("../sections/puzzle5H.html", "puzzle5H");


  }
  
  document.addEventListener("DOMContentLoaded", loadPuzzle);
  