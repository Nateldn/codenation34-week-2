(function($){

  $('#owl-nk').owlCarousel({
    margin: 10,
    nav: 'true',
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i> "],
    slideSpeed : 200,
    paginationSpeed : 200,
    items : 3,
    loop: 'true',
    mouseDrag: 'true',
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          // breakpoint from 480 up
          480:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  })



}) ( jQuery );
