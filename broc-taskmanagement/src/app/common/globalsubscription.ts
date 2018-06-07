import{Injectable} from '@angular/core'
import{Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable,Subject } from 'rxjs';

@Injectable()

// This class used for globally event subscription and publish 
export class GlobalSubscription 
{    
    constructor(private _http:Http)
    {

    }       
    public source = new Subject();
    private handleError(error:Response)
    {
       return Observable.throw(error.json().error || "Server Error");      
    }
}
//public source = new BehaviorSubject<any>(' ');