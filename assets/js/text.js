$(document).ready(function(){
    $('.slider').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    var $st = $('.pagination');
    var $slickEl = $('.slider');
  
    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $st.text(i + ' of ' + slick.slideCount);
    });
  });
  