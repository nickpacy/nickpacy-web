import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // Update these with real URLs when ready
  linkedInUrl = 'https://linkedin.com/in/nickpacy';
  githubUrl   = 'https://github.com/nickpacy';

  currentYear = new Date().getFullYear();
}
