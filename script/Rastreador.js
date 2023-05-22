export default class Rastreador{
    constructor(raiz, destino){
        this.destino = destino;
        this.raiz = raiz;
        this.custo = this.calculaCusto();
    }

    calculaCusto(){
        let custo = 0;
        let atual = this;
        while(atual.destino != null){
            custo += 1;
            atual = atual.destino;
        }
        return custo;
    }
}