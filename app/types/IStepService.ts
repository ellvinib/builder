module App {
    export interface IStepService {
        getStep:(workspace:IWorkspace,id:number)=>void;
        addStep:(workspace:IWorkspace,step:IStep) => void;
        removeStep:(workspace:IWorkspace,step:IStep) => void;
        updateStep:(workspace:IWorkspace,step:IStep) => void;
    }
}