/*/ script do slide completo /*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
setInterval(plusSlides(1), 1000)

///////////////// menu areaa///////////////////

function menu() {
  let menu = document.querySelector('.areamenugeral')
  if (menu.classList.contains('opened')=== true) {
     menu.classList.remove('opened')
     menu.classList.add('closed')      
  } else {
     menu.classList.remove('closed')
     menu.classList.add('opened')
  }
}

function mousecima() {
  let buton = document.querySelector('.dropdown')
  if (buton.classList.contains('dropmenuclosed')=== true) {
    buton.classList.remove('dropmenuclosed')
    buton.classList.add('dropmenuopened')      
  } else {
     buton.classList.remove('dropmenuopened')
     menu.classList.add('dropmenuclosed')
  }
}
function mousesai() {
  let buton = document.querySelector('.dropdown')
  if (buton.classList.contains('dropmenuopened')=== true) {
    buton.classList.remove('dropmenuopened')
    buton.classList.add('dropmenuclosed')      
  } else {
     buton.classList.remove('dropmenuopened')
     menu.classList.add('dropmenuclosed')
  }
}
function clicksubmenu() {
  let buton = document.querySelector('.dropdown')
  if (buton.classList.contains('dropmenuclosed')=== true) {
    buton.classList.remove('dropmenuclosed')
    buton.classList.add('dropmenuopened')      
  } else {
     buton.classList.remove('dropmenuopened')
     menu.classList.add('dropmenuclosed')
  }
}