import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  imports: [CommonModule],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent {
  activeTab: string = 'all';

  products = [
    {
      name: 'Sunstar Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '1,480,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar0 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar1 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar2 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar2 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },{
      name: 'Sunstar3 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar4 Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Master Fresh Melon Juice',
      image: 'assets/images/logo.png',
      unit: '1 Unit',
      rating: 4.5,
      price: '18,000',
      oldPrice: '25,000',
      discount: '-30%',
      quantity: 0
    },
    {
      name: 'Sunstar Fresh Melon Juice',image: 'assets/images/logo.png',unit: '1 Unit',rating: 4.5,price: '18,000',
      oldPrice: '25,000',discount: '-30%',quantity: 0
    },
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }
  decreaseQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  addToCart(product: any) {
    console.log('Product added to cart:', product);
  }

  scrollCarousel(direction: number) {
    const carousel = document.querySelector('.carousel-popular-products');
    const scrollAmount = 300; // Valeur de défilement en pixels

    if (carousel) {
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }

}
