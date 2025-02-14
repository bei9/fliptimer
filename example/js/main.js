document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysToNow = (new Date().getTime() / 1000) - (86400 * 2) + 1;

  // Set up FlipTimer
  var fliptimer = new FlipTimer(twoDaysToNow)

    // Start the countdown
    .start()


  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#fliptimer').classList.toggle('fliptimer__theme-dark');
    body.querySelector('#fliptimer').classList.toggle('fliptimer__theme-light');
  }, 5000);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = fliptimer.version;
});
