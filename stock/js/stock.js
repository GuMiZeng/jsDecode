var _aNum = new Array;
var _aData  = new Array;
var _selectStatus = false;

var sendBtn = document.getElementById('sendBtn');
var selectAllBtn = document.getElementById('selectAllBtn');
var invertSelectAllBtn = document.getElementById('invertSelectAllBtn');
var deleteChooseBtn = document.getElementById('deleteChooseBtn');
var sortBtn = document.getElementById('sortBtn');
var time = 0;

sendBtn.onclick = function(){
    var sInput = document.getElementById('getNum');
    var num = sInput.value;
    // num.match("^[0-9]{7}")
    // $('.hintS').css('display','none');
    if( !num || num.split('').length !== 7 ){
        $('.hintF').css('display','block');
        return false;
    }else{
        $('.hintF').css('display','none');

    if (_aNum.length === 0){
        _aNum.push(num);
        //获取新添的数组数据
        console.log(_aNum);
        //添加新的行数
        $("<tr><td><input class='check' type='checkbox'/></td><td></td><td></td><td></td><td></td><td></td><td><button class='btn btn-info btn-sm' type='button' onclick='deleteRow(this)'>删除此记录</button></td></tr>").appendTo($("#stockTbl"));
    }
    for(var j = 0; j < _aNum.length ; j++){
        if(num === _aNum[j]){
            break;
        }else {
            // $('.hintS').css('display','block');
        }
        //一直比较到数组中最后一个数，还是没有相等的话就在数组的最后添加一个。
        if (j === _aNum.length-1 && num !== _aNum[j] ) {
            _aNum.push(num);
            //获取新添的数组数据
            console.log(_aNum.length);
            //添新添加并且没有重复的行
            $("<tr><td><input class='check' type='checkbox'/></td><td></td><td></td><td></td><td></td><td></td><td><button class='btn btn-info btn-sm'  type='button' onclick='deleteRow(this)'>删除此记录</button></td></tr>").appendTo($("#stockTbl"));
        }
    }
 }
    stockMsg();
    clearInterval(time);
    time = setInterval(stockMsg,3000);
};
// "input[type='checkbox']"

selectAllBtn.onclick = function (){
        if(!_selectStatus ){
            _selectStatus = !_selectStatus;
            $("input[type='checkbox']").each(function (i,elem) {

                $(elem).prop("checked", true);

            });
            $(this).text('取消全选');
        }else {
            _selectStatus = !_selectStatus;
            $("input[type='checkbox']").each(function (i,elem) {

                $(elem).prop("checked", false);
            });
            $(this).text('全选');
        }
};

deleteChooseBtn.onclick = function(){
    ( $( 'input[type = "checkbox"]:checked' ) ).each( function ( i, elem ) {
        var iIndex = $(elem).parents('tr').index();
        document.getElementById('stockTbl').deleteRow(iIndex + 1);
        _aNum.splice(iIndex,1);
        if (_aNum.length === 0){
            console.log("delete");
            clearInterval(time);
        }
        console.log('删除后的数组：'+_aNum);
    });

};

sortBtn.onclick = function(){
    console.log(_aNum);
    console.log(_aData);
    var tmpNum = '';
                for( var i = 0; i < _aNum.length; i++ ){
                    for( var j = i; j < _aNum.length; j++ ){
                        if(( _aData[_aNum[i]].high ) > ( _aData[_aNum[j]].high )){

                            tmpNum = _aNum[i];
                            _aNum[i] = _aNum[j];
                            _aNum[j] = tmpNum;
                        }
                    }
                }
};

function deleteRow(r) {
    var iIndex = $(r).parents("tr").index();
    document.getElementById('stockTbl').deleteRow(iIndex + 1);
    _aNum.splice(iIndex,1);
    if(_aNum.length === 0){
        clearInterval(time);
    }
}

function refreshPrice(data){

        _aData = data;
        upDate();
}

function upDate(){
    var myDate = new Date();
    var second = myDate.getSeconds();
    for (var x = 0; x < _aNum.length; x++) {
        if (_aData[_aNum[x]]){
            $('tbody').children('tr').eq(x).children("td").eq(1).text(_aData[_aNum[x]].name);
            $('tbody').children('tr').eq(x).children("td").eq(2).text(_aData[_aNum[x]].high);
            $('tbody').children('tr').eq(x).children("td").eq(3).text(_aData[_aNum[x]].low);
            $('tbody').children('tr').eq(x).children("td").eq(4).text(_aData[_aNum[x]].yestclose);
            $('tbody').children('tr').eq(x).children("td").eq(5).text(second);
        }else {
            // alert('股票不存在');
            $('.hintF').css('display','block');
            _aNum.splice(x,1);
            $('tbody').children('tr').eq(x).remove();
            if(_aNum.length === 0){
                window.clearInterval(time);
            }
        }

    }
}

function stockMsg(){
    var oDiv = document.getElementsByTagName('head')[0];
    var oScript = document.createElement('script');

    oScript.src = 'http://api.money.126.net/data/feed/' + _aNum + '?callback=refreshPrice';
    oDiv.appendChild(oScript);
    oDiv.removeChild(oScript);
}