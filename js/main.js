const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides .forEach(
   (slide, index)  => {
    slide.style.left = `${index * 100}%`
}
)
const goPrev = () =>{
    counter --
    slideImage()
}
const goNext = () =>{
    counter ++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translatex(-${counter * 100}%)`

        }
    )
}