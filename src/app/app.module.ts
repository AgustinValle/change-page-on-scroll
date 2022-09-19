import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { MiddleComponent } from './features/middle/middle.component';
import { BottomComponent } from './features/bottom/bottom.component';
import { ScrollIconComponent } from './shared/components/scroll-icon/scroll-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiddleComponent,
    BottomComponent,
    ScrollIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
