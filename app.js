// import functions and grab DOM elements
const dogButton = document.getElementById('dogButton');
const horseButton = document.getElementById('horseButton');
const catButton = document.getElementById('catButton');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');
const catSound = document.getElementById('cat-sound');
const animalCaption = document.getElementById('animal')

// the powerhouse function
const soundAndSubtitle = (sound, subtitle) => {
  sound.play();
  animalCaption.textContent = subtitle;
}

// event listeners
dogButton.addEventListener('click', () => {
  soundAndSubtitle(dogSound, '*baaaaaark*');
});

horseButton.addEventListener('click', () => {
  soundAndSubtitle(horseSound, '*ney ney*');
});

catButton.addEventListener('click', () => {
  soundAndSubtitle(catSound, "*where's my knife?*");
})

//keydown activity
document.addEventListener('keydown', (e) => {
  e.key === 'd' ? soundAndSubtitle(dogSound, '*baaaaaark*')
  : e.key === 'h' ? soundAndSubtitle(horseSound, '*ney ney*')
  : e.key === 'c' ? soundAndSubtitle(catSound, `*where's my knife?*`)
  : animalCaption.textContent = 'hi';
})