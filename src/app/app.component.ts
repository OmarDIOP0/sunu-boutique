import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'e-commerce';
}
