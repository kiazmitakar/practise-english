import { Component } from '@angular/core';
import { Category } from './category.interface';
import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categoryList: Category[] = [
    <Category>{
      name: "Simple blabla", itemList: [
        <Item>{ eng: "baby", hun: "baba" }, <Item>{ eng: "baby1", hun: "baba1" }
        , <Item>{ eng: "car", hun: "auto" }, <Item>{ eng: "baby2", hun: "baba2" }, <Item>{ eng: "baby3", hun: "baba3" }
      ]
    },
    <Category>{
      name: "Past blabla", itemList: [
        <Item>{ eng: "baby7", hun: "baba7" }, <Item>{ eng: "baby8", hun: "baba8" }
        , <Item>{ eng: "baby6", hun: "baba6" }, <Item>{ eng: "baby5", hun: "baba5" }, <Item>{ eng: "baby4", hun: "baba4" }
      ]
    }
  ];

  selectedItem: Item;

  nextItem() {
    let randCategory = Math.floor(Math.random() * this.categoryList.length);
    let randItem = Math.floor(Math.random() * this.categoryList[randCategory].itemList.length);

    this.selectedItem = this.categoryList[randCategory].itemList[randItem];
  }
}
