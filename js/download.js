$(window).on("click", function(e) { // отслеживаем клик по любому месту нашего документа
  var div = $(".download");
  // указываем наш блок который должен изчезать если клик не по нему
  if (!div.is(e.target)
    // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {  // и не по его дочерним элементам
    div.next().hide();
  } else {
    div.next().hide();
    div.has(e.target).next().show();
  }
});
