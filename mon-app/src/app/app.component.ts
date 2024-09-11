import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-app';
}
