function MyFunction(){
    let x = 'Texto cambiado.';    
    document.getElementById('demo').innerHTML = x;
}

function myfunction2(){
    let x = 20;
    alert('tengo ' + x + ' años');
}

console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);

let cadena = 'ma';

console.log(cadena.repeat(10));
console.log(`${cadena.repeat(2)}` + ' me ama');

let ul = document.createElement('ul');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);
li1.innerHTML = 'Items numero 1';
li2.innerHTML = 'Items numero 2';

function hide(e){
    e.target.style.visibility = 'hidden';
}

ul.addEventListener('click', hide, false);

function tocelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

function saludar(){
    let saludo;
    let time = new Date().getHours();
    
    if(time < 12){
        saludo = 'Buenos días';
    } else if(time < 18){
        saludo = 'Buenas tardes';
    } else {
        saludo = 'Buenas noches';
    }
    document.getElementById('demo').innerHTML = saludo;    
}

function dia(){
    let dia2;
    switch(new Date().getDay()){
        case 0:
            dia2 = 'Domingo';
            break;
        case 1:
            dia2 = 'Lunes';
            break;
        case 2:
            dia2 = 'Martes';
            break;
        case 3:
            dia2 = 'Miercoles';
            break;
        case 4:
            dia2 = 'Jueves';
            break;
        case 5:
            dia2 = 'Viernes';
            break;
        case 6:
            dia2 = 'Sabado';
            break;
        default:
            dia2 = 'Dia no valido';
            break;
    }
    document.getElementById('demo').innerHTML = 'Hoy es ' + dia2;
}

function listar(){
    let productos = ["Granos", "Verduras", "Lácteos", "Aseo", "Carnes", "Mecato"];
    let texto = "";
    let i;

    for(i=0; i < productos.length; i++){
        texto += productos[i] + '<br>';
    }
    document.getElementById('demo').innerHTML =texto;
}