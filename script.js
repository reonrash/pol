$(document).ready(function () {
  TweenMax.to(".overlay", 1.5, {
    delay: 0.5,
    left: "-100%",
    ease: Expo.easeInOut,
  });
  var tl = new TimelineMax({ paused: true });

  tl.to(".nav-overlay", 0.3, {
    y: "100%",
    opacity: 1,
    delay: -0.3,
    ease: Expo.easeInOut,
  });
  tl.from("nav ul li", 0.6, {
    x: "20%",
    left: 30,
    opacity: 0,
    ease: Power2.easeInOut,
    stagger: 0.1,
  });
  tl.reverse();
 

  $(".menu-icon-container").on("click", function (event) {
    $(".menu-icon").toggleClass("active-menu");
    tl.reversed(!tl.reversed());
  });
});
