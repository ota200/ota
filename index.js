window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.animation = "0";
  } else {
    document.getElementById("nav").style.animation = "1";

  }
}
