import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';
  onSubmit(){
    this.userService.authenticate(this.username, this.password).subscribe(isValid => {
      this.loginMessage = isValid ? "Welcome" : "Invalid username/email or password";
    });
  }
  constructor(private userService: UserService) {}
}
