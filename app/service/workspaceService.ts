module App {
    'use strict';

    export class WorkspaceService implements IWorkspaceService {

        constructor(private dataStore:any,private $q:ng.IQService) {
            
        }
        
        
        public getWorkspace:(id:number) => ng.IPromise<IWorkspace> = (id:number) =>{
            var defer = this.$q.defer();
            
             for( var workspa of this.dataStore.workspaces){
                if (id === workspa.id){
                    defer.resolve(workspa);
                    return;
                }
            }            
            return defer.promise;            
        }
        
        public getWorkspaces:() => ng.IPromise<Array<IWorkspace>> = () =>{
            var defer = this.$q.defer();
            defer.resolve(this.dataStore.workspaces);            
            return defer.promise;  
        }
        
        public addWorkspace:(workspace:IWorkspace) => ng.IPromise<IWorkspace> = (workspace:IWorkspace) =>{
            var defer = this.$q.defer();
            
            this.dataStore.workspaces.push(workspace);
            defer.resolve(this.dataStore.workspaces);
            
            return defer.promise;            
        }
        
        
        public removeWorkspace:(workspace:IWorkspace)  => ng.IPromise<Array<IWorkspace>> = (workspace:IWorkspace) =>{
            var defer = this.$q.defer();
            
            var index = this.dataStore.workspaces.indexOf(workspace);
            this.dataStore.workspaces.splice(index,1);
            
            defer.resolve(this.dataStore.workspaces);
            
            return defer.promise;            
        }
        
        public updateWorkspace:(workspace:IWorkspace) => ng.IPromise<Array<IWorkspace>> = (workspace:IWorkspace) =>{
            var defer = this.$q.defer();
            
            var index = this.dataStore.workspaces.indexOf(workspace);
            
            defer.resolve(this.dataStore.workspaces);
            
            return defer.promise;            
        }
        
    }
    
    
    angular.module(App.Module).factory("WorkspaceService", ["dataStore","$q",(dataStore:any,$q:ng.IQService)=> new WorkspaceService(dataStore,$q)]);
}