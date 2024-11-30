interface ProdutoLoja {
    codigo : number;
    nome : string;

}

class Loja {
    private produtos : ProdutoLoja[];

    constructor() { 
        this.produtos = [];
    }


    adicionarProduto(produto: ProdutoLoja): void{
        this.produtos.push(produto)
    }

    BuscarProduto(codigo: number): ProdutoLoja | undefined { 
        return this.produtos.find(produto => produto.codigo === codigo);
    }
    
}


const loja1 = new Loja();

loja1.adicionarProduto({codigo: 1, nome: "Celular"});
loja1.adicionarProduto({codigo: 2, nome: "Notebook"})
loja1.adicionarProduto({codigo: 3, nome: "Tablet"})

const BuscarProduto = loja1.BuscarProduto(1);


if (BuscarProduto) {
  console.log(`Produto encontrado: ${BuscarProduto.nome}`);
} else {
  console.log("Produto não encontrado.");
}