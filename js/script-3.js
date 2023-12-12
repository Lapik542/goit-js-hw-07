const inputElement = document.querySelector('#name-input');
const outputElement  = document.querySelector('#name-output');

inputElement.addEventListener('input', () => {
   if(inputElement.value.trim() === '') {
      outputElement.textContent = 'Anonymous'
   } else {
      outputElement.textContent = inputElement.value;
   }
})