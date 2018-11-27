const navBarButton = document.querySelector("#navBarButton")

console.log('navBarButton',': ', navBarButton);

navBarButton.addEventListener('click',toggleNavBar)

function toggleNavBar(e) {
  e.preventDefault()
  if(navBar.style.visibility == "hidden"){
    navBar.style.visibility = "visible"
  }else{
    navBar.style.visibility = "hidden"
  }
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {  
  const headerTop =  document.documentElement.scrollTop
  // console.log('headerTop',': ', headerTop);
  const flag = 550
  if (headerTop > flag) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
}


