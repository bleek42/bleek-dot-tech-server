import { Injectable } from '@nestjs/common';

export interface Project {
  id: string | number;
  title: string;
  description: string;
  techStack: string[];
  version: number;
}

@Injectable()
export class AppService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Trivia App',
      description:
        'a simple multi-choice trivia web application, consisting of 5 questions and answers with score tracking and conditional rendering',
      techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git', 'GitHub Pages'],
      version: 1.0,
    },
    {
      id: 2,
      title: 'Bookmark App',
      description:
        'a bookmark web application that uses a backend server to save a users favorite websites.',
      techStack: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'Git',
        'NPM',
        'GitHub Pages',
        'API',
        'JSON',
      ],
      version: 1.0,
    },
    {
      id: 3,
      title: 'COVID-19 Message Board',
      description:
        'an anonymous message board designed for users from the 50 United States to share their personal stories of perseverance during the COVID-19 pandemic',
      techStack: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'NPM',
        'PostgreSQL',
        'Git',
        'Knex.js',
      ],
      version: 1.0,
    },
    ,
  ];

  get allProjects(): Project[] {
    return this.projects;
  }
}
