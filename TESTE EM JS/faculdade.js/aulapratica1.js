// Função Saudação
function saudacao(){
    console.log("Olá, mundo!");
}
saudacao();
console.log ("----")
saudacao()
console.log ("----")

// Função Saudação com nome
const nome = [" Ana" , " Bruno" , " Carla" ];

function novaSaudacao(nome){
    console.log("Óla"+ nome + "!")
}    
novaSaudacao(nome);

//Função Soma
function soma(a, b) {
    return a + b;
}
console.log("O resultado da soma é: " + soma(5, 10));
console.log("O resultado da soma é: " + soma(3, 15));
console.log("O resultado da soma é: " + soma(32, 4, 4));

console.log ("----")

// 1. Função Saudação
function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

// 2. Função Saudação com nome
function novaSaudacao(nome) {
    console.log("Olá, " + nome + "!");
}
novaSaudacao("Ana");
novaSaudacao("Bruno");
novaSaudacao("Carla");

// 3. Função soma
function soma(a, b) {
    return a + b;
}
console.log("Resultado da soma 5 + 10: " + soma(5, 10));
console.log("Resultado da soma 3 + 7: " + soma(3, 7));
console.log("Resultado da soma 20 + 15: " + soma(20, 15));
