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
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
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
  // Verifica se há um vencedor
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) ||
      (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i])
    ) {
      return true;
    }
  }
  if (
    (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0])
  ) {
    return true;
  }
  return false;
}

function resetBoard() {
  currentPlayer = 'X';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}