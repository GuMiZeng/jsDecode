var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.model = [
        {
            name: "小米手机5 全网通高配版 白色 64GB",
            src:"../img/list-img.jpg",
            price: 1299.00,
            num: 1,
            subtotal: 0,
            check: false
        },
        {
            name: "小米手机 全网通高配版 粉色 32GB",
            src:"../img/img-1/009.jpg",
            price: 699.00,
            num: 1,
            subtotal: 0,
            check: false
        }
    ];

    $scope.subtotal = function () {
        $scope.allcheck = true;
        $scope.total = 0;
        $scope.NUM = 0;
        $scope.model.forEach(function (mod, index) {
            if (mod.check){
                $scope.total += mod.subtotal;
                $scope.NUM += mod.num;
                console.log($scope.allcheck);
            }
            mod.subtotal = mod.price * mod.num;
            $scope.allcheck = $scope.allcheck && mod.check;
        });
    };

    $scope.subtotal();

    $scope.checkAll = function () {
      var check = $scope.allcheck;

      $scope.model.forEach(function (mod, index) {
          mod.check = check;
      });
      $scope.subtotal();
      console.log($scope.allcheck);
    };

    $scope.check = function () {
        $scope.subtotal();
    };

    $scope.addNum = function (index) {
        $scope.model[index].num +=1;
        $scope.subtotal();
    };

    $scope.reduceNum = function (index) {

        if ($scope.model[index].num < 1){
            return 0;
        }
        $scope.model[index].num -=1;
        $scope.subtotal();
    };

    $scope.deleteItem = function (index) {
        $scope.model.splice(index, 1);
        console.log(index);
    }
});