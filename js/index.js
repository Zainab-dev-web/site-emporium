// Déclaration des variables

let themeblanc = document.querySelector('.btnav1')
let themenoir = document.querySelector('.btnav2')
let body = document.getElementsByTagName('body')[0]
let nav = document.getElementsByClassName('navbar')[0]
let p = document.querySelectorAll('.pachat')
let h5 = document.querySelectorAll('h5')
let titre = document.getElementsByClassName("titre")[0]
let textdrop=document.querySelectorAll('.product_drop')
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
    
    textdrop.forEach(element=>{
        element.style.color="#fff"
    })
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

    textdrop.forEach(element=>{
        element.style.color=""
    })
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

// class Carousel {

//     /**
//      * 
//      * @param {HTMLElement} element 
//      * @param {Object} options 
//      * @param {Object} options.slidesToScroll nombre d'element à afaire défiler
//      * @param {Object} options.slidesVisible nombre d'élement visibles dans un slide
//      */

//     constructor(element, options = {}) {
//         this.element = element;
//         this.options = Object.assign({}, {
//             slidesToScroll: 1,
//             slidesVisible: 1
//         }, options)
//         let children = [].slice.call(element.children)
//         this.currentItem= 0
//         this.root = this.createDivWithClass('carousel')
//         this.container = this.createDivWithClass('carousel__container')

//         this.root.appendChild(this.container)
        
//         this.element.appendChild(this.root)
//         this.items = children.map((child) => {
//             let item = this.createDivWithClass('carousel__item')
//             item.appendChild('child')
            
//             return item

//         })
//         this.items.forEach(item=>this.container.appendChild(item))
//         this.setStyle()
//         this.createNavigation()
//     }

//     /**
//      * applique les bonnes dimensions aux elements du carousel
//      */

//     setStyle() {
//         let ratio = this.items.lenght / this.options.slidesVisible
//         this.container.style.width = (ratio * 100) + "%"
//         this.items.forEach(item => item.style.width = ((100 / this.option.slidesVisible) / ratio) + "%"


//         );
//     }

//     // Pour rajouter des boutons pour next et prev regrader a 25min



//     /**
//      * 
//      * 
//      * @param {string} className 
//      * @returns {HTMLElement}
//      */


//     createDivWithClass(className) {
//         let div = docuement.createElement('div')
//         div.setAttribute('class', 'className')
//         return div
//     }

// }


// document.addEventListener('DOMContentLoaded', function () {

//     new Carousel(document.querySelector('#carousel1'), {
//         slidesToScroll: 3,
//         slidesVisible: 3
//     })
// // Faire un calcul pour en mettre 4 slidesVisible
// })




// new carousel

