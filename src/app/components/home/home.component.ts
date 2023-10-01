import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user$=this.authService.currentUser$;

  constructor(private authService:AuthenticationService) {}

}
