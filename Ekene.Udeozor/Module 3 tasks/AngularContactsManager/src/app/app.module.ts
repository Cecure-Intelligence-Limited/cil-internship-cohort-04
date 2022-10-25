import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path: '', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactItemComponent,
    AddContactComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
