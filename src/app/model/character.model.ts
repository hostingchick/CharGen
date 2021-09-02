export interface CharacterModel {
  name: string;
}

export class Character implements CharacterModel {
  name: string;

  constructor(model?: CharacterModel) {
    if (!model) {
      return;
    }

    this.name = model.name;
  }
}
