module App {
    'use strict';

    export class dataStore{

        constructor() {
            
            return {
                workspaces:[{
                    id:1,
                    name:'A-stad',
                    forms:[]
                },
                {
                    id:2,
                    name:'Ocmw',
                    forms:[]
                }]
            }
        }
        
    }
    
    
    angular.module(App.Module).factory("dataStore", [()=> new dataStore()]);
}