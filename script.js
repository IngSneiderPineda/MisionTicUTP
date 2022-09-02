function myfunction(){
    document.getElementById('demo').innerHTML = 'Párrafo cambiado!';
}

function myfunction2(){
    let x = (10 + 2) * 2;
    document.getElementById('demo').innerHTML = x;
}

//alert('Hola');

console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);

let emes = 'm';
console.log(emes.repeat(10));
console.log(`${emes}` + `${'a'.repeat(10)}`);

let ul = document.createElement('ul');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);
li1.innerHTML = 'Item numero 1';
li2.innerHTML = 'Item numero 2';

function hide(e){
    e.target.style.visibility = 'hidden';
}

ul.addEventListener('click', hide, false);