import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit, OnChanges {
  @Input() index : string = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

}
