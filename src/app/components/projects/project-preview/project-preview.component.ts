import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  imports: [
    ProjectPreviewComponent
  ],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.css'
})
export class ProjectPreviewComponent {
  title!: string;
  description!: string;
  buttonText: string = "See more"; 

  ngOnInit(): void {
    if (this.title === undefined || this.description === undefined) {
      this.setDefaultValues();
    }
  }

  setDefaultValues() {
    this.title = "KingPong";
    this.description = "Modern and competitive pong game";
  }

  onRightClick() {
    console.log("Right click detected");
  }

  onLeftClick() {
    console.log("Left click detected");
  }
}
