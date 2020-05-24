import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Category } from './category.interface';
import { Item } from './item.interface';
import { DataProviderService } from './data-provider.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public dataProvider: DataProviderService,
    public state: StateService) {

  }
}
