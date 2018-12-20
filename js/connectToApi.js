$.get("https://api.sypexgeo.net/")
    .done(function(response) {
      $('.header__location-name').html(response.city.name_ru); //main page
      $('.header-photos__town').html(response.city); //etc pages
      switch(response.country.name_en) {
        case 'Belarus':
        case 'Kyrgyzstan':
        case 'Kazakhstan':
        case 'Tajikistan':
          const circle = $('.mapimage').find("circle[data-country="+response.country.name_en+"]");
          circle.addClass('currentCity');
          circle.next().addClass('currentAnimation');
          return;
          break;

        case 'Russia':
          const circleR = $('.mapimage').find('circle[data-city=' + '\"' + response.city.name_en + '\"' + ']');
          circleR.addClass('currentCity');
          circleR.next().addClass('currentAnimation');
          return;
          break;

        default:
          $('.petersburg').addClass('currentCity');
          $('.petersburg').next().addClass('currentAnimation');
          return;
          break;
      }
    })
    .fail(function() {
      console.log('fail api');
      $('.petersburg').addClass('currentCity');
      $('.petersburg').next().addClass('currentAnimation');
    });