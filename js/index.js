setInterval(currentTime, 100);
function currentTime() {
  document.querySelector('.clock').innerText = new Date().toLocaleTimeString();
}
