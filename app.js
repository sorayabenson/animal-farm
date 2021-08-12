// import functions and grab DOM elements
const dogButton = document.getElementById('dogButton');
const horseButton = document.getElementById('horseButton');
const catButton = document.getElementById('catButton');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');
const catSound = document.getElementById('cat-sound');
const animalCaption = document.getElementById('animal')


dogButton.addEventListener('click', () => {
  dogSound.play();
  animalCaption.textContent = '*baaaaaark*';
});

horseButton.addEventListener('click', () => {
  horseSound.play();
  animalCaption.textContent = '*ney ney*';
});

catButton.addEventListener('click', () => {
  catSound.play();
  animalCaption.textContent = "*where's my knife?*";
})
