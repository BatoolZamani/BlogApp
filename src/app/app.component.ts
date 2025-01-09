import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layouts/header/header.component";
import { CategoryNavbarComponent } from "./Layouts/category-navbar/category-navbar.component";
import { FooterComponent } from './Layouts/footer/footer.component';
import { PostCardComponent } from "./Layouts/post-card/post-card.component";
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent, PostCardComponent,SubscriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-blog-app';
}
