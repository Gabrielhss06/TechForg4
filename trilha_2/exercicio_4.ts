// Atividade 4 ---------
class Temperatura {
    private valor: number;
 
    constructor(valor: number){
       this.valor = valor;
    }
 
    public convFahrenheit(): number{
       return (this.valor * 9 / 5 + 32)
    }
    public convKelvin(){
       return (this.valor + 273.15)
    }
 }
 
 const temperatura1 = new Temperatura (25)
 console.log('A temperatura convertidade em Fahrenheit é: ' + temperatura1.convFahrenheit() + 'F°')
 console.log('A temperatura convertidade em Kelvin é: ' + temperatura1.convKelvin() + 'K°')