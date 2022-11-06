import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from './models';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  constructor(private placesService: PlacesService, private router: Router) {}
  places: Place[] = [];

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
  }

  ionViewWillEnter(): void { //Metodo propio de Ionic
    this.places = this.placesService.getPlaces();
  }

  goToAddPlace(): void {
    this.router.navigate(['/new-place']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
