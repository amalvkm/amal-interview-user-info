import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddressComponent } from './user/address/address.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EducationQualificationComponent } from './user/education-qualification/education-qualification.component';
import { ExperienceComponent } from './user/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddressComponent,
    EducationQualificationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
