import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  label: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      label: 'Frontend',
      icon: 'monitor',
      skills: [
        { name: 'Angular', level: 5 },
        { name: 'TypeScript / JavaScript', level: 5 },
        { name: 'Next.js', level: 4 },
        { name: 'HTML / CSS', level: 5 },
        { name: 'Tailwind CSS', level: 4 },
      ],
    },
    {
      label: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Node.js', level: 5 },
        { name: 'Python', level: 5 },
        { name: '.NET Core / C#', level: 5 },
        { name: 'REST APIs', level: 5 },
        { name: 'GraphQL', level: 4 },
      ],
    },
    {
      label: 'Data & Analytics',
      icon: 'database',
      skills: [
        { name: 'SQL', level: 5 },
        { name: 'Tableau', level: 5 },
        { name: 'SSIS / SSRS', level: 4 },
        { name: 'Power Automate / Power Apps', level: 4 },
        { name: 'ETL Pipelines', level: 5 },
      ],
    },
    {
      label: 'Cloud & DevOps',
      icon: 'cloud',
      skills: [
        { name: 'AWS', level: 5 },
        { name: 'Docker', level: 4 },
        { name: 'CI/CD Pipelines', level: 4 },
        { name: 'Azure DevOps', level: 4 },
        { name: 'Git', level: 5 },
      ],
    },
  ];

  levelLabel(n: number): string {
    return ['', 'Beginner', 'Familiar', 'Proficient', 'Advanced', 'Expert'][n] ?? '';
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
