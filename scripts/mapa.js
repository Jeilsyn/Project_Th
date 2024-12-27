window.onload = function () {
    const container = document.getElementById('corazones');
    
    setInterval(() => {
      let heart = document.createElement('div');
      heart.classList.add('corazon');
      heart.innerText = '❤️'; // Emoji de corazón
      
      const heartId = 'heart-' + Date.now();
      heart.id = heartId;
      
      let randomX = Math.random() * window.innerWidth;
      heart.style.left = `${randomX}px`;
      
      container.appendChild(heart);
      
      heart.addEventListener('mouseover', () => {
        console.log(`ID del corazón: ${heart.id}`);
      });
      
      heart.addEventListener('animationend', () => {
        container.removeChild(heart);
      });
    }, 900); // Genera un corazón nuevo
  };
  