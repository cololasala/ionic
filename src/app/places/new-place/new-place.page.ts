import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.page.html',
  styleUrls: ['./new-place.page.scss'],
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private router: Router) { }

  saveNewPlace(title: string, imageUrl: string): void {
    this.placesService.addPlace(title, imageUrl);
    this.router.navigate(['/places']);
  }

}
