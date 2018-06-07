import{Injectable} from '@angular/core'
import{Task} from '../model/task';
import{Http,Response,RequestOptions,Headers} from '@angular/http';
import { Observable,Subscriber,BehaviorSubject,Subject } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/Operator/catch';
import 'rxjs/add/observable/of';

@Injectable(
    {
        providedIn: 'root'
      }
)

export class TaskService
{
    private _taskUrl='https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private _http:Http)
    {

    }   
    getTaskList():Observable<Task[]>
    {    
    //   return this._http.get(this._userUrl)
    //           .map((response:Response)=>response ? response.json() : '')
    //           .catch(this.handleError); 
    
    //  var data= new Observable<Task[]>((subscriber: Subscriber<Task[]>) => subscriber.next(taskData)).map(response=>response).catch(this.handleError);  
    var data=this._http.get('./assets/jsondata/taskdata.json')
              .map((response:Response)=>response ? response.json() : '')
              .catch(this.handleError);
     return data;                 
    }

    createTask(task: Task) {                
        let body = JSON.stringify({ task });        
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
    private handleError(error:Response)
    {
       return Observable.throw(error.json().error || "Server Error");      
    }

    public taskDetailSource = new BehaviorSubject<any>(' ');
}