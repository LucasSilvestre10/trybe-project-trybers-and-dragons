import type { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _instances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._instances += 1;
  }

  static createdArchetypeInstances() {
    return Warrior._instances;
  }

  public get energyType() {
    return this._energyType;
  }
}

export default Warrior;