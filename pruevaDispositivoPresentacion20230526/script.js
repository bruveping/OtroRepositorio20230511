let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function checkKey(e) {
  e = e || window.event;

  if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  }
}


document.addEventListener("keydown", checkKey);

/*
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}*/
