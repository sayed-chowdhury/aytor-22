$(function () {
    $('.slider').slick({
       arrows: false,
       dots: true,
       dotsClass:'slick-slider-dots',
    });
 })
// New Arrival Slider
$('.new-arrival-slide').slick({
   slidesToShow: 4,
   slidesToScroll: 2,
   prevArrow:'<i class="fa-solid fa-chevron-left new-arrival-arrow"></i>',
   nextArrow:'<i class="fa-solid fa-chevron-right new-arrival-arrow"></i>',
   responsive: [
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
         }
      },
   ]
})

 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
