$('.my-1').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    mouseDrag:false,
    responsive:{
        0:{
            items:1
        }
    }
}) // 1번 슬라이드

$('.sponsor-banner .owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    responsive:{
        0:{
            items:1
        }
    }
});// 배너 슬라이드

$('.tab-box > .head > ul > li').click(function() {
    var $clickedLi = $(this);
    var index = $clickedLi.index();
    
    $clickedLi.siblings('.active').removeClass('active');
    $clickedLi.addClass('active');
    
    var $tabBox = $clickedLi.closest('.tab-box');
    
    $tabBox.find('.body > ul > li').removeClass('active');
    $tabBox.find('.body > ul > li').eq(index).addClass('active');
}); // 메뉴 이름 클릭

$('.carousel-1 > .owl-carousel').owlCarousel({
    navSpeed:150,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    slideBy:4,
    mouseDrag:false,
    navText:['<div class="left-btn"></div>', '<div class="right-btn"></div>'],
    responsive:{
        0:{
            items:4
        }
    }
}); // 메뉴 슬라이드

$('.carousel-1 > .owl-carousel .owl-item').mouseenter(function() {
    var eventItem = this;
    var $carousel = $(this).closest('.carousel-1');
    
    for ( var i = 1; i <= 4; i++ ) {
        $carousel.removeClass('carousel-item-' + i + '-hover');
    }
    
    $carousel.find('.owl-item.active').each(function(index, node) {
        if ( eventItem == node ) {
            $carousel.addClass('carousel-item-' + (index + 1) + '-hover');
            
            return false;
        }
    });
}); // 메뉴 마우스 오버

$('.carousel-1 > .owl-carousel .owl-item').mouseleave(function() {
    var $carousel = $('.carousel-1');
    
    for ( var i = 1; i <= 4; i++ ) {
        $carousel.removeClass('carousel-item-' + i + '-hover');
    }
});

$('.carousel-1').mouseleave(function() {
    var $carousel = $(this);
    
    for ( var i = 1; i <= 4; i++ ) {
        $carousel.removeClass('carousel-item-' + i + '-hover');
    }
}); // 메뉴 마우스 리브

$('.head > ul > li').click(function () {
    $click_menu = $(this);
    
    $click_menu.addClass('active');
}); // 메뉴 이름 클릭 색깔
