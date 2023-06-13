import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService,MessageService } from 'primeng/api';
import { TimelineComponent } from './timeline/timeline.component';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ConfirmDialogComponent,
    TimelineComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
   BrowserAnimationsModule,
    ConfirmDialogModule,
    ToastModule,
    TimelineModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
