const squareLength = document.querySelector("#square-length");
const squareWidth = document.querySelector("#square-width");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const resultSquare = document.querySelector(".result-square");
const divider = document.querySelector("#divider");
const btnDivider = document.querySelector(".btnDivider");
const checkList = document.querySelector("#check-list");
const checkInput = document.querySelector("#check-input");
const checkBtn = document.querySelector("#check-btn");
const checkedBtn = document.querySelector('#checked-btn');


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
const commonDivisor = document.querySelector(".commonDivisor");

commonDivisor.addEventListener("click", () => {
  divisor();
});

const checkListAd = function () {
  // const text = chekInput.value;
  checkList.innerHTML = `<li>${checkInput.value} <button id="check-btn">Удалить</button><button id="checked-btn">Сделано</button></li>`;
  // checkBtn.addEventListener('click', function () {

  // })
  console.log(checkList);
  console.log(checkInput);
};

checkInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    checkListAd();
  }
});
