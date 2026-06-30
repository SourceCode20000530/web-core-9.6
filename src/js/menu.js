let header = document.getElementById('header')
let menu = document.getElementById('menu')
let menuBurgerBtn = document.getElementById('menuBurgerBtn')
let menuCloseBtn = document.getElementById('menuCloseBtn')

const openMenu = () => {
  menu.classList.add('menu--open')
}

const closeMenu = () => {
  menu.classList.remove('menu--open')
}

menuBurgerBtn.addEventListener('click', openMenu)
menuCloseBtn.addEventListener('click', closeMenu)

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header--scrolled')
  } else {
    header.classList.remove('header--scrolled')
  }
})
