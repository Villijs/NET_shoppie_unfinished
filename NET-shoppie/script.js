$(document).ready(function(){

  $("#off-logo").hide().delay(700).show(800);
  $("#slide").hide().slideDown(600);
  $("#slide2").hide().delay(400).slideDown(600);
  $("#delay-butt").hide().delay(1500).slideDown(500);

});

var slideIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("slide-pic");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 1500); }


