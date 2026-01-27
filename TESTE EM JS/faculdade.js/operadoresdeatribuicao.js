/*
Aqui vai um **resumo simples e direto dos operadores de atribuição em JavaScript** 👇

---

## 📌 Operador de atribuição básico

### `=`

Atribui um valor a uma variável.

```js
let x = 10;
```

---

## ➕➖ Operadores de atribuição com operação

Esses operadores **executam uma operação e atribuem o resultado** à variável.

### `+=` (adição)

```js
let x = 5;
x += 3; // x = x + 3 → 8
```

### `-=` (subtração)

```js
let x = 5;
x -= 2; // x = x - 2 → 3
```

### `*=` (multiplicação)

```js
let x = 4;
x *= 2; // x = x * 2 → 8
```

### `/=` (divisão)

```js
let x = 10;
x /= 2; // x = x / 2 → 5
```

### `%=` (resto da divisão)

```js
let x = 10;
x %= 3; // x = x % 3 → 1
```

---

## 🧮 Operadores de atribuição lógica

### `&&=`

Atribui o valor **somente se a variável for verdadeira**.

```js
let ativo = true;
ativo &&= false; // ativo = false
```

### `||=`

Atribui o valor **se a variável for falsa**.

```js
let nome = "";
nome ||= "Padrão"; // nome = "Padrão"
```

### `??=`

Atribui o valor **se a variável for null ou undefined**.

```js
let idade;
idade ??= 18; // idade = 18
```

---

## 📝 Resumo rápido

| Operador | Exemplo   | Equivale a                |    |   |      |                  |
| -------- | --------- | ------------------------- | -- | - | ---- | ---------------- |
| `=`      | `x = 5`   | Atribuição                |    |   |      |                  |
| `+=`     | `x += 2`  | `x = x + 2`               |    |   |      |                  |
| `-=`     | `x -= 1`  | `x = x - 1`               |    |   |      |                  |
| `*=`     | `x *= 3`  | `x = x * 3`               |    |   |      |                  |
| `/=`     | `x /= 2`  | `x = x / 2`               |    |   |      |                  |
| `%=`     | `x %= 2`  | `x = x % 2`               |    |   |      |                  |
| `&&=`    | `a &&= b` | se `a` for true           |    |   |      |                  |
| `        |           | =`                        | `a |   | = b` | se `a` for false |
| `??=`    | `a ??= b` | se `a` for null/undefined |    |   |      |                  |

---

Se quiser, posso **resumir ainda mais**, **transformar em comentário JS** ou **criar exercícios práticos** 💡

*/

// operador basico (=)

let a = 10;
console.log(`Valor inicial de a : ${a}`);

// operador basico (+=)
 
a += 5;
console.log(`Após a += 5, valor de a : ${a}`);

// operador basico (-=)

a-=3; // a = a - 3;
console.log(`Após a -= 3, valor de a : ${a}`);

// operador basico (*=)

a *= 2; 
console.log(`Após a *= 3, valor de a : ${a}`);

// operador basico (/=)

a/= 4;
console.log(`Após a /= 4, valor de a : ${a}`);

// operador basico (%=)

a%= 78;
console.log(`Após a %= 78, valor de a : ${a}`);

// operador basico (**=)

a**= 8;
console.log(`Após a **= 8, valor de a : ${a}`);

/////////////////////////////////////////////////////////////
let x = 8;

let y = 3;

let resultado = (x + y * 2) > (x % y) && x != y;

console.log(resultado);

//////////////////////////////////////////////////////////

let xW = 5; xW += 3;
console.log(xW)

let aa = 5; let b = 3; let result = (aa > b) && (b > 0); console.log(result);

let z = 10/0;
console.log(z)


