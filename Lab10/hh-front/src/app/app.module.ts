import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 👈 импорт

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CompanyListComponent,
    VacancyListComponent,
    BrowserModule,
    HttpClientModule // 👈 сюда тоже добавляем
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
