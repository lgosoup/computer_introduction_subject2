const headerEl = document.querySelector('header')

const onWindowScroll = (event) => {
  if (scrollY > 100) {
    headerEl.classList.add('active')
  } else {
    headerEl.classList.remove('active')
  }
}

window.addEventListener('scroll', onWindowScroll)

const fadeEls = document.querySelectorAll(".fade-in")

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 0.5, {
    delay: (index) * .7,
    opacity: 1
  })
})
