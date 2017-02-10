
(function(){
'user strict';
  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);


  LunchCheckController.$inject[$scope];

  function LunchCheckController($scope){
    $scope.itemsStr ;
    $scope.items;
    $scope.msg = "";
    $scope.msgStyle;
    $scope.countItems = function(){

    var count = 0;
    var errorStyle="{color:'red';border:'1px solid red '};
    var okStyle="{color:'green'}";

    if($scope.itemsStr != null && $scope.itemsStr != 'undefined'){
      $scope.items = $scope.itemsStr.split(',');

      for (var i = 0; i < $scope.items.length; i++) {
          if($scope.items[i].trim() != ""){
            count++;
          }
        }
      }

      if(count==0){
        $scope.msg="Please enter data first";
        $scope.msgStyle = errorStyle;
      }
      else if (count < 4) {
        $scope.msg="Enjoy!";
        $scope.msgStyle = okStyle;
      }else {
        $scope.msg="Too much!";
      $scope.msgStyle = okStyle;
      }
    }
  }

})();
//
//
// (function(){
// 'user strict';
//   angular.module('LunchCheck',[])
//
//   .controller('LunchCheckController', function($scope){
//     $scope.itemsStr ;
//     $scope.items;
//     $scope.msg = "";
//     $scope.msgStyle = {color:'black'};
//     $scope.countItems = function(){
//
//     var count = 0;
//
//     if($scope.itemsStr != null && $scope.itemsStr != 'undefined'){
//       $scope.items = $scope.itemsStr.split(',');
//
//       for (var i = 0; i < $scope.items.length; i++) {
//           if($scope.items[i].trim() != ""){
//             count++;
//           }
//         }
//       }
//
//       if(count==0){
//         $scope.msg="Please enter data first";
//         $scope.msgStyle = {color:'black'};
//       }
//       else if (count < 4) {
//         $scope.msg="Enjoy!";
//         $scope.msgStyle = {color:'green'};
//       }else {
//         $scope.msg="Too much!";
//       $scope.msgStyle = {color:'red'};
//       }
//     }
//   });
//
// })();
