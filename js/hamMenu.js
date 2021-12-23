function init () {
  let nav = document.getElementsByClassName('hamMenu')
  let menuIcon = document.getElementsByClassName('menuIcon')

  nav.addEventListener('click', toggleNavMenu)
  menuIcon.addEventListener('click', toggleNavMenu)

  let navMenuIsOpen = false

  function toggleNavMenu () {
    console.log('clicked')
  }
}

window.addEventListener('DOMContentLoaded', init)
