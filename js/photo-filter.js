// Create a new date from a string, return as a timestamp.
function timestamp(str){
  return new Date(str).getTime();
}

var dateSlider = document.getElementById('slider-date');

noUiSlider.create(dateSlider, {
// Display colored bars between handles
  connect: true,
// Create two timestamps to define a range.
  range: {
    min: timestamp('08.10.2017'),
    max: timestamp('10.08.2018')
  },

// Steps of one week
  step: 7 * 24 * 60 * 60 * 1000,

// Two more timestamps indicate the handle starting positions.
  start: [ timestamp('08.10.2017'), timestamp('10.08.2018') ],

// No decimals
  format: wNumb({
    decimals: 0
  })
});
// Create a list of day and monthnames.
let
    weekdays = [
      "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
    ],

    months = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

let dateValues = [
  document.querySelector('.noUi-handle-lower'),
  document.querySelector('.noUi-handle-upper')
];

let x , y;
dateSlider.noUiSlider.on('update', function( values, handle ) {
  // dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));

  x = formatDate(new Date(+values[0]));
  y = formatDate(new Date(+values[1]));

  let
      xMonth  = new Date(+values[0]).getDate(),
      xYear  = new Date(+values[0]).getFullYear();
  let
      yMonth  = new Date(+values[1]).getMonth() + 1,
      yYear  = new Date(+values[1]).getFullYear();

  if (xMonth < 10) {
    xMonth = '0' + xMonth;
  }

  // console.log(xMonth, xYear);
  $('.photo-filter__period-start').text(xMonth + '.' + xYear);
  $('.photo-filter__period-end').text(yMonth + '.' + yYear);

});



// Append a suffix to dates.
// Example: 23 => 23rd, 1 => 1st.
function nth (d) {
  if(d>3 && d<21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

// Create a string representation of the date.
function formatDate ( date ) {
  return weekdays[date.getDay()] + ", " + date.getDate() + nth(date.getDate()) + " " + months[date.getMonth()] + " " + date.getFullYear();
}