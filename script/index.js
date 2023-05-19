const GameTree = require('./Game');
const Search = require('./Search');

const primeiroTabuleiro = ['', '', '', '', 'X', '', '', '', '']
const tabuleiroPreenchido = new GameTree(primeiroTabuleiro);
// console.log(tabuleiroPreenchido);
const melhorJogada = Search.melhorEscolha(tabuleiroPreenchido.raiz, 'O');

console.log(melhorJogada);