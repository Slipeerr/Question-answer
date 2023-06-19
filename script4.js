var slider3Index = 0;
var slides3 = document.getElementsByClassName("slide3");

function showSlide3(n) {
  if (n >= slides3.length) {
    slider3Index = 0;
  } else if (n < 0) {
    slider3Index = slides3.length - 1;
  }

  for (var i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  slides3[slider3Index].style.display = "block";
}

function changeSlide3() {
  slider3Index++;
  showSlide3(slider3Index);
}

showSlide3(slider3Index);

for (var i = 0; i < slides3.length; i++) {
  slides3[i].addEventListener("click", changeSlide3);
}

