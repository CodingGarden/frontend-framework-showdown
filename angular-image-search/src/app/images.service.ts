import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) { }

  API_URL = 'https://api.500px.com/v1/photos/search?type=photos&image_size%5B%5D=14&consumer_key=your-api-key-here&include_states=true&formats=jpeg&exclude_nude=true';

  search(searchTerm) {
    const url = `${this.API_URL}&term=${searchTerm}`;
    return this.http.get(url);
  }
}
