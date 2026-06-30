let p2 = document.getElementById('main-content__text__p2')
let p2__span = document.getElementById('main-content__text__p2__span')
let p3 = document.getElementById('main-content__text__p3')

let btnMore = document.getElementById('main-content__button-more')
let btnMoreText = document.getElementById('main-content__button-more__text')

let btnState = false;

btnMore.addEventListener('click', () => {
  
  btnState = !btnState;

  if (btnState) {
    btnMoreText.textContent = "Скрыть";
  }
  else {
    btnMoreText.textContent = "Читать далее";
  }

  p2.classList.toggle('main-content__text-content__text__p2--show')
  p2__span.classList.toggle('main-content__text-content__text__p2__span--show')
  p3.classList.toggle('main-content__text-content__text__p3--show')
})

// window.addEventListener('change', () => {
//   if (state) {
//     p2.classList.add('main-content__text-content__text__p2--show')
//     p2__span.classList.add('main-content__text-content__text__p2__span--show')
//     p3.classList.add('main-content__text-content__text__p3--show')
//   } else {
//     p2.classList.remove('main-content__text-content__text__p2--show')
//     p2__span.classList.remove(
//       'main-content__text-content__text__p2__span--show'
//     )
//     p3.classList.remove('main-content__text-content__text__p3--show')
//   }
// })
