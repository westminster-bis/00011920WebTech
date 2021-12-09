// Getting elements
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".main-nav");
const body = document.querySelector("body");
const readMoreBtn = document.querySelector(".readmore-btn");
const readmoreText = document.querySelector(".readmore-text");
const readmoreIcon = document.querySelector(".readmore-plus");

let isReadMoreClicked = false;

//Click events
hamburger.addEventListener("click", hamburgerClick);
readMoreBtn.addEventListener("click", readmoreClick);


//event funtions
function hamburgerClick(e) {
  e.stopPropagation();
  navigation.classList.toggle("show");
  hamburger.classList.toggle("menu-active");
}

function readmoreClick() {
  readmoreText.classList.toggle("expandText");
}



// Closing menu when clicking outside menu
body.addEventListener("click", () => {
  if (navigation.classList.contains("show")) {
    navigation.classList.remove("show");
    hamburger.classList.remove("menu-active");
  }
});
