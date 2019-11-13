import { Component, OnInit, ɵConsole } from '@angular/core';
import { SearchCriteriaService } from '../search-criteria/search-criteria.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private searchService: SearchCriteriaService) { }

  watchlist = ['Example saved movie 1', 'Example saved movie 2', 'Example saved movie 3' ];

  addToWatchlist(movieTitle) {
    console.log(`The movie ${movieTitle} was added to the watchlist` );
    this.watchlist.unshift(movieTitle);  // add to the array
    console.log(this.watchlist);
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
