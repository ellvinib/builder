module App {
    'use strict';

    export class FormService implements IFormService {

        constructor(private dataStore:IDataStore,private $q:ng.IQService) {
            
        }
        
        private getWorkspace:(workspace:IWorkspace) => IWorkspace = (workspace:IWorkspace) => {
            for( var workspa of this.dataStore.workspaces){
                if (workspace.id === workspa.id){
                    return workspa;
                }
            }            
            return undefined;
        }
        
        public getForm:(workspace:IWorkspace,id:number) => ng.IPromise<IForm> = (workspace:IWorkspace,id:number) =>{
            var defer = this.$q.defer();
            var getWorkspace=this.getWorkspace(workspace)
            if(getWorkspace){
                for(var form of getWorkspace.forms){
                    if(form.id === id){
                        defer.resolve(angular.copy(form));
                    }
                }
                 defer.reject({info:'Form not found'});
            }else{
                defer.reject({info:'Workspace not found'})
            }            
            return defer.promise;            
        }
        
        public addForm:(workspace:IWorkspace,Form:IForm) => ng.IPromise<IWorkspace> = (workspace:IWorkspace,Form:IForm) =>{
            var defer = this.$q.defer();
            var getWorkspace=this.getWorkspace(workspace)
            if(getWorkspace){
                getWorkspace.forms.push(Form);
                defer.resolve(angular.copy(getWorkspace));                
            }else{
                defer.reject({info:'Workspace not found'})
            }
            return defer.promise;            
        }
        
        
        public removeForm:(workspace:IWorkspace,Form:IForm)  => ng.IPromise<Array<IForm>> = (workspace:IWorkspace,Form:IForm) =>{
            var defer = this.$q.defer();
            var getWorkspace=this.getWorkspace(workspace)
            if(getWorkspace){
                var index = getWorkspace.forms.indexOf(Form);
                getWorkspace.forms.splice(index,1);
                defer.resolve(angular.copy(getWorkspace));                
            }else{
                defer.reject({info:'Workspace not found'})
            }                
            return defer.promise;            
        }
        
        public updateForm:(workspace:IWorkspace,Form:IForm) => ng.IPromise<Array<IForm>> = (workspace:IWorkspace,Form:IForm) =>{
            var defer = this.$q.defer();
            var getWorkspace=this.getWorkspace(workspace)
                if(getWorkspace){
                    var index = getWorkspace.forms.indexOf(Form);
                    getWorkspace.forms[index] = Form;
                    defer.resolve(angular.copy(getWorkspace));                
                }else{
                    defer.reject({info:'Workspace not found'})
                }              
            return defer.promise;            
        }
        
    }
    
    
    angular.module(App.Module).factory("FormService", ["dataStore","$q",(dataStore:any,$q:ng.IQService)=> new FormService(dataStore,$q)]);
}