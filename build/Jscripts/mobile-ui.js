/*
* TABLE OF CONTENTS
*
* List JS file
* MOBILE MENU
*/

/* > List JS file */
// '/vendor/jquery-3.1.1.js',

/* > MOBILE MENU */
function openRight() {
    $("#menu-right").addClass('go-visible');
    $("#mask").removeClass().addClass('show');
    $('body,html').css('overflow', 'hidden');
};

function closeRight() {
    $("#menu-right").removeClass('go-visible');
    $("#mask").removeClass();
    $('body,html').css('overflow', 'initial');
};

$(".header__hamburger button").click(function() {
    openRight();
});
$("#mask").click(function() {
    closeRight();
});
$(".nav-mobile > .title > a").click(function() {
    closeRight();
});

$('.nav__parent .btn-expand').click(function()
{
    _this = $(this);
    _this.parent().siblings().removeClass('is-active')
    _this.parent().addClass('is-active')
});

/* > bx slider */
$('.header__stock .wrap').bxSlider({
    pager : false,
    slideWidth: 130,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 20,
    nextSelector: ".header__stock .btn-next",
    prevSelector: ".header__stock .btn-prev"
});

$('.magazine .wrap').bxSlider({
    controls: false,
    slideWidth: 105,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 30
});

$('.fullSize-box-02 .wrap').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextSelector: ".fullSize-box-02 .btn-next",
    prevSelector: ".fullSize-box-02 .btn-prev"
});

$('.slider-nav .wrap').bxSlider({
    auto : true,
    autoDelay : 1000,
    pause : 5000,
    minSlides: 1,
    maxSlides: 2,
    nextSelector: ".slider-nav .btn-next",
    prevSelector: ".slider-nav .btn-prev"
});
