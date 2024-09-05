import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlickityDirective } from 'ngx-metafizzy-flickity';
import Flickity from 'flickity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    FlickityDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  flickityInstance: Flickity | undefined;

  ngAfterViewInit(): void {
    this.flickityInstance = new Flickity('.carousel', {
      cellAlign: 'left',
      contain: true,
      wrapAround: true
    });
  }
}