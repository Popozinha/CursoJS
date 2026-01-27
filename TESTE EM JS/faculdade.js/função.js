//testendo função

var idades_dos_alunos = [18, 20, 22, 19, 21, 23, 20, 22, 24, 19, 21, 20, 18, 22, 23, 21, 20, 19, 22, 24, 23, 21, 20, 19, 22, 23, 24, 18, 20, 21, 22];

function soma(idades_dos_alunos) {
    return idades_dos_alunos.reduce(function(total, idade) {
        return total + idade;
    }, 0);
}
console.log("A soma das idades dos alunos é: " + soma(idades_dos_alunos));

function media(idades_dos_alunos) {
    return soma(idades_dos_alunos) / idades_dos_alunos.length;
}
console.log("A média das idades dos alunos é: " + media(idades_dos_alunos).toFixed(2));


//-------------------------função regular-------------------//
console.log("------------------");
function subtrair(a, b) {
    return a - b;
}
console.log("A subtração de 10 - 5 é: " + subtrair(10, 5));

console.log("------------------");
//função de saudaçao eu não retorno nada. eu mando uma mensagem no console
function saudacao() {
    console.log("Olá, seja bem-vindo(a)!");
}
saudacao(); //chamando a função saudação

console.log("------------------");

//-------------------------funções anonimas--------------------//

let somarparametros = function(a, b) { // juntei na mesma linha o let e a function

//declrei um console pra mostrar que meu (a) é o parametro 1 e (b) é o parametro 2
    console.log("Paremetro 1: " + a);
    console.log("Paremetro 2: " + b);
//crio uma variavel resultado que soma os dois parametros, mostrando logo em seguida um cosnole com o resultado e retornando o resultado    
    let resultado = a + b;
    console.log("resultado : " + resultado);
    return resultado;
}
//fora do bloco da função, chamo a função somarparametros com dois valores e mostro o resultado em um console

let resultado = somarparametros(7, 3);
console.log("resltado da chamada da função: " + resultado); 

console.log("------------------");

//desfinindo uma função que recebe outra função como argumento

function executarfuncao(funcao,valor1, valor2){
    console.log("Executando a função passada como argumento:");
    return funcao(valor1, valor2);
}
let resultado2 = executarfuncao(somarparametros, 15, 25);
console.log("Resultado da função executada: " + resultado2);

console.log("------------------");

//definindo e chamando uma função anônima imediatamente invocada (IIFE)'

let resultadoimwediato = (function(a,m){
    console.log("função de chamada imediata:");
    return a * m;
})(9,3);
console.log("Resultado da função anônima chamada imediatamente: " + resultadoimwediato);

console.log("------------------");

let dividir = function(a, b) {
    return a / b;
};
let resultado3 = dividir(20, 4);
console.log("A divisão de 20 por 4 é: " + resultado3);

console.log("------------------");

//-------------------------função arrow--------------------//

//a unica diferença visivel é a senha de "=>" entre os parametros e o corpo da função
let somarArrow = (a, b) => {
    return a + b;
};
console.log("A soma usando função arrow de 8 + 12 é: " + somarArrow(8, 12));

console.log("------------------");

 let dobrar = n => n * 2; //quando tem apenas um parametro, não precisa dos parenteses
 console.log("O dobro de 7 é: " + dobrar(7));

console.log("------------------");


let saudacaoArrow = () => console.log("Olá do arrow function!"); //sem parametros, apenas os parenteses vazios
saudacaoArrow();

console.log("------------------");

let saudacao5 = (nome,idade ) => {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`; //template string
    return mensagem;
}
console.log(saudacao5("Aline", 21));

console.log("------------------");

