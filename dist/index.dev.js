"use strict";

var height = 5,
    width = 5,
    square = height * width;
var resultWidth = document.getElementById("result_width");
var resultHeight = document.getElementById("result_height");
var result = '';
var parameters = {
  popUp_color: undefined,
  popUp_pleace: undefined
};

function changingWidth() {
  resultWidth.innerHTML = this.value;
  width = this.value;
  square = height * this.value;
  renderPrice();
}

function changingHeight() {
  resultHeight.innerHTML = this.value;
  height = this.value;
  square = this.value * width;
  renderPrice();
}

var $height = document.getElementById("height");
var $width = document.getElementById("width");
$width.addEventListener("pointerdown", function () {
  $width.addEventListener("pointermove", changingWidth);
});
$height.addEventListener("pointerdown", function () {
  $height.addEventListener("pointermove", changingHeight);
});
$width.addEventListener("pointerup", function () {
  $width.removeEventListener("pointermove", changingWidth);
});
$height.addEventListener("pointerup", function () {
  $height.removeEventListener("pointermove", changingHeight);
});
var selectColor = document.getElementById("select_color");
var selectPlece = document.getElementById("select_pleace");
var popUpColor = document.getElementById("popUp_color");
var popUpPleace = document.getElementById("popUp_pleace");
selectColor.addEventListener("pointerup", function () {
  popUpColor.classList.toggle('popUp_color_open');
  document.getElementById('popUp_color_i').classList.toggle('open_i');
});
selectPlece.addEventListener("pointerup", function () {
  popUpPleace.classList.toggle('popUp_pleace_open');
  document.getElementById('popUp_pleace_i').classList.toggle('open_i');
});

(function rendering() {
  var elements = document.querySelectorAll(".popUp_p");
  elements.forEach(function (i) {
    i.addEventListener("pointerup", function () {
      i.parentElement.classList.toggle("".concat(i.parentElement.id, "_open"));
      document.getElementById("".concat(i.parentElement.id, "_p")).innerHTML = i.innerHTML;
      parameters[i.parentElement.id] = this.id;
      renderPrice();
      document.getElementById("".concat(i.parentElement.id, "_i")).classList.toggle('open_i');
    });
  });
})();

var $span = document.getElementById("finaly_price_span");
var $message = document.getElementById("after_result");

function renderPrice() {
  if (!parameters.popUp_color || !parameters.popUp_pleace) result = '---';else if (square <= 16) {
    result = Math.ceil(2500 * parameters.popUp_color / 50) * 50;
    $message.style.display = 'block';
  } else {
    result = Math.ceil(((square - 16) * parameters.popUp_pleace + 2500) * parameters.popUp_color / 50) * 50;
    $message.style.display = 'block';
  }
  $span.innerHTML = result;
}

;
renderPrice();
document.getElementById('detailed_p').addEventListener("pointerup", function () {
  document.getElementById('detailed_i').classList.toggle('fa-plus');
  document.getElementById('rules').classList.toggle('open_rules');
});