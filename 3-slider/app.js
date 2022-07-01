const down = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const up = document.querySelector('.up-button')

let activeSlideIndex = 0
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
up.addEventListener('click', () => {
    changeSlide('up')
})

down.addEventListener('click', () => {
    changeSlide('down')
})

const height = container.clientHeight

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        } 
    }else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}



