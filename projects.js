window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos == 0) {
    document.getElementById("location").style.opacity = "100%";
  } else {
    document.getElementById("location").style.opacity = "0%";
  }
}