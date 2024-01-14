/* adds event listeners on open and close navbar buttons */

let navigationBar = document.querySelector(".nav-bar");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function() {
    navigationBar.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    navigationBar.classList.remove("active");
});