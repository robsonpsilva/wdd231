async function loadData() {
    try {
      const response = await fetch('./data/hiking-details.json'); // Caminho para o arquivo JSON
      const trailInfo = await response.json();
      
      // Seleciona os primeiros dados do array
      const data = trailInfo[0];

      // Preenche os campos no HTML
      document.getElementById('imageofplace').src = data.image;
      document.getElementById('imageofplace').alt = `Image of ${data.name}`;
      document.getElementById('type').textContent = data.type;
      document.getElementById('region').textContent = data.Region;
      document.getElementById('duration').textContent = data.duration;
     document.getElementById('detail').textContent = data.detail;
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  // Executa a função ao carregar a página
  window.onload = loadData;