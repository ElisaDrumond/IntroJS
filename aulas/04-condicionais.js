//Aula 4

// Criar um programa que calcula a média das notas entre os alunos e envia
//mensagem de cálculo da média.

const aluno01 = 'Elisa'
const notaAluno01 = 9.8

const aluno02 = 'Giovanna'
const notaAluno02 = 10

const aluno03 = 'Maria'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03)/3

//CONDICIONAIS
//Se a média for maior que 5, parabenizar a turma
if(media > 5){
    console.log(`A média foi de ${media}, parabéns!`)
    
} else{
    console.log('A média foi menor que 5.')
}