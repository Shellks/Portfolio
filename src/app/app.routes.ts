import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';

export const routes: Routes = [
	{ 
		path: '',
		redirectTo: '/projects/kingpong',
		pathMatch: 'full'
	},
	{ 
		path: 'projects/:slug',
		component: ProjectListComponent
	}
  ];
