import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BarChartApiService {

  // dummy url
  public _urlBarChart = "/assets/data/barChartContent.json";

  public _urlBarChart1 = "http://localhost:8080/card/getAlternateLocation/Kal";


  constructor(private http: HttpClient) { }

  getBarChartContent(destination:string){
    // console.log(this._urlBarChart+'/'+destination);

    return this.http.get(this._urlBarChart1)
    .pipe(
      map(
        (data:{count:string,location:string}[])=>{
          let chartLabels = [];
          let chartDataValues = [];
          data.forEach(i=>{
                chartLabels.push(i.location);
                chartDataValues.push(i.count);
          })
        return  {
          chartLabels ,
          chartDataValues
        };
        }
      )
    )
    // return this.http.get<any>(this._urlBarChart);
    // return this.http.get<any>(this._urlBarChart+'/'+destination);
  }
}
