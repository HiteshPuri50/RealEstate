import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedPropertiesComponent } from './components/featured-properties/featured-properties.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyPropertiesComponent } from './pages/my-properties/my-properties.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { CurrencypipePipe } from './pipes/currencypipe.pipe';
import { SquarefeetPipe } from './pipes/squarefeet.pipe';
import { ShortNamePipe } from './pipes/short-name.pipe';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { UpdateDataDialogComponent } from './pages/update-data-dialog/update-data-dialog.component';
import { DatedifferencePipe } from './pipes/datedifference.pipe';
import { UserPropertiesComponent } from './pages/user-properties/user-properties.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturedPropertiesComponent,
    TestimonialsComponent,
    ContactFormComponent,
    HomeComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyPropertiesComponent,
    FavoritesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    AddPropertyComponent,
    CurrencypipePipe,
    SquarefeetPipe,
    ShortNamePipe,
    UpdateDataDialogComponent,
    DatedifferencePipe,
    UserPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
