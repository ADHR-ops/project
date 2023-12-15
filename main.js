document.addEventListener('DOMContentLoaded', function () {
    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform AJAX request for login
            // ...
        });
    }

    // Handle Registration Form Submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform AJAX request for registration
            // ...
        });
    }

    // Dynamic Content Loading for Dashboard
    const loadShiftsButton = document.getElementById('loadShifts');
    if (loadShiftsButton) {
        loadShiftsButton.addEventListener('click', function() {
            // AJAX request to load shifts data
            // Update DOM with shifts data
            // ...
        });
    }

    // Additional JavaScript for other interactive elements
    // ...
});
