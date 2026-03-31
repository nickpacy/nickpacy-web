import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Role {
  title: string;
  type: string;
  period: string;
  duration: string;
  workStyle?: string;
  bullets: string[];
  tags?: string[];
  current?: boolean;
}

export interface CompanyEntry {
  company: string;
  location: string;
  totalDuration?: string;
  roles: Role[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  companies: CompanyEntry[] = [
    {
      company: 'Northrop Grumman',
      location: 'San Diego, CA',
      totalDuration: '6 yrs 10 mos',
      roles: [
        {
          title: 'Staff Software Developer Analyst',
          type: 'Full-time',
          period: 'Oct 2024 – Present',
          duration: '1 yr 6 mos',
          workStyle: 'Remote (Boston, MA)',
          current: true,
          bullets: [
            'Design and deliver secure, classified full-stack applications using .NET, Angular, and SQL.',
            'Lead architecture for large-scale data platforms processing hundreds of millions of records.',
            'Build ETL pipelines and real-time analytics that drive program-level decision making.',
            'Contribute to internal LLM and AI-assisted development initiatives.',
          ],
          tags: ['.NET', 'Angular', 'SQL', 'ETL', 'Python', 'Tableau'],
        },
        {
          title: 'System Engineering Manager',
          type: 'Full-time',
          period: 'Apr 2023 – Oct 2024',
          duration: '1 yr 7 mos',
          workStyle: 'Hybrid',
          bullets: [
            'Managed and mentored a team of 10 engineers while staying hands-on technically.',
            'Grew the team\'s analytics capabilities and delivery practices.',
            'Earned Employee of the Month for analytics impact at the program level.',
          ],
          tags: ['Team Leadership', 'Agile', 'Tableau'],
        },
        {
          title: 'Senior Principal Software Developer Analyst',
          type: 'Full-time',
          period: 'Sep 2022 – Apr 2023',
          duration: '8 mos',
          workStyle: 'Hybrid',
          bullets: [
            'Modernized enterprise applications using .NET Core, Angular, and SQL.',
            'Worked directly with customers to replace legacy systems with scalable solutions.',
            'Mentored teammates on Tableau and data visualization best practices.',
          ],
          tags: ['.NET Core', 'Angular', 'SQL', 'Tableau'],
        },
        {
          title: 'Principal Software Developer Analyst',
          type: 'Full-time',
          period: 'Apr 2020 – Sep 2022',
          duration: '2 yrs 6 mos',
          workStyle: 'Hybrid',
          bullets: [
            'Led development of a supply chain lead-time application that was adopted enterprise-wide.',
            'Built internal tools that grew beyond their original scope into standard platforms.',
            'Served as technical lead working closely with business leaders and transformation teams.',
          ],
          tags: ['Tableau', 'SQL', 'Angular', '.NET'],
        },
        {
          title: 'Computer System Analyst',
          type: 'Contract',
          period: 'Jun 2019 – Apr 2020',
          duration: '11 mos',
          bullets: [],
        },
      ],
    },
    {
      company: 'Marathon Health',
      location: 'Winooski, VT',
      roles: [
        {
          title: 'Database Reporting Engineer',
          type: 'Full-time',
          period: 'Feb 2016 – Mar 2018',
          duration: '2 yrs 2 mos',
          bullets: [
            'Led an initiative to optimize SQL stored procedures and improve overall database structure.',
            'Built internal tools that automated manual workflows for the Business Intelligence team.',
            'Wrote custom SQL queries to give external clients access to employee health and incentive data.',
            'Designed reports using Visual Studio for report servers and internal intranet pages.',
            'Ensured strict HIPAA compliance when handling sensitive health data.',
            'Integrated Qlik data visualization dashboards in collaboration with the Development team.',
          ],
          tags: ['SQL', 'SSRS', 'SSIS', 'Qlik', 'Visual Studio'],
        },
      ],
    },
    {
      company: 'Sikorsky Aircraft',
      location: 'Stratford, CT',
      roles: [
        {
          title: 'Engineering Business Operations Analyst',
          type: 'Full-time',
          period: 'Feb 2014 – Jan 2016',
          duration: '2 yrs',
          workStyle: 'On-site',
          bullets: [
            'Built custom web applications for Senior Management using multiple languages and databases.',
            'Automated report generation for Senior Management using Excel VBA and Access.',
            'Built and maintained databases for the Research and Engineering Department.',
            'Gathered and analyzed data to surface trends and present findings to stakeholders.',
            'Handled ad hoc data and reporting requests from managers across the country.',
          ],
          tags: ['SQL', 'VBA', 'Excel', 'Access', 'HTML/CSS'],
        },
      ],
    },
  ];
}
