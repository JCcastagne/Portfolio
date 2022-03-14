function init () {
  //listener for screen sizes. Cancel "slides" animations if on mobile.
  let animationsAreOn = true
  window.addEventListener('resize', turnOffAnimations)

  function turnOffAnimations () {
    if (window.innerWidth <= 600) {
      animationsAreOn = false
      // console.log('turn OFF animations')
    } else {
      animationsAreOn = true
      // console.log('turn ON animations')
    }
  }

  let sliders = document.querySelectorAll('.slides')

  sliders.forEach(slide => {
    let sliderImg1 = slide.children[0]
    let sliderImg2 = slide.children[1]
    let sliderImg3 = slide.children[2]

    //Positions
    let image1 = { img: sliderImg1, position: 'left' }
    let image2 = { img: sliderImg2, position: 'center' }
    let image3 = { img: sliderImg3, position: 'right' }

    sliderImg1.addEventListener('click', () => selectImage(1))
    sliderImg2.addEventListener('click', () => selectImage(2))
    sliderImg3.addEventListener('click', () => selectImage(3))

    function selectImage (selectedImage) {
      if (animationsAreOn) {
        if (selectedImage === 1 && image1.position === 'left') {
          // console.log('move image1 to middle')
          //translate
          image1.img.style.transform = 'translateX(50%) scale(1.5)'
          image2.img.style.transform = 'translateX(-50%)'
          image3.img.style.transform = 'translateX(0%)'

          //z-index
          image1.img.style.zIndex = '3'
          image2.img.style.zIndex = '2'
          image3.img.style.zIndex = '2'

          //border radius
          image1.img.style.borderRadius = '13px'
          image2.img.style.borderRadius = '11px'
          image3.img.style.borderRadius = '11px'

          //update image positions
          image1.position = 'center'
          image2.position = 'left'
          image3.position = 'right'
        } else if ((selectedImage === 1 || 2) && image1.position === 'center') {
          // console.log('move image1 to left, return image2 to center')
          //translate
          image1.img.style.transform = 'translateX(0%)'
          image2.img.style.transform = 'translateX(0%) scale(1.5)'
          image3.img.style.transform = 'translateX(0%)'

          //z-index
          image1.img.style.zIndex = '2'
          image2.img.style.zIndex = '3'
          image3.img.style.zIndex = '2'

          //border radius
          image1.img.style.borderRadius = '11px'
          image2.img.style.borderRadius = '13px'
          image3.img.style.borderRadius = '11px'

          //update image positions
          image1.position = 'left'
          image2.position = 'center'
          image3.position = 'right'
        } else if (selectedImage === 3 && image3.position === 'right') {
          // console.log('move image3 to center')
          //translate
          image1.img.style.transform = 'translateX(0%)'
          image2.img.style.transform = 'translateX(50%)'
          image3.img.style.transform = 'translateX(-50%) scale(1.5)'

          //z-index
          image1.img.style.zIndex = '2'
          image2.img.style.zIndex = '2'
          image3.img.style.zIndex = '3'

          //border radius
          image1.img.style.borderRadius = '11px'
          image2.img.style.borderRadius = '11px'
          image3.img.style.borderRadius = '13px'

          //update image positions
          image1.position = 'left'
          image2.position = 'right'
          image3.position = 'center'
        } else if ((selectedImage === 3 || 2) && image3.position === 'center') {
          // console.log('move image3 to right, return image2 to center')
          image1.img.style.transform = 'translateX(0%)'
          image2.img.style.transform = 'translateX(0%) scale(1.5)'
          image3.img.style.transform = 'translateX(0%)'

          //z-index
          image1.img.style.zIndex = '2'
          image2.img.style.zIndex = '3'
          image3.img.style.zIndex = '2'

          //border radius
          image1.img.style.borderRadius = '11px'
          image2.img.style.borderRadius = '13px'
          image3.img.style.borderRadius = '11px'

          //update image positions
          image1.position = 'left'
          image2.position = 'center'
          image3.position = 'right'
        }
      }
    }
  })
}

document.body.addEventListener('DOMContentLoaded', init())
