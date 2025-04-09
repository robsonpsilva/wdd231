document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic client-side validation (more robust validation can be added)
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const experience = document.getElementById('experience').value;

    if (!name || !address || !phone || !email || !experience) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate successful submission and show the overlay
    document.getElementById('successOverlay').style.display = 'flex';

    // Optionally, you can add code here to actually submit the form data
    // to a server using AJAX or a traditional form submission.

    // Hide the overlay after a few seconds (optional)
    setTimeout(function() {
        document.getElementById('successOverlay').style.display = 'none';
        document.getElementById('registrationForm').reset(); // Clear the form
    }, 3000);
});