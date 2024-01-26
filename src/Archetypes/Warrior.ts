import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType : EnergyType = 'stamina';
  static counterArchetypes = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.counterArchetypes += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counterArchetypes;
  }
}

export default Warrior;