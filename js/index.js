// Déclaration des variables


let themeblanc=document.getElementsByClassName('btnnav1')[0]
let themenoir=document.getElementsByClassName('btnnav2')[0]
let body=document.getElementsByTagName('body')[0]
let nav=document.getElementsByTagName('nav')[0]

// Ecouteur d'evenement des themes

themenoir.addEventListener('click' , event=>{
    body.style.backgroundColor="rgb(27, 26, 26)"
    nav.style.backgroundColor="rgb(27, 26, 26)"
})

themeblanc.addEventListener('click', event=>{
    body.style.backgroundColor="rgb(250, 246, 248)"
    nav.style.backgroundColor="rgb(250, 246, 248)"
})


// Carousel en js ( se baser sur la video)

// Nav ( refaire la nav voir sur )
// quand je clique sur le burger il affiche





// responsive

// voir comment j'ai avec le site du chef ou chercher sur slack

// Popup

// déclaration des variables

let btnPopup=document.getElementById('btnPopup')
let overlay=document.getElementById('overlay')
let btnClose=document.getElementById('btnClose')

// Ecouteur d'evenement du popup

btnPopup.addEventListener('click',openModal);

function openModal(){
    overlay.style.display='block';
}
function closePopup(){
    overlay.style.display='none';
}

btnClose.addEventListener('click',closePopup);




