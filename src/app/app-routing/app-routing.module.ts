import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: '**',
        component: DashboardComponent,
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
