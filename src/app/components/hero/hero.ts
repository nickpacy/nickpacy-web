import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  roles = ['Full Stack Engineer', 'Application Developer', 'Data Analyst'];
  currentRoleIndex = 0;

  constructor() {
    setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    }, 3200);
  }

  get currentRole(): string {
    return this.roles[this.currentRoleIndex];
  }
}
