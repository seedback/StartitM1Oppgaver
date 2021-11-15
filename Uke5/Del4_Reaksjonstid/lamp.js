// Model
var selectedLampIndex = 3;
var startTime = new Date().getTime();
var finishTime = new Date().getTime();
var spentMilliseconds = Math.floor(finishTime - startTime);
var spentSeconds = spentMilliseconds / 1000;

// View
updateView();

function updateView() {
  let html = `<div class="lampGrid">`;

  for (let i = 0; i < 25; i++) {
    html += `<div class="lamp ${(selectedLampIndex == i) ? 'lightOn" onclick="choseLamp()"' : '"'} ></div>`
  }

  html += `</div><div>${spentSeconds}</div>`

  document.getElementById("app").innerHTML = html;
}

// Controler
choseLamp();

function choseLamp() {
  selectedLampIndex = Math.floor(Math.random() * 25);

  finishTime = new Date().getTime();
  spentMilliseconds = Math.floor(finishTime - startTime);
  spentSeconds = spentMilliseconds / 1000;
  startTime = finishTime;

  // To get a running log of the times, not just the latest score
  console.log(spentSeconds);


  updateView();
}