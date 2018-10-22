var numeroMagico = function () {
    var cantIntentos = 0;
    //Pienso el número mágico y lo recuerdo como Número Mágico.
    var numeroMagico = 10;
    //Decime un número y lo recuerdo como Número Ingresado.
    var numeroIngresado = prompt("Ingresá un Número");
    cantIntentos = cantIntentos + 1; //cantIntentos++;

    if (numeroIngresado == numeroMagico) {
        alert("Lo Adivinaste! :D");
        //alert(cantIntentos);
    }
    //Esto se repite mientras (Número Mágico != Número Ingresado).
    while (numeroMagico != numeroIngresado) {


        //Si Número Ingresado es menor al Número Mágico, entonces te digo "Tu número es menor al Número Mágico"
        if (numeroIngresado < numeroMagico) {
            alert("Tu número es menor al Número Mágico")
        }
        //Si Número Ingresado es mayor al Número Mágico, entonces te digo "Tu número es mayor al Número Mágico"
        if (numeroIngresado > numeroMagico) {
            alert("Tu número es mayor al Número Mágico")
        }
        //Si (Número Mágico != Número Ingresado) Decime un número y lo recuerdo como Número Ingresado.
        if (numeroMagico != numeroIngresado) {
            numeroIngresado = prompt("Ingresa otro número.")
            cantIntentos = cantIntentos + 1;
        }
        //Si Número Ingresado es igual al Número Mágico, entonces te digo "Lo Adivinaste! :D"
        if (numeroIngresado == numeroMagico) {
            alert("Lo Adivinaste! :D");
            //alert(cantIntentos);
        }
        ///Fin de la repetición.
    }
    alert(cantIntentos);
}

