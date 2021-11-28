/* Za otvaranje ukusa pica, sendvica i palacinki, JQUERY padajuci meni */
$(document).ready(function(){
    $("#pice").click(function(){
      $("#pice_ukusi").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#sendvici").click(function(){
      $("#sendvici_ukusi").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#palacinke").click(function(){
      $("#palacinke_ukusi").slideToggle("slow");
    });
  });

/*slideshow na pocetnoj stranici*/
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tackica");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Menja sliku svake 2 sekunde
}
showSlides();
