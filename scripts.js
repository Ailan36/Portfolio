document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add actual form submission logic here, or validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! I'll get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});