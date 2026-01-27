class feira {
    constructor(nome,peso,preco, cor){
        this.nome= nome;
        this.peso= peso;
        this.preco= preco;
        this.cor= cor;
    }
    frut(){
        let feiracomida = `As frutas que comprei hoje foram: ${this.nome}, com o peso de ${this.peso}kg, na cor ${this.cor}, e o preço total foi de R$${this.preco}.`

        if (this.preco <15){
            feiracomida += `que barato, vou levar mais!`
        }else if (this.preco <=25){
            feiracomida += `fora do orçamento!`
        }else {
            feiracomida += `levo nem a pal!`
    }
        return feiracomida;
}}

class boletos{
    constructor(nome, valor, vencimento){
        this.nome= nome;
        this.valor= valor;
        this.vencimento= vencimento;
    }

    pag(){
        let pagamento = `O boleto de ${this.nome}, no valor de R$${this.valor}, com vencimento em ${this.vencimento}`;

        if (this.valor > 100){
            pagamento += ` Atenção, o valor é alto, verifique seu saldo bancário!`
        }else{
            pagamento += ` Valor dentro do orçamento mensal.`
        }
        return pagamento;
    }
}


const fruta1 = new feira ("Banana", 2, 10, "amarela");
const fruta2 = new feira ("Manga", 1.5, 25, "laranja");
const fruta3 = new feira ("Abacaxi", 3, 35, "verde");
const boleto1 = new boletos ("Luz", 150, "10/07/2024");

console.log(boleto1.pag());

console.log(fruta1.frut());
console.log(fruta2.frut());
console.log(fruta3.frut());