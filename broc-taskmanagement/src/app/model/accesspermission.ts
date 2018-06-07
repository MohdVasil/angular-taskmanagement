export class AccessPermission
{
    constructor(
        public IsLoginSuccess:boolean,
        public IsAdmin:boolean,                
        public IsTaskListVisible:boolean,
        public IsUserListVisible:boolean)
    {

    }
}