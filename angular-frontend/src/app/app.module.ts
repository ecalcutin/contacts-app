import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './shared/components/material/material.module'
// Services
import { ContactsService } from './shared/services/contacts.service';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AddContactComponent } from './shared/components/add-contact/add-contact.component';
// Pages

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
