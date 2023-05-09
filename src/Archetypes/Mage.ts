import type { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _instances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
    
  ) {
    super(name);
    Mage._instances += 1;
  }

  static createdArchetypeInstances() {
    return Mage._instances;
  }

  public get energyType() {
    return this._energyType;
  }
}

export default Mage;