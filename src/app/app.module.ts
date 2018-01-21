import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ConteudoExtraComponent } from './conteudo-extra/conteudo-extra.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ConteudoExtraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
