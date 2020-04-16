document.querySelector('.clock').innerText = new Date().toLocaleTimeString();
setInterval(currentTime, 1000);

function currentTime() {
  document.querySelector('.clock').innerText = new Date().toLocaleTimeString();
}
