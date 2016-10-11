app=angular.module("app",[]);

app.directive("imageCropper",function(){
    return {
        restrict: "E",
        templateUrl: 'imageCrop.html'
    };
});
