import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../MovieDetail';
import { TmdbService } from '../../services/tmdb.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  movie?: MovieDetail;

  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
    private router: Router
  ){}

/*   ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tmdbService.getMovie(id).subscribe((item) => this.movie = item);
  } */

}
