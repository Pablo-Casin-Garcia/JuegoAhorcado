String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }


//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const palabras = ['casa', 'perro', 'gato', 'elefante', 'mesa', 'pajaro'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");

let contadorFallos = 0;

document.querySelector('#Calcular').addEventListener('click', () =>{
     const letra = document.querySelector('#Letra').value;
     alert(letra)
    let haFallado = true;
     for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replace(i*2, letra);
            haFallado = false;
        }
     }

     alert(palabraConGuiones)

     if(haFallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(307*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            alert("Has sido ahorcado")
        }
     }else{
        if(palabraConGuiones.indexOf('_') <0){
            document.querySelector('#ganador').style.display = 'flex';
        }
     }

     document.querySelector('#output').innerHTML = palabraConGuiones;

     document.querySelector('#letra').value = '';
     document.querySelector('#letra').focus();
     
});