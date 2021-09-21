//Aula 8

//Arrays
const alunos = [
    {
        nome: 'Elisa',
        nota: 9.8
    },
    {
        nome: 'Giovanna',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(alunos) //Mostra o Array inteiro

console.log(alunos[0]) //Mostra apenas o objeto que está naquela posição