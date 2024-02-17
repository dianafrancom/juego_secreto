/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10'; */

let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo=5;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length ==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto ();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
  
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    /*console.log(typeof(numeroDeUsuario)); // saber que tipo de dato me devuelve el imput
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);*/

    console.log(numeroSecreto === numeroDeUsuario);
    console.log(intentos);

    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en  ${intentos} ${(intentos==1 ? 'vez!!!': 'veces!!!')}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor'); 
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#numeroUsuario').value= '';
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del número Secreto!!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto ();
    //inicializar la variable intentos
    intentos=1;
    //desabiliar el boton de nuevo jueto
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function reiniciarjuego(){      
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de numeros
    condicionesInciales();
       
   }


condicionesInciales();