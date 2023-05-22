import No from './No.js';

export default class Game {

    constructor(tabuleiro) {
        this.raiz = new No(tabuleiro);
        this.preencheTabuleiro(this.raiz, 'O');
    }

    preencheTabuleiro(no, jogada) {
        if (!no) {
            return;
        }
        let noFilho, tabuleiroFilho;
        for (let i = 0; i < no.tabuleiro.length; i++) {
            if (!no.tabuleiro[i]) {
                tabuleiroFilho = no.tabuleiro.slice();
                tabuleiroFilho[i] = jogada;
                noFilho = new No(tabuleiroFilho);
                no.addChild(noFilho);
                this.preencheTabuleiro(noFilho, (jogada == 'X') ? 'O' : 'X');
            }
        }
    }
}