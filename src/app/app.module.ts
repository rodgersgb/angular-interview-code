import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginComponent],
})
export class AppModule {}
