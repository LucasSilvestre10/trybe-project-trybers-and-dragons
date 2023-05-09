import Race from './Race';

class Orc extends Race {
  static _racesInstances = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc._racesInstances += 1;
  }

  static createdRacesInstances():number {
    return Orc._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;