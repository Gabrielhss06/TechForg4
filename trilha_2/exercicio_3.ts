// Atividade 3 ----------
class Produto{
    private produto: string;
    private preco: number;
    private quantidade: number;

    constructor(pruduto: string, preco: number, quantidade: number){
        this.produto = pruduto;
        this.preco = preco;
        this.quantidade = quantidade
    }

    valorEstoque(): void{
        const vl = this.preco * this.quantidade 
        console.log(`O valor total do estoque é: ${vl} `)
    }
}

const produto1 = new Produto ("Arroz", 20, 10)
produto1.valorEstoque()