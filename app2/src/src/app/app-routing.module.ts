import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'aboutus',component:AboutusComponent},
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
