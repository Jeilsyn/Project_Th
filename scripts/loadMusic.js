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
  
  function loadMusic() {
    loadHTML("../sections/spotify.html", "spotify");
  }

  
  document.addEventListener("DOMContentLoaded", loadMusic);
  