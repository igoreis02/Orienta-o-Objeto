import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 =  new Cliente('Albert', 11122233348);
const cliente2 = new Cliente('Wanessa', 11122233366);


const conta1 =  new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1001);

conta1.deposito(500);

let valor = 200;
conta1.transterir(valor, conta2)

console.log(ContaCorrente.numeroDeContas);

console.log(conta2);




