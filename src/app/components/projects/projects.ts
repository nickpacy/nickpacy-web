import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string; icon: 'github' | 'external' }[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Algotee',
      description:
        'Independently designed, built, and operate a full-stack SaaS application. Architected cloud infrastructure on AWS including EC2, Lambda, API Gateway, RDS, and S3. Real-time notifications via push, SMS, and email supporting 5,000+ automated alerts per month. Currently invite-only with active users.',
      tags: ['Angular', 'Next.js', 'Node.js', 'AWS', 'SQL', 'TypeScript'],
      links: [
        { label: 'Visit Site', href: 'https://algotee.com', icon: 'external' },
      ],
    },
    {
      title: 'Pacy Reservations',
      description:
        'Personal full-stack reservation booking application. Handles scheduling, availability management, and booking confirmations with a clean, user-friendly interface.',
      tags: ['Angular', 'Node.js', 'SQL', 'TypeScript'],
      links: [
        { label: 'GitHub', href: '#', icon: 'github' },
      ],
    },
    {
      title: 'Edward Martin Law',
      description:
        'Professional website for an attorney. Clean, fast, and accessible design focused on communicating credibility and making it easy for clients to get in touch.',
      tags: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Visit Site', href: 'https://www.edwardmartinlaw.com', icon: 'external' },
      ],
    },
  ];
}
