import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'chart-comp',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
  })
  export class ChartComponent {
    constructor (private httpService: HttpClient,private _taskService: TaskService) { }

    // ADD CHART OPTIONS. 
    pieChartOptions = {
        responsive: true
    }

    pieChartLabels = []; //['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  
    // CHART COLOR.
    pieChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        { 
            data: []
        }
    ];
  
    ngOnInit () {
        // this.httpService.get('./assets/jsondata/sales.json', {responseType: 'json'}).subscribe(
        //     data => {
        //         console.log(data[0]);
        //         console.log(data);
        //         this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        //     },
        //     (err: HttpErrorResponse) => {
        //         console.log (err.message);
        //     }
        // );

        this._taskService.getTaskList().subscribe(data=>
            {  

                var totalUserIds = [];
                data.forEach(function(team){
                    totalUserIds.push(team.userId.toString());
                  });
                   
                  var chartData=[];
                  totalUserIds.forEach(value=>
                    {
                        var count = 0;
                        var isLableExist=false;
                        totalUserIds.forEach(equalValue=>
                             {
                                if(value === equalValue) 
                                {
                                      count++;
                                    //   alert(count);
                                }
                            })
                            this.pieChartLabels.forEach(checkValue => {
                                if(checkValue.toString() === value.toString())
                                   isLableExist = true;
                            }); 
                            if(isLableExist === false)
                            {                                  
                            chartData.push(count);
                            this.pieChartLabels.push(value);
                            }
                    });
                    this.pieChartData = chartData as any [];
                    console.log(this.pieChartData);
                    console.log(this.pieChartLabels);
                    
        });
}



    onChartClick(event) {
        console.log(event);
    }

    
}