var count = 0;
var $play_div = $('#pic-content');
var $play_content = $play_div.children('div');
var to_top = $('.to-top');
var imgLength = $play_content.length;


var $list = $('.activity-list');//div
var $list_li = $($list).eq(0).find('li');//li
var $active_border = $('.active-border');//active_div 20%

$play_content.hide();
$play_content.eq(0).show();

function toLeft() {
    count = (--count + imgLength) % imgLength;
    console.log(count);
    change();
}

function  toRight() {
    count = (++count) % imgLength;
    change();
}

function change() {
    $play_content.fadeOut();
    $play_content.eq(count).fadeIn(500);
}


$(document).on("pagecreate","#pageone",function(){
    $("#pic-content .active-content").on("swipeleft",function(){
        toRight();
        $active_border.animate({'left': 20*count +'%'},300);
        $list_li.removeClass('li-active');
        $list_li.eq(count).addClass('li-active');
    });
    $("#pic-content .active-content").on("swiperight",function(){
        toLeft();
        $active_border.animate({'left': 20*count +'%'},300);
        $list_li.removeClass('li-active');
        $list_li.eq(count).addClass('li-active');
    });
});

to_top.click(function () {
    $('html,body').animate({scrollTop: '0px'}, 300);
});

$(document).on("scrollstop",function(){
    var height = document.body.scrollTop;
    if(height>70){
        $('.activity-list').addClass('fix_top').css('background','white');
    }else {
        $('.activity-list').removeClass('fix_top');

    }
});

$list_li.click(function () {
    var index = $(this).index();
    $play_content.hide();
    $play_content.eq(index).show();
    $active_border.animate({'left': 20*index +'%'},300);
    $list_li.removeClass('li-active');
    $list_li.eq(index).addClass('li-active');
});