/**
 * Created by Administrator on 2017/3/14.
 */
$(document).ready(function () {
   $('.my').hover(function () {
       $('.myList').css('display','block');
       $('.myTitle').addClass('myTitleHover');

   },function () {
       $('.myList').css('display','none');
       $('.myTitle').removeClass('myTitleHover');
   });
    $('.service').hover(function () {
        $('.serviceList').css('display','block');
        $('.serviceTitle').addClass('serviceTitleHover');
    },function () {
        $('.serviceList').css('display','none');
        $('.serviceTitle').removeClass('serviceTitleHover');
    });
});