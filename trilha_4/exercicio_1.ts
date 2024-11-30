interface Produto{
    id : number;
    nome: string;
    preco :number;
}


class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;
  
    
    constructor(id: number, nome: string, preco: number) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
    }
  }
  

  const item = new ItemLoja(1, "Teclado Mecânico", 299.99);
  const item2 = new ItemLoja(2,"Mouse",180.99);
  console.log(item);
  console.log(item2);