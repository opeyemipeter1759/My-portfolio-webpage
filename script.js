//1. Get the hamburger icon
const icon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
//You could as well querySelector it
icon.addEventListener("click", () => {
  if (document.querySelector(".mobile-navbar").style.display !== "block") {
    document.querySelector(".hamburger-icon").src = "./assets/icon-close.svg";
    document.querySelector(".mobile-navbar").style.display = "block";
    document.querySelector("body").classList.add("stop-scrolling");
    return;
  }
});
closeIcon.addEventListener("click", () => {
  document.querySelector(".close-icon").src = "./assets/icon-hamburger.svg";
  document.querySelector(".mobile-navbar").style.display = "none";
  document.querySelector("body").classList.remove("stop-scrolling");
});
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
