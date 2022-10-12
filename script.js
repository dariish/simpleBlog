const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("slide");

const slidesArr = Array.from(slides);
const dotsArr = Array.from(dots);

console.log(dotsArr);

for (let i = 1; i < slidesArr.length; i++) {
  slidesArr[i].style.display = "none";
}

function currentSlide(n) {
  if (!dotsArr[n].classList.contains("active")) {
    for (let i = 0; i < 4; i++) {
      dotsArr[i].classList.remove("active");
      slidesArr[i].style.display = "none";
    }

    dotsArr[n].classList.add("active");
    slidesArr[n].style.display = null;
  }
}

//Automate Slide
let index = 0;
setInterval(() => {
  currentSlide(index);
  index++;
  if (index > slidesArr.length - 1) {
    index = 0;
  }
}, 8000);
