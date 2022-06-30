import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { CoinInterface } from '../models/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, ) { }

  getCurrency(){
    return this.http.get<CoinInterface>(`${environment.api_url}list`)
  }

  getCurrencyById(coinId:string){
    return this.http.get<any>(`${environment.api_url}${coinId}`)
  }
}