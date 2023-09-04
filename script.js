// Atividade de fixação | Curso de JavaScrip Módulo 2
// 1) Crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = true;
if (dia) {
  console.log("Claro");
} else {
  console.log("De noite");
}

// 2) Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3) Crie uma função que exiba uma mensagem no console

function exibaUmaMensagem() {
  console.log("Seja forte e corajosa");
}
exibaUmaMensagem();

// 4) crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(nome) {
  console.log(`Meu nome é ${nome} `);
}

meuNome("Daiane Lima");

// 5) Crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados(nome, idade, estiloMusical) {
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Estilo Musical Preferido: " + estiloMusical);
}
dados("Daiane Lima", 32, "Hip-Hop/rap ");

// Questão 7
// Criar uma função
// Criar uma operação matemátic (triplo)
// Inserir nº dentro do parâmetro

// 6) Crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeAndMusica(filme, musica) {
  console.log("filme:" + filme);
  console.log("música:" + musica);
}
filmeAndMusica("Um Senhor Estagiário", "Sonho-Atitude 67");

// 7) Crie uma função que retorne o triplo do número recebido no parâmetro da função
function retornaTriplo(numero) {
  return numero * 3;
}
console.log(retornaTriplo(7));

// 8) crie uma função que  verifique se uma  variável é true ou false

let idade = 16;

function menorDeIdade(idade) {
  if (idade < 18) {
    return true;
  } else {
    return false;
  }
}
console.log(menorDeIdade(idade));

// 9) Crie um array que receba 5 itens e exiba no console.

let diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
];
console.log(diasDaSemana);

// 10) Utilize um método para adicionar um nome ao inicio do array.

diasDaSemana.unshift("Domingo");

// 11) Utilize um método para remover o último nome do array.

diasDaSemana.pop();

// 12) Utilize um método para adicionar dois nomes ao fim do array.

diasDaSemana.push("Feriado Nacional", "Feriado Local");

// 13) Utilize um método para remover o primeiro nome do array.

diasDaSemana.shift();

// 14) Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers);
numbers.sort();

// 15) Crie um objeto que receba ao menos três propriedades sobre você.
let sobreEu = {
  Nome: "Daiane",
  Sobrenome: "Lima",
  Signo: "Libra",
};
console.log(sobreEu);

// 16) Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreEu.Aniversario = "12 de Outubro";

// 17) Remova uma propriedade desse objeto.
delete sobreEu.Signo;

// 18) Mostre no console todas as propriedades desse objeto.
for (let propriedade in sobreEu) {
  console.log(propriedade + ": " + sobreEu[propriedade]);
}
// 19) Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 amigos.
let cadastro = [
  {
    nome: "Roger Prado",
    idade: 27,
    // Utilizei string, por estar usando caracteres
    telefone: "(41)99999-9999",
    amigos: ["Leonardo", "Vando", "Keity", "Juliana", "Willian"],
  },
  {
    nome: "Bruna",
    idade: 28,
    // Utilizei string, por estar usando caracteres
    telefone: "(41)99999-9999",
    amigos: ["Daiane", "Jociane", "Jaqueline", "Fabio", "Jane"],
  },
  {
    nome: "Thais",
    idade: 27,
    // Utilizei string, por estar usando caracteres
    telefone: "(41)99999-9999",
    amigos: ["Fulana", "Ciclana", "Beltrana", "Jubileu", "Felizeu"],
  },
  {
    nome: "Linda",
    idade: 27,
    // Utilizei string, por estar usando caracteres
    telefone: "(41)99999-9999",
    amigos: ["Eros", "Afrodite", "Irineus", "Teneus", "Felizeus"],
  },
  {
    nome: "Maria Alice",
    idade: 27,
    // Utilizei string, por estar usando caracteres
    telefone: "(41)99999-9999",
    amigos: ["João", "Samuel", "Lucas", "Noé", "José"],
  },
];

// 20) Mostre no console o nome de um amigo de cada lista.
console.log(
  `O melhor amigo do ${cadastro[0].nome} é o ${cadastro[0].amigos[0]}`
);
console.log(
  `O melhor amigo do ${cadastro[1].nome} é o ${cadastro[1].amigos[0]}`
);
console.log(
  `O melhor amigo do ${cadastro[2].nome} é o ${cadastro[2].amigos[0]}`
);
console.log(
  `O melhor amigo do ${cadastro[3].nome} é o ${cadastro[3].amigos[0]}`
);
console.log(
  `O melhor amigo do ${cadastro[4].nome} é o ${cadastro[4].amigos[0]}`
);
