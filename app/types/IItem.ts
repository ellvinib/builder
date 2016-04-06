module App {
    export interface IItem{
        id: number,
        placeholder:string,
        label:string,
        shortDescription:string,
        extraInfo:string,
        required:boolean,
        type:string,
        extraOptions:any
    }
}