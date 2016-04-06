module App {
    "use strict";
    export interface IRoute {
       init():void
	}

	export class Route implements IRoute {
		constructor(private $stateProvider:angular.ui.IStateProvider,private $urlRouterProvider:angular.ui.IUrlRouterProvider) {
            this.init();         
		}
        
        init(): void
        { 
            this.$urlRouterProvider.otherwise("/home");
             this.$stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "templates/homeTemplate.html"
                })
        }
       
	}

	angular.module(App.Module)
		.config(["$stateProvider", "$urlRouterProvider",( $stateProvider:angular.ui.IStateProvider,$urlRouterProvider:angular.ui.IUrlRouterProvider) => new Route($stateProvider,$urlRouterProvider)]);
}