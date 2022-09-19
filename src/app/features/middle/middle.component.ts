import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';
declare var require: any;

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html'
})
export class MiddleComponent implements OnInit {
  
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.addStyle('middle', require('./middle.component.css'));
  }

  ngOnDestroy() {
    this.coreService.removeStyle('middle');
  }

}
