import {Component} from '@angular/core';

@Component({
  selector: 'main-page',
  template: `
    <mat-tab-group>
      <mat-tab label="Character Details">
        <main-form></main-form>
      </mat-tab>
      <mat-tab label="Character Sheet Preview">
        <main-preview></main-preview>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./main.page.scss']
})
export class MainPage {

}
