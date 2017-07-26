$(document).ready(function(){
    // var $orange_hov = $('.hardware-content-item');
    // var $tag = $('.tag');
    //
    //
    // $orange_hov.hover(function () {
    //     $orange_hov.unbind('hover');
    //     $tag.animate({bottom:'0px'},'slow');
    //
    // },function () {
    //     $orange_hov.unbind('hover');
    //     $tag.animate({bottom:'-50px'},'slow');
    //
    // });

    function carousel() {
        var $container = $('#slider-list');//ul
        var $slider_list = $container.children();//li
        var $pagePre = $('#pagePre');
        var $pageNext = $('#pageNext');
        var $tags = $('.itemSlider span');

        var length = $slider_list.length;
        var count = 0;
        var time ;
        var interval = 4000;

        $tags.eq(0).css('background','#ffffff');
        $slider_list.hide();
        $slider_list.eq(0).show();

        function animation(){
            $slider_list.fadeOut();
            $slider_list.eq(count).fadeIn();
            $tags.css('background','rgba(255,255,255,0.6)');
            $tags.eq(count).css('background','#ffffff');
        }
        function carousel(){
            count = (++count) % length;
            animation();
        }

        function play(){
            time = setInterval(carousel,interval);
        }

        play();

        function stop(){
            clearInterval(time);
        }
        $pageNext.click(function(){
            count = (++count) % length;
            animation();
            stop();
            play();
        });

        $pagePre.click(function(){
            count = (--count+length) % length;
            animation();
            stop();
            play();
        });

        $tags.hover(function(){
            stop();
            count = $(this).index();
            animation();
            console.log("1111");
        },function(){
            play();
        });
    }
    carousel();


    function singleSliding(){
        var $single = $('#single');
        var $singlePagePre = $('#singlePagePre');
        var $singlePageNext = $('#singlePageNext');

        var time;
        var status = false;
        var count = 0;
        $singlePagePre.css('color','#f2f2f2');
        $singlePageNext.css('color','#6c6c6c');
        function animation() {
            if(status){
                status = !status;
                count = 0;
                $singlePagePre.css('color','#f2f2f2');
                $singlePageNext.css('color','black');
                $singlePageNext.removeAttr('disabled');
                $singlePagePre.attr('disabled','disabled');
                $singlePageNext.unbind().click(function () {
                    stop();
                    animation();
                    play();
                });
                $single.animate({left: '0' });
            }else{
                status = !status;
                count = 1;
                $singlePagePre.css('color','black');
                $singlePageNext.css('color','#f2f2f2');
                $singlePagePre.removeAttr('disabled');
                $singlePageNext.attr('disabled','disabled');
                $singlePagePre.unbind().click(function () {
                    animation();
                    stop();
                    play();
                });
                $single.animate({left: '-100%' });
            }
        }
        function play() {
            time = setInterval(animation,4000);
        }
        function stop() {
            clearInterval(time);
        }
        if(count == 0){
            $singlePageNext.removeAttr('disabled');
            $singlePagePre.attr('disabled','disabled');
            $singlePageNext.unbind().click(function () {
                stop();
                animation();
                play();
            });
        }else {
            $singlePagePre.removeAttr('disabled');
            $singlePageNext.attr('disabled','disabled');
            $singlePagePre.unbind().click(function () {
                animation();
                stop();
                play();
            });
        }
        play();
    }
    singleSliding();

});