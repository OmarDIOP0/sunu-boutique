import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-selling-product',
  imports: [CommonModule],
  templateUrl: './best-selling-product.component.html',
  styleUrl: './best-selling-product.component.css'
})
export class BestSellingProductComponent {


  scrollCarousel(direction: number) {
    const carousel = document.querySelector('.carousel-best-selling');
    const scrollAmount = 300; // Valeur de défilement en pixels

    if (carousel) {
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
