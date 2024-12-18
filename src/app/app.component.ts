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
import { NewLetterComponent } from './shared/layouts/new-letter/new-letter.component';
import { PopularProductsComponent } from "./shared/layouts/popular-products/popular-products.component";
import { RecentlyArrivedComponent } from "./shared/layouts/recently-arrived/recently-arrived.component";
import { BlogComponent } from './shared/layouts/blog/blog.component';
import { PeopleLookingComponent } from './shared/layouts/people-looking/people-looking.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent,
    CategoryComponent, PromoComponent, NewBrandsComponent,
    TrendingProductComponent, AnnoncePromoComponent, BestSellingProductComponent,
    NewLetterComponent, PopularProductsComponent, PopularProductsComponent, RecentlyArrivedComponent,
    BlogComponent, PeopleLookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'e-commerce';
}
