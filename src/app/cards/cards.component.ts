import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.interface';
import { ShowType } from '../state.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() selectedItem: Item;
  @Input() show: ShowType;
  constructor() { }

  ngOnInit(): void {
  }

}
