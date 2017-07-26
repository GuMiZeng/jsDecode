$('#list').singlePageNav({

});

var list_navbar = $('.list-navbar');
var li = list_navbar.find('li');
$(window).scroll(function () {
    if($(document).scrollTop()>180){
        list_navbar.addClass('fixed-top');
    }else{
        list_navbar.removeClass('fixed-top');
    }
});



console.log($(window).height());

var FLAG = 0;
var oListNavbar = $(".list-navbar");
var oLi = oListNavbar.find("li");
var oList = $("#list");
var aLiWidth = [0];
var aSectionHeight = [];
var iLiLen = oLi.length;
var cache = 0;
var oSection = $(".section");
var Len = oSection.length;

for (var i = 0; i < Len; i++){
    if(i % 4 === 2) {
        aSectionHeight.push(oSection.eq(i).offset().top);
    }
}

for (var i = 0; i < iLiLen; i++){
    cache += oLi.eq(i).innerWidth();
    console.log(cache);
    aLiWidth.push(cache);
}

console.log(aLiWidth);

console.log(oLi.length);

//    $("#list").scrollLeft(300);

$(window).scroll(function () {
//        console.log($(window).scrollTop());
    var iScrollTop = $(window).scrollTop() + $(window).height();

    if(iScrollTop < aSectionHeight[1]){
        FLAG = 0;
    } else if (iScrollTop < aSectionHeight[2]) {
        FLAG = 1;
    } else if (iScrollTop < aSectionHeight[3]) {
        FLAG = 2;
    } else if (iScrollTop < aSectionHeight[4]) {
        FLAG = 3;
    } else if (iScrollTop < aSectionHeight[5]) {
        FLAG = 4;
    } else if (iScrollTop < aSectionHeight[6]) {
        FLAG = 5;
    } else if (iScrollTop < aSectionHeight[7]) {
        FLAG = 6;
    } else if (iScrollTop < aSectionHeight[8]) {
        FLAG = 7;
    } else {
        FLAG = 8;
    }
    oLi.find('a').removeClass("active");
    oLi.eq(FLAG).children('a').addClass("active");
    oList.scrollLeft(aLiWidth[FLAG]);
    console.log(FLAG);
});