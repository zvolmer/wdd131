const heroImages = [
  'images/hero1.jpg',
  'images/hero3.jpg',
  'images/hero4.jpg',
  'images/hero6.jpg',
  'images/hero2.jpg',
  'images/hero5.jpg'
];

let currentIndex = 0;
let lastScrollY;
let header;
let menu;

function crossfadeTo(index) {
  const hero = document.querySelector('.hero');
  const [currentImg, nextImg] = hero.querySelectorAll('img');
  nextImg.src = heroImages[index];
  nextImg.classList.add('next');
  requestAnimationFrame(() => {
    currentImg.classList.remove('active');
    nextImg.classList.add('active');
  });
  setTimeout(() => {
    hero.removeChild(currentImg);
    currentImg.classList.remove('next', 'active');
    hero.appendChild(currentImg);
  }, 500);
}

function nextHero() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  crossfadeTo(currentIndex);
}

function prevHero() {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  crossfadeTo(currentIndex);
}

function toggleMenu() {
  menu.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
}

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const imgA = document.createElement('img');
  const imgB = document.createElement('img');
  imgA.classList.add('active');
  imgB.classList.add('next');
  hero.appendChild(imgA);
  hero.appendChild(imgB);
  imgA.src = heroImages[currentIndex];

  document.querySelector('.hero-next').addEventListener('click', nextHero);
  document.querySelector('.hero-prev').addEventListener('click', prevHero);

  header = document.querySelector('.site-header');
  menu = document.querySelector('.mobile-menu');
  document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

  lastScrollY = window.pageYOffset;
  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    });
  }
});
