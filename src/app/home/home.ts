import { Component } from '@angular/core';
import { EMPRESA } from '../constants';
 
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  empresa: string = EMPRESA;

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
