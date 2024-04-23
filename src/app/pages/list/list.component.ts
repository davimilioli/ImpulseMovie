import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  searchTerm: string = '';
  listResult?: Movie
  
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ){}

/*   ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['term'];
      this.tmdbService.search(this.searchTerm, {page: '1'}).subscribe((itens) => {
        this.listResult = itens
      })
    })
  } */

}
