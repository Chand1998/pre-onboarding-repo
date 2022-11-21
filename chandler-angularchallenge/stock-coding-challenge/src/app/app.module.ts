import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StocklistComponent } from './components/stocklist/stocklist.component';
import { StockfindComponent } from './components/stockfind/stockfind.component';
import { StockbuyComponent } from './components/stockbuy/stockbuy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StocklistComponent,
    StockfindComponent,
    StockbuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
