import {Injectable} from '@angular/core';
import {Character} from '../model/character.model';

@Injectable()
export class CharacterService {
  get character(): Character {
    return this._character;
  }

  set character(value: Character) {
    this._character = value;
  }

  private _character: Character = new Character();

  constructor() {
  }

}
