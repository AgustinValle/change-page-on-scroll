import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';
declare var require: any;

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
})
export class BottomComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.addStyle('bottom', require('./bottom.component.css'));
  }

  ngOnDestroy() {
    this.coreService.removeStyle('bottom');
  }

}
