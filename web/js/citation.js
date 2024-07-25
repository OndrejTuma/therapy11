const initCitations = () => {
  document.querySelectorAll('.citation').forEach((elm) => {
    const source = elm.querySelector('.source')
    const type = elm.querySelector('.type')

    const typed = new Typed(type, {
      stringsElement: source,
      typeSpeed: 100,
      loop: true,
      backSpeed: 40,
      backDelay: 1200,
      startDelay: 200,
    })
  })
}

document.addEventListener('DOMContentLoaded', initCitations)
