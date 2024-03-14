import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule],
  declarations: [AppComponent, LoginComponent],
})
export class AppModule {}
