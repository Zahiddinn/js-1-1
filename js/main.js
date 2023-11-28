const squareLength = document.querySelector("#square-length");
const squareWidth = document.querySelector("#square-width");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const resultSquare = document.querySelector(".result-square");
const divider = document.querySelector("#divider");
const btnDivider = document.querySelector(".btnDivider");

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
  const sL = +squareLength.value;

  const sW = +squareWidth.value;
  console.log(sL);

  const square = "Площадь: " + sL * sW;
  const perimeterRes = "Периметр: " + (sL + sL + (sW + sW));
  console.log(square);
  console.log(perimeterRes);
  document.querySelector(".result-square").textContent = square;
  document.querySelector(".perimeter").textContent = perimeterRes;
});

// box = document.childElementCount('h3'
function prime(n) {
  let result = [1, n];
  for (let i = 2; i < Math.pow(n, 0.5); i++) {
    if (n % i == 0) {
      result.push(i);
      result.push(n / i);
    }
  }
  return result.sort((a, b) => a - b);
}

btnDivider.addEventListener("click", () => {
  const num = divider.value;
  console.log(prime(num));
  const resul = prime(num);
  document.querySelector(".result-divider").textContent = resul;
});

function divisor() {
  let firstNumber = document.querySelector("#first-number").value;
  let secondNumber = document.querySelector("#second-number").value;

  while (firstNumber != secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber - secondNumber;
      console.log(firstNumber + "a");
    } else {
      secondNumber = secondNumber - firstNumber;
      console.log(secondNumber + "b");
    }
  }
  let gcd = firstNumber;
 console.log(gcd);
 return gcd;

}
 const commonDivisor = document.querySelector(".commonDivisor")

 commonDivisor.addEventListener("click", () => {
  divisor()
   
 })
