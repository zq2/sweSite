document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login form submission
        alert('Login form submitted!');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle signup form submission
        const userData = {
            fullname: signupForm.fullname.value,
            email: signupForm.email.value,
            username: signupForm.username.value,
            password: signupForm.password.value
        };
        saveUserDataToLocal(userData);
        alert('Sign up successful!');
    });

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('signupContainer').style.display = 'block';
        document.getElementById('loginContainer').style.display = 'none';
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('signupContainer').style.display = 'none';
    });

    function saveUserDataToLocal(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
});
