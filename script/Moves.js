
export default class Moves {
    constructor() {
        this.currentPlayer = 'X';
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }
    makeMove(row, col) {
      if (this.board[row][col] === '') {
        this.board[row][col] = this.currentPlayer;
        event.target.innerText = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        if (this.checkWin()) {
          let winner = this.currentPlayer === 'X' ? 'O' : 'X';
          alert('Jogador ' + winner + ' ganhou!');
          this.resetBoard();
        }
      }
    }

    moveIA() {
        let boardArray = [];
        for (let i = 0; i < this.board.length; i++) {
          boardArray = boardArray.concat(this.board[i]);
        }
        console.log(boardArray);
    }

    checkWin() {
      for (let i = 0; i < 3; i++) {
        if (
          (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) ||
          (this.board[0][i] !== '' && this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i])
        ) {
          return true;
        }
      }
      return (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) ||
          (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]);

    }

    resetBoard() {
      this.currentPlayer = 'X';
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      const cells = document.getElementsByClassName('cell');
      for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
      }
    }
}