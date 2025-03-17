
const modalImg = document.querySelector(".popup_case");
const modalElem = document.querySelector(".section_popup");


modalImg.onclick = function () {
    modalElem.style.display = "block";
}


modalElem.onclick = function () {
    modalElem.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modalElem) {
        modalElem.style.display = "none";
    }
}




















