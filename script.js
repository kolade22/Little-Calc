function divisionOpp(params) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result = a / b;
  document.getElementById("result").innerHTML = result;
}
function multiplicationOpp(params) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result = a * b;
  document.getElementById("result").innerHTML = result;
}
function additionOpp(params) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result = a + b;
  document.getElementById("result").innerHTML = result;
}
function subtractionOpp(params) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result = a - b;
  document.getElementById("result").innerHTML = result;
}
