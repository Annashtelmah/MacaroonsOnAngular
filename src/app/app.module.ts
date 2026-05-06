import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonStyleDirective } from './directives/button-style.directive';
import { CustomTextPipe } from './pipes/custom-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { registerLocaleData } from '@angular/common';



@NgModule({
  declarations: [AppComponent, CurrencyPipePipe, AdvantagesComponent, ProductComponent, ButtonStyleDirective, CustomTextPipe, PhoneFormatPipe],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
