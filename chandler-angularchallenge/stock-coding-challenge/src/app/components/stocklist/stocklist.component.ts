import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Stock from 'src/app/models/Stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  stockList: Stock[] = [];

  stockForm : number = 750;
  stockFormTwo : number = 750;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    console.log("onInit");
    this.stockService.list().subscribe(
      (response) => {
        this.stockList = response
      }
    )
  }

  greater(): void{
    console.log("we are hitting functions");
    this.stockService.findGreater(this.stockForm).subscribe(
      (response) => {
        this.stockList = response
      }
    )
  }

  lessThanEqual(): void{
    console.log("we are hitting functions");
    this.stockService.findlessthanequal(this.stockFormTwo).subscribe(
      (response) => {
        this.stockList = response
      }
    )
  }

}
