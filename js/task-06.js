const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

const boxesContainer = document.getElementById('boxes'); 

const createBoxes = (amount) => {
  const baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

document.querySelector('[data-create]').addEventListener('click', () => {
  const inputAmount = document.getElementById('inputAmount');
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
