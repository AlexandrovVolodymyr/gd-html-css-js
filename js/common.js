$(document).ready(function () {
  /*iframe height*/
  let wIframe = $('.main-page-stream').width();
  let hIframe = wIframe / 1.7777;
  $('.main-page-stream').css('height', hIframe);

  window.addEventListener("resize", function() {
    let wIframe = $('.main-page-stream').width();
    let hIframe = wIframe / 1.7777;
    $('.main-page-stream').css('height', hIframe);
  });
  /*iframe height*/

  //custom scroll video
  $(".video__aside").mCustomScrollbar({
    theme: "light-thick",
    axis:"y"
  });
  if ((window.outerWidth < 1200) && (window.outerWidth > 767)) {
    $(".video__aside").mCustomScrollbar("destroy");
    $(".video__aside").mCustomScrollbar({
      theme: "light-thick",
      axis:"x"
    });
  }
  if (window.outerWidth < 768) {
    $(".video__aside").mCustomScrollbar("destroy");
    $(".video__aside").mCustomScrollbar({
      theme: "light-thick",
      axis:"y"
    });
  }

  $('.video__aside').css('opacity', 1);


  window.addEventListener("resize", function() {
    if (window.outerWidth > 1200) {
      $(".video__aside").mCustomScrollbar("destroy");
      $(".video__aside").mCustomScrollbar({
        theme: "light-thick",
        axis:"y"
      });
    }
  }, false);

  window.addEventListener("resize", function() {
    if ((window.outerWidth < 1200) && (window.outerWidth > 767)) {
      $(".video__aside").mCustomScrollbar("destroy");
      $(".video__aside").mCustomScrollbar({
        theme: "light-thick",
        axis:"x"
      });
    }
  });

  window.addEventListener("resize", function() {
    if (window.outerWidth < 768) {
      $(".video__aside").mCustomScrollbar("destroy");
      $(".video__aside").mCustomScrollbar({
        theme: "light-thick",
        axis:"y"
      });
    }
  });
  //custom scroll video

  $('.header-top__right .header__search').on('click', function(e) {
    $(this).hide();
    $(this).next().show(100);

    $(this).addClass('active');
    e.stopPropagation();
  });
  $('.header__search-mobile').on('click', function(e) {
    $(this).hide();
    $(this).next().show(100);

    $(this).addClass('active');
    e.stopPropagation();
  });

  $('.search-part__input, .search-orange').on('click', function(e) {
    e.stopPropagation();
  });

  $(window).on('click', function() {
    if ($('.header-top__right .header__search').hasClass('active')) {
      $('.search-part').hide();
      $('.header-top__right .header__search').show();

      $('.header-top__right .header__search').removeClass('active');
    }
  });
  $(window).on('click', function() {
    if ($('.header-bottom .header__search').hasClass('active')) {
      $('.search-part').hide();
      $('.header-bottom .header__search').show();

      $('.header-bottom .header__search').removeClass('active');
    }
  });


  $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
  });

  $('#menuModal .close').on('click', function() {
      $('#nav-icon1').removeClass('open');
  });

  $('.hashtag').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('hashtag-active');
  });

  function updateStreamNeed() {
    $.get("https://metam4m.hostingradio.ru/small.json", function(response) {
      $('.stream-title-need').text(response.title);
      if (response.cover === 'https://metam4m.hostingradio.ru/covers/no_cover.jpg') {
        $('.stream-cover-need').css('display', 'none');
        $('.stream-cover-need').parent().addClass('player-avatar');
      } else {
        $('.stream-cover-need').attr('src', response.cover);
        $('.stream-cover-need').css('display', 'block');
        $('.stream-cover-need').parent().remove('player-avatar');
      }
      $('.stream-cover-need').css('opacity', '1');
      setTimeout(function () {
        updateStreamNeed();
      }, 5000);
    }, "json");
  }

  if ($('.stream-cover-need').length > 0) {
    updateStreamNeed();
  }

  /******svg map*****/

  $('.content-main-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="slick-prev"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></span>',
    nextArrow: '<span class="slick-next"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false
        }
      }
  	]
  });

  $('.content-main-slider').css('opacity', '1');

});
/* congratulations */
$('.congratulation-list__item--text').on('click', function () {
    $('.congratulation__text-name').html($(this).attr('data-attr'));
});

/*let i = 0;

$('.congratulation-list__item--text').each(function() {
    i++;
    $(this).attr('data-id', i);
});*/

$('.congratulation-list__item span').on('click', function () {
   // $('.input-congrat').val($(this).attr('data-id'));
    $('.input-congrat').attr('value', $(this).attr('data-id'));
    $('.input-congrat-name').attr('value', $(this).text());

    console.log('input value: ' + $('.input-congrat').val());

});

$('.fancybox-slide--html .fancybox-close-small').click(function () {
    $.fancybox.close();
});

/*function congratModal() {
    $('.congratulation__send').on('click', function (e) {
        e.preventDefault();

        $.fancybox.close({
            src: '#congratModal'
        });

        setTimeout(function () {
            $.fancybox.open({
                src: '#congratModalResponse'
            });
        }, 1000);

        $.ajax({
            type: "POST",
            // url: url,
            data: $('.input-congrat').val(),
            success: function () {
                // $.fancybox.close({
                //     src: '#congratModal'
                // });
                //
                // setTimeout(function () {
                //     $.fancybox.open({
                //         src: '#congratModalResponse'
                //     });
                // }, 1000);
            },
            // dataType: dataType
        });
    });
}
congratModal();*/

function closeModal() {
    $.fancybox.close({
        src: '#congratModal'
    });
    $.fancybox.open({
        src: '#congratModalResponse'
    });
}
/*/ congratulations*/


/* написать в эфир */
/*function closeEphir() {
    $('.form-write__send').on('click', function (e) {
        e.preventDefault();

        $.fancybox.close({
            src: '#writeModal'
        });

        setTimeout(function () {
            $.fancybox.open({
                src: '#writeModalResponse'
            });
        }, 1000);
    })
}
closeEphir();*/
/*/ написать в эфир */

function closeWrite() {
    $.fancybox.close({
        src: '#writeModal'
    });
    $.fancybox.open({
        src: '#writeModalResponse'
    });
}