import { User } from '../model/user';

//This class will maintain globally variable.
export class GlobalVar {
 
   public static  userName: string;
   public static  userId: number;
    /**
     * GlobalMethod
     */
    public static GloballyAssign(userName: string,userId: number) {
        this.userName=userName;
        this.userId=userId;
    }
}

