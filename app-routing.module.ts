import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { CompletedComponent } from './completed/completed.component';
import { IdProofComponent } from './id-proof/id-proof.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
//import { WorkflowService }      from './workflow/workflow.service';

const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'aboutus',component:AboutusComponent},
  { path: '**', component: PageNotFoundComponent},
  {path: 'personal',component:PersonalComponent},
  {path: 'work',component:WorkComponent},
  {path: 'completed',component:CompletedComponent},
  {path: 'id-proof',component:IdProofComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true} ) ],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class AppRoutingModule { }
