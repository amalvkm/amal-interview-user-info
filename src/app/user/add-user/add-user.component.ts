import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();

  constructor() {}

  ngOnInit(): void {}
  
  onSubmit() {
    console.log(this.userInfo)
  }
}
