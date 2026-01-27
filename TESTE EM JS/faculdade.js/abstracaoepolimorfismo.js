//classe base imovel
class imovel {
    constructor(endereco,tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho;
    }
    //metodo abstrato para descrever o imovel (deve ser implementado nas subclasses)
}
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

    //método para descrever a casa (implementação do método abstrato)
    descrever(){
        let descricao = `casa localizada em ${this.endereco}, mede aproximadamente ${this.tamanho} m². É de cor ${this.cor}, tem ${this.quartos} quartos e ${this.banheiro} banheiros. `;
        if (this.temgaragem){
            descricao += "Possui garagem.";
        }else{
            descricao += "Não possui garagem.";
        }
        return descricao;
    }
}  

class apartamento extends imovel {
    constructor(endereco,andar,temelevador){
        super(endereco);
        this.andar = andar;
        this.temelevador = temelevador;
    }

    descrever(){
        let descricao = `Apartamento localizado em ${this.endereco}, no ${this.andar}º andar. `;

        descricao += this.temelevador ? "O prédio possui elevador." : "O prédio não possui elevador.";

        return descricao;
    }

}

//função para descrever um imovel (polimorfismo)

function descreverImovel(imovel){
    console.log(imovel.descrever());
}

//criação de objetos (instancias das classes derivadas)
const minhaCasa = new casa("Rua das Flores, 123", 120, "amarela", 3, 2, true);
const meuApartamento = new apartamento("Avenida Central, 456", 5, true);

//manipulção dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);


metodo 