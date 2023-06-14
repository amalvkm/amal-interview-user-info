import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-education-qualification',
  templateUrl: './education-qualification.component.html',
  styleUrls: ['./education-qualification.component.css'],
})
export class EducationQualificationComponent implements OnInit {
  education: Education = new Education();

  educations: Education[] = [];
  constructor() {}

  ngOnInit(): void {}

  onNewEducationAdded() {
    this.educations.push({ ...this.education });
    this.education = new Education();
  }
}
