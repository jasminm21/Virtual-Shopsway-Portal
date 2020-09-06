import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './products/product.module';
import { EmployeeModule } from './employee/employee.module';


const appRoutes:Routes=[
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: WelcomeComponent},
  {path: '**', redirectTo:'home', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    EmployeeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
