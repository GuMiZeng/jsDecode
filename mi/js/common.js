$(window).ready(function () {
    function cart() {
        var $shopcart = $('.shop-cart');
        var $shopcarthint = $('.shop-cart-hint');

        $shopcart.hover(function () {
            $shopcarthint.show();
            $shopcart.css('background-color','white');
            $shopcart.children('a').css('color','#ff7f1c');
        },function () {
            $shopcart.css('background-color','#666666');
            $shopcart.children('a').css('color','#cccccc');
            $shopcarthint.hide();
        });

        $shopcarthint.hover(function () {
            $shopcart.css('background-color','white');
            $shopcart.children('a').css('color','#ff7f1c');
        },function () {
            $shopcart.css('background-color','#666666');
            $shopcart.children('a').css('color','#cccccc');
            $shopcarthint.hide();
        })
    }
    cart();
});