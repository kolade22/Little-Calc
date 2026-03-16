let a = document.getElementById("num1");
let b = document.getElementById("num2");
let result = document.getElementById("result");

function div() {
  let answer = Number(a.value) / Number(b.value);
  result.innerHTML = answer;
  a.value = "";
  b.value = "";
}
function multiply() {
  let answer = Number(a.value) * Number(b.value);
  result.innerHTML = answer;
  a.value = "";
  b.value = "";
}
function add() {
  let answer = Number(a.value) + Number(b.value);
  result.innerHTML = answer;
  a.value = "";
  b.value = "";
}
function sub() {
  let answer = Number(a.value) - Number(b.value);
  result.innerHTML = answer;
  a.value = "";
  b.value = "";
}
