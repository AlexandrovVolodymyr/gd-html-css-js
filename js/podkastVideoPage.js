(function () {

  (function () {
  let video = $('.embed-responsive-item');
  const originalSourceUrl = 'http://m4m128.hostingradio.ru:8074/m4m128.mp3';

  $('.icon-default').on('click', function () {
    playAll(this);
  });

  video[0].loop = true;
  
  //get HTML5 video time duration

  // video.on('loadedmetadata', function() {
  //     $('.progressTime .duration').text(video[0].duration);
  // });
  //
  // //update HTML5 video current play time
  // video.on('timeupdate', function() {
  //   $('.progressTime .current').text(video[0].currentTime);
  //   var currentPos = video[0].currentTime; //Get currenttime
  //   var maxduration = video[0].duration; //Get video duration
  //   var percentage = 100 * currentPos / maxduration; //in %
  //   $('.timeBar').css('width', percentage+'%');
  // });
  //
  // var timeDrag = false;   /* Drag status */
  // $('.progressBar').mousedown(function(e) {
  //   timeDrag = true;
  //   updatebar(e.pageX);
  // });
  // $(document).mouseup(function(e) {
  //   if(timeDrag) {
  //     timeDrag = false;
  //     updatebar(e.pageX);
  //   }
  // });
  // $(document).mousemove(function(e) {
  //   if(timeDrag) {
  //     updatebar(e.pageX);
  //   }
  // });
  //
  // //update Progress Bar control
  // var updatebar = function(x) {
  //   var progress = $('.progressBar');
  //   var maxduration = video[0].duration; //Video duraiton
  //   var position = x - progress.offset().left; //Click pos
  //   var percentage = 100 * position / progress.width();
  //
  //   //Check within range
  //   if(percentage > 100) {
  //     percentage = 100;
  //   }
  //   if(percentage < 0) {
  //     percentage = 0;
  //   }
  //
  //   //Update progress bar and video currenttime
  //   $('.timeBar').css('width', percentage+'%');
  //   video[0].currentTime = maxduration * percentage / 100;
  // };

  function playAll(that) {
    $('audio').trigger('pause');
    $('video').trigger('pause');
    if ($(that).hasClass('icon-play')) {

      $('.icon-default').removeClass('icon-pause');
      $('.icon-default').addClass('icon-play');

      $(that).addClass('icon-pause');
      $(that).removeClass('icon-play');

      if ($(that).parents().hasClass('header__live')) {
        let song = $(that).parent('div').parent('div').find('audio')[0];
        // $(that).parent('div').parent('div').find('audio').trigger('play');

        if (!song.getAttribute('src')) {
          song.setAttribute('src', originalSourceUrl);
          song.load(); // This restarts the stream download
        }
        song.play();
      } else {
        let video = $(that).parents('.video-controls').prev().find('video')[0];

        $('video').trigger('pause');
        video.play();
      }

    } else {

      $(that).removeClass('icon-pause');
      $(that).addClass('icon-play');

      let song = $(that).parent('div').parent('div').find('audio')[0];

      // $(that).parent('div').parent('div').find('audio').trigger('pause');
      if ($(that).parents().hasClass('header__live')) {
        song.pause();
        // settimeout, otherwise pause event is not raised normally
        setTimeout(function () {
          song.load(); // This stops the stream from downloading
        });
      } else {
        let video = $(that).parents('.video-controls').prev().find('video')[0];
        video.pause();
        // video.currentTime = 0;
      }

    }
  }

  //fullscreen button clicked
  function fullscreeVideo() {

  }
  $('.btnFS').on('click', function() {
    if($.isFunction(video[0].webkitEnterFullscreen)) {
      video[0].webkitEnterFullscreen();
    }
    else if ($.isFunction(video[0].mozRequestFullScreen)) {
      video[0].mozRequestFullScreen();
    }
    else {
      alert('Your browsers doesn\'t support fullscreen');
    }
  });
})();

  


})();