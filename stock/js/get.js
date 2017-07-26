/**
 * Created by Administrator on 2017/3/6.
 */
$(document).ready(function(){
    $('#mySpan').click(function(){
        htmlObject= $.ajax({url:'../file/title.text',async:true});

    });
});