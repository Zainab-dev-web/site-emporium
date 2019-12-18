// Déclaration des variables

let themeblanc=document.querySelector('.btnav1')
let themenoir=document.querySelector('.btnav2')
let body=document.getElementsByTagName('body')[0]
let nav=document.getElementsByTagName('nav')[0]
let p=document.querySelectorAll('.pachat')
let h5=document.querySelectorAll('h5')

// Ecouteur d'evenement des themes

themenoir.addEventListener('click' , event=>{
    body.style.backgroundColor="rgb(27, 26, 26)"
    nav.style.backgroundColor="rgb(27, 26, 26)"
    p.forEach(element => {
        element.style.color="rgb(250, 246, 248)"
    });
    h5.forEach(element => {
        element.style.color="rgb(250, 246, 248)"
    });
    
})

themeblanc.addEventListener('click', event=>{
    body.style.backgroundColor="rgb(250, 246, 248)"
    nav.style.backgroundColor="rgb(250, 246, 248)"
    p.forEach(element => {
        element.style.color="rgb(27, 26, 26)"
    });
    h5.forEach(element => {
        element.style.color="rgb(27, 26, 26)"
    });
})


// Carousel en js ( se baser sur la video)

// Nav ( refaire la nav voir sur )
// quand je clique sur le burger il affiche





// responsive

// voir comment j'ai avec le site du chef ou chercher sur slack

// Popup

// déclaration des variables

let connexion = document.getElementsByClassName('btnnav3')[0];
console.log(connexion);
var modal = document.getElementById("myModal");
console.log(modal);
var span = document.getElementsByClassName("close")[0];
console.log(span);

// Ecouteur d'evenement


connexion.addEventListener('click', event=>{
  modal.style.display = "block";
})

span.addEventListener('click', event =>{
  modal.style.display = "none";
})

window.addEventListener('click',event=>{
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

// hover sur la navbar


// Pour que la navbar s'affiche en fixed ou stiky

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementsByTagName("nav")
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


