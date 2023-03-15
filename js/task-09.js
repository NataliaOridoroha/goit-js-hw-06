const button = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E","F",];



button.addEventListener("click", () => {
  let HexColor = getRandomHexColor();
  document.body.style.backgroundColor = HexColor;
  color.textContent = HexColor;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

