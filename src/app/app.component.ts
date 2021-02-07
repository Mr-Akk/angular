import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient:HttpClient){

  }
  title = 'fedex-DA-dashboard';

  checkButton(){
        this.httpClient.get("http://localhost:8080/table/getNotReleasedData").subscribe
        ( data =>{
          console.log(data);

        })
  }
}
