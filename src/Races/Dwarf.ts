import Race from './Race';

class Dwarf extends Race {
  private MAXLifePoints = 80;
  private static CREATEDRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.CREATEDRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.MAXLifePoints;
  }

  static createdRacesInstances(): number {
    return this.CREATEDRacesInstances;
  }
}

export default Dwarf;