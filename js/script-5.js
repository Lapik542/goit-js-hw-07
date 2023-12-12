function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
document.querySelector(".change-color").addEventListener("click", () => {
   const body = document.body;
   const colorSpan = document.querySelector(".color");
   const randomHexColor = getRandomHexColor();
   body.style.backgroundColor = randomHexColor;
   colorSpan.textContent = randomHexColor;
});