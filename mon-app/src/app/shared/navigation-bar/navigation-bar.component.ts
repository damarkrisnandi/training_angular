import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(
    private router: Router
  ) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
