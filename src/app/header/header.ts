import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {}
