/*
    Exercício 3
        - Calcular a média da turma 
        - Imprimir o aluno com a maior Média
*/
const lista = [
    {
        "nome": "José",
        "media": 87
    },
    {
        "nome": "João",
        "media": 65
    },
    {
        "nome": "Maria",
        "media": 88
    },
    {
        "nome": "Sandra",
        "media": 75
    },    
    {
        "nome": "Bento",
        "media": 63
    },
    {
        "nome": "Josefa",
        "media": 78
    },    
];

// Inicializar uma váriavel para somar as médias
var somaMedia = 0;
var maiorMedia = 0;
var nomeAluno = "";

// Percorrer a lista de alunos
for(var aluno of lista) {
    somaMedia += aluno.media;

    if (aluno.media > maiorMedia) {
        maiorMedia = aluno.media;
        nomeAluno = aluno.nome;
    }
}

console.log(somaMedia / lista.length);

console.log("Maior Média:", maiorMedia, nomeAluno);