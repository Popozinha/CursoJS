
//--------------------------let-------------------------------//
  
let nome = "Aline Xavier";
console.log("Olá, " + nome + "! Seja bem-vinda à aula de JavaScript.");

let idade = 28;
console.log("voce tem " + idade + " anos de idade");

let maiorDeIdade = idade>=18;
console.log("É maior de idade? " + maiorDeIdade);

//null só para variáveis que não possuem valor, por exemplo: *string*

let endereco = null;
console.log("endereço: " , endereco);

//undefined para variáveis que ainda não foram definidas


//--------------------------constantes-------------------------------//

const pi = 3.14;
console.log("Valor de pi: " + pi);
//pi = 3.1415; //vai dar erro, pois constante não pode ser alterada

let altura = 1.70;
console.log("Altura: " + altura + " metros");
altura = 1.96; //variável pode ser alterada
console.log("Altura atualizada: " + altura + " metros");

//--------------------------var + for(loop)-------------------------------//


for (var a = 0; a < 4; a++){
    console.log("valor de a :" + a);
}
console.log("valor final de a :" + a); //var tem escopo global ou de função

for (var n = 0; n < 3; n++){
    console.log("valor de n : " + n);
}
console.log("valor final de n : " + n); //var tem escopo global ou de função

//--------------------------count-------------------------------//
var count = 0;

    for (var numero = 0; numero < 6; numero++){
        count = count + numero+1;
        console.log("Valor de numero dentro do loop: " + numero);
}
console.log("Valor inicial de count: " + numero);

//--------------------------teste-------------------------------//

var teste = 20;

if (teste <=18) {
    console.log("menor de idade");
}else{
    console.log("maior de idade");
}
console.log("meu cliente tem : " + teste+ " anos portanto ele é " + (teste <=18 ? "menor de idade" : "maior de idade"));

var cliente2 = 16;

if (cliente2 <=18) {
    console.log("menor de idade");
}else{
     console.log("maior  de idade");
   
}console.log("meu segundo cliente tem : "+ cliente2 + " anos portanto ele é " + (cliente2 <=18? "menor de idade" : "maior de idade!"));

// esse teste das idades pode ser compriendido como o meu cliente tem a idade equisitada que no caso é maior que 18, confere isso com o ? ele vai resolver se é verdadeiro ou falso, se for verdadeiro ele vai retornar a primeira parte "menor de idade" se for falso ele vai retornar a segunda parte "maior de idade" com o : os dois pontos ele vai ser meio que o : senão do if. 


// isso conclue que não precisamos usar o if else para fazer esse tipo de verificação, podemos usar o operador ternário que é mais simples e prático, como no exemplo abaixo. (:)

var Ana = 12;
console.log("Ana tem " + Ana + " anos de idade e ela é " + (Ana<=18? "menor de idade" : "maior de idade"));


var Bruno = 10;
console.log("Bruno tem " + Bruno + " anos de idade e ele é " + (Bruno<=18? "menor de idade" : "maior de idade"));

// for usando string
var chamada = ["João", "Maria", "Pedro", "Ana"];
console.log("Lista de chamada: " + chamada);

for (var aluno = 0; aluno <chamada.length; aluno++){
    console.log("Aluno(a) numero " + (aluno + 1 ) + " : " + chamada[aluno]);
}

var idadedosalunos = ["21", "18", "32", "17"];
for (var iddaluno = 0; iddaluno < idadedosalunos.length; iddaluno++){
    console.log("O aluno " + chamada[iddaluno] + " tem " + idadedosalunos[iddaluno] + " anos e ele(a) é " + (idadedosalunos[iddaluno]<=18? "menor de idade" : "maior de idade"));
}