import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  experience: Experience = new Experience();

  constructor() {}

  ngOnInit(): void {}

  onNewExperienceAdded() {
    this.experiences.push({ ...this.experience });
    this.experience = new Experience();
  }
}
