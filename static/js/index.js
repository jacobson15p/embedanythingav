$(document).ready(function() {
  // Toggle the mobile navbar menu.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Attach any carousels on the page (none by default; add class="carousel results-carousel").
  if (document.querySelector('.carousel')) {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
    });
  }

  bulmaSlider.attach();
});
