import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { CategoryComponent } from './shared/layouts/category/category.component';
import { PromoComponent } from './shared/layouts/promo/promo.component';
import { NewBrandsComponent } from './shared/layouts/new-brands/new-brands.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,HeaderComponent,CategoryComponent,PromoComponent,NewBrandsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'e-commerce';
}
