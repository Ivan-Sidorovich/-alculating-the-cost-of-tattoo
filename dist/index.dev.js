"use strict";

var height, width;
var resultWidth = document.getElementById("result_width");
var resultHeight = document.getElementById("result_height");
document.getElementById("width").addEventListener("pointermove", function () {
  resultWidth.innerHTML = this.value;
});
document.getElementById("height").addEventListener("pointermove", function () {
  resultHeight.innerHTML = this.value;
});
var selectColor = document.getElementById("select_color");
var selectPlece = document.getElementById("select_pleace");
var popUpColor = document.getElementById("popUp_color");
var popUpPleace = document.getElementById("popUp_pleace");
selectColor.addEventListener("pointerup", function () {
  popUpColor.classList.toggle('open_color');
  console.log(this);
});
selectPlece.addEventListener("pointerup", function () {
  popUpPleace.classList.toggle('open_pleace');
  console.log(this);
});