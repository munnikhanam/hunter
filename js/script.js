
$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-circle-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
         arrows:false,
         dots:true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.service-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   vertical:true,
   centerMode:true,
   centerPadding:"0",
   prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow:'<i class="fas fa-chevron-down next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
          arrows:false,
          dots:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



 
  $('.portfolio-left-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   vertical:true,
   centerMode:true,
   centerPadding:"0",
   asNavFor:".portfolio-right-slider",
   prevArrow: '<i class="fas fa-chevron-up prev"></i>',
   nextArrow:'<i class="fas fa-chevron-down next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });
 

  
  $('.portfolio-right-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:"0",
  
   asNavFor:".portfolio-left-slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
      
    ]
  });

   $('.counter').counterUp({
                delay: 10,
                time: 1000
            });


$(document).ready(function(){
    $('.venobox').venobox(); 
});


            // ===============================================

            // =====================================================

  $('.card-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
   centerMode:true,
   centerPadding:"0",
  
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
          nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
          nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });         