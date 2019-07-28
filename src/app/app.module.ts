import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScripComponent } from './scrip/scrip.component';
import { TradeComponent } from './trade/trade.component';
import { BuyComponent } from './trade/buy/buy.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ScripComponent, TradeComponent, BuyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
