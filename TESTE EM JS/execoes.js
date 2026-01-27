//classe base imovel
class imovel {
    constructor(endereco,tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho;
    }
    //metodo abstrato para descrever o imovel (deve ser implementado nas subclasses)

    descrever(){
        //criando um tratamento para exceção
        throw new Error("O método descrever() deve ser implementado nas subclasses.");
    }

    //metodo para validação de dados (encapsulamento de exceção)
    validarDados(){
        if (!this.endereco || this.tamanho <= 0){
            throw new Error("Dados inválidos para o imóvel.");
        }
}}
//classes derivada "casa' que herda da classe "imovel"
class casa extends imovel {
    constructor (endereco,tamanho, cor, quartos, banheiro, temgaragem){ 
        //o SUPER chama o construtor da classe base que no caso e a classe imovel
        super(endereco,tamanho);
        this.cor = cor;
        this.quartos = quartos;
        this.banheiro = banheiro;
        this.temgaragem = temgaragem;
    }    
/*
    //método para descrever a casa (implementação do método abstrato)
    descrever(){
        let descricao = `casa localizada em ${this.endereco}, mede aproximadamente ${this.tamanho} m². É de cor ${this.cor}, tem ${this.quartos} quartos e ${this.banheiro} banheiros. `;
        if (this.temgaragem){
            descricao += "Possui garagem.";
        }else{
            descricao += "Não possui garagem.";
        }
        return descricao;
    }*/

        //reescrevendo o método descrever com tratamento de exceção
    descrever(){
        try {
            this.validarDados(); //chama o método de validação de dados
            let descricao = `casa localizada em ${this.endereco}, mede aproximadamente ${this.tamanho} m². É de cor ${this.cor}, tem ${this.quartos} quartos e ${this.banheiro} banheiros. `;

            descricao += this.temgaragem ? "Possui garagem." : "Não possui garagem.";

            return descricao;
        } catch (error) {
            return `Erro ao descrever o imóvel: ${error.message}`;
        }
}}  

class apartamento extends imovel {
    constructor(endereco,andar,temelevador){
        super(endereco);
        this.andar = andar;
        this.temelevador = temelevador;
    }
/*
    descrever(){
        let descricao = `Apartamento localizado em ${this.endereco}, no ${this.andar}º andar. `;

        descricao += this.temelevador ? "O prédio possui elevador." : "O prédio não possui elevador.";

        return descricao;
    }*/

        //reescrevendo o método descrever com tratamento de exceção
    descrever(){
        try {
            this.validarDados(); //chama o método de validação de dados
            let descricao = `Apartamento localizado em ${this.endereco}, no ${this.andar}º andar. `;

            descricao += this.temelevador ? "O prédio possui elevador." : "O prédio não possui elevador.";

            return descricao;
        } catch (error) {
            return `Erro ao descrever o imóvel: ${error.message}`;
        }
}}

//função para descrever um imovel (polimorfismo)
/*
function descreverImovel(imovel){
    console.log(imovel.descrever());
  
}  */

//função para descrever um imovel (polimorfismo) com tratamento de exceção

function descreverImovel(imovel){
    try {
    console.log(imovel.descrever());
    }catch (error){
       console.log(error.message);
    }
}


//criação de objetos (instancias das classes derivadas)
const minhaCasa = new casa("Rua das Flores, 123", 120, "amarela", 3, 2, true);
const meuApartamento = new apartamento("Avenida Central, 456", 5, true);

//criando um imovel com dados inválidos para testar o tratamento de exceção
const casainvalida = new apartamento("", -50, "vermelha", 2, 1, false);

//manipulção dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);
descreverImovel(casainvalida);



/*
Claro 😄 resumo **bem simples**:

### 📌 O que é exceção em JavaScript?

**Exceção** é um **erro que acontece enquanto o programa está rodando** e que pode **quebrar o código** se não for tratado.

👉 Exemplo de erro:

* Dividir por algo inválido
* Acessar uma variável que não existe
* Erro em uma função

---

### 🛠️ Como o JS lida com exceções?

Usando **`try`, `catch` e `finally`**

```js
try {
  let resultado = 10 / x; // x não existe
} catch (erro) {
  console.log("Ocorreu um erro");
}
```

✔️ O programa **não trava**
✔️ O erro é capturado no `catch`

---

### 🔹 Para que serve exceção?

* Evitar que o programa quebre
* Tratar erros de forma controlada
* Mostrar mensagens amigáveis ao usuário

---

### 🧠 Em uma frase:

> **Exceção é um erro que acontece durante a execução do código e pode ser tratado para evitar que o programa pare.**

Se quiser, te explico com exemplos do dia a dia ou comparo com Java 😉

*/