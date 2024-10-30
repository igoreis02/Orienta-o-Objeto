export class Cliente {
    nome;
    _CPF;

    constructor (nome, CPF){
        this.nome = nome;
        this._CPF = CPF
    }

    get CPF(){
        return this._CPF
    }
}