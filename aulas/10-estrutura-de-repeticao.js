//Aula 10

//Criar um programa que calcula a media das turmas de alunos e envia
//mensagem do cálculo de média

const alunosDaTurmaA = [
    {
        nome: 'Elisa',
        nota: 1.8
    },
    {
        nome: 'Giovanna',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 2
    },
    {
        nome: 'Nikolly',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Dani',
        nota: 10
    },
    {
        nome: 'João',
        nota: 10
    },
    {
        nome: 'José',
        nota: 0
    },
    {
        nome: 'Marcos',
        nota: 5
    }
]

function calculaMedia(alunos){

    let soma = 0

    //ESTRUTURA DE REPETIÇÃO
    for(let i = 0; i < alunos.length; i++){

        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    
    if (media > 5){
        console.log(`A média da turma ${turma} é de ${media}. Parabéns!`)

    } else{
        console.log(`A média da turma ${turma} é menor que 5!`)
    }
}

enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')