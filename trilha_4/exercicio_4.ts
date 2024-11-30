interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca implements Livro {
    obterLivrosDisponiveisOrdenados(): any {
        throw new Error("Method not implemented.");
    }
    buscarPorAutor(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    filtrarPorGenero(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    titulo: string;
    autor: string;
    disponivel: boolean;
    livros: Livro[];

    constructor(titulo: string, autor: string, disponivel: boolean, livros: Livro[]) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
      }
}

const livro1 = new Biblioteca("caba safado", "filho do caba safado", true, []);
const livro2 = new Biblioteca("sobrinho do caba", "namorada dele", false, []);
const livro3 = new Biblioteca("Final do caba safado", "Bisneto do caba", true, []);

const biblioteca = new Biblioteca("Biblioteca Principal", "Vários autores", true, [livro1, livro2, livro3]);
console.log(biblioteca.buscarLivrosDisponiveis());