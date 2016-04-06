
module App {
   
    export class workspaceAddCtrl {

        constructor(private $modalInstance:any) {

        }
        public name:string;
        public form:any;
        
        public addWorkspaces = (name:string) =>{
            var workspace:IWorkspace = {
                id:undefined,
                name:name,
                forms:[]
            }
            this.$modalInstance.$close(workspace);
        }
        
        public cancel = () => {
             this.$modalInstance.$dismiss('cancel is pressed');
        }
        
    }    
    //workspaceCtrl.$inject = [];
   angular.module(App.Module).controller("workspaceAddCtrl", ["$modalInstance",($modalInstance:any)=>new workspaceAddCtrl($modalInstance)]);
}