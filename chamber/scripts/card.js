document.addEventListener("DOMContentLoaded", () => {
  
    const mainContainer = document.querySelector("main .display1");

    
    const getMembershipClass = (level) => {
        switch (level) {
            case 3: return "gold";
            case 2: return "silver";
            case 1: return "member";
            default: return "member";
        }
    };

    const createCard = (company) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `assets/chamber/images/${company.logo}`;
        img.alt = `${company.companyName} Logo`;

        const cardArea = document.createElement("div");
        cardArea.classList.add("card-body");

        const h3 = document.createElement("h3");
        h3.textContent = company.companyName;

        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;

        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone number:</strong> ${company.phone}`;

        const industry = document.createElement("p");
        industry.innerHTML = `<strong>Industry:</strong> ${company.industry}`;

        const website = document.createElement("a");
        website.href = company.website;
        website.target = "_blank";
        website.textContent = "Visit website ";

        const membership = document.createElement("span");
        membership.classList.add("membership", getMembershipClass(company.membershipLevel));
        membership.textContent = getMembershipClass(company.membershipLevel).charAt(0).toUpperCase() + getMembershipClass(company.membershipLevel).slice(1);

        // Adiciona os elementos ao card
        cardArea.appendChild(h3);
        cardArea.appendChild(address);
        cardArea.appendChild(phone);
        cardArea.appendChild(industry);
        cardArea.appendChild(website);
        cardArea.appendChild(membership);

        card.appendChild(img);
        card.appendChild(cardArea);

        return card;
    };


    fetch("./data/member.json") 
        .then(response => {
            if (!response.ok) {
                throw new Error("Error loading JSON file.");
            }
            return response.json();
        })
        .then(companies => {
            // Cria e insere os cards
            companies.forEach(company => {
                const card = createCard(company);
                mainContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading data:", error);
        });
});
