import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ICarouselItem } from './carousel/carousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from './carousel/carousel.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  title = 'carousel';
}
