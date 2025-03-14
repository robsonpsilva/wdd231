

const getMembershipText = (level) => {
    switch (level) {
        case 3: return "Gold";
        case 2: return "Silver";
        case 1: return "Member";
        default: return "Member";
    }
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
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="/chamber/images/${company.logo}" alt="${company.companyName} Logo"></td>
                <td data-label="Company Name">${company.companyName}</td>
                <td data-label="Address">${company.address}</td>
                <td data-label="Phone">${company.phone}</td>
                <td data-label="Industry">${company.industry}</td>
                <td data-label="Membership Level">${getMembershipText(company.membershipLevel)}</td>
                <td data-label="Website"><a href="${company.website}" target="_blank">Visit</a></td>
            `;
            companyTable.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });