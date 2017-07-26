var lineChartData = {
    //X坐标数据
    labels : ["7日","8日","9日","10日","11日","今日"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor: "rgba(255,255,255,0)",
            //统计表画笔颜色
            strokeColor: "#27fdff",
            //点的颜色
            pointColor: "#000;",
            //点边框的颜色
            pointStrokeColor: "#49a5ff",
            //鼠标触发时点的颜色
            pointHighlightFill: "#ff86a1",
            //鼠标触发时点边框的颜色
            pointHighlightStroke: "#000",
            //Y坐标数据
            data: [0, 50, 200, 500, 100, 200, 500]
            }
    ]

};

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
};