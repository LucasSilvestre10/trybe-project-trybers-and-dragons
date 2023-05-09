import Race from './Race';

class Dwarf extends Race {
  static _racesInstances = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf._racesInstances += 1;
  }

  static createdRacesInstances():number {
    return Dwarf._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;