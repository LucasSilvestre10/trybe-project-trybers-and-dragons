import type { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _instances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._instances += 1;
  }

  static createdArchetypeInstances() {
    return Ranger._instances;
  }

  public get energyType() {
    return this._energyType;
  }
}

export default Ranger;