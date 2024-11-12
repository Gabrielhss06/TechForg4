class Pagamento {
    processar(): void {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    processar(): void {
        console.log("Validando número do cartão e processando pagamento com cartão");
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        console.log("Gerando código de boleto para pagamento");
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => pagamento.processar());
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao(),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);