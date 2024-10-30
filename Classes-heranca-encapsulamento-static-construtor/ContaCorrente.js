import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    
    static numeroDeContas = 0;
    _cliente;
    agencia; 
    _saldo = 0 ; //privado

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1
    }

    get saldo(){ //por ser um atributo privado para caso precise ver ele tenho que usar o getter(pega o que tem dentro do atributo privado )
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor ;
        }
    }
 
    deposito(valor){
        if( valor > 0){
           this._saldo += valor ;
           return valor //Aqui retorna o valor que foi depositado caso precise mostra na tela
        }
        
    }
    saque(valor){
        if( valor > this.saldo){
            console.log('saldo insuficiente')
        }else{
            this._saldo -= valor;
            return valor //retorna o valor do saque caso precise mostra na tela 
        }
    }

    transterir(valor, conta){
      const valorSacado = this.saque(valor);
      conta.deposito(valorSacado);  
    }

}