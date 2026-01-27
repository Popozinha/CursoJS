// atividades do curso de JavaScript pelo chatgpt


//somar

/* somando dois valores ou mais eu uso a função com a popriedade de (somar)
depois chamo a função com os valores que quero somar o return é para retornar o valor da soma que no caso é a + b retornando meu  valor somado eu jogo um console.log para mostrar o resultado na tela*/

//-----------------------------------------------------------------------------//

function somar(a, b){
    return a + b;
}
console.log("somando os valores 7 e 9 :" + somar(7,9));
console.log("somando os valores 15 e 25 :" + somar(15,25));


//executando minha funcção somar e retornando o valor somado mais  posso colocar quantos conlog.log eu quiser
console.log("somando os valores 10 e 20: " + (somar(10,20)));
console.log("somando os valores 30 e 40 - 15: " + (somar(30,40) - 15));

//somar tres valores
//função para somar três valores no caso c, f e o depois chamo a função com os valores que quero somar e o return é para retornar o valor da soma dos três valores.
function soma (c , f , o){
    return c + f + o;
}
console.log("somando os valores (7 , 9 e 10) + 20: " + (soma(7,9,10) + 20));

console.log("");

//-----------------------------------------------------------------------------//


//funcion de subitração
/*função para subtrair dois valores no caso d e e depois chamo a função com os valores que quero subtrair e o return é para retornar o valor da subtração dos dois valores. então seria d menos e*/
function subitração (a,o){
    return a-o;
}
console.log("subitraindo os valores 20 e 5: " + subitração(20,5));
console.log("subitraindo os valores 50 e 15: " + subitração(50,15));        
console.log("");

//-----------------------------------------------------------------------------//


//qual é o maior
//função para descobrir qual é o maior valor entre dois números nesse caso x e y, depois chamo a função com os valores que quero comparar e o return é para retornar o maior valor entre os dois. então seria se o x for maior que y retorna x, senão retorna y.

function maior(x, y){
    if (x>y){
        return x;
    } else{
         return y;
}}
console.log("maior dos valores 10 e 5: " + maior(10, 5));
console.log("maior dos valores 3 e 8: " +  maior(3, 8));

//posos colocar mais conlog.log para testar mais valores, tudo depende da minha neceessidade
console.log("maior dos valores 15 e 20: " + maior(15, 20));
console.log("maior dos valores 100 e 50: " + maior(100, 50));


//segunda forma de fazer a mesma função acima

let idade =27;
let idade2 =22;

let maioridade = idade >=18;
let maioridade2 = idade >=18;

//void = é uma função que não retorna valor

//consigo usar o function par reutilizar o código sem precisar ficar repetindo a mesma coisa várias vezes. por exemplo eu quero verificar se uma pessoa é maior de idade ou menor de idade, então eu crio uma função que faz essa verificação e depois chamo essa função com os valores que quero verificar. colocando em pratica:

function verificarMaioridade(idade){ 
    return idade >=18;
}//parametro é (idade)

//--------------------------------------------------------------------//
//var é uma variável global que pode ser acessada de qualquer lugar do código
//let é uma variável local que só pode ser acessada dentro do bloco onde foi declarada

// se eu colocar meu console fora do {} da função ele não vai reconhecer por estar fora do escopo da função. porem no var ele reconhece por ser uma variável global


// VAR: respeita escopoglobal e de função
// LET: respeita escopo global, de função e de bloco
// CONST: respeita escopo global, de função e de bloco (imutável)
//BLOCO: é tudo que está entre {......}