class Carousel {
    constructor(element, options = {}) {
      this.element = element;
      this.options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        navigation: true,
        pagination: false,
        loop: false,
        infinite: false
      }, options);
      let children = [].slice.call(element.children);
      this.isMobile = false
      this.currentItem = 0
      this.moveCallbacks = []
      this.offset = 0
      this.root = this.createDivWithClass('carousel')
      this.container = this.createDivWithClass('carousel__container')
      this.root.appendChild(this.container)
      this.element.appendChild(this.root)
      this.items = children.map((child) => {
        let item = this.createDivWithClass('carousel__item');
        item.appendChild(child);
        return item;
      })
      if (this.options.infinite) {
        this.offset = this.options.slidesVisible + this.options.slidesToScroll - 1
        this.items = [
          ...this.items.slice(this.items.length - this.offset).map(elem => elem.cloneNode(true)),
          ...this.items,
          ...this.items.slice(0, this.offset).map(elem => elem.cloneNode(true)),
        ]
        this.goToItem(this.offset, false)
      }
      this.items.forEach(item => this.container.appendChild(item))
      this.setStyle()
      if (this.options.navigation) {
        this.createNavigation()
      }
      if (this.options.pagination) {
        this.createPagination()
      }
      this.moveCallbacks.forEach(cb => cb(this.currentItem))
      this.onWindowResize()
      window.addEventListener('resize', this.onWindowResize.bind(this))
    }
    createDivWithClass(className) {
      let div = document.createElement('div')
      div.setAttribute('class', className)
      return div;
    }
    setStyle() {
      let ratio = this.items.length / this.slidesVisible;
      this.container.style.width = (ratio * 100) + "%"
      this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%")
    }
    createNavigation() {
      let nextButton = this.createDivWithClass('carousel__next')
      let prevButton = this.createDivWithClass('carousel__prev')
      this.root.appendChild(nextButton)
      this.root.appendChild(prevButton)
      nextButton.addEventListener('click', this.next.bind(this))
      prevButton.addEventListener('click', this.prev.bind(this))
      if (this.options.loop === false) {
        this.onMove(index => {
          if (index === 0) {
            prevButton.classList.add('carousel__prev--hidden')
          } else {
            prevButton.classList.remove('carousel__prev--hidden')
          }
          if (this.items[this.currentItem + this.slidesVisible] === undefined) {
            nextButton.classList.add('carousel__next--hidden')
          } else {
            nextButton.classList.remove('carousel__next--hidden')
          }
        })
      }
    }
    next() {
      this.goToItem(this.currentItem + this.slidesToScroll)
    }
    prev() {
      this.goToItem(this.currentItem - this.slidesToScroll)
    }
    goToItem(index, animation = true) {
      if (index < 0) {
        if (this.options.loop) {
          index = this.items.length - this.slidesVisible
        } else {
          return
        }
      } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
        if (this.options.loop) {
          index = this.items.length - this.slidesVisible
        } else {
          index = 0
        }
      }
      let translateX = index * (-100 / this.items.length)
      if(animation === false){
        this.container.style.transition = 'none'
      }
      this.container.style.transform = 'translate3d(' + translateX + '%,0,0)'
      if(animation === true){
        this.container.style.transition = ''
      }
      this.currentItem = index
      this.moveCallbacks.forEach(cb => cb(index))
    }
    onMove(cb) {
      this.moveCallbacks.push(cb)
    }
    onWindowResize() {
      let mobile = window.innerWidth < 800
      if (mobile !== this.isMobile) {
        this.isMobile = mobile
        this.setStyle();
        this.moveCallbacks.forEach(cb => cb(this.currentItem));
      }
    }
    createPagination() {
      let pagination = this.createDivWithClass('carousel__pagination')
      let buttons = []
      this.root.appendChild(pagination)
      for (let i = 0; i < 6; i = i + this.options.slidesToScroll) {
        let button = this.createDivWithClass('carousel__pagination__button')
        button.addEventListener('click', () => this.goToItem(i+this.offset))
        pagination.appendChild(button)
        buttons.push(button)
      }
      this.onMove(index => {
        let count = this.items.length - (2*this.offset)
        let activeBtn = buttons[Math.floor(((index - this.offset)%count)/ this.options.slidesToScroll)]
        if (activeBtn) {
          buttons.forEach(btn => btn.classList.remove('carousel__pagination__button--active'))
          activeBtn.classList.add('active')
        }
      })
    }
    get slidesToScroll() {
      return this.isMobile ? 1 : this.options.slidesToScroll
    }
    get slidesVisible() {
      return this.isMobile ? 1 : this.options.slidesVisible
    }
  }
  let onReady = function () {
    new Carousel(document.querySelector('#carousel1'), {
      slidesVisible: 4,
      slidesToScroll: 1,
      pagination: true,
      infinite: true
    })
  }
  if (document.readyState !== 'loading') {
    onReady()
  }
  document.addEventListener('DOMContentLoaded', onReady)
















// Nav ( refaire la nav voir sur )
// quand je clique sur le burger il affiche





// responsive

// voir comment j'ai avec le site du chef ou chercher sur slack

// Popup

// déclaration des variables

let connexion = document.getElementsByClassName('btnav3')[0];
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


// Lancement de la function

window.onscroll = function() {myFunction()};

// Déclaration de mes variables:

let header = document.getElementsByTagName('header')[0]
let navInvisible = document.getElementsByClassName('navbarInvisible')[0]
let collapse2=document.getElementById('collapse2')
let divUl = document.getElementById('collapse')
let div = document.getElementById('divlogo')
let logo = document.createElement('h2');
logo.innerText = "emporium."
logo.style.fontWeight = "bold"

// Ma function avec un scroll , la nav apparait a partir d'un nombre de pixels

function myFunction(){
    if(window.scrollY > 350){
        nav.style.borderBottom = 'solid black 1px'
        nav.classList.add("sticky")
        div.appendChild(logo)
        logo.style.display = 'block'
        divUl.style.paddingTop = '2%'
        divUl.style.transition = '2s ease'
        navInvisible.classList.add('navbarInvisible2')
        collapse2.classList.add('collapse3')
    }else{
        nav.classList.remove("sticky")
        nav.style.borderBottom = '0'
        logo.style.display = 'none'
        divUl.style.paddingTop = '0'
        divUl.style.transition = 'none'
        navInvisible.classList.remove('navbarInvisible2')
        collapse2.classList.remove('collapse3')
    }
}



// window.onscroll = function () { myFunction() };

// let divlogo = document.getElementById('divlogo');
// function myFunction() {
//     if (window.scrollY > 180) {
//         nav.classList.add("sticky");
//         divlogo.appendChild(logo)
//         logo.style.display = "block"
//         nav.style.transition = "1s ease"
//     } else {
//         nav.classList.remove("sticky");
//         logo.style.display = "none"
//         nav.style.transition = "none"
//     }


// }





// Btnsect4 enlever le outline (fonctionne en js ) 

// Déclaration de variables

let btnsect4= document.getElementsByClassName('btnsect4')[0]
console.log(btnsect4)

// Ecouteur d'évenement

btnsect4.addEventListener('click' , event =>{
    btnsect4.style.outline="none"
})








