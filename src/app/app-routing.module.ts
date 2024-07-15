import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MyPropertiesComponent } from './pages/my-properties/my-properties.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PaymentGatewayComponent } from './admin/payment-gateway/payment-gateway.component';
import { ConfirmationComponent } from './admin/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'my-properties', component: MyPropertiesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'property-detail', component: PropertyDetailComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'paymentGateway', component: PaymentGatewayComponent},
  { path: 'confirm' , component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
