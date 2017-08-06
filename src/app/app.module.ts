import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LeavesComponent } from './leaves/leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    QuickSidebarComponent,
    ProfileComponent,
    LeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
