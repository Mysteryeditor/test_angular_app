import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiselectComponent } from './multiselect/multiselect.component';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MultiselectComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectModule,
    BrowserAnimationsModule,
   // NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
