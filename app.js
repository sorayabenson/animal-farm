// import functions and grab DOM elements
const dogButton = document.getElementById('dogButton');
const horseButton = document.getElementById('horseButton');
const catButton = document.getElementById('catButton');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');
const catSound = document.getElementById('cat-sound');


dogButton.addEventListener('click', () => {
  dogSound.play();
});

horseButton.addEventListener('click', () => {
  horseSound.play();
});

catButton.addEventListener('click', () => {
  catSound.play();
})
