import GameTree from './Game.js';
import Search from './Search.js';

let board = ['', '', '', '', '', '', '', '', ''];
let btnReset = document.querySelector('button');
let cells = document.querySelectorAll('.cell');

let humanPlayer = 'X';
let aiPlayer = 'O';


btnReset.addEventListener('click', resetBoard);
cells.forEach(cell => {
  cell.addEventListener('click',makeMove);
});

function makeMove(event) {
  let move = event.target.getAttribute('celula');
  if (board[move] === '') {
    board[move] = humanPlayer;
    event.target.innerText = humanPlayer;
    if(checkWin(humanPlayer)){
      moveIA();
    }
  }
}

function fail(){
  let count = 0;
  for (let index = 0; index < board.length; index++) {
    if(board[index] === ''){
      count++;
    }    
  }
  return count <= 0;
}

function moveIA() {
  let allPossibilities  = new GameTree(board);
  let aiMoves = Search.bestChoice(allPossibilities .raiz, aiPlayer);
  let nextMove;
  while(aiMoves.destino != null){
    nextMove = aiMoves.raiz.tabuleiro;
    aiMoves = aiMoves.destino;
  }
  if(nextMove != null){
    for (let index = 0; index <= nextMove.length; index++) {
      if(nextMove[index] !== board[index]){
        cells[index].innerText = nextMove[index];
      }
    }
    board = nextMove;
  }
  checkWin(aiPlayer);
}

function showMessage(value) {
    alert('Jogador ' + value + ' ganhou!');
    resetBoard();
}

function checkWin(value) {
  if(fail()){
    showMessage('V');
    return false;
  }
  for (let i = 0; i < 3; i++) {
    if (
      (board[i * 3] !== '' && board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) ||
      (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6])
    ) {
      showMessage(value);
      return false;
    }
  }
  if (
    (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
    (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
  ){
    showMessage(value);
    return false;
  }
  return true;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}