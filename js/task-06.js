function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById('boxes');
  const baseSize = 30;
  const fragment = document.createDocumentFragment(); // Створюємо фрагмент для оптимізації додавання елементів

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
};

const destroyBoxes = () => {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
};

document.querySelector('[data-create]').addEventListener('click', () => {
  const inputAmount = document.querySelector('input');
  const amount = Number(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});
