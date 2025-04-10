import { Component } from '@angular/core';
import { IdentityComponent } from './identity/identity.component';
import { LanguageComponent } from './language/language.component';

@Component({
  selector: 'app-header',
  imports: [
    IdentityComponent,
    LanguageComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
