// LocalStorage para mensagens de visita
const visitorMessage = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
  if (daysBetween < 1) {
    visitorMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitorMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? 'day' : 'days'} ago.`;
  }
}

// Armazenar a data da visita atual
localStorage.setItem('lastVisit', now);

fetch('./data/items.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const cardsContainer = document.getElementById('cards-container');

    // Create cards dynamically
    let i = 1;
    data.forEach(item => {
      const card = document.createElement('article');
      card.classList.add('card');
      card.classList.add(`card${i}`);
      i++;
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" loading="lazy" width = "300" height = "200">
        </figure>
        <address>${item.address}</address>
        <br>
        <p class = "justified">${item.description}</p>
        <br>
        <button>Learn More</button>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

  function showOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("show");
}


function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("show");
}


window.onload = () => showOverlay();