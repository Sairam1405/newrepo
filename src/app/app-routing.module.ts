import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { AllGroundsComponent } from './all-grounds/all-grounds.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AllGroundsBookComponent } from './all-grounds-book/all-grounds-book.component';
import { PaymentComponent } from './payment/payment.component';
import { UserheadComponent } from './users/userhead/userhead.component';
import { LogoutComponent } from './logout/logout.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { UseraboutComponent } from './users/userabout/userabout.component';
import { UserdashboardComponent } from './users/userdashboard/userdashboard.component';
import { UserlocationsComponent } from './users/userlocations/userlocations.component';
import { UserallgroundsComponent } from './users/userallgrounds/userallgrounds.component';
import { UserbookgroundComponent } from './users/userbookground/userbookground.component';
import { UserbookingsComponent } from './users/userbookings/userbookings.component';
import { UseraccountComponent } from './users/useraccount/useraccount.component';
import { BookingDetailsComponent } from './users/booking-details/booking-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'all-grounds', component: AllGroundsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactComponent  },
  { path : 'feedback', component : FeedbackComponent},
  { path : 'bookground/:id', component : AllGroundsBookComponent},
  { path : 'payment', component: PaymentComponent},
  { path : 'uhead', component : UserheadComponent},
  { path : 'uhome', component : UserhomeComponent},
  { path : 'uabout', component : UseraboutComponent},
  { path : 'udashboard', component : UserdashboardComponent},
  { path : 'ulocations', component : UserlocationsComponent},
  { path : 'uallgrounds', component : UserallgroundsComponent},
  { path : 'ubookground/:id', component : UserbookgroundComponent},
  { path : 'ubookings', component : UserbookingsComponent},
  { path : 'uaccount', component : UseraccountComponent},
  { path : 'ubdetails', component : BookingDetailsComponent},
  { path : 'out', component : LogoutComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
   { path: '**', redirectTo: '/home', pathMatch:'full' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
