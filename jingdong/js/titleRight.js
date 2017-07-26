//动态导航栏
$(document).ready(function(){
    var sHead=document.getElementById('head');
    var aTitle=sHead.getElementsByTagName('li');
    var sContent=document.getElementById('content');
    var sLi=sContent.getElementsByTagName('ul');

    function init(){
        for(var i = 0;i<aTitle.length;i++){
            aTitle[i].className=' ';
            sLi[i].style.display='none';
        }
    }
    for(var i = 0; i<aTitle.length; i++){
        (function (n){
            aTitle[n].onmouseover= function () {
                init();
                aTitle[n].className='selected , head';
                sLi[n].style.display='block';
            }
        })(i);
    }
//    倒计时
    var $hour=$('.hour');//小时
    var $minute=$('.minute');//分钟
    var $second=$('.second');//秒数

    window.setInterval(getTime,500);
    function getTime(){
        var endTime=new Date('2017/3/16 18:00:00');
        var startTime=new Date();
        var time=endTime.getTime() - startTime.getTime();

        var h=Math.floor(time / 1000 / 60 / 60 % 24);//时
        var m=Math.floor(time / 1000 / 60 % 60);//分
        var s=Math.floor(time / 1000 %60);//秒
        if(h<10){
            h='0'+h;
        }
        if(m<10){
            m='0'+m;
        }
        if(s<10){
            s='0'+s;
        }
        if(time < 0){
            s = 0
            h = 0;
            m = 0;
        }
        $hour.children().text(h);
        $minute.children().text(m);
        $second.children().text(s);
    }

});