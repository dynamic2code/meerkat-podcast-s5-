
// Set your target date and time for the countdown (YYYY-MM-DDTHH:mm:ssTZD)
const targetDate = '2023-08-07T00:00:00-08:00'; // Replace -08:00 with your desired timezone offset

function updateCountdown() {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate).getTime();
  const timeRemaining = targetDateTime - currentDate.getTime();

  if (timeRemaining <= 0) {
    // Countdown is over
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
  } else {
    // Calculate remaining time in days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown digits
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
}

// Call updateCountdown() every second to update the countdown in real-time
setInterval(updateCountdown, 1000);

// Initial call to update the countdown when the page loads
updateCountdown();

const fullscreenButton = document.querySelector("#fullscreenButton");

fullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});
