/*Claro! 😊
Vou explicar **TUDO sobre ARRAY em JavaScript**, de forma **bem completa**, **organizada**, **passo a passo** e com **muitos exemplos**, do básico ao avançado.

---

# 📌 O que é um Array?

Um **array** é uma **estrutura de dados** usada para **armazenar vários valores dentro de uma única variável**.

📌 Em vez de criar várias variáveis:

```js
let a = 10;
let b = 20;
let c = 30;
```

👉 Usamos um array:

```js
let numeros = [10, 20, 30];
```

---

# 📌 Características dos Arrays em JavaScript

✔️ Pode armazenar **qualquer tipo de dado**
✔️ Pode misturar tipos diferentes
✔️ Os elementos são acessados por **índice**
✔️ O índice começa em **0**
✔️ É um objeto especial (`typeof array === "object"`)

---

# 📌 Tipos de dados que um Array pode ter

## 🔹 1. Array de números

```js
let numeros = [1, 2, 3, 4, 5];
```

---

## 🔹 2. Array de strings

```js
let nomes = ["Ana", "João", "Maria"];
```

---

## 🔹 3. Array de booleanos

```js
let status = [true, false, true];
```

---

## 🔹 4. Array misto (tipos diferentes)

```js
let dados = ["Carlos", 25, true];
```

---

## 🔹 5. Array de arrays (matriz)

```js
let matriz = [
  [1, 2],
  [3, 4],
  [5, 6]
];
```

Acesso:

```js
console.log(matriz[1][0]); // 3
```

---

## 🔹 6. Array de objetos

```js
let pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 30 }
];
```

---

## 🔹 7. Array vazio

```js
let lista = [];
```

---

# 📌 Como acessar elementos do array

```js
let frutas = ["maçã", "banana", "uva"];

console.log(frutas[0]); // maçã
console.log(frutas[2]); // uva
```

---

# 📌 Tamanho do array – `length`

```js
console.log(frutas.length); // 3
```

📌 O índice máximo é sempre `length - 1`.

---

# 📌 Adicionando elementos ao array

### ➕ Final do array – `push()`

```js
frutas.push("laranja");
```

### ➕ Início do array – `unshift()`

```js
frutas.unshift("morango");
```

---

# 📌 Removendo elementos do array

### ➖ Final – `pop()`

```js
frutas.pop();
```

### ➖ Início – `shift()`

```js
frutas.shift();
```

---

# 📌 Métodos importantes de Array

## 🔹 `concat()` – juntar arrays

```js
let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
```

---

## 🔹 `slice()` – copiar parte do array

```js
let letras = ["a", "b", "c", "d"];

let copia = letras.slice(1, 3); // ["b", "c"]
```

---

## 🔹 `splice()` – remover/adicionar

```js
let cores = ["vermelho", "azul", "verde"];

cores.splice(1, 1); // remove "azul"
```

---

## 🔹 `map()` – transformar elementos

```js
let numeros = [1, 2, 3];

let dobrados = numeros.map(n => n * 2);
```

---

## 🔹 `filter()` – filtrar por condição

```js
let numeros = [1, 2, 3, 4];

let pares = numeros.filter(n => n % 2 === 0);
```

---

## 🔹 `reduce()` – reduzir a um valor

```js
let numeros = [1, 2, 3, 4];

let soma = numeros.reduce((total, n) => total + n, 0);
```

---

## 🔹 `forEach()` – percorrer

```js
frutas.forEach(fruta => {
  console.log(fruta);
});
```

---

# 📌 Percorrendo arrays

### 🔁 `for`

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

### 🔁 `for...of`

```js
for (let fruta of frutas) {
  console.log(fruta);
}
```

---

# 📌 Verificar se é um array

```js
Array.isArray(frutas); // true
```

---

# 📌 Arrays são mutáveis

```js
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
```

---

# 📌 Arrays x Objetos

| Array         | Objeto            |
| ------------- | ----------------- |
| Usa índices   | Usa chaves        |
| Ordem importa | Ordem não importa |
| `[ ]`         | `{ }`             |

---

# 📌 Erros comuns ❌

❌ Acessar índice inexistente
❌ Confundir `slice` com `splice`
❌ Alterar array sem querer com `splice`
❌ Esquecer que índice começa em 0

---

# 📌 Resumo final 📝

✔️ Arrays armazenam múltiplos valores
✔️ Aceitam qualquer tipo de dado
✔️ Índices começam em 0
✔️ Possuem muitos métodos úteis
✔️ São fundamentais em JavaScript

---

Se quiser, posso:

* Criar **exercícios resolvidos**
* Fazer **resumo para prova**
* Comparar **array x lista em outras linguagens**
* Explicar **arrays em JSON**
* Explicar **arrays + DOM**

É só dizer! 🚀  */
