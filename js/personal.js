    var count = 0;
    var  $record_list = $('.record-list');//title-div
    var $record_list_item = $record_list.find('li');//title-li
    var $record_list_detail = $('.record-list-detail');//content-div
    var $detail_content = $record_list_detail.children('ul');//content-ul

    var $content_list = $('.content-list');//最外层的div
    var $content_list_li = $content_list.find('li');//最外的li
    var $personal_info = $('#personal-info');//最大内容的外层
    var $personal_info_detail = $personal_info.children();//最大内容
    var detailLength = $personal_info_detail.length;
    var $active_border = $('.active-border');

    $detail_content.hide();
    $detail_content.eq(0).show();

    $personal_info_detail.hide();
    $personal_info_detail.eq(0).show();

    $personal_info_detail.hide();
    $personal_info_detail.eq(0).show();

    $record_list_item.eq(0).addClass('hero-li-active');
    //              英雄战绩点击事件
    $record_list_item.click(function () {
        var index = $(this).index();
        $record_list_item.removeClass('hero-li-active');
        $(this).addClass('hero-li-active');
        console.log(index);
        $detail_content.hide();
        $detail_content.eq(index).show();
    });
//              英雄战绩点击事件
//              最大左右滑动事件
    function init() {
        $content_list_li.removeClass('active');
    }

    function change() {
        $personal_info_detail.fadeOut();
        $personal_info_detail.eq(count).fadeIn(500);
    }

    function  toRight() {
        count = (++count) % detailLength;
        change();
    }

    function toLeft() {
        count = (--count + detailLength) % detailLength;
        change();
    }

    function slide() {
        $content_list_li.eq(count).addClass('active');
        $active_border.animate({'left': 25*count +'%'},300);
    }

    $(document).on('pagecreate',"#pageone",function () {
        $('.record-list-detail').on("swipeleft",function () {
            toRight();
            init();
            slide();
        });
        $('.record-list-detail').on("swiperight",function () {
            toLeft();
            init();
            slide();
        });
        $('#personal-info .personal-info,#personal-info .personal-honor,#personal-info .personal-hero').on("swipeleft",function () {
            toRight();
            init();
            slide();
        });
        $('#personal-info .personal-info,#personal-info .personal-honor,#personal-info .personal-hero').on("swiperight",function () {
            toLeft();
            init();
            slide();
        });

    });
    //              最大左右滑动事件

    //        最外点击事件
    $content_list_li.click(function () {
        var index = $(this).index();
        init();
        $personal_info_detail.hide();
        $personal_info_detail.eq(index).show();
        $active_border.animate({'left': 25*index +'%'},300);
        $content_list_li.eq(index).addClass('active');
    });
    //        最外点击事件