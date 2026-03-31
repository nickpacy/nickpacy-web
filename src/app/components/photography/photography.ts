import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
}

@Component({
  selector: 'app-photography',
  imports: [CommonModule],
  templateUrl: './photography.html',
  styleUrl: './photography.scss',
})
export class Photography {
  // Portrait shots go in tall: true slots; landscape shots fill normal slots
  photos: Photo[] = [
    { src: 'pelican-portrait.jpeg',   alt: 'Brown pelican close-up',         tall: true  },
    { src: 'misty-sunrise.jpeg',      alt: 'Misty sunrise through trees',     tall: false },
    { src: 'sea-turtle.jpeg',         alt: 'Sea turtle underwater',           tall: false },
    { src: 'hummingbird-chicks.jpeg', alt: 'Hummingbird feeding chicks',      tall: true  },
    { src: 'forest-stream.jpeg',      alt: 'Forest stream with mossy rocks',  tall: false },
    { src: 'sea-lions.jpeg',          alt: 'Two sea lions nuzzling',          tall: false },
  ];
}
