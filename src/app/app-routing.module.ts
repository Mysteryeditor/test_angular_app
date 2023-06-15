import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MouseeventsComponent } from './mouseevents/mouseevents.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserdetailsComponent } from './browserdetails/browserdetails.component';
import { DirectivesComponent } from './directives/directives.component';
const routes: Routes = [
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"mouseevents",
    component:MouseeventsComponent
  },
  {
    path:"empdetails",
    component:EmployeeDetailsComponent
  },
  {
    path:"Browserdata",
    component:BrowserdetailsComponent
  },
  {
    path:"dir",
    component:DirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
