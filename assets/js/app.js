$(function () {

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.backToTop').fadeIn(1000)
    } else {
      $('.backToTop').fadeOut(1000)
    }
  })

  $('.backToTop').on('click', function () {
    $('html,body').animate({
      scrollTop:0,
    },1000)
  })

    $('.toggle-button').on('click', function () {
      $('.toggle-brand').toggleClass('open');
      $('.toggle-navbar').toggleClass('open');
    })
  
  
    /* our blog slider */
    $('.blog-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.our-arrow-l'),
      nextArrow: $('.our-arrow-r'),
      dots: false,
      speed: 300,
      autoplay: false,
      fade: false,
      centerMode: true,
      centerPadding: '0px',
    });
    /* our blog slider */
  
    /* banner slider */
  
    $('.banner-slider').slick({
      prevArrow: '<p class="banner-arrow-l"><span class="banner-icons "><a ><i class="fa fa-chevron-left prv-arrow"></i></a></span></p>',
      nextArrow: '<p class="banner-arrow-r"><span class="banner-icons "><a ><i class="fa fa-chevron-right nxt-arrow"></i></a></span></p>',
      dots: false,
      autoplay: true,
      speed: 1000,
      fade: true,
    })
  
  
    /* banner slider */
  
    /* service slider */
    $('.service-slider').slick({
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /* service slider */

    /* portfolio slider */
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: $('.portfolio-arrow-l'),
    nextArrow: $('.portfolio-arrow-r'),
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
          }
  },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
  },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
  }
  ]
  });
  /* portfolio slider */


  /* testimonial slider */
  $('.testimonial-info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-img-slider'
  });
  
  $('.testimonial-img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-info-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    prevArrow: $('.testimonial-arrow-l'),
    nextArrow: $('.testimonial-arrow-r')
  });
  /* testimonial slider */

  /* brand slider */
  $('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    prevArrow: $('.brand-arrow-l'),
    nextArrow: $('.brand-arrow-r'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* brand slider */

    /* our team slider */
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: $('.our-arrow-l'),
    nextArrow: $('.our-arrow-r'),
    speed: 300

  });
  /* our team slider */


/* our blog slider */
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.our-arrow-l'),
  nextArrow: $('.our-arrow-r'),
  dots: false,
  speed: 300,
  autoplay: true,
  fade: false,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  
              }
  },
          {
              breakpoint: 600,
              settings: {
                  centerMode:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
  },
          {
              breakpoint: 480,
              settings: {
                  centerMode:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
  }
]
});

$('.counter_number').counterUp({
  time: 3000
});

/* about page js */

$('.team_slick').slick({
  infinite: true,
  autoplay: false,
  dots: false,
  arrows:true,
  nextArrow:$(".nxt-arrow"),
  prevArrow:$(".prv-arrow"),
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
          }
},
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
},
      {
          breakpoint: 650,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
}
]
});
// coming soon js 
    
/*$('.comingsoon_row').countdown('2022/10/10', function(event) {
  var $this = $(this);
  $this.find('#day').html(event.strftime('<span>%D</span>'));
  $this.find('#hour').html(event.strftime('<span>%H</span>'));
  $this.find('#month').html(event.strftime('<span>%M</span>'));
  $this.find('#second').html(event.strftime('<span>%S</span>'));
});*/

$('#offer_count_down').countdown('2022/02/25', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="count_down_item"><span>%D</span> <span>days</span></div> '
    + '<div class="count_down_item"><span>%H</span> <span>hrs</span></div> '
    + '<div class="count_down_item"><span>%M</span> <span>mins</span></div> '
    + '<div class="count_down_item"><span>%S</span> <span>secs</span></div> '));
});


})
