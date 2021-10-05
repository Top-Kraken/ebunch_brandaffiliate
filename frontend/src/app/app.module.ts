import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { PackagesComponent } from './components/packages/packages.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { SidenavService } from './services/sidenav.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    PackagesComponent,
    LayoutComponent,
    LeftMenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    ChartsModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
