import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  language: string = 'EN'; // Default language

  onLanguageToggle(event: Event) {
    event.stopImmediatePropagation();
    this.language === 'EN' ? this.language = 'FR' : this.language = 'EN';
    console.log("Language toggled");
  }
}
