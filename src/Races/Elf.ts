import Race from './Race';

class Elf extends Race {
  private MAXLifePoints = 99;
  private static CREATEDRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.CREATEDRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.MAXLifePoints;
  }

  static createdRacesInstances(): number {
    return this.CREATEDRacesInstances;
  }
}

export default Elf;