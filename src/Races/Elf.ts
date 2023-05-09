import Race from './Race';

class Elf extends Race {
  static _racesInstances = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf._racesInstances += 1;
  }

  static createdRacesInstances():number {
    return Elf._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;