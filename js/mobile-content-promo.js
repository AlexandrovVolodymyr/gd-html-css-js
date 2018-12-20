$('.slider-part').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    adaptiveHeight: false,
    slidesToScroll: 1,
    prevArrow: '<i class="prev-arrow material-icons">keyboard_arrow_left</i>',
    nextArrow: '<i class="next-arrow material-icons">keyboard_arrow_right</i>',
    responsive: [
        {
            breakpoint: 718,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 581,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
