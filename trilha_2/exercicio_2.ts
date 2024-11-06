// Atividade 2 ---------
class Livro{
    private titulo: string;
    private autor: string;
    private pagina: number;
    private lido?: boolean;

    constructor(titulo: string, autor: string, pagina: number, lido: boolean = false){
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = pagina;
        this.lido = lido;
    }

    maecarcomoLido(){
        this.lido = true
        console.log(`O livro ${this.titulo} foi marcado como lido`)
    }
    jali(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.pagina}, Lido: ${this.lido ? "Sim" : "Nao"}`)
    }


}
const livro1 = new Livro("Pica-Pau", "Jao", 100)
livro1.jali()
livro1.maecarcomoLido()
livro1.jali()