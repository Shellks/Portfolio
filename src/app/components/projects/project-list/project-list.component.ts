import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { ContactComponent } from '../../contact/contact.component';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDataService } from '../../../services/project-data.service';

@Component({
  selector: 'app-project-list',
  imports: [
    CommonModule,
    HeaderComponent,
    ContactComponent,
    ProjectPreviewComponent
  ],
  standalone: true,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})

export class ProjectListComponent {
  slug!: string;
  title!: string;
  description!: string;
  customClass: string = '';
  selectedProject: string = 'kingPong'
  projectsTitles: string [] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectDataService: ProjectDataService
  ) {}

  ngOnInit(): void {
    this.projectsTitles = this.projectDataService.getProjectTitles();

    console.log(this.projectsTitles);
    
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.loadProjectData(this.slug);
    });
  }

  loadProjectData(slug: string): void {
    const project = this.projectDataService.getProjectBySlug(slug);
    if (project) {
      this.title = project.title;
      this.description = project.description;
      this.customClass = project.styleClass;
    } else {
      this.router.navigate(['/projects/kingpong']);
    }
  }
}
