import { Component, OnInit } from '@angular/core';
import { SearchCriteriaService } from '../search-criteria/search-criteria.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private searchService: SearchCriteriaService) { }
  addToWatchlist(movieTitle) {
    console.log(`The movie ${movieTitle} was added to the watchlist` );
    return movieTitle;
  }



  movieSearch: any[] = [];

  search(subName: string): void {
    console.log(subName);

    this.searchService
  .fetchData(subName)
  .subscribe((response: any) => {
    console.log(response);
    this.movieSearch = response.results;
  }, () => {
    console.log('oh no!');
  });
  }

  ngOnInit() {
  }
}
