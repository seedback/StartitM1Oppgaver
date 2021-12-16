// Model

var board = ['', '', '', '', '', '', '', '', ''];
var winner = '';

// View

function showBoard() {
  let html = '';

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      html += `<button class="tickButton" onclick="setX(${x * 3 + y})">${board[x * 3 + y]}</button>`;
    }
    html += "<br/>";
  }

  if (winner) {
    html += `<text style="background: lightgreen; font-size: x-large">${winner} vant!</text>`;
  }

  html += `<button onclick="reset()" style="position: absolute; top: 10px; left: 10px;">reset</button>`;

  document.getElementById('app').innerHTML = html;
}

// Controller

// Sets the button on the given index to 'x' if the index i empty
// Returns true if it set the button to 'x' successfully. otherwise; false
function setX(index) {
  if (checkCoordsEmpty(index)) {
    if (!winner) {
      board[index] = 'x';
      if (checkWinning()) {
        winner = checkWinning();
      }
    }
    if (!winner) {
      setRandomO();
      if (checkWinning()) {
        winner = checkWinning();
      }
    }
    showBoard();
  }
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  winner = '';
}

// Helper functions

function checkCoordsEmpty(index) {
  if (index < 0 || index > board.length) return false;
  if (!board[index]) {
    return true;
  }
  return false;
}

function setRandomO() {
  let emptyCoords = Array.from(board.keys()).filter(i => board[i] === '');
  if (emptyCoords.length == 0) return false;
  var chosenCoord = emptyCoords[Math.floor(Math.random() * emptyCoords.length)];
  board[chosenCoord] = 'o';
  return true;
}

function checkWinning() {
  // Checking thre in a row horizontally (either 'x' or 'o')
  for (let i = 0; i < 9; i += 3) {

    if (board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '') {
      return board[i];
    }
  }
  // Checking thre in a row vertically (either 'x' or 'o')
  for (let i = 0; i < 3; i++) {
    if (board[i] == board[i + 3] && board[i] == board[i + 6] && board[i] != '') {
      return board[i];
    }
  }
  // Checking three in a row diagonally (either 'x' or 'o')
  console.log(board);
  console.log(board[0], board[4], board[8]);
  console.log(board[0] == board[4] && board[0] == board[8]);
  if (board[0] == board[4] && board[0] == board[8]) {
    return board[0];
  }
  console.log(board[2], board[4], board[6]);
  console.log(board[2] == board[4] && board[2] == board[6]);
  if (board[2] == board[4] && board[2] == board[6]) {
    return board[2];
  }

  return false;
}

window.onload = function() {
  showBoard();
}