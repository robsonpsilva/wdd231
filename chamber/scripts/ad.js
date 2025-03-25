

const getRandomCompanies = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random()); // Embaralha o array
    return shuffled.slice(0, count); // Retorna os primeiros 'count' itens
};

const filterCompaniesByMembershipLevel = (companies) => {
    return companies.filter(company => company.membershipLevel === 2 || company.membershipLevel === 3);
};

const loadCompanies = async () => {
    try {
        const response = await fetch("./data/member.json");
        if (response.ok) {
            
            const companies = await response.json();
            const filteredCompanies = filterCompaniesByMembershipLevel(companies);
            const randomCompanies = getRandomCompanies(filteredCompanies, 2);
            createCards(randomCompanies);
        } else {
            console.error("Erro ao carregar o arquivo JSON:", response.statusText);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
};

// Função para criar cards
const createCards = (data) => {
    const container = document.getElementById("adContainer");

    data.forEach(company => {
        // Cria os elementos do card
        const card = document.createElement("div");
        card.classList.add("ad");

        const header = document.createElement("div");
        header.classList.add("ad-header");
        header.textContent = company.companyName;

        const description = document.createElement("div");
        description.classList.add("ad-description");
        description.textContent = company.description;

        const divider = document.createElement("div");
        divider.classList.add("ad-divider");

        const body = document.createElement("div");
        body.classList.add("ad-body");

        const logo = document.createElement("img");
        logo.classList.add("ad-logo");
        logo.setAttribute("src", `./images/${company.logo}`);
        logo.setAttribute("alt", company.companyName);

        const details = document.createElement("div");
        details.classList.add("ad-details");
        details.innerHTML = `
            <p>Phone: ${company.phone}</p>
            <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        `;

        // Monta o card
        body.appendChild(logo);
        body.appendChild(details);
        card.appendChild(header);
        card.appendChild(description);
        card.appendChild(divider);
        card.appendChild(body);

        // Adiciona o card ao container
        container.appendChild(card);
    });
};

loadCompanies();

// Obtém dois cards aleatórios e cria os elementos

