var slider4Index = 0;
var slides4 = document.getElementsByClassName("slide4");

function showSlide4(n) {
  if (n >= slides4.length) {
    slider4Index = 0;
  } else if (n < 0) {
    slider4Index = slides4.length - 1;
  }

  for (var i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }

  slides4[slider4Index].style.display = "block";
}

function changeSlide4() {
  slider4Index++;
  showSlide4(slider4Index);
}

showSlide4(slider4Index);

for (var i = 0; i < slides4.length; i++) {
  slides4[i].addEventListener("click", changeSlide4);
}