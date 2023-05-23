// import GameTree from './Game.js';
// import Search from './Search.js';
//
// const primeiroTabuleiro = ['', '', '', '', 'X', '', '', '', ''];
// const tabuleiroPreenchido = new GameTree(primeiroTabuleiro);
// console.log(tabuleiroPreenchido);
// const melhorJogada = Search.melhorEscolha(tabuleiroPreenchido.raiz, 'O');
//
// console.log(melhorJogada);

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(move) {
  if (board[move] === '') {
    board[move] = currentPlayer;
    event.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (checkWin()) {
      let winner = currentPlayer === 'X' ? 'O' : 'X';
      alert('Jogador ' + winner + ' ganhou!');
      resetBoard();
    }
  }
}

function moveIA() {
    let boardArray = [];
    for (let i = 0; i < board.length; i++) {
      boardArray = boardArray.concat(board[i]);
    }
    console.log(boardArray);
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i * 3] !== '' && board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) ||
      (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6])
    ) {
      return true;
    }
  }
  return (
    (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
    (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
  );
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}