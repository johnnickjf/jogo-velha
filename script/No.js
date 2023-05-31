export default class No {
    static winOptions = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // column 1
        [1, 4, 7], // column 2
        [2, 5, 8], // column 3
        [0, 4, 8], // main diagonal
        [2, 4, 6], // secondary diagonal
      ];
    constructor(tabuleiro, jogador = 'O') {
        this.jogador = jogador;
        this.tabuleiro = tabuleiro;
        this.notaTabuleiro = this.heuristica();
        this.child = new Array();
        this.terminado = this.notaTabuleiro === 0 && !this.tabuleiro.includes('');
    }
    heuristica() {
    let pontuacao = 0;
    for (let i = 0; i < No.winOptions.length; i++) {
        let opcao = No.winOptions[i];
        let vitoria = true;
        for (let j = 1; j < opcao.length; j++) {
            let posicao = opcao[j];
            if (this.tabuleiro[posicao] !== this.jogador) {
                vitoria = false;
                break;
            }
        }

        if (vitoria) {
            pontuacao += 10;
        } else {
            pontuacao += 1;
        }
    }
    return pontuacao;
}

    minimax() {
    if (this.terminado) {
      return this.notaTabuleiro;
    }

    let melhorValor;
    if (this.jogador === 'X') {
      melhorValor = -Infinity;
      for (let filho of this.child) {
        const valor = filho.minimax();
        melhorValor = Math.max(valor, melhorValor);
      }
    } else {
      melhorValor = Infinity;
      for (let filho of this.child) {
        const valor = filho.minimax();
        melhorValor = Math.min(valor, melhorValor);
      }
    }

    return melhorValor;
  }

    retornaOrdenados(custo){
        const filhos = this.child;
        filhos.sort((a,b)=>{
                if((a.notaTabuleiro + custo) < (b.notaTabuleiro + custo)){
                    return 1;
                }else if((a.notaTabuleiro + custo) > (b.notaTabuleiro + custo)){
                    return -1;
                }else{
                    return 0;
                }
        });
        return filhos;
    }

    addChild(child) {
        this.child.push(child);
    }
}