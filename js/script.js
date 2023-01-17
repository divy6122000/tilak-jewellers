function myFunction(x) {
  let responsive = document.querySelector('.responsive');
  if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "yellow";
    responsive.classList.add('bg-dark');
    responsive.classList.remove('bg-transparent');

  } else {
    //   document.body.style.backgroundColor = "pink";
    responsive.classList.remove('bg-dark');
    responsive.classList.add('bg-transparent');
  }
}

var x = window.matchMedia("(max-width: 990px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// Brand script 
$(document).ready(function () {
  $("#brand-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: true,
    navigationText: ["<", ">"],
    autoPlay: true
  });
});