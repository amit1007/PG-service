import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';
import { PersonalComponent } from '../navigation/personal/personal.component';
import { WorkComponent } from '../navigation/work/work.component';
import { CompletedComponent } from '../navigation/completed/completed.component';
import { IdProofComponent } from '../navigation/id-proof/id-proof.component';

const parentModuleRoutes: Routes = [
    {
        path: 'register',            
        component: RegisterComponent,
        children: [                         
            {
                path:'personal',
                component: PersonalComponent
            },
            {
                path:'work',
                component: WorkComponent
            },
            {
                path:'completed',
                component: CompletedComponent
            },
            {
                path:'id-proof',
                component: IdProofComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(parentModuleRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class RegisterRoutingModule { }