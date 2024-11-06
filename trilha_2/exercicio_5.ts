// Atividade  5 ------------------
class Agenda{
    private compromissos: string[]

    constructor(compromissos: string []){
        this.compromissos = compromissos;
    }

    listarCompromisso(){
         console.log(`Seus Compromissos são:\n${this.compromissos.join("\n")}`);
    }
}

const minhaAgenda = new Agenda(["escovar os dentes", "tomar cafe", "ir na academia"])
minhaAgenda.listarCompromisso()
