import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectStyleService } from '../../../services/project-style.service';
import { ProjectDataService } from '../../../services/project-data.service';

@Component({
  selector: 'app-project-preview',
  imports: [],
  standalone: true,
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.css'
})


export class ProjectPreviewComponent {
  slug!: string;
  title!: string;
  description!: string;
  customClass: string = '';
  buttonText: string = 'view more';
  selectedProject: string = 'kingPong';
  projectOrder: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private styleService: ProjectStyleService,
    private projectDataService: ProjectDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.loadProjectData(this.slug);
    });
    this.projectOrder = this.projectDataService.getProjectOrder();
  }

  loadProjectData(slug: string): void {
    const project = this.projectDataService.getProjectBySlug(slug);
    if (project) {
      this.title = project.title;
      this.description = project.description;
      this.customClass = project.styleClass;
      this.router.navigate(['/projects/', slug]);
      this.styleService.setClass(project.styleClass);
    } else {
      this.router.navigate(['/projects/kingpong']);
    }
  }

  onRightClick(): void {
    const index = this.projectOrder.indexOf(this.slug);
    const nextIndex = (index + 1) % this.projectOrder.length;
    const nextProject = this.projectOrder[nextIndex];
    this.loadProjectData(nextProject);
  }

  onLeftClick() {
    const index = this.projectOrder.indexOf(this.slug);
    const prevIndex = (index - 1 + this.projectOrder.length) % this.projectOrder.length;
    const prevProject = this.projectOrder[prevIndex];
    this.loadProjectData(prevProject);
  }
}
