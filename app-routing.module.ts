import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { PersonalComponent } from './navigation/personal/personal.component';
import { WorkComponent } from './navigation/work/work.component';
import { CompletedComponent } from './navigation/completed/completed.component';
import { IdProofComponent } from './navigation/id-proof/id-proof.component';

import { WorkflowGuard }        from './navigation/workflow/workflow-guard.service';
//import { WorkflowService }      from './workflow/workflow.service';
import { ProgressbarComponent } from './progressbar/progressbar.component';

const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  
  {path: 'login',component:LoginComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'aboutus',component:AboutusComponent},
  // {path: '**', component: PageNotFoundComponent},
  
  {path: 'register',component:RegisterComponent},
    {path: 'register/personal',component:PersonalComponent},
    {path: 'register/work',component:WorkComponent},
    {path: 'register/completed',component:CompletedComponent},
    {path: 'register/id-proof',component:IdProofComponent},
  
  
  {path: 'progressbar',component:ProgressbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class AppRoutingModule { }
