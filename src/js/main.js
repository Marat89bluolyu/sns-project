$(function () {
    $('.menu-toggle').click(function (e) {
        e.preventDefault();
        $('.navigation').toggle('fast');
    })

    $('.sidebar-button').click(function (e) {
        e.preventDefault();
        $('.sidebar').toggle('fast');
    })

    $('.sl').slick({
        appendArrows: $('.sl'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><div class="arrow-wrap">' +
        '<img src="./images/icons/slider-arrow-left.png" alt="">'+
        '<svg \n' +
        ' xmlns="http://www.w3.org/2000/svg"\n' +
        ' xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        ' width="31px" height="114px">\n' +
        '<path fill-rule="evenodd"  fill="rgb(237, 237, 237)"\n' +
        ' d="M-0.000,-0.001 L31.000,57.999 L-0.000,114.000 L-0.000,-0.001 Z"/>\n' +
        '</svg>' +
        '</div></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><div class="arrow-wrap">' +
        '<img src="./images/icons/slider-arrow-right.png" alt="">'+
        '<svg \n' +
        ' xmlns="http://www.w3.org/2000/svg"\n' +
        ' xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        ' width="31px" height="114px">\n' +
        '<defs>\n' +
        '<linearGradient id="PSgrad_0" x1="0%" x2="100%" y1="0%" y2="0%">\n' +
        '  <stop offset="0%" stop-color="rgb(210,210,210)" stop-opacity="1" />\n' +
        '  <stop offset="100%" stop-color="rgb(244,244,244)" stop-opacity="1" />\n' +
        '</linearGradient>\n' +
        '\n' +
        '</defs>\n' +
        '<path fill-rule="evenodd"  fill="rgb(255, 255, 255)"\n' +
        ' d="M31.000,-0.001 L-0.000,57.999 L31.000,114.000 L31.000,-0.001 Z"/>\n' +
        '<path fill="url(#PSgrad_0)"\n' +
        ' d="M31.000,-0.001 L-0.000,57.999 L31.000,114.000 L31.000,-0.001 Z"/>\n' +
        '</svg>' +
        '</div></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
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
        appendArrows: $('.partners'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><div class="arrow-wrap">' +
        '<img src="./images/icons/slider-arrow-left.png" alt="">'+
        '<svg \n' +
        ' xmlns="http://www.w3.org/2000/svg"\n' +
        ' xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        ' width="31px" height="114px">\n' +
        '<path fill-rule="evenodd"  fill="rgb(237, 237, 237)"\n' +
        ' d="M-0.000,-0.001 L31.000,57.999 L-0.000,114.000 L-0.000,-0.001 Z"/>\n' +
        '</svg>' +
        '</div></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><div class="arrow-wrap">' +
        '<img src="./images/icons/slider-arrow-right.png" alt="">'+
        '<svg \n' +
        ' xmlns="http://www.w3.org/2000/svg"\n' +
        ' xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        ' width="31px" height="114px">\n' +
        '<defs>\n' +
        '<linearGradient id="PSgrad_0" x1="0%" x2="100%" y1="0%" y2="0%">\n' +
        '  <stop offset="0%" stop-color="rgb(210,210,210)" stop-opacity="1" />\n' +
        '  <stop offset="100%" stop-color="rgb(244,244,244)" stop-opacity="1" />\n' +
        '</linearGradient>\n' +
        '\n' +
        '</defs>\n' +
        '<path fill-rule="evenodd"  fill="rgb(255, 255, 255)"\n' +
        ' d="M31.000,-0.001 L-0.000,57.999 L31.000,114.000 L31.000,-0.001 Z"/>\n' +
        '<path fill="url(#PSgrad_0)"\n' +
        ' d="M31.000,-0.001 L-0.000,57.999 L31.000,114.000 L31.000,-0.001 Z"/>\n' +
        '</svg>' +
        '</div></button>',
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
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