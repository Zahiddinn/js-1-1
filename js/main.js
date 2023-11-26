const squareLength = document.querySelector("#square-length");
const squareWidth = document.querySelector("#square-width");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const resultSquare =document.querySelector('.result-square');

// squareLength.addEventListener("change", slValue);
// squareWidth.addEventListener("change", swValue);

// function slValue(e) {
//   const sL = e.target.value;
//   console.log(sL);
// }
// function swValue(e) {
//   const sW = e.target.value;
//   console.log(sW);
// }
btn.addEventListener("click", () => {
  const sL = squareLength.value;

  const sW = squareWidth.value;

  const square = 'Плошадь: '+(sL * sW * 2);
  const perimeterRes = 'Периметр: '+((sL*sL) + (sW*sW));
  console.log(square);
  document.querySelector('.result-square').textContent = square;
  document.querySelector('.perimeter').textContent = perimeterRes;
});

// box = document.childElementCount('h3')
