$(document).ready(function () {
    var $carousel = $("#carousel");
    var $carouselImg= $carousel.children("div");//img
    var $carouselItem = $("#carousel-item");
    var $item = $carouselItem.children("span");//span

    var length = $carouselImg.length;
    var time ;
    var count = 0;
    function animation() {
        $carouselImg.fadeOut();
        $carouselImg.eq(count).fadeIn();
        $item.css("background","rgba(255,255,255,0.5)");
        $item.eq(count).css("background","rgba(255,255,255,1)")
    }
    function  carousel() {
        count = (++count) % (length);
        animation();
    }
    function play() {
        time = setInterval(carousel,4000);
    }
    play();
    function stop() {
        clearInterval(time);
    }
    $item.click(function () {
        stop();
        count = $(this).index();
        animation();
        play();
    });
});