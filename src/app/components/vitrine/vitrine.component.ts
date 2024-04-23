import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {
  vitrine?: Movie;
  @Input() typeList: string  = '';
  @Input() title: string = '';
  constructor(private tmdbService: TmdbService){}

  ngOnInit(){
    this.tmdbService.getMoviesVitrine(this.typeList).subscribe((result) => {
      this.vitrine = result;
    })
  }
  

}
