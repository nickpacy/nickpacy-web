import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  highlights = [
    {
      icon: 'layers',
      title: 'Full Stack Development',
      description: 'End-to-end ownership across backend services, web applications, and databases built with .NET Core, Angular, Node.js, and Python.',
    },
    {
      icon: 'chart',
      title: 'Data Engineering',
      description: 'Building ETL pipelines, analytical reporting systems, and dashboards that process hundreds of millions of records using SQL, Python, and Tableau.',
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Designing and operating cloud infrastructure on AWS with Docker, CI/CD pipelines, and event-driven architectures at production scale.',
    },
    {
      icon: 'users',
      title: 'Technical Leadership',
      description: 'Progressed to staff-level engineer with experience managing a team of 10 engineers while maintaining hands-on ownership of complex systems.',
    },
  ];
}
