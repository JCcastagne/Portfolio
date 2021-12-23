function init () {
  let hamMenu = document.getElementsByClassName('hamMenu')[0]
  let menuButton = document.querySelector('.menuIcon')
  let menuIcon = document.querySelector('.menuIcon span')

  menuButton.addEventListener('click', toggleNavMenu)

  let hamMenuIsOpen = false

  function toggleNavMenu () {
    console.log('clicked nav')
    if (hamMenuIsOpen) {
      hamMenu.classList.remove('active')
      menuIcon.classList.remove('active')
      hamMenuIsOpen = false
    } else {
      hamMenu.classList.add('active')
      menuIcon.classList.add('active')
      hamMenuIsOpen = true
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
