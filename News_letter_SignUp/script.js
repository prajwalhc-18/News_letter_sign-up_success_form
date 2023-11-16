function validateForm() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address';
        return false; // Prevents form submission if validation fails
    } else {
        emailError.textContent = '';
        subscribe(); // Call subscribe function after validation passes
        return true; // Allow the form to submit
    }
}

function subscribe() {
    // Get the entered email
    const userEmail = document.getElementById('email').value;

    // Redirect to thanks.html with the email as a query parameter
    window.location.href = `thanks.html?email=${encodeURIComponent(userEmail)}`;
}