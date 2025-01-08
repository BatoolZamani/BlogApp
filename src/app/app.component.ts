import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layouts/header/header.component";
import { CategoryNavbarComponent } from "./Layouts/category-navbar/category-navbar.component";
import { FooterComponent } from './Layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CategoryNavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-blog-app';
}
