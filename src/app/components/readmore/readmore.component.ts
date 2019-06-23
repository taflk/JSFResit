import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {
  @Input() specificCard;

  constructor() { }

  ngOnInit() {
  }

}
