"use strict";
app.directive('loading',function(){
  return{
    restrict: 'A',
    template:'<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>'
  };
});

app.directive('error',function(){
  return{
    restrict: 'A',
    template:'<h3 class="text-center text-danger"><span class="glyphicon glyphicon-remove-sign"></span><span> No data available.</span></h3>'
  };
});
