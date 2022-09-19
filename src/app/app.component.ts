import { trigger, state, style, transition, animate, animateChild, group, query } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { slider } from './shared/functions/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  animations: [slider],
})

export class AppComponent {
  private isScrollingUp: boolean = false;
  private urlList:string[] = ['/home', '/middle', '/bottom'];
  @HostListener('wheel', ['$event']) onScrollEvent(event:WheelEvent){
    this.isScrollingUp = event.deltaY < 0;
    const currentPageInx = this.urlList.findIndex((url)=>url=== this.router.url);
    const nextPage = currentPageInx > this.urlList.length-2 ? null : this.urlList[currentPageInx+1];
    const prevPage = currentPageInx ? this.urlList[currentPageInx-1] : null;
    setTimeout(() => {      
      if(this.isScrollingUp){
        if(prevPage){

          this.router.navigate([prevPage])
        }
      }
      else {
        if(nextPage){
          this.router.navigate([nextPage])
        }
      }      
    }, 100);
  }
  constructor(private router: Router){}

  prepareRoute() {
    return this.urlList.findIndex((url)=>url=== this.router.url);
 }
} 
