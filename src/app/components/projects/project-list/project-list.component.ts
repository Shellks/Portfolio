import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityComponent } from '../../header/identity/identity.component';
import { ContactComponent } from '../../contact/contact.component';
import { LanguageComponent } from '../../header/language/language.component';
import { HeaderComponent } from '../../header/header.component';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';

@Component({
  selector: 'app-project-list',
  imports: [
    CommonModule,
    HeaderComponent,
    ProjectPreviewComponent,
    ContactComponent,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})

export class ProjectListComponent {
  selectedProject: string = 'kingPong'
  
}
