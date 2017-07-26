var count = 0;
var $play_div = $('.new-list-content');
var $play_content = $play_div.children('div');
var imgLength = $play_content.length;


var $list = $('.new-list');//div
var $list_li = $($list).eq(0).find('li');//li
var $active_border = $('.active-border');//active_div

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

function init() {
    $list_li.removeClass('active');
}
$(document).on("pagecreate","#pageone",function(){
    $(".new-list-content").on("swipeleft",function(){
        toRight();
        $active_border.animate({'left': 25*count +'%'},300);
        init();
        $list_li.eq(count).addClass('active');
    });
    $(".new-list-content").on("swiperight",function(){
        toLeft();
        $active_border.animate({'left': 25*count +'%'},300);
       init();
        $list_li.eq(count).addClass('active');
    });
});
$list_li.click(function () {
    var index = $(this).index();
    init();
    $play_content.hide();
    $play_content.eq(index).show();
    $active_border.animate({'left': 25*index +'%'},300);
    $list_li.eq(index).addClass('active');
});