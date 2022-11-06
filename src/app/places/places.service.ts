import { Injectable } from '@angular/core';
import { Place } from './models';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  places: Place[] = [
    {
      id: '1',
      title: 'Tower eiffel',
      imageUrl:
        'https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg',
      comments: ['wonderful place', 'awesome place'],
    },
    {
      id: '2',
      title: 'Status liberty',
      imageUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg?w=1200&h=-1&s=1',
      comments: ['wonderful place', 'awesome place'],
    },
    {
      id: '3',
      title: 'Machu picchu',
      imageUrl:
        'http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg',
      comments: [],
    },
  ];

  getPlaces(): Array<Place> {
    return [...this.places];
  }

  getPlace(id: string): Place {
    return { ...this.places.find((place) => place.id === id) };
  }

  addPlace(title: string, imageUrl: string): void {
    this.places.push({
      id: String(this.places.length + 1),
      title,
      imageUrl,
      comments: [],
    });
  }

  removePlace(id: string): void {
    this.places = this.places.filter((place) => place.id !== id);
  }
}
