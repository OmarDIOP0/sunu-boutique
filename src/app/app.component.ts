import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { CategoryComponent } from './shared/layouts/category/category.component';
import { PromoComponent } from './shared/layouts/promo/promo.component';
import { NewBrandsComponent } from './shared/layouts/new-brands/new-brands.component';
import { TrendingProductComponent } from './shared/layouts/trending-product/trending-product.component';
import { AnnoncePromoComponent } from "./shared/layouts/annonce-promo/annonce-promo.component";
import { BestSellingProductComponent } from './shared/layouts/best-selling-product/best-selling-product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent,
           CategoryComponent, PromoComponent, NewBrandsComponent,
           TrendingProductComponent, AnnoncePromoComponent,BestSellingProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'e-commerce';
}
