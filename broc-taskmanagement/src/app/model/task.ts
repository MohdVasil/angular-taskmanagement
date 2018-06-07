export class Task
{
    constructor(
       public id :number,
       public userId :number,    
       public summary:string,
       public description:string,
       public priorityId:number,  
       public priority:string,      
       public  statusId:number,
       public status:string)
    {

    }
}
// export interface Task
// {    
//     id :number,
//     userId :number,    
//     summary:string,
//     description:string,
//     priorityId:number,        
//     statusId:number
    
// }

