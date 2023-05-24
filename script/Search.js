import Rastreador from './Rastreador.js';

export default class Search{
    static bestChoice(raiz, player){
        let ordenados = new Array();
        let atual, rastreadorAtual;
        let fila = new Array(new Rastreador(raiz,null));

        while (fila[0] != null) {
            rastreadorAtual = fila.shift(); //Isso é o rastreador atual
            atual = rastreadorAtual.raiz; //Isso é o nó atual que está dentro da fila de rastreadores
            
            if(Search.vitoria(atual.tabuleiro, player)){
                return rastreadorAtual;
            }

            ordenados = atual.retornaOrdenados(rastreadorAtual.custo); //Retorna os filhos do nó atual ordenados pela heuristica + custo até chegar ali.

            ordenados.forEach(filho => {
                fila.push(new Rastreador(filho,rastreadorAtual)); //Adiciona os filhos do nó atual na fila de rastreadores ordenados
            });

        }
        return rastreadorAtual;
    }

    static vitoria(tabuleiro, jogador){
        const opcoesVitoria = [
            [0, 1, 2], // linha 1
            [3, 4, 5], // linha 2
            [6, 7, 8], // linha 3
            [0, 3, 6], // coluna 1
            [1, 4, 7], // coluna 2
            [2, 5, 8], // coluna 3
            [0, 4, 8], // diagonal principal
            [2, 4, 6], // diagonal secundária
        ];

        for (let i = 0; i < opcoesVitoria.length; i++) {
            let opcao = opcoesVitoria[i]; // Pega uma opção de vitória ex: [0, 1, 2]
            let vitoria = 0;
            for (let j = 0; j < opcao.length; j++) {
                let posicao = opcao[j]; // Pega a posição 1, 2, 3 da opção de vitória
                if (tabuleiro[posicao] == jogador) {
                    vitoria += 1;
                    if(vitoria == 3){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}