import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { AllGroundsComponent } from './all-grounds/all-grounds.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AllGroundsBookComponent } from './all-grounds-book/all-grounds-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'all-grounds', component: AllGroundsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactComponent },
  {path:'bookground/:id',component:AllGroundsBookComponent},
 
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
   { path: '**', redirectTo: '/home', pathMatch:'full' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
