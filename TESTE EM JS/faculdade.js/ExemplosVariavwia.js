//Exemplo de uso de var, let e const em JavaScript
const externo = "Sou uma constante global";
console.log(externo); // Acessível aqui

// declarção de uma variável com var
function exemploVar() {
    if (true) {
        var msg = "Sou uma variável var";
    }
    console.log(msg); // Acessível aqui    
}
//chamando' a função exemploVar
exemploVar();

//exemplo de erro e correção
var msg = "ola me chamo aline";
console.log(msg); // Corrigido: agora msg está definida

// declaração de uma variável com let
function exemploLet() {
    if (true) {
        let saudacao = "Sou uma variável let";
        console.log(saudacao); // Acessível aqui
    } 
}
//chamando a função exemploLet
exemploLet ();

//--------------------teste de looping com var e let--------------------//

//exemplo de erro e correção com let
const nome = ["aline", "bruna", "carla" , "daniela", "elaine", "allyson"]; // variavel
console.log(nome); // Corrigido: agora nome está definida

 for (var nomenovo = 0; nomenovo<6; nomenovo++){ // lopping
    console.log("o nome é " + nome[nomenovo]); //aqui e mostro a variavel + o looping
 }
console.log("o ultimo nome é " + nome[nomenovo-1]); // Corrigido: agora nomenovo está definida
console.log("primeiro nome é " + nome[0]); //mostro o primeiro nome da lista

//--------------------fim do teste--------------------//

let x = 5;
if (x > 3){
    console.log("maior que 3");
}