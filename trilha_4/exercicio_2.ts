interface Documento{

    titulo : string;
    conteudo : string;

}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo:string, conteudo:string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string{
        return `Titulo: ${this.titulo}, Conteudo: ${this.conteudo}`;
    }
}


const meuTexto = new Texto("Meu Primeiro Documento", "Conteudo Documento");
console.log(meuTexto.exibir()); 
