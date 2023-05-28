let numeroAleatorio
let numerosChutados = []
let contador = 0

function reiniciar(){
    window.location.reload()
    document.getElementById('numeroChutado').value = ''
}

function iniciar(){
    numeroAleatorio = Number(Math.floor(Math.random() * 100 + 1))
    console.log(numeroAleatorio)
}

function compararNumeros(){
    let chute = document.getElementById('numeroChutado').value
    numerosChutados.push(' ' + chute)
    document.getElementById('numChutados').innerHTML = numerosChutados

    if(chute > numeroAleatorio){
        document.getElementById('dica').innerHTML = 'ALTO demais'
        document.getElementById('numeroChutado').value = ''
        contador++
        document.getElementById('tentativas').innerHTML = contador
    }
    else if(chute < numeroAleatorio){
        document.getElementById('dica').innerHTML = 'BAIXO demais'
        document.getElementById('numeroChutado').value = ''
        contador++
        document.getElementById('tentativas').innerHTML = contador
    }
    else{
        document.getElementById('dica').innerHTML = 'PARABÉNS! O NÚMERO SECRETO ERA ' + numeroAleatorio
        contador++
        document.getElementById('tentativas').innerHTML = contador
        document.getElementById('numeroChutado').setAttribute('Readonly', 'Readonly')
    }
}
