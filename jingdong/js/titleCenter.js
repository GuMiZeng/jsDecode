/**
 * Created by Administor on 2017/3/12.
 */
$(document).ready(function(){
    var $container = $('#slider-list');//ul
    var $slider_list = $container.children();//li
    var $pagePre = $('#pagePre');
    var $pageNext = $('#pageNext');
    var $tags = $('.nav span');

    var length = $slider_list.length;
    var count = 0;
    var time ;
    var interval = 4000;

    $tags.eq(0).css('background','#e01222');
    $slider_list.hide();
    $slider_list.eq(0).show();
    $pageNext.hide();
    $pagePre.hide();

    function animation(){
        $slider_list.fadeOut();
        $slider_list.eq(count).fadeIn();
        $tags.css('background','rgba(255,255,255,0.6)');
        $tags.eq(count).css('background','#e01222');
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

    $('#page,.nav').hover(function(){
            $pageNext.show();
            $pagePre.show();

        },function(){
            $pageNext.hide();
            $pagePre.hide();
        }

    );
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
    },function(){
        play();
    });
});