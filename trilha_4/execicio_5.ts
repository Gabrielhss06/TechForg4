interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;}
class BibliotecaGestao  {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;

    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]){
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livros => livros.genero.toLowerCase() === genero.toLowerCase());
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livros => livros.autor.toLowerCase() === autor.toLowerCase());
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livros => livros.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const livros: LivroBiblioteca[] = [
    { titulo: "era uma vez", autor: "Lal da Silva", genero: "Terror", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "Jhon Henrique", genero: "Fantasia", disponivel: false },
    { titulo: "Pai que foi comprar cigarro", autor: "O filho do pai", genero: "Comedia", disponivel: true }
  ];
  
  
  const biblioteca1 = new BibliotecaGestao(livros);
  
  console.log("Livros do gênero Terror:");
  console.log(biblioteca.filtrarPorGenero("Terror"));
  
  console.log("\nLivros do autor 'O filho do pai':");
  console.log(biblioteca.buscarPorAutor("O filho do pai"));
  
  console.log("\nLivros disponíveis ordenados por título:");
  console.log(biblioteca.obterLivrosDisponiveisOrdenados());