import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'search', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
