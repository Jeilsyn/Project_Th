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

function loadSvgs() {
  loadHTML("../sections/svgs.html", "svgs");
  loadHTML("../sections/svgs2.html", "svgs2");
  loadHTML("../sections/svgs3.html", "svgs3");
}

document.addEventListener("DOMContentLoaded", loadSvgs);
