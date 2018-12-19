import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { FeatureComponent } from './feature/feature.component';
import { ForgetComponent } from './forget/forget.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { CompletedComponent } from './completed/completed.component';
import { IdProofComponent } from './id-proof/id-proof.component';
import { NavbarComponent } from './navbar/navbar.component';

// const appRoutes: Routes = [
//   {path: '',redirectTo: '/login',pathMatch: 'full'},
//   {path: 'register',component:RegisterComponent},
//   {path: 'login',component:LoginComponent},
//   {path: 'contactus',component:ContactusComponent},
//   {path: 'admin',component:AdminComponent},
//   {path: 'aboutus',component:AboutusComponent},
//   { path: '**', component: PageNotFoundComponent }

// ];
@NgModule({
  declarations: [ 
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    MyNavComponent,
    FeatureComponent,
    ForgetComponent,
    PageNotFoundComponent,
    PersonalComponent,
    WorkComponent,
    CompletedComponent,
    IdProofComponent,
    NavbarComponent
  ],
  imports: [
    //  RouterModule.forRoot(appRoutes ,{ enableTracing: true } ),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
