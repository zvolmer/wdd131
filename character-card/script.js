const character = {
  name: "Daniel",
  class: "Roommate",
  level: 5,
  health: 100,
  image: 'daniel.JPEG',
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return `${this.name} took 20 damage!`;
    } else {
      this.health = 0;
      return `${this.name} has died.`;
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    return `${this.name} reached level ${this.level}! (+20 health)`;
  }
};

const imgEl     = document.querySelector('.image');
const nameEl    = document.querySelector('.name');
const classEl   = document.getElementById('class');
const levelEl   = document.getElementById('level');
const healthEl  = document.getElementById('health');
const logEl     = document.getElementById('log');
const atkBtn    = document.getElementById('attacked');
const lvlBtn    = document.getElementById('levelup');

function render() {
  imgEl.src = character.image;
  imgEl.alt = character.name;
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
}

atkBtn.addEventListener('click', () => {
  logEl.textContent = character.attacked();
  render();
});

lvlBtn.addEventListener('click', () => {
  logEl.textContent = character.levelUp();
  render();
});

render();
