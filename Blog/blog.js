const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: 'Belgariad Book One: Pawn of Prophecy',
    date: 'Feb 12, 2022',
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf -- a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
    imgAlt: 'Book cover for Pawn of Prophecy',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  }
];

function buildArticles() {
  const reviewsContainer = document.querySelector('#reviews');
  reviewsContainer.innerHTML = '';

  articles.forEach(item => {
    const articleEl = document.createElement('article');
    articleEl.classList.add('review');

    const copy = `
      <div class="review-meta">
        <time>${item.date}</time>
        <span class="ages">${item.ages}</span>
        <span class="genre">${item.genre}</span>
        <div class="rating">${item.stars}</div>
      </div>
      <div class="review-body">
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.imgSrc}" alt="${item.imgAlt}">
        </figure>
        <p>${item.description} <a href="#">Read More…</a></p>
      </div>
    `;

    articleEl.innerHTML = copy.trim();
    reviewsContainer.append(articleEl);
  });
}

document.addEventListener('DOMContentLoaded', buildArticles);
