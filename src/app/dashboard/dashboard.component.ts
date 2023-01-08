import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { VipService } from '../service/vip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isVip: boolean = false;
  constructor(private router: Router, private vipService: VipService) { }

  ngOnInit(): void {
    this.vipService.isVip().subscribe(res => {
      this.isVip = res;
    });
  }

  onNormalClick(): void {
    this.router.navigate(['/normal']);
  }

  onVipClick(): void {
    this.router.navigate(['/vip']);
  }

  toggle($event: MatCheckboxChange): void {
    this.vipService.setVipStatus($event.checked);
  }

}
