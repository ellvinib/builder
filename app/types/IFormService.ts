module App {
    export interface IFormService {
        getForm:(workspace:IWorkspace,id:number)=>void;
        addForm:(workspace:IWorkspace,Form:IForm) => void;
        removeForm:(workspace:IWorkspace,Form:IForm) => void;
        updateForm:(workspace:IWorkspace,Form:IForm) => void;
    }
}