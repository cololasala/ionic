import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=15'
    );
  }
}
