import { Component } from '@angular/core';
import {UserService} from './user/user.service';
import {User} from './models/User';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-java';
  form: FormGroup;
  name: FormControl = new FormControl('');
  users: User[];
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: this.name
    });
  }

  save(form: FormGroup): void{
    console.log(form.value.name);
    this.userService.saveUser({name: `${form.value.name}`}).subscribe(user => this.users = user);
  }
}
