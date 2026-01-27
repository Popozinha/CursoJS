/*
Aqui vai um **resumo simples + exemplos práticos** dos métodos **`slice`**, **`trim`** e **`split`** em **JavaScript**, do jeito que costuma cair em aula e prova 👇

---

## 🔹 `slice()`

### 📌 O que faz:

Extrai **uma parte de uma string ou array** sem modificar o original.

### 🧠 Sintaxe:

```js
slice(inicio, fim)
```

* `inicio` → posição inicial (inclusa)
* `fim` → posição final (não inclusa)

### ✏️ Exemplo com string:

```js
let texto = "JavaScript";

let resultado = texto.slice(0, 4);
console.log(resultado); // "Java"
```

### ✏️ Exemplo com array:

```js
let numeros = [1, 2, 3, 4, 5];

let parte = numeros.slice(1, 4);
console.log(parte); // [2, 3, 4]
```

✅ O original **não é alterado**.

---

## 🔹 `trim()`

### 📌 O que faz:

Remove **espaços em branco do início e do fim** de uma string.

⚠️ Não remove espaços do meio.

### 🧠 Sintaxe:

```js
string.trim()
```

### ✏️ Exemplo:

```js
let nome = "   Aline Xavier   ";

let nomeLimpo = nome.trim();
console.log(nomeLimpo); // "Aline Xavier"
```

💡 Muito usado em formulários para evitar erros por espaço extra.

---

## 🔹 `split()`

### 📌 O que faz:

Divide uma **string em partes**, criando um **array**, usando um separador.

### 🧠 Sintaxe:

```js
string.split(separador)
```

### ✏️ Exemplo com espaço:

```js
let frase = "Aprender JavaScript é legal";

let palavras = frase.split(" ");
console.log(palavras);
// ["Aprender", "JavaScript", "é", "legal"]
```

### ✏️ Exemplo com vírgula:

```js
let nomes = "Ana,João,Carlos";

let lista = nomes.split(",");
console.log(lista);
// ["Ana", "João", "Carlos"]
```

---

## 📌 Resumo rápido

| Método    | Serve para                     |
| --------- | ------------------------------ |
| `slice()` | Pegar parte de string ou array |
| `trim()`  | Remover espaços extras         |
| `split()` | Transformar string em array    |

Se quiser, posso montar **exercícios resolvidos**, **comparação com substring** ou **exemplos de prova** 😉

*/
//------------------------------------------------------------------------//
// exemplo de uso do metodo slice()
//temos uma string com varias frutas

let frutas =  "maçã, banana , laranja , uva , abacaxi";
console.log("Tamanho da string frutas", frutas.length);

//queremos obter uma parte da string, por exepmlo, apenas  "banana , laranja"

// com o slice() eu quero só uma informação especifica, no caso mostrado a array

let partefrutas = frutas.slice(5,22)
console.log("resultado do slice():" , partefrutas);

// metodo trim() tira espaços

let frutacomespaço = "          caju           ";
let frutasemespaço = frutacomespaço.trim();
console.log("Resultado de trim():", frutasemespaço);

//metodo split()
// transforma uma string em array, separando pelos caracteres que eu quiser

let listadefruta =  "maçã,banana,laranja,uva,abacaxi"
let arraydefrutas = listadefruta.split(",");
console.log("Resultado do split(): ", arraydefrutas);

//------------------------------------------------------------------------//

//metodo substring()
// pega parte da string entre dois indices

let animal1 = "elefante";
let animal2 = "girafa";
let animal3 = "crocodilo";

// pega parte da string, 'elefante' , começando no indice 3 ate o indice 7
let parteanimal1 = animal1.substring(3,7);
console.log("Resultado do substring() ,", animal1, parteanimal1); //fante


//metodo replace()
// substitui parte da string por outra

let parteanimal2 = animal2.replace("ra","ro");
console.log("Resultado do replace() ,", animal2, parteanimal2); //girofa

//metodo concat()
// junta strings

let animaisjuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado do concat() ,", animaisjuntos); //elefante girafa crocodilo

//metodo toUpperCase()
// transforma em maiusculo



// metodo toLowerCase()
// transforma em minusculo

let nome= "Aline xavier"

let nomeminusculo = nome.toLowerCase();
console.log("Resultado do toLowerCase() ,", nomeminusculo); //aline xavier

let nomeMaiusculo = nome.toUpperCase();
console.log("Resultado do toUpperCase() ,", nomeMaiusculo); //ALINE XAVIER

//outra string com caracterers não alfabeticos

let stringsimbolos = "  Aline 244 ";

let minuscolosimbolo = stringsimbolos.toLowerCase();
console.log("Resultado do toLowerCase() com simbolos ,", minuscolosimbolo); //  aline 244

let maiuscolosimbolo = stringsimbolos.toUpperCase();
console.log("Resultado do toUpperCase() com simbolos ,", maiuscolosimbolo); //  ALINE 244


let nominho = 'maria'