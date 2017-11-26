$(function () {
    $('.menu-toggle').click(function (e) {
        e.preventDefault();
        $('.navigation').toggle('fast');
    })

    $('.sl').slick({
        appendArrows: $('.sl'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><div class="arrow-wrap"><img src="images/icons/arrow-left.png" alt=""></div></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><div class="arrow-wrap"><img src="images/icons/arrow-right.png" alt=""></div></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $('.sl-2').slick({
        appendArrows: $('.second-slider'),
        prevArrow: '<button id="prev-2" type="button" class="btn btn-juliet"><div class="arrow-wrap"><img src="images/icons/arrow-left.png" alt=""></div></button>',
        nextArrow: '<button id="next-2" type="button" class="btn btn-juliet"><div class="arrow-wrap"><img src="images/icons/arrow-right.png" alt=""></div></button>',
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
})