import{Injectable} from '@angular/core'
import{User} from '../model/user';
import{Http,Response,RequestOptions,Headers} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/Operator/catch';
import 'rxjs/add/observable/of';

@Injectable(
    {
        providedIn: 'root'
      }
)

export class UserService
{
    private _userUrl='https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private _http:Http)
    {

    }   
    getUserList():Observable<User[]>
    {    
    //   return this._http.get(this._userUrl)
    //           .map((response:Response)=>response ? response.json() : '')
    //           .catch(this.handleError);
    //   var data= new Observable<User[]>((subscriber: Subscriber<User[]>) => subscriber.next(userData)).map(response=>response).catch(this.handleError);  
    
    var data=this._http.get('./assets/jsondata/userdata.json')
              .map((response:Response)=>response ? response.json() : '')
              .catch(this.handleError);
     return data;                 
    }

    saveUser(user: User) {                
        let body = JSON.stringify({ user });        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

         var data= new Observable<string>((subscriber: Subscriber<string>) => subscriber.next(body)).map(response=>response).catch(this.handleError);  
        //  var data= this._http.post("", body, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
            return data
    }

    deleteUser(users: User[])
    {
        let body = JSON.stringify({ users });        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

         var data= new Observable<string>((subscriber: Subscriber<string>) => subscriber.next(body)).map(response=>response).catch(this.handleError);  
        //  var data= this._http.post("", body, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
            return data 
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    public userDetailSource = new BehaviorSubject<any>(' ');
    private handleError(error:Response)
    {      
      // console.log("Vasil-ErrorHandle");
       return Observable.throw(error.json().error || "Server Error");      
    }
}
const userData: User[]=[
    {"userId":1881,"firstName":"vasilTest1","lastName":"Gupta","email":"mohdvasil11@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123" ,"roleTypeId":0},
    {"userId":1882,"firstName":"vasilTest2","lastName":"Gupta","email":"mohdvasil22@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1883,"firstName":"vasilTest3","lastName":"Gupta","email":"mohdvasil33@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1884,"firstName":"vasilTest4","lastName":"Gupta","email":"mohdvasil44@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1885,"firstName":"vasilTest5","lastName":"Gupta","email":"mohdvasil22@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1886,"firstName":"vasilTest6","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1887,"firstName":"vasilTest7","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1888,"firstName":"vasilTest8","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1889,"firstName":"vasilTest9","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1890,"firstName":"vasilTest10","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1891,"firstName":"vasilTest11","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1892,"firstName":"vasilTest12","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1893,"firstName":"vasilTest13","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1894,"firstName":"vasilTest14","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1895,"firstName":"vasilTest15","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":0},
    {"userId":1896,"firstName":"vasilTest16","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":433443,"password":"Test123","roleTypeId":1},
    {"userId":1874,"firstName":"vasilTest17","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":643784,"password":"Test123","roleTypeId":0},
    {"userId":1839,"firstName":"vasilTest18","lastName":"Gupta","email":"mohdvasi2@broctagon.com","address":"Delhi","phoneNo":8438743,"password":"Test123","roleTypeId":0},
    {"userId":1828,"firstName":"vasilTest19","lastName":"Gupta","email":"mohdvasi3@broctagon.com","address":"Delhi","phoneNo":8748338,"password":"Test123","roleTypeId":1},
    {"userId":1827,"firstName":"vasilTest20","lastName":"Gupta","email":"mohdvasi4@broctagon.com","address":"Delhi","phoneNo":897438,"password":"Test123","roleTypeId":1},
    {"userId":1826,"firstName":"vasilTest21","lastName":"Gupta","email":"mohdvasi5@broctagon.com","address":"Delhi","phoneNo":8974383,"password":"Test123","roleTypeId":0},
    {"userId":1824,"firstName":"vasilTest22","lastName":"Gupta","email":"mohdvasil@broctagon.com","address":"Delhi","phoneNo":8743891,"password":"Test123","roleTypeId":1}
]
 
