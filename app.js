let box = Array.from(document.querySelectorAll('.box'));
let box_arr = [null, null, null, null, null, null, null, null, null];
let board = document.getElementById('game-board');
let content = document.getElementById('content');
let restart = document.getElementById('restart');
let currentPlayer = 'X';
restart.addEventListener('click', restartGame);

function boardController(e) {
  content.innerText = ``;
  if (!box_arr[e.target.id]) {
    box_arr[e.target.id] = currentPlayer;
    e.target.textContent = currentPlayer;
  }

  if (box_arr.includes(null) !== true) {
    content.innerText = `Its a draw !`;
    return;
  }

  if (checkWinner()) {
    content.innerText = `${currentPlayer} has won`;
    removeListen();
    return;
  }
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
}

function removeListen() {
  board.removeEventListener('click', boardController);
}

function drawBox() {
  box.forEach((item, index) => {
    let styleString = '';
    if (index % 3 === 0) {
      styleString += `border-right:3px solid black;`;
    }
    if (index % 3 === 2) {
      styleString += `border-left:3px solid black;`;
    }
    if (index > 5) {
      styleString += `border-top:3px solid black;`;
    }
    if (index < 3) {
      styleString += `border-bottom:3px solid black;`;
    }
    item.style = styleString;
  });
}

function checkWinner() {
  if (box_arr[0] === currentPlayer) {
    if (box_arr[1] === currentPlayer && box_arr[2] == currentPlayer) {
      return true;
    }
    if (box_arr[3] === currentPlayer && box_arr[6] == currentPlayer) {
      return true;
    }
    if (box_arr[4] === currentPlayer && box_arr[8] == currentPlayer) {
      return true;
    }
  }
  if (box_arr[8] === currentPlayer) {
    if (box_arr[2] === currentPlayer && box_arr[5] == currentPlayer) {
      return true;
    }
    if (box_arr[6] === currentPlayer && box_arr[7] == currentPlayer) {
      return true;
    }
    if (box_arr[4] === currentPlayer && box_arr[0] == currentPlayer) {
      return true;
    }
  }
  if (box_arr[4] === currentPlayer) {
    if (box_arr[1] === currentPlayer && box_arr[7] == currentPlayer) {
      return true;
    }
    if (box_arr[6] === currentPlayer && box_arr[2] == currentPlayer) {
      return true;
    }
    if (box_arr[3] === currentPlayer && box_arr[5] == currentPlayer) {
      return true;
    }
  }
}

function restartGame() {
  box.forEach((item, index) => {
    board.addEventListener('click', boardController);
    box_arr[index] = null;
    item.textContent = '';
    content.innerText = `Let's Play !`;
    content.style = ``;
  });
}

restartGame();
drawBox();
