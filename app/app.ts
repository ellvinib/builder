module App {
    "use strict";
	var app = angular.module(Module, [
		"ngAnimate",
		"ngCookies",
		"ngTouch",
		"ngSanitize",
		"ui.router",
        "tink.navigation",
        "tink.modal",
        "tink.tinkApi",
        "tink.split-view",
        angularDragula(angular),
        "formRenderer",
        "oi.select",
        "default-form-field",
        "defaultFields"
	]);
    
    app.run(["$rootScope",function($rootScope:any){
        $rootScope.$on('$stateChangeSuccess', 
            function(event:any, toState:any){
                $rootScope.$activeState= toState.name;
            })
    }])
	
}