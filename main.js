/*
Document es un objeto que se puede utilizar solo en JS
 -> document.getElementById
 -> document.getElementsByClassName
 -> document.getElementsByTagName
*/
/* 
Por buenas practicas se dejó de utilizar ".getElement...." y ahora se utiliza:
 -> document.querySelector
 -> document.querySelectorAll
porque trabajan bajo selectores de CSS 
*/

const elements = document.querySelectorAll(".img-container");

console.log("elements", elements)



//Cambiar las imagenes de lugar
const button = document.querySelector("button");

function cambio(){ 
    //elements[0].style.gridArea = "elem5"
    numero = Math.floor(Math.random() * (8 - 1) + 1);
    numero2 = Math.floor(Math.random() * (3 - 1) + 1);
    numero3 = Math.floor(Math.random() * (3 - 1) + 1);
    elements[numero].style.gridArea = numero2 / numero3
    console.log(numero, numero2, numero3)
}

button.addEventListener("click", cambio)
