    var count = 0;
    var $pic_play_div = $('#pics');
    var $pic_a = $pic_play_div.children('a');
    var $pic_img = $pic_a.children('img');
    var imgLength = $pic_img.length;

    $pic_img.hide();
    $pic_img.eq(0).show();

    var interval = 4000;//轮播间隔时间
    var time;

    function toLeft() {
        count = (--count + imgLength) % imgLength;
        console.log(count);
        change();
        stop();
        play();
    }

    function  toRight() {
        count = (++count) % imgLength;
        change();
        stop();
        play();
    }

    function change() {
        $pic_img.fadeOut();
        $pic_img.eq(count).fadeIn(500);
    }

    function autoPlay() {
        count = (++count) % imgLength;
        change();
    }

    function play() {
        time = setInterval(autoPlay, interval);
    }

    function stop() {
        clearInterval(time);
    }

    $(document).on("pagecreate","#pageone",function(){
        $("#pics img").on("swipeleft",function(){
            toRight();
        });
        $("#pics img").on("swiperight",function(){
            toLeft();
        });
    });