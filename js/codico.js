function aleatrio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if (jugada == 1){
        resultado = "piedra"
    } else if(jugada == 2){
        resultado = "papel"
    } else if(jugada == 3){
        resultado = "tijera"
    } else{
        resultado ="FURA DE RANGO"
    }  
    return resultado  
}
//1 es piedra 2  es papel 3 es tijera
let jugador = 0
let PC = 0
let triunfus = 0
let perdidas = 0
while(triunfus < 3 && perdidas < 3){
    PC = aleatrio(1,3)                  //Math.floor(Math.random() * (max - min + 1)+ min)
    jugador =prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")
                                            //alert("elegiste " + jugador)
    alert("tu  eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(PC))
    
    //COMBATE
    if(PC == jugador){
        alert("EMPATE")
    }else if(jugador == 1 && PC == 3){
        alert("GANASTE")
        triunfus = triunfus +1
    }else if(jugador == 2 && PC == 1){
        alert("GANASTE")
        triunfus = triunfus +1
    }else if(jugador == 3 && PC == 2){
        alert("GANASTE") 
        triunfus = triunfus +1
    }else{
        alert("PERDISTE")
        perdidas = perdidas+1
    }
}
alert ("ganaste " + triunfus + " veces" + " perdiste " + perdidas + " veces")