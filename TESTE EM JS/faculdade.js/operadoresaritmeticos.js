/*function calculadora(num1, num2){
let calculadora = (2,9);

//operação aritimetica basica
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

}   

// incremento e decremento

// incrementar num1
let incrementar = num1;
incrementar++;

// incrementar num2
let decrementar = num2;
decrementar--;

// exibindo resltados no console
console.log(`adição (${num1} + ${num2}) = ${adicao}`);
console.log(`subtracao (${num1} - ${num2}) = ${subtracao}`);
console.log(`multiplicacao (${num1} * ${num2}) = ${multiplicacao}`);
console.log(`divisao (${num1} / ${num2}) = ${divisao}`);
console.log(`modulo (${num1} % ${num2}) = ${modulo}`);
console.log(`exponencial (${num1} ** ${num2}) = ${exponencial}`);
console.log(`incrementar (${num1} ++ ${num2}) = ${incrementar}`);
console.log(`decrementar (${num1} -- ${num2}) = ${decrementar}`);


calculadora(2,6);
*/

//exemplos de operadores logicos em JS

// operador logico &&
console.log("--------------------------")

const a = true;
const b = false;

const resultado1 = a && b; // false
const resultado2 = a && true // true


console.log(`true && false: ${resultado1}`); // saida :false
console.log(`true && true: ${resultado2}`); // saida :true

console.log("--------------------------")
// operador logico (||)

const resultadoOU1 = a || b; //true
const resultadoOU2 = a || false; //false

console.log(`true || false: ${resultadoOU1}`); //saida: true
console.log(`true || true: ${resultadoOU2}`);//saida: false

console.log("--------------------------")

//Operador logico (!)
const resultadonao1 = !a;
const resultadonao2 = !b;

//não true: falso
console.log(`!true: ${resultadonao1}`); //saida: false
//nao false: true
console.log(`!true: ${resultadonao2}`); //saida: true

console.log("--------------------------")

//combinações de operdores logicos

const resltadocomb1 = (a||b)&& !b;
const resltadocomb2 = (a||b)&& !a;

console.log(`(true || false) && !false: ${resltadocomb1}`); // saida : true
console.log(`(!true || false) || true: ${resltadocomb2}`); // saida : true