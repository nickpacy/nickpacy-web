import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Degree {
  degree: string;
  field: string;
  year: string;
}

export interface School {
  name: string;
  location: string;
  logoUrl: string;
  logoAlt: string;
  degrees: Degree[];
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  schools: School[] = [
    {
      name: 'Quinnipiac University',
      location: 'School of Business, Hamden, CT',
      logoUrl: 'https://quchronicle.com/wp-content/uploads/2016/06/DoubleCut-Q_PMS-2965-C-1.jpg',        // populated once logo URL is confirmed
      logoAlt: 'Quinnipiac University',
      degrees: [
        { degree: 'Master of Science', field: 'Business Analytics', year: '2018' },
        { degree: 'Bachelor of Science', field: 'Computer Information Systems', year: '2016' },
      ],
    },
  ];
}
