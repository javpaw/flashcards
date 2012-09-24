angular.module('fcApp.directives', []).
  directive('keydown',[function(){
  	return function(scope,elm,attr){
  		scope.key_changed = 0;
  		$(document).keydown(function(e){
        var arrows = [37,38,39,40];
        console.log(  _.include(arrows,e.which))

        if (_.include(arrows,e.which)){ 
         scope.key_changed++;
         scope.key = e.which;
         console.log("key pressed",scope.key);
         e.preventDefault();  
        } 
         
    	});
  	}
  }]);