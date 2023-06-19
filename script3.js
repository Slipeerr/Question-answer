var slider2Index = 0;
var slides2 = document.getElementsByClassName("slide2");

function showSlide2(n) {
  if (n >= slides2.length) {
    slider2Index = 0;
  } else if (n < 0) {
    slider2Index = slides2.length - 1;
  }

  for (var i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slides2[slider2Index].style.display = "block";
}

function changeSlide2() {
  slider2Index++;
  showSlide2(slider2Index);
}

showSlide2(slider2Index);

for (var i = 0; i < slides2.length; i++) {
  slides2[i].addEventListener("click", changeSlide2);
}