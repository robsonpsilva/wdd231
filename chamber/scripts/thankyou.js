document.addEventListener('DOMContentLoaded', function() {
    const formDataContainer = document.getElementById('formData');
    const urlParams = new URLSearchParams(window.location.search);

    const requiredFields = [
        { name: 'firstName', label: "First Name:" },
        { name: 'lastName', label: "Last Name:" },
        { name: 'email', label: "Email:" },
        { name: 'mobilePhone', label: "Mobile Phone Number:" },
        { name: 'organizationName', label: "Organization Naame:" },
        { name: 'timestamp', label: "Submission Date and Time:" }
    ];

    let outputHTML = '';
    requiredFields.forEach(field => {
        const value = urlParams.get(field.name);
        if (value) {
            outputHTML += `<div class="data-item"><strong>${field.label}</strong> ${decodeURIComponent(value)}</div>`;
        }
    });

    formDataContainer.innerHTML = outputHTML;
});