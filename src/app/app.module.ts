import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './result/result.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:CalculatorComponent},
  {path:'aboutMe',component:AboutMeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultComponent,
    NumbersComponent,
    ButtonsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
