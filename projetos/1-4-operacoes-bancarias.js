const usuario = {
    nome: 'Mariana',
    transacoes: [],
    saldo: 0
}

function criaTransacao(transacao){

    usuario.transacoes.push(transacao)

    if(transacao.tipo == 'credito'){
        usuario.saldo = usuario.saldo + transacao.valor

    } else{
        usuario.saldo = usuario.saldo - transacao.valor
    }
}


function maiorValorDeTransacaoPorTipo(tipo){

    let maiorTransacao
    let maiorValor = 0

    for (let transacao of usuario.transacoes){

        if (transacao.tipo == tipo && transacao.valor > maiorValor){
            maiorValor = transacao.valor
            maiorTransacao = transacao
        }
    }

    return maiorTransacao
}

function valorMedioDeTransacao(){

    let soma = 0

    for(let transacao of usuario.transacoes){

        soma += transacao.valor
    }

    return soma / usuario.transacoes.length
}

function contagemDeTransacoes(){

    let contar = {credito: 0, debito: 0}

    for (let transacao of usuario.transacoes){

        if (transacao.tipo == 'credito')
            contar.credito++
        else
            contar.debito++
    }

    return contar
}

criaTransacao({tipo: 'credito', valor: 50.5})
criaTransacao({tipo: 'credito', valor: 50})
criaTransacao({tipo: 'credito', valor: 120})
criaTransacao({tipo: 'debito', valor: 80})
criaTransacao({tipo: 'debito', valor: 30})

console.log(`Saldo: R$${usuario.saldo}`)

console.log(maiorValorDeTransacaoPorTipo('credito'))
console.log(maiorValorDeTransacaoPorTipo('debito')) 

console.log(`Média: R$${valorMedioDeTransacao()}`)

console.log(contagemDeTransacoes())