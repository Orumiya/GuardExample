import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VipComponent } from './vip/vip.component';
import { NormalComponent } from './normal/normal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { VipService } from './service/vip.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraContentComponent } from './extra-content/extra-content.component';
import { ClickedRouteGuard } from './guard/click.guard';
import { VipRouteGuard } from './guard/vip.guard';
import { SomeService } from './service/some.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VipComponent,
    NormalComponent,
    ExtraContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [VipService, SomeService, ClickedRouteGuard, VipRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
