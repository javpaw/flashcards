angular.module('fcApp.directives', []).
  directive('keydown',[function(){
  	return function(scope,elm,attr){
  		scope.key_changed = 0;
  		$(document).keydown(function(e){
        var arrows = [37,38,39,40];
        if (_.include(arrows,e.which)){ 
         scope.key_changed=scope.key_changed+1;
         scope.key = e.which;
         e.preventDefault();
         scope.$apply();
        } 

    	});
  	}
  }]);