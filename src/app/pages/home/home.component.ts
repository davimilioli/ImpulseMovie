import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
/*   titleVitrine = 'Populares';
  typeListVitrine = 'popular'; */
  term?: string = '';
  movies: any[] = [];

  constructor(
    private tdmbService: TmdbService,
    private router: Router
  ){}

  ngOnInit(){

  }

  searchTerm(){
    this.router.navigate(['/search'], {queryParams: {term: this.term}});
    console.log('buscando por: ', this.term);
  }



}
