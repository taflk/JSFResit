import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {

  @Input() pokemon;

  constructor() { }

  ngOnInit() {
  }

}
