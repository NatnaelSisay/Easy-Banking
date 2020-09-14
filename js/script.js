const menuBtn = document.getElementById('menu-btn');
var menuBtnImg = document.getElementById('menu-btn-img');
const img_1 = './images/icon-hamburger.svg';
const img_2 = './images/icon-close.svg';
let state = false;

menuBtnImg.onclick = function () {
  if (!state) {
    menuBtnImg.src = img_2;
    state = true;
  } else {
    menuBtnImg.src = img_1;
    state = false;
  }
};
