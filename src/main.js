/* ABRE E FECHA MENU */
const nav = document.querySelector('#header .container')
const toggle = document.querySelectorAll('#header .container .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* ESCONDER MENU */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando usar o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* Botão voltar pra cima */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo conforme a pag */
const sections = document.querySelectorAll('main section[id]')

function ativarMenuNaSeccaoAtual() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  sections.forEach(section => {
    const { offsetTop: sectionTop, offsetHeight: sectionHeight } = section
    const sectionId = section.getAttribute('id')

    const checkpointInicio = checkpoint >= sectionTop
    const checkpointFim = checkpoint <= sectionTop + sectionHeight

    const elemento = document.querySelector(`nav ul li a[href*=${sectionId}]`)

    elemento.classList.toggle('active', checkpointInicio && checkpointFim)
  })
}

window.addEventListener('scroll', function () {
  backToTop()
  ativarMenuNaSeccaoAtual()
  changeHeaderWhenScroll()
})
