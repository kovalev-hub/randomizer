const BUTTONSTART = document.querySelector(`.button-randomaize-start`);
const RESULT = document.querySelector(`.randomaizer-result`);

BUTTONSTART.addEventListener(`click`, function () {
  let randomaizerRandge = prompt(`PRESS RANDOMAIZER RANGE:`);
  randomaizerRandge = Number(randomaizerRandge);
  RESULT.innerHTML = Math.floor(Math.random() * randomaizerRandge);
})
