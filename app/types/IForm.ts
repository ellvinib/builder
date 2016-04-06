module App {
    export interface IForm{
        id:number,
        name:string,
        steps:IStep[],
        welcomeItems:IScreenItem[],
        thankYouItems:IScreenItem[],
        lastEdit:Date,
        dateCreated:Date,
        checked:boolean
    }
}