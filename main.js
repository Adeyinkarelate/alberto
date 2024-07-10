import './style.css'


  // Set your target date (YYYY-MM-DD format)
  const targetDate = new Date('2024-12-31').getTime();

  // Update the countdown every second
  const interval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    document.getElementById('countdown-display').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Stop the countdown if the target date is reached
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById('countdown-display').innerHTML = 'EXPIRED';
    }
  }, 1000); // Update every second

  // Function to handle scroll events
  window.addEventListener('scroll', function() {
    const countdown = document.getElementById('countdown');
    const scrollPosition = window.scrollY;

    // Adjust position based on scroll
    if (scrollPosition > 0) {
      countdown.classList.add('shadow-md', 'bg-white', 'py-4');
    } else {
      countdown.classList.remove('shadow-md', 'bg-white', 'py-4');
    }
  });


