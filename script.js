// Countdown Timer
function updateCountdown() {
    const launchDate = new Date('2026-05-08').getTime(); // Set your launch date here
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const countdownHeader = document.getElementById('countdownHeader');
        countdownHeader.textContent = days + ' DAYS LEFT';
    }
}

// Update countdown on load and every hour
updateCountdown();
setInterval(updateCountdown, 3600000);

// Handle email form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('successMessage');
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    
    // Show success message
    successMessage.textContent = '✓ Thanks! We\'ll notify you soon.';
    successMessage.classList.add('show');
    
    // Reset form
    document.getElementById('emailForm').reset();
    
    // Hide message after 4 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);
}
