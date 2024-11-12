//Atividade 1 trilha 3 ------------
class Veiculo{
    public mover(){
        console.log("O veículo está se movendo")
    }
}

class carro extends Veiculo{
    mover(){
        console.log("O carro está dirigindo")
    }
}

class bicicleta extends Veiculo{
    mover(){
        console.log("A bicicleta está pedalando")
    }
}

const carrotest = new carro()
const bicicletatest = new bicicleta()

carrotest.mover()
bicicletatest.mover()