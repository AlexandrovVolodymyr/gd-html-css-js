$(document).ready(function () {
  $( "#slider-date" ).slider({
    range: true,
    min: new Date('2017-08-08').getTime() / 1000,
    max: new Date('2018-01-06').getTime() / 1000,
    step: 86400,
    values: [ new Date('2017-08-08').getTime() / 1000, new Date('2018-01-06').getTime() / 1000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( (new Date(ui.values[ 0 ] *1000).toDateString() ) + " - " + (new Date(ui.values[ 1 ] *1000)).toDateString() );

      let
          xMonth  = new Date(ui.values[ 0 ] *1000).getDate(),
          xYear  = new Date(ui.values[ 0 ] *1000).getFullYear();
      let
          yMonth  = new Date(ui.values[ 1 ] *1000).getDate(),
          yYear  = new Date(ui.values[ 1 ] *1000).getFullYear();

      if (xMonth < 10) {
        xMonth = '0' + xMonth;
      }
      if (yMonth < 10) {
        yMonth = '0' + yMonth;
      }

      $('.photo-filter__period-start').text(xMonth + '.' + xYear);
      $('.photo-filter__period-end').text(yMonth + '.' + yYear);
    }
  });
});