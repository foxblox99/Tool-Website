const cookie = document.querySelector(".cookie");
let clickMultiplier = 1;
let cookieValue = Number(localStorage.getItem("cookieValue")) || 0;
const CookieDisplay = document.querySelector(".cookieDisplay");
const mouseclickSound = new Audio("mouse-clickmp4.mp3");
mouseclickSound.volume = 0.2;
CookieDisplay.textContent = cookieValue;

cookie.addEventListener("click", function () {
  mouseclickSound.currentTime = 0;
  cookieValue = cookieValue + 1 * clickMultiplier;
  console.log(cookieValue);
  localStorage.setItem("cookieValue", cookieValue);
  CookieDisplay.textContent = cookieValue;
  mouseclickSound.play();
});
