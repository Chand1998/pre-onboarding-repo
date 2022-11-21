import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Stock from '../models/Stock';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  Url: string = `${environment.baseUrl}/stock`;
  stockFromApi : Stock | undefined = undefined;
  stockList : Array<Stock> | undefined = undefined;

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    const res = this.http.get<any>(`${this.Url}/list`,{headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.stockList = data
    })
    return res;
  }

  findGreater(stockPriceMeasureValue: number): Observable<any> {
    const payload = {stockPriceMeasureValue: stockPriceMeasureValue};
    const res = this.http.post<any>(`${this.Url}/listgreater`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.stockList = data;
    })
    return res;
  }

  findlessthanequal(stockPriceMeasureValue: number): Observable<any> {
    const payload = {stockPriceMeasureValue:stockPriceMeasureValue};
    const res = this.http.post<any>(`${this.Url}/listlessthanequal`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.stockList = data;
    })
    return res;
  }
  
  findStock(ticketSymbol: string): Observable<any> {
    const payload = {ticketSymbol:ticketSymbol};
    const res = this.http.post<any>(`${this.Url}/ticketsymbol`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.stockFromApi = data;
    })
    return res;
  }

  updateStock(stockQuantity: number, stockPrice: number, ticketSymbol: string): Observable<any> {
    const payload = {stockQuantity: stockQuantity, stockPrice: stockPrice, ticketSymbol: ticketSymbol};
    const res = this.http.post<any>(`${this.Url}/update`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.stockFromApi = data;
    })
    return res;
  }

}
