import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  //dummy
  // private _urlCardContent:string = "/assets/data/cardContent.json";
  private _urlCardContent:string = "http://localhost:8080/card/getCardData"
  // private _urlCard2Content:string = "/assets/data/card2Content.json";
  private _urlCard2Content:string = "http://localhost:8080/card/getNotReleased";

  //Original
  // private _urlCardContent:string = "/card/getCardContent";

  constructor(private http: HttpClient) { }

  getCardContent(){
    return this.http.get(this._urlCardContent);
  }
  getCard2Content(){
    return this.http.get(this._urlCard2Content);
  }

}
