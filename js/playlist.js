(function () {
  let song;
  let podkast = $('.podkast');
  let podkastStream = $('.stream-player');
  let headerStream = document.querySelector('.header-audio');
  let videoMainPage = $('.item-big .embed-responsive-item');
  let video = $('.tab-content-video-page .embed-responsive-item');
  let volumeSlider;
  let volumeStop = $('.volume-stop');
  let player;
  const originalSourceUrl = 'http://m4m128.hostingradio.ru:8074/m4m128.mp3';
  let timerSong;
  /*section.video*/
  let videoCurrent = $('.video-current');


  let seekbar = $(".seekbar").slider({
    range: "min",
    animate: true,
    value: 0,
    min: 0,
    max: 100,
    step: 0.001,
    slide: function( event, ui ) {
      song.currentTime =  song.duration * (ui.value / 100);
    }
  });

  $(".volumeslider").slider({
    range: "max",
    animate: true,
    value: 100,
    min: 0,
    max: 100,
    step: 1,
    slide: function( event, ui ) {
      volumeSlider = ui.value;
      setVolume(song);
    }
  });

  /* MUTED */
  // volumeStop.on('click', function () {
  //   if (song.muted) {
  //     song.muted = false;
  //     volumeStop.removeClass('true');
  //     $(".volumeslider").slider({value: 100});
  //   } else {
  //     song.muted = true;
  //     volumeStop.addClass('true');
  //     $(".volumeslider").slider({value: 0});
  //   }
  // });
  /*/ MUTED */
  $('.stream').on("click", '.stream-wrapper', function() {
    $(this).hide();
    let ifr = $(this).next();
    ifr.css('display', 'block');
    ifr.find('iframe').attr('src', 'http://player.radio-box.org/v/megapolis/');

    let liveAudio =  $('.icon-pause').closest('.header__live').find('audio')[0];
    //Actions when video play selected
    if (liveAudio) {
      liveAudio.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        liveAudio.load(); // This stops the stream from downloading
      }, 1000);
      clearInterval(timerSong);
      /* delete podkast */
      podkast.find('.podkast__image img').remove();
      podkast.find('.podkast-btn').html('');

      podkast.removeClass('podkast-active');

    }

    $('.icon-pause').closest('.header__live').find('audio').attr('src', '');

    $('.icon-default').removeClass('icon-pause');
    $('.icon-default').addClass('icon-play');

    $('#video-current').get(0).pause();
    // $('#video-current').get(0).currentTime=0;
  });



  $('.icon-default').on('click', function () {
    $('.stream iframe').attr('src', '');
    $('.stream-wrapper').css('display', 'block');
    playAll(this);
    podkastMode(this);
  });

  $(videoMainPage).on('play', function() {
    let liveAudio =  $('.icon-pause').closest('.header__live').find('audio')[0];
    //Actions when video play selected
    if (liveAudio) {
      liveAudio.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        liveAudio.load(); // This stops the stream from downloading
      }, 1000);
      clearInterval(timerSong);
      /* delete podkast */
      podkast.find('.podkast__image img').remove();
      podkast.find('.podkast-btn').html('');

      podkast.removeClass('podkast-active');
    }

    $('.icon-pause').closest('.header__live').find('audio').attr('src', '');

    $('.icon-default').removeClass('icon-pause');
    $('.icon-default').addClass('icon-play');

    $('.stream iframe').attr('src', '');
    $('.stream-wrapper').css('display', 'block');

  });

  const xhr = new XMLHttpRequest();
  function getRequest() {

    xhr.open('GET', 'https://metam4m.hostingradio.ru/current.json');

    xhr.send();

    xhr.addEventListener('readystatechange', readyState);
  }
  function readyState() {
    if (xhr.readyState === 4) { // состояние готовности, запрос выполнен, данные пришли
      if (xhr.status === 200) {
        let dataArray = JSON.parse(xhr.response);

        $('.podkast__author').html(dataArray.artist);
        $('.podkast__song').html(dataArray.title);

        $('.stream-title-need').text(dataArray.title);
        
        let imgSrc = 'https://metam4m.hostingradio.ru/';
        // let totalSrc = imgSrc + dataArray.cover;
        let totalSrc = dataArray.cover;
        let img = document.createElement('IMG');
        if (totalSrc === 'https://metam4m.hostingradio.ru/covers/no_cover.jpg') {
          if (!$('.podkast__image').hasClass('player-avatar')) {
            $('.podkast__image').addClass('player-avatar');
          }
          // $('.stream-cover-need').addClass('player-avatar');

          $('.podkast__author').html('');
          $('.podkast__song').html('');
          $('.podkast__image').html('');
        } else {
          img.setAttribute("src", totalSrc);
          if ($('.podkast__image').hasClass('player-avatar')) {
            $('.podkast__image').removeClass('player-avatar');
          }
          // $('.stream-cover-need').removeClass('player-avatar');
          $('.podkast__image').find('img').remove();
          $('.podkast__image').prepend(img);
        }
      }
    }
  }

  function playAll(that) {
    $('audio').trigger('pause');
    $('video').trigger('pause');
    if (player) {
      player.destroy();
    }

    clearInterval(timerSong);

    if ($('.icon-pause').closest('.header__live ').length) {
      let liveAudio =  $('.icon-pause').closest('.header__live ').find('audio')[0];
      liveAudio.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        liveAudio.load(); // This stops the stream from downloading
      }, 1000);
      $('.icon-pause').closest('.header__live ').find('audio').attr('src', '');

      song.muted = false;
      volumeStop.removeClass('true');
      $(".volumeslider").slider({value: 100});
    }

    podkast.removeClass('podkast-active');
    if ($(that).hasClass('icon-play')) {

      $('.icon-default').removeClass('icon-pause');
      $('.icon-default').addClass('icon-play');

      if ($(that).parent().hasClass('tab-pane__image')) {
        $('#seek').attr('max',  $(that).parent('div').parent('div').find('audio')[0].duration);
      }

      $(that).addClass('icon-pause');
      $(that).removeClass('icon-play');

      if ($(that).closest('.header__live').length) {

        song = $(that).parent('div').parent('div').find('audio')[0];
        /*****************************/
        window.song = song;
        // console.log('global' + song);
        /*****************************/
        if (!song.getAttribute('src')) {
          song.setAttribute('src', originalSourceUrl);
          song.load(); // This restarts the stream download
        }
        song.play();
        getRequest();
        timerSong = setInterval( getRequest, 1000);
        song.muted = false;
        volumeStop.removeClass('true');
        $(".volumeslider").slider({value: 100});

        /* STREAM PLAYER */
        podkast.addClass('podkast-active');
        podkast.addClass('stream-player');

        // podkast.find('.podkast__image img').remove();
        podkast.find('.podkast__stream-btn').html('');

        // let avatar = $(that).closest('.header-common').find('.header__logo img').clone();
        // podkast.find('.podkast__image').append(avatar);
        // console.log(avatar);

        let ppStream = $(that).closest('.player__btns').clone();
        podkast.find('.podkast__stream-btn').append(ppStream);

        podkast.find('.icon-default').addClass('now-playing-stream');
        /*/ STREAM PLAYER */

        $(videoMainPage).trigger('pause');

        /*for ie*/
        $('.header-audio')[1].volume = 0;

      } else if ($(that).closest('.tab-pane__video').hasClass('tab-pane__video')) {
        /*video-page*/
        $('.embed-responsive-item').attr('id', '');
        $(that).closest('.tab-pane__video').find('.embed-responsive-item').attr('id', 'video');
        let videoCurrent = $(that).closest('.tab-pane__video').find('.embed-responsive-item');
        var videoPlayers = Clappr.UIContainerPlugin.extend({
          name: 'video-players',
          initialize: function() {
            this.render();
          },
          bindEvents: function() {
            this.listenTo(this.container, Clappr.Events.CONTAINER_PAUSE, this.show);
            this.listenTo(this.container, Clappr.Events.CONTAINER_PLAY, this.hide);
          },
          hide: function() {
            this.$el.hide();
          },
          show: function() {
            this.$el.show();
          },
          render: function() {
            this.$el.html('Hello World!');
            this.$el.css('font-size', '100px');
            this.$el.css('color', 'white');
            this.$el.css('background-color', 'red');
            this.$el.css('position', 'relative');
            this.container.$el.append(this.$el);
            this.hide();
            return this;
          }
        });
        player = new Clappr.Player({
          source: videoCurrent.attr('data-src'),
          parentId: "#video",
          plugins: [videoPlayers],
          autoPlay: true,
          autoPlayVisible: true,
          events: {
            onEnded: function () {
              player.destroy();
              $('.icon-default').removeClass('icon-pause');
              $('.icon-default').addClass('icon-play');
            }
          }
        });
      } else if ($(that).closest('.tab-pane__image').length) {
        console.log('podkast play');
        $(that).parent('div').parent('div').find('audio').trigger('play');
        // $(that).parent('div').parent('div').find('audio')[0].currentTime = 0;

        /*пауза для активной песни*/
        if (!$(that).closest('.tab-pane__image').hasClass('active-music')) {
          $(that).parent('div').parent('div').find('audio')[0].currentTime = 0;

          $('.active-music').removeClass('active-music');
        }
      } else {
        console.log('если ничего не подошло');
        $(that).parent('div').parent('div').find('audio').trigger('play');
        $(that).parent('div').parent('div').find('audio')[0].currentTime = 0;
      }

    } else {
      $(that).removeClass('icon-pause');
      $(that).addClass('icon-play');

      if ($(that).parent().hasClass('player__btns')) {
        // song.pause();
        // settimeout, otherwise pause event is not raised normally
        // setTimeout(function () {
        //   song.load(); // This stops the stream from downloading
        // });
      } else {
        $(that).closest('.tab-pane__image').addClass('active-music');
        $(that).parent('div').parent('div').find('audio').trigger('pause');
      }

    }
  }


  $('body').on('click', '.now-playing-stream', function () {
    if (!song.paused) {
      song.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        song.load(); // This stops the stream from downloading
      }, 1000);
      clearInterval(timerSong);
      /* delete podkast */
      $('.icon-pause').closest('.header__live').find('audio').attr('src', '');
      $('.icon-default').removeClass('icon-pause');
      $('.icon-default').addClass('icon-play');

      podkast.removeClass('podkast-active');
    }
  });
  function podkastMode(that) {
    if ($(that).closest('.tab-pane__item').length) {
      song = $(that).closest('.tab-pane__item').find('audio')[0];
      $('.podkast__image').removeClass('player-avatar');
      // song.muted = false;
      volumeStop.removeClass('true');
      $(".volumeslider").slider({value: 100});

      $('.podkast__author').html('');
      $('.podkast__song').html('');

      if (song)
        if ($(that).closest('.tab-pane__item').length && !song.paused) {
          podkast.addClass('podkast-active');
          podkast.removeClass('stream-player');
          song.loop = true;
          /* add avatar to podkast */
          podkast.find('.podkast__image img').remove();
          let avatar = $(that).next().clone();
          podkast.find('.podkast__image').append(avatar);
          /* add play-pause to podkast */
          podkast.find('.podkast-btn').html('');
          let pp = $(that).clone();
          pp.addClass('now-playing');
          podkast.find('.podkast-btn').append(pp);

          /* track */
          seek(song);
          song.addEventListener('timeupdate', tUpdate);
          window.song = song;

          bottomPlayPause(song);

      } else {

        /* delete podkast */
        podkast.find('.podkast__image img').remove();
        podkast.find('.podkast-btn').html('');

        podkast.removeClass('podkast-active');
      }
    }
  }

  function seek(song) {
    $(".seekbar").bind("change", function() {
      song.currentTime = $(this).val();
      // $("#seek").attr("max", song.duration);
    });
    $(".seekbar").on("mousedown", function() {
      song.removeEventListener('timeupdate', tUpdate);
    });
    $(".seekbar").on("mouseup", function() {
      song.addEventListener('timeupdate', tUpdate);
    });
  }

  function setVolume(song) {
    song.volume = volumeSlider / 100;
  }

  function bottomPlayPause(song) {
    $('.now-playing').click(function () {
      if (!song.paused) {
        song.pause();

        $(this).removeClass('icon-pause');
        $(this).addClass('icon-play');
      } else {
        song.play();

        $(this).addClass('icon-pause');
        $(this).removeClass('icon-play');
      }
    });
  }


  function tUpdate() {
    let curtime = window.song.currentTime;

    /*seekbar value*/
    $("#seek").val(curtime);

    /* time */
    // let h = Math.floor(curtime / 3600);
    curtime = curtime % 3600;
    let min = Math.floor(curtime / 60);
    curtime = Math.floor(curtime % 60);
    if (curtime.toString().length < 2) curtime = "0" + curtime;
    if (min.toString().length < 2) min = "0" + min;

    let duration = window.song.duration;
    let minDuration = Math.floor(duration / 60);
    duration = Math.floor(duration % 60);
    if (duration.toString().length < 2) duration = "0" + duration;
    if (minDuration.toString().length < 2) minDuration = "0" + minDuration;

    $(".podkast__time .start").html(min + ":" + curtime);
    $(".podkast__time .end").html("/ " + minDuration + ":" + duration);

    let t =  (window.song.currentTime / song.duration) * 100;

    seekbar.slider("value", t);
    /*/ time */
  }
})();