document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button')
  const nav = document.querySelector('nav')
  const gallery = document.querySelector('.gallery')

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide')
  })

  gallery.addEventListener('click', event => {
    const clickedImg = event.target.closest('img')
    if (!clickedImg) return

    const baseName = clickedImg.src.split('-')[0]
    const fullSrc = `${baseName}-full.jpeg`

    const modal = document.createElement('dialog')
    modal.innerHTML = `
      <img src="" alt="">
      <button class="close-viewer">X</button>
    `
    document.body.appendChild(modal)

    const modalImg = modal.querySelector('img')
    const closeBtn = modal.querySelector('.close-viewer')
    modalImg.src = fullSrc
    modalImg.alt = clickedImg.alt

    modal.showModal()

    closeBtn.addEventListener('click', () => {
      modal.close()
    })

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.close()
      }
    })

    modal.addEventListener('close', () => {
      modal.remove()
    })
  })
})
