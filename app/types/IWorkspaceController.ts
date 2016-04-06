module App {
    export interface IWorkspaceController {
        getWorkspaces:()=>void;
        loading:boolean;
        workspaces:Array<IWorkspace>;
    }
}