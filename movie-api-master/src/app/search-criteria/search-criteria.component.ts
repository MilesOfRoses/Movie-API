import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})

export class SearchCriteriaComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();
constructor() { }

handleSubmit(form) {
  this.onSearch.emit(form.value.subName);
}
 ngOnInit() {
  }
}
