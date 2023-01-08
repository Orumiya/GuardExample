import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VipRouteGuard } from './guard/vip.guard';
import { NormalComponent } from './normal/normal.component';
import { VipComponent } from './vip/vip.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'normal',
    component: NormalComponent
  },
  {
    path: 'vip',
    component: VipComponent,
    canActivate: [VipRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
