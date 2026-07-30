import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EMPRESA } from './constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal(EMPRESA);
  
  empresa: string = EMPRESA;
}
