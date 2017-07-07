import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: TimerComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    TimerComponent,
    LoginComponent,
    ChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
