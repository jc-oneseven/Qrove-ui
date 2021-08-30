import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/lottie/dashboard.json',
  };
  constructor() {}

  ngOnInit(): void {}
}
