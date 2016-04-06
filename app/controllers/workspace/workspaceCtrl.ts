
module App {
   
    export class workspaceCtrl implements IWorkspaceController{
        public loading:boolean = true;
        public workspaces:Array<IWorkspace>= [];
        constructor(private WorkspaceService:IWorkspaceService,private $modal:any,private tinkApi:any) {
          this.getWorkspaces();
        }
        
        public getWorkspaces = () =>{
          this.WorkspaceService.getWorkspaces().then((data)=>{
            this.workspaces = data;
          }).finally(()=>{
            this.loading = false;
          })
        }
        
        public addWorkspace = () =>{
          var modalInstance = this.$modal.open({
                templateUrl: 'templates/workspace/workspaceAddCtrl.html',
                controller:'workspaceAddCtrl',
                controllerAs:'ctrl',
                backdrop:true
            });
            modalInstance.result.then((workspace:IWorkspace)=>{
                this.WorkspaceService.addWorkspace(workspace).then((workspace:IWorkspace)=>{
                    this.tinkApi.sideNavToggle.reloadById("asideNavLeft");
                })
            })
        }
    }    
    //workspaceCtrl.$inject = [];
   angular.module(App.Module).controller("workspaceCtrl", ["WorkspaceService","$modal","tinkApi",(WorkspaceService:IWorkspaceService,modal:any,tinkApi:any)=>new workspaceCtrl(WorkspaceService,modal,tinkApi)]);
}