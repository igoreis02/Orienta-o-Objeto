import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 =  new Cliente();


cliente1.nome = 'Ricardo';
cliente1.CPF = 11111133309;


console.log(cliente1);

const ContaCorrenteRicardo =  new ContaCorrente();

ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1

ContaCorrenteRicardo.deposito(200)



console.log(ContaCorrenteRicardo);
console.log(valorSacado)

console.log(ContaCorrenteRicardo.saldo);

