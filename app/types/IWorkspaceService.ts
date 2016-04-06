module App {
    export interface IWorkspaceService {
        getWorkspace:(id:number)=> ng.IPromise<IWorkspace>;
        addWorkspace:(workspace:IWorkspace) =>ng.IPromise<IWorkspace>;
        removeWorkspace:(workspace:IWorkspace) => void;
        updateWorkspace:(workspace:IWorkspace) => void;
        getWorkspaces:()=>ng.IPromise<Array<IWorkspace>>;
    }
}