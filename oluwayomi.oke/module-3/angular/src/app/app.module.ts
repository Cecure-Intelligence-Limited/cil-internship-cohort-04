import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EditComponent } from './pages/edit/edit.component';
import { AddComponent } from './pages/add/add.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { RestserviceService } from './restservice.service';
import { ContactService } from './service/restapi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EditComponent,
    AddComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestserviceService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
