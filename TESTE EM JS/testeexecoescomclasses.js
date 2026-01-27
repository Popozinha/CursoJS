//classe pra teste de classes com tratamento de exceções

//classe garrafa

class garrafa{
    constructor(litros,cor,material){
        this.litros = litros;
        this.cor = cor;
        this.material = material;
    }
    //método para descrever a garrafa
    descrever(){
        let descricao = `A garrafa de material ${this.material} que eu tenho é de cor ${this.cor} e tem aproximadamente ${this.litros} litros de capacidade.`;

        return descricao;
    }

    //descrever uma execução com tratamento de exceção
    descreverexecao(){
        try {
            this.validarDados(); //chama o método de validação de dados
            let descricao = `A garrafa de material ${this.material} que eu tenho é de cor ${this.cor} e tem aproximadamente ${this.litros} litros de capacidade.`;
            return descricao;
        } catch (error) {
            console.error("Erro ao descrever a garrafa:", error.message);
        }
        // assim se o usuario colocar um informação inconsistente o codigo exibira uma mensagem de erro
    }

}
const minhaGarrafa = new garrafa (2,"","plástico");
const minhaGarrafa2 = new garrafa (1.5,"azul","plastico cintético");

//manipulação do objeto e exibição da descrição com tratamento de exceção

console.log(minhaGarrafa.descrever());
console.log(minhaGarrafa2.descreverexecao());




console.log("--------------------------------------------------");

//classe caderno

class caderno{
    constructor(paginas,cor,tamanho){
        this.paginas = paginas;
        this.cor = cor;
        this.tamanho = tamanho;
    }

    //método para descrever o caderno
    descrever(){
        let descricao = `O caderno que eu uso tem ${this.paginas} páginas, é de cor ${this.cor} e tamanho ${this.tamanho}.`;
        return descricao;
    }
    descreverexecao(){
        try{
                let descricao = `O caderno que eu uso tem ${this.paginas} páginas, é de cor ${this.cor} e tamanho ${this.tamanho <=100?"pequeno":"grande"}.`;
                return descricao;
            }
        catch (error){
            console.error("Erro ao descrever o caderno:", error.message);
    }}
}    

const meuCaderno = new caderno (200,"Rosa com glitter","A3");
const meuCaderno2 = new caderno (80,"Preto","A4");

//manipulação do objeto e exibição da descrição
console.log(meuCaderno.descrever());
console.log(meuCaderno2.descreverexecao());