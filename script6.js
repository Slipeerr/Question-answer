var slider5Index = 0;
var slides5 = document.getElementsByClassName("slide5");

function showSlide5(n) {
  if (n >= slides5.length) {
    slider5Index = 0;
  } else if (n < 0) {
    slider5Index = slides5.length - 1;
  }

  for (var i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }

  slides5[slider5Index].style.display = "block";
}

function changeSlide5() {
  slider5Index++;
  showSlide5(slider5Index);
}

showSlide5(slider5Index);

for (var i = 0; i < slides5.length; i++) {
  slides5[i].addEventListener("click", changeSlide5);
}