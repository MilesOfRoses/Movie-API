import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  constructor() {  }
  // addToWatchlist() {
  //   console.log('Add to watchlist button was pressed');
  // }

  ngOnInit() {
  }

}
