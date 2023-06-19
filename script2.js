var sliderIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(n) {
  if (n >= slides.length) {
    sliderIndex = 0;
  } else if (n < 0) {
    sliderIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[sliderIndex].style.display = "block";
}

function changeSlide() {
  sliderIndex++;
  showSlide(sliderIndex);
}

showSlide(sliderIndex);

for (var i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", changeSlide);
}


