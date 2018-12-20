(function () {
  let videoCurrent = $('.video-current');
  $('.video .video__aside .video__row').on('click', function() {

    let newVideoSrc = $(this).attr('data-video-src');
    let newVideoPoster = $(this).attr('data-video-poster');
    let countPeople = $(this).attr('data-count-people');
    let videoDate = $(this).attr('data-date');
    let topStatus = $(this).attr('data-top-status');

    videoCurrent.attr('src', newVideoSrc);
    videoCurrent.attr('poster', newVideoPoster);
    $('.countPeople span').html(countPeople);
    $('.videoDate span').html(videoDate);
    $('.topStatus').html(topStatus);

    if ( topStatus === '') {
      $('.topStatus').css('opacity', '0');
    } else {
      $('.topStatus').css('opacity', '1');
    }
    videoCurrent.fadeOut();
    videoCurrent.attr('poster', newVideoPoster);
    videoCurrent.fadeIn();

    videoCurrent[0].play();

    /*отключаем стрим*/
    if (videoCurrent[0].played) {
      $('.stream iframe').attr('src', '');
      $('.stream-wrapper').css('display', 'block');
    }
  });
})();

//   $('.video__viewport').slick({
//     vertical: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     useCSS: false,
//     arrows: false,
//     speed: 500,
//     asNavFor: '.video__aside',
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 vertical: false
//             }
//         }
//     ]
//   });
//   $('.video__aside').slick({
//     arrows: false,
//     vertical: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.video__viewport',
//     dots: false,
//     // draggable: false,
//     // touchMove: false,
//     focusOnSelect: true,
//     verticalSwiping: true,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 vertical: false
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 vertical: false
//             }
//         },
//         {
//             breakpoint: 581,
//             settings: {
//                 vertical: false,
//                 slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 426,
//             settings: {
//                 vertical: true,
//                 slidesToShow: 4
//             }
//         }
//     ]
//   });

//   $('.video__viewport').on('afterChange', function(event, slick, currentSlide){
//     // $(slick.$slides).find('.embed-responsive-item').trigger('pause');
//     myPlayer.pause();
//   });

