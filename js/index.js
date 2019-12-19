// Déclaration des variables

let themeblanc = document.querySelector('.btnav1')
let themenoir = document.querySelector('.btnav2')
let body = document.getElementsByTagName('body')[0]
let nav = document.getElementsByTagName('nav')[0]
let p = document.querySelectorAll('.pachat')
let h5 = document.querySelectorAll('h5')
let titre = document.getElementsByClassName("titre")[0]
console.log(nav)
let textCarousel = document.querySelectorAll('.item')
console.log(textCarousel)
let textnav=document.querySelectorAll('.nav-link')
console.log(textnav)
// Ecouteur d'evenement des themes

themenoir.addEventListener('click', event => {
    body.style.backgroundColor = "rgb(27, 26, 26)"
    body.style.transition = "1s ease"
    nav.style.backgroundColor = "rgb(27, 26, 26)"
    nav.style.transition = "1s ease"
    titre.style.color = "#fff"
    
    textnav.forEach(element => {
        element.style.color="#fff"
    });
    p.forEach(element => {
        element.style.color = "#fff"
    });
    h5.forEach(element => {
        element.style.color = "#fff"
    });
    textCarousel.forEach(element => {
        element.style.color = "#fff"
    })

})

themeblanc.addEventListener('click', event => {
    body.style.backgroundColor = "#fff"
    body.style.transition="1s ease"
    nav.style.backgroundColor = "#fff"
    nav.style.transition = "1s ease"
    titre.style.color = "rgb(27, 26, 26)"
    
    p.forEach(element => {
        element.style.color = "rgb(27, 26, 26)"
    });
    h5.forEach(element => {
        element.style.color = "rgb(27, 26, 26)"
    });
    textCarousel.forEach(element => {
        element.style.color = "rgb(27, 26, 26)"
    })
    textnav.forEach(element => {
        element.style.color=""
    });
})


// Carousel en js ( se baser sur la video)

class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll nombre d'element à afaire défiler
     * @param {Object} options.slidesVisible nombre d'élement visibles dans un slide
     */

    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        children.map = [].slice.call(element.children)
        let root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')

        root.appendChild(this.container)
        root.setAttribute('class', 'carousel')
        this.element.appendChild(root)
        let items = children.forEach((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild('child')
            this.container.appendChild('child')
            return item

        })
        this.setStyle()
        this.createNavigation()
    }

    /**
     * applique les bonnes dimensions aux elements du carousel
     */

    setStyle() {
        let ratio = this.items.lenght / this.options.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.option.slidesVisible) / ratio) + "%"


        );
    }

    // Pour rajouter des boutons pour next et prev regrader a 25min



    /**
     * 
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */


    createDivWithClass(className) {
        let div = docuement.createElement('div')
        div.setAttribute('class', 'className')
        return div
    }

}


document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3,
        slidesVisible: 3
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

// Hover sur la navbar qui affiche un bg

let product = document.getElementsByClassName("nav-link")[1]
let prodJs= document.getElementsByClassName('product_drop')[0]
product.addEventListener('mouseover', ()=>{
    prodJs.setAttribute('class', 'product_drop2')
    prodJs.classList.remove('d-none')
    prodJs.addEventListener('mouseover', ()=>{
        prodJs.setAttribute('class', 'product_drop2')
        prodJs.classList.remove('d-none')
        product.addEventListener('mouseout' , ()=>{
        prodJs.classList.replace('product_drop2', 'product_drop')
        prodJs.classList.add('d-none')
    });prodJs.addEventListener('mouseout' , ()=>{
        prodJs.classList.replace('product_drop2', 'product_drop')
        prodJs.classList.add('d-none')
    });
    })
})







// Pour que la navbar s'affiche en fixed ou stiky
let logo = document.createElement('h3');
logo.innerText = "emporium."
logo.style.fontWeight = "bold"


window.onscroll = function () { myFunction() };

let divlogo = document.getElementById('divlogo');
function myFunction() {
    if (window.scrollY > 180) {
        nav.classList.add("sticky");
        divlogo.appendChild(logo)
        logo.style.display = "block"
        nav.style.transition = "1s ease"
    } else {
        nav.classList.remove("sticky");
        logo.style.display = "none"
        nav.style.transition = "none"
    }


}

// Hover avec une row avec 2 col-6

// j'ai fais avec du html css
