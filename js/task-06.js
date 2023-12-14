function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const createBoxes = (amount, container) => {
  const baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    container.appendChild(box);
  }
};

const destroyBoxes = (container) => {
  container.innerHTML = '';
};

const boxesContainer = document.getElementById('boxes');

document.querySelector('[data-create]').addEventListener('click', () => {
  const inputAmount = document.querySelector('input');
  const amount = Number(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount, boxesContainer);
    inputAmount.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes(boxesContainer);
});
