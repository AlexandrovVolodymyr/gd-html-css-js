(function () {

  let podkast = $('.podkast');
  let headerStream = document.querySelector('.header-audio');
  let videoMainPage = $('.item-big .embed-responsive-item');
  const originalSourceUrl = 'http://m4m128.hostingradio.ru:8074/m4m128.mp3';

  $('.icon-default').on('click', function () {
    playAll(this);
  });

  $(videoMainPage).on('play', function() {
    //Actions when video play selected
    headerStream.pause();
    $('.icon-default').removeClass('icon-pause');
    $('.icon-default').addClass('icon-play');
  });

  function playAll(that) {
    if ($(that).hasClass('icon-play')) {

      $('.icon-default').removeClass('icon-pause');
      $('.icon-default').addClass('icon-play');

      $(that).addClass('icon-pause');
      $(that).removeClass('icon-play');

      if (!headerStream.getAttribute('src')) {
        headerStream.setAttribute('src', originalSourceUrl);
        headerStream.load(); // This restarts the stream download
      }
      headerStream.play();

      if (headerStream.play) {
        videoMainPage.trigger('pause');
      }
    } else {
      $(that).removeClass('icon-pause');
      $(that).addClass('icon-play');

      headerStream.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        headerStream.load(); // This stops the stream from downloading
      });
    }
  }
})();