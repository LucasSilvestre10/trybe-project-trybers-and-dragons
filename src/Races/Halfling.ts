import Race from './Race';

class Halfling extends Race {
  static _racesInstances = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling._racesInstances += 1;
  }

  static createdRacesInstances():number {
    return Halfling._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;