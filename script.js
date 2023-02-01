const BUTTONSTART = document.querySelector(`.button-randomizer-start`);
const RESULT = document.querySelector(`.randomizer-result`);

BUTTONSTART.addEventListener(`click`, function () {
  let randomizerRandge = prompt(`Enter randomizer range:`);
  randomizerRandge = Number(randomizerRandge);
  RESULT.innerHTML = Math.floor(Math.random() * randomizerRandge);
})
