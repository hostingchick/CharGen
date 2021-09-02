import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../../service/character.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ExportService} from '../../../service/export.service';
import {ImportService} from '../../../service/import.service';

@Component({
  selector: 'main-form',
  template: `
    <button type="button" mat-raised-button (click)="fileInput.click()">Import</button>
    <input hidden (change)="import()" #fileInput type="file" id="file">
    <button type="button" mat-raised-button (click)="export()">Export</button>
    <mat-form-field>
      <mat-label>Character Name</mat-label>
      <input matInput [formControl]="characterNameControl"/>
    </mat-form-field>
  `,
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  characterNameControl: FormControl = new FormControl();

  formGroup: FormGroup;

  constructor(
    private characterService: CharacterService,
    private exportService: ExportService,
    private importService: ImportService
  ) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      characterName: this.characterNameControl
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.characterService.character.name = value.characterName;
    });
  }

  export(): void {
    this.exportService.export();
  }

  import() {
    this.importService.import();
    this.loadCharacter();
  }

  private loadCharacter(): void {
    this.characterNameControl.setValue(this.characterService.character.name);
  }
}
