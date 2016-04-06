module App {
    'use strict';
    export class workspaceExist
    {
        public link: (scope:any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes,ngModel:ng.INgModelController) => void;
        public require = 'ngModel';
        public timeout:any;

        constructor(private WorkspaceService:IWorkspaceService,private $filter:ng.IFilterService,private $timeout:ng.ITimeoutService)
        {
            workspaceExist.prototype.link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes,ngModel:ng.INgModelController) =>
            {                 //For DOM -> model validation
                ngModel.$parsers.unshift(function(value) {
                    $(element).closest(".form-group").addClass('is-loading');
                    $(element).closest(".form-group").removeClass('has-error');
                    $(element).closest(".form-group").removeClass('has-success');
                    ngModel.$setValidity('workspace', true);
                    ngModel.$setValidity('is-loading', false);
                    
                    if(this.timeout){
                        $timeout.cancel(this.timeout)
                    }
                    this.timeout = $timeout(()=>{
                        
                         WorkspaceService.getWorkspaces().then((data:Array<App.IWorkspace>)=>{
                        //get the workspacename
                            var searchName = value;
                            //all the workspaced
                            var workspaces = data;
                            //see if the name is in the worksapce
                            var filterd = $filter('filter')(workspaces,function(val){
                                return val.name === searchName;
                            });
                            //check if the given workspace exist                          
                            if(filterd.length === 1){
                                ngModel.$setValidity('workspace', false);
                                $(element).closest(".form-group").addClass('has-error');
                            }else{
                                ngModel.$setValidity('workspace', true);
                                $(element).closest(".form-group").addClass('has-success');
                            }
                        },()=>{
                            ngModel.$setValidity('workspace', false);
                        }).finally(() =>{
                            $(element).closest(".form-group").removeClass('is-loading');
                            ngModel.$setValidity('is-loading', true);
                        })  
                        
                    },1500);                                  
                    return value;
                });

                //For model -> DOM validation
                ngModel.$formatters.unshift(function(value) {
                   //ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
                    return value;
                });
            };
        }

        public static Factory()
        {
            var directive = (WorkspaceService:IWorkspaceService,$filter:ng.IFilterService,$timeout:ng.ITimeoutService) =>
            {
                return new workspaceExist(WorkspaceService,$filter,$timeout);
            };

            directive['$inject'] = ['WorkspaceService','$filter','$timeout'];

            return directive;
        }
    }
   angular.module(App.Module).directive("workspaceExist", 
   workspaceExist.Factory());
}