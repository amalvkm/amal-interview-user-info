import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements OnInit {
  @Input() userInfo: UserInfo = new UserInfo();

  constructor() {}

  ngOnInit(): void {}
}
