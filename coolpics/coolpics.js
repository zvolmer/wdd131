document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('nav');
  const gallery = document.querySelector('.gallery');

  function toggleMenu() {
    nav.classList.toggle('hide');
  }
  menuButton.addEventListener('click', toggleMenu);

  function handleResize() {
    if (window.innerWidth >= 1000) {
      nav.classList.remove('hide');
      menuButton.style.display = 'none';
    } else {
      nav.classList.add('hide');
      menuButton.style.display = 'block';
    }
  }
  window.addEventListener('resize', handleResize);
  handleResize();

  gallery.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (!img) return;
    const base = img.src.split('-')[0];
    const fullSrc = `${base}-full.jpeg`;
    const dialog = document.createElement('dialog');
    dialog.classList.add('viewer');
    dialog.innerHTML = `
      <img src="${fullSrc}" alt="${img.alt}">
      <button class="close-viewer" aria-label="Close viewer">✕</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
    dialog.querySelector('.close-viewer').addEventListener('click', () => {
      dialog.close();
    });
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
    dialog.addEventListener('close', () => {
      dialog.remove();
    });
  });
});
