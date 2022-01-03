function init () {
  let slider = document.querySelector('.slides')

  let sliderImg1 = slider.children[0]
  let sliderImg2 = slider.children[1]
  let sliderImg3 = slider.children[2]

  //Positions
  let pos1 = sliderImg1
  let pos2 = sliderImg2
  let pos3 = sliderImg3

  sliderImg1.addEventListener('click', () => selectPos(1))
  sliderImg2.addEventListener('click', () => selectPos(2))
  sliderImg3.addEventListener('click', () => selectPos(3))

  function selectPos (pos) {
    if (pos === 1 && pos1 === sliderImg1) {
      console.log('clicked pos1 - image1')
      //translate
      pos1.style.transform = 'translateX(50%) scale(1.5)'
      pos2.style.transform = 'translateX(-50%)'
      pos3.style.transform = 'translateX(0%)'

      //z-index
      pos1.style.zIndex = '3'
      pos2.style.zIndex = '2'
      pos3.style.zIndex = '2'

      //border radius
      pos1.style.borderRadius = '13px'
      pos2.style.borderRadius = '11px'
      pos3.style.borderRadius = '11px'

      //update image positions
      pos1 = sliderImg2
      pos2 = sliderImg1
      pos3 = sliderImg3
    } else if (pos === 2 && pos1 === sliderImg2) {
      console.log('clicked pos1 - image2')
      //translate
      pos1.style.transform = 'translateX(0%) scale(1.5)'
      pos2.style.transform = 'translateX(0%)'
      pos3.style.transform = 'translateX(0%)'

      //z-index
      pos1.style.zIndex = '3'
      pos2.style.zIndex = '2'
      pos3.style.zIndex = '2'

      //border radius
      pos1.style.borderRadius = '11px'
      pos2.style.borderRadius = '13px'
      pos3.style.borderRadius = '11px'

      //update image positions
      pos1 = sliderImg1
      pos2 = sliderImg2
      pos3 = sliderImg3
    }
  }

  function returnImg () {
    sliderImg1.style.transform = 'translateX(0%)'
  }
}

document.body.addEventListener('DOMContentLoaded', init())
