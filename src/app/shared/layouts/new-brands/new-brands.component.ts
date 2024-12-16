import { Component } from '@angular/core';

@Component({
  selector: 'app-new-brands',
  imports: [],
  templateUrl: './new-brands.component.html',
  styleUrl: './new-brands.component.css'
})
export class NewBrandsComponent {

  scrollCarousel(direction: number) {
    const carousel = document.querySelector('.carousel-brands');
    const scrollAmount = 300; // Valeur de défilement en pixels

    if (carousel) {
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

}
