import{Injectable} from '@angular/core'
import{User} from '../model/user';
import{Http,Response,RequestOptions,Headers} from '@angular/http';
import{Observable,Subscriber} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/Operator/catch';
// import 'rxjs/add/observable/of';

@Injectable()

export class LoginService
{
    private _userUrl='https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private _http:Http)
    {

    }

    login(userId:number, password:string):Observable<User[]>
    {
        var data=this._http.get('./assets/jsondata/userdata.json')
              .map((response:Response)=>response ? response.json() : '')
              .catch(this.handleError);
            return data;
    }

    private handleError(error:Response)
    {
       return Observable.throw(error.json().error || "Server Error");      
    }
}