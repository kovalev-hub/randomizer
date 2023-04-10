const STARTBUTTON = document.querySelector(`.primary-button`);
const RANDOMIZERRESULT = document.querySelector(`.randomizer-result`);

STARTBUTTON.addEventListener(`click`, function () {
  let randomizerRange = prompt(`Enter randomizer range:`);
  randomizerRange = Number(randomizerRange);
  RANDOMIZERRESULT.innerHTML = Math.floor(Math.random() * randomizerRange);
})
