// definição da classe "casa"

class casa{

    // construtor define as propriedades da classe
    constructor (cor, quartos, banheiro, temgaragem){
        this.cor = cor;
        this.quartos = quartos;
        this.banheiro = banheiro;
        this.temgaragem = temgaragem;
    }


    // método para descrever a casa
    descreverCasa(){
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.quartos} quartos grandes e espaçosos, ${this.banheiro}, banheiros modernos e limpos. `;
        if (this.temgaragem){
            descricao += "com garagem localizada na parte lateral da casa.";
        }else{
            descricao += "sem garagem.";
        } 
        
    return descricao;

}}
    class obra{

        
    // construtor define as propriedades da classe
    constructor (cor, quartos, banheiro, temgaragem){
        this.cor = cor;
        this.quartos = quartos;
        this.banheiro = banheiro;
        this.temgaragem = temgaragem;
    }

    descreverobra(){
        let obra= `Esta casa esta em obra, ela terá otimos ${this.quartos} quartos com apenas ${this.banheiro}banheiros. A cor ainda não foi definida. e a garagem ${this.temgaragem} esta em analise dos especialistas.`;
         if (this.temgaragem){
            obra += "com garagem localizada na parte lateral da casa.";
        }else{
            obra += "sem garagem.";
        } 
           return obra;
    }
    }
//criação de objetos (instncias da classe casa)

const minhacasinha = new casa("rosa", 5,2, true);
const casadomeuamigo = new casa("azul", 3,1, false);
const casaemobra = new obra("tijolo", 2,1, false)

//manipulação dos objetos e exibição das descrições

console.log(minhacasinha.descreverCasa());
console.log(casadomeuamigo.descreverCasa());
console.log(casaemobra.descreverobra());
