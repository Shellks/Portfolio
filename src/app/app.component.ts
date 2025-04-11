import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectStyleService } from './services/project-style.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  activeClass: string = 'project-kingpong';

  constructor(private styleService: ProjectStyleService) {}

  ngOnInit(): void {
    this.styleService.currentClass$.subscribe((styleClass: string) => {
      this.activeClass = styleClass;
    });
  }
}
