const timeEl = document.getElementById("time");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let intervalId = null;

function updateTime() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");

  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");

  const sec = String(Math.floor(seconds % 60)).padStart(2, "0");

  timeEl.textContent = `${hrs}:${mins}:${sec}`;
}

startBtn.addEventListener("click", () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    seconds++;
    updateTime();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  updateTime();
});

resetBtn.addEventListener("click", () => {
  seconds = 0;
  clearInterval(intervalId);
  intervalId = null;
  updateTime();
});
