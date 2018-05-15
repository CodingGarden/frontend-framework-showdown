import { Component } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imagesService: ImagesService) { }

  title = 'Angular Image Search';
  searchTerm = '';
  loading = false;
  images = [];

  onSubmit() {
    this.loading = true;
    this.images = [];
    this.imagesService.search(this.searchTerm)
      .subscribe((result: any) => {
        this.images = result.photos;
        this.loading = false;
      });
  }
}
