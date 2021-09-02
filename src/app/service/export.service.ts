import {Injectable} from '@angular/core';
import {saveAs} from 'file-saver';
import {CharacterService} from './character.service';

@Injectable()
export class ExportService {
  constructor(private characterService: CharacterService) {
  }

  export(): void {
    let char = this.characterService.character;
    let charJson = JSON.stringify(char);
    let blob = new Blob([charJson], {type: "application/json"});
    let filename = '[CHARGEN] ' + this.characterService.character.name + '.json';
    saveAs(blob, filename);
  }
}
