import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../../service/character.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ExportService} from '../../../service/export.service';
import {Character, CharacterModel} from '../../../model/character.model';

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

  constructor(private characterService: CharacterService, private exportService: ExportService) {
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
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.loadCharacter(reader.result.toString());
      };

      reader.readAsText(inputNode.files[0]);
    }
  }

  private loadCharacter(serialized: string): void {
    let parsed: CharacterModel = JSON.parse(serialized);
    let character = new Character(parsed);
    this.characterService.character = character;

    this.characterNameControl.setValue(character.name);
  }
}
