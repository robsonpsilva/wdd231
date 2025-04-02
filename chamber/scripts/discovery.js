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
    data.forEach(item => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });