function init () {
  let nav = document.getElementsByClassName('hamMenu')[0]
  let menuIcon = document.getElementsByClassName('menuIcon')[0]

  menuIcon.addEventListener('click', toggleNavMenu)

  let navMenuIsOpen = false

  function toggleNavMenu () {
    console.log('clicked nav')
  }
}

document.addEventListener('DOMContentLoaded', init)
