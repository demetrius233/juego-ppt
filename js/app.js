//VARIABLES
const playGame = document.querySelector(".play")

const contJugadas = document.querySelector(".jugadas")

const contOpciones = document.querySelector(".opciones")


const cajaCont = document.querySelector(".caja-cont")

const imgJugada = document.querySelector(".player img")
const contJugada = document.querySelector(".player")

const resultado = document.querySelector(".resultado p")

const contCpu = document.querySelector(".cpu")

const reglas = document.querySelector(".btn-reglas")
const opciones = document.querySelector(".opciones")

let contador = 0

//MOSTRAR REGLAS
reglas.addEventListener('click', (e)=>{
    e.preventDefault()

    Swal.fire({
    title: '<strong>RULES</strong>', 
    html:
        `<img src="./images/image-rules.svg" alt="">` ,
    showCloseButton: true, 
    focusConfirm: false,
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Entendido!' 
    })
})

//EVENTO CUANDO EL USUARIO LE DE CLICK A UNA OPCION
opciones.addEventListener('click', (e)=>{
    //0 = PIEDRA
    //1 = PAPEL
    //2 = TIJERA
    let cpu = Math.floor(Math.random() * 3) 

    const valores = ["piedra", "papel", "tijera"]

    contJugadas.style.display = 'flex'

    playGame.addEventListener("click", (e)=>{
        e.preventDefault()

        contador = 0
        cajaCont.innerHTML = contador
    })

    //MOSTRANDO LA OPCION SELECCIONADA POR EL USUARIO
    let player = seleccionUsuario(e)
    

    //VALIDANDO QUIEN ES EL GANADOR
    validarGanador(valores, cpu, player)

    //MOSTRANDO LA OPCION SELECCIONADA POR LA CPU
    seleccionCPU(cpu)

})

function seleccionUsuario(e) {
    let player
    if (e.target.classList[0] == "o-piedra") {
        player = 0
        imgJugada.setAttribute("src", "./images/icon-rock.svg")
        contJugada.style.boxShadow = '0px 0px 2px 10px #e0566f'

    }else if(e.target.classList[0] == "o-papel"){
        player = 1
        imgJugada.setAttribute("src", "./images/icon-paper.svg")
        contJugada.style.boxShadow = '0px 0px 2px 10px #3886ca'

    }else{
        player = 2
        imgJugada.setAttribute("src", "./images/icon-scissors.svg")
        contJugada.style.boxShadow = '0px 0px 2px 10px #f5b05c'
    }

    return player

}

function validarGanador(valores, cpu, player) {
    
    if (valores[cpu] == "piedra" && valores[player] == "tijera" ||
        valores[cpu] == "tijera" && valores[player] == "papel" ||
        valores[cpu] == "papel" && valores[player] == "piedra")  {

        console.log("EL usuario pierde")
        resultado.innerHTML = "You lose"

    }else if(cpu == player){

        console.log("Hubo un empate")
        resultado.innerHTML = "none"

    }else{

        console.log("EL usuario gana")
        resultado.innerHTML = "You win"
        contador++
        cajaCont.innerHTML = contador
    }
}

function seleccionCPU(cpu) {

    if (cpu == 0) {
        contCpu.style.backgroundImage = 'url(./images/icon-rock.svg)'
    }else if(cpu == 1){
        contCpu.style.backgroundImage = 'url(./images/icon-paper.svg)'
    }else{
        contCpu.style.backgroundImage = 'url(./images/icon-scissors.svg)'
    }
}