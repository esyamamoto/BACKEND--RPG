import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType : EnergyType = 'mana';
  static counterArchetypes = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.counterArchetypes += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counterArchetypes;
  }
}

export default Necromancer;