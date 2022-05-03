///////////////////////// selectors
const body = document.querySelector('body')
const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')

let slideIndex = 1

///////////////////////// functions

const showSlides = (n) => {
    // let i
    let slides = document.getElementsByClassName('slides')
    let dots = document.getElementsByClassName('dot')

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}
showSlides(slideIndex)

const plusSlides = (n) => {
    showSlides(slideIndex += n)
}
const currentSlide = (n) => {
    showSlides(slideIndex = n)
}


///////////////////////// event listeners

// arrow event listeners that call plusSlides function which shows the correct image
prevArrow.addEventListener('click', () => {
    plusSlides(-1)
})
nextArrow.addEventListener('click', () => {
    plusSlides(1)
})

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})