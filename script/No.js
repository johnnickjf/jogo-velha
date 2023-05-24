const winOptions = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // column 1
        [1, 4, 7], // column 2
        [2, 5, 8], // column 3
        [0, 4, 8], // main diagonal
        [2, 4, 6], // secondary diagonal
      ];
export default class No {
    constructor(tabuleiro) {
        this.tabuleiro = tabuleiro;
        this.notaTabuleiro = this.heuristica();
        this.child = new Array();
    }

    heuristica(jogador = 'O') {
        let pontuacao = 0;
        for (let i = 0; i < winOptions.length; i++) {
            let opcao = winOptions[i]; // Pega uma opção de vitória ex: [0, 1, 2]
            let vitoria = true; 
            for (let j = 1; j < opcao.length; j++) {
                let posicao = opcao[j]; // Pega a posição 1, 2, 3 da opção de vitória
                if (this.tabuleiro[posicao] !== jogador) { 
                    vitoria = false; // Se a posição não for igual ao jogador, não é uma vitória
                    break;
                }
            }

            if (vitoria) {
                pontuacao += 10; // Se um dos campos de vitoria está diponivel, cai aqui e soma 10
            } else {
                pontuacao += 1; // Caso não seja um campo que seria uma opção de vitoria, cai aqui e soma 1
            }
        }
        return pontuacao; // No final retorna um valor de TODAS as possivel opções que ele pode por a jogada e possivelmente ganhar.
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