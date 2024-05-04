
// const toTopBtn = document.querySelector('.to-top-btn');

// window.onscroll = function () {
//    if (scrollY >= 1000) {
//       toTopBtn.style.opacity = '1';
//    } else {
//       toTopBtn.style.opacity = '0';
//    }
// }

// toTopBtn.addEventListener('click', _ => {
//    scrollTo({
//       top: 0,
//       behavior: 'smooth',
//    })
// })

// const links = document.querySelectorAll('.navbar-nav .navbar-item .navbar-link');

// links.forEach(link => {
//    link.addEventListener('click', e => {
//       document.querySelector(e.target.dataset.section).scrollIntoView({
//          behavior: 'smooth'
//       })
//    })
// })

// document.querySelector('.footer .year').innerHTML = new Date().getFullYear();



function* generatorFunction() {
   yield 'hello'
   yield 'world'
}

const genObject = generatorFunction()

console.log(generatorFunction())