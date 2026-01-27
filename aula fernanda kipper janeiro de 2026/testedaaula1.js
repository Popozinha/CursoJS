// testedaaula1.js
// Declaração de um array com nomes de alunos
//criando uma lista de chamada com os nomes dos alunos
//--------------------------alunos-------------------------------//

//variavel com o nome dos alunos vai servir como base para a chamada das aulas
var alunos = [" Aline ", " Bruna ", " Carla ", " Diana "];
console.log("Olá, " + alunos + "! Seja bem-vinda à aula de JavaScript.");

console.log("")

//usando join para formatar a lista de chamada
var chamada = alunos.join(", ");
console.log("Chamada dos alunos: " + chamada);

console.log("")

//usando loop para listar a idade de cada aluno individualmente
var idadealuno = [17, 22, 25, 30];
for (var i = 0; i < idadealuno.length; i++) {
    console.log("Aluno " + alunos[i] + "tem : "  + idadealuno[i] + " anos de idade. Portanto" + (idadealuno[i] >= 18 ? " é maior de idade." : " é menor de idade."));
}

console.log("")

for (var i = 0; i < alunos.length; i++) {// o legth serve para contar quantos elementos tem no array
    console.log("Bem-vinda à aula, " + alunos[i] + "!");
}

console.log("")
for (var t = 0; t <=4; t++){
    console.log("contando em numero:" +t);
}
console.log("contagem finalizada no numero " + (t-1));
console.log("")

//--------------------------fim-------------------------------//

//switch case para verificar a presença dos alunos

/*

## 🔹 O que é o `switch`?

O **`switch`** é uma estrutura de controle usada para **tomar decisões**, semelhante ao `if/else`, mas **mais organizada** quando você tem **muitos valores possíveis** para a mesma variável.

---

## 🔹 Estrutura básica

```javascript
switch (expressao) {
  case valor1:
    // código
    break;

  case valor2:
    // código
    break;

  default:
    // código padrão
}
```

---

## 🔹 Como funciona

1. O valor da **expressão** é comparado com cada `case`
2. Se encontrar um valor igual:

   * Executa o código do `case`
   * Para no `break`
3. Se não encontrar nenhum:

   * Executa o `default`

📌 A comparação é **estrita (`===`)**.

---

## 🔹 Exemplo simples

```javascript
let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda");
    break;

  case 2:
    console.log("Terça");
    break;

  case 3:
    console.log("Quarta");
    break;

  default:
    console.log("Dia inválido");
}
```

✔ Saída:

```
Quarta
```

---

## 🔹 O `break` (muito importante ⚠️)

Sem o `break`, o código continua executando os próximos `case`.

### ❌ Sem `break`

```javascript
let numero = 1;

switch (numero) {
  case 1:
    console.log("Um");
  case 2:
    console.log("Dois");
}
```

✔ Saída:

```
Um
Dois
```

---

### ✅ Com `break`

```javascript
let numero = 1;

switch (numero) {
  case 1:
    console.log("Um");
    break;
  case 2:
    console.log("Dois");
}
```

✔ Saída:

```
Um
```

---

## 🔹 `default`

Executa quando nenhum `case` é atendido.

```javascript
let cor = "verde";

switch (cor) {
  case "azul":
    console.log("Cor azul");
    break;
  case "vermelho":
    console.log("Cor vermelha");
    break;
  default:
    console.log("Cor não cadastrada");
}
```

---

## 🔹 Quando usar `switch`?

Use quando:

* Há **muitas opções**
* Todas dependem da **mesma variável**
* Comparações diretas (valores fixos)

❌ Evite quando:

* Condições complexas (`>`, `<`, `&&`)
* Regras muito variadas

---

## 🔹 `switch` vs `if`

| Situação             | Melhor   |
| -------------------- | -------- |
| Poucas condições     | `if`     |
| Muitos valores fixos | `switch` |
| Comparações lógicas  | `if`     |

---

## 🎯 Resumo rápido (prova)

* `switch` compara usando `===`
* `break` evita execução em cascata
* `default` é opcional
* Mais organizado que vários `if/else`

Se quiser, posso:

* montar **exercícios com gabarito**
* mostrar **pegadinhas de prova**
* comparar `switch` vs `if` com exemplos reais

*/
console.log("")

let idade = 20;

switch (idade) {
    case 17:
        console.log("Aluno menor de idade.");
        break;
    case 20:
        console.log("aluno maior de idade.");
        break;
    case 18:
        console.log("Aluno maior de idade.");
        break;
    default:
        console.log("Idade não registrada.");
}console.log("")

let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda");
    break;

  case 2:
    console.log("Terça");
    break;

  case 3:
    console.log("Quarta");
    break;

  default:
    console.log("Dia inválido");
}
console.log("")

switch ("janeiro") {
    case "janeiro":
        console.log("Janeiro");
        break;
    case "fevereiro":
        console.log("Fevereiro");
        break;
    case "março":
        console.log("Março");
        break;
    default:
        console.log("Mês inválido");
}
console.log("")

//----------------2 estruturas de repetição -------------------------------//
//for, while


//para cada tal coisa eu faço tal coisa
for (let i = 1; i <= 5; i++) {
    console.log("Contagem do for: " + i);
}
console.log("")
for (let teste= 0 ; teste<9; teste++){
    console.log("teste do teste for:" + teste);
}
console.log("")

//while (enquanto tal coisa for verdadeira, faça tal coisa)
//o while so funcionou com o let declarado fora do bloco

let j = 1;
while (j <= 5) {
    console.log("Contagem do while: " + j);
    j++;
}
console.log("")
let idaade = 1;
while (idaade <=9){
    console.log("idade atual do while é: " + idaade);
    idaade++;
}

//--------------------------funcoes-------------------------------//  

