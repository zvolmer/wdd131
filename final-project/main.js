const heroImages = [
  "images/hero1.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg",
  "images/hero6.jpg",
  "images/hero2.jpg",
  "images/hero5.jpg"
];

let currentIndex = 0;
let lastScrollY;
let header;
let menu;

const crossfadeTo = (index) => {
  const hero = document.querySelector(".hero");
  const [currentImg, nextImg] = hero.querySelectorAll("img");
  nextImg.src = heroImages[index];
  nextImg.classList.add("next");
  requestAnimationFrame(() => {
    currentImg.classList.remove("active");
    nextImg.classList.add("active");
  });
  setTimeout(() => {
    hero.removeChild(currentImg);
    currentImg.classList.remove("next", "active");
    hero.appendChild(currentImg);
  }, 500);
};

const nextHero = () => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  crossfadeTo(currentIndex);
};

const prevHero = () => {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  crossfadeTo(currentIndex);
};

const toggleMenu = () => {
  const expanded = menu.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
  const btn = header.querySelector("#menu-toggle");
  btn.setAttribute("aria-expanded", expanded);
  menu.setAttribute("aria-hidden", !expanded);
};

const closeMenuOnClickOutside = (event) => {
  if (
    menu.classList.contains("open") &&
    !menu.contains(event.target) &&
    !header.querySelector("#menu-toggle").contains(event.target)
  ) {
    toggleMenu();
  }
};

const setupSearch = () => {
  const input = document.getElementById("search");
  const items = Array.from(document.querySelectorAll(".merch-item"));
  const noResults = document.getElementById("no-results");
  const contactDiv = document.querySelector(".contact-order");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let anyVisible = false;

    items.forEach((item) => {
      const name = item.dataset.name;
      if (name.includes(q)) {
        item.style.display = "";
        anyVisible = true;
      } else {
        item.style.display = "none";
      }
    });

    noResults.style.display = anyVisible ? "none" : "block";
    contactDiv.style.display = anyVisible ? "" : "none";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const hero = document.querySelector(".hero");
  if (hero) {
    const imgA = document.createElement("img");
    const imgB = document.createElement("img");
    imgA.classList.add("active");
    imgB.classList.add("next");
    hero.appendChild(imgA);
    hero.appendChild(imgB);
    imgA.src = heroImages[currentIndex];

    document.querySelector(".hero-next").addEventListener("click", nextHero);
    document.querySelector(".hero-prev").addEventListener("click", prevHero);
  }

  header = document.querySelector(".site-header");
  menu = document.querySelector("#mobile-menu");
  header.querySelector("#menu-toggle").addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenuOnClickOutside);

  header.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");

  lastScrollY = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const currentY = window.pageYOffset;
    if (currentY > lastScrollY && currentY > 100) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScrollY = currentY;
  });

  if (document.getElementById("search")) {
    setupSearch();
  }
});
