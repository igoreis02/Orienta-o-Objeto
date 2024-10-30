
export class ContaCorrente{
    
    cliente;
    agencia; 
    _saldo = 0 ; //privado

    get saldo(){ //por ser um atributo privado para caso precise ver ele tenho que usar o getter(pega o que tem dentro do atributo privado )
        return this._saldo
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
