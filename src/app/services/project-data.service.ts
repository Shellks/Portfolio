import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  projects: {[key: string]: { title: string; description: string; styleClass: string }} = {
    'kingpong': {
      title: 'KingPong',
      description: 'Modern and competitive pong game',
      styleClass: 'kingpong-style'
    },
    'matcha': {
      title: 'Matcha',
      description: 'Dating app (Coming soon)',
      styleClass: 'matcha-style'
    },
    'hypertube': {
      title: 'Hypertube',
      description: '(Coming soon)',
      styleClass: 'hypertube-style'
    },
  };

  constructor() {}

  projectOrder: string[] = Object.keys(this.projects);
  
  getProjects() {
    return this.projects;
  }

  getProjectBySlug(slug: string) {
    return this.projects[slug];
  }

  getProjectTitles() {
    return Object.values(this.projects).map(project => project.title);
  }


  getProjectOrder() {
    return this.projectOrder;
  }
}