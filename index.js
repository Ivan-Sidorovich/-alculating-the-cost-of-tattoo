let height, width;

let resultWidth = document.getElementById("result_width");
let resultHeight = document.getElementById("result_height");

document.getElementById("width").addEventListener("pointermove", function () {
    resultWidth.innerHTML = this.value;

})

document.getElementById("height").addEventListener("pointermove", function () {
    resultHeight.innerHTML = this.value;
})

let selectColor = document.getElementById("select_color");
let selectPlece = document.getElementById("select_pleace");

let popUpColor = document.getElementById("popUp_color");
let popUpPleace = document.getElementById("popUp_pleace");

selectColor.addEventListener("pointerup", function () {
    popUpColor.classList.toggle('open_color')
    console.log(this);
});
selectPlece.addEventListener("pointerup", function () {
    popUpPleace.classList.toggle('open_pleace');
    console.log(this)
});