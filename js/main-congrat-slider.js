(function() {
  /*var slidk =*/
  $('.congratulation-list').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    // swipeToSlide: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          autoplay: false,
          speed: 500
        }
      }
    ]
  });
  

  $('.slick-prev-arrow').click(function(){
    $('.congratulation-list').slick('slickPrev');
  });

  $('.slick-next-arrow').click(function(){
    $('.congratulation-list').slick('slickNext');
  });


  $('.congratulation-list').css('opacity', '1');
  /*
    if ($(window).width() > 1366) {
      let intervalHelper, j;
      $('.slick-next-arrow').on("mousedown", function () {
        $('.congratulation-list')[0].slick.options.speed = 500;
        intervalHelper = setInterval(function () {
          slidk.slick('pause');
          $('.congratulation-list').slick('slickNext');
        }, 1);

      }).on("mouseup", function () {
        $('.congratulation-list')[0].slick.options.speed = 2000;
        slidk.slick('play');
        clearInterval(intervalHelper);
      });
      $('.slick-next-arrow, .slick-prev-arrow').on("mouseenter", function () {
        j = setInterval(function () {
          slidk.slick('pause');
        }, 1)
      });
      $('.slick-next-arrow, .slick-prev-arrow').on("mouseout", function () {
        slidk.slick('play');
        clearInterval(j);
      });


      $('.slick-prev-arrow').on("mousedown", function () {
        $('.congratulation-list')[0].slick.options.speed = 500;
        intervalHelper = setInterval(function () {
          slidk.slick('pause');
          $('.congratulation-list').slick('slickPrev');
        }, 1)

      }).on("mouseup", function () {
        $('.congratulation-list')[0].slick.options.speed = 2000;
        slidk.slick('play');
        clearInterval(intervalHelper);
      });
    }
    let mobileIntervalHelper;
    if ($(window).width() <= 1366) {
      $('.slick-next-arrow').on("click", function() {
        clearInterval(mobileIntervalHelper);
        $('.congratulation-list')[0].slick.options.speed = 500;
        slidk.slick('pause');
        $('.congratulation-list').slick('slickNext');
        mobileIntervalHelper = setTimeout(function () {
          $('.congratulation-list')[0].slick.options.speed = 2000;
          // slidk.slick('play');
        }, 2000)

      });

      $('.slick-prev-arrow').on("click", function() {
        clearInterval(mobileIntervalHelper);
        $('.congratulation-list')[0].slick.options.speed = 500;
        slidk.slick('pause');
        $('.congratulation-list').slick('slickPrev');
        mobileIntervalHelper = setTimeout(function () {
          $('.congratulation-list')[0].slick.options.speed = 2000;
          // slidk.slick('play');
        }, 2000)

      });


    }

    window.addEventListener("resize", function() {
      if ($(window).width() > 1366) {
        let intervalHelper, j;
        $('.slick-next-arrow').on("mousedown", function () {
          $('.congratulation-list')[0].slick.options.speed = 500;
          intervalHelper = setInterval(function () {
            slidk.slick('pause');
            $('.congratulation-list').slick('slickNext');
          }, 1);

        }).on("mouseup", function () {
          $('.congratulation-list')[0].slick.options.speed = 2000;
          slidk.slick('play');
          clearInterval(intervalHelper);
        });
        $('.slick-next-arrow, .slick-prev-arrow').on("mouseenter", function () {
          j = setInterval(function () {
            slidk.slick('pause');
          }, 1)
        });
        $('.slick-next-arrow, .slick-prev-arrow').on("mouseout", function () {
          slidk.slick('play');
          clearInterval(j);
        });


        $('.slick-prev-arrow').on("mousedown", function () {
          $('.congratulation-list')[0].slick.options.speed = 500;
          intervalHelper = setInterval(function () {
            slidk.slick('pause');
            $('.congratulation-list').slick('slickPrev');
          }, 1)

        }).on("mouseup", function () {
          $('.congratulation-list')[0].slick.options.speed = 2000;
          slidk.slick('play');
          clearInterval(intervalHelper);
        });
      }
      let mobileIntervalHelper;
      if ($(window).width() <= 1366) {
        $('.slick-next-arrow').on("click", function() {
          clearInterval(mobileIntervalHelper);
          $('.congratulation-list')[0].slick.options.speed = 500;
          slidk.slick('pause');
          $('.congratulation-list').slick('slickNext');
          mobileIntervalHelper = setTimeout(function () {
            $('.congratulation-list')[0].slick.options.speed = 2000;
            // slidk.slick('play');
          }, 2000)

        });

        $('.slick-prev-arrow').on("click", function() {
          clearInterval(mobileIntervalHelper);
          $('.congratulation-list')[0].slick.options.speed = 500;
          slidk.slick('pause');
          $('.congratulation-list').slick('slickPrev');
          mobileIntervalHelper = setTimeout(function () {
            $('.congratulation-list')[0].slick.options.speed = 2000;
            // slidk.slick('play');
          }, 2000)

        });


      }
    });*/
  // On before slide change
  // $('.congratulation-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   $('.slick-prev-arrow').click(function(){
  //     $('.congratulation-list').slick('slickNext');
  //   });
  //
  //   $('.slick-next-arrow').click(function(){
  //     $('.congratulation-list').slick('slickPrev');
  //   });
  // });

  // On before slide change
  // $('.congratulation-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   $('.slick-prev-arrow').click(function(){
  //     $('.congratulation-list').slick('slickNext');
  //   });
  //
  //   $('.slick-next-arrow').click(function(){
  //     $('.congratulation-list').slick('slickPrev');
  //   });
  // });
})();