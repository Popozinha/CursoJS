//oque é JSON?
//JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de analisar e gerar para máquinas. Ele é amplamente utilizado para transmitir dados entre um servidor e uma aplicação web como texto simples.

/*
Claro! 😊 Vamos explicar **JSON em JavaScript** de forma **bem detalhada**, com **exemplos simples** e **passo a passo**, desde o básico até o uso prático no dia a dia.

---

## 🔹 O que é JSON?

**JSON** significa **JavaScript Object Notation** (Notação de Objetos JavaScript).

👉 É um **formato de texto** usado para **armazenar e trocar dados** entre sistemas (por exemplo: frontend ↔ backend).

📌 Apesar do nome, **JSON não é JavaScript**, mas funciona muito bem com ele.

---

## 🔹 Para que o JSON é usado?

* Enviar dados para uma API
* Receber dados de um servidor
* Salvar configurações
* Armazenar dados no navegador (LocalStorage)
* Comunicação entre sistemas diferentes

---

## 🔹 Estrutura básica do JSON

Um JSON é composto por **pares de chave e valor**.

### Exemplo simples:

```json
{
  "nome": "Aline",
  "idade": 20
}
```

### Regras importantes do JSON ⚠️

✔️ As **chaves sempre usam aspas duplas**
✔️ Os valores podem ser:

* String
* Número
* Boolean (`true` / `false`)
* Array
* Objeto
* `null`

❌ JSON **não aceita**:

* Comentários
* Aspas simples
* Funções

---

## 🔹 Tipos de valores em JSON

### 🔸 String

```json
"nome": "Carlos"
```

### 🔸 Número

```json
"idade": 25
```

### 🔸 Boolean

```json
"ativo": true
```

### 🔸 Null

```json
"telefone": null
```

### 🔸 Array

```json
"hobbies": ["jogar", "estudar", "programar"]
```

### 🔸 Objeto

```json
"endereco": {
  "cidade": "São Paulo",
  "estado": "SP"
}
```

---

## 🔹 JSON x Objeto JavaScript

⚠️ Eles são parecidos, mas **não são iguais**.

### Objeto JavaScript:

```js
const pessoa = {
  nome: "Aline",
  idade: 20
};
```

### JSON:

```json
{
  "nome": "Aline",
  "idade": 20
}
```

📌 Diferenças principais:

* JSON usa **aspas duplas obrigatórias**
* JSON é **texto**
* Objeto JS é uma **estrutura da linguagem**

---

## 🔹 Convertendo JSON ↔ JavaScript

Aqui entram dois métodos muito importantes:

---

## 🔹 `JSON.stringify()`

👉 Converte um **objeto JavaScript em JSON**

### Passo a passo:

```js
const pessoa = {
  nome: "Aline",
  idade: 20
};

const pessoaJSON = JSON.stringify(pessoa);

console.log(pessoaJSON);
```

### Resultado:

```json
{"nome":"Aline","idade":20}
```

📌 Agora isso é um **texto JSON**, pronto para ser enviado para uma API.

---

## 🔹 `JSON.parse()`

👉 Converte um **JSON em objeto JavaScript**

### Passo a passo:

```js
const json = '{"nome":"Aline","idade":20}';

const objeto = JSON.parse(json);

console.log(objeto.nome);
```

### Resultado:

```
Aline
```

📌 Agora você pode acessar os dados normalmente no JavaScript.

---

## 🔹 Exemplo completo (ida e volta)

### 1️⃣ Criar objeto JS

```js
const aluno = {
  nome: "João",
  notas: [8, 9, 7],
  aprovado: true
};
```

### 2️⃣ Converter para JSON

```js
const alunoJSON = JSON.stringify(aluno);
```

### 3️⃣ Enviar / salvar / armazenar

```js
console.log(alunoJSON);
```

### 4️⃣ Converter de volta para objeto

```js
const alunoObjeto = JSON.parse(alunoJSON);
```

### 5️⃣ Usar os dados

```js
console.log(alunoObjeto.notas[1]); // 9
```

---

## 🔹 JSON com arrays de objetos (muito comum!)

```json
[
  {
    "id": 1,
    "produto": "Teclado",
    "preco": 100
  },
  {
    "id": 2,
    "produto": "Mouse",
    "preco": 50
  }
]
```

### Usando no JavaScript:

```js
const produtos = JSON.parse(jsonProdutos);

produtos.forEach(produto => {
  console.log(produto.produto + " - R$ " + produto.preco);
});
```

---

## 🔹 JSON em APIs (exemplo real)

### Recebendo dados de uma API:

```js
fetch("https://api.exemplo.com/usuarios")
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados);
  });
```

📌 A API envia JSON → o JavaScript converte automaticamente para objeto.

---

## 🔹 Erros comuns com JSON ❌

❌ Usar aspas simples
❌ Esquecer vírgula
❌ Tentar colocar função
❌ JSON mal formatado

### Exemplo errado:

```json
{
  nome: "Aline"
}
```

### Correto:

```json
{
  "nome": "Aline"
}
```

---

## 🔹 Resumo rápido 📝

✔️ JSON é um formato de texto para troca de dados
✔️ Muito usado em APIs
✔️ `JSON.stringify()` → objeto ➜ JSON
✔️ `JSON.parse()` → JSON ➜ objeto
✔️ Estrutura simples, leve e universal

---

Se quiser, posso:

* montar **exercícios resolvidos**
* explicar **JSON + fetch**
* mostrar **JSON com LocalStorage**
* criar **resumo para prova**

É só dizer! 🚀

*/


//Exemplo de um objeto JSON:

let pessoa = {
    "nome": "João",
    "idade": 30,
    "cidade": "São Paulo",
    "email": "joao@email.com",
    "interesses": ["futebol", "música", "viagens"],
    "telefone": ["(11) 99999-9999", "(11) 88888-8888"],
    "casado": false,
};  

console.log(pessoa);

//acessar dados
console.log(pessoa.nome); // João
console.log(pessoa.idade); // 30
console.log(pessoa.interesses[1]); // música        
console.log(pessoa.telefone[0]); // (11) 99999-9999
console.log(pessoa.telefone[1]); // (11) 88888-8888

//adicionar dados
console.log("\nadicionar dados:\n");


pessoa.profissao = "Desenvolvedor";
console.log(pessoa.profissao); // Desenvolvedor
console.log(pessoa);

//modificar dados
console.log("\nmodificar dados:\"\n");


pessoa.idade = 31;
console.log(pessoa.idade); // 31
console.log(pessoa);

//remover dados
console.log("\nremover dados:\n");


delete pessoa.email;
console.log(pessoa);

//operaçoes com array de interesses
console.log("\noperações com array de interesses:\n");

pessoa.interesses.push("cinema");
console.log(pessoa.interesses); // ["futebol", "música", "viagens", "cinema"]
pessoa.interesses.push("leitura");
console.log(pessoa.interesses);

//iterrar sobre a propriedade do objeto
console.log("\niterar sobre a propriedade do objeto:\n");

//for...in não é recomendado para arrays se a ordem dos elementos for importante, po a ordem dos elementos não é garantida.
for (let chave in pessoa)
    console.log(chave + ": " + pessoa[chave]);   
console.log(chave + ": " + pessoa[chave]); // undefined

//converter de ojbeto JavaScript para JSON e vice-versa
console.log("\nconverter de e para JSON:\n");

let jsonString = JSON.stringify(pessoa);
console.log(jsonString); // string JSON
console.log(typeof jsonString); // string

let jsonObjeto = JSON.parse(jsonString);
console.log(jsonObjeto); // objeto JavaScript
console.log(typeof jsonObjeto); // object