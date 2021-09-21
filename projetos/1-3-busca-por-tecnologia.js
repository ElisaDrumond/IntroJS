const usuarios =[
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
]

function checarSeUsuarioUsaCSS(usuario){

    for(let usuario of usuarios){

        for(let i = 0; i < usuario.tecnologias.length; i++){

            if(usuario.tecnologias[i] == 'CSS'){
                console.log(`O usuário ${usuario.nome} trabalha com CSS`)
            }
        }
    
    }

    return usuario
}

checarSeUsuarioUsaCSS(usuarios)