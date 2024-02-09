const start = document.getElementById('start')
const im = document.getElementById('lap')
let seconds = 1

function startTimer() {
   setInterval(food, 1000)
}

function food() {
   start.innerHTML = seconds
   seconds++;
}

function lap() {
   im.innerHTML += `<li>${seconds - 1} sekunder</li>`;
}

function refreshpage() {
   location.reload()
}
