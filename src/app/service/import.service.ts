import {Injectable} from '@angular/core';
import {CharacterService} from './character.service';
import {Character, CharacterModel} from '../model/character.model';

@Injectable()
export class ImportService {
  constructor(private characterService: CharacterService) {
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
  }
}
