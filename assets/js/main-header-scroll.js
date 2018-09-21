function toggleNavBar(){
  document.getElementById("navBar").classList.toggle("show");

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
}


