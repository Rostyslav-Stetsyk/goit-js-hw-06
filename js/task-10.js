function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  const boxes = []
  for (let i = 1; i <= amount; i+= 1) {
    boxes.push(
      `<div style="
      width: ${30 + (10 * i)}px; 
      height: ${30 + (10 * i)}px; 
      background-color: ${getRandomHexColor()}">
      </div>`)
  }
  return refs.boxes.insertAdjacentHTML('afterbegin', boxes.join(''));
};

const refs = {
  boxes: document.querySelector('div#boxes'),
  inputNumbers: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
};

refs.buttonCreate.addEventListener('click', onButtonCreate);
refs.buttonDestroy.addEventListener('click', onButtonDestroy);

function onButtonCreate() {
  createBoxes(Number(refs.inputNumbers.value));
}

function onButtonDestroy() {
  refs.boxes.innerHTML = ''
}