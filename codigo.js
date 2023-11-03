String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }


//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const palabras = ['casa', 'perro', 'gato', 'elefante', 'mesa', 'pajaro'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");

document.querySelector('#output').innerHTML = palabraConGuiones;

document.querySelector('#calcular').addEventListener('click', () =>{
     const letra = document.querySelector('#letra').value;
     alert(letra)

     for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replace(i*2, letra);
        }
     }

     alert(palabraConGuiones)
     
});