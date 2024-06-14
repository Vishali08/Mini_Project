let timerInterval;
let timerValue = 0;
let timerRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const cornerClock = document.getElementById('cornerClock');

function formatTime(milliseconds) {
  const mins = Math.floor(milliseconds / (60 * 1000));
  const secs = Math.floor((milliseconds % (60 * 1000)) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 10); // Displaying 2 digits for milliseconds
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    const startTime = Date.now() - timerValue;
    timerInterval = setInterval(() => {
      timerValue = Date.now() - startTime;
      timerElement.textContent = formatTime(timerValue);
    }, 10); // Update every 10 milliseconds for millisecond accuracy
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
    alert('The data will be lost Are you sure you want to reset?');
  clearInterval(timerInterval);
  timerRunning = false;
  timerValue = 0;
  timerElement.textContent = formatTime(timerValue);
}
function updateCornerClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    cornerClock.textContent = `CURRENT TIME:  ${hours}:${minutes}:${seconds}`;
  }

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

setInterval(updateCornerClock, 1000);
updateCornerClock();