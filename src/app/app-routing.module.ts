import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomComponent } from './features/bottom/bottom.component';
import { HomeComponent } from './features/home/home.component';
import { MiddleComponent } from './features/middle/middle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'middle', component: MiddleComponent },
  { path: 'bottom', component: BottomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
