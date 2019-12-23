function myFunction(){
    if(window.scrollY > 350){
        nav.style.borderBottom = 'solid black 3px'
        nav.classList.add("sticky")
        div.appendChild(h2)
        divUl.style.paddingTop = '2%'
        h2.style.display = 'block'
        divUl.style.transition = '2s ease'
        navInvisible.classList.add('navInvisible2')
    }else{
        nav.classList.remove("sticky")
        h2.style.display = 'none'
        divUl.style.paddingTop = '0'
        nav.style.borderBottom = '0'
        divUl.style.transition = 'none'
        navInvisible.classList.remove('navInvisible2')
    }
}