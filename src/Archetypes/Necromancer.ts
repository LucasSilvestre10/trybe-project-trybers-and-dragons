import type { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',    
  ) {
    super(name);
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer._instances;
  }

  public get energyType() {
    return this._energyType;
  }
}

export default Necromancer;