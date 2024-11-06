// Atividade 1----
class ContaBancaria {
    private titular : string
    private saldo : number 
    constructor(titular: string, saldo: number = 0){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number){
        if(valor > 0) {
            this.saldo += valor;
            console.log(`Deposito de: ${valor} realizado.Novo saldo: ${this.saldo}`) 
        }
        else{
            console.log(`Deposito nao realizado!! Valor do Deposito negativo`)
        }
    }
    sacar(valor: number){
        if(valor > 0 && valor < this.saldo)
        console.log(`O saque foi de ${valor} realizado com sucesso!`)
        else{
        console.log(`O saque de ${valor} nao foi realizado, consulte seu saldo e tende novamente!`)
        }
    }
    public saldoConta(){
        console.log(`A conta de: ${this.titular} tem o saldo de: ${this.saldo}.`)
    }
}

const conta1 = new ContaBancaria("Gabriel", 0)
conta1.saldoConta()