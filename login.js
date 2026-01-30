// Set your password here
const CORRECT_PASSWORD = 'bendyrulers';

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Set session flag (persists during tab session)
        sessionStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to timetable
        window.location.href = 'timetable.html';
    } else {
        // Show error message
        errorMessage.textContent = 'Incorrect password. Please try again.';
        errorMessage.style.display = 'block';
        
        // Clear input
        passwordInput.value = '';
        passwordInput.focus();
        
        // Shake animation
        passwordInput.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
    }
});

// Clear error message when typing
document.getElementById('passwordInput').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
});