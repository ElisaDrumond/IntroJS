//Aula 5

/*===============================================

OPERADORES DE COMPARAÇÃO

>      Maior
<      Menor
>=     Maior igual a
<=     Menor igual a
==     Igual a
===    Igual e do mesmo tipo
!=     Diferente
!==    Diferente, inclusive do tipo

==================================================*/

//Irá retornar boolean: 'true' or 'false'.
console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true
console.log(4 == "4") //true
console.log(4 === "4") //false
console.log(4 != "5") //true
console.log(4 !== "5") //true


//Verificar se a pessoa é maior igual a 18 anos

const idade = 17

//Se sim, deixar entrar, se não, bloquear a entrada!
//Se a pessoa tiver 17, pedir para voltar aos 18.

if(idade >= 18){
    console.log('Deixar entrar.')

} else if (idade == 17){
    console.log('Volte aos 18!')

} else{
    console.log('Bloquear a entrada!')
}