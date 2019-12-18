// Déclaration des variables

let themeblanc = document.querySelector('.btnav1')
let themenoir = document.querySelector('.btnav2')
let body = document.getElementsByTagName('body')[0]
let nav = document.getElementsByTagName('nav')[0]
let p = document.querySelectorAll('.pachat')
let h5 = document.querySelectorAll('h5')
let titre = document.getElementsByClassName("titre")[0]
console.log(nav)
// Ecouteur d'evenement des themes

themenoir.addEventListener('click', event => {
    body.style.backgroundColor = "rgb(27, 26, 26)"
    nav.style.backgroundColor = "rgb(27, 26, 26)"
    titre.style.color = "rgb(250, 246, 248)"
    p.forEach(element => {
        element.style.color = "rgb(250, 246, 248)"
    });
    h5.forEach(element => {
        element.style.color = "rgb(250, 246, 248)"
    });

})

themeblanc.addEventListener('click', event => {
    body.style.backgroundColor = "rgb(250, 246, 248)"
    nav.style.backgroundColor = "rgb(250, 246, 248)"
    titre.style.color = "rgb(27, 26, 26)"
    p.forEach(element => {
        element.style.color = "rgb(27, 26, 26)"
    });
    h5.forEach(element => {
        element.style.color = "rgb(27, 26, 26)"
    });
})


// Carousel en js ( se baser sur la video)

class Carousel{

/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} options 
 * @param {Object} options.slidesToScroll nombre d'element à afaire défiler
 * @param {Object} options.slidesVisible nombre d'élement visibles dans un slide
 */

    constructor(element, options={}){

    }
}


document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 4,
        slidesVisible: 4
    })

})

















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


connexion.addEventListener('click', event => {
    modal.style.display = "block";
})

span.addEventListener('click', event => {
    modal.style.display = "none";
})

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

// hover sur la navbar qui affiche un bg

let product = document.getElementsByClassName("nav-item")[1]


// ce gestionnaire sera exécuté une seule fois lorsque le curseur passera au dessus de la liste non ordonnée
product.addEventListener("mouseenter", function (event) {
    // met en surbrillance la cible de mouseenter
    let bg = document.createElement('div')
    bg.style.backgroundColor = "grey"
    event.target.style.backgroundColor = "grey"
})



// Pour que la navbar s'affiche en fixed ou stiky





let sticky = nav.offsetTop;

function myFunction() {
    if (window.scrollY > 50) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");

    }
}

window.onscroll = function () { myFunction() };


// autre manier

// window.scrollTop = 600
// let scroll = body.scrollTop
// window.addEventListener('scroll', () => {
//     if (body.scrollTop == scroll) {
//         nav.classList.add("sticky-top");
//     } else {
//         nav.classList.remove("sticky-top");
//     }
// })



