import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.addStyle('home', require('./home.component.css'));
  }

  ngOnDestroy() {
    this.coreService.removeStyle('home');
  }

}
