const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

const createBoxes = (amount) => {
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  let currentSize = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    currentSize += 10;
  }
  boxesContainer.append(...elements);
  input.value = '';
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  const amountValue = input.valueAsNumber;
  destroyBoxes();
  createBoxes(amountValue);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});