app=angular.module("app",[]);

app.directive("imageCropper",function(){
    return {
        restrict: "E",
        template: '<div>'+
            '<input type="file" id="file" name="file" accept="image/*" />'+
             '<div ">'+
                    '<input type="button" value="上傳"  />'+
                    '<input type="submit" value="取消" />'+
                 '</div>' +
              '</div>'
    };
});
