import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SomeService } from '../service/some.service';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit{

  currentClicks!: Observable<number>;

  constructor(private someService: SomeService) { }

  ngOnInit(): void {
    this.currentClicks = this.someService.currentNumberOfClicksObs;
  }

  onClick(): void {
    this.someService.buttonClickCount();
  }

}
