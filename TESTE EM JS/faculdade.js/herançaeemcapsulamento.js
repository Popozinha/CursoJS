// definição da classe "casa"

class casa{

    // construtor define as propriedades da classe
    constructor (cor, quartos, banheiro, temgaragem){
        this._cor = cor;
        this._quartos = quartos;
        this._banheiro = banheiro;
        this._temgaragem = temgaragem;
    }

    // Métodos getters e setters para encapsulamento
    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get quartos() {
        return this._quartos;
    }

    set quartos(novoQuartos) {
        this._quartos = novoQuartos;
    }

    get banheiro() {
        return this._banheiro;
    }

    set banheiro(novoBanheiro) {
        this._banheiro = novoBanheiro;
    }

    get temgaragem() {
        return this._temgaragem;
    }

    set temgaragem(novoTemGaragem) {
        this._temgaragem = novoTemGaragem;
    }

    // método para descrever a casa
    descreverCasa(){
        let descricao = `Esta casa é de cor ${this._cor}, tem ${this._quartos} quartos grandes e espaçosos, ${this._banheiro}, banheiros modernos e limpos. `;
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

    //classe derivada "casaconcluida" que herda de "obra"

    class casaconcluida extends obra {
        constructor(cor, quartos, banheiro, temgaragem, piscina,){ 
            //o SUPER chama o construtor da classe base que no caso e a classe obra
            super(cor, quartos, banheiro, temgaragem);

            //propriedades adicionais da classe derivada que no caso e casaconcluida
            this._piscinapiscina = piscina;
        }
        // getters e setters para as novas propriedades adicionadas (piscina, jardim, varanda)

        get piscina() { 
            return this._piscinapiscina;
        }
        set piscina(novaPiscina) {
            this._piscina = novaPiscina;
    }

    //sobrescrita do método descreverobra para incluir informações adicionais (piscina)
    descreverobra(){
        let descricaoObra = super.descreverobra(); //chama o método da classe base
        descricaoObra += ` Além disso, esta casa vai ter uma piscina? ${this._piscina ? 'Sim' : 'Não'}.`;
        return descricaoObra;
    }
}
//criação de objetos (instncias da classe casa)

const minhacasinha = new casa("rosa", 5,2, true); 
const casadomeuamigo = new casa("azul", 3,1, false);
const casaemobra = new obra("tijolo", 2,1, false)
const casaconcluida1 = new casaconcluida("branca", 4,3, true, true);

//manipulação dos objetos e exibição das descrições

console.log(minhacasinha.descreverCasa());
console.log("-------------------");
console.log(casadomeuamigo.descreverCasa());
console.log("-------------------");
console.log(casaemobra.descreverobra());
console.log("-------------------");
console.log(casaconcluida1.descreverobra());
