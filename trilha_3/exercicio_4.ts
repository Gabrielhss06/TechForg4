// Atividade 4 trilha 3
class Animal {
    private energia: number;

    constructor() {
        this.energia = 0;
        }

    comer(): void {
        this.energia += 10;
    }
    
    energiaAnimal(): void {
        console.log(`Energia atual: ${this.energia}`);
    }

    protected ajsEnergia(valor: number): void {
        this.energia += valor;
    }
}

class Leao extends Animal {
    cacar(): void {
        console.log("O leão está caçando...");
        this.ajsEnergia(-15); 
        this.ajsEnergia(20);   
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está se alimentando...");
        this.ajsEnergia(15);   
    }
}

function alimentar(animais: Animal[]): void {
    animais.forEach(animal => {
        animal.comer();
        animal.energiaAnimal();
    });
}

const leao = new Leao();
const passaro = new Passaro();
passaro.comer()
leao.cacar()

alimentar([leao, passaro]);