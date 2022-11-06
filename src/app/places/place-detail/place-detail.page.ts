import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
import { Place } from '../models';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const placeId = paramMap.get('id');
      this.place = this.placesService.getPlace(placeId);
    });
  }

  async removePlace(): Promise<void> {
    const alertElement = await this.alert.create({    // creacion de alert
      header: 'Delete place',
      message: 'Are you sure you want to delete it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            this.placesService.removePlace(this.place.id);
            this.router.navigate(['/places']);
          },
        },
      ],
    });

    alertElement.present(); // muestra el alert
  }
}
