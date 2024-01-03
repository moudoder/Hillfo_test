$(document).ready(function () {


  let catalog_sliders = $('.catalog-block-slider-wrapper');
  for (let i = catalog_sliders.length - 1; i >= 0; i--) {
  	let slider = catalog_sliders[i];
  	let arrow_prev = $(slider).find('.arrow-prev');
  	let arrow_next = $(slider).find('.arrow-next');
  	slider = $(slider).find('.catalog-block-slider');

    $(slider).slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: true,
	  prevArrow: $(arrow_prev),
	  nextArrow: $(arrow_next)
	});
  }

  $('.differences-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  })

  $('.differences-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.differences-nav__count').removeClass('active');
    let count_element = $('.differences-nav__count')[nextSlide];
    $(count_element).addClass('active');
  });

  if ($(window).width() < 767) {
   $('.advantages-block').unwrap();
  }

  $('.btn-scaling, .catalog .slick-dots li, .contacts-item, .wrapper-phone a, .footer li, .footer-soc__item, .footer-info__mail, .footer .col-links a, .catalog-arrow').on('click', function() {
    $(this).addClass('active-click');
    let btn = this;
    setTimeout (function() {
      $(btn).removeClass('active-click');
    }, 600)
    
    return false;
  })

  


  $('.differences-nav__count').on('click', function() {
    let index = $('.differences-nav__count').index(this);
    $('.differences-slider').slick('slickGoTo', index);
    $('.differences-nav__count').removeClass('active');
    $(this).addClass('active');
  })


  if ($(window).width() < 760) {
    $('.modal-menu .menu-item-has-children').on('click', function() {
      $(this).toggleClass('visible');
    })

    $('.header-burger').on('click', function() {
      $('.modal-menu').toggleClass('visible');
      $('.header').toggleClass('menu-active');
      return false;
    })
  }
  
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
        $('.header').addClass('header-hidden');
     } else {
        $('.header').removeClass('header-hidden');
     }
     lastScrollTop = st;
  });



  let scroll_counter = 0;
  let first_slider = $('.differences-slide')[0];
  let last_slider = $('.differences-slide')[3];
  let html_body = $('html');
  let true_to_slider = false;
  jQuery(window).scroll(function() {
      var scroll_picca = jQuery('.differences').offset().top;
      scroll_picca = scroll_picca - 50;
      if (jQuery(this).scrollTop() > scroll_picca) {
        
        if (scroll_counter == 0) {
          $('html').addClass('stop-html');
          true_to_slider = true;
          scroll_counter = 1;
        }

        
          $(document).on('wheel', function(e){
            if (true_to_slider) {
              if (e.originalEvent.wheelDelta >= 0) {
                if ($(first_slider).hasClass('slick-active')) {
                  $('html').removeClass('stop-html');
                  scroll_counter = 0;
                  true_to_slider = false;
                }
                else{
                  $('.differences-slider').slick("slickPrev");
                }
              } else {

                if ($(last_slider).hasClass('slick-active')) {
                  $('.hidden-sections').addClass('show');
                  $('html').removeClass('stop-html');
                  true_to_slider = false;
                }
                else{
                  $('.differences-slider').slick("slickNext");
                }

                
              }
            }

           
          });

          


        

      }
      else{
        
      }
  });
})
