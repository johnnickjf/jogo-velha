import Rastreador from './Rastreador.js';

export default class Search{
static bestChoice(raiz, player) {
  let ordenados = [];
  let atual, rastreadorAtual;
  let fila = [new Rastreador(raiz, null)];
  let melhorJogada = null;
  let melhorValor = -Infinity;

  while (fila[0] != null) {
    rastreadorAtual = fila.shift();
    atual = rastreadorAtual.raiz;

    if (Search.vitoria(atual.tabuleiro, player)) {
      melhorJogada = atual.tabuleiro.slice(); // Copia o tabuleiro atual
      break;
    }

    ordenados = atual.retornaOrdenados(rastreadorAtual.custo);

    for (let filho of ordenados) {
      const valor = filho.minimax();

      if (valor > melhorValor) {
        melhorValor = valor;
        melhorJogada = filho.tabuleiro.slice(); // Copia o tabuleiro do filho atual
      }

      fila.push(new Rastreador(filho, rastreadorAtual));
    }
  }

  // Encontra a primeira jogada do tabuleiro
  const primeiraJogada = Search.encontrarPrimeiraJogada(melhorJogada);

  return primeiraJogada;
}

// Função auxiliar para encontrar a primeira jogada no tabuleiro
static encontrarPrimeiraJogada(tabuleiro) {
  const primeiraJogada = tabuleiro.slice(); // Copia o tabuleiro
  const jogadas = primeiraJogada.filter((jogada) => jogada !== ""); // Filtra as jogadas válidas (não vazias)

  if (jogadas.length > 0) {
    const primeiraJogadaIndex = tabuleiro.indexOf(jogadas[0]);
    primeiraJogada.fill("", primeiraJogadaIndex + 1); // Remove as jogadas após a primeira jogada
  }

  return primeiraJogada;
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