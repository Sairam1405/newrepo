import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { AllGroundsComponent } from './all-grounds/all-grounds.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllGroundsCardsComponent } from './all-grounds-cards/all-grounds-cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AllGroundsBookComponent } from './all-grounds-book/all-grounds-book.component';
import { PaymentComponent } from './payment/payment.component';
import { UserheadComponent } from './users/userhead/userhead.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { UserdashboardComponent } from './users/userdashboard/userdashboard.component';
import { UseraboutComponent } from './users/userabout/userabout.component';
import { UserallgroundsComponent } from './users/userallgrounds/userallgrounds.component';
import { UserlocationsComponent } from './users/userlocations/userlocations.component';
import { UserbookgroundComponent } from './users/userbookground/userbookground.component';
import { UseraccountComponent } from './users/useraccount/useraccount.component';
import { UserbookingsComponent } from './users/userbookings/userbookings.component';
import { BookingDetailsComponent } from './users/booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LocationsComponent,
    AllGroundsComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    ContactComponent,
    AllGroundsCardsComponent,
    FeedbackComponent,
    AllGroundsBookComponent,
    PaymentComponent,
    UserheadComponent,
    UserhomeComponent,
    UserdashboardComponent,
    UseraboutComponent,
    UserallgroundsComponent,
    UserlocationsComponent,
    UserbookgroundComponent,
    UseraccountComponent,
    UserbookingsComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
