module App {
    'use strict';

    export class StepService implements IStepService {

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
        
        public getStep:(workspace:IWorkspace,id:number) => ng.IPromise<Array<IStep>> = (workspace:IWorkspace,id:number) =>{
            var defer = this.$q.defer();
            
            var getWorkspace=this.getWorkspace(workspace)
            if(getWorkspace){
               // getWorkspace.
            }else{
                defer.reject({info:'Workspace not found'})
            }            
            
            defer.resolve(angular.copy(this.dataStore.steps));
            
            return defer.promise;            
        }
        
        public addStep:(workspace:IWorkspace,step:IStep) => ng.IPromise<Array<IStep>> = (workspace:IWorkspace,step:IStep) =>{
            var defer = this.$q.defer();
            
            this.dataStore.Steps.push(step);
            
            defer.resolve(angular.copy(this.dataStore.steps));
            
            return defer.promise;            
        }
        
        
        public removeStep:(workspace:IWorkspace,step:IStep)  => ng.IPromise<Array<IStep>> = (workspace:IWorkspace,step:IStep) =>{
            var defer = this.$q.defer();
            
            var index = this.dataStore.steps.indexOf(step);
            this.dataStore.steps.splice(index,1);
            
            defer.resolve(angular.copy(this.dataStore.steps));
            
            return defer.promise;            
        }
        
        public updateStep:(workspace:IWorkspace,step:IStep) => ng.IPromise<Array<IStep>> = (workspace:IWorkspace,step:IStep) =>{
            var defer = this.$q.defer();
            
            var index = this.dataStore.steps.indexOf(step);
            
            defer.resolve(angular.copy(this.dataStore.steps));
            
            return defer.promise;            
        }
        
    }
    
    
    angular.module(App.Module).factory("StepService", ["dataStore","$q",(dataStore:any,$q:ng.IQService)=> new StepService(dataStore,$q)]);
}