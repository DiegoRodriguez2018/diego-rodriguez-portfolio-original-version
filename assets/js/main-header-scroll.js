// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    document.getElementById("main-header").style.top = "0";
  } else {
    document.getElementById("main-header").style.top = "-160px";
  }
}


// ACTIVE MENU LINKS